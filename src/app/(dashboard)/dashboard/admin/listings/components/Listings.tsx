import useSearch from '@/hooks/useSearch'
import type { ServiceItem } from '@/redux/features/services/apiSlice'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import ListingTab from './ListingTab'

const ListingTable = dynamic(() => import('./ListingTable'), {
  ssr: false
})

type IProps = {
  data: ServiceItem[]
  pageLimit: number
  currentPage: number
  totalRecords: number
  handlePageChange: (page: number) => void
  handlePageLimitChange: (limit: number) => void
}

const Listings: React.FC<IProps> = ({
  pageLimit,
  currentPage,
  data,
  totalRecords,
  handlePageChange,
  handlePageLimitChange
}) => {
  const [tab, setTab] = useState<number>(0)

  const { searchTerm, setSearchTerm, filteredData } = useSearch(data, {
    searchKeys: ['title', '_id', 'price.value'],
    dateKey: 'createdAt'
  })

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">
      <ListingTab tab={tab} setTab={setTab} />
      <div className="px-6 py-5">
        <input
          type="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="input bg-left-[20px] col-span-2 w-full bg-icon-search bg-no-repeat pl-9"
          style={{ backgroundPosition: 'left 10px center' }}
          placeholder="Search by transaction id"
        />
      </div>
      {tab === 0 && (
        <ListingTable
          data={filteredData}
          currentPage={currentPage}
          totalRecords={totalRecords}
          pageLimit={pageLimit}
          onPageChange={handlePageChange}
          onPageLimitChange={handlePageLimitChange}
        />
      )}
      {tab === 1 && (
        <ListingTable
          data={filteredData}
          currentPage={currentPage}
          totalRecords={totalRecords}
          pageLimit={pageLimit}
          onPageChange={handlePageChange}
          onPageLimitChange={handlePageLimitChange}
        />
      )}
    </div>
  )
}

export default Listings
