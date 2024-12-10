'use client'
import { specialPackages } from '@/utils'
import { ArrowRightCircleIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
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
        modules={[Autoplay, Navigation, Pagination]}
        grabCursor={true}
        className="SpecialPackagesSwiper"
        breakpoints={{
          220: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1280: {
            slidesPerView: 7,
            spaceBetween: 20
          }
        }}
      >
        {specialPackages.map((items, index) => (
          <SwiperSlide className="min-h-[250px] overflow-hidden rounded-[32px]" key={index}>
            <div className="relative">
              <Image src={items.img} className="w-full overflow-hidden" alt="image" />
              <div className="border-white-50/50 absolute left-0 top-0 h-full w-full rounded-[32px] border-4 bg-black/20 p-8">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <h4 className="mb-3 font-sora text-xl font-bold text-white md:text-2xl">{items.name}</h4>
                    <p className="font-nunito text-sm font-medium uppercase text-white md:text-base">
                      {items.desc}
                    </p>
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
