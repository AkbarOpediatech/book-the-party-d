import type { StaticImageData } from 'next/image'
import type { xRole, xUserStatus, xUserType } from './data'

export type INavigationItem = {
  type: 'button'
  name: string
  href: string
  icon: StaticImageData
}

export type IAdminNavigation = {
  type: 'button'
  name: string
  href: string
  icon: StaticImageData
  isGeneral?: boolean
  isManagement?: boolean
}

export type IDashboardBookingHistory = {
  id: number
  img: string | StaticImageData
  link: string
  title: string
  desc: string
}
export type IChartData = {
  name: string
  pv: number
}

export type ITransactionType = {
  id: number
  title: string
  description: string
  amount: string
  date: string
  status: string
  image: string | StaticImageData
}
export type IBookingAnalytics = {
  pic: string | StaticImageData
  title: string
  amount: number
  price: number
}
export type IBookingData = {
  id: number
  eventTitle: string
  eventId: string
  startDate: string
  endDate: string
  saleTotal: number
  fee: number
  totalPayout: number
  status: string
  image: string | StaticImageData
}

export type IListingsData = {
  id: number
  itemName: string
  itemDescription: string
  category: string
  price: number
  totalBookings: number
  image: string | StaticImageData
}

export type IVendorsData = {
  id: number
  image: StaticImageData | string
  vendorName: string
  vendorDesc?: string
  vendorEmail?: string
  joinDate: string | ''
  availability?: string
  totalBookings: number
}

export type IEventFeatures = {
  id: number
  icon: string | StaticImageData
  name: string
}

export type ISpecialPackages = {
  id: number
  img: StaticImageData | string
  name: string
  desc: string
  url: string
  slug: string
}

export type IDiscoverItems = {
  id: number
  img: StaticImageData | string
  name: string
  url: string
}

export type IOccasionItems = {
  id: number
  img: StaticImageData | string
  name: string
  linkName: string
  url: string
  bgColor: string
}

export type IFormData = {
  labelTitle: string
  htmlFor: string
  inputId: string
  inputType: string
  inputPlaceholder: string
}

export type ICreditCardForm = {
  id: number
  htmlFor: string
  inputId: string
  labelTitle: string
  inputPlaceholder: string
  inputType: string
  inputClassName: string
  labelClassName: string
}

export type IFooterNav = {
  id: number
  name: string
  url: string
}

export type IFooterSocialItems = {
  id: number
  linkUrl: string
  img: StaticImageData | string
}

export type IBookingDetails = {
  id: number
  title: string
  desc: string
}

export type ISubscriptionDetails = {
  title: string
  description?: string
  tag?: string
  price: number
  details: string[]
}

export type Message = {
  id: number
  sender: 'user' | 'bot'
  content: string | string[] | File
  timestamp: string
  type: 'text' | 'image' | 'file'
}

export type ISignUpFormData = {
  name: string
  email: string
  password: string
  role: xRole | ''
}

export type PasswordRequirement = {
  regex: RegExp
  label: string
}

export type IProfileMenuItems = {
  id: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  activeIcon: any
  label: string
}

export type IPersonalInfo = {
  label: string
  value: string
}

export type IBillingAddress = {
  label: string
  value: string
}

export type ICartItems = {
  pic: StaticImageData
  name: string
  location: string
  price: number
  quantity: number
  subtotal: number
}
export type IMessage = {
  text: string
  time: string
  isSender: boolean
}

export type IChatData = {
  id: number
  name: string
  message: string
  type: xUserType
  avatar: string
  status: xUserStatus
  createdAt: string
  messages: IMessage[]
  location: string
  phone: string
  mail: string
}

// export type IServiceData = {
//   serviceData: {
//     aproved_by: null | undefined
//     availability: {
//       days: string
//       end_time: string
//       start_time: string
//       _id: string
//     }[]
//     cancellation_period_hours: number
//     category: {
//       createdAt: string
//       description: string
//       featured_image: StaticImageData | null
//       hierarchy: string
//       icon: StaticImageData | null
//       slug: string
//       status: string
//       title: string
//       updatedAt: string
//       user: string
//       _id: string
//     }[]
//     createdAt: string
//     description: string
//     featured_image: StaticImageData | null
//     inclusions: object[]
//     infos: object[]
//     is_featured: boolean
//     is_unavailable: boolean
//     location: {
//       createdAt: string
//       description: string
//       featured_image: {
//         name: string
//         reference: string
//         sid: string
//         size: number
//         type: string
//         url: string
//         hierarchy: string
//         location: {
//           coordinates: object[]
//           type: string
//         }[]
//       }[]
//       slug: string
//       status: string
//       title: string
//       type: string
//       updatedAt: string
//       user: string
//       _id: string
//     }
//     price: {
//       text: string
//       value: number
//       _id: string
//     }[]
//     price_type: string
//     security_deposit: number
//     slug: string
//     status: string
//     title: string
//     updatedAt: string
//     user: string
//     _id: string
//   }[]
// }
