'use client'

import usePagination from '@/hooks/usePagination'
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
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState<string>('')
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
  const totalRecords = bookingResponse?.pagination?.records || 0

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

  const filteredData = getFilteredData().filter(booking => {
    const bookingStartDate = new Date(booking.selected_date[0].start_date).getTime()
    const bookingEndDate = new Date(booking.selected_date[0].end_date).getTime()
    const inputStartDate = startDate ? new Date(startDate).getTime() : null
    const inputEndDate = endDate ? new Date(endDate).getTime() : null
    const matchesDate =
      (!inputStartDate || bookingStartDate >= inputStartDate) &&
      (!inputEndDate || bookingEndDate <= inputEndDate)
    const matchesSearch = booking.service_embedded.title.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesDate && matchesSearch
  })

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
