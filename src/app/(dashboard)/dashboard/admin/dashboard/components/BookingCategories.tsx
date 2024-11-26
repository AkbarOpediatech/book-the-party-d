'use client'
import type { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import { useState } from 'react'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const BookingCategories = () => {
  const [chartData, setChartData] = useState<{
    series: number[]
    options: ApexOptions
  }>({
    series: [14, 23, 21, 17, 15, 10, 12, 17],
    options: {
      chart: {
        type: 'polarArea'
      },

      stroke: {
        colors: ['#fff']
      },

      fill: {
        opacity: 0.8
      },

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ],

      labels: [
        'Party setup & prop hire packages',
        'Backdrops, Floral & display props',
        'Table & Seating',
        "Kid's Party Entertainment",
        'Food & Beverage',
        'Sound, lighting & Visual',
        'Outdoor Party hire',
        'Vehicle hire'
      ]
    }
  })

  return (
    <>
      <ReactApexChart options={chartData.options} series={chartData.series} type="polarArea" height={350} />
      <div>
        <div>
          <h2 className="mb-2 text-sm text-clr-81">Categories</h2>
          <p className="text-2xl font-bold text-clr-48">8</p>
        </div>
        <div>
          <h2 className="mb-2 text-sm text-clr-81">Total earning</h2>
        </div>
      </div>
    </>
  )
}

export default BookingCategories
