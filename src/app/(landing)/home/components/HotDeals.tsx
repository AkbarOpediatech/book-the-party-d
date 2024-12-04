'use client'
import { specialPackages } from '@/utils'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SectionHeading from '../../components/SectionHeading'
import ServiceCard from '../../components/ServiceCard'

const HotDeals = () => {
  return (
    <section className="reviews section-padding pt-0">
      <div className="container">
        <SectionHeading title="Hot Deals" />

        <div className="relative">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            navigation={{
              nextEl: '#swiper-next3',
              prevEl: '#swiper-prev3'
            }}
            modules={[Autoplay, Navigation]}
            grabCursor={true}
            className="relative max-w-[1440px]"
            breakpoints={{
              220: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 50
              }
            }}
          >
            {specialPackages.map((items, index) => (
              <div className="col-span-1" key={index}>
                <SwiperSlide key={index}>
                  <ServiceCard imgSrc={items.img} title={'Book chair arrangements'} review={10} price={100} />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>

          <button
            id="swiper-prev3"
            className="absolute left-0 top-1/2 z-10 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md md:left-[9%]"
          >
            <ChevronLeftIcon className="size-6 text-[#FB4250]" />
          </button>
          <button
            id="swiper-next3"
            className="absolute right-0 top-1/2 z-10 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md md:right-[9%]"
          >
            <ChevronRightIcon className="size-6 text-[#FB4250]" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default HotDeals
