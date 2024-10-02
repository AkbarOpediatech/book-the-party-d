'use client'
import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import TitleAndBreadCrumbs from '@/app/(dashboard)/components/TitleAndBreadCrumbs'
import { PlusIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import ListingForm from './components/ListingForm'
import ListingTable from './components/ListingTable'

const VendorListing = () => {
  const [listingForm, setListingForm] = useState<boolean>(false)
  return (
    <div className="bg-white px-7 py-10">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-5">
        <TitleAndBreadCrumbs title={'My Listings'} menuitem={'Dashboard'} breadcrumbs={'Items'} />
        <DashboardButton
          name={listingForm ? 'Cancel' : 'New listing'}
          type="button"
          onClick={() => setListingForm(!listingForm)}
          icon={listingForm ? '' : <PlusIcon className="size-4 font-bold" />}
        />
      </div>

      {listingForm ? <ListingForm /> : <ListingTable />}
    </div>
  )
}

export default VendorListing
