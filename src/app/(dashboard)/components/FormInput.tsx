type IProps = {
  name: string
  label?: string
  type: string
  placeholder?: string
  customClass?: string
  options?: string[]
}
const FormInput: React.FC<IProps> = ({ name, label, type, options, customClass, placeholder }) => {
  return (
    <div className={customClass}>
      <label htmlFor={name} className="mb-2 block text-clr-ab">
        {label}
      </label>
      {type === 'select' ? (
        <select name={name} className="w-full rounded-md border border-gray-300 p-3 font-inter text-gray-500">
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          name={name}
          className="min-h-[164px] w-full rounded-md border border-gray-300 p-3 font-inter text-gray-500"
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="w-full rounded-md border border-gray-300 p-3 font-inter text-gray-500"
        />
      )}
    </div>
  )
}

export default FormInput
