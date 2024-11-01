'use client'
import { formData } from '@/utils'
import { CheckIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import DeliveryAddress from './DeliveryAddress'
import InputForm from './InputForm'

type IProps = {
  onNext: (step?: number) => void
}

const CustomerDetails: React.FC<IProps> = ({ onNext }) => {
  const [saveAddress, setSaveAddress] = useState(false)
  const [categoryChecked, setCategoryChecked] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    onNext()
  }

  return (
    <>
      <DeliveryAddress />
      <div className={`bg-gray-50 p-5 md:p-9`}>
        <h2 className="mb-6 font-sora text-xl font-bold text-clr-0f md:text-2xl">Customer Details</h2>
        <form onSubmit={handleSubmit}>
          {formData.map((i, index) => (
            <div className="mb-6 last:mb-0" key={index}>
              <InputForm
                labelTitle={i.labelTitle}
                htmlFor={i.htmlFor}
                inputId={i.inputId}
                inputPlaceholder={i.inputPlaceholder}
                inputType={i.inputType}
              />
            </div>
          ))}
          <div className="mb-5 flex items-center gap-5">
            <label className="flex w-full max-w-[410px] cursor-pointer items-center space-x-3">
              <div
                className={`relative h-4 w-4 rounded-md border border-gray-500 ${categoryChecked && 'border-purple-700 bg-purple-700'}`}
              >
                <input
                  type="checkbox"
                  checked={categoryChecked}
                  onChange={() => setCategoryChecked(!categoryChecked)}
                  className="hidden h-4 w-4 cursor-pointer appearance-none rounded-md border border-gray-500 checked:bg-purple-700 focus:ring-purple-700"
                />
                {categoryChecked && (
                  <CheckIcon
                    className="absolute left-1/2 top-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2"
                    fill="white"
                  />
                )}
              </div>
              <p className="text-sm font-light text-black md:text-base">Use as my default address</p>
            </label>

            <label className="flex w-full max-w-[410px] cursor-pointer items-center space-x-3">
              <div
                className={`relative h-4 w-4 rounded-md border border-gray-500 ${saveAddress && 'border-purple-700 bg-purple-700'}`}
              >
                <input
                  type="checkbox"
                  checked={saveAddress}
                  onChange={() => setSaveAddress(!saveAddress)}
                  className="hidden h-4 w-4 cursor-pointer appearance-none rounded-md border border-gray-500 checked:bg-purple-700 focus:ring-purple-700"
                />
                {saveAddress && (
                  <CheckIcon
                    className="absolute left-1/2 top-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2"
                    fill="white"
                  />
                )}
              </div>
              <p className="text-sm font-light text-black md:text-base">Save address</p>
            </label>
          </div>
          <button type="submit" className="rounded-xl bg-clr-fb px-10 py-4 text-xl text-white md:text-2xl">
            Proceed to pay
          </button>
        </form>
      </div>
    </>
  )
}

export default CustomerDetails
