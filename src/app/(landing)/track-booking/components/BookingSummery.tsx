import type { RootState } from '@/redux/store'
import type React from 'react'
import { useSelector } from 'react-redux'
import BookingDetails from './BookingDetails'
import BookingInfo from './BookingInfo'
import RatingAndReview from './RatingAndReview'

const BookingSummery: React.FC = () => {
  const currentStep = useSelector((state: RootState) => state.popup.currentStep)

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
