'use client'
import FormInput from '@/app/(dashboard)/components/FormInput'
import { useState } from 'react'
import RadioBox from './RadioBox'
const Hourly = () => {
  const [selectedValue, setSelectedValue] = useState<string | number>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)
  }
  return (
    <div>
      <FormInput name="priceValue" type="number" placeholder="$450.00" customClass="mb-4" />
      <div>
        <p className="mb-3 text-clr-ab">Security Deposit Amount</p>
        <div className="flex flex-wrap items-center gap-3">
          <RadioBox
            id="hour1"
            name="deposit"
            label="6 hours"
            value="6"
            checked={selectedValue === '6'}
            onChange={handleChange}
          />
          <RadioBox
            id="hour2"
            name="deposit"
            label="8 hours"
            value="8"
            checked={selectedValue === '8'}
            onChange={handleChange}
          />
          <RadioBox
            id="hour3"
            name="deposit"
            label="12 hours"
            value="12"
            checked={selectedValue === '12'}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  )
}

export default Hourly
