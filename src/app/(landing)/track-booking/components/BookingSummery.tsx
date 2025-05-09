import type { Order } from '@/redux/features/orders/apiSlice'
import type React from 'react'
import BookingDetails from './BookingDetails'
import BookingInfo from './BookingInfo'
import RatingAndReview from './RatingAndReview'

type BookingSummeryProps = {
  data: Order | undefined
}

const BookingSummery: React.FC<BookingSummeryProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="col-span-1 md:col-span-2">
        <BookingDetails data={data} />
        {data?.status === 'completed' && (
          <div className="my-10">
            <RatingAndReview data={data} />
          </div>
        )}
      </div>
      <div className="col-span-1">
        <BookingInfo data={data} />
      </div>
    </div>
  )
}

export default BookingSummery
