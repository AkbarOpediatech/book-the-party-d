'use client'
import { useFetchReviewsQuery } from '@/redux/features/reviews/apiSlice'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Loader from './Loader/Loader'
import SectionHeading from './SectionHeading'
import avatar from '/public/assets/avatar.jpeg'

const Reviews = () => {
  const { data: response, isLoading, isError } = useFetchReviewsQuery({})

  const reviewsData = response?.data || []

  if (isLoading) {
    return <Loader type="loading" message="Please wait sometimes" />
  }

  if (isError) {
    return <Loader type="error" message="Please try again later." />
  }

  return (
    <section className="reviews section-padding">
      <div className="container px-0">
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
            pagination={{ clickable: true }}
            modules={[Autoplay, Navigation]}
            grabCursor={true}
            className="relative max-w-[1312px]"
            breakpoints={{
              220: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24
              }
            }}
          >
            {reviewsData.map((items, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-lg bg-clr-87 px-8 py-12">
                  <p className="mb-5 text-sm font-medium leading-[150%] text-white">
                    &quot;{items.description}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      width={32}
                      height={32}
                      className="rounded-full"
                      src={items?.user?.avatar || avatar}
                      alt="avatar"
                    />
                    <div>
                      <h6 className="mb-1 font-sora text-sm font-semibold text-white md:text-base">
                        {items?.user?.name}
                      </h6>
                      <p className="text-sm text-white">{items?.user?.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            id="swiper-prev2"
            className="absolute left-0 top-1/2 z-10 hidden h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-lg bg-clr-87 md:flex"
          >
            <ChevronLeftIcon className="size-6 text-white" />
          </button>
          <button
            id="swiper-next2"
            className="absolute right-0 top-1/2 z-10 hidden h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-lg bg-clr-87 md:flex"
          >
            <ChevronRightIcon className="size-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Reviews
