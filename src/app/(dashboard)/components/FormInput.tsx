type IProps = {
  name: string
  label?: string
  type: string
  placeholder?: string
  customClass?: string
  options?: string[]
  onChange?: any
}
const FormInput: React.FC<IProps> = ({ name, label, type, options, customClass, placeholder, onChange }) => {
  return (
    <div className={customClass}>
      <label htmlFor={name} className="mb-2 block text-clr-ab">
        {label}
      </label>
      {type === 'select' ? (
        <select
          onChange={onChange}
          name={name}
          className="w-full rounded-md border border-gray-300 p-3 font-inter text-gray-500"
        >
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
          className="min-h-[164px] w-full rounded-md border border-gray-300 p-3 font-inter text-gray-500"
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full rounded-md border border-gray-300 p-3 font-inter text-gray-500"
        />
      )}
    </div>
  )
}

export default FormInput
