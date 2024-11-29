'use client'
import { specialPackages } from '@/utils'
import ServiceCard from '../../components/ServiceCard'

const RelatedServices = () => {
  return (
    <div className="my-5">
      <div className="mb-10 flex items-start justify-between gap-2 sm:items-center lg:gap-4">
        <h2 className="text-xl font-semibold sm:text-2xl md:text-4xl">Related Services</h2>
        <button className="rounded-3xl border border-clr-fb px-4 py-2 text-sm font-medium text-clr-fb transition hover:bg-clr-fb hover:text-white sm:text-base">
          See More
        </button>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {specialPackages.slice(0, 4).map((items, index) => (
          <div className="col-span-1" key={index}>
            <ServiceCard
              Href={`/services/${items.id}`}
              imgSrc={items.img}
              title={'Book chair arrangements'}
              review={10}
              price={100}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedServices
