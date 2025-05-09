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
export type IEventFeaturesIcon = {
  title: string
  icon: StaticImageData | null
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

export type ErrorResponse = {
  message?: string
}
export type ErrorResponseAuth = {
  response?: {
    data?: {
      message: string
    }
  }
}

export interface IAdminChat {
  _id: string
  user: {
    _id: string
    name: string
    avatar: string
  }
  receiver: {
    _id: string
    name: string
    avatar: string
  }
  message: string
  receiverInfo: {
    _id: string
    name: string
    avatar: string
    location: string
    email: string
    type: string
    phone: string
  }
  createdAt: string
}

export type IAdminChatMessage = {
  message: string
  file: string | null
  receiver: string
  user: string
}

export interface IAdminChatResponse {
  data: IAdminChat[]
  success: boolean
}

export type ChatItem = {
  message: string
  file: string | null
  receiver: string
  user: string
  createdAt: Date
}

export interface ChatItemResponse {
  data: ChatItem[]
}

export interface NotificationItem {
  _id: string
  type: string
  message: string
  isRead: boolean
  user: string
  status: string
  createdAt: Date
}

export interface NotificationItemResponse {
  data: NotificationItem[]
}

export interface MyNotificationResponse {
  data: {
    today: NotificationItem[]
    thisWeek: NotificationItem[]
    others: NotificationItem[]
  }
}

export interface MonthlyStatistics {
  name: string
  uv: number
  pv: number
}

export interface YearlyStatistics {
  name: string
  uv: number
  pv: number
}

interface BookingCategories {
  totalEarnings: number
  categories: {
    series: number[]
    labels: string[]
  }
}

export interface IDashboardStatistics {
  totalAmount: number
  totalBookings: number | string
  totalCancelled?: number
  totalCompleted?: number
  monthlyStatistics: MonthlyStatistics[]
  yearlyStatistics: YearlyStatistics[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bookingCategories: BookingCategories | any
}
