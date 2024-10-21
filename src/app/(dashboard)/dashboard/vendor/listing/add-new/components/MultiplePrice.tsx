import { useState } from 'react'
import { PlusCircleIcon, TrashIcon } from '@heroicons/react/16/solid'

const MultiplePrice = () => {
  const [priceRanges, setPriceRanges] = useState([{ range: '', price: '', error: '' }])

  const rangeRegex = /^\d+-\d+$/

  const handleAddRow = () => {
    setPriceRanges([...priceRanges, { range: '', price: '', error: '' }])
  }

  const handleRemoveRow = (index: number) => {
    const updatedPriceRanges = priceRanges.filter((_, i) => i !== index)
    setPriceRanges(updatedPriceRanges)
  }

  const handleInputChange = (index: number, field: string, value: string) => {
    const updatedPriceRanges = priceRanges.map((item, i) => {
      if (i === index) {
        if (field === 'range') {
          const isValidRange = rangeRegex.test(value)
          return {
            ...item,
            [field]: value,
            error: isValidRange ? '' : 'Invalid range format. Expected format: "5-10"'
          }
        }
        return { ...item, [field]: value }
      }
      return item
    })
    setPriceRanges(updatedPriceRanges)
  }

  return (
    <div>
      {priceRanges.map((row, index) => (
        <div key={index} className="mb-4 flex flex-col">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="5-10"
              value={row.range}
              onChange={e => handleInputChange(index, 'range', e.target.value)}
              className={`max-w-[110px] rounded-lg border border-gray-300 bg-gray-50 p-3 font-inter text-sm ${row.error ? 'border-red-500' : ''}`}
            />
            <p className="text-sm text-clr-ab">will take</p>
            <input
              type="number"
              placeholder="$450.00"
              value={row.price}
              onChange={e => handleInputChange(index, 'price', e.target.value)}
              className="max-w-[110px] rounded-lg border border-gray-300 bg-gray-50 p-3 font-inter text-sm"
            />
            <button onClick={handleAddRow}>
              <PlusCircleIcon className="h-5 w-5 fill-gray-400" />
            </button>
            <button onClick={() => handleRemoveRow(index)}>
              <TrashIcon className="h-5 w-5 fill-gray-400" />
            </button>
          </div>
          {/* Error message */}
          {row.error && <p className="text-sm text-red-500">{row.error}</p>}
        </div>
      ))}

      <div>
        <p className="mb-3 text-clr-ab">Security Deposit Amount</p>
        <div className="flex items-center gap-3">
          <div className="border- flex items-center gap-6 rounded-lg border p-4">
            <label htmlFor="deposit1" className="font-medium">
              25%
            </label>
            <input type="radio" id="deposit1" name="deposit" value="25" className="bg-clr-ab accent-clr-fb" />
          </div>
          <div className="border- flex items-center gap-6 rounded-lg border p-4">
            <label htmlFor="deposit2" className="font-medium">
              50%
            </label>
            <input type="radio" id="deposit2" name="deposit" value="50" className="bg-clr-ab accent-clr-fb" />
          </div>
          <div className="border- flex items-center gap-6 rounded-lg border p-4">
            <label htmlFor="deposit3" className="font-medium">
              65%
            </label>
            <input type="radio" id="deposit3" name="deposit" value="65" className="bg-clr-ab accent-clr-fb" />
          </div>
          <div className="border- flex items-center gap-6 rounded-lg border p-4">
            <label htmlFor="deposit4" className="font-medium">
              80%
            </label>
            <input type="radio" id="deposit4" name="deposit" value="80" className="bg-clr-ab accent-clr-fb" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MultiplePrice
