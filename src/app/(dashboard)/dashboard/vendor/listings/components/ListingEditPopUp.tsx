'use client'

import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import FormInput from '@/app/(dashboard)/components/FormInput'
import FullPageLoader from '@/app/(landing)/components/Loader/FullPageLoader'
import { useFetchCategoriesQuery } from '@/redux/features/categories/apiSlice'
import {
  useUpdateServiceMutation,
  type IPrice,
  type ServiceItem,
  type ServiceItemPost
} from '@/redux/features/services/apiSlice'
import { daysOfWeek } from '@/utils'
import { PlusCircleIcon, TrashIcon } from '@heroicons/react/16/solid'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import 'react-quill-new/dist/quill.snow.css' // Import the Quill CSS styles
import Swal from 'sweetalert2'
import FixedPrice from '../add-new/components/FixedPrice'
import Hourly from '../add-new/components/Hourly'
import Inclusions from '../add-new/components/Inclusions'
import MultiplePrice from '../add-new/components/MultiplePrice'
import SecurityDeposit from '../add-new/components/SecurityDeposit'

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })

interface PopupProps {
  tableData?: ServiceItem | ServiceItemPost | null
  isOpen: boolean
  onClose: () => void
  title?: string
}
type OptionType = {
  value: string
  title: string
}

const ListingEditPopUp: React.FC<PopupProps> = ({ tableData, isOpen, onClose, title = 'Edit Listing' }) => {
  const [file, setFile] = useState<File | null>(null)
  const [pricingType, setPricingType] = useState<string>('hourly')
  const [options, setOptions] = useState<OptionType[]>([])
  const [formData, setFormData] = useState<ServiceItemPost>({
    user: '',
    title: '',
    description: '',
    slug: `luxury-${Date.now()}`,
    featured_image: file,
    category: '',
    location: '',
    inclusions: [],
    infos: [],
    is_featured: false,
    price_type: 'hourly',
    price: [],
    security_deposit: 0,
    cancellation_period_hours: 48,
    availability: [{ days: 'mon', start_time: '', end_time: '' }],
    is_unavailable: false,
    status: 'draft'
  })
  const { data } = useFetchCategoriesQuery()
  const [updateService] = useUpdateServiceMutation()
  const [loading, setLoading] = useState(false)
  const catData = data?.data
  useEffect(() => {
    if (tableData) {
      setFormData({
        _id: tableData?._id || '',
        user: typeof tableData.user === 'object' ? tableData.user._id || '' : tableData.user || '',
        title: tableData.title || '',
        description: tableData.description || '',
        slug: tableData.slug || '',
        featured_image: tableData?.featured_image || file || null,
        category:
          typeof tableData.category === 'object' ? tableData.category.title || '' : tableData.category || '',
        location:
          typeof tableData.location === 'object'
            ? tableData.location._id || '672358bf8d9a6dbaaffbf3d5'
            : tableData.location || '672358bf8d9a6dbaaffbf3d5',
        inclusions: Array.isArray(tableData?.inclusions) ? tableData.inclusions : [],
        price_type: tableData.price_type || 'hourly',
        price:
          Array.isArray(tableData.price) && tableData.price.length > 0
            ? tableData.price.map(item => ({
                text: item.text || '',
                value: item.value || '',
                _id: item._id || ''
              }))
            : [],
        security_deposit: tableData.security_deposit || 0,
        cancellation_period_hours: tableData.cancellation_period_hours || 48,
        availability: tableData.availability || [{ days: 'mon', start_time: '', end_time: '' }],
        is_unavailable: tableData.is_unavailable || false,
        status: tableData.status || ''
      })
    }
  }, [tableData, file])
  useEffect(() => {
    if (!catData) {
      setOptions([])
      return
    }
    const formattedOptions = catData?.map(cat => ({
      value: cat._id || '',
      title: cat.title || 'Untitled'
    }))
    setOptions(formattedOptions)
  }, [catData])

  const handleChange = <T extends keyof ServiceItemPost>(field: T, value: ServiceItemPost[T]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }
  const handleAddAvailability = () => {
    const updatedAvailability = [...formData.availability, { days: 'Mon', start_time: '', end_time: '' }]
    handleChange('availability', updatedAvailability)
  }

  const handleRemoveAvailability = (index: number) => {
    const updatedAvailability = formData.availability.filter((_, i) => i !== index)
    handleChange('availability', updatedAvailability)
  }
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null
    if (selectedFile) {
      setFile(selectedFile)
    }
  }

  const handleContentChange = (content: string) => {
    handleChange('description', content)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Create FormData and append fields
    const formDataToSubmit = new FormData()
    formDataToSubmit.append('_id', formData._id?.toString() || '')
    formDataToSubmit.append('user', formData.user?.toString() || '')
    formDataToSubmit.append('title', formData.title || '')
    formDataToSubmit.append('description', formData.description || '')
    formDataToSubmit.append('slug', formData.slug || '')
    formDataToSubmit.append('category', formData?.category || '')
    formDataToSubmit.append('featured_image', file || '')
    formDataToSubmit.append('location', '672358bf8d9a6dbaaffbf3d5')
    formDataToSubmit.append('inclusions', JSON.stringify(formData.inclusions))
    formDataToSubmit.append('price_type', formData.price_type || '')
    formData?.price?.forEach((price: IPrice, index) => {
      formDataToSubmit.append(`price[${index}][text]`, price.text || '')
      formDataToSubmit.append(`price[${index}][value]`, '200')
    })
    formDataToSubmit.append(
      'security_deposit',
      formData?.security_deposit ? formData?.security_deposit.toString() : '0'
    )
    formDataToSubmit.append(
      'cancellation_period_hours',
      formData.cancellation_period_hours ? formData.cancellation_period_hours.toString() : '48'
    )
    formDataToSubmit.append(
      'is_unavailable',
      formData.is_unavailable ? formData.is_unavailable.toString() : 'false'
    )
    formDataToSubmit.append('status', formData.status || 'publish')

    try {
      if (!tableData?._id) {
        throw new Error('Service ID is missing')
      }

      await updateService({
        _id: tableData._id.toString(),
        formData: formDataToSubmit
      }).unwrap()

      Swal.fire({
        title: 'Success!',
        text: 'Service edited successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
        background: '#f4f7fb',
        color: '#4caf50'
      })
    } catch (err) {
      console.error('Failed to edit service:', err)
      Swal.fire({
        title: 'Error!',
        text: 'Failed to edit service. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
        background: '#f4f7fb',
        color: '#f44336'
      })
    } finally {
      setLoading(false)
      onClose()
    }
  }

  if (loading) {
    return <FullPageLoader type="loading" />
  }
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
        isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="relative w-full max-w-3xl rounded-lg bg-white p-3 shadow-xl lg:p-6">
        <div className="mb-6 flex items-center justify-between border-b pb-3">
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="size-8 rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300 hover:text-gray-700"
            aria-label="Close"
          >
            ✖
          </button>
        </div>
        <div className="no-scroll max-h-[80vh] overflow-y-auto px-2 pb-3 lg:px-6 lg:pb-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {options?.length && (
              <FormInput
                name="categories"
                label="Categories"
                type="select"
                customClass="mb-4"
                catData={true}
                options={options}
                onChange={e => handleChange('category', e.target.value)}
              />
            )}
            <FormInput
              name="title"
              label="Title"
              type="text"
              placeholder="Enter title"
              customClass="mb-4"
              value={formData.title || ''}
              onChange={e => handleChange('title', e.target.value)}
            />
            <div className="mb-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">Description</label>
              <ReactQuill theme="snow" value={formData.description} onChange={handleContentChange} />
            </div>
            <FormInput
              name="location"
              label="Location"
              type="select"
              options={['Sydney', 'Brisbane', 'Melbourne']}
              customClass="mb-4"
              value={formData.location}
              onChange={e => handleChange('location', e.target.value)}
            />
            <Inclusions onChange={e => handleChange('inclusions', [e.target.value])} />
            <p className="mb-2 text-sm font-medium text-gray-900">Scheduling window</p>
            <div className="mb-6 flex flex-col gap-2">
              {daysOfWeek.map((day, index) => (
                <div key={index} className="flex items-center gap-2">
                  <p className="w-full max-w-10 text-sm font-medium text-gray-900">{day}</p>

                  {/* <select
                value={formData.availability[index]?.start_time || ''}
                onChange={e => handleDayChange(index, 'start_time', e.target.value)}
                className="font-inter w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm"
              >
                <option value="">Select Start Time</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
              </select> */}

                  {/* <select
                value={formData.availability[index]?.end_time || ''}
                onChange={e => handleDayChange(index, 'end_time', e.target.value)}
                className="font-inter w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm"
              >
                <option value="">Select End Time</option>
                <option value="11:00">11:00</option>
                <option value="01:00">01:00</option>
                <option value="02:00">02:00</option>
              </select> */}

                  <button type="button" onClick={handleAddAvailability}>
                    <PlusCircleIcon className="size-4 fill-gray-400" />
                  </button>

                  {formData.availability.length > 1 && (
                    <button type="button" onClick={() => handleRemoveAvailability(index)}>
                      <TrashIcon className="size-4 fill-gray-400" />
                    </button>
                  )}
                </div>
              ))}
            </div>
            <FormInput
              name="price"
              label="Price"
              type="select"
              options={['fixed', 'hourly', 'multiple_fixed']}
              onChange={e => handleChange('price_type', e.target.value)}
              customClass="mb-4"
            />
            {pricingType === 'fixed' && (
              <>
                <FixedPrice
                  value={formData.price}
                  onChange={e =>
                    handleChange('price', [{ text: pricingType, value: String(e.target.value) }])
                  }
                />
                <SecurityDeposit onChange={e => handleChange('security_deposit', Number(e.target.value))} />
              </>
            )}
            {pricingType === 'hourly' && (
              <>
                <Hourly
                  onChange={e =>
                    handleChange('price', [{ text: pricingType, value: String(e.target.value) }])
                  }
                />
                <SecurityDeposit onChange={e => handleChange('security_deposit', Number(e.target.value))} />
              </>
            )}
            {pricingType === 'multiple_fixed' && (
              <>
                <MultiplePrice
                  onChange={e =>
                    handleChange('price', [{ text: pricingType, value: String(e.target.value) }])
                  }
                />
                <SecurityDeposit onChange={e => handleChange('security_deposit', Number(e.target.value))} />
              </>
            )}
            {formData.featured_image ? (
              <div className="flex items-center gap-2">
                <img
                  src={formData.featured_image as string}
                  alt="Featured Image"
                  className="h-24 w-24 rounded-md object-cover"
                />
                <button
                  type="button"
                  onClick={() => handleChange('featured_image', null)}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Change
                </button>
              </div>
            ) : (
              <input
                type="file"
                id="featured_image"
                name="featured_image"
                onChange={handleFileChange}
                className="block w-full rounded-md border border-gray-300 text-sm text-gray-700"
              />
            )}
            {/* <FileUpload onChange={e => handleChange('featured_image', e.target.value)} /> */}
            {/* Submit Button */}
            <DashboardButton name="Submit" type="submit" className="mt-6" />
          </form>
        </div>
      </div>
    </div>
  )
}
export default ListingEditPopUp
