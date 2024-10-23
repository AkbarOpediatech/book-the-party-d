import { subscriptionDetails } from '@/utils'
import { CheckIcon } from '@heroicons/react/16/solid'

const Subscription = () => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {subscriptionDetails.map((data, index) => (
        <div
          key={index}
          className="flex h-full flex-col justify-between gap-6 rounded-lg border border-clr-fb bg-white p-6"
        >
          <div>
            <p>{data.title}</p>
            <p>${data.price}</p>
            {data.description && <p>{data.description}</p>}
          </div>
          <div className="flex flex-col gap-3">
            {data.details.map(details => (
              <div key={details} className="flex items-center gap-3">
                <span className="flex size-5 items-center justify-center rounded bg-[#F2F2F2]">
                  <CheckIcon className="size-4" />
                </span>
                <p>{details}</p>
              </div>
            ))}
          </div>
          <button className="w-full rounded border border-black bg-white p-2 font-inter font-medium">
            Select
          </button>
        </div>
      ))}
    </div>
  )
}

export default Subscription
