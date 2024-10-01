import TitleAndBreadCrumbs from '@/app/(dashboard)/components/TitleAndBreadCrumbs'
import React from 'react'
import BookingAnalytics from './components/BookingAnalytics'
import BookingTable from './components/BookingTable'

const VendorBookings = () => {
  return (
    <React.Fragment>
      <TitleAndBreadCrumbs title={'Bookings'} menuitem={'Dashboard'} breadcrumbs={'Bookings'} />
      <BookingAnalytics />
      <BookingTable />
    </React.Fragment>
  )
}

export default VendorBookings
