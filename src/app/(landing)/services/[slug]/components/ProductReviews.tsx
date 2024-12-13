import SectionHeading from '@/app/(landing)/components/SectionHeading'
import type { ReviewsItem } from '@/redux/features/reviews/apiSlice'
import UserReview from './UserReview'

type IProps = {
  reviewsData: ReviewsItem[] | undefined
  totalRecords: number
  currentPage: number
  pageLimit: number
  handlePageChange: (page: number) => void
}

const ProductReviews: React.FC<IProps> = ({
  reviewsData,
  totalRecords,
  currentPage,
  pageLimit,
  handlePageChange
}) => {
  return (
    <div id="product-reviews">
      <SectionHeading
        title="Product Reviews"
        sectionHeadingClass="md:text-[36px]"
        headingRootClass="lg:mb-5"
      />
      {/* TODO: WORK WITH IT LETTER */}
      {/* <div className="mb-8 flex flex-wrap items-center justify-between gap-5 border-b border-b-[#afafafb9] pb-8">
        <RatingPieChart />
        <RatingBarChart />
      </div> */}
      {reviewsData && reviewsData.length > 0 ? (
        <UserReview
          data={reviewsData}
          totalRecords={totalRecords}
          currentPage={currentPage}
          pageLimit={pageLimit}
          handlePageChange={handlePageChange}
        />
      ) : (
        'No Reviews'
      )}
    </div>
  )
}

export default ProductReviews
