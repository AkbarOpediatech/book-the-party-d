'use client'
import { cn } from '@/utils'

type IProps = {
  onTabChange: (tabIndex: number) => void
  selectedTab: number
}

const FaqBtn: React.FC<IProps> = ({ onTabChange, selectedTab }) => {
  return (
    <>
      <button
        onClick={() => onTabChange(0)}
        className={cn(
          'block pb-5 text-2xl font-bold text-clr-96 md:text-[32px]',
          selectedTab === 0 && 'text-black'
        )}
      >
        Booking Details
      </button>
      <button
        onClick={() => onTabChange(1)}
        className={cn(
          'block pb-5 text-2xl font-bold text-clr-96 md:text-[32px]',
          selectedTab === 1 && 'text-black'
        )}
      >
        Change a booking
      </button>
      <button
        onClick={() => onTabChange(2)}
        className={cn(
          'block pb-5 text-2xl font-bold text-clr-96 md:text-[32px]',
          selectedTab === 2 && 'text-black'
        )}
      >
        Cancellation
      </button>
    </>
  )
}

export default FaqBtn
