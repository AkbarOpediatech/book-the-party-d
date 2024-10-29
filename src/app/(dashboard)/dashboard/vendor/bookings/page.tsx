import TitleAndBreadCrumbs from '@/app/(dashboard)/components/TitleAndBreadCrumbs'
import React from 'react'
import BookingAnalytics from './components/BookingAnalytics'
import Bookings from './components/Bookings'

const VendorBookings = () => {
  return (
    <React.Fragment>
      <TitleAndBreadCrumbs title={'Bookings'} menuitem={'Dashboard'} breadcrumbs={'Bookings'} />
      <BookingAnalytics />
      <Bookings />
    </React.Fragment>
  )
}

export default VendorBookings
