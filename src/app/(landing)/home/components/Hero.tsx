import { eventFeatures } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import heroBg from '/public/assets/banner-img.png'

const Hero = () => {
  return (
    <section
      className="hero bg-cover bg-no-repeat pb-[110px] pt-[116px]"
      style={{ backgroundImage: `url(${heroBg.src})` }}
    >
      <div className="container mx-auto max-w-[1320px]">
        <h1 className="font-sora text-[84px] font-black text-white">Party Easy.</h1>
        <p className="mb-14 text-2xl font-semibold text-white">
          Book, discover and explore top-rated parties, <br className="lg:block" /> venues and events.
        </p>
        {/* search filter */}
        <div className="mb-5 rounded-full bg-white px-10 py-7">
          <ul className="flex items-center gap-5">
            <li>
              <label htmlFor="search" className="mb-1 block font-sora text-sm font-semibold">
                Search
              </label>
              <input className="w-64" id="search" type="search" placeholder="Outfoor Marquee hire" />
            </li>

            <li>
              <label htmlFor="location" className="mb-1 block font-sora text-sm font-semibold">
                Location
              </label>
              <select name="" id="location" className="w-[250px]">
                <option value="0">Sydney</option>
                <option value="1">Sydney</option>
              </select>
            </li>

            <li className="border-r pr-5">
              <label htmlFor="categories" className="mb-1 block font-sora text-sm font-semibold">
                Categories
              </label>
              <select name="" id="categories" className="w-[250px]">
                <option value="0">Wedding</option>
              </select>
            </li>

            <li className="mr-5 border-r pr-5">
              <label htmlFor="categories" className="mb-1 block font-sora text-sm font-semibold">
                Select Date
              </label>
              <input type="date" />
            </li>

            <li>
              <button className="block w-[148PX] rounded-2xl bg-clr-87 py-3 font-sora text-sm text-white">
                Search
              </button>
            </li>
          </ul>
        </div>
        {/* event features */}
        <ul className="flex justify-between">
          {eventFeatures.map((eventItems, index) => (
            <li key={index}>
              <Link
                href={'#'}
                className="inline-flex h-full w-[150px] flex-col rounded-2xl border border-white bg-clr-fb px-3 py-10"
              >
                <div className="mb-3 flex justify-center">
                  <Image src={eventItems.icon} alt="icon" />
                </div>
                <span className="block text-center font-sora text-sm font-semibold text-white">
                  {eventItems.name}
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
