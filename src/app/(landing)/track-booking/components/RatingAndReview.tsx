import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from 'react'

const RatingAndReview = () => {
  const [starRating, setStarRating] = useState(4)
  const [review, setReview] = useState('')

  const handleSubmit = () => {
    alert(`Rating: ${starRating}, Review: ${review}`)
    setStarRating(0)
    setReview('')
  }

  return (
    <div className="my-5">
      <h1 className="mb-4 text-2xl font-bold">How was your experience with Book the Party?</h1>
      <div className="mb-4">
        <Rating style={{ maxWidth: 120 }} value={starRating} onChange={setStarRating} readOnly={true} />
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
  )
}

export default RatingAndReview
