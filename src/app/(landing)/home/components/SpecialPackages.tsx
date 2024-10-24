'use client'
import { specialPackages } from '@/utils'
import { ArrowRightCircleIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'

// Import swiper/react
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const SpecialPackages = () => {
  return (
    <section className="section-padding">
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
        className="mySwiper"
      >
        {specialPackages.map((items, index) => (
          <SwiperSlide className="min-h-[350px] overflow-hidden rounded-[32px]" key={index}>
            <div className="relative">
              <Image src={items.img} className="w-full" alt="image" />
              <div className="border-white-50/50 absolute left-0 top-0 h-full w-full rounded-[32px] border-4 bg-black/20 p-8">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <h4 className="mb-3 font-sora text-2xl font-bold text-white">{items.name}</h4>
                    <p className="font-nunito text-base font-medium uppercase text-white">{items.desc}</p>
                  </div>
                  <Link href={items.url} className="block">
                    <ArrowRightCircleIcon className="size-6" fill="white" />
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

export default SpecialPackages
