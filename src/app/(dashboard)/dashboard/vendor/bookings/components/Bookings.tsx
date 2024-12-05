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
  const { data: products, isLoading, isError } = useFetchBookingsQuery({ role: 'admin', limit: 30, page: 2 })
  const fullResponse = products
  const serviceData = fullResponse?.data //FIXME:
  console.log('Booking', serviceData)

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">
      <BookingTab tab={tab} setTab={setTab} />
      <BookingHeader />
      {tab === 0 && <BookingAllTable />}
      {tab === 1 && <BookingAllTable />}
      {tab === 2 && <BookingAllTable />}
    </div>
  )
}

export default Bookings
