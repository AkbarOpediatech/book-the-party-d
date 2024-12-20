'use client'
import { useFetchServicesQuery } from '@/redux/features/services/apiSlice'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SectionHeading from '../../components/SectionHeading'
import ServiceCard from '../../components/ServiceCard'
import ServiceImage from '/public/assets/package1.png'

const Featured = () => {
  const {
    data: products,
    isLoading,
    isError
  } = useFetchServicesQuery({ populate: ['user', 'category', 'location'] })
  const fullResponse = products
  const serviceData = fullResponse?.data

  console.log(serviceData, 'serviceData')

  if (isLoading) return <div>Loading products...</div>
  if (isError) return <div>Error loading products.</div>

  return (
    <section className="section-padding featured">
      <div className="container px-0 py-5">
        <SectionHeading title="Featured selection" linkName="View all Packages" linkURL={'/services'} />
      </div>
      <div className="py-3">
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
              slidesPerView: 6,
              spaceBetween: 16
            }
          }}
        >
          {serviceData &&
            serviceData.map((items, index) => (
              <SwiperSlide className="bg-white" key={index}>
                <ServiceCard
                  Href={`/services/${items.slug}`}
                  imgSrc={items.featured_image ? items.featured_image : ServiceImage}
                  title={items.title}
                  info={items.infos.map(i => i) || 'information'}
                  review={10}
                  price={items.price?.[0]?.value || 0}
<<<<<<< HEAD
                  chooseLocation={items.location?.title}
=======
                  chooseLocation={items?.location?.title}
>>>>>>> 034e7669db2e5ff53e85316029ccb0dfa47ba4ee
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Featured
