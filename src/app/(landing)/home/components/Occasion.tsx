'use client'
import { occasionItems } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
// Import swiper/react
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SectionHeading from '../../components/SectionHeading'

const Occasion = () => {
  return (
    <section className="section-padding pt-0">
      <div className="container">
        <SectionHeading title="Browse by Occasion" />
      </div>
      <Swiper
        slidesPerView={4}
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
        {occasionItems.map((items, index) => (
          <SwiperSlide className="mr-0 min-h-[534px] overflow-hidden" key={index}>
            <div className="relative">
              <Image src={items.img} className="w-full" alt="image" />
              <div className="absolute left-0 top-0 h-full w-full bg-black/20 p-8">
                <div className="flex h-full flex-col items-center justify-end">
                  <h4 className="mb-10 text-center font-sora text-5xl leading-[58px] text-white">
                    {items.name}
                  </h4>

                  <div className="flex justify-center">
                    <Link
                      href={items.url}
                      className={`inline-block rounded p-6 font-sora text-base font-bold`}
                      style={{ backgroundColor: `${items.bgColor}` }}
                    >
                      {items.name}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Occasion
