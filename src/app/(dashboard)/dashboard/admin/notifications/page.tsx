'use client'
import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import { useState } from 'react'
import Notification from './components/Notification'
import Loader from '@/app/(landing)/components/Loader/Loader'

const Notifications = () => {
  const allNotifications = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [visibleCount, setVisibleCount] = useState(2)
  const [loading, setLoading] = useState(false)

  const loadMoreNotifications = () => {
    setLoading(true)
    setTimeout(() => {
      setVisibleCount(prevCount => prevCount + 5)
      setLoading(false)
    }, 1000)
  }

  return (
    <div>
      <p className="mb-4 text-[22px] font-semibold text-clr-36">Notifications</p>
      <div className="flex flex-col gap-4">
        <p className="text-xl text-gray-500">Today</p>

        {allNotifications.slice(0, visibleCount).map((data, index) => (
          <div key={index}>
            <Notification />
          </div>
        ))}
      </div>

      {loading ? (
        <p className="mt-4 text-center text-gray-500"><Loader type='loading'/></p>
      ) : (
        visibleCount < allNotifications.length && (
          <DashboardButton
            name="Load More"
            type="button"
            className="mx-auto mt-4"
            onClick={loadMoreNotifications}
          />
        )
      )}
    </div>
  )
}

export default Notifications
