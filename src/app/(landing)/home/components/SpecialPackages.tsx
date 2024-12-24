'use client'
import type { CategoryFetch } from '@/redux/features/categories/apiSlice'
import { ArrowRightCircleIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ICdemo from '/public/assets/ic-food.svg'

type IProps = {
  data: CategoryFetch[]
}

const SpecialPackages: React.FC<IProps> = ({ data }) => {
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
        {data.map((items, index) => (
          <SwiperSlide className="h-full min-h-[250px] overflow-hidden rounded-[32px]" key={index}>
            <Link
              className="relative block"
              href={{
                pathname: '/services',
                query: {
                  categories: items.title
                }
              }}
            >
              <Image
                width={250}
                height={250}
                src={items.featured_image || ICdemo}
                className="h-[350px] w-full overflow-hidden object-fill"
                alt="image"
              />
              <div className="border-white-50/50 absolute left-0 top-0 h-full w-full rounded-[32px] border-4 bg-black/20 p-8">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <h4 className="mb-3 font-sora text-xl font-bold text-white md:text-2xl">{items.title}</h4>
                    <p className="font-nunito text-sm font-medium uppercase text-white md:text-base">
                      {items.description}
                    </p>
                  </div>
                  <button className="block">
                    <ArrowRightCircleIcon className="size-6" fill="white" />
                  </button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default SpecialPackages
