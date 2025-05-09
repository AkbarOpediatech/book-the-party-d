import Loader from '@/app/(landing)/components/Loader/Loader'
import { useFetchBookingsQuery } from '@/redux/features/bookings/apiSlice'
import Image from 'next/image'
import Link from 'next/link'
import productImage from '/public/assets/package1.png'

const BookingHistory = () => {
  const {
    data: bookingResponse,
    isLoading,
    isError
  } = useFetchBookingsQuery({
    role: 'admin',
    limit: 8
  })

  const bookingData = bookingResponse?.data || []
  const totalRecords = bookingResponse?.pagination?.records || 0

  if (isLoading) {
    return <Loader type="loading" message="Please wait sometimes" />
  }

  if (isError) {
    return <Loader type="error" message="Please try again later." />
  }

  return (
    <div className="no-scroll max-h-[806px] overflow-y-scroll bg-white pb-20 shadow-one">
      <div className="booking_heading p-6">
        <h4 className="mb-1 text-lg font-bold text-clr-48">Booking history</h4>
        <p className="text-sm text-clr-81">You have {totalRecords} Bookings in total</p>
      </div>
      <ul className="booking-details px-5 lg:px-10">
        {bookingData?.map((items, index) => (
          <li className="mb-4 flex items-center gap-3 rounded-xl p-1 hover:bg-slate-100" key={index}>
            <div className="h-14 w-14 overflow-hidden rounded-xl">
              <Image
                width={60}
                height={60}
                src={items?.service_embedded?.featured_image || productImage}
                alt="image"
                className="w-full overflow-hidden"
              />
            </div>

            <div>
              <Link href={'#'} className="text-sm font-semibold text-clr-36">
                {items?.service_embedded?.title}
              </Link>
              <p className="text-sm text-clr-81">{items?.service_embedded?.inclusions}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="px-10">
        <Link
          href={'/dashboard/vendor/bookings'}
          className="block border py-3 text-center text-sm font-bold text-clr-48 hover:bg-slate-100"
        >
          View All
        </Link>
      </div>
    </div>
  )
}

export default BookingHistory
