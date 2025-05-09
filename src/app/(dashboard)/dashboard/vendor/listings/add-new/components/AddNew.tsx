'use client'
import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import FormInput from '@/app/(dashboard)/components/FormInput'
import FullPageLoader from '@/app/(landing)/components/Loader/FullPageLoader'
import { useFetchCategoriesQuery } from '@/redux/features/categories/apiSlice'
import { useAddServiceMutation, type IPrice, type ServiceItemPost } from '@/redux/features/services/apiSlice'
import { useSession } from 'next-auth/react'
import dynamic from 'next/dynamic'
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import 'react-quill-new/dist/quill.snow.css'
import Swal from 'sweetalert2'
import CategoryModal from './CategoryModal'
import EditCategory from './EditCategory'
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
  userId: string
  title: string
}

const AddNew: React.FC<IProps> = ({ setStep, isEditListing, handleChange, formData }) => {
  const [pricingType, setPricingType] = useState<string>('fixed')
  const [file, setFile] = useState<File | null>(null)
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false)
  const [isEditCategoryModalOpen, setIsEditCategoryModalOpen] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [options, setOptions] = useState<OptionType[]>([])
  const { data: session } = useSession()
  const { data } = useFetchCategoriesQuery()
  const catData = data?.data
  useEffect(() => {
    if (!catData) {
      setOptions([])
      return
    }
    const formattedOptions = catData?.map(cat => ({
      value: cat._id || '',
      userId: cat.user || 'Untitled',
      title: cat.title || 'Untitled'
    }))
    setOptions(formattedOptions)
  }, [catData])

  const [addService] = useAddServiceMutation()

  const handleAddCategory = (category: { title: string; description: string; icon: string }) => {}

  function appendUniqueSlug(formDataToSubmit: FormData, formData: { title?: string }): void {
    const title = formData?.title || ''
    const randomValue = Math.random().toString(36).substring(2, 8)
    const uniqueSlug = `${title}-${randomValue}`
    formDataToSubmit.append('slug', uniqueSlug)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!pricingType) {
      Swal.fire({
        title: 'Validation Error',
        text: 'Please fill in all fields with valid values.',
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
      return
    }

    setLoading(true)

    setLoading(true)

    const formDataToSubmit = new FormData()

    formDataToSubmit.append('user', session?.user?.id || '')
    formDataToSubmit.append('title', formData?.title || '')
    formDataToSubmit.append('description', formData?.description || '')
    formDataToSubmit.append('featured_image', file || '')
    formDataToSubmit.append('category', formData?.category || '')
    formDataToSubmit.append('location', formData?.location || '')

    formDataToSubmit.append('inclusions', JSON.stringify(formData?.inclusions || []))
    formDataToSubmit.append('infos', JSON.stringify(formData?.infos || []))
    formDataToSubmit.append('is_featured', formData?.is_featured ? 'true' : 'false')
    formDataToSubmit.append('price_type', formData?.price_type || 'hourly')
    appendUniqueSlug(formDataToSubmit, formData)

    formData?.price?.forEach((price: IPrice, index) => {
      formDataToSubmit.append(`price[${index}][text]`, price?.text || '')
      formDataToSubmit.append(`price[${index}][value]`, price?.value || '') //FIXME: need to change price with actual price
    })

    formDataToSubmit.append(
      'security_deposit',
      formData?.security_deposit ? formData?.security_deposit.toString() : ''
    )
    formDataToSubmit.append(
      'cancellation_period_hours',
      formData?.cancellation_period_hours ? formData?.cancellation_period_hours?.toString() : ''
    )

    formData.availability.forEach((availability, index) => {
      formDataToSubmit.append(`availability[${index}][days]`, availability.days || 'mon')
      formDataToSubmit.append(`availability[${index}][start_time]`, availability.start_time.toString())
      formDataToSubmit.append(`availability[${index}][end_time]`, availability.end_time.toString())
    })

    formDataToSubmit.append('is_unavailable', formData.is_unavailable ? 'true' : 'false')
    formDataToSubmit.append('status', formData.status || 'active')

    // Send form data (mocked API call for now)
    try {
      const data = await addService(formDataToSubmit).unwrap()
      Swal.fire({
        title: 'Successful',
        text: 'Service added successfully!',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      // console.log('err', err)
      Swal.fire({
        title: 'Failed',
        text: `${err?.data.message}`,
        icon: 'error',
        confirmButtonText: 'Retry'
      })
    } finally {
      setLoading(false)
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

  if (loading) {
    return <FullPageLoader type="loading" />
  }
  // console.log(options)

  return (
    <div className="w-full max-w-[736px] rounded-lg bg-white p-6 shadow">
      <div className="flex items-center justify-between">
        <p className="mb-6 text-xl font-bold text-clr-36 md:text-2xl">
          {isEditListing === true ? 'Edit' : 'Add New'}
        </p>
        <div className="flex items-center gap-3">
          <DashboardButton
            className="!p-2 text-sm"
            name="Add Category"
            type="button"
            onClick={() => setIsCategoryModalOpen(true)}
          />
          <DashboardButton
            className="!p-2 text-sm"
            name="Edit Category"
            type="button"
            onClick={() => setIsEditCategoryModalOpen(true)}
          />
        </div>
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

        <div className="mb-4">
          <label className="mb-2 block text-clr-ab">Description</label>
          <ReactQuill theme="snow" value={formData.description} onChange={handleContentChange} />
        </div>

        <FormInput
          name="location"
          label="Location"
          type="select"
          isLocation={true}
          options={[
            {
              id: '6723595d8d9a6dbaaffbf3d9',
              title: 'Brisbane'
            },
            {
              id: '672359bb8d9a6dbaaffbf3dd',
              title: 'Melbourne'
            },
            {
              id: '6723599b8d9a6dbaaffbf3db',
              title: 'Sydney'
            }
          ]}
          customClass="mb-4"
          onChange={e => handleChange('location', e.target.value)}
        />
        <Inclusions onChange={e => handleChange('inclusions', [e.target.value])} />
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
          {/* <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="featured_image">
            Featured Image
          </label>
          <input
            type="file"
            id="featured_image"
            name="featured_image"
            onChange={handleFileChange}
            className="block w-full rounded-md border border-gray-300 text-sm text-gray-700"
          /> */}
          <FileUpload
            onChange={e => {
              const file = e.target.files ? e.target.files[0] : null
              handleChange('featured_image', file)
            }}
          />
        </div>
        <DashboardButton name="Submit" type="submit" className="mt-5" />
      </form>
      <CategoryModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        onSubmit={handleAddCategory}
      />

      <EditCategory
        isOpen={isEditCategoryModalOpen}
        onClose={() => setIsEditCategoryModalOpen(false)}
        options={options}
      />
    </div>
  )
}

export default AddNew
