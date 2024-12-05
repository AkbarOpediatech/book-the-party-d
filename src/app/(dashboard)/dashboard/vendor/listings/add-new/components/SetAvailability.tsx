import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import GrayBtn from '@/app/(dashboard)/components/GrayBtn'
import { PlusCircleIcon, TrashIcon } from '@heroicons/react/16/solid'
import React from 'react'

type IProps = {
  setStep: (stepIndex: number) => void
  isEditListing: boolean
}
const SetAvailability: React.FC<IProps> = ({ setStep, isEditListing }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(3)
  }
  return (
    <div className="w-full max-w-[736px] rounded-lg bg-white p-6 shadow">
      <p className="mb-6 text-xl font-bold text-clr-36 md:text-2xl">
        {' '}
        {isEditListing === true ? 'Edit Set availability' : 'Set availability'}
      </p>
      <form onSubmit={handleSubmit}>
        <p className="mb-2 text-sm font-medium text-gray-900">Scheduling window</p>

        <div className="mb-6 flex flex-col gap-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((data, index) => (
            <div key={index} className="flex items-center gap-2">
              <p className="w-full max-w-10 text-sm font-medium text-gray-900">{data}</p>
              <select className="font-inter w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm">
                <option value="9">09:00</option>
                <option value="10">10:00</option>
                <option value="11">11:00</option>
              </select>

              <select className="font-inter w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm">
                <option value="11">11:00</option>
                <option value="1">01:00</option>
                <option value="2">02:00</option>
              </select>
              <button>
                <PlusCircleIcon className="size-4 fill-gray-400" />
              </button>
              <button>
                <TrashIcon className="size-4 fill-gray-400" />
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6 border-b border-gray-200" />

        <div className="mt-5 flex items-center gap-4">
          <GrayBtn name="Back" onClick={() => setStep(1)} />
          <DashboardButton name="Continue" type="submit" />
        </div>
      </form>
    </div>
  )
}

export default SetAvailability
