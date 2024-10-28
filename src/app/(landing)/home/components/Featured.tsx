'use client'
import { specialPackages } from '@/utils'

// Import swiper/react
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SectionHeading from '../../components/SectionHeading'
import ServiceCard from '../../components/ServiceCard'

const Featured = () => {
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
        className="mySwiper"
      >
        {specialPackages.map((items, index) => (
          <SwiperSlide className="bg-white" key={index}>
            <ServiceCard imgSrc={items.img} title={'Book chair arrangements'} review={10} price={100} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Featured
