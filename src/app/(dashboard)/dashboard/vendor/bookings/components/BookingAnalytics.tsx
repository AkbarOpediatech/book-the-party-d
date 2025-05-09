'use client'

import Loader from '@/app/(landing)/components/Loader/Loader'
import { useFetchBookingsQuery } from '@/redux/features/bookings/apiSlice'
import Image from 'next/image'
import Canceled from '/public/assets/ic_canceled.svg'
import Complete from '/public/assets/ic_complete.svg'
import Pending from '/public/assets/ic_pending.svg'
import Total from '/public/assets/ic_total.svg'

const BookingAnalytics = () => {
  const {
    data: fetchedData,
    isLoading,
    isError
  } = useFetchBookingsQuery({
    role: 'admin'
  })

  // Safeguard against undefined data
  const analytics = fetchedData?.data?.reduce(
    (acc, booking) => {
      // const { service_total } = booking.amount

      const service_total = booking.amount?.service_total
      const { status } = booking

      // Update totals
      acc.total.count += 1
      acc.total.revenue += service_total as number

      // Update based on status
      if (status === 'completed') {
        acc.completed.count += 1
        acc.completed.revenue += service_total as number
      } else if (status === 'pending') {
        acc.pending.count += 1
        acc.pending.revenue += service_total as number
      } else if (status === 'cancelled') {
        acc.cancelled.count += 1
        acc.cancelled.revenue += service_total as number
      }

      return acc
    },
    {
      total: { count: 0, revenue: 0 },
      completed: { count: 0, revenue: 0 },
      pending: { count: 0, revenue: 0 },
      cancelled: { count: 0, revenue: 0 }
    }
  )

  // Map data to required format
  const bookingAnalyticsData = [
    {
      pic: Total,
      title: 'Total',
      amount: analytics?.total.count || 0,
      price: analytics?.total.revenue || 0
    },
    {
      pic: Complete,
      title: 'Completed',
      amount: analytics?.completed.count || 0,
      price: analytics?.completed.revenue || 0
    },
    {
      pic: Pending,
      title: 'Pending',
      amount: analytics?.pending.count || 0,
      price: analytics?.pending.revenue || 0
    },
    {
      pic: Canceled,
      title: 'Cancelled',
      amount: analytics?.cancelled.count || 0,
      price: analytics?.cancelled.revenue || 0
    }
  ]

  if (isLoading) {
    return <Loader type="loading" />
  }

  if (isError) {
    return <Loader type="error" message="Please try again later." />
  }

  return (
    <div className="my-10 rounded-2xl bg-white py-4 shadow-one">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {bookingAnalyticsData.map((data, index) => (
          <div key={index}>
            <div className="flex justify-start ps-4 md:justify-center md:ps-0 lg:border-r lg:border-dashed">
              <div className="flex items-center gap-4">
                <div className="task-chart">
                  <Image src={data.pic} alt="icon" width={40} height={40} />
                </div>
                <div className="task-information">
                  <h3 className="mb-1 text-lg font-bold text-clr-36">{data.title}</h3>
                  <p className="mb-1 text-sm text-clr-81">
                    <span className="font-semibold text-clr-36">{data.amount}</span> Bookings
                  </p>
                  <p
                    className={`text-sm font-semibold ${data.title === 'Total' ? 'text-clr-1c' : data.title === 'Completed' ? 'text-clr-fb' : data.title === 'Pending' ? 'text-clr-07' : data.title === 'Cancelled' ? 'text-clr-d48' : ''} `}
                  >
                    ${data.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookingAnalytics
