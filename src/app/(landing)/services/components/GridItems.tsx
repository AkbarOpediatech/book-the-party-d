import type { ServiceItem } from '@/redux/features/services/apiSlice'
import ServiceCard from '../../components/ServiceCard'
import ServiceImage from '/public/assets/package1.png'

type IProps = {
  serviceData: ServiceItem[]
}

const GridItems: React.FC<IProps> = ({ serviceData }) => {
  console.log(serviceData, 'serviceData')
  return (
    <div className="grid grid-cols-12 gap-3.5">
      {serviceData.map((items, index) => (
        <div className="col-span-3" key={index}>
          <ServiceCard
            Href={`/services/${items.slug}`}
            imgSrc={items.featured_image ? items.featured_image : ServiceImage}
            title={items.title}
            review={10}
            price={items.price?.[0]?.value || 0}
            chooseLocation={items?.location?.title}
          />
        </div>
      ))}
    </div>
  )
}

export default GridItems
