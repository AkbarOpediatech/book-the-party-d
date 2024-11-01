'use client'
import { useState } from 'react'
import BookingDetails from './components/BookingDetails'
import Cancellation from './components/Cancellation'
import ChangeAbooking from './components/ChangeAbooking'
import FaqBtn from './components/FaqBtn'

const FAQ = () => {
  const [selectedTab, setSelectedTab] = useState(0)

  const handleTabChange = (tabIndex: number) => {
    setSelectedTab(tabIndex)
  }

  return (
    <section className="container py-44">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-5">
          <div className="mb-8">
            <h1 className="mb-6 font-sora text-5xl font-bold md:text-[84px]">Let's Talk</h1>
          </div>
          <FaqBtn selectedTab={selectedTab} onTabChange={handleTabChange} />
        </div>
        <div className="col-span-7">
          {selectedTab == 0 && <BookingDetails selectedTab={selectedTab} />}
          {selectedTab == 1 && <ChangeAbooking />}
          {selectedTab == 2 && <Cancellation />}
        </div>
      </div>
    </section>
  )
}

export default FAQ
