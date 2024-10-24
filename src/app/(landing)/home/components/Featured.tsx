'use client'
import { specialPackages } from '@/utils'
import { HeartIcon, MapPinIcon } from '@heroicons/react/16/solid'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Image from 'next/image'
import { useState } from 'react'

// Import swiper/react
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SectionHeading from '../../components/SectionHeading'

const Featured = () => {
  const [rating, setRating] = useState(0)
  return (
    <section className="featured pb-[130px]">
      <div className="container">
        <SectionHeading title="Featured selection" linkName="View all Packages" linkURL={'#'} />
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Autoplay]}
        grabCursor={true}
        navigation={true}
        className="mySwiper"
      >
        {specialPackages.map((items, index) => (
          <SwiperSlide className="bg-white" key={index}>
            <div className="h-[412px] rounded-3xl">
              <div className="h-[164px] overflow-hidden rounded-t-3xl">
                <Image src={items.img} className="w-full" alt="image" />
              </div>
              <div className="flex h-[224px] flex-col justify-between p-5">
                <div className="space-y-2">
                  <p className="mb-2 font-sora text-lg font-semibold text-neutral-900">Light arrangement</p>
                  <Rating style={{ maxWidth: 120 }} value={rating} onChange={setRating} />
                  <h4 className="text-base font-extrabold italic text-neutral-500">(212 reviews)</h4>
                  <button className="flex items-center gap-2 text-base font-extrabold italic text-neutral-500">
                    <MapPinIcon className="size-6" />
                    Choose your location
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <p className="font-sora text-2xl font-bold text-neutral-900">$499</p>
                  <button className="group rounded-full bg-clr-f8 p-1">
                    <HeartIcon className="size-6 fill-clr-c6 group-hover:fill-red-600" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Featured
