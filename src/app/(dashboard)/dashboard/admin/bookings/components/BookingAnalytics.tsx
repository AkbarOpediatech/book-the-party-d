import { bookingAnalytics } from '@/utils'
import Image from 'next/image'

const BookingAnalytics = () => {
  return (
    <div className="my-10 rounded-2xl bg-white py-4 shadow-one">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {bookingAnalytics.map((data, index) => (
          <div key={index}>
            <div className="flex justify-start ps-4 md:justify-center md:ps-0 lg:border-r lg:border-dashed">
              <div className="flex items-center gap-4">
                <div className="task-chart">
                  <Image src={data.pic} alt="icon" />
                </div>
                <div className="task-information">
                  <h3 className="mb-1 text-lg font-bold text-clr-36">{data.title}</h3>
                  <p className="mb-1 text-sm text-clr-81">
                    <span className="font-semibold text-clr-36">{data.amount}</span> Bookings
                  </p>
                  <p
                    className={`text-sm font-semibold ${data.title === 'Total' ? 'text-clr-1c' : data.title === 'Completed' ? 'text-clr-fb' : data.title === 'Pending' ? 'text-clr-07' : data.title === 'Cancelled' ? 'text-clr-d48' : ''} `}
                  >
                    ${data.price}
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
