'use client'
import { useFetchBookingsQuery } from '@/redux/features/bookings/apiSlice'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import TransactionHistoryHeader from './TransactionHistoryHeader'

const TransactionHistoryTable = dynamic(() => import('./TransactionHistoryTable'), {
  ssr: false
})

const Transaction = () => {
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState<string>('')

  const {
    data: bookingResponse,
    isLoading,
    isError
  } = useFetchBookingsQuery({
    role: 'admin'
  })

  const bookingData = bookingResponse?.data
  console.log(bookingData, 'bookingData112')

  // const filteredBookings = useMemo(() => {
  //   return (
  //     bookingData &&
  //     bookingData.filter(booking => {
  //       const bookingStartDate = new Date(booking.selected_date[0].start_date).getTime()
  //       const bookingEndDate = new Date(booking.selected_date[0].end_date).getTime()
  //       const inputStartDate = startDate ? new Date(startDate).getTime() : null
  //       const inputEndDate = endDate ? new Date(endDate).getTime() : null
  //       const matchesDate =
  //         (!inputStartDate || bookingStartDate >= inputStartDate) &&
  //         (!inputEndDate || bookingEndDate <= inputEndDate)
  //       const matchesSearch = booking.service_embedded.title.toLowerCase().includes(searchTerm.toLowerCase())
  //       return matchesDate && matchesSearch
  //     })
  //   )
  // }, [bookingData, startDate, endDate, searchTerm])

  if (isLoading) {
    return <div>Loading bookings...</div>
  }

  if (isError) {
    return <div>Error loading bookings. Please try again later.</div>
  }

  return (
    <div className="rounded-lg bg-white shadow">
      <div className="p-2">
        <TransactionHistoryHeader
          startDate={startDate}
          endDate={endDate}
          searchTerm={searchTerm}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          setSearchTerm={setSearchTerm}
        />
        <TransactionHistoryTable data={bookingData} />
      </div>
    </div>
  )
}

export default Transaction
