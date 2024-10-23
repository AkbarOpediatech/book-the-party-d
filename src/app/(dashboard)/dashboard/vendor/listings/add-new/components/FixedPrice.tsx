import FormInput from '@/app/(dashboard)/components/FormInput'
import React, { useState } from 'react'
import RadioBox from './RadioBox'

const FixedPrice = () => {
  const [selectedDeposit, setSelectedDeposit] = useState<string>('')

  const handleDepositChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDeposit(event.target.value)
  }

  return (
    <div>
      <FormInput name="priceValue" type="number" placeholder="$450.00" customClass="mb-4" />
      <div>
        <p className="mb-3 text-clr-ab">Security Deposit Amount</p>
        <div className="flex items-center gap-3">
          <RadioBox
            id="deposit1"
            name="deposit"
            label="25%"
            value="25"
            checked={selectedDeposit === '25'}
            onChange={handleDepositChange}
          />
          <RadioBox
            id="deposit2"
            name="deposit"
            label="50%"
            value="50"
            checked={selectedDeposit === '50'}
            onChange={handleDepositChange}
          />
          <RadioBox
            id="deposit3"
            name="deposit"
            label="65%"
            value="65"
            checked={selectedDeposit === '65'}
            onChange={handleDepositChange}
          />
          <RadioBox
            id="deposit4"
            name="deposit"
            label="80%"
            value="80"
            checked={selectedDeposit === '80'}
            onChange={handleDepositChange}
          />
        </div>
      </div>
    </div>
  )
}

export default FixedPrice
