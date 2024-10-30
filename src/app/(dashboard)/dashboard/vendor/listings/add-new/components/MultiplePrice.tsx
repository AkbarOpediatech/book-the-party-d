import { RANGE_REGEX } from '@/components/regex'
import { PlusCircleIcon, TrashIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import RadioBox from './RadioBox'

const MultiplePrice = () => {
  const [priceRanges, setPriceRanges] = useState([{ range: '', price: '', error: '' }])
  const [selectedDeposit, setSelectedDeposit] = useState<string>('')

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
          const isValidRange = RANGE_REGEX.test(value)
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

  const handleDepositChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDeposit(event.target.value)
  }

  return (
    <div>
      {priceRanges.map((row, index) => (
        <div key={index} className="mb-4 flex flex-col">
          <div className="flex items-center gap-1 md:gap-2">
            <input
              type="text"
              placeholder="5-10"
              value={row.range}
              onChange={e => handleInputChange(index, 'range', e.target.value)}
              className={`max-w-[110px] rounded-lg border border-gray-300 bg-gray-50 p-1 font-inter text-sm md:p-3 ${row.error ? 'border-red-500' : ''}`}
            />
            <p className="text-xs text-clr-ab md:text-sm">will take</p>
            <input
              type="number"
              placeholder="$450.00"
              value={row.price}
              onChange={e => handleInputChange(index, 'price', e.target.value)}
              className="max-w-[110px] rounded-lg border border-gray-300 bg-gray-50 p-1 font-inter text-sm md:p-3"
            />
            <button type="button" onClick={handleAddRow}>
              <PlusCircleIcon className="size-5 fill-gray-400" />
            </button>
            <button type="button" onClick={() => handleRemoveRow(index)}>
              <TrashIcon className="size-5 fill-gray-400" />
            </button>
          </div>

          {row.error && <p className="text-sm text-red-500">{row.error}</p>}
        </div>
      ))}

      <div>
        <p className="mb-3 text-clr-ab">Security Deposit Amount</p>
        <div className="flex flex-wrap items-center gap-3">
          <RadioBox
            id="deposit1"
            name="deposit"
            label="25%"
            value="25"
            checked={selectedDeposit === '25'}
            onChange={handleDepositChange}
          />
          <RadioBox
            id="deposit2"
            name="deposit"
            label="50%"
            value="50"
            checked={selectedDeposit === '50'}
            onChange={handleDepositChange}
          />
          <RadioBox
            id="deposit3"
            name="deposit"
            label="65%"
            value="65"
            checked={selectedDeposit === '65'}
            onChange={handleDepositChange}
          />
          <RadioBox
            id="deposit4"
            name="deposit"
            label="80%"
            value="80"
            checked={selectedDeposit === '80'}
            onChange={handleDepositChange}
          />
        </div>
      </div>
    </div>
  )
}

export default MultiplePrice
