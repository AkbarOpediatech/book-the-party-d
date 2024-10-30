'use client'
import { cn } from '@/utils'
import Link from 'next/link'
import type { MouseEventHandler, ReactNode } from 'react'

type ButtonProps = {
  name: string
  type: 'button' | 'submit'
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  icon?: ReactNode
}

type LinkProps = {
  name: string
  type: 'link'
  linkUrl: string
  className?: string
  icon?: ReactNode
}

type IProps = ButtonProps | LinkProps

const DashboardButton: React.FC<IProps> = props => {
  const { name, type, className, icon } = props
  const { onClick } = props as ButtonProps

  /* checking is it link or button  */
  if (type === 'link') {
    const { linkUrl } = props
    if (!linkUrl) {
      throw new Error("The 'linkUrl' prop is mandatory when the type is 'link'")
    }

    return (
      <Link
        href={linkUrl}
        className={cn(
          'flex items-center gap-2 rounded-md bg-clr-fb px-2 py-1 text-white lg:px-3 lg:py-2',
          `${className}`
        )}
      >
        {icon}
        {name}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-2 rounded-md bg-clr-fb px-2 py-1 text-white lg:px-3 lg:py-2',
        `${className}`
      )}
    >
      {icon}
      {name}
    </button>
  )
}

export default DashboardButton
