import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { PlusCircleIcon, TrashIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'

type IProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Inclusions: React.FC<IProps> = ({ onChange }) => {
  const [inclusions, setInclusions] = useState<string[]>([])
  const [inputValue, setInputValue] = useState<string>('')

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault()
      setInclusions([inputValue.trim(), ...inclusions])
      setInputValue('')
    }
  }

  const handleAddNew = () => {
    setInputValue('')
  }

  const handleRemoveInclusion = (index: number) => {
    const updatedInclusions = inclusions.filter((_, i) => i !== index)
    setInclusions(updatedInclusions)
  }

  // This is the onChange that the parent component will pass down
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    onChange(e) // Ensure the onChange passed from parent is called
  }

  return (
    <div className="mb-4 flex flex-col gap-3">
      <p>Inclusions</p>

      {inclusions.map((inclusion, index) => (
        <div key={index} className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <CheckCircleIcon className="size-8 flex-shrink-0 text-clr-fb" />
            <p className="max-w-[428px] text-sm font-medium">{inclusion}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="cursor-pointer" onClick={handleAddNew}>
              <PlusCircleIcon className="size-5 text-gray-400" />
            </div>
            <button onClick={() => handleRemoveInclusion(index)}>
              <TrashIcon className="size-4 text-gray-400" />
            </button>
          </div>
        </div>
      ))}

      <div className="relative z-10 mb-4">
        <input
          type="text"
          placeholder="Write here"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="w-full rounded-md border border-gray-300 px-4 py-2"
        />
      </div>
    </div>
  )
}

export default Inclusions
