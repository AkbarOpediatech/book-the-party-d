import FormInput from '@/app/(dashboard)/components/FormInput'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { PlusCircleIcon, TrashIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const Inclusions = () => {
  const [inclusions, setInclusions] = useState<string[]>([])
  const [isAdding, setIsAdding] = useState<boolean>(true)
  const [newInclusion, setNewInclusion] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewInclusion(e.target.value)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // if (e.key === 'Enter' && newInclusion.trim()) {
    //   e.preventDefault() // Prevent form submission
    //   setInclusions([...inclusions, newInclusion.trim()])
    //   setNewInclusion('') // Clear the input
    //   // setIsAdding(false) // Hide the input field
    // }
  }

  const handleAddNew = () => {
    setIsAdding(true)
  }

  const handleRemoveInclusion = (index: number) => {
    const updatedInclusions = inclusions.filter((_, i) => i !== index)
    setInclusions(updatedInclusions)
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
            <button>
              <PlusCircleIcon className="size-4 text-gray-400" onClick={handleAddNew} />
            </button>
            <button onClick={() => handleRemoveInclusion(index)}>
              <TrashIcon className="size-4 text-gray-400" />
            </button>
          </div>
        </div>
      ))}

      {isAdding && (
        <FormInput
          name="inclusion"
          placeholder="Write here"
          type="text"
          // value={newInclusion}
          onChange={handleInputChange}
          // onKeyPress={handleKeyPress}
        />
      )}

      {!isAdding && inclusions.length === 0 && (
        <button onClick={handleAddNew} className="flex items-center gap-2 text-gray-400">
          <PlusCircleIcon className="size-4" />
          <span className="text-sm">Add inclusion</span>
        </button>
      )}
    </div>
  )
}

export default Inclusions
