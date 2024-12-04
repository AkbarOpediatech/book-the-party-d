import { adminDetailsTab } from '@/utils'

type IProps = {
  tab: number
  setTab: (tabIndex: number) => void
}
const DetailsTab: React.FC<IProps> = ({ tab, setTab }) => {
  return (
    <div className="flex flex-wrap items-center gap-4 rounded bg-clr-f8 px-4 py-3 sm:gap-6 sm:px-6 sm:py-4 lg:gap-10">
      {adminDetailsTab.map((data, index) => (
        <button
          key={index}
          onClick={() => setTab(index)}
          className={`border-b-2 py-2 text-xs font-semibold sm:py-3 sm:text-sm lg:text-base ${
            tab === index ? 'border-clr-0e8 text-clr-36' : 'border-transparent text-clr-81'
          }`}
        >
          {data}
        </button>
      ))}
    </div>
  )
}

export default DetailsTab
