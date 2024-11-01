import { PencilIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import partyImage from '/public/assets/booking-history-3.png'

const Review = () => {
  return (
    <div className="space-y-6">
      <h1 className="mb-6 font-sora text-xl font-bold text-clr-0f md:text-2xl">
        Date of event : 08 October 2023
      </h1>
      <div className="flex gap-4">
        <div>
          <label htmlFor="startTime" className="mb-2 block text-sm text-clr-1d md:text-base">
            Start time
          </label>
          <input
            id="startTime"
            type="time"
            className="appearance-none rounded-lg border border-clr-ab/30 px-4 py-4"
          />
        </div>
        <div>
          <label htmlFor="endTime" className="mb-2 block text-sm text-clr-1d md:text-base">
            End time
          </label>
          <input
            id="endTime"
            type="time"
            className="appearance-none rounded-lg border border-clr-ab/30 px-4 py-4"
          />
        </div>
      </div>
      <ul className="space-y-6">
        <li className="flex items-start justify-between">
          <div className="flex w-full max-w-[830px] items-center gap-4 border-b pb-4">
            <div className="h-[78px] w-[78px] overflow-hidden">
              <Image width={78} height={78} src={partyImage} alt="thumbnail" />
            </div>
            <div>
              <h2 className="mb-2 font-sora text-sm font-bold text-clr-0f md:text-base">Party Name here</h2>
              <div className="flex gap-2">
                <span className="text-sm font-light text-clr-0f md:text-base">$1999</span>
                <span className="text-sm font-light text-clr-0f md:text-base">QTY: 1</span>
              </div>
            </div>
          </div>
          <div className="">
            <input id="date" type="date" />
          </div>
        </li>
      </ul>
      <div>
        <h3 className="mb-4 font-sora text-xl font-bold text-clr-0f">Event Address</h3>
        <div className="flex items-center justify-between">
          <div className="w-full max-w-[830px] border-b pb-4">
            <p className="mb-2 text-sm font-bold text-clr-0f md:text-base">Perry Wilson</p>
            <p className="text-sm font-light text-clr-0f">4140 Parker Rd. Allentown, New Mexico 31134</p>
          </div>
          <div className="inline-block bg-gray-50 p-[10px]">
            <PencilIcon className="size-4" />
          </div>
        </div>
      </div>
      <div>
        <h3 className="mb-4 font-sora text-xl font-bold text-clr-0f">Payment Method</h3>
        <div className="flex items-center justify-between">
          <div className="mb-4 w-full max-w-[830px] border-b pb-4">
            <p className="mb-2 text-sm font-bold text-clr-0f md:text-base">Credit Card</p>
            <p className="text-sm font-light text-clr-0f">8900 2671 4788 XX70</p>
          </div>
          <div className="inline-block bg-gray-50 p-[10px]">
            <PencilIcon className="size-4" />
          </div>
        </div>
      </div>
      <div>
        <h3 className="mb-4 font-sora text-lg font-normal text-clr-0f">Add special instructions</h3>
        <textarea name="" id="" className="h-[220px] w-full bg-gray-50 p-5"></textarea>
      </div>
    </div>
  )
}

export default Review
