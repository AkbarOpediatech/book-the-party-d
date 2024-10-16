import { cn } from '@/utils'
import { ArrowTrendingUpIcon } from '@heroicons/react/16/solid'
import TotalSellChart from './TotalSellChart'

const TotalSell = () => {
  return (
    <div className={cn('relative rounded-lg bg-clr-0e8/5 p-3')}>
      <div className={cn('absolute -left-[1px] top-3 h-5 w-1 rounded-sm bg-clr-0e8')}></div>
      <div className={cn('mb-4 text-sm font-medium text-clr-682')}>Total sales</div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="unused-class">
          <h2 className="mb-1 text-lg font-bold text-clr-1d">$1120.00</h2>
          <p className="flex gap-2 text-xs font-medium text-clr-0e8">
            <ArrowTrendingUpIcon className="size-4" />
            +4,85%
          </p>
        </div>
        <TotalSellChart />{' '}
      </div>
    </div>
  )
}

export default TotalSell
