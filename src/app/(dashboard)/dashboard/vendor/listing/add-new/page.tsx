'use client'
import { useState } from 'react'
import AddNew from './components/AddNew'
import ItemList from './components/ItemList'
import SetAvailability from './components/SetAvailability'
import ItemPricing from './components/ItemPricing'

const AddNewListing = () => {
  const [step, setStep] = useState<number>(0)
  return (
    <div>
      {step === 0 && <AddNew setStep={setStep} />}
      {step === 1 && <ItemList setStep={setStep} />}
      {step === 2 && <SetAvailability setStep={setStep} />}
      {step === 3 && <ItemPricing setStep={setStep} />}
    </div>
  )
}

export default AddNewListing
