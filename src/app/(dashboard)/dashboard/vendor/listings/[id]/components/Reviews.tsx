import type { ServiceItem } from '@/redux/features/services/apiSlice'
import Image from 'next/image'
import Ratings from './Ratings'
import avater from '/public/assets/avatar.jpeg'

type IProps = {
  onData: ServiceItem | undefined
}

const Reviews: React.FC<IProps> = () => {
  return (
    <div className="p-6">
      <div className="mb-3 flex items-center gap-2">
        <div className="size-12 overflow-hidden rounded">
          <Image className="object-cover" src={avater} alt="avater" />
        </div>
        <p className="font-semibold text-gray-900">Micheal Gough</p>
      </div>
      <p className="text-xl font-semibold text-gray-900">Fast and reliable</p>
      <div className="mb-3 flex items-center gap-2">
        <Ratings rating={5} />
        <p className="text-sm text-gray-500">November 18 2023 at 15:35</p>
      </div>
      <p className="text-gray-500">
        Lorem ipsum dolor sit amet consectetur. Praesent lorem maecenas cursus eleifend blandit leo. Est
        egestas diam ullamcorper aenean at tempor. Nec quis semper sem amet. Sem nulla adipiscing cras
        ultricies eget.
      </p>
    </div>
  )
}

export default Reviews
