import React from 'react'

interface RadioBoxProps {
  id: string
  name: string
  label: string
  value: string | number
  checked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  customClass?: string
}

const RadioBox: React.FC<RadioBoxProps> = ({
  id,
  name,
  label,
  value,
  checked,
  onChange,
  customClass = ''
}) => {
  return (
    <div className={`flex items-center gap-6 rounded-lg border p-4 ${customClass}`}>
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="bg-clr-ab accent-clr-fb"
      />
    </div>
  )
}

export default RadioBox
