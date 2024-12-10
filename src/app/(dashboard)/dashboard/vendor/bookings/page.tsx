import TitleAndBreadCrumbs from '@/app/(dashboard)/components/TitleAndBreadCrumbs'
import BookingAnalytics from './components/BookingAnalytics'
import Bookings from './components/Bookings'

const VendorBookings = () => {
  return (
    <div className="bg-white px-2 py-10 lg:px-7">
      <TitleAndBreadCrumbs title={'Bookings'} menuitem={'Dashboard'} breadcrumbs={'Bookings'} />
      <BookingAnalytics />
      <Bookings />
    </div>
  )
}

export default VendorBookings
