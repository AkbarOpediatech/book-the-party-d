import { cn } from '@/utils'
import { ArrowRightIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import type React from 'react'

type IProps = {
  btnType?: 'button' | 'submit' | 'reset'
  className?: string
  btnName?: string
  isLink?: boolean
  isLinkIcon?: boolean
  href?: string
  linkName?: string
  isBorderedLink?: boolean
  onClickFunc?: React.MouseEventHandler<HTMLButtonElement>
}

const CustomBtn: React.FC<IProps> = ({
  btnName,
  className,
  btnType = 'button',
  isLink,
  isLinkIcon,
  href,
  linkName,
  isBorderedLink,
  onClickFunc
}) => {
  return (
    <>
      {isLink ? (
        <Link
          href={href ?? '/'}
          className={cn(
            'flex items-center gap-5 rounded-full bg-clr-fb px-[50px] py-5 text-xl font-bold text-white md:text-2xl',
            isBorderedLink && 'border border-clr-fb bg-white text-clr-fb',
            className
          )}
        >
          {linkName}
          {isLinkIcon && (
            <span>
              <ArrowRightIcon className="size-6" />
            </span>
          )}
        </Link>
      ) : (
        <button
          onClick={onClickFunc}
          type={btnType}
          className={cn(
            'rounded-xl bg-clr-fb px-6 py-4 text-base text-white md:px-10 md:py-4 md:text-2xl',
            className
          )}
        >
          {btnName}
        </button>
      )}
    </>
  )
}

export default CustomBtn
