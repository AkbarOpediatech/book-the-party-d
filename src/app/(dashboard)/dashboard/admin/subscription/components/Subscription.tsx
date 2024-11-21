'use client'
import { subscriptionDetails } from '@/utils'
import { CheckIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

const Subscription = () => {
  const [selectedSubscription, setSelectedSubscription] = useState<number | null>(null)

  const handleSelect = (index: number) => {
    setSelectedSubscription(prevSelected => (prevSelected === index ? null : index))
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {subscriptionDetails.map((data, index) => (
        <div
          key={index}
          className={`flex h-full flex-col justify-between gap-6 rounded-lg border p-6 transition-all duration-300 ease-in hover:shadow-lg ${
            selectedSubscription === index ? 'border-[#E4E4E4] bg-gradient-one' : 'border-clr-fb bg-white'
          }`}
        >
          <div>
            <p
              className={`${selectedSubscription === index ? 'text-white' : 'text-black'} mb-1 font-sora text-xl font-semibold md:text-2xl`}
            >
              {data.title}{' '}
              {data.tag && (
                <span
                  className={`${selectedSubscription === index ? 'bg-[#AB6DFF] text-white' : 'bg-gray-100'} ms-2 rounded px-2 py-1 text-xs font-semibold`}
                >
                  {data.tag}
                </span>
              )}
            </p>
            <p
              className={`${selectedSubscription === index ? 'text-white' : 'text-black'} font-sora text-2xl font-semibold md:text-[32px]`}
            >
              ${data.price}
            </p>
            {data.description && (
              <p
                className={`${selectedSubscription === index ? 'text-[#AFAFAF]' : 'text-black'} mt-1 font-sora text-xs font-semibold`}
              >
                {data.description}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-3">
            {data.details.map(details => (
              <div key={details} className="flex items-center gap-3">
                <span
                  className={`${selectedSubscription === index ? 'bg-[#AB6DFF] text-white' : 'bg-[#F2F2F2] text-[#AFAFAF]'} flex size-5 items-center justify-center rounded`}
                >
                  <CheckIcon className="size-4" />
                </span>
                <p
                  className={`${selectedSubscription === index ? 'text-white' : 'text-black'} font-inter text-sm`}
                >
                  {details}
                </p>
              </div>
            ))}
          </div>
          <button
            className={`${selectedSubscription === index ? 'border-[#A1A3D8]' : 'border-black'} w-full rounded border bg-white p-2 font-inter font-medium`}
            onClick={() => handleSelect(index)}
          >
            {selectedSubscription === index ? 'Cancel Plan' : 'Select'}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Subscription
