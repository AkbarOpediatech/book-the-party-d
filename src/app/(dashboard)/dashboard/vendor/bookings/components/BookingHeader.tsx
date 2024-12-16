import React, { type Dispatch, type SetStateAction } from 'react'

type IProps = {
  startDate: string
  setStartDate: Dispatch<SetStateAction<string>>
  endDate: string
  setEndDate: Dispatch<SetStateAction<string>>
  searchTerm: string
  setSearchTerm: Dispatch<SetStateAction<string>>
}

const BookingHeader: React.FC<IProps> = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  searchTerm,
  setSearchTerm
}) => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 rounded px-4 pb-3 pt-5 lg:flex-nowrap">
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
          placeholder="Search by title"
        />
      </div>
    </div>
  )
}

export default BookingHeader
