'use client'
import { cn } from '@/utils'
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const BookingHistoryChart: React.FC = () => {
  const series: number[] = [90, 50] // Represents the percentages for each label
  const labels: string[] = ['Cancelled', 'Success'] // Corresponding labels
  const colors: string[] = ['#9042FB', '#FFBD12'] // Colors for Cancelled and Success

  const options: ApexOptions = {
    chart: {
      height: 300,
      type: 'radialBar'
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: '60%'
        },
        dataLabels: {
          // Corrected the `dataLabels` configuration
          show: true, // Simply use `show` to control visibility
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
            formatter: function () {
              return `20,500`
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
    <div className="flex h-full flex-col justify-between rounded-2xl">
      <div id="chart" className="">
        <ReactApexChart options={options} series={series} type="radialBar" height={300} />
        <div className={cn('flex justify-center gap-4 border-t py-5')}>
          {series.map((value, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full" style={{ backgroundColor: colors[index] }}></div>
              <strong className="text-xs font-medium">{labels[index]}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BookingHistoryChart
