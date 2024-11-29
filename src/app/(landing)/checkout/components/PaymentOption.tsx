'use client'
import { useState } from 'react'
import CustomBtn from '../../components/CustomBtn'
import InputForm from './InputForm'

type IProps = {
  onNext: (step?: number) => void
}

const PaymentOption: React.FC<IProps> = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleChange = (option: any) => {
    setSelectedOption(option)
  }

  const handleNext = (e: any) => {
    onNext()
  }

  return (
    <div>
      <h1 className="mb-6 font-sora text-xl font-bold text-clr-0f md:text-2xl">Select a payment method</h1>
      <div className="space-y-4">
        {/* Option 1 */}
        <label className="block cursor-pointer items-center space-x-2 capitalize">
          <input
            type="radio"
            name="payment"
            value="creditcard"
            className="relative h-4 w-4 appearance-none rounded-full border border-clr-fb after:absolute after:left-1/2 after:top-1/2 after:hidden after:h-[10px] after:w-[10px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-clr-fb after:focus-within:block focus:ring-clr-fb"
            onChange={() => handleChange('creditcard')}
          />
          <span className="font-sora text-lg font-bold text-clr-0f">Credit/Debit Card</span>
        </label>

        {selectedOption === 'creditcard' && (
          <form>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-6">
                <InputForm
                  htmlFor="cardNumber"
                  inputId="cardNumber"
                  labelTitle="Card Number"
                  inputPlaceholder="Card Number"
                  inputType="number"
                  inputClassName="text-sm md:text-base"
                  labelClassName="text-sm md:text-base"
                />
              </div>
              <div className="col-span-6">
                <InputForm
                  htmlFor="name"
                  inputId="name"
                  labelTitle="Card Holder Name"
                  inputPlaceholder="Card Holder Name"
                  inputType="text"
                  inputClassName="text-sm md:text-base"
                  labelClassName="text-sm md:text-base"
                />
              </div>
              <div className="col-span-6">
                <InputForm
                  htmlFor="date"
                  inputId="date"
                  labelTitle="Expiry Date"
                  inputPlaceholder="Expiry Date"
                  inputType="date"
                  inputClassName="text-sm md:text-base"
                  labelClassName="text-sm md:text-base"
                />
              </div>
              <div className="col-span-6">
                <InputForm
                  htmlFor="cvv"
                  inputId="cvv"
                  labelTitle="CVV"
                  inputPlaceholder="CVV"
                  inputType="number"
                  inputClassName="text-sm md:text-base"
                  labelClassName="text-sm md:text-base"
                />
              </div>
            </div>
          </form>
        )}

        {/* Option 2 */}
        <label className="block cursor-pointer items-center space-x-2">
          <input
            type="radio"
            name="payment"
            value="paypal"
            className="relative h-4 w-4 appearance-none rounded-full border border-clr-fb after:absolute after:left-1/2 after:top-1/2 after:hidden after:h-[10px] after:w-[10px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-clr-fb after:focus-within:block focus:ring-clr-fb"
            onChange={() => handleChange('paypal')}
          />
          <span className="font-sora text-lg font-bold capitalize text-clr-0f">paypal</span>
        </label>

        {selectedOption === 'paypal' && <p className="text-gray-600">You selected PayPal.</p>}

        {/* Option 2 */}
        <label className="block cursor-pointer items-center space-x-2">
          <input
            type="radio"
            name="payment"
            value="bank"
            className="relative h-4 w-4 appearance-none rounded-full border border-clr-fb after:absolute after:left-1/2 after:top-1/2 after:hidden after:h-[10px] after:w-[10px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-clr-fb after:focus-within:block focus:ring-clr-fb"
            onChange={() => handleChange('bank')}
          />
          <span className="font-sora text-lg font-bold capitalize text-clr-0f">Bank Transfer</span>
        </label>

        {selectedOption === 'bank' && <p className="text-gray-600">You selected Bank Transfer.</p>}
      </div>
      <CustomBtn onClickFunc={handleNext} btnName="Review" btnType="button" className="mt-5" />
    </div>
  )
}

export default PaymentOption
