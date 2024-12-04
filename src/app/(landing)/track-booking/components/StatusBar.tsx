'use client'
import { setStep } from '@/redux/features/popupSlice'
import type { RootState } from '@/redux/store'
import { cn } from '@/utils'
import { CheckIcon, XMarkIcon } from '@heroicons/react/16/solid'
import { useDispatch, useSelector } from 'react-redux'

type Step = {
  id: number
  label: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  activeBgColor: string
  activeIconColor: string
}

const StatusBar: React.FC = () => {
  const dispatch = useDispatch()
  const currentStep = useSelector((state: RootState) => state.popup.currentStep)

  const { canceled } = useSelector((state: RootState) => state.popup)
  const steps: Step[] = [
    { id: 0, label: 'Pending', icon: CheckIcon, activeBgColor: 'bg-[#FFEDED]', activeIconColor: '#FF6B6B' },
    {
      id: 1,
      label: 'In Progress',
      icon: CheckIcon,
      activeBgColor: 'bg-[#FEF8E1]',
      activeIconColor: '#FBC402'
    },
    {
      id: 2,
      label: 'Complete',
      icon: canceled ? XMarkIcon : CheckIcon, // Show XMarkIcon if canceled
      activeBgColor: canceled ? 'bg-[#FFEDED]' : 'bg-[#E4F9E0]',
      activeIconColor: canceled ? '#FF6B6B' : '#1DCE00'
    }
  ]
  const activeLabel = steps.find(step => step.id === currentStep)?.label
  const isActive = (stepId: number) => currentStep >= stepId
  const handleStepChange = (step: number) => {
    dispatch(setStep(step))
  }

  return (
    <div>
      <h1 className="font-sora text-3xl font-bold">
        Booking Status: <span className="text-clr-fb">{activeLabel}</span>
      </h1>
      <div className="m-2 my-8 lg:m-16">
        <ul className="relative flex justify-between after:absolute after:top-6 after:-z-[10] after:w-full after:border after:border-dashed">
          <li>
            <button
              className="flex flex-col justify-start"
              onClick={() => handleStepChange(0)}
              aria-label="Pending"
            >
              <span
                className={cn('mb-3 inline-block rounded p-3', isActive(0) ? 'bg-[#FFEDED]' : 'bg-gray-50')}
              >
                <CheckIcon className="h-6 w-6" style={{ fill: isActive(0) ? '#FF6B6B' : 'gray' }} />
              </span>
              <p className="font-sora text-sm font-light text-clr-0f md:text-2xl">Pending</p>
            </button>
          </li>
          <li>
            <button
              className="flex flex-col items-center justify-start"
              onClick={() => handleStepChange(1)}
              aria-label="In Progress"
            >
              <span
                className={cn('mb-3 inline-block rounded p-3', isActive(1) ? 'bg-[#FEF8E1]' : 'bg-gray-50')}
              >
                <CheckIcon className="h-6 w-6" style={{ fill: isActive(1) ? '#FBC402' : 'gray' }} />
              </span>
              <p className="font-sora text-sm font-light text-clr-0f md:text-2xl">In Progress</p>
            </button>
          </li>
          <li>
            <button
              className="flex flex-col items-end"
              onClick={() => handleStepChange(2)}
              aria-label="Complete"
            >
              <span
                className={cn('mb-3 inline-block rounded p-3', isActive(2) ? 'bg-[#E4F9E0]' : 'bg-gray-50')}
              >
                {canceled ? (
                  <XMarkIcon className="h-6 w-6" style={{ fill: '#FF6B6B' }} />
                ) : (
                  <CheckIcon className="h-6 w-6" style={{ fill: isActive(2) ? '#1DCE00' : 'gray' }} />
                )}
              </span>
              <p className="font-sora text-sm font-light text-clr-0f md:text-2xl">Complete</p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default StatusBar
