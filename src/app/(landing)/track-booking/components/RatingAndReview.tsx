import type { Order } from '@/redux/features/orders/apiSlice'
import { useAddReviewMutation, useFetchReviewByIdQuery } from '@/redux/features/reviews/apiSlice'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

type Props = {
  data: Order | undefined
}

const RatingAndReview: React.FC<Props> = ({ data }) => {
  const [starRating, setStarRating] = useState<number>(0)
  const [review, setReview] = useState<string>('')
  const [reviewSubmitted, setReviewSubmitted] = useState<boolean>(false)

  const serviceId = data?.service as string
  const userId = data?._id as string

  const [addReview, { isLoading }] = useAddReviewMutation()
  const { data: existingReview } = useFetchReviewByIdQuery(serviceId, {
    skip: !serviceId
  })

  const matchingReviews = Array.isArray(existingReview?.data) ? existingReview.data : []

  const userReview = matchingReviews.find(
    review => review.user?._id === userId && review.service === serviceId
  )

  useEffect(() => {
    if (userReview) {
      setStarRating(userReview.rating || 0)
      setReview(userReview.description || '')
      setReviewSubmitted(true)
    }
  }, [userReview])

  const handleSubmit = async () => {
    if (review.trim()) {
      try {
        await addReview({
          description: review,
          rating: starRating,
          user: userId,
          service: serviceId
        }).unwrap()
        setReviewSubmitted(true)
        Swal.fire({
          title: 'Success',
          text: 'Review submitted successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      } catch (error) {
        console.error('Failed to submit review:', error)
        Swal.fire({
          title: 'Failed',
          text: 'Failed to submit review. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    } else {
      Swal.fire({
        title: 'warning',
        text: 'Please fill in all fields before submitting.',
        icon: 'warning',
        confirmButtonText: 'OK'
      })
    }
  }

  return (
    <div className="my-5">
      <h1 className="mb-4 text-2xl font-bold">How was your experience with Book the Party?</h1>
      {reviewSubmitted ? (
        <div>
          <h2 className="mb-2 text-lg font-semibold">Your Review</h2>
          <div className="mb-4 rounded-lg border p-3">
            <Rating style={{ maxWidth: 120 }} value={starRating} readOnly />
            <p className="mt-2">{review}</p>
          </div>
          <p className="text-gray-600">You have already submitted your review.</p>
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
        </div>
      )}
    </div>
  )
}

export default RatingAndReview
