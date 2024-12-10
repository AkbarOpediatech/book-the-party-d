'use client'
import useSearchQuery from '@/hooks/useSearchQuery'
import { occasionItems } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from '../../components/SectionHeading'

const Occasion = () => {
  const { formData } = useSearchQuery()

  return (
    <section className="section-padding px-0">
      <div className="container">
        <SectionHeading title="Browse by Occasion" />
      </div>

      <div className="grid grid-cols-12">
        {occasionItems.map((items, index) => (
          <div className="col-span-12 lg:col-span-3" key={index}>
            <div className="mr-0 overflow-hidden xl:min-h-[534px]" key={index}>
              <Link
                className="relative block"
                href={{
                  pathname: '/services',
                  query: {
                    search: items.name,
                    location: formData.location,
                    categories: items.name,
                    date: formData.date
                  }
                }}
              >
                <Image src={items.img} className="w-full" alt="image" />
                <div className="absolute left-0 top-0 h-full w-full bg-black/20 p-8">
                  <div className="flex h-full flex-col items-center justify-end">
                    <h4 className="mb-10 text-center font-sora text-3xl text-white md:text-5xl md:leading-[58px]">
                      {items.name}
                    </h4>

                    <div className="flex justify-center">
                      <button
                        className={`inline-block rounded p-4 font-sora text-sm font-bold md:p-6 md:text-base`}
                        style={{ backgroundColor: `${items.bgColor}` }}
                      >
                        {items.name}
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Occasion
