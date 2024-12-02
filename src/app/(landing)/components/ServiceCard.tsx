'use client'
import { HeartIcon, MapPinIcon } from '@heroicons/react/16/solid'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type IProps = {
  imgSrc?: string | StaticImageData
  title?: string
  review?: number
  price?: number
  Href?: string
  chooseLocation?: string
}

const ServiceCard: React.FC<IProps> = ({ imgSrc, title, review, price, Href, chooseLocation }) => {
  const [starRating, setStarRating] = useState(0)

  return (
    <div className="h-[412px] rounded-3xl border">
      <div className="h-[165px] overflow-hidden rounded-t-3xl">
        <Image width={278} height={165} src={imgSrc || ''} className="w-full" alt="image" />
      </div>
      <div className="flex h-[224px] flex-col justify-between p-5">
        <div className="mb-8 space-y-2">
          <Link href={Href || ''} className="mb-2 font-sora text-lg font-semibold text-neutral-900">
            {title}
          </Link>

          <Rating style={{ maxWidth: 120 }} value={starRating} onChange={setStarRating} readOnly={true} />
          <p className="text-sm font-extrabold italic text-neutral-500 md:text-base">({review} reviews)</p>
          <button className="flex items-center gap-2 text-sm font-extrabold italic text-neutral-500 md:text-base">
            <MapPinIcon className="size-6" />
            {chooseLocation}
          </button>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-sora text-xl font-bold text-neutral-900 md:text-2xl">${price}</p>
          <button className="group rounded-full bg-clr-f8 p-1">
            <HeartIcon className="size-6 fill-clr-c6 group-hover:fill-red-600" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
