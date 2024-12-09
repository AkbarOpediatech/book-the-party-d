'use client'

import type { IBanking } from '@/redux/features/bankings/apiSlice'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import TransactionHistoryHeader from './TransactionHistoryHeader'
const TransactionHistoryTable = dynamic(() => import('./TransactionHistoryTable'), {
  ssr: false
})

type IProps = {
  data: IBanking[] | undefined
  isError: boolean
  isLoading: boolean
}

const Transaction: React.FC<IProps> = ({ data, isError, isLoading }) => {
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState<string>('')

  const filterData = () => {
    if (!searchTerm) return data
    return data?.filter(item => {
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
        <TransactionHistoryTable data={filteredData} />
      </div>
    </div>
  )
}

export default Transaction
