import SectionHeading from '@/app/(landing)/components/SectionHeading'
import ServiceCard from '@/app/(landing)/components/ServiceCard'
import { useFetchServicesQuery } from '@/redux/features/services/apiSlice'
import { cn } from '@/utils'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ServiceImage from '/public/assets/package1.png'

type IProps = {
  relatedService: string | undefined
}

const RelatedServices: React.FC<IProps> = ({ relatedService }) => {
  const { data: products } = useFetchServicesQuery({})
  const serviceData = products?.data || []
  const filteredServices = serviceData.filter(service => service?.category?.slug === relatedService)

  return (
    <>
      <div className="mb-5 flex items-center justify-between lg:mb-10">
        <SectionHeading title="Related Services" headingRootClass="md:mb-0" />
        <Link
          href={`/services?categories=${relatedService}`}
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
        modules={[Navigation, Autoplay]}
        className="special-packages-slider"
      >
        {filteredServices.map((items, index) => (
          <SwiperSlide key={index}>
            <ServiceCard
              Href={`/services/${items.slug}`}
              imgSrc={items.featured_image ? items.featured_image : ServiceImage}
              title={items.title}
              info={items?.infos?.map(i => i) || 'information'}
              review={10}
              price={(items.price && items.price[0]?.value) || 0}
              chooseLocation={items.location?.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default RelatedServices
