'use client'
import { addNewAddress, deleteAddress } from '@/redux/features/formSlice'
import { AppDispatch, RootState } from '@/redux/store'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomerForm from './CustomerForm'
import DeliveryAddress from './DeliveryAddress'

type Address = {
  name: string
  email: string
  phone: string
  country: string
  street: string
  city: string
  state: string
  postcode: string
}
type AddressFormData = Omit<Address, 'isDefault'>
const CustomerDetails: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const { addresses } = useSelector((state: RootState) => state.form)

  const [showForm, setShowForm] = useState(true)

  const handleAddAddress = (newAddress: AddressFormData) => {
    dispatch(addNewAddress({ ...newAddress }))
    setShowForm(false)
  }

  const handleSetDefault = (index: number) => {
    // dispatch(setDefaultAddress(index))
  }

  const handleDeleteAddress = (index: number) => {
    dispatch(deleteAddress(index))
  }

  return (
    <>
      {showForm ? (
        <CustomerForm onSave={handleAddAddress} />
      ) : (
        <DeliveryAddress
          addresses={addresses}
          onAddNew={() => setShowForm(true)}
          onSetDefault={handleSetDefault}
          onDeleteAddress={handleDeleteAddress}
        />
      )}
    </>
  )
}

export default CustomerDetails
