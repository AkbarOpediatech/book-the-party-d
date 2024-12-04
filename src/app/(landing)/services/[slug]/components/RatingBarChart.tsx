import { Bar, BarChart, LabelList, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const data = [
  { name: '5.0 ⭐', uv: 450 },
  { name: '4.0 ⭐', uv: 150 },
  { name: '3.0 ⭐', uv: 300 },
  { name: '2.0 ⭐', uv: 120 },
  { name: '1.0 ⭐', uv: 50 }
]

const RatingBarChart = () => {
  return (
    <div className="h-[170px] w-full max-w-[800px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart layout="vertical" data={data}>
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} />
          <Bar
            dataKey="uv"
            fill="#9042FB"
            barSize={10}
            radius={[10, 10, 10, 10]}
            background={{ fill: '#E4E9EE' }}
          >
            <LabelList dataKey="uv" position="right" fill="#000" fontSize={14} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RatingBarChart
