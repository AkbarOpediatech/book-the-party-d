'use client'

import { updateField } from '@/redux/features/formSlice'
import { AppDispatch, RootState } from '@/redux/store'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomerForm from './CustomerForm'
import DeliveryAddress from './DeliveryAddress'

type IProps = {
  onNext: (step?: number) => void
}

const CustomerDetails: React.FC<IProps> = ({ onNext }) => {
  const dispatch: AppDispatch = useDispatch()
  const {
    formData: reduxFormData,
    categoryChecked,
    saveAddress
  } = useSelector((state: RootState) => state.form)

  const [showAddress, setShowAddress] = useState<boolean>(false)
  const [showDeliveryAddress, setShowDeliveryAddress] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form Data:', reduxFormData)
    console.log('Category Checked:', categoryChecked)
    console.log('Save Address:', saveAddress)
    setShowDeliveryAddress(true)
    setShowAddress(false)
  }

  const handleInputChange = (field: keyof typeof reduxFormData, value: string) => {
    dispatch(updateField({ field, value }))
  }

  const toggleCategoryChecked = () => {
    // Dispatch toggle action for categoryChecked (implement in Redux slice)
  }

  const toggleSaveAddress = () => {
    // Dispatch toggle action for saveAddress (implement in Redux slice)
  }

  return (
    <>
      {showDeliveryAddress ? (
        <DeliveryAddress setShowAddress={setShowAddress} />
      ) : (
        <CustomerForm
          toggleCategoryChecked={toggleCategoryChecked}
          toggleSaveAddress={toggleSaveAddress}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      )}
    </>
  )
}

export default CustomerDetails
