import type { IChartData, IDashboardBookingHistory, INavigationItem } from './type'
import BHistory2 from '/public/assets/booking-history-2.png'
import BHistory3 from '/public/assets/booking-history-3.png'
import BHistory4 from '/public/assets/booking-history-4.png'
import BHistory5 from '/public/assets/booking-history-5.png'
import BHistory6 from '/public/assets/booking-history-6.png'
import BHistory7 from '/public/assets/booking-history-7.png'
import BHistory from '/public/assets/booking-history.png'
import BankingIcon from '/public/assets/ic_banking.svg'
import BookingsIcon from '/public/assets/ic_booking.svg'
import LiveChatIcon from '/public/assets/ic_chat.svg'
import DashboardIcon from '/public/assets/ic_dashboard.svg'
import ListingIcon from '/public/assets/ic_ecommerce.svg'
import SubscriptionIcon from '/public/assets/ic_subscription.svg'

export const vendorNavigation: INavigationItem[] = [
  {
    type: 'button',
    name: 'dashboard',
    href: '/dashboard/vendor/dashboard',
    icon: DashboardIcon
  },
  {
    type: 'button',
    name: 'banking',
    href: '/dashboard/vendor/banking',
    icon: BankingIcon
  },
  {
    type: 'button',
    name: 'bookings',
    href: '/dashboard/vendor/bookings',
    icon: BookingsIcon
  },
  {
    type: 'button',
    name: 'listing',
    href: '/dashboard/vendor/listing',
    icon: ListingIcon
  },

  {
    type: 'button',
    name: 'Live chat with admin',
    href: '/dashboard/vendor/chat',
    icon: LiveChatIcon
  },
  {
    type: 'button',
    name: 'Subscription',
    href: '/dashboard/vendor/subscription',
    icon: SubscriptionIcon
  }
]

export const dashboardBookingHistory: IDashboardBookingHistory[] = [
  {
    id: 1,
    img: BHistory,
    link: '/',
    title: 'Wedding Decoration',
    desc: 'Description about the vendor'
  },
  {
    id: 2,
    img: BHistory2,
    link: '/',
    title: 'Vehicle Hire',
    desc: 'Description about the vendor'
  },
  {
    id: 3,
    img: BHistory3,
    link: '/',
    title: 'Wedding Decoration',
    desc: 'Description about the vendor'
  },
  {
    id: 4,
    img: BHistory4,
    link: '/',
    title: 'Wedding Decoration',
    desc: 'Description about the vendor'
  },
  {
    id: 5,
    img: BHistory5,
    link: '/',
    title: 'Wedding Decoration',
    desc: 'Description about the vendor'
  },
  {
    id: 6,
    img: BHistory6,
    link: '/',
    title: 'Wedding Decoration',
    desc: 'Description about the vendor'
  },
  {
    id: 7,
    img: BHistory7,
    link: '/',
    title: 'Wedding Decoration',
    desc: 'Description about the vendor'
  }
]

export const salesData: IChartData[] = [
  {
    name: 'Page A',
    pv: 2400
  },
  {
    name: 'Page B',
    pv: 1398
  },
  {
    name: 'Page C',
    pv: 9800
  },
  {
    name: 'Page D',
    pv: 3908
  },
  {
    name: 'Page E',
    pv: 4800
  },
  {
    name: 'Page F',
    pv: 3800
  },
  {
    name: 'Page G',
    pv: 4300
  }
]

export const feesData: IChartData[] = [
  {
    name: 'Page A',
    pv: 3800
  },
  {
    name: 'Page B',
    pv: 1398
  },
  {
    name: 'Page C',
    pv: 2400
  },
  {
    name: 'Page D',
    pv: 3908
  },
  {
    name: 'Page E',
    pv: 4800
  },
  {
    name: 'Page F',
    pv: 4300
  },
  {
    name: 'Page G',
    pv: 9800
  }
]

export const payoutData: IChartData[] = [
  {
    name: 'Page A',
    pv: 4800
  },
  {
    name: 'Page B',
    pv: 1398
  },
  {
    name: 'Page C',
    pv: 2400
  },
  {
    name: 'Page D',
    pv: 3908
  },
  {
    name: 'Page E',
    pv: 9800
  },
  {
    name: 'Page F',
    pv: 4300
  },
  {
    name: 'Page G',
    pv: 3800
  }
]
