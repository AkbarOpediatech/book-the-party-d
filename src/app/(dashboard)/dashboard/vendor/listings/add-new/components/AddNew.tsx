'use client'
import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import FormInput from '@/app/(dashboard)/components/FormInput'
import { useFetchCategoriesQuery } from '@/redux/features/categories/apiSlice'
import { useAddServiceMutation, type IPrice, type ServiceItemPost } from '@/redux/features/services/apiSlice'
import { daysOfWeek } from '@/utils'
import { PlusCircleIcon, TrashIcon } from '@heroicons/react/16/solid'
import { useSession } from 'next-auth/react'
import dynamic from 'next/dynamic'
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import 'react-quill-new/dist/quill.snow.css'
import CategoryModal from './CategoryModal'
import FileUpload from './FileUpload'
import FixedPrice from './FixedPrice'
import Hourly from './Hourly'
import Inclusions from './Inclusions'
import MultiplePrice from './MultiplePrice'
import SecurityDeposit from './SecurityDeposit'
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })

type IProps = {
  setStep: Dispatch<SetStateAction<number>>
  isEditListing?: boolean
  formData: ServiceItemPost
  setFormData: Dispatch<SetStateAction<ServiceItemPost>>
  handleChange: <T extends keyof ServiceItemPost>(field: T, value: ServiceItemPost[T]) => void
}

type OptionType = {
  value: string
  title: string
}
const AddNew: React.FC<IProps> = ({ setStep, isEditListing, handleChange, formData }) => {
  const [value, setValue] = useState('')
  const [pricingType, setPricingType] = useState<string>('fixed')
  const [file, setFile] = useState<File | null>(null) // To store the selected file
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false)
  const [options, setOptions] = useState<OptionType[]>([])
  const { data: session } = useSession()
  const { data } = useFetchCategoriesQuery()
  const catData = data?.data
  console.log(catData, 'catData')
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

  const handleDayChange = (index: number, field: string, value: string) => {
    const updatedAvailability = [...formData.availability]
    updatedAvailability[index] = {
      ...updatedAvailability[index],
      [field]: value
    }
    handleChange('availability', updatedAvailability)
  }

  const handleAddAvailability = () => {
    const updatedAvailability = [...formData.availability, { days: 'Mon', start_time: '', end_time: '' }]
    handleChange('availability', updatedAvailability)
  }

  const handleRemoveAvailability = (index: number) => {
    const updatedAvailability = formData.availability.filter((_, i) => i !== index)
    handleChange('availability', updatedAvailability)
  }

  const [addService] = useAddServiceMutation()

  const handleAddCategory = (category: { title: string; description: string; icon: string }) => {
    console.log('New category:', category)
  }

  // Submit form logic
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!pricingType) {
      alert('Please fill in all fields with valid values.')
      return
    }

    const formDataToSubmit = new FormData()
    formDataToSubmit.append('user', session?.user?.id || '676102fe02420191894a4e29')
    formDataToSubmit.append('title', formData.title || '')
    formDataToSubmit.append('description', formData.description || '')
    formDataToSubmit.append('slug', formData.slug || '')
    formDataToSubmit.append('featured_image', file || '')
    formDataToSubmit.append('category', formData.category || '')
    formDataToSubmit.append('location', '60d21b4667d0d8992e610c83')

    formDataToSubmit.append('inclusions', JSON.stringify(formData.inclusions || []))
    formDataToSubmit.append('infos', JSON.stringify(formData.infos || []))
    formDataToSubmit.append('is_featured', formData.is_featured ? 'true' : 'false')
    formDataToSubmit.append('price_type', formData.price_type || 'hourly')

    formData.price.forEach((price: IPrice, index) => {
      formDataToSubmit.append(`price[${index}][text]`, price.text || '')
      formDataToSubmit.append(`price[${index}][value]`, '200') //FIXME: need to change price with actual price
    })

    formDataToSubmit.append('security_deposit', formData.security_deposit.toString())
    formDataToSubmit.append('cancellation_period_hours', formData.cancellation_period_hours.toString())

    formData.availability.forEach((availability, index) => {
      formDataToSubmit.append(`availability[${index}][days]`, availability.days || 'mon')
      formDataToSubmit.append(`availability[${index}][start_time]`, availability.start_time.toString())
      formDataToSubmit.append(`availability[${index}][end_time]`, availability.end_time.toString())
    })

    formDataToSubmit.append('is_unavailable', formData.is_unavailable ? 'true' : 'false')
    formDataToSubmit.append('status', formData.status || 'active')

    // Debugging Logs
    console.log('FormData:', Array.from(formDataToSubmit.entries()))

    // Send form data (mocked API call for now)
    try {
      const response = await addService(formDataToSubmit).unwrap()
      console.log('Service added response:', response)
      alert('Service added successfully!')
    } catch (err) {
      console.error('Failed to add service:', err)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null
    if (selectedFile) {
      setFile(selectedFile)
    }
  }

  const handleContentChange = (content: string) => {
    handleChange('description', content)
    // setFormData(prev => ({ ...prev, blogContent: content }))
  }

  return (
    <div className="w-full max-w-[736px] rounded-lg bg-white p-6 shadow">
      <div className="flex items-center justify-between">
        <p className="mb-6 text-xl font-bold text-clr-36 md:text-2xl">
          {isEditListing === true ? 'Edit' : 'Add New'}
        </p>
        <DashboardButton name="Add Category" type="button" onClick={() => setIsCategoryModalOpen(true)} />
      </div>
      <form onSubmit={handleSubmit}>
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
          customClass="mb-4"
          placeholder="Write a tittle"
          onChange={e => handleChange('title', e.target.value)}
        />
        {/* Description */}

        <div className="mb-4">
          <label className="mb-2 block text-clr-ab">Description</label>
          <ReactQuill theme="snow" value={formData.description} onChange={handleContentChange} />
        </div>

        {/* Location */}
        <FormInput
          name="location"
          label="Location"
          type="select"
          options={['Sydney', 'Brisbane', 'Melbourne']}
          customClass="mb-4"
          onChange={e => handleChange('location', e.target.value)}
        />
        {/* inclusions */}
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
              onChange={e => handleChange('price', [{ text: pricingType, value: String(e.target.value) }])}
            />
            <SecurityDeposit onChange={e => handleChange('security_deposit', Number(e.target.value))} />
          </>
        )}
        {pricingType === 'hourly' && (
          <>
            <Hourly
              onChange={e => handleChange('price', [{ text: pricingType, value: String(e.target.value) }])}
            />
            <SecurityDeposit onChange={e => handleChange('security_deposit', Number(e.target.value))} />
          </>
        )}
        {pricingType === 'multiple_fixed' && (
          <>
            <MultiplePrice
              onChange={e => handleChange('price', [{ text: pricingType, value: String(e.target.value) }])}
            />
            <SecurityDeposit onChange={e => handleChange('security_deposit', Number(e.target.value))} />
          </>
        )}
        <div className="mt-4">
          <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="featured_image">
            Featured Image
          </label>
          <input
            type="file"
            id="featured_image"
            name="featured_image"
            onChange={handleFileChange}
            className="block w-full rounded-md border border-gray-300 text-sm text-gray-700"
          />
        </div>
        <FileUpload onChange={e => handleChange('featured_image', e.target.value)} />
        <DashboardButton name="Submit" type="submit" className="mt-5" />
      </form>
      <CategoryModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        onSubmit={handleAddCategory}
      />
    </div>
  )
}

export default AddNew
