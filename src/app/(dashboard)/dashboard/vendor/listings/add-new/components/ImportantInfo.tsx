import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { PlusCircleIcon, TrashIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'

const ImportantInfo = () => {
  const [importantInfo, setImportantInfo] = useState<string[]>([])
  const [inputValue, setInputValue] = useState<string>('')
  const [isAdding, setIsAdding] = useState<boolean>(true)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault()
      setImportantInfo([inputValue.trim(), ...importantInfo])
      setInputValue('')
      setIsAdding(false)
    }
  }

  const handleAddNew = () => {
    setIsAdding(true)
    setInputValue('')
  }

  const handleRemoveInclusion = (index: number) => {
    const updatedInclusions = importantInfo.filter((_, i) => i !== index)
    setImportantInfo(updatedInclusions)
  }

  return (
    <div className="mb-4 flex flex-col gap-3">
      <p>Important Info</p>

      {importantInfo.map((info, index) => (
        <div key={index} className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <CheckCircleIcon className="size-8 flex-shrink-0 text-clr-fb" />
            <p className="max-w-[428px] text-sm font-medium">{info}</p>
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

      {isAdding && (
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
      )}

      {!isAdding && importantInfo.length === 0 && (
        <button onClick={handleAddNew} className="flex items-center gap-2 text-gray-400">
          <PlusCircleIcon className="size-4" />
          <span className="text-sm">Add inclusion</span>
        </button>
      )}
    </div>
  )
}

export default ImportantInfo
