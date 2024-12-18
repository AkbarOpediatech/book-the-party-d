'use client'
import useSearchQuery from '@/hooks/useSearchQuery'
import type { ICategory } from '@/redux/features/categories/apiSlice'
import { eventFeaturesIcon } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import heroBg from '/public/assets/banner-img.png'

type IProps = {
  data: ICategory[]
}

const Hero: React.FC<IProps> = ({ data }) => {
  const { formData, handleInputChange, handleSearchClick, isLoading } = useSearchQuery()

  return (
    <section
      className="hero bg-cover bg-no-repeat pb-[100px] pt-[100px] md:pb-[110px] md:pt-[116px]"
      style={{ backgroundImage: `url(${heroBg.src})` }}
    >
      <div className="container mx-auto max-w-[1320px]">
        <div className="mb-5 md:mb-14">
          <h1 className="mb-5 font-sora text-5xl font-black text-white md:text-[84px]">Party Easy.</h1>
          <p className="text-xl font-semibold text-white md:text-2xl">
            Book, discover and explore top-rated parties, <br className="lg:block" /> venues and events.
          </p>
        </div>

        <div className="mb-5 rounded-2xl bg-white px-7 py-5 xl:rounded-full xl:px-10 xl:py-7">
          <form onSubmit={handleSearchClick}>
            <ul className="flex flex-wrap items-center gap-5 xl:flex-nowrap">
              <li className="w-full border-b pb-5 md:border-b-0 md:pb-0">
                <label htmlFor="search" className="mb-1 block font-sora text-sm font-semibold">
                  Search
                </label>

                <input
                  className="w-full xl:w-64"
                  id="search"
                  type="search"
                  placeholder="Outdoor Marquee hire"
                  value={formData.search}
                  onChange={handleInputChange}
                  required
                />
              </li>

              <li className="w-full border-b pb-5 md:border-b-0 md:pb-0">
                <label htmlFor="location" className="mb-1 block font-sora text-sm font-semibold">
                  Location
                </label>
                <select
                  id="location"
                  className="w-full text-clr-ab xl:w-[250px]"
                  value={formData.location}
                  onChange={handleInputChange}
                >
                  <option value={''} disabled>
                    Select Location
                  </option>
                  <option value="Sydney">Sydney</option>
                  <option value="Melbourne">Melbourne</option>
                  <option value="Brisbane">Brisbane</option>
                </select>
              </li>

              <li className="w-full border-b pb-5 md:border-b-0 md:pb-0 lg:mr-5 lg:pr-5 xl:border-r">
                <label htmlFor="category" className="mb-1 block font-sora text-sm font-semibold">
                  Categories
                </label>

                <select
                  id="categories"
                  className="w-full text-clr-ab xl:w-[250px]"
                  value={formData.categories}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="Wedding">Wedding</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Corporate">Corporate</option>
                </select>
              </li>

              <li className="w-full border-b pb-5 md:border-b-0 md:pb-0 lg:mr-5 lg:pr-5 xl:border-r">
                <label htmlFor="date" className="mb-1 block font-sora text-sm font-semibold">
                  Select Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full text-clr-ab"
                  value={formData.date}
                  onChange={handleInputChange}
                />
              </li>

              <li>
                <button
                  type="submit"
                  className="block w-[148px] rounded-2xl bg-clr-87 py-3 font-sora text-sm text-white"
                  disabled={isLoading}
                >
                  {isLoading ? 'Loading' : 'Search'}
                </button>
              </li>
            </ul>
          </form>
        </div>

        <ul className="md:justify-canter flex flex-wrap justify-center gap-2 md:gap-2">
          {data.map((eventItems, index) => (
            <li key={index}>
              <Link
                href={{
                  pathname: '/services',
                  query: {
                    categories: eventItems.title
                  }
                }}
                className="inline-flex h-full w-[150px] flex-col flex-wrap rounded-2xl border border-white bg-clr-fb px-3 py-5 md:py-10"
              >
                <div className="mb-3 flex justify-center">
                  <Image src={eventFeaturesIcon[index]?.icon} alt="icon" />
                </div>

                <span className="block text-center font-sora text-sm font-semibold text-white">
                  {eventItems.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Hero
