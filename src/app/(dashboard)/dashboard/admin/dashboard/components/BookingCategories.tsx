'use client'
import type { ApexOptions } from 'apexcharts'
import { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

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
    </>
  )
}

export default BookingCategories
