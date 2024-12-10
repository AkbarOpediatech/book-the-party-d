'use client'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Filter from './components/Filter'
import Results from './components/Results'

const ServicesContent = () => {
  const searchParams = useSearchParams()
  const category = searchParams.get('categories')
  const location = searchParams.get('Location')
  console.log(category, location)
  return (
    <section>
      <div className="md:py-10 lg:py-16">
        <div className="custom-container">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-12">
            <div className="col-span-1 sm:col-span-2 md:col-span-4">
              <Filter />
              {/* <FilterSidebar /> */}
            </div>
            <div className="col-span-1 sm:col-span-2 md:col-span-8">
              <Results />
            </div>
          </div>
        </div>
      </div>
      {/* <Reviews /> */}
    </section>
  )
}

const Services = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicesContent />
    </Suspense>
  )
}
export default Services
