import Image from 'next/image'
import Ratings from './Ratings'
import avater from '/public/assets/avatar.jpeg'

const Reviews = () => {
  return (
    <div className="p-4 sm:p-6">
      <div className="mb-3 flex items-center gap-2">
        <div className="h-10 w-10 overflow-hidden rounded sm:h-12 sm:w-12">
          <Image className="object-cover" src={avater} alt="avatar" />
        </div>
        <p className="text-sm font-semibold text-gray-900 sm:text-base">Micheal Gough</p>
      </div>
      <p className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">Fast and reliable</p>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Ratings rating={5} />
        <p className="text-xs text-gray-500 sm:text-sm">November 18 2023 at 15:35</p>
      </div>
      <p className="text-sm text-gray-500 sm:text-base">
        Lorem ipsum dolor sit amet consectetur. Praesent lorem maecenas cursus eleifend blandit leo. Est
        egestas diam ullamcorper aenean at tempor. Nec quis semper sem amet. Sem nulla adipiscing cras
        ultricies eget.
      </p>
    </div>
  )
}

export default Reviews
