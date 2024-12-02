import { Rating } from '@smastrom/react-rating'
import type { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import { useState } from 'react'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const RatingPieChart = () => {
  const [starRating, setStarRating] = useState(0)

  const series: number[] = [50]
  const labels: string[] = ['Success']
  const colors: string[] = ['#FFBD12']

  const options: ApexOptions = {
    chart: {
      type: 'radialBar'
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: '60%'
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '13px'
          },
          value: {
            color: '#111',
            fontSize: '30px',
            show: true
          },
          total: {
            show: true,
            label: 'Total',
            fontSize: '18px',
            color: '#111',
            formatter: function () {
              return '20,500'
            }
          }
        }
      }
    },
    fill: {
      colors
    },
    stroke: {
      lineCap: 'round'
    },
    labels
  }

  return (
    <div>
      <div className="flex items-center">
        <div id="chart">
          <div className="relative">
            <ReactApexChart options={options} series={series} type="radialBar" width={100} height={100} />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="text-center">
                <p className="text-3xl font-bold text-clr-36"> 4.8 </p>
              </div>
            </div>
          </div>
        </div>

        <div className="items-center gap-3">
          <Rating
            style={{ maxWidth: 100 }}
            value={starRating}
            onChange={setStarRating}
            readOnly={true}
            className="mb-2"
          />
          <p className="text-xl font-medium text-clr-36">From 162 reviews</p>
        </div>
      </div>
    </div>
  )
}

export default RatingPieChart
