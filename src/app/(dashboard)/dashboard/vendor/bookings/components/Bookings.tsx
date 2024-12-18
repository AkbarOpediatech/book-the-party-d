'use client'

import Loader from '@/app/(landing)/components/Loader/Loader'
import usePagination from '@/hooks/usePagination'
import useSearch from '@/hooks/useSearch'
import { useFetchBookingsQuery } from '@/redux/features/bookings/apiSlice'
import { useEffect, useState } from 'react'
import BookingAllTable from './BookingAllTable'
import BookingHeader from './BookingHeader'
import BookingTab from './BookingTab'

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
  const totalRecords = bookingResponse?.pagination?.records || 0

  const statusFilters = ['all', 'completed', 'pending', 'processing']
  const currentStatus = statusFilters[tab]

  const {
    searchTerm,
    setSearchTerm,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    filteredData,
    setStatusFilter
  } = useSearch(bookingData, {
    searchKeys: ['service_embedded.title', '_id', 'price.value'],
    dateKey: 'createdAt',
    statusKey: 'status'
  })

  useEffect(() => {
    setStatusFilter(currentStatus === 'all' ? '' : currentStatus)
  }, [currentStatus, setStatusFilter])

  if (isLoading) {
    return <Loader type="loading" message="Please wait sometimes" />
  }

  if (isError) {
    return <Loader type="error" message="Please try again later." />
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">
      {bookingData && (
        <BookingTab tab={tab} setTab={setTab} totalRecords={totalRecords} bookingData={filteredData} />
      )}
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
