'use client'
import { useAddToCartMutation } from '@/redux/features/cart/apiSlice'
import { useFetchServiceByIdQuery } from '@/redux/features/services/apiSlice'
import { cn, specialPackages } from '@/utils'
import '@smastrom/react-rating/style.css'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import CustomBtn from '../../components/CustomBtn'
import Description from './components/Description'
import ProductFeature from './components/ProductFeature'
import ProductReviews from './components/ProductReviews'
import RelatedServices from './components/RelatedServices'
import Unableable from '/public/assets/unableable.png'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const ServiceSingle = () => {
  const [tab, setTab] = useState(0)
  const [value, onChange] = useState<Value>(new Date())
  const params = useParams()
  const { slug } = params

  console.log(slug, 'slug')

  const { data: response, isLoading, isError } = useFetchServiceByIdQuery(slug as string)

  const singleService = response?.data

  const [addToCart] = useAddToCartMutation()

  const onClickFunc = () => {
    console.log('Adding cart', singleService)
    const cartItem = {
      service: '674044d385afe1aa59fd4599',
      user: '671e14e2767fd06e13e1949a',
      price_id: '674044d385afe1aa59fd459a',
      quantity: 1,
      selected_date: [
        {
          start_date: '2024-11-06T04:51:05.386Z',
          end_date: '2024-11-06T04:51:05.386Z'
        }
      ]
    }

    addToCart(cartItem)
      .unwrap()
      .then(response => {
        console.log('Successfully added to cart:', response)
      })
      .catch(error => {
        console.error('Error adding to cart:', error)
      })

    // {
    //   service: '674044d385afe1aa59fd4599',
    //   user: '671e14e2767fd06e13e1949a',
    //   price_id: '674044d385afe1aa59fd459a',
    //   quantity: 1,
    //   selected_date: [
    //     {
    //       start_date: '2024-11-06T04:51:05.386Z',
    //       end_date: '2024-11-06T04:51:05.386Z'
    //     }
    //   ]
    // }
  }

  if (isLoading) return <div>Loading products...</div>
  if (isError) return <div>Error loading products.</div>

  return (
    <section id="service_single" className="py-10 lg:py-20">
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

        <div className="mb-7 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mb-32 lg:grid-cols-3">
          <div className="col-span-2">
            {tab === 0 && <Description singleService={singleService} />}
            {tab === 1 && <ProductReviews singleService={singleService} />}
          </div>

          <div className="col-span-1">
            <h2 className="mb-5 text-3xl font-semibold">Select Booking Date</h2>
            {singleService?.is_unavailable === true ? (
              <div>
                <div className="relative">
                  <Image src={Unableable} alt="unableable" />
                  <div className="absolute left-0 top-0 z-20 h-full w-full backdrop-blur-md">
                    <p className="flex h-full items-center justify-center text-center text-2xl font-bold">
                      Service Unavailable
                    </p>
                  </div>
                </div>

                <CustomBtn
                  btnName={singleService?.is_unavailable === true ? 'Service Unavailable' : 'Book Now'}
                  className={cn(
                    singleService?.is_unavailable === true && 'cursor-not-allowed bg-gray-400',
                    'w-full'
                  )}
                />
              </div>
            ) : (
              <>
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
                <CustomBtn btnName="Book Now" onClickFunc={onClickFunc} className="w-full" />
              </>
            )}
          </div>
        </div>

        <div className={cn(tab === 1 ? 'hidden' : 'block')}>
          <ProductReviews singleService={singleService} />
        </div>

        {specialPackages && <RelatedServices />}
      </div>
    </section>
  )
}

export default ServiceSingle
