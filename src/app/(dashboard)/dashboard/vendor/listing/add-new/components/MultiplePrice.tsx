import { PlusCircleIcon, TrashIcon } from '@heroicons/react/16/solid'

const MultiplePrice = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="5-10"
          className="max-w-[110px] rounded-lg border border-gray-300 bg-gray-50 p-3 font-inter text-sm"
        />

        <p className="text-sm text-clr-ab">will take</p>
        <input
          type="number"
          placeholder="$450.00"
          className="max-w-[110px] rounded-lg border border-gray-300 bg-gray-50 p-3 font-inter text-sm"
        />
        <button>
          <PlusCircleIcon className="size-4 fill-gray-400" />
        </button>
        <button>
          <TrashIcon className="size-4 fill-gray-400" />
        </button>
      </div>
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
