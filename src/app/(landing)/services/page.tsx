'use client'
import { useSearchParams } from 'next/navigation'
import Reviews from '../components/Reviews'
import Filter from './components/Filter'
import Results from './components/Results'

const Services = () => {
  const searchParams = useSearchParams()
  const category = searchParams.get('categories')
  const location = searchParams.get('Location')
  const isApproved = searchParams.get('is_approved')
  console.log(category, location)
  return (
    <section>
      <div className="section-padding">
        <div className="custom-container">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 md:col-span-4">
              <Filter />
              {/* <FilterSidebar /> */}
            </div>
            <div className="col-span-12 md:col-span-8">
              <Results />
            </div>
          </div>
        </div>
      </div>
      <Reviews />
    </section>
  )
}

export default Services

function FilterSidebar() {
  return (
    <div>
      <div className="p-4">
        <div className="col-span-1 rounded-lg bg-white p-6 shadow-lg">
          <div className="mb-6">
            <h3 className="mb-2 text-lg font-semibold">Categories</h3>
            <div className="space-y-2">
              <div>
                <input type="checkbox" id="partySetup" className="mr-2" />
                <label htmlFor="partySetup">Party setup & prop hire packages</label>
              </div>
              <div>
                <input type="checkbox" id="festiveFlair" className="mr-2" />
                <label htmlFor="festiveFlair">The Festive Flair Package</label>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-lg font-semibold">Location</h3>
            <div className="space-y-2">
              <div>
                <input type="checkbox" id="sydney" className="mr-2" />
                <label htmlFor="sydney">Sydney</label>
              </div>
              <div>
                <input type="checkbox" id="melbourne" className="mr-2" />
                <label htmlFor="melbourne">Melbourne</label>
              </div>
              <div>
                <input type="checkbox" id="brisbane" className="mr-2" />
                <label htmlFor="brisbane">Brisbane</label>
              </div>
            </div>
          </div>

          {/* <div className="mb-6">
            <h3 className="mb-2 text-lg font-semibold">Filter by Price</h3>
            <input type="range" min="10" max="80" defaultValue="45" className="w-full" />
          </div> */}

          <div className="mb-6">
            <h3 className="mb-2 text-lg font-semibold">Sort By</h3>
            <div className="space-y-2">
              <div>
                <input type="radio" id="lowToHigh" name="sortBy" className="mr-2" />
                <label htmlFor="lowToHigh">Price lowest to highest</label>
              </div>
              <div>
                <input type="radio" id="highToLow" name="sortBy" className="mr-2" />
                <label htmlFor="highToLow">Price highest to lowest</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
