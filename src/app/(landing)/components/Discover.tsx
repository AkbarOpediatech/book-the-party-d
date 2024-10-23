'use client'

// Import swiper/react
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// Import swiper required modules
import { discoverItems } from '@/utils'
import { ArrowLongRightIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import { Autoplay } from 'swiper/modules'

const Discover = () => {
  return (
    <section className="discover pb-[130px]">
      <div className="mx-auto max-w-[1872px] px-5">
        <div className="section-heading mb-9">
          <p className="font-sora text-[32px] font-semibold text-neutral-900">Discover events in your area</p>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Autoplay]}
        grabCursor={true}
        navigation={true}
        className="mySwiper mr-0"
        watchSlidesProgress={true}
      >
        {discoverItems.map((items, index) => (
          <SwiperSlide className="mr-0 min-h-[534px] overflow-hidden" key={index}>
            <div className="relative">
              <Image src={items.img} className="w-full" alt="image" />
              <div className="absolute left-0 top-0 h-full w-full bg-black/20 p-8">
                <div className="flex h-full items-end justify-between">
                  <h4 className="font-sora text-4xl font-bold text-white">{items.name}</h4>

                  <Link href={items.url} className="block bg-clr-fb px-6 py-4">
                    <ArrowLongRightIcon className="size-6" fill="white" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Discover
