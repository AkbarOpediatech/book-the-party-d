import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from 'react'

type reviewType = { rating: number; review: string }

const RatingAndReview = () => {
  const [starRating, setStarRating] = useState(4)
  const [review, setReview] = useState('')
  const [submittedReviews, setSubmittedReviews] = useState<reviewType[]>([])

  const handleSubmit = () => {
    if (review.trim()) {
      setSubmittedReviews([{ rating: starRating, review }])
      setStarRating(0)
      setReview('')
    }
  }

  return (
    <div className="my-5">
      <h1 className="mb-4 text-2xl font-bold">How was your experience with Book the Party?</h1>
      {submittedReviews.length > 0 ? (
        <div className="my-6">
          <h2 className="mb-2 text-xl font-semibold">UserName Reviews</h2>
          {submittedReviews.map((entry, index) => (
            <div key={index} className="my-4">
              <div className="flex items-center">
                <Rating style={{ maxWidth: 120 }} value={entry.rating} readOnly={true} />
                <p className="ml-2 text-lg font-bold">{entry.rating} Stars</p>
              </div>
              <p className="mt-2 text-sm">{entry.review}</p>
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
            className="w-full rounded-lg bg-clr-fb py-2 font-bold text-white transition hover:bg-clr-fb"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  )
}

export default RatingAndReview
