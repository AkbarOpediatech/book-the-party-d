import { cn } from '@/utils'
import React, { type ReactNode } from 'react'

type IProps = {
  name: string
  className?: string
  icon?: ReactNode
  onClick?: () => void
}

const GrayBtn: React.FC<IProps> = ({ name, icon, onClick, className, ...props }) => {
  return (
    <button
      {...props}
      type="button"
      onClick={onClick}
      className={cn(
        'flex items-center justify-center gap-2 rounded-md bg-gray-500 px-2 py-1 text-white lg:px-3 lg:py-2',
        `${className}`
      )}
    >
      {icon}
      {name}
    </button>
  )
}

export default GrayBtn
