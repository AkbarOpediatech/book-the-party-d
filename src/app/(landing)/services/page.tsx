import Reviews from '../components/Reviews'
import Filter from './components/Filter'
import Results from './components/Results'

const Services = () => {
  return (
    <section>
      <div className="section-padding">
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-4">
              <Filter />
            </div>
            <div className="col-span-8">
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
