'use client'
import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import FormInput from '@/app/(dashboard)/components/FormInput'
import GrayBtn from '@/app/(dashboard)/components/GrayBtn'
import { handleInputChange } from '@/utils/inputHandlers'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import FixedPrice from './FixedPrice'
import Hourly from './Hourly'
import MultiplePrice from './MultiplePrice'

type IProps = {
  setStep: (stepIndex: number) => void
}

const ItemPricing: React.FC<IProps> = ({ setStep }) => {
  const router = useRouter()
  const [pricingType, setPricingType] = useState<string>('Fixed Price')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/dashboard/vendor/listings?modal=true')
  }
  return (
    <div className="w-full max-w-[736px] rounded-lg bg-white p-6 shadow">
      <p className="mb-6 text-xl font-bold text-clr-36 md:text-2xl">Item Pricing</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="price"
          label="Price"
          type="select"
          options={['Fixed Price', 'Hourly', 'Multiple pricing range']}
          onChange={e => handleInputChange(e, setPricingType)}
          customClass="mb-4"
        />
        {pricingType === 'Fixed Price' && <FixedPrice />}
        {pricingType === 'Hourly' && <Hourly />}
        {pricingType === 'Multiple pricing range' && <MultiplePrice />}
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
