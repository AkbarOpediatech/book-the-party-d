'use client'
import type { ServiceItem } from '@/redux/features/reviews/apiSlice'
import Image from 'next/image'
import avatar from '/public/assets/avatar.jpeg'

type IProps = {
  data: ServiceItem[] | undefined
}

const UserReview: React.FC<IProps> = ({ data }) => {
  // const [starRating, setStarRating] = useState(0)
  console.log(data, 'rfeview datga')

  return (
    <>
      {data?.map((i, index) => (
        <div className="mb-14" key={index}>
          <div className="mb-6">
            {/* TODO: WORK WITH IT LETTER */}
            {/* <Rating
          style={{ maxWidth: 120 }}
          value={starRating}
          onChange={setStarRating}
          readOnly={true}
          className="mb-4"
        /> */}

            <p className="text-clr-[#0B0F0E] mb-1.5 text-base font-medium">&quot;{i.description}&quot;</p>
            <p className="text-sm text-[#818B9C]">July 2, 2020 03:29 PM</p>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Image width={40} height={40} className="rounded-full" src={avatar} alt="image" />
              <p className="text-clr-[#0B0F0E] mb-1.5 text-base font-medium">Darrell Steward</p>
            </div>

            {/* <div className="flex items-center gap-4">
          <button className="border-clr-[#E4E9EE] flex items-center gap-2 rounded border p-3">
            <HandThumbUpIcon className="size-5 fill-clr-fb" />
            <p className="text-clr-[#0B0F0E] text-base">128</p>
          </button>
          <button className="border-clr-[#E4E9EE] flex items-center gap-2 rounded border p-3">
            <HandThumbDownIcon className="size-5" />
          </button>
        </div> */}
          </div>
        </div>
      ))}
    </>
  )
}

export default UserReview
