'use client'
import React from 'react'
import Payout from './Payout'
import SellingFees from './SellingFees'
import TotalSell from './TotalSell'
import TransactionHeader from './TransactionHeader'

const TransactionHistory = () => {
  return (
    <React.Fragment>
      <TransactionHeader />
      <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-3">
        <TotalSell />
        <SellingFees />
        <Payout />
      </div>
    </React.Fragment>
  )
}

export default TransactionHistory
