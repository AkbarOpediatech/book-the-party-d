'use client'
import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import Loader from '@/app/(landing)/components/Loader/Loader'
import { useMyNotificationsQuery } from '@/redux/features/notification/apiSlice'
import { NotificationItem } from '@/utils'
import { useState } from 'react'
import Notification from './components/Notification'

type INotification = {
  thisWeek: NotificationItem[]
  today: NotificationItem[]
  others: NotificationItem[]
}

const Notifications = () => {
  const allNotifications = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [visibleCount, setVisibleCount] = useState(2)
  const [loading, setLoading] = useState(false)

  const [page, setPage] = useState(1)
  const [notification, setNotification] = useState<INotification>({
    thisWeek: [],
    today: [],
    others: []
  })

  // const loadMoreNotifications = () => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setVisibleCount(prevCount => prevCount + 5)
  //     setLoading(false)
  //   }, 1000)
  // }

  // const { response: data, error } = useFetchServiceService()
  const { data, error } = useMyNotificationsQuery({ page })

  if (loading) return <Loader type="loading" message="Please sometimes wait." />
  if (error) return <Loader type="error" message="Please try again later." />

  const loadMoreNotifications = () => {
    setPage(prevPage => prevPage + 1) // Increment the page number
  }

  // useEffect(() => {  //TODO: need to commented it out notidicaion
  //   if (data) {
  //     const today = data?.data?.today || []
  //     const thisWeek = data?.data?.thisWeek || []
  //     const others = data?.data?.others || []

  //     // Merge new notifications with existing ones
  //     setNotification(prev => ({
  //       today: [...prev.today, ...today],
  //       thisWeek: [...prev.thisWeek, ...thisWeek],
  //       others: [...prev.others, ...others]
  //     }))
  //   }
  // }, [data])
  return (
    <div>
      <p className="mb-4 text-[22px] font-semibold text-clr-36">Notifications</p>
      <div className="flex flex-col gap-4">
        {notification.today.length > 0 && (
          <>
            <p className="text-xl text-gray-500">Today</p>
            {notification?.today?.map((data, index) => (
              <div key={index} className="rounded-lg bg-white p-4">
                <Notification />
              </div>
            ))}
          </>
        )}
        {notification.thisWeek.length > 0 && (
          <>
            <p className="text-xl text-gray-500">This week</p>
            {notification?.thisWeek?.map((data, index) => (
              <div key={index} className="rounded-lg bg-white p-4">
                <Notification />
              </div>
            ))}
          </>
        )}
        {notification.others.length > 0 && (
          <>
            <p className="text-xl text-gray-500">Others</p>
            {notification?.others?.map((data, index) => (
              <div key={index} className="rounded-lg bg-white p-4">
                <Notification />
              </div>
            ))}
          </>
        )}
      </div>

      {loading ? (
        <p className="mt-4 text-center text-gray-500">
          <Loader type="loading" />
        </p>
      ) : (
        <DashboardButton
          name="Load More"
          type="button"
          className="mx-auto mt-4"
          onClick={loadMoreNotifications}
        />
        // visibleCount < allNotifications.length && (
        //   <DashboardButton
        //     name="Load More"
        //     type="button"
        //     className="mx-auto mt-4"
        //     onClick={loadMoreNotifications}
        //   />
        // )
      )}
    </div>
  )
}

export default Notifications
