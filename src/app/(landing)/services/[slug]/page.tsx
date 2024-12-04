'use client'
import { useFetchServiceByIdQuery } from '@/redux/features/services/apiSlice'
import { cn, specialPackages } from '@/utils'
import '@smastrom/react-rating/style.css'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import CustomBtn from '../../components/CustomBtn'
import Description from './components/Description'
import ProductFeature from './components/ProductFeature'
import ProductReviews from './components/ProductReviews'
import RelatedServices from './components/RelatedServices'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const ServiceSingle = () => {
  const [tab, setTab] = useState(0)
  const [value, onChange] = useState<Value>(new Date())
  const params = useParams()
  const { slug } = params
  const { data: service, isLoading, isError } = useFetchServiceByIdQuery(slug as string)
  const fullResponse = service
  const singleService = fullResponse?.data

  if (isLoading) return <div>Loading products...</div>
  if (isError) return <div>Error loading products.</div>

  return (
    <section id="service_single" className="py-20">
      <div className="container max-w-[1440px]">
        {singleService && <ProductFeature singleService={singleService} />}
        {/* description */}
        <div className="mb-6 flex items-center gap-4">
          <button
            className={cn(
              'rounded border px-3 py-[6px] text-lg font-medium',
              tab === 0 && 'border-transparent bg-clr-fb/10 text-clr-fb'
            )}
            onClick={() => setTab(0)}
          >
            Description
          </button>
          <button
            className={cn(
              'rounded border px-3 py-[6px] text-lg font-medium',
              tab === 1 && 'border-transparent bg-clr-fb/10 text-clr-fb'
            )}
            onClick={() => setTab(1)}
          >
            Reviews
          </button>
        </div>

        <div className="mb-32 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-2">{tab === 0 && <Description />}</div>

          <div className="col-span-1">
            <h2 className="mb-5 text-3xl font-semibold">Select Booking Date</h2>
            <Calendar
              onChange={onChange}
              value={value}
              className="custom-calendar mb-5 w-full rounded-lg shadow-lg"
              navigationLabel={({ date }) => (
                <span className="text-lg font-semibold text-clr-fb">
                  {date.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </span>
              )}
            />
            <CustomBtn btnName="Book Now" className="w-full" />
          </div>
        </div>
        <ProductReviews />

        {specialPackages && <RelatedServices />}
      </div>
    </section>
  )
}

export default ServiceSingle
