'use client'
import { MonthlyStatistics, YearlyStatistics } from '@/utils'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

// const data = [
//   { name: 'Jan', uv: 40, pv: 20 },
//   { name: 'Feb', uv: 80, pv: 40 },
//   { name: 'Mar', uv: 35, pv: 25 },
//   { name: 'Apr', uv: 45, pv: 40 },
//   { name: 'May', uv: 50, pv: 60 },
//   { name: 'Jun', uv: 50, pv: 50 },
//   { name: 'Jul', uv: 50, pv: 80 },
//   { name: 'Aug', uv: 10, pv: 30 },
//   { name: 'Sep', uv: 40, pv: 50 },
//   { name: 'Oct', uv: 60, pv: 70 },
//   { name: 'Nov', uv: 70, pv: 85 },
//   { name: 'Dec', uv: 60, pv: 75 }
// ]

type IProps = {
  data: MonthlyStatistics[] | YearlyStatistics[] | undefined
}

const BalanceStatistics = ({ data = [] }: IProps) => {
  return (
    <div style={{ height: '400px', maxHeight: 'auto' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={data} barSize={24}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis dataKey={'pv'} />
          <Tooltip />
          <Bar dataKey="pv" stackId="a" fill="#9042FB" /> {/* purple one */}
          <Bar dataKey="uv" stackId="a" fill="#DFE1E3" /> {/* gray one */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BalanceStatistics
