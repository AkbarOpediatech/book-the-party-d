'use client'
import type { ReviewsItem } from '@/redux/features/reviews/apiSlice'
import { Rating } from '@smastrom/react-rating'
import { format } from 'date-fns'
import Image from 'next/image'
import Pagination from '../../components/Pagination'
import avatar from '/public/assets/avatar.jpeg'

type IProps = {
  data: ReviewsItem | undefined
  // totalRecords: number
  currentPage: number
  pageLimit: number
  handlePageChange: (page: number) => void
}

const UserReview: React.FC<IProps> = ({ data, currentPage, pageLimit, handlePageChange }) => {
  // Function to format date
  const formatDate = (date: string | Date) => {
    return format(new Date(date), 'MMMM d, yyyy hh:mm a')
  }

  return (
    <>
      {/* {data?.map((i, index) => ( */}
      <div className="mb-10">
        <div className="mb-6">
          {/* TODO: WORK WITH IT LATER */}
          <Rating style={{ maxWidth: 120 }} value={data?.rating || 0} readOnly={true} className="mb-4" />

          <p className="text-clr-[#0B0F0E] mb-1.5 text-base font-medium">&quot;{data?.description}&quot;</p>
          <p className="text-sm text-[#818B9C]">
            {data?.user?.updatedAt ? formatDate(data.user.updatedAt) : 'N/A'}
          </p>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Image
              width={40}
              height={40}
              className="rounded-full"
              src={data?.user?.avatar || avatar}
              alt="image"
            />
            <p className="text-clr-[#0B0F0E] mb-1.5 text-base font-medium">Darrell Steward</p>
          </div>
        </div>
      </div>
      {/* ))} */}
      {/* <Pagination
        totalRecords={totalRecords}
        currentPage={currentPage}
        pageLimit={pageLimit}
        handlePageChange={handlePageChange}
        rootClassName="flex justify-start mb-10"
      /> */}
    </>
  )
}

export default UserReview
