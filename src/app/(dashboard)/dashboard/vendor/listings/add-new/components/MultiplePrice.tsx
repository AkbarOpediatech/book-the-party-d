import FormInput from '@/app/(dashboard)/components/FormInput'
import React from 'react'

type IProps = {
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void | undefined
}

const MultiplePrice: React.FC<IProps> = ({ onChange }) => {
  return (
    <div>
      <FormInput
        onChange={onChange}
        name="priceValue"
        type="number"
        placeholder="$450.00"
        customClass="mb-4"
      />
    </div>
  )
}

export default MultiplePrice
