'use client'
import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import FormInput from '@/app/(dashboard)/components/FormInput'
import GrayBtn from '@/app/(dashboard)/components/GrayBtn'
import { useAddServiceMutation, type ServiceItemPost } from '@/redux/features/services/apiSlice'
import React, { useState, type Dispatch, type SetStateAction } from 'react'
import { useDispatch } from 'react-redux'
import FixedPrice from './FixedPrice'
import Hourly from './Hourly'
import MultiplePrice from './MultiplePrice'
import SecurityDeposit from './SecurityDeposit'

type IProps = {
  setStep: Dispatch<SetStateAction<number>>
  isEditListing?: boolean
  formData: ServiceItemPost
  setFormData: Dispatch<SetStateAction<ServiceItemPost>>
  handleChange: <T extends keyof ServiceItemPost>(field: T, value: ServiceItemPost[T]) => void
}

const ItemPricing: React.FC<IProps> = ({ setStep, isEditListing, formData, handleChange }) => {
  const dispatch = useDispatch()
  const [pricingType, setPricingType] = useState<string>('fixed')

  const [addService] = useAddServiceMutation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!pricingType) {
      alert('Please fill in all fields with valid values.')
      return
    }
    try {
      const response = await addService( formData).unwrap()
      console.log('Service added response:', response)
      console.log('Service added successfully:', formData)
      alert('Service added successfully!')
      // dispatch(clearNewServiceDraft())
    } catch (err) {
      console.error('Failed to add product:', err)
    }
  }

  return (
    <div className="w-full max-w-[736px] rounded-lg bg-white p-6 shadow">
      <p className="mb-6 text-xl font-bold text-clr-36 md:text-2xl">
        {isEditListing === true ? 'Edit Item Pricing' : 'Item Pricing'}
      </p>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="price"
          label="Price"
          type="select"
          options={['fixed', 'hourly', 'multiple_fixed']}
          onChange={e => handleChange('price_type', e.target.value)}
          customClass="mb-4"
        />

        {pricingType === 'fixed' && (
          <>
            <FixedPrice
              onChange={e => handleChange('price', [{ text: pricingType, value: Number(e.target.value) }])}
            />
            <SecurityDeposit onChange={e => handleChange('security_deposit', Number(e.target.value))} />
          </>
        )}
        {pricingType === 'hourly' && (
          <>
            <Hourly
              onChange={e => handleChange('price', [{ text: pricingType, value: Number(e.target.value) }])}
            />
            <SecurityDeposit onChange={e => handleChange('security_deposit', Number(e.target.value))} />
          </>
        )}
        {pricingType === 'Multiple pricing range' && (
          <>
            <MultiplePrice
              onChange={e => handleChange('price', [{ text: pricingType, value: Number(e.target.value) }])}
            />
            <SecurityDeposit onChange={e => handleChange('security_deposit', Number(e.target.value))} />
          </>
        )}
        <div className="mt-6 border-b border-gray-200" />
        <div className="mt-5 flex items-center gap-4">
          <GrayBtn name="Back" onClick={() => setStep(2)} />
          <DashboardButton name="Submit" type="submit" />
        </div>
      </form>
    </div>
  )
}

export default ItemPricing
