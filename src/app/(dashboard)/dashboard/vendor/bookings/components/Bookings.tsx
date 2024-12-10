'use client'

import usePagination from '@/hooks/usePagination'
import useSearch from '@/hooks/useSearch'
import { useFetchBookingsQuery } from '@/redux/features/bookings/apiSlice'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import BookingHeader from './BookingHeader'
import BookingTab from './BookingTab'

const BookingAllTable = dynamic(() => import('./BookingAllTable'), {
  ssr: false
})

const Bookings = () => {
  const [tab, setTab] = useState<number>(0)
  const { currentPage, pageLimit, handlePageChange, handlePageLimitChange } = usePagination()

  const {
    data: bookingResponse,
    isLoading,
    isError
  } = useFetchBookingsQuery({
    role: 'admin',
    limit: pageLimit,
    page: currentPage
  })

  const bookingData = bookingResponse?.data || []
  console.log(bookingData, 'bookingData')
  const totalRecords = bookingResponse?.pagination?.records || 0

  const { searchTerm, setSearchTerm, startDate, setStartDate, endDate, setEndDate, filteredData } = useSearch(
    bookingData,
    {
      searchKeys: ['service_embedded.title', '_id', 'price.value'],
      dateKey: 'createdAt'
    }
  )

  if (isLoading) {
    return <div>Loading bookings...</div>
  }

  if (isError) {
    return <div>Error loading bookings. Please try again later.</div>
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">
      {bookingData && <BookingTab tab={tab} setTab={setTab} bookingData={bookingData} />}
      <BookingHeader
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <BookingAllTable
        data={filteredData}
        currentPage={currentPage}
        totalRecords={totalRecords}
        pageLimit={pageLimit}
        onPageChange={handlePageChange}
        onPageLimitChange={handlePageLimitChange}
      />
    </div>
  )
}

export default Bookings
