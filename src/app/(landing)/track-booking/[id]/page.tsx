'use client'

import { useGetOrderByIdQuery } from '@/redux/features/orders/apiSlice'
import { useParams } from 'next/navigation'
import Loader from '../../components/Loader/Loader'
import BookingSummery from '../components/BookingSummery'
import RelatedServices from '../components/RelatedServices'

const TrackBooking = () => {
  const params = useParams()
  const { id } = params
  const { data: response, isLoading, isError } = useGetOrderByIdQuery(id as string)
  const bookingSummery = response?.data

  if (isLoading) {
    return <Loader type="loading" message="Please wait a moment..." />
  }
  if (isError) {
    return <Loader type="error" message="Please try again later." />
  }

  return (
    <section className="cart pb-[100px] pt-[74px] font-sora">
      <div className="container max-w-[1440px]">
        {/* <StatusBar /> */}
        <div className="my-16">
          <BookingSummery data={bookingSummery} />
        </div>
        <div className="my-16">
          <RelatedServices />
        </div>
      </div>
    </section>
  )
}

export default TrackBooking
