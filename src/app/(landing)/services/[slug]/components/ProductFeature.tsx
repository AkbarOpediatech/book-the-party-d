'use client'
import SectionHeading from '@/app/(landing)/components/SectionHeading'
import type { ServiceItem } from '@/redux/features/services/apiSlice'
import { HeartIcon } from '@heroicons/react/16/solid'
import { Rating } from '@smastrom/react-rating'
import Image from 'next/image'
import { useState } from 'react'
import serviceImage from '/public/assets/discover-img.png'

type IProps = {
  singleService: ServiceItem
}

const ProductFeature: React.FC<IProps> = ({ singleService }) => {
  const [starRating, setStarRating] = useState(0)

  return (
    <div className="mb-9 grid grid-cols-1 gap-14 lg:grid-cols-2">
      <div className="col-span-1">
        <div className="overflow-hidden rounded-2xl">
          <Image src={serviceImage} width={738} className="object-right-top" alt="service-image" />
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <SectionHeading
            title={singleService.title || ''}
            sectionHeadingClass="md:text-[56px] md:leading-[66px]"
            headingRootClass="md:mb-5"
          />

          <p className="mb-4 text-lg text-[#444444]">
            Lorem ipsum dolor sit amet consectetur. Faucibus arcu vitae commodo dignissim rhoncus venenatis
            volutpat tempor blandit. Non morbi posuere tellus ut neque mattis felis sem. Suspendisse et
            ultrices sit sit sodales quam proin. Id lectus nunc dolor suspendisse et consectetur eu.
          </p>

          <div className="mb-3 flex items-center gap-3">
            <Rating style={{ maxWidth: 120 }} value={starRating} onChange={setStarRating} readOnly={true} />
            <p className="text-xl font-medium text-clr-36">
              4.8 · <span className="pb-5 underline">1,928 Reviews</span>
            </p>
          </div>
          <p>
            By <span className="text-lg font-medium">Partyscout</span>
          </p>
        </div>

        <div className="space-y-5">
          <p className="text-base text-[#191919]">AUD(incl. of all taxes)</p>
          <p className="text-base text-[#191919]">
            <span className="text-[32px] font-bold text-clr-fb">$600.72</span> (Fixed)
          </p>
          <p className="mb-2 text-base text-[#191919]">
            <span className="text-[32px] font-bold">Availability:</span> (Fixed)
          </p>
          <button className="flex items-center gap-1 rounded-[6px] border px-3 py-2">
            <HeartIcon className="size-5 stroke-clr-fb" /> Add to wishlist
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductFeature
