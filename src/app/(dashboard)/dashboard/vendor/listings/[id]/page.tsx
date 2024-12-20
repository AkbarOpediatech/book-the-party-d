'use client'

import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import Loader from '@/app/(landing)/components/Loader/Loader'
import { useFetchServiceByIdQuery } from '@/redux/features/services/apiSlice'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import Details from './components/Details'
import DetailsTab from './components/DetailsTab'
import Inclusions from './components/Inclusions'
import Reviews from './components/Reviews'
import details from '/public/assets/listing-details.png'

const ListingDetails = () => {
  const [tab, setTab] = useState<number>(0)
  const params = useParams()
  const { slug } = params

  const { data: response, isLoading, isError } = useFetchServiceByIdQuery(slug as string)
  const singleVendorData = response?.data

  // const { data: response, isLoading, isError } = useDeleteServiceMutation(id)

  if (isLoading) {
    return <Loader type="loading" />
  }

  if (isError) {
    return <Loader type="error" />
  }

  return (
    <div className="bg-white px-4 py-3 sm:px-6 lg:px-7">
      <p className="mb-10 text-lg font-bold text-clr-36 sm:text-xl md:mb-[70px] md:text-2xl">
        {singleVendorData?.title}
      </p>
      <div className="mb-5 grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="col-span-2 md:col-span-1">
          <div className="w-full overflow-hidden rounded-xl lg:h-[478px]">
            <Image
              width={500}
              height={478}
              className="h-auto w-full object-cover lg:h-[478px]"
              src={singleVendorData?.featured_image || details}
              alt="pic"
            />
          </div>
        </div>

        <div>
          <span className="mb-4 inline-block rounded-md bg-clr-16/20 px-2 py-1 text-xs font-bold text-clr-16 sm:text-sm">
            {singleVendorData?.status === 'publish' ? 'Listed' : 'Unlisted'}
          </span>
          <p className="mb-4 text-lg font-bold text-clr-36 sm:text-xl">{singleVendorData?.title}</p>
          {/* <div className="mb-6 flex flex-wrap items-center gap-1">
            <Ratings rating={4.5} />
            <p className="text-xs text-clr-81 sm:text-sm"> (11.78kreviews)</p>
          </div> */}
          <p className="mb-4 text-sm text-clr-81 sm:text-base">
            Location: {singleVendorData?.location?.title || 'N/A'}
          </p>
          <p className="mb-4 text-lg font-bold text-clr-36 sm:text-xl md:text-2xl">
            ${singleVendorData?.price.map(i => i.value) || 0}
          </p>

          <div className="mb-5 inline-flex flex-wrap items-center gap-4 rounded-lg border py-3 pl-3 pr-5 text-clr-ab sm:py-4">
            <p className="text-sm sm:text-base">
              ${singleVendorData?.security_deposit || 0} security deposit.
            </p>
            <InformationCircleIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div className="mb-9 border-b border-t border-dashed border-clr-ab/25 py-5">
            <p className="mb-4 font-semibold text-clr-36 sm:text-lg">Category</p>
            <p className="inline-block rounded-lg border px-4 py-2 text-xs text-clr-ab sm:px-5 sm:py-3 sm:text-sm">
              {singleVendorData?.category?.title || 'N/A'}
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
      {tab === 0 && <Details onData={singleVendorData} />}
      {tab === 1 && <Inclusions onData={singleVendorData} />}
      {/* {tab === 2 && <ImportantInfo />} */}
      {tab === 2 && <Reviews />}
    </div>
  )
}

export default ListingDetails
