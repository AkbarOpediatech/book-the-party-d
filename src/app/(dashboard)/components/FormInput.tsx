import type { IPrice } from '@/redux/features/services/apiSlice'

type OptionType = { value: string; title: string }

type LocationOption = { id: string; title: string; value?: string }

type IProps = {
  name: string
  label?: string
  type: string
  placeholder?: string
  catData?: boolean
  customClass?: string
  options?: (string | OptionType | LocationOption)[]
  value?: string | number | readonly string[] | IPrice[] | undefined
  isLocation?: boolean
  readOnly?: boolean
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void | undefined
}

const FormInput: React.FC<IProps> = ({
  name,
  label,
  type,
  options,
  customClass,
  placeholder,
  onChange,
  catData,
  value,
  isLocation,
  readOnly
}) => {
  const transformValue = (value: IPrice[] | string | number | readonly string[] | undefined) => {
    if (Array.isArray(value) && value[0] && 'price' in value) {
      return value.map(item => item?.value).join(', ')
    }
    return value // If it's not IPrice[], return the value as is
  }

  const transformedValue = transformValue(value)

  return (
    <div className={customClass}>
      <label htmlFor={name} className="mb-2 block text-clr-ab">
        {label}
      </label>
      {type === 'select' && !isLocation ? (
        <select
          defaultValue=""
          onChange={onChange}
          name={name}
          className="font-inter w-full rounded-md border border-gray-300 p-3 text-gray-500"
        >
          <option disabled value="">
            Select option
          </option>
          {catData
            ? options?.map((option, index) =>
                typeof option === 'object' ? (
                  <option key={index} value={option?.value}>
                    {option.title}
                  </option>
                ) : null
              )
            : options?.map((option, index) =>
                typeof option === 'string' ? (
                  <option key={index} value={option || String(value)}>
                    {option}
                  </option>
                ) : null
              )}
        </select>
      ) : isLocation ? (
        <select
          value={transformedValue as string}
          onChange={onChange}
          name={name}
          className="font-inter w-full rounded-md border border-gray-300 p-3 text-gray-500"
        >
          <option disabled value="">
            Select location
          </option>
          {options?.map((option, index) =>
            typeof option === 'object' && 'id' in option && 'title' in option ? (
              <option key={index} value={option.id}>
                {option.title}
              </option>
            ) : null
          )}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          name={name}
          value={transformedValue as string}
          onChange={onChange}
          className="font-inter min-h-[164px] w-full rounded-md border border-gray-300 p-3 text-gray-500"
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          value={transformedValue as string | number}
          onChange={onChange}
          readOnly={readOnly}
          placeholder={placeholder}
          className="font-inter w-full rounded-md border border-gray-300 p-3 text-gray-500"
        />
      )}
    </div>
  )
}

export default FormInput
