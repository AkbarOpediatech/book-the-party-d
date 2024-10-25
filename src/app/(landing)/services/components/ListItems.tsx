'use client'
import { specialPackages } from '@/utils'
import { HeartIcon, MapPinIcon } from '@heroicons/react/16/solid'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Image from 'next/image'
import { useState } from 'react'

const ListItems = () => {
  const [starRating, setStarRating] = useState(0)
  return (
    <>
      {specialPackages.map((items, index) => (
        <div className="mb-5 flex h-[250px] rounded-3xl border p-5 last:mb-0">
          <div className="overflow-hidden rounded-3xl">
            <Image src={items.img} className="w-full" alt="image" />
          </div>
          <div className="flex flex-col justify-between px-5">
            <div className="space-y-2">
              <h2 className="mb-2 font-sora text-lg font-semibold text-neutral-900">Archer TP Link router</h2>
              <Rating style={{ maxWidth: 120 }} value={starRating} onChange={setStarRating} readOnly={true} />
              <p className="text-base font-extrabold italic text-neutral-500">(10 reviews)</p>
              <button className="flex items-center gap-2 text-base font-extrabold italic text-neutral-500">
                <MapPinIcon className="size-6" />
                Choose your location
              </button>
            </div>

            <p className="font-sora text-2xl font-bold text-neutral-900">$ 120</p>
            <div>
              <button className="group inline-block rounded-full bg-clr-f8 p-1">
                <HeartIcon className="inline-block size-6 fill-clr-c6 group-hover:fill-red-600" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ListItems
