import { formData } from '@/utils'
import { CheckIcon } from '@heroicons/react/16/solid'
import React from 'react'
import CustomBtn from '../../components/CustomBtn'
import InputForm from './InputForm'

type ICustomerFormProps = {
  toggleCategoryChecked: () => void
  toggleSaveAddress: () => void
  handleSubmit: (e: React.FormEvent) => void
  handleInputChange: (
    field: 'name' | 'email' | 'mobileNumber' | 'houseNo' | 'streetName' | 'suburb' | 'state' | 'postCode',
    value: string
  ) => void
}

const CustomerForm: React.FC<ICustomerFormProps> = ({
  toggleCategoryChecked,
  toggleSaveAddress,
  handleSubmit,
  handleInputChange
}) => {
  return (
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange(
                  i.inputId as
                    | 'name'
                    | 'email'
                    | 'mobileNumber'
                    | 'houseNo'
                    | 'streetName'
                    | 'suburb'
                    | 'state'
                    | 'postCode',
                  e.target.value
                )
              }
            />
          </div>
        ))}

        <div className="mb-5 flex flex-wrap items-center gap-5">
          <label className="flex w-full max-w-[410px] cursor-pointer items-center space-x-3">
            <div
              className={`relative h-4 w-4 rounded-md border border-gray-500 ${
                !true && 'border-purple-700 bg-purple-700'
              }`}
            >
              <input
                type="checkbox"
                onChange={toggleCategoryChecked}
                className="hidden h-4 w-4 cursor-pointer appearance-none rounded-md border border-gray-500 checked:bg-purple-700 focus:ring-purple-700"
              />
              {!true && (
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
              className={`relative h-4 w-4 rounded-md border border-gray-500 ${
                !true && 'border-purple-700 bg-purple-700'
              }`}
            >
              <input
                type="checkbox"
                onChange={toggleSaveAddress}
                className="hidden h-4 w-4 cursor-pointer appearance-none rounded-md border border-gray-500 checked:bg-purple-700 focus:ring-purple-700"
              />

              <CheckIcon
                className="absolute left-1/2 top-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2"
                fill="white"
              />
            </div>
            <p className="text-sm font-light text-black md:text-base">Save address</p>
          </label>
        </div>

        <CustomBtn btnName="Save" btnType="submit" />
      </form>
    </div>
  )
}

export default CustomerForm
