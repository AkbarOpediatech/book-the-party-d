'use client'
import type { ServiceItem } from '@/redux/features/services/apiSlice'
import { HeartIcon, MapPinIcon } from '@heroicons/react/16/solid'
import '@smastrom/react-rating/style.css'
import Image from 'next/image'
import Link from 'next/link'
import ServiceImage from '/public/assets/package1.png'

type IProps = {
  serviceData: ServiceItem[]
}

const ListItems: React.FC<IProps> = ({ serviceData }) => {
  // const [starRating, setStarRating] = useState(0)

  return (
    <>
      {serviceData?.map((items, index) => (
        <div className="mb-5 flex h-[250px] rounded-3xl border p-2 last:mb-0" key={index}>
          <div className="flex-shrink-0 overflow-hidden rounded-3xl">
            <Image
              width={278}
              height={165}
              src={items?.featured_image ? items?.featured_image : ServiceImage}
              className="w-full flex-shrink-0"
              alt="image"
            />
          </div>
          <div className="flex flex-col justify-between px-5">
            <div className="space-y-2">
              <Link
                href={`/services/${items._id}`}
                className="mb-2 font-sora text-lg font-semibold text-neutral-900"
              >
                {items.title}
              </Link>

              <div className="h-12 overflow-hidden">
                <p className="text-sm font-extrabold italic text-neutral-500 md:text-base"> {items.infos} </p>
              </div>
              <button className="flex items-center gap-2 text-sm font-extrabold italic text-neutral-500 md:text-base">
                <MapPinIcon className="size-6" />
                {items.location?.title}
              </button>
            </div>

            <p className="font-sora text-xl font-bold text-neutral-900 md:text-2xl">
              $ {items.price?.[0]?.value || 0}
            </p>
            <div>
              <button className="group inline-block rounded-full bg-clr-f8 p-1">
                <HeartIcon className="inline-block size-6 fill-clr-c6 group-hover:fill-red-600" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ListItems
