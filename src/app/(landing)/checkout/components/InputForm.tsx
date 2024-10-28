type IProps = {
  labelTitle: string
  htmlFor: string
  inputId: string
  inputType: string
  inputPlaceholder: string
  className?: string
  onChange?: any
}

const InputForm: React.FC<IProps> = ({
  labelTitle,
  htmlFor,
  inputId,
  inputType,
  inputPlaceholder,
  className
}) => {
  return (
    <div className="mb-6 last:mb-0">
      <label htmlFor={htmlFor} className="mb-2 block text-xl font-light capitalize text-clr-0f">
        {labelTitle}
      </label>
      <input
        id={inputId}
        className={`w-full border bg-white px-4 py-3 text-2xl font-light text-clr-0f ${className}`}
        type={inputType}
        placeholder={inputPlaceholder}
      />
    </div>
  )
}

export default InputForm
