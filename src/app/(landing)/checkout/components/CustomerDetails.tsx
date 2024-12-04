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

type HandleInputChange = (
  field: 'name' | 'email' | 'mobileNumber' | 'houseNo' | 'streetName' | 'suburb' | 'state' | 'postCode',
  value: string | boolean | number
) => void

type ToggleFunction = () => void

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
    setShowDeliveryAddress(true)
    setShowAddress(false)
  }

  const handleInputChange: HandleInputChange = (field, value) => {
    const stringValue = String(value)
    dispatch(updateField({ field, value: stringValue, index: 0 }))
  }

  const toggleCategoryChecked: ToggleFunction = () => {
    // TODO: add here functionality letter
  }

  const toggleSaveAddress: ToggleFunction = () => {
    // TODO: add here functionality letter
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
