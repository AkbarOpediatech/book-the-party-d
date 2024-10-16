'use client'
import { cn } from '@/utils'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import ICMaster from '/public/assets/ic_mastercard.png'

const DashboardMasterCard = () => {
  const currentpath = usePathname()
  const isBankingPath = currentpath === '/dashboard/vendor/banking'

  return (
    <div className={cn('flex h-64 flex-col justify-between bg-clr-3f p-6', isBankingPath && 'h-52')}>
      <div className="flex flex-wrap justify-between">
        <div className="unused-class">
          <small
            className={cn('mb-4 block text-sm font-semibold text-clr-82', isBankingPath && 'mb-3 text-xs')}
          >
            Current Balance
          </small>
          {/* Current Balance */}
          <h3 className={cn('text-3xl font-bold text-white', isBankingPath && 'text-2xl')}>$23,99.55</h3>
        </div>
        <div>
          <Image src={ICMaster} alt="mastercard" />
        </div>
      </div>
      {/* Card Number */}
      <p className={cn('py-7 text-end text-base font-semibold text-white', isBankingPath && 'py-0 text-sm')}>
        **** **** **** 6789
      </p>
      <div className="flex flex-wrap items-center justify-between gap-2 lg:gap-0">
        {/* Holder Name */}
        <div className="holder_name">
          <small className={cn('mb-2 text-xs text-clr-82', isBankingPath && 'mb-1 text-[10px]')}>
            Card Holder
          </small>
          <h2 className={cn('text-base font-semibold text-white', 'text-sm')}>Alex Buckmaster</h2>
        </div>

        <div className="valid_dates">
          {/* Valid Dates */}
          <small className={cn('mb-2 text-xs text-clr-82', isBankingPath && 'mb-1 text-[10px]')}>
            Valid dates
          </small>
          <h2 className={cn('text-base font-semibold text-white', 'text-sm')}>11/22</h2>
        </div>
        {/* Withdraw Button  */}
        <button
          className={cn(
            'rounded-lg bg-clr-fb px-4 py-3 text-sm font-bold text-white',
            isBankingPath && 'px-3 py-2 text-xs'
          )}
        >
          Withdraw
        </button>
      </div>
    </div>
  )
}
export default DashboardMasterCard
