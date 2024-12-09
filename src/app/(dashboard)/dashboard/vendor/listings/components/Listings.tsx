import { useFetchBookingsQuery } from '@/redux/features/bookings/apiSlice'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import ListingTab from './ListingTab'
const ListingTable = dynamic(() => import('./ListingTable'), {
  ssr: false
})

const Listings = () => {
  const [tab, setTab] = useState<number>(0)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const {
    data: bookingResponse,
    isLoading,
    isError
  } = useFetchBookingsQuery({
    role: 'admin'
  })
  const bookingData = bookingResponse?.data
  const getFilteredData = () => {
    if (!bookingData) return []
    switch (tab) {
      case 0:
        return bookingData
      case 1:
        return bookingData.filter(booking => booking.status === 'completed')
      case 2:
        return bookingData.filter(booking => booking.status === 'pending')
      case 3:
        return bookingData.filter(booking => booking.status === 'processing')
      default:
        return bookingData
    }
  }
  const filteredData = getFilteredData()
  const filteredBookings = filteredData.filter(booking => {
    const matchesSearch = booking.service_embedded.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  if (isLoading) {
    return <div>Loading bookings...</div>
  }

  if (isError) {
    return <div>Error loading bookings. Please try again later.</div>
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">
      {bookingData && <ListingTab tab={tab} setTab={setTab} bookingData={bookingData} />}
      <div className="px-6 py-5">
        <input
          type="search"
          className="input bg-left-[20px] col-span-2 w-full bg-icon-search bg-no-repeat pl-9"
          style={{ backgroundPosition: 'left 10px center' }}
          placeholder="Search by transaction id"
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      {tab === 0 && <ListingTable data={filteredBookings} />}
      {tab === 1 && <ListingTable data={filteredBookings} />}
    </div>
  )
}

export default Listings
