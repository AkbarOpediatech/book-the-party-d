import { cn } from '@/utils'

type IProps = {
  tab: number
  setTab: (tabIndex: number) => void
}

const ListingTab: React.FC<IProps> = ({ tab, setTab }) => {
  return (
    <div className="flex rounded-tl-lg rounded-tr-lg bg-clr-f8">
      <button
        className={cn(
          'relative flex items-center gap-2 px-6 py-3 text-sm font-semibold capitalize text-clr-81',
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
          'relative flex items-center gap-2 px-6 py-3 text-sm font-semibold capitalize text-clr-81',
          tab === 2 && 'text-clr-36'
        )}
        onClick={() => setTab(2)}
      >
        Under Review
        <span className="rounded-md bg-clr-16/20 p-1 text-xs font-bold text-clr-16">2</span>
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

export default ListingTab
