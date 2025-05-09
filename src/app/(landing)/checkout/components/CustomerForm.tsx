import { nextStep } from '@/redux/features/stepperSlice'
import useStepper from '@/redux/hooks/useStepper'
import { useState } from 'react'
import CustomBtn from '../../components/CustomBtn'
import InputForm from './InputForm'

// Define a type for the form data structure
type AddressFormData = {
  name: string
  email: string
  phone: string
  country: string
  street: string
  city: string
  state: string
  postcode: string
}

// Define the props for the component
interface CustomerFormProps {
  onSave: (data: AddressFormData) => void
}
const CustomerForm: React.FC<CustomerFormProps> = ({ onSave }) => {
  const { dispatch } = useStepper()
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    street: '',
    city: '',
    state: '',
    postcode: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormValues(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formValues)
    dispatch(nextStep())
  }

  const fields: { label: string; name: keyof AddressFormData; type: string; placeholder: string }[] = [
    { label: 'Name', name: 'name', type: 'text', placeholder: 'Enter your name' },
    { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter your email' },
    { label: 'Mobile Number', name: 'phone', type: 'tel', placeholder: 'Enter your mobile number' },
    { label: 'Country', name: 'country', type: 'text', placeholder: 'Enter Your Country' },
    { label: 'City', name: 'city', type: 'text', placeholder: 'Enter your City' },
    { label: 'Street Name', name: 'street', type: 'text', placeholder: 'Enter street name' },
    { label: 'State', name: 'state', type: 'text', placeholder: 'Enter state' },
    { label: 'Post Code', name: 'postcode', type: 'text', placeholder: 'Enter post code' }
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="mb-6 font-sora text-xl font-bold text-clr-0f md:text-2xl">Customer Details</h2>
      {fields.map(field => (
        <InputForm
          key={field.name}
          labelTitle={field.label}
          htmlFor={field.name}
          inputId={field.name}
          inputType={field.type}
          inputPlaceholder={field.placeholder}
          inputClassName="text-xl"
          value={formValues[field.name]}
          onChange={handleChange}
        />
      ))}
      {/* <div className="mb-5 flex flex-wrap items-center gap-5">
        <label className="flex w-full max-w-[410px] cursor-pointer items-center space-x-3">
          <div
            className={`relative h-4 w-4 rounded-md border border-gray-500 ${categoryChecked && 'border-purple-700 bg-purple-700'}`}
          >
            <input
              type="checkbox"
              checked={categoryChecked}
              onChange={() => setCategoryChecked(!categoryChecked)}
              className="hidden h-4 w-4 cursor-pointer appearance-none rounded-md border border-gray-500 checked:bg-purple-700 focus:ring-purple-700"
            />
            {categoryChecked && (
              <CheckIcon
                className="absolute left-1/2 top-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2"
                fill="white"
              />
            )}
          </div>
          <p className="text-sm font-light text-black md:text-base">Use as my default address</p>
        </label>

        <label className="flex w-full max-w-[410px] cursor-pointer items-center space-x-3">
          <div
            className={`relative h-4 w-4 rounded-md border border-gray-500 ${saveAddress && 'border-purple-700 bg-purple-700'}`}
          >
            <input
              type="checkbox"
              checked={saveAddress}
              onChange={() => setSaveAddress(!saveAddress)}
              className="hidden h-4 w-4 cursor-pointer appearance-none rounded-md border border-gray-500 checked:bg-purple-700 focus:ring-purple-700"
            />
            {saveAddress && (
              <CheckIcon
                className="absolute left-1/2 top-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2"
                fill="white"
              />
            )}
          </div>
          <p className="text-sm font-light text-black md:text-base">Save address</p>
        </label>
      </div> */}
      <CustomBtn btnName="Save" btnType="submit" />
    </form>
  )
}

export default CustomerForm
