'use client'

import usePagination from '@/hooks/usePagination'
import { useFetchBankingsQuery } from '@/redux/features/bankings/apiSlice'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import TransactionHistoryHeader from './TransactionHistoryHeader'
const TransactionHistoryTable = dynamic(() => import('./TransactionHistoryTable'), {
  ssr: false
})

const Transaction = () => {
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState<string>('')
  const { currentPage, pageLimit, handlePageChange, handlePageLimitChange } = usePagination()
  const {
    data: bakingResponse,
    isLoading,
    isError
  } = useFetchBankingsQuery({ role: 'vendor', limit: pageLimit, page: currentPage })

  const bankingData = bakingResponse?.data || []
  const totalRecords = bakingResponse?.pagination?.records || 0

  const filterData = () => {
    if (!searchTerm) return bankingData
    return bankingData?.filter(item => {
      const priceValue = item.price?.value?.toString()
      return (
        item.service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (priceValue && priceValue.includes(searchTerm))
      )
    })
  }

  const filteredData = filterData()

  if (isLoading) {
    return <div>Loading bookings...</div>
  }

  if (isError) {
    return <div>Error loading bookings. Please try again later.</div>
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
