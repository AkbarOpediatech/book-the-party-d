'use client'
import { discoverItems } from '@/utils'
import { ArrowLongRightIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from '../../components/SectionHeading'

// Import Swiper
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Discover = () => {
  return (
    <section className="section-padding pt-0">
      <div className="container">
        <SectionHeading title="Discover events in your area" />
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
        className="mySwiper mr-0"
        watchSlidesProgress={true}
      >
        {discoverItems.map((items, index) => (
          <SwiperSlide className="mr-0 min-h-[534px] overflow-hidden" key={index}>
            <div className="relative">
              <Image src={items.img} className="w-full" alt="image" />
              <div className="absolute left-0 top-0 h-full w-full bg-black/20 p-8">
                <div className="flex h-full items-end justify-between">
                  <h2 className="font-sora text-4xl font-bold text-white">{items.name}</h2>

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
