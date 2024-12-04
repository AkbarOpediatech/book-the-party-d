import type { ServiceItem } from '@/redux/features/services/apiSlice'
import ServiceCard from '../../components/ServiceCard'
import ServiceImage from '/public/assets/package1.png'

type IProps = {
  serviceData: ServiceItem[]
}

const GridItems: React.FC<IProps> = ({ serviceData }) => {
  console.log(serviceData, 'serviceData')
  return (
    <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {serviceData?.map((items, index) => (
        <div className="flex justify-center" key={index}>
          <ServiceCard
            Href={`/services/${items.slug}`}
            imgSrc={items.featured_image ? items.featured_image : ServiceImage}
            title={items.title}
            review={10}
            price={items.price?.[0]?.value || 0}
            chooseLocation={items.location.title} //TODO FIXME:
          />
        </div>
      ))}
    </div>
  )
}

export default GridItems
