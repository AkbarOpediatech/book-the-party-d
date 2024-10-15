'use client'

import dynamic from 'next/dynamic'
import TransactionHistoryHeader from './TransactionHistoryHeader'

const TransactionHistoryTable = dynamic(() => import('./TransactionHistoryTable'), {
  ssr: false
})

const Transaction = () => {
  return (
    <div className="rounded-lg bg-white shadow">
      <div className="p-2">
        <TransactionHistoryHeader />
        <TransactionHistoryTable />
      </div>
    </div>
  )
}

export default Transaction
