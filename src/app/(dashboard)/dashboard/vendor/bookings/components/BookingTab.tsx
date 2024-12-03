'use client'
import { cn } from '@/utils'

type IProps = {
  tab: number
  setTab: (tabIndex: number) => void
}

const BookingTab: React.FC<IProps> = ({ tab, setTab }) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-1 rounded-tl-lg rounded-tr-lg bg-clr-f8 px-2 sm:px-4 md:gap-4 lg:justify-start">
      <button
        className={cn(
          'relative flex items-center gap-2 p-2 text-sm font-semibold capitalize text-clr-81 md:px-4 md:py-2 lg:px-6 lg:py-3',
          tab === 0 && 'text-clr-36'
        )}
        onClick={() => setTab(0)}
      >
        all
        <span className="rounded-md bg-clr-0e8/20 p-1 text-xs font-bold text-clr-0e8">24</span>
        <span
          className={cn(
            'absolute bottom-0 left-1/2 h-[2px] w-1/2 -translate-x-1/2 bg-transparent',
            tab === 0 && 'bg-clr-0e8'
          )}
        ></span>
      </button>

      <button
        className={cn(
          'relative flex items-center gap-2 p-2 text-sm font-semibold capitalize text-clr-81 md:px-4 md:py-2 lg:px-6 lg:py-3',
          tab === 1 && 'text-clr-36'
        )}
        onClick={() => setTab(1)}
      >
        complete
        <span className="rounded-md bg-clr-03/20 p-1 text-xs font-bold text-clr-03">24</span>
        <span
          className={cn(
            'absolute bottom-0 left-1/2 h-[2px] w-1/2 -translate-x-1/2 bg-transparent',
            tab === 1 && 'bg-clr-03'
          )}
        ></span>
      </button>
      <button
        className={cn(
          'relative flex items-center gap-2 p-2 text-sm font-semibold capitalize text-clr-81 md:px-4 md:py-2 lg:px-6 lg:py-3',
          tab === 2 && 'text-clr-36'
        )}
        onClick={() => setTab(2)}
      >
        pending
        <span className="rounded-md bg-clr-16/20 p-1 text-xs font-bold text-clr-16">24</span>
        <span
          className={cn(
            'absolute bottom-0 left-1/2 h-[2px] w-1/2 -translate-x-1/2 bg-transparent',
            tab === 2 && 'bg-clr-16'
          )}
        ></span>
      </button>
    </div>
  )
}

export default BookingTab
