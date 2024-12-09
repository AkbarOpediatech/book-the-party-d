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

  const filterData = () => {
    if (!searchTerm) return bookingData
    return bookingData?.filter(
      item =>
        item.service_embedded.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.price.value.toString().includes(searchTerm)
    )
  }

  const filteredData = filterData()

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
        <TransactionHistoryTable data={filteredData} />
      </div>
    </div>
  )
}

export default Transaction
