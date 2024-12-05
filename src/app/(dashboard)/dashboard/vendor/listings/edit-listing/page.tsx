'use client'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import AddNew from '../add-new/components/AddNew'
import ItemList from '../add-new/components/ItemList'
import ItemPricing from '../add-new/components/ItemPricing'
import SetAvailability from '../add-new/components/SetAvailability'

const EditListing = () => {
  const [step, setStep] = useState<number>(0)
  const router = usePathname()
  const isEditListing = router === '/dashboard/vendor/listings/edit-listing'

  return (
    <div>
      {step === 0 && <AddNew setStep={setStep} isEditListing={isEditListing} />}
      {step === 1 && <ItemList setStep={setStep} isEditListing={isEditListing} />}
      {step === 2 && <SetAvailability setStep={setStep} isEditListing={isEditListing} />}
      {step === 3 && <ItemPricing setStep={setStep} isEditListing={isEditListing} />}
    </div>
  )
}

export default EditListing
