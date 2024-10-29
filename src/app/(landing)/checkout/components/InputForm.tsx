import { cn } from '@/utils'

type IProps = {
  labelTitle: string
  htmlFor: string
  inputId: string
  inputType: string
  inputPlaceholder: string
  inputClassName?: string
  onChange?: any
  labelClassName?: string
}

const InputForm: React.FC<IProps> = ({
  labelTitle,
  htmlFor,
  inputId,
  inputType,
  inputPlaceholder,
  inputClassName,
  labelClassName
}) => {
  return (
    <div className="mb-6 last:mb-0">
      <label
        htmlFor={htmlFor}
        className={cn('mb-2 block text-xl font-light capitalize text-clr-0f', labelClassName)}
      >
        {labelTitle}
      </label>
      <input
        id={inputId}
        className={cn('w-full border bg-white px-4 py-3 text-2xl font-light text-clr-0f', inputClassName)}
        type={inputType}
        placeholder={inputPlaceholder}
      />
    </div>
  )
}

export default InputForm
