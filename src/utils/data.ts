import { NavigationItem } from '../type/type'
import BankingIcon from '/public/assets/ic_banking.svg'
import BookingsIcon from '/public/assets/ic_booking.svg'
import LiveChatIcon from '/public/assets/ic_chat.svg'
import DashboardIcon from '/public/assets/ic_dashboard.svg'
import ListingIcon from '/public/assets/ic_ecommerce.svg'
import SubscriptionIcon from '/public/assets/ic_subscription.svg'

export const dashboardVendorNavigation: NavigationItem[] = [
  {
    type: 'separator',
    title: 'General'
  },
  {
    type: 'button',
    name: 'dashboard',
    href: '/dashboard',
    icon: DashboardIcon
  },
  {
    type: 'button',
    name: 'banking',
    href: '/banking',
    icon: BankingIcon
  },
  {
    type: 'button',
    name: 'bookings',
    href: '/bookings',
    icon: BookingsIcon
  },
  {
    type: 'button',
    name: 'listing',
    href: '/listing',
    icon: ListingIcon
  },

  {
    type: 'separator',
    title: 'Others',
    className: 'mt-6 mb-2'
  },

  {
    type: 'button',
    name: 'Live chat with admin',
    href: '/live-chat-with-admin',
    icon: LiveChatIcon
  },
  {
    type: 'button',
    name: 'Subscription',
    href: '/live-chat-with-admin',
    icon: SubscriptionIcon
  }
]
