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
