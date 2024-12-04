'use client'
import { HandThumbUpIcon } from '@heroicons/react/16/solid'
import { HandThumbDownIcon } from '@heroicons/react/24/outline'
import { Rating } from '@smastrom/react-rating'
import Image from 'next/image'
import { useState } from 'react'
import avatar from '/public/assets/avatar.jpeg'

const UserReview = () => {
  const [starRating, setStarRating] = useState(0)

  return (
    <div className="mb-14">
      <div className="mb-6">
        <Rating
          style={{ maxWidth: 120 }}
          value={starRating}
          onChange={setStarRating}
          readOnly={true}
          className="mb-4"
        />
        <p className="text-clr-[#0B0F0E] mb-1.5 text-base font-medium">
          &quot;I recently booked Party Scout for my son&apos;s superhero-themed birthday party, and they
          absolutely nailed it! The decorations were vibrant, the activities kept the kids engaged, and the
          cake table setup was picture-perfect. I loved how they paid attention to every little detail. Highly
          recommend!&quot;
        </p>
        <p className="text-sm text-[#818B9C]">July 2, 2020 03:29 PM</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image width={40} height={40} className="rounded-full" src={avatar} alt="image" />
          <p className="text-clr-[#0B0F0E] mb-1.5 text-base font-medium">Darrell Steward</p>
        </div>

        <div className="flex items-center gap-4">
          <button className="border-clr-[#E4E9EE] flex items-center gap-2 rounded border p-3">
            <HandThumbUpIcon className="size-5 fill-clr-fb" />
            <p className="text-clr-[#0B0F0E] text-base">128</p>
          </button>
          <button className="border-clr-[#E4E9EE] flex items-center gap-2 rounded border p-3">
            <HandThumbDownIcon className="size-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserReview
