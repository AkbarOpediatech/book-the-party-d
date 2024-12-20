import { useAddReviewMutation } from '@/redux/features/reviews/apiSlice'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from 'react'

type reviewType = { rating: number; review: string; service: string }

const RatingAndReview = () => {
  const [starRating, setStarRating] = useState<number>(4)
  const [review, setReview] = useState<string>('')
  const [submittedReviews, setSubmittedReviews] = useState<reviewType[]>([])
  const [addReview, { isLoading, isError, isSuccess }] = useAddReviewMutation()

  const handleSubmit = async () => {
    if (review.trim()) {
      try {
        const serviceId = '6746e06dcdd210391ba28937'
        await addReview({
          description: review,
          rating: starRating,
          user: '671e14e2767fd06e13e1949a',
          service: serviceId,
          hierarchy: '675ab1e01f171f78e826d122'
        }).unwrap()

        setSubmittedReviews(prev => [...prev, { rating: starRating, review, service: serviceId }])
        setStarRating(0)
        setReview('')
      } catch (error) {
        console.error('Failed to submit review:', error)
      }
    } else {
      alert('Please fill in all fields before submitting.')
    }
  }

  return (
    <div className="my-5">
      <h1 className="mb-4 text-2xl font-bold">How was your experience with Book the Party?</h1>
      {submittedReviews.length > 0 ? (
        <div className="my-6">
          <h2 className="mb-2 text-xl font-semibold">User Reviews</h2>
          {submittedReviews.map((entry, index) => (
            <div key={index} className="my-4">
              <div className="flex items-center">
                <Rating style={{ maxWidth: 120 }} value={entry.rating} readOnly={true} />
                <p className="ml-2 text-lg font-bold">{entry.rating} Stars</p>
              </div>
              <p className="mt-2 text-sm">{entry.review}</p>
              {/* <p className="mt-1 text-xs text-gray-500">Service ID: {entry.service}</p> */}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="mb-4">
            <Rating style={{ maxWidth: 120 }} value={starRating} onChange={setStarRating} />
          </div>
          <textarea
            value={review}
            onChange={e => setReview(e.target.value)}
            placeholder="Write your review"
            className="mb-4 w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-clr-fb"
            rows={5}
          ></textarea>
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`w-full rounded-lg py-2 font-bold text-white transition ${
              isLoading ? 'bg-gray-500' : 'hover:bg-clr-fb-dark bg-clr-fb'
            }`}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
          {isError && <p className="mt-2 text-red-500">Failed to submit review. Please try again.</p>}
          {isSuccess && <p className="mt-2 text-green-500">Review submitted successfully!</p>}
        </div>
      )}
    </div>
  )
}

export default RatingAndReview
