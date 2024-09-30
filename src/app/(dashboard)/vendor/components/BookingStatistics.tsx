'use client'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  { name: 'Jan', uv: 100, pv: 25 },
  { name: 'Feb', uv: 25, pv: 40 },
  { name: 'Mar', uv: 25, pv: 75 },
  { name: 'Apr', uv: 25, pv: 80 },
  { name: 'May', uv: 0, pv: 80 },
  { name: 'Jun', uv: 0, pv: 80 },
  { name: 'Jul', uv: 0, pv: 80 },
  { name: 'Aug', uv: 0, pv: 80 },
  { name: 'Sep', uv: 0, pv: 80 },
  { name: 'Oct', uv: 0, pv: 65 },
  { name: 'Nov', uv: 0, pv: 50 },
  { name: 'Dec', uv: 0, pv: 40 }
]

const BookingStatistics = () => {
  return (
    <ResponsiveContainer>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9042fb2e" stopOpacity={1} />
            <stop offset="100%" stopColor="rgba(45, 153, 255, 0.16)" stopOpacity={0.16} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} strokeDasharray={1} />
        <XAxis dataKey="name" className="text-xs text-clr-ab" />
        <YAxis className="mt-5 text-xs text-clr-ab" />
        <Tooltip />
        <Area type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} fill="url(#colorUv)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default BookingStatistics
