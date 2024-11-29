'use client'
import { specialPackages } from '@/utils'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SectionHeading from '../../components/SectionHeading'
import ServiceCard from '../../components/ServiceCard'

const Featured = () => {
  return (
    <section className="featured pb-20 lg:pb-[130px]">
      <div className="container">
        <SectionHeading title="Featured selection" linkName="View all Packages" linkURL={'#'} />
      </div>
      <Swiper
        slidesPerView={5}
        navigation={true}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Autoplay, Navigation]}
        grabCursor={true}
        className="featuredSwiper"
        breakpoints={{
          220: {
            slidesPerView: 1,
            spaceBetween: 16
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 16
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 16
          },
          1280: {
            slidesPerView: 7,
            spaceBetween: 16
          }
        }}
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
