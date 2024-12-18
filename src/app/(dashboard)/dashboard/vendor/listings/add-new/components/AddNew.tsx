import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import FormInput from '@/app/(dashboard)/components/FormInput'
import { useAddServiceMutation, type ServiceItemPost } from '@/redux/features/services/apiSlice'
import { categories, daysOfWeek } from '@/utils'
import { PlusCircleIcon, TrashIcon } from '@heroicons/react/16/solid'
import { useState, type Dispatch, type SetStateAction } from 'react'
import FileUpload from './FileUpload'
import Inclusions from './Inclusions'
import FixedPrice from './FixedPrice'
import Hourly from './Hourly'
import MultiplePrice from './MultiplePrice'
import SecurityDeposit from './SecurityDeposit'

type IProps = {
  setStep: Dispatch<SetStateAction<number>>
  isEditListing?: boolean
  formData: ServiceItemPost
  setFormData: Dispatch<SetStateAction<ServiceItemPost>>
  handleChange: <T extends keyof ServiceItemPost>(field: T, value: ServiceItemPost[T]) => void
}

const AddNew: React.FC<IProps> = ({ setStep, isEditListing, handleChange, formData }) => {
  const [pricingType, setPricingType] = useState<string>('fixed')
  const [file, setFile] = useState<File | null>(null) // To store the selected file

  const handleDayChange = (index: number, field: string, value: string) => {
    const updatedAvailability = [...formData.availability]
    updatedAvailability[index] = {
      ...updatedAvailability[index],
      [field]: value
    }
    handleChange('availability', updatedAvailability)
  }

  const handleAddAvailability = () => {
    const updatedAvailability = [
      ...formData.availability,
      { days: 'Mon', start_time: '', end_time: '' } // Default values
    ]
    handleChange('availability', updatedAvailability)
  }

  const handleRemoveAvailability = (index: number) => {
    const updatedAvailability = formData.availability.filter((_, i) => i !== index)
    handleChange('availability', updatedAvailability)
  }

  const [addService] = useAddServiceMutation()

  const demoListingData = {
    user: '60d21b4667d0d8992e610c85',
    title: 'Luxury Villa with Sea View dihanAbir',
    description: 'A beautiful luxury villa located near the coast with a breathtaking sea view.',
    slug: 'luxury-dihandsd-viefdsw',
    featured_image: file, // Example image URL
    category: '60d21b4667d0d8992e610c84',
    location: '60d21b4667d0d8992e610c83',
    inclusions: ['Swimming Pool', 'Jacuzzi', 'Sauna', 'Free WiFi', 'Fully Equipped Kitchen'],
    infos: ['Near Beach', 'Close to Restaurants', '24/7 Security'],
    is_featured: true,
    price_type: 'hourly', // Assuming price type could be "hourly", "daily", or "weekly"
    price: [{ text: 'Night', value: 300 }],
    security_deposit: 500,
    cancellation_period_hours: 48,
    availability: [{ days: 'mon', start_time: '08:00', end_time: '18:00' }],
    is_unavailable: false,
    status: 'publish'
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!pricingType) {
      alert('Please fill in all fields with valid values.')
      return
    }

    // Create FormData object
    const formData = new FormData()

    // Append each field from demoListingData to FormData
    formData.append('user', demoListingData.user)
    formData.append('title', demoListingData.title)
    formData.append('description', demoListingData.description || '')
    formData.append('slug', demoListingData.slug || '')
    formData.append('featured_image', demoListingData.featured_image || '')
    formData.append('category', demoListingData.category)
    formData.append('location', demoListingData.location)

    // Handle inclusions and infos as arrays (if necessary, convert them to strings or JSON)
    formData.append('inclusions', JSON.stringify(demoListingData.inclusions || []))
    formData.append('infos', JSON.stringify(demoListingData.infos || []))

    formData.append('is_featured', demoListingData.is_featured ? 'true' : 'false')
    formData.append('price_type', demoListingData.price_type)

    // For price, loop through the array and append each price entry
    demoListingData.price.forEach((price, index) => {
      formData.append(`price[${index}][text]`, price.text || '')
      formData.append(`price[${index}][value]`, price.value.toString())
    })

    formData.append('security_deposit', demoListingData.security_deposit.toString())
    formData.append('cancellation_period_hours', demoListingData.cancellation_period_hours.toString())

    // Handle availability (as array of objects, so convert to JSON string)
    // formData.append('availability', JSON.stringify(demoListingData.availability || []))
    demoListingData.availability.forEach((availability, index) => {
      formData.append(`availability[${index}][days]`, availability.days || '')
      formData.append(`availability[${index}][start_time]`, availability.start_time.toString())
      formData.append(`availability[${index}][end_time]`, availability.end_time.toString())
    })

    formData.append('is_unavailable', demoListingData.is_unavailable ? 'true' : 'false')
    formData.append('status', demoListingData.status || 'active') // Ensure you add a valid status if it's required

    try {
      const response = await addService(formData).unwrap()
      console.log('Service added response:', response)
      console.log('Service added successfully:', formData)
      alert('Service added successfully!')
      // dispatch(clearNewServiceDraft())
    } catch (err) {
      console.error('Failed to add product:', err)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null
    if (selectedFile) {
      setFile(selectedFile)
    }
  }

  return (
    <div className="w-full max-w-[736px] rounded-lg bg-white p-6 shadow">
     <div className='flex justify-between items-center'>
     <p className="mb-6 text-xl font-bold text-clr-36 md:text-2xl">
        {isEditListing === true ? 'Edit' : 'Add New'}
      </p>
      <DashboardButton name="Add CFategory" type="button"   />
     </div>
      <form>
        <FormInput
          name="categories"
          label="Categories"
          type="select"
          customClass="mb-4"
          options={categories}
          onChange={e => handleChange('category', e.target.value)}
        />

        <FormInput
          name="title"
          label="Title"
          type="text"
          customClass="mb-4"
          placeholder="Write a tittle"
          onChange={e => handleChange('title', e.target.value)}
        />
        {/* Description */}
        <FormInput
          name="description"
          label="Description"
          type="textarea"
          customClass="mb-4"
          onChange={e => handleChange('title', e.target.value)}
        />

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

              <select
                value={formData.availability[index]?.start_time || ''}
                onChange={e => handleDayChange(index, 'start_time', e.target.value)}
                className="font-inter w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm"
              >
                <option value="">Select Start Time</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
              </select>

              <select
                value={formData.availability[index]?.end_time || ''}
                onChange={e => handleDayChange(index, 'end_time', e.target.value)}
                className="font-inter w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm"
              >
                <option value="">Select End Time</option>
                <option value="11:00">11:00</option>
                <option value="01:00">01:00</option>
                <option value="02:00">02:00</option>
              </select>

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
              onChange={e => handleChange('price', [{ text: pricingType, value: Number(e.target.value) }])}
            />
            <SecurityDeposit onChange={e => handleChange('security_deposit', Number(e.target.value))} />
          </>
        )}
        {pricingType === 'hourly' && (
          <>
            <Hourly
              onChange={e => handleChange('price', [{ text: pricingType, value: Number(e.target.value) }])}
            />
            <SecurityDeposit onChange={e => handleChange('security_deposit', Number(e.target.value))} />
          </>
        )}
        {pricingType === 'Multiple pricing range' && (
          <>
            <MultiplePrice
              onChange={e => handleChange('price', [{ text: pricingType, value: Number(e.target.value) }])}
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

        <DashboardButton name="Continue" type="button" className="mt-5" onClick={() => setStep(1)} />
      </form>
    </div>
  )
}

export default AddNew
