'use client'
import type { ServiceItemPost } from '@/redux/features/services/apiSlice'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import AddNew from './components/AddNew'
import ItemList from './components/ItemList'
import ItemPricing from './components/ItemPricing'
import SetAvailability from './components/SetAvailability'

const AddNewListing = () => {
  const [step, setStep] = useState<number>(0)

  const [formData, setFormData] = useState<ServiceItemPost>({
    aproved_by: null,
    availability: [],
    cancellation_period_hours: 0,
    description: '',
    featured_image: null,
    inclusions: [],
    infos: [],
    is_featured: false,
    is_unavailable: false,
    price: [],
    price_type: '',
    security_deposit: 0,
    slug: '',
    status: '',
    title: '',
    user: '',
    category: '',
    location: ''
  })

  const handleChange = <T extends keyof ServiceItemPost>(field: T, value: ServiceItemPost[T]) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }))
  }

  console.log(formData, 'formData')

  const router = usePathname()
  const isEditListing = router === '/dashboard/vendor/listings/edit-listing'

  return (
    <div>
      {step === 0 && (
        <AddNew
          setStep={setStep}
          isEditListing={isEditListing}
          handleChange={handleChange}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {step === 1 && (
        <ItemList
          setStep={setStep}
          isEditListing={isEditListing}
          handleChange={handleChange}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {step === 2 && (
        <SetAvailability
          setStep={setStep}
          isEditListing={isEditListing}
          handleChange={handleChange}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 3 && (
        <ItemPricing
          setStep={setStep}
          isEditListing={isEditListing}
          handleChange={handleChange}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </div>
  )
}

export default AddNewListing
