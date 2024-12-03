'use client'
import type { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import { useState } from 'react'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const BookingCategories = () => {
  const [chartData] = useState<{
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
      <div className="border-b border-b-gray-300 pb-10">
        <ReactApexChart options={chartData.options} series={chartData.series} type="polarArea" height={350} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1 border-r border-r-gray-300 p-4 text-center">
          <h2 className="mb-2 text-sm text-clr-81">Categories</h2>
          <p className="text-2xl font-bold text-clr-48">{chartData.options.labels?.length}</p>
        </div>

        <div className="p-4 text-center">
          <h2 className="mb-2 text-sm text-clr-81">Total earning</h2>
          <p className="text-2xl font-bold text-clr-48">$14,765</p>
        </div>
      </div>
    </>
  )
}

export default BookingCategories
