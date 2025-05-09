import useSearchQuery from '@/hooks/useSearchQuery'
import { discoverItems } from '@/utils'
import { ArrowLongRightIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SectionHeading from '../../components/SectionHeading'

const Discover = () => {
  const { formData } = useSearchQuery()

  return (
    <section className="sm:pt-3 lg:pb-20">
      <div className="container">
        <SectionHeading title="Discover events in your area" />
      </div>

      <div className="hidden flex-wrap md:flex md:flex-nowrap">
        {discoverItems.map((items, index) => (
          <div className="w-full overflow-hidden" key={index}>
            <Link
              className="relative block"
              href={{
                pathname: '/services',
                query: {
                  location: items.name
                }
              }}
            >
              <Image src={items.img} className="w-full" alt="image" />
              <div className="absolute left-0 top-0 h-full w-full bg-black/20 p-8">
                <div className="flex h-full items-end justify-between">
                  <h2 className="font-sora text-3xl font-bold text-white md:text-4xl">{items.name}</h2>
                  <button className="block bg-clr-fb px-6 py-4 sm:px-3 sm:py-2 md:ml-1">
                    <ArrowLongRightIcon className="size-6" fill="white" />
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="block md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
            renderBullet: (index, className) =>
              `<span class="${className} bg-clr-fb mx-2 w-3 h-3 rounded-full"></span>` // Custom bullet style
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="my-4 md:hidden"
        >
          {discoverItems.map((items, index) => (
            <SwiperSlide key={index}>
              <Link
                className="relative block"
                href={{
                  pathname: '/services',
                  query: {
                    location: formData.location
                  }
                }}
              >
                {/* <div className="relative"> */}
                <Image src={items.img} className="w-full" alt="image" />
                <div className="absolute left-0 top-0 h-full w-full bg-black/20 p-8">
                  <div className="flex h-full items-end justify-between">
                    <h2 className="font-sora text-3xl font-bold text-white md:text-4xl">{items.name}</h2>
                    <button className="block bg-clr-fb px-6 py-4 sm:px-3 sm:py-2 md:ml-1">
                      <ArrowLongRightIcon className="size-6" fill="white" />
                    </button>
                  </div>
                </div>
                {/* </div> */}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Pagination */}
        <div className="custom-pagination mt-6 flex justify-center"></div>
      </div>
    </section>
  )
}

export default Discover
