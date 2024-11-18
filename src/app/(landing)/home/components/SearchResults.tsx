import { specialPackages } from '@/utils'
import SectionHeading from '../../components/SectionHeading'
import ServiceCard from '../../components/ServiceCard'

const SearchResults = () => {
  return (
    <section id="search-results" className="section-padding">
      <div className="container">
        <SectionHeading title="Search Result : 340 showing" />

        <div className="grid grid-cols-4 gap-4">
          {specialPackages.map((items, index) => (
            <div className="col-span-1">
              <ServiceCard imgSrc={items.img} title={'Book chair arrangements'} review={10} price={100} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SearchResults
