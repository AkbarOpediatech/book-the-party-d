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
    <div className="bg-white px-4 py-3 sm:px-6 lg:px-7">
      <p className="mb-10 text-lg font-bold text-clr-36 sm:text-xl md:mb-[70px] md:text-2xl">
        Listing Details {id}
      </p>
      <div className="mb-5 grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="col-span-2 md:col-span-1">
          <div className="w-full overflow-hidden rounded-xl lg:h-[478px]">
            <Image className="h-auto w-full object-cover lg:h-[478px]" src={details} alt="pic" />
          </div>
        </div>
        <div>
          <span className="mb-4 inline-block rounded-md bg-clr-16/20 px-2 py-1 text-xs font-bold text-clr-16 sm:text-sm">
            Listed
          </span>
          <p className="mb-4 text-lg font-bold text-clr-36 sm:text-xl">Wedding Decoration</p>
          <div className="mb-6 flex flex-wrap items-center gap-1">
            <Ratings rating={4.5} />
            <p className="text-xs text-clr-81 sm:text-sm"> (11.78kreviews)</p>
          </div>
          <p className="mb-4 text-sm text-clr-81 sm:text-base">Location: Sydney</p>
          <p className="mb-4 text-lg font-bold text-clr-36 sm:text-xl md:text-2xl">$62.97</p>

          <div className="mb-5 inline-flex flex-wrap items-center gap-4 rounded-lg border py-3 pl-3 pr-5 text-clr-ab sm:py-4">
            <p className="text-sm sm:text-base">$200 security deposit.</p>
            <InformationCircleIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div className="mb-9 border-b border-t border-dashed border-clr-ab/25 py-5">
            <p className="mb-4 font-semibold text-clr-36 sm:text-lg">Category</p>
            <p className="inline-block rounded-lg border px-4 py-2 text-xs text-clr-ab sm:px-5 sm:py-3 sm:text-sm">
              Party Set up
            </p>
          </div>
          <DashboardButton
            name="Remove Item"
            type="button"
            className="flex w-full justify-center text-sm font-bold sm:text-base"
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
