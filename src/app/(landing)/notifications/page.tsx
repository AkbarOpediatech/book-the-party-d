'use client'
import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import Loader from '@/app/(landing)/components/Loader/Loader'
import { useState } from 'react'
import Notification from './components/Notification'
import { useFetchServiceService } from './NotificationService'

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

  const { response: notificationItems, error } = useFetchServiceService()

  if (loading) return <Loader type="loading" message="Please sometimes wait." />
  if (error) return <Loader type="error" message="Please try again later." />

  return (
    <section className="section-padding">
      <div className="container">
        <p className="mb-4 text-[22px] font-semibold text-clr-36">Notifications</p>
        <div className="flex flex-col gap-4">
          <p className="text-xl text-gray-500">Today</p>

          {allNotifications.slice(0, visibleCount).map((data, index) => (
            <div key={index} className="rounded-lg bg-white p-4">
              <Notification />
            </div>
          ))}
        </div>

        {loading ? (
          <p className="mt-4 text-center text-gray-500">
            <Loader type="loading" />
          </p>
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
    </section>
  )
}

export default Notifications
