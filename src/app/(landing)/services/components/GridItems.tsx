import { specialPackages } from '@/utils'
import ServiceCard from '../../components/ServiceCard'

const GridItems = () => {
  return (
    <div className="grid grid-cols-12 gap-8">
      {specialPackages.map((items, index) => (
        <div className="col-span-3" key={index}>
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
  )
}

export default GridItems
