import BookingHeader from './BookingHeader'
import BookingTab from './BookingTab'

const Bookings = () => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">
      <BookingTab />
      <BookingHeader />
    </div>
  )
}

export default Bookings
