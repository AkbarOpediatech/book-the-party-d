import { payoutData } from '@/utils'
import React from 'react'
import { Area, AreaChart } from 'recharts'

const PayoutChart = () => {
  return (
    <div className="unused-class">
      <AreaChart width={60} height={25} data={payoutData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#23c55e" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#23c55e" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="pv" stroke="#23c55e" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
    </div>
  )
}

export default PayoutChart
