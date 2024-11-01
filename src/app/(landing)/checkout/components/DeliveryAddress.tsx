'use client'
import { CheckIcon } from '@heroicons/react/16/solid'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const DeliveryAddress = () => {
  const [categoryChecked, setCategoryChecked] = useState(false)

  return (
    <div className="mb-8 border-b pb-8">
      <div className="mb-6 flex justify-between">
        <h1 className="font-sora text-xl font-bold text-clr-0f md:text-2xl">Select a delivery address</h1>
      </div>
      <div className="mb-6 flex gap-6">
        <div className="w-full max-w-[590px] bg-gray-50 p-6">
          <label className="mb-6 flex w-full max-w-[410px] cursor-pointer items-start space-x-3">
            <div
              className={`relative h-4 w-4 rounded-md border border-gray-500 ${categoryChecked && 'border-purple-700 bg-purple-700'}`}
            >
              <input
                type="checkbox"
                checked={categoryChecked}
                onChange={() => setCategoryChecked(!categoryChecked)}
                className="hidden h-4 w-4 cursor-pointer appearance-none rounded-md border border-gray-500 checked:bg-purple-700 focus:ring-purple-700"
              />
              {categoryChecked && (
                <CheckIcon
                  className="absolute left-1/2 top-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2"
                  fill="white"
                />
              )}
            </div>
            <div>
              <p className="mb-5 font-sora text-2xl font-bold leading-5 md:text-[32px]">Sydney</p>
              <p className="text-xl font-light md:text-2xl">4140 oswald Rd. Sydney</p>
            </div>
          </label>
          <div className="flex gap-6">
            <button className="flex w-full max-w-[240px] items-center justify-center gap-3 bg-gray-100 py-3">
              <PencilIcon className="size-4" />
              <span className="text-sm font-light text-clr-0f">Edit</span>
            </button>

            <button className="flex w-full max-w-[240px] items-center justify-center gap-3 bg-clr-e2 py-3">
              <TrashIcon className="size-4" stroke="red" />
              <span className="text-sm font-light text-clr-0f">Delete</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <button type="submit" className="rounded-xl bg-clr-fb px-10 py-4 text-xl text-white md:text-2xl">
          Deliver here
        </button>
        <button type="submit" className="rounded-xl bg-clr-fb px-10 py-4 text-xl text-white md:text-2xl">
          Add new address
        </button>
      </div>
    </div>
  )
}

export default DeliveryAddress
