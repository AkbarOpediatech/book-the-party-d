import type { xInputType } from '@/utils'
import type React from 'react'

type SelectOption = {
  value: string
  label: string
}

type IProps = {
  LabelHtmlFor?: string
  LabelName?: string
  InputType?: xInputType
  InputId?: string
  InputName?: string
  InputValue?: string
  InputOnChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  InputPlaceHolder?: string
  isSelect?: boolean
  selectValue?: string
  selectOptions?: SelectOption[] | null
}

const InputField: React.FC<IProps> = ({
  LabelHtmlFor,
  LabelName,
  InputType,
  InputId,
  InputName,
  InputValue,
  InputOnChange,
  InputPlaceHolder,
  isSelect,
  selectValue,
  selectOptions
}) => {
  return (
    <>
      {isSelect ? (
        <>
          <label htmlFor={LabelHtmlFor} className="mb-2 block font-sora font-light text-clr-0f">
            {LabelName}
          </label>
          <select
            id={InputId}
            name={InputName}
            value={selectValue}
            onChange={InputOnChange}
            required
            className="w-full rounded-[10px] border border-[#0000001a] px-4 py-3 font-light text-clr-0f"
          >
            <option value="" disabled>
              Select an option
            </option>
            {selectOptions?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </>
      ) : (
        <>
          <label htmlFor={LabelHtmlFor} className="mb-2 block font-sora font-light text-clr-0f">
            {LabelName}
          </label>
          <input
            className="w-full rounded-[10px] border border-[#0000001a] px-4 py-3 font-light text-clr-0f"
            type={InputType}
            id={InputId}
            name={InputName}
            value={InputValue}
            onChange={InputOnChange}
            placeholder={InputPlaceHolder}
            required
          />
        </>
      )}
    </>
  )
}

export default InputField
