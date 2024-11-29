import type React from 'react'
import BookingDetails from './BookingDetails'
import BookingInfo from './BookingInfo'
import RatingAndReview from './RatingAndReview'

type BookingSummeryProps = {
  currentStep: number
}

const BookingSummery: React.FC<BookingSummeryProps> = ({ currentStep }) => {
  console.log(currentStep)
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="col-span-1 md:col-span-2">
        <BookingDetails currentStep={currentStep} />
        {currentStep === 2 && (
          <div className="my-10">
            <RatingAndReview />
          </div>
        )}
      </div>
      <div className="col-span-1">
        <BookingInfo currentStep={currentStep} />
      </div>
    </div>
  )
}

export default BookingSummery
