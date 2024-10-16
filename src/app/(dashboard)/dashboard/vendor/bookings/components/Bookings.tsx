'use client'
const BookingAllTable = dynamic(() => import('./BookingAllTable'), {
  ssr: false
})
import dynamic from 'next/dynamic'
import { useState } from 'react'
import BookingHeader from './BookingHeader'
import BookingTab from './BookingTab'

const Bookings = () => {
  const [tab, setTab] = useState<number>(0)

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
