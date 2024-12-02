import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const data = [
  { name: '5.0', uv: 4000, pv: 2400, amt: 2400 },
  { name: '4.0', uv: 3000, pv: 1398, amt: 2210 },
  { name: '3.0', uv: 2000, pv: 9800, amt: 2290 },
  { name: '2.0', uv: 2780, pv: 3908, amt: 2000 },
  { name: '1.0', uv: 1890, pv: 4800, amt: 2181 }
]

const RatingBarChart = () => {
  return (
    <div className="h-[400px] w-full max-w-[800px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart layout="vertical" data={data}>
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" />
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RatingBarChart
