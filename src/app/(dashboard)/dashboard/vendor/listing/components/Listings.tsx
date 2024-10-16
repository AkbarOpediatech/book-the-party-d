import { useState } from 'react'
import ListingTab from './ListingTab'
import ListingTable from './ListingTable'

const Listings = () => {
  const [tab, setTab] = useState<number>(0)
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">
      <ListingTab tab={tab} setTab={setTab} />
      <div className="px-6 py-5">
        <input
          type="search"
          className="input bg-left-[20px] col-span-2 w-full bg-icon-search bg-no-repeat pl-9"
          style={{ backgroundPosition: 'left 10px center' }}
          placeholder="Search by transaction id"
        />
      </div>
      {tab === 0 && <ListingTable />}
      {tab === 1 && <ListingTable />}
    </div>
  )
}

export default Listings
