import { StarIcon } from '@heroicons/react/24/solid'
import React from 'react'

type RatingsProps = {
  rating: number
  maxRating?: number
}

const Ratings: React.FC<RatingsProps> = ({ rating, maxRating = 5 }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  const emptyStars = maxRating - Math.ceil(rating)

  return (
    <div className="flex items-center gap-1">
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <StarIcon key={index} className="size-[18px] text-clr-07" />
        ))}

      {hasHalfStar && (
        <div className="relative">
          <StarIcon className="absolute size-[18px] text-clr-07" style={{ clipPath: 'inset(0 50% 0 0)' }} />

          <StarIcon className="size-[18px] text-clr-ab" />
        </div>
      )}

      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <StarIcon key={index} className="size-[18px] text-clr-ab" />
        ))}
    </div>
  )
}

export default Ratings
