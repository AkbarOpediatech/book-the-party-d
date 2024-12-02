import SectionHeading from '@/app/(landing)/components/SectionHeading'
import ServiceCard from '@/app/(landing)/components/ServiceCard'
import { cn } from '@/utils'
import Link from 'next/link'

type IProps = {
  specialPackages: {
    desc: string
    id: number
    img: {
      src: string
      blurDataURL: string
      blurHeight: number
      blurWidth: number
      height: number
      width: number
    }
    name: string
    slug: string
    url: string
  }[]
}

const RelatedServices: React.FC<IProps> = ({ specialPackages }) => {
  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <SectionHeading title="Related Services" headingRootClass="md:mb-0" />
        <Link
          href={'/service'}
          className={cn(
            'flex items-center gap-5 rounded-full border border-clr-fb bg-white px-7 py-3 text-base font-bold text-clr-fb'
          )}
        >
          see more
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-4">
        {specialPackages.slice(0, 4).map((items, index) => (
          <div className="col-span-1" key={index}>
            <ServiceCard imgSrc={items.img || ''} title={'Book chair arrangements'} review={10} price={100} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedServices
