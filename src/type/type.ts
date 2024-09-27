export type NavigationItem = {
  className?: string
} & (
  | {
      type: 'separator'
      title: string
    }
  | {
      type: 'button'
      name: string
      href: string
      icon: any
    }
)

export type DashboardBookingHistory = {
  id: number
  img: any
  link: string
  title: string
  desc: string
}
