type OptionType = { value: string; title: string }
type IProps = {
  name: string
  label?: string
  type: string
  placeholder?: string
  catData?: boolean
  customClass?: string
  options?: (string | OptionType)[]
  value?: string | string[]
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
  readOnly
}) => {
  return (
    <div className={customClass}>
      <label htmlFor={name} className="mb-2 block text-clr-ab">
        {label}
      </label>
      {type === 'select' ? (
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
                  <option key={index} value={option.value}>
                    {option.title}
                  </option>
                ) : null
              )
            : options?.map((option, index) =>
                typeof option === 'string' ? (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ) : null
              )}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className="font-inter min-h-[164px] w-full rounded-md border border-gray-300 p-3 text-gray-500"
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
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
