'use client'
import type { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import { useState } from 'react'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

type IProps = {
  totalEarnings: number | undefined
  categories: {
    series: number[]
    labels: string[]
  }
}

const BookingCategories = ({ totalEarnings, categories = { series: [], labels: [] } }: IProps) => {
  const [chartData] = useState<{
    series: number[]
    options: ApexOptions
  }>({
    series: categories?.series?.length ? categories.series : [],
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
      legend: {
        position: 'right', // Default position for larger screens
        fontSize: '14px'
      },
      responsive: [
        {
          breakpoint: 768, // Adjust for tablets and smaller devices
          options: {
            legend: {
              position: 'bottom', // Move legend below the chart
              fontSize: '12px' // Smaller font size
            },
            chart: {
              height: 300 // Adjust chart height for smaller screens
            }
          }
        },
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              fontSize: '10px'
            },
            chart: {
              height: 300
            }
          }
        }
      ],
      labels: categories?.labels?.length ? categories.labels : []
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
          <p className="text-2xl font-bold text-clr-48">${totalEarnings}</p>
        </div>
      </div>
    </>
  )
}

export default BookingCategories
