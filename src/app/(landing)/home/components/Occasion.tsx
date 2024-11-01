'use client'
import { occasionItems } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from '../../components/SectionHeading'

const Occasion = () => {
  return (
    <section className="section-padding pt-0">
      <div className="container">
        <SectionHeading title="Browse by Occasion" />
      </div>

      <div className="grid grid-cols-12">
        {occasionItems.map((items, index) => (
          <div className="col-span-6 lg:col-span-3">
            <div className="mr-0 overflow-hidden xl:min-h-[534px]" key={index}>
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
                        className={`inline-block rounded p-6 font-sora text-sm font-bold md:text-base`}
                        style={{ backgroundColor: `${items.bgColor}` }}
                      >
                        {items.name}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Occasion
