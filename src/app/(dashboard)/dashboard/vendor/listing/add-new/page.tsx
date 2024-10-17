'use client'
import { useState } from 'react'
import AddNew from './components/AddNew'

const AddNewListing = () => {
  const [step, setStep] = useState<number>(0)
  return <div>{step === 0 && <AddNew setStep={setStep} />}</div>
}

export default AddNewListing
