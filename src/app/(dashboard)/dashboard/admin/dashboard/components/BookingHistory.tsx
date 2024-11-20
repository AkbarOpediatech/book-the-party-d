import { dashboardBookingHistory } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'

const BookingHistory = () => {
  return (
    <div className="max-h-[806px] bg-white pb-20 shadow-one">
      <div className="booking_heading p-6">
        <h4 className="mb-1 text-lg font-bold text-clr-48">Booking history</h4>
        <p className="text-sm text-clr-81">You have 10 Bookings in total</p>
      </div>
      <ul className="booking-details px-5 lg:px-10">
        {dashboardBookingHistory
          .slice(0, 7)
          .reverse()
          .map((dbhItems, index) => (
            <li className="mb-4 flex items-center gap-3 rounded-xl p-1 hover:bg-slate-100" key={index}>
              <div className="h-14 w-14 overflow-hidden rounded-xl">
                <Image src={dbhItems.img} alt="image" />
              </div>

              <div>
                <Link href={'#'} className="text-sm font-semibold text-clr-36">
                  {dbhItems.title}
                </Link>
                <p className="text-sm text-clr-81">{dbhItems.desc}</p>
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
