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
  const [file, setFile] = useState<File | null>(null)

  const [formData, setFormData] = useState<ServiceItemPost>({
    user: '',
    title: '',
    description: '',
    slug: `${new Date()} luxury-nahifsdfd-dihanabir-`,
    featured_image: file,
    category: '60d21b4667d0d8992e610c84',
    location: '60d21b4667d0d8992e610c83',
    inclusions: ['Swimming Pool', 'Jacuzzi', 'Sauna', 'Free WiFi', 'Fully Equipped Kitchen'],
    infos: ['Near Beach', 'Close to Restaurants', '24/7 Security'],
    is_featured: true,
    price_type: 'hourly',
    price: [{ text: 'Night', value: 300 }],
    security_deposit: 500,
    cancellation_period_hours: 48,
    availability: [{ days: 'mon', start_time: '08:00', end_time: '18:00' }],
    is_unavailable: false,
    status: 'publish'
  })

  const handleChange = <T extends keyof ServiceItemPost>(field: T, value: ServiceItemPost[T]) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }))
  }

  // Changeable state
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
