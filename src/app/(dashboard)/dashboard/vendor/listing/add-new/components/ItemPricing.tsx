'use client'
import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import FormInput from '@/app/(dashboard)/components/FormInput'
import { useRouter } from 'next/navigation'
import React from 'react'

const ItemPricing = () => {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/dashboard/vendor/listing?modal=true')
  }
  return (
    <div className="w-full max-w-[736px] rounded-lg bg-white p-6 shadow">
      <p className="mb-6 text-2xl font-bold text-clr-36">Item Pricing</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="price"
          label="Price"
          type="select"
          options={['Fixed Price', 'Hourly', 'Multiple pricing range']}
          customClass="mb-4"
        />
        <FormInput name="priceValue" type="number" placeholder="$450.00" customClass="mb-4" />

        <div>
          <p className="mb-3 text-clr-ab">Security Deposit Amount</p>
          <div className="flex items-center gap-3">
            <div className="border- flex items-center gap-6 rounded-lg border p-4">
              <label htmlFor="deposit1" className="font-medium">
                25%
              </label>
              <input
                type="radio"
                id="deposit1"
                name="deposit"
                value="30"
                className="bg-clr-ab accent-clr-fb"
              />
            </div>
            <div className="border- flex items-center gap-6 rounded-lg border p-4">
              <label htmlFor="deposit2" className="font-medium">
                50%
              </label>
              <input
                type="radio"
                id="deposit2"
                name="deposit"
                value="60"
                className="bg-clr-ab accent-clr-fb"
              />
            </div>
            <div className="border- flex items-center gap-6 rounded-lg border p-4">
              <label htmlFor="deposit3" className="font-medium">
                65%
              </label>
              <input
                type="radio"
                id="deposit3"
                name="deposit"
                value="100"
                className="bg-clr-ab accent-clr-fb"
              />
            </div>
            <div className="border- flex items-center gap-6 rounded-lg border p-4">
              <label htmlFor="deposit4" className="font-medium">
                80%
              </label>
              <input
                type="radio"
                id="deposit4"
                name="deposit"
                value="100"
                className="bg-clr-ab accent-clr-fb"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 border-b border-gray-200" />
        <DashboardButton name="Submit" type="submit" className="mt-5" />
      </form>
    </div>
  )
}

export default ItemPricing
