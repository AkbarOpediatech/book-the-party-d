import { PaperClipIcon } from '@heroicons/react/24/outline'

type IProps = {
  labelName?: string
  inputType?: string
  inputId?: string
  htmlFor?: string
  selectName?: string
  selectId?: string
  options?: string[]
  placeholder?: string
}

const ContactInput: React.FC<IProps> = ({
  labelName,
  inputType,
  inputId,
  htmlFor,
  selectName,
  selectId,
  options,
  placeholder
}) => {
  if (inputType === 'select') {
    return (
      <>
        <label htmlFor={htmlFor} className="mb-2 block text-sm capitalize text-black md:mb-5 md:text-base">
          {labelName}
        </label>
        <select name={selectName} id={selectId} className="h-[60px] w-full bg-gray-50 px-5">
          {options?.map((i, index) => (
            <option value={i} key={index}>
              {i}
            </option>
          ))}
        </select>
      </>
    )
  } else if (inputType === 'file') {
    return (
      <>
        <label className="mb-2 flex h-[60px] w-full items-center justify-between bg-gray-50 px-5 text-sm capitalize text-black md:mb-5 md:text-base">
          <span className="text-gray-400">upload inspiration photos </span>
          <span>
            <PaperClipIcon className="size-6" />
          </span>
          <input type="file" className="hidden" />
        </label>
      </>
    )
  }

  return (
    <>
      <label htmlFor={htmlFor} className="mb-2 block text-sm capitalize text-black md:mb-5 md:text-base">
        {labelName}
      </label>
      <input
        type={inputType}
        id={inputId}
        placeholder={placeholder}
        className="h-[60px] w-full bg-gray-50 px-5"
      />
    </>
  )
}

export default ContactInput
