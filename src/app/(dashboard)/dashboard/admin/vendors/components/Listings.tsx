'use client'
import { useState } from 'react'
import ListedVendor from './ListedVendor'
import ListingTab from './ListingTab'
import VendorRequest from './VendorRequest'

const Listings = () => {
  const [tab, setTab] = useState<number>(0)

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">
      <ListingTab tab={tab} setTab={setTab} />
      <div className="p-4 md:px-6 md:py-5">
        <input
          type="search"
          className="input bg-left-[20px] col-span-2 w-full bg-icon-search bg-no-repeat pl-9"
          style={{ backgroundPosition: 'left 10px center' }}
          placeholder="Search by transaction id"
        />
      </div>
      {tab === 0 && <ListedVendor />}
      {tab === 1 && <VendorRequest />}
    </div>
  )
}

export default Listings
