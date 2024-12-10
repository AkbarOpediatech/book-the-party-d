import SectionHeading from '@/app/(landing)/components/SectionHeading'
import ServiceCard from '@/app/(landing)/components/ServiceCard'
import { cn, specialPackages, type ISpecialPackages } from '@/utils'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Pagination from '../../components/Pagination'

const RelatedServices = () => {
  return (
    <div>
      <div className="mb-5 flex items-center justify-between lg:mb-10">
        <SectionHeading title="Related Services" headingRootClass="md:mb-0" />
        <Link
          href={'/services'}
          className={cn(
            'flex shrink-0 items-center gap-5 rounded-full border border-clr-fb bg-white px-7 py-3 text-base font-bold text-clr-fb'
          )}
        >
          see more
        </Link>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="special-packages-slider"
      >
        {specialPackages.slice(0, 5).map((items: ISpecialPackages, index: number) => (
          <SwiperSlide key={index}>
            <ServiceCard imgSrc={items.img} title={'Book chair arrangements'} review={10} price={100} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default RelatedServices
