'use client'
import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import { CheckBadgeIcon, EnvelopeIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import { useState } from 'react'
import BookingStatistics from '../../../vendor/dashboard/components/BookingStatistics'
import BookingHistoryChart from '../../dashboard/components/BookingHistoryChart'
import Details from './components/Details'
import DetailsTab from './components/DetailsTab'
import ImportantInfo from './components/ImportantInfo'
import Inclusions from './components/Inclusions'
import Ratings from './components/Ratings'
import Reviews from './components/Reviews'
import details from '/public/assets/listing-details.png'

const ListingDetails = () => {
  const [tab, setTab] = useState<number>(0)

  return (
    <div className="bg-white px-7 py-3">
      <p className="mb-2 text-xl font-bold text-clr-36 md:text-2xl">Vendor Details</p>

      <ul className="mb-10 flex items-center gap-3">
        <li className="text-xm text-clr-36">Dashboard</li>
        <span className="block h-1 w-1 rounded-full bg-clr-ab"></span>
        <li className="text-xm text-clr-36">Vendors</li>
        <span className="block h-1 w-1 rounded-full bg-clr-ab"></span>
        <li className="text-xm text-clr-ab">Vendor Details</li>
      </ul>

      <div className="mb-5 grid grid-cols-2 gap-16">
        <div className="col-span-1">
          <div className="h-[478px] w-full overflow-hidden rounded-xl">
            <Image className="w-full object-cover" src={details} alt="pic" />
          </div>
        </div>

        <div className="p-10">
          <span className="mb-4 inline-block rounded-md bg-clr-16/20 px-2 py-[1px] text-xs font-bold text-clr-16">
            Available
          </span>
          <p className="mb-4 text-xl font-bold text-clr-36">Courtney Henry</p>
          <div className="mb-6 flex items-center gap-1">
            <Ratings rating={4.5} />
            <p className="text-sm text-clr-81"> (11.78kreviews)</p>
          </div>
          <p className="mb-4 text-xl font-bold text-clr-36 md:text-2xl">
            <span className="text-clr-ab">Avg event price</span> $62.97
          </p>

          <div className="mb-9 border-b border-t border-dashed border-clr-ab/25 py-5">
            <p className="mb-4 font-semibold text-clr-36">Category</p>
            <div className="flex gap-5">
              <p className="inline-block rounded-lg border py-4 pl-3 pr-5 text-clr-ab">Vehicle hire</p>
              <p className="inline-block rounded-lg border py-4 pl-3 pr-5 text-clr-ab">Vehicle hire</p>
            </div>
          </div>

          <div className="flex gap-5">
            <DashboardButton
              name="Send Email"
              type="button"
              icon={<EnvelopeIcon className="size-5" />}
              className="flex w-full justify-center border border-clr-fb bg-transparent font-bold text-black"
            />

            <DashboardButton
              name="Remove Vendor"
              type="button"
              className="flex w-full justify-center font-bold"
            />
          </div>
          <DashboardButton
            name="WWCC verified"
            type="button"
            icon={<CheckBadgeIcon className="size-7 text-clr-5E" />}
            className="mt-5 flex w-full justify-center border border-clr-fb bg-transparent font-bold text-black"
          />
        </div>
      </div>

      <div className="mb-10 grid grid-cols-3 gap-5">
        <div className="col-span-1 w-full rounded-2xl bg-white shadow-one">
          <h2 className="py-5 text-center text-sm font-bold text-clr-36 md:text-base">Booking history</h2>
          <BookingHistoryChart />
        </div>
        <div className="col-span-2 mb-7 h-full w-full rounded-2xl bg-white p-5 shadow-one">
          <div className="mb-[69px]">
            <p className="mb-1 font-bold text-clr-36">Booking Statistics</p>
            <p className="text-xs text-clr-81">(+43%) than last year</p>
          </div>
          <BookingStatistics />
        </div>
      </div>

      <DetailsTab tab={tab} setTab={setTab} />
      {tab === 0 && <Details />}
      {tab === 1 && <Inclusions />}
      {tab === 2 && <ImportantInfo />}
      {tab === 3 && <Reviews />}
    </div>
  )
}

export default ListingDetails
