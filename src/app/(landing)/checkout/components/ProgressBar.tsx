'use client'
import { cn } from '@/utils'
import { CreditCardIcon, DocumentTextIcon, HomeIcon } from '@heroicons/react/16/solid'

const ProgressBar = ({ currentStep, setCurrentStep }: any) => {
  const handleStepChange = (step: any) => {
    if (currentStep !== null && currentStep !== undefined) {
      if ((currentStep > 0 || currentStep === 1) && step === 0) {
        setCurrentStep(0)
      } else if ((currentStep > 1 || currentStep === 2) && step === 1) {
        setCurrentStep(1)
      } else if ((currentStep > 0 || currentStep === 2) && step === 2) {
        setCurrentStep(2)
      }
    }
  }

  return (
    <ul className="relative flex justify-between after:absolute after:top-6 after:-z-[10] after:w-full after:border after:border-dotted">
      <li>
        <button className="flex flex-col justify-start" onClick={() => handleStepChange(0)}>
          <span className="mb-3 inline-block rounded bg-clr-87 p-3">
            <HomeIcon className="size-6" fill="white" />
          </span>
          <p className="font-sora text-2xl font-light text-clr-0f">Customer details</p>
        </button>
      </li>

      <li>
        <button className="flex flex-col justify-start" onClick={() => handleStepChange(1)}>
          <span
            className={cn('mb-3 inline-block rounded bg-gray-50 p-3', currentStep >= 1 && 'bg-[#3a3b4e]')}
          >
            <CreditCardIcon className={`size-6 ${currentStep >= 1 && 'fill-white'}`} />
          </span>
          <p className="font-sora text-2xl font-light text-clr-0f">Payment Method</p>
        </button>
      </li>

      <li>
        <button className="flex flex-col items-end" onClick={() => handleStepChange(2)}>
          <span
            className={cn('mb-3 inline-block rounded bg-gray-50 p-3', currentStep === 2 && 'bg-[#a18457]')}
          >
            <DocumentTextIcon className={`size-6 ${currentStep === 2 && 'fill-white'}`} />
          </span>
          <p className="font-sora text-2xl font-light text-clr-0f">Review</p>
        </button>
      </li>
    </ul>
  )
}

export default ProgressBar
