import type { StaticImageData } from 'next/image'

export type INavigationItem = {
  type: 'button'
  name: string
  href: string
  icon: StaticImageData
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

export type IEventFeatures = {
  id: number
  icon: string | StaticImageData
  name: string
}

export type ISubscriptionDetails = {
  title: string
  description?: string
  tag?: string
  price: number
  details: string[]
}
export interface Message {
  id: number
  sender: 'user' | 'bot'
  content: string | string[] | File
  timestamp: string
  type: 'text' | 'image' | 'file'
}
