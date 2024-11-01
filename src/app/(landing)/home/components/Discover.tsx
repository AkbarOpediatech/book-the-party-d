'use client'
import { discoverItems } from '@/utils'
import { ArrowLongRightIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from '../../components/SectionHeading'

const Discover = () => {
  return (
    <section className="section-padding pt-0">
      <div className="container">
        <SectionHeading title="Discover events in your area" />
      </div>
      <div className="flex flex-wrap md:flex-nowrap">
        {discoverItems.map((items, index) => (
          <div className="w-full overflow-hidden xl:min-h-[534px]" key={index}>
            <div className="relative">
              <Image src={items.img} className="w-full" alt="image" />
              <div className="absolute left-0 top-0 h-full w-full bg-black/20 p-8">
                <div className="flex h-full items-end justify-between">
                  <h2 className="font-sora text-3xl font-bold text-white md:text-4xl">{items.name}</h2>
                  <Link href={items.url} className="block bg-clr-fb px-6 py-4">
                    <ArrowLongRightIcon className="size-6" fill="white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Discover
