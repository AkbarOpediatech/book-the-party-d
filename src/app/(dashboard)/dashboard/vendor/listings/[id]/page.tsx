'use client'

import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import Details from './components/Details'
import DetailsTab from './components/DetailsTab'
import ImportantInfo from './components/ImportantInfo'
import Inclusions from './components/Inclusions'
import Ratings from './components/Ratings'
import Reviews from './components/Reviews'
import details from '/public/assets/listing-details.png'

const ListingDetails = () => {
  const [tab, setTab] = useState<number>(0)
  const params = useParams()
  const { id } = params
  return (
    <div className="bg-white px-7 py-3">
      <p className="mb-[70px] text-2xl font-bold text-clr-36">Listing Details {id}</p>

      <div className="mb-5 grid grid-cols-3 gap-16">
        <div className="col-span-2">
          <div className="h-[478px] w-full overflow-hidden rounded-xl">
            <Image className="w-full object-cover" src={details} alt="pic" />
          </div>
        </div>
        <div>
          <span className="mb-4 inline-block rounded-md bg-clr-16/20 px-2 py-[1px] text-xs font-bold text-clr-16">
            Listed
          </span>
          <p className="mb-4 text-xl font-bold text-clr-36">Wedding Decoration</p>
          <div className="mb-6 flex items-center gap-1">
            <Ratings rating={4.5} />
            <p className="text-sm text-clr-81"> (11.78kreviews)</p>
          </div>
          <p className="mb-4 text-sm text-clr-81">Location : Sydney</p>
          <p className="mb-4 text-2xl font-bold text-clr-36"> $62.97</p>

          <div className="mb-5 inline-flex items-center gap-4 rounded-lg border py-4 pl-3 pr-5 text-clr-ab">
            <p>$200 security deposit.</p>
            <InformationCircleIcon className="size-6" />
          </div>
          <div className="mb-9 border-b border-t border-dashed border-clr-ab/25 py-5">
            <p className="mb-4 font-semibold text-clr-36">Category</p>
            <p className="inline-block rounded-lg border py-4 pl-3 pr-5 text-clr-ab">Party Set up</p>
          </div>
          <DashboardButton
            name="Remove Item"
            type="button"
            className="flex w-full justify-center font-bold"
          />
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
