'use client'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const EditListing = () => {
  const [step, setStep] = useState<number>(0)
  const router = usePathname()
  const isEditListing = router === '/dashboard/vendor/listings/edit-listing'

  // formData: ServiceItemPost
  // setFormData: Dispatch<SetStateAction<ServiceItemPost>>
  // handleChange: <T extends keyof ServiceItemPost>(field: T, value: ServiceItemPost[T]) => void

  return (
    <div>
      {/* {step === 0 && <AddNew setStep={setStep} isEditListing={isEditListing} />}
      {step === 1 && <ItemList setStep={setStep} isEditListing={isEditListing} />}
      {step === 2 && <SetAvailability setStep={setStep} isEditListing={isEditListing} />}
      {step === 3 && <ItemPricing setStep={setStep} isEditListing={isEditListing} />} */}
    </div>
  )
}

export default EditListing
