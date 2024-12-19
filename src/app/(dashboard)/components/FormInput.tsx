type IProps = {
  name: string
  label?: string
  type: string
  placeholder?: string
  customClass?: string
  options?: string[]
  value?: string
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
  value
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
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          name={name}
          onChange={onChange}
          className="font-inter min-h-[164px] w-full rounded-md border border-gray-300 p-3 text-gray-500"
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="font-inter w-full rounded-md border border-gray-300 p-3 text-gray-500"
        />
      )}
    </div>
  )
}

export default FormInput
