'use client'
import { CreditCardIcon, DocumentTextIcon, HomeIcon } from '@heroicons/react/16/solid'

const ProgressBar = ({ currentStep, setCurrentStep }: any) => {
  return (
    <ul className="relative flex justify-between after:absolute after:top-6 after:-z-[10] after:w-full after:border after:border-dotted">
      <li>
        <button className="flex flex-col justify-start" onClick={() => setCurrentStep(0)}>
          <span className="mb-3 inline-block rounded bg-clr-87 p-3">
            <HomeIcon className="size-6" fill="white" />
          </span>
          <p className="font-sora text-2xl font-light text-clr-0f">Customer details</p>
        </button>
      </li>

      <li>
        <button className="flex flex-col justify-start" onClick={() => setCurrentStep(1)}>
          <span className={`mb-3 inline-block rounded bg-gray-50 p-3 ${currentStep === 1 && 'bg-[#A1A3D8]'}`}>
            <CreditCardIcon className="size-6" />
          </span>
          <p className="font-sora text-2xl font-light text-clr-0f">Payment Method</p>
        </button>
      </li>

      <li>
        <button className="flex flex-col items-end" onClick={() => setCurrentStep(2)}>
          <span
            className={`mb-3 inline-block rounded bg-gray-50 p-3 text-end ${currentStep === 2 && 'bg-[#D1AC73]'}`}
          >
            <DocumentTextIcon className="size-6" />
          </span>
          <p className="font-sora text-2xl font-light text-clr-0f">Review</p>
        </button>
      </li>
    </ul>
  )
}

export default ProgressBar
