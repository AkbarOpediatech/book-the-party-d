import FormInput from '@/app/(dashboard)/components/FormInput'
import type { IPrice } from '@/redux/features/services/apiSlice'
import React from 'react'

type IProps = {
  value?: IPrice[]
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void | undefined
}

const FixedPrice: React.FC<IProps> = ({ onChange, value }) => {
  return (
    <div>
      <FormInput
        value={value}
        onChange={onChange}
        name="priceValue"
        type="number"
        placeholder="$450.00"
        customClass="mb-4"
      />
    </div>
  )
}

export default FixedPrice
