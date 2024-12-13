import type { Dispatch, SetStateAction } from 'react'

type IProps = {
  startDate: string
  setStartDate: Dispatch<SetStateAction<string>>
  endDate: string
  setEndDate: Dispatch<SetStateAction<string>>
  searchTerm: string
  setSearchTerm: Dispatch<SetStateAction<string>>
}

const TransactionHistoryHeader: React.FC<IProps> = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  searchTerm,
  setSearchTerm
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded pb-5 pt-3 md:px-4 lg:flex-nowrap">
      {/* <h2 className="whitespace-nowrap text-sm text-clr-36 md:mb-0 md:text-base">Transaction History</h2> */}
      {/* <input
        type="date"
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
        className="input w-full text-clr-ab"
        placeholder="Start date"
      />
      <input
        type="date"
        value={endDate}
        onChange={e => setEndDate(e.target.value)}
        className="input w-full text-clr-ab"
        placeholder="End date"
      /> */}
      <input
        type="search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="input bg-left-[20px] col-span-2 w-full bg-icon-search bg-no-repeat pl-9"
        style={{ backgroundPosition: 'left 10px center' }}
        placeholder="Search by transaction id"
      />
      {/* <input type="date" className="input w-full text-clr-ab" placeholder="Start date" />
      <input type="date" className="input w-full text-clr-ab" placeholder="End date" />
      <input
        type="search"
        className="input bg-left-[20px] col-span-2 w-full bg-icon-search bg-no-repeat pl-9"
        style={{ backgroundPosition: 'left 10px center' }}
        placeholder="Search by transaction id"
      /> */}
    </div>
  )
}

export default TransactionHistoryHeader
