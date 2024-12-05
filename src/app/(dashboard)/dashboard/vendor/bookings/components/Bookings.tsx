'use client'
const BookingAllTable = dynamic(() => import('./BookingAllTable'), {
  ssr: false
})
import { useFetchBookingsQuery } from '@/redux/features/bookings/apiSlice'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import BookingHeader from './BookingHeader'
import BookingTab from './BookingTab'

const Bookings = () => {
  const [tab, setTab] = useState<number>(0)
  const { data: products, isLoading, isError } = useFetchBookingsQuery({ role: 'admin' })
  const fullResponse = products
  const serviceData = fullResponse?.data

  const getFilteredData = () => {
    if (!serviceData) return []
    switch (tab) {
      case 0:
        return serviceData
      case 1:
        return serviceData.filter(booking => booking.status === 'completed')
      case 2:
        return serviceData.filter(booking => booking.status === 'pending')
      case 3:
        return serviceData.filter(booking => booking.status === 'processing')
      default:
        return serviceData
    }
  }

  const filteredData = getFilteredData()

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">
      <BookingTab tab={tab} setTab={setTab} />
      <BookingHeader />
      {tab === 0 && <BookingAllTable data={filteredData} />}
      {tab === 1 && <BookingAllTable data={filteredData} />}
      {tab === 2 && <BookingAllTable data={filteredData} />}
      {tab === 3 && <BookingAllTable data={filteredData} />}
    </div>
  )
}

export default Bookings
