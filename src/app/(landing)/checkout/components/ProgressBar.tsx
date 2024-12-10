'use client'
import type { RootState } from '@/redux/store'
import { cn } from '@/utils'
import { CreditCardIcon, DocumentTextIcon, HomeIcon } from '@heroicons/react/16/solid'
import { useSelector } from 'react-redux'

const ProgressBar = () => {
  const currentStep = useSelector((state: RootState) => state.stepper.currentStep)

  // const handleStepChange = (step: number) => {
  //   if (currentStep != null) {
  //     if ((currentStep > 0 || currentStep === 1) && step === 0) {
  //       dispatch({ type: 'SET_STEP', payload: 0 })
  //     } else if ((currentStep > 1 || currentStep === 2) && step === 1) {
  //       dispatch({ type: 'SET_STEP', payload: 1 })
  //     } else if ((currentStep > 0 || currentStep === 2) && step === 2) {
  //       dispatch({ type: 'SET_STEP', payload: 2 })
  //     }
  //   }
  // }

  return (
    <ul className="relative flex justify-between after:absolute after:top-6 after:-z-[10] after:w-full after:border after:border-dotted">
      <li>
        <button className="flex flex-col justify-start">
          <span className="mb-3 inline-block rounded bg-clr-87 p-3">
            <HomeIcon className="size-6" fill="white" />
          </span>
          <p className="font-sora text-sm font-light text-clr-0f md:text-2xl">Customer details</p>
        </button>
      </li>

      <li>
        <button className="flex flex-col justify-start">
          <span
            className={cn('mb-3 inline-block rounded bg-gray-50 p-3', currentStep >= 1 && 'bg-[#3a3b4e]')}
          >
            <CreditCardIcon className={`size-6 ${currentStep >= 1 && 'fill-white'}`} />
          </span>
          <p className="font-sora text-sm font-light text-clr-0f md:text-2xl">Payment Method</p>
        </button>
      </li>

      <li>
        <button className="flex flex-col items-end">
          <span
            className={cn('mb-3 inline-block rounded bg-gray-50 p-3', currentStep === 2 && 'bg-[#a18457]')}
          >
            <DocumentTextIcon className={`size-6 ${currentStep === 2 && 'fill-white'}`} />
          </span>
          <p className="font-sora text-sm font-light text-clr-0f md:text-2xl">Review</p>
        </button>
      </li>
    </ul>
  )
}

export default ProgressBar
