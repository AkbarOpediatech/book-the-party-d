import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import GrayBtn from '@/app/(dashboard)/components/GrayBtn'
import type { ServiceItemPost } from '@/redux/features/services/apiSlice'
import { daysOfWeek } from '@/utils'
import { PlusCircleIcon, TrashIcon } from '@heroicons/react/16/solid'
import React, { type Dispatch, type SetStateAction } from 'react'

type IProps = {
  setStep: Dispatch<SetStateAction<number>>
  isEditListing?: boolean
  formData: ServiceItemPost
  setFormData: Dispatch<SetStateAction<ServiceItemPost>>
  handleChange: <T extends keyof ServiceItemPost>(field: T, value: ServiceItemPost[T]) => void
}

const SetAvailability: React.FC<IProps> = ({ setStep, isEditListing, handleChange, formData }) => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const handleDayChange = (index: number, field: string, value: string) => {
    const updatedAvailability = [...formData.availability]
    updatedAvailability[index] = {
      ...updatedAvailability[index],
      [field]: value
    }
    handleChange('availability', updatedAvailability)
  }

  const handleAddAvailability = () => {
    const updatedAvailability = [
      ...formData.availability,
      { days: 'Mon', start_time: '', end_time: '' } // Default values
    ]
    handleChange('availability', updatedAvailability)
  }

  const handleRemoveAvailability = (index: number) => {
    const updatedAvailability = formData.availability.filter((_, i) => i !== index)
    handleChange('availability', updatedAvailability)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(3)
  }

  return (
    <div className="w-full max-w-[736px] rounded-lg bg-white p-6 shadow">
      <p className="mb-6 text-xl font-bold text-clr-36 md:text-2xl">
        {isEditListing === true ? 'Edit Set availability' : 'Set availability'}
      </p>
      <form onSubmit={handleSubmit}>
        <p className="mb-2 text-sm font-medium text-gray-900">Scheduling window</p>

        <div className="mb-6 flex flex-col gap-2">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="flex items-center gap-2">
              <p className="w-full max-w-10 text-sm font-medium text-gray-900">{day}</p>

              <select
                value={formData.availability[index]?.start_time || ''}
                onChange={e => handleDayChange(index, 'start_time', e.target.value)}
                className="font-inter w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm"
              >
                <option value="">Select Start Time</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
              </select>

              <select
                value={formData.availability[index]?.end_time || ''}
                onChange={e => handleDayChange(index, 'end_time', e.target.value)}
                className="font-inter w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm"
              >
                <option value="">Select End Time</option>
                <option value="11:00">11:00</option>
                <option value="01:00">01:00</option>
                <option value="02:00">02:00</option>
              </select>

              <button type="button" onClick={handleAddAvailability}>
                <PlusCircleIcon className="size-4 fill-gray-400" />
              </button>

              {formData.availability.length > 1 && (
                <button type="button" onClick={() => handleRemoveAvailability(index)}>
                  <TrashIcon className="size-4 fill-gray-400" />
                </button>
              )}
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
