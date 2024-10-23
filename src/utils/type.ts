export type INavigationItem = {
  type: 'button'
  name: string
  href: string
  icon: any
}

export type IDashboardBookingHistory = {
  id: number
  img: any
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
  image: any
}
export type IBookingAnalytics = {
  pic: any
  title: any
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
  image: any
}

export type IListingsData = {
  id: number
  itemName: string
  itemDescription: string
  category: string
  price: number
  totalBookings: number
  image: any
}

export type ISubscriptionDetails = {
  title: string
  description?: string
  tag?: string
  price: number
  details: string[]
}
