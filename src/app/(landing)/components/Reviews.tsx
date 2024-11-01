'use client'
import Image from 'next/image'
import avatar from '/public/assets/avatar.jpeg'

// Import swiper/react
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SectionHeading from './SectionHeading'

const Reviews = () => {
  return (
    <section className="reviews section-padding pt-0">
      <div className="container">
        <SectionHeading title="Reviews" desc="What our clients love about us." />

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
              nextEl: '#swiper-next2',
              prevEl: '#swiper-prev2'
            }}
            modules={[Autoplay, Navigation]}
            grabCursor={true}
            className="relative max-w-[1440px]" // Added padding here to avoid overlap with arrow buttons
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((items, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-lg bg-clr-87 px-8 py-12">
                  <p className="mb-5 text-sm font-medium leading-[150%] text-white">
                    "This is a very complex and beautiful set of elements. Under the hood it comes with the
                    best things from 2 different worlds: Figma and Tailwind.”
                  </p>
                  <div className="flex items-center gap-3">
                    <Image width={32} height={32} className="rounded-full" src={avatar} alt="avatar" />
                    <div>
                      <h6 className="mb-1 font-sora text-sm font-semibold text-white md:text-base">
                        Bonnie Green
                      </h6>
                      <p className="text-sm text-white">Web developer @themesberg</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrow Buttons */}
          <button
            id="swiper-prev2"
            className="absolute left-0 top-1/2 z-10 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-lg bg-clr-87"
          >
            <ChevronLeftIcon className="size-6 text-white" />
          </button>
          <button
            id="swiper-next2"
            className="absolute right-0 top-1/2 z-10 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-lg bg-clr-87"
          >
            <ChevronRightIcon className="size-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Reviews
