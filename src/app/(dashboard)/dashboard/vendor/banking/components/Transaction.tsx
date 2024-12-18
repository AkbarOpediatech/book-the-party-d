'use client'

import usePagination from '@/hooks/usePagination'
import useSearch from '@/hooks/useSearch'
import { useFetchBankingsQuery } from '@/redux/features/bankings/apiSlice'
import dynamic from 'next/dynamic'
import TransactionHistoryHeader from './TransactionHistoryHeader'
import Loader from '@/app/(landing)/components/Loader/Loader'

const TransactionHistoryTable = dynamic(() => import('./TransactionHistoryTable'), {
  ssr: false
})

const Transaction = () => {
  const { currentPage, pageLimit, handlePageChange, handlePageLimitChange } = usePagination()
  const {
    data: bakingResponse,
    isLoading,
    isError
  } = useFetchBankingsQuery({ role: 'vendor', limit: pageLimit, page: currentPage })
  const bankingData = bakingResponse?.data || []
  const totalRecords = bakingResponse?.pagination?.records || 0
  const { searchTerm, setSearchTerm, startDate, setStartDate, endDate, setEndDate, filteredData } = useSearch(
    bankingData,
    {
      searchKeys: ['service.title', '_id', 'price.value'],
      dateKey: 'createdAt'
    }
  )

  if (isLoading) {
    return <Loader type="loading" message="Pleasw wait sometimes" />;
  }

  if (isError) {
    return <Loader type="error" message="Please try again later." />;
  }

  return (
    <div className="rounded-lg bg-white shadow">
      <div className="p-2">
        <TransactionHistoryHeader
          startDate={startDate}
          endDate={endDate}
          searchTerm={searchTerm}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          setSearchTerm={setSearchTerm}
        />
        <TransactionHistoryTable
          data={filteredData}
          currentPage={currentPage}
          totalRecords={totalRecords}
          pageLimit={pageLimit}
          onPageChange={handlePageChange}
          onPageLimitChange={handlePageLimitChange}
        />
      </div>
    </div>
  )
}

export default Transaction
