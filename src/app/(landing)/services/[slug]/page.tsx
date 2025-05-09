'use client'

import usePagination from '@/hooks/usePagination'
import { useAddToCartMutation } from '@/redux/features/cart/apiSlice'
import { useFetchReviewByIdQuery } from '@/redux/features/reviews/apiSlice'
import { useFetchServiceByIdQuery } from '@/redux/features/services/apiSlice'
import { cn, specialPackages } from '@/utils'
import '@smastrom/react-rating/style.css'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Swal from 'sweetalert2'
import { useFetchCartService } from '../../cart/components/CartService'
import CustomBtn from '../../components/CustomBtn'
import Loader from '../../components/Loader/Loader'
import Description from './components/Description'
import ProductFeature from './components/ProductFeature'
import ProductReviews from './components/ProductReviews'
import RelatedServices from './components/RelatedServices'
import Unableable from '/public/assets/unableable.png'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const ServiceSingle = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const [tab, setTab] = useState(0)
  const [value, onChange] = useState<Value>(new Date())
  const { currentPage, pageLimit, handlePageChange } = usePagination({ initialLimit: 3 })
  const params = useParams()
  const { slug } = params

  // Data Fetching
  const { data: response, isLoading, isError } = useFetchServiceByIdQuery(slug as string)
  const singleService = response?.data
  const singleServiceId = singleService?._id
  const relateServiceSlug = singleService?.category?.slug

  const { data: reviewResponse } = useFetchReviewByIdQuery(singleServiceId as string)

  const reviewsData = reviewResponse?.data
  const { response: cartItems } = useFetchCartService({})
  const cartItemsData = cartItems?.data
  const cartId = cartItemsData?.map(i => i.service?._id)
  const matchedId = cartId?.includes(singleServiceId)

  const [addToCart] = useAddToCartMutation()

  const onClickFunc = () => {
    if (!session) {
      Swal.fire({
        title: 'Login Required',
        text: 'You need to log in to add items to the cart.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Login',
        cancelButtonText: 'Cancel'
      }).then(result => {
        if (result.isConfirmed) {
          router.push('/login')
        }
      })
      return
    }

    if (!singleService) {
      console.error('Service data is not available.')
      Swal.fire({
        title: 'Service Not Available',
        text: 'Service data is missing. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      return
    }

    const currentDate = new Date().toISOString()
    const startDate = Array.isArray(value) && value[0] ? value[0].toISOString() : currentDate
    const endDate = Array.isArray(value) && value[1] ? value[1].toISOString() : currentDate

    const cartItem = {
      service: singleService._id,
      user: session.user?._id,
      price_id: singleService.price && singleService.price[0]._id,
      quantity: 1,
      selected_date: [
        {
          start_date: startDate,
          end_date: endDate
        }
      ]
    }

    addToCart(cartItem)
      .unwrap()
      .then(response => {
        Swal.fire({
          position: 'top-end',
          icon: response ? 'success' : 'error',
          title: response ? 'Successfully added to cart' : 'Failed to add to cart',
          showConfirmButton: false,
          timer: 2000,
          toast: true
        })
      })
      .catch(error => {
        console.error('Error adding to cart:', error)
        Swal.fire({
          title: 'Error',
          text: 'Failed to book the service. Please try again.',
          icon: 'error',
          confirmButtonText: 'Retry'
        })
      })
  }

  if (isLoading) return <Loader type="loading" />
  if (isError) return <Loader type="error" message="Please try again later" />

  return (
    <section id="service_single" className="py-10 lg:py-20">
      <div className="container max-w-[1440px]">
        {singleService && <ProductFeature singleService={singleService} setTab={setTab} />}

        {/* Tabs */}
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

        {/* Tab Content */}
        <div className="mb-7 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mb-32 lg:grid-cols-3">
          <div className="col-span-2">
            {tab === 0 && <Description singleService={singleService} />}

            {tab === 1 && (
              <ProductReviews
                reviewsData={reviewsData}
                currentPage={currentPage}
                pageLimit={pageLimit}
                handlePageChange={handlePageChange}
              />
            )}
          </div>

          {/* Booking Section */}
          <div className="col-span-1">
            <h2 className="mb-5 text-3xl font-semibold">Select Booking Date</h2>

            {singleService?.is_unavailable ? (
              <div className="relative">
                <Image src={Unableable} alt="Service Unavailable" />
                <div className="absolute left-0 top-0 z-20 h-full w-full backdrop-blur-md">
                  <p className="flex h-full items-center justify-center text-center text-2xl font-bold">
                    Service Unavailable
                  </p>
                </div>
                <CustomBtn btnName="Service Unavailable" className="w-full cursor-not-allowed bg-gray-400" />
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
                <CustomBtn
                  btnName={matchedId ? 'Service Booked' : 'Book Now'}
                  onClickFunc={matchedId ? () => {} : onClickFunc}
                  className={matchedId ? 'w-full cursor-not-allowed bg-gray-400' : 'w-full'}
                />
              </>
            )}
          </div>
        </div>

        {/* Related Services */}
        {specialPackages && <RelatedServices relatedService={relateServiceSlug} />}
      </div>
    </section>
  )
}

export default ServiceSingle
