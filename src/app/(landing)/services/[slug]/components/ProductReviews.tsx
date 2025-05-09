import SectionHeading from '@/app/(landing)/components/SectionHeading'
import type { ReviewsItem } from '@/redux/features/reviews/apiSlice'
import UserReview from './UserReview'

type IProps = {
  reviewsData: ReviewsItem | undefined
  currentPage: number
  pageLimit: number
  handlePageChange: (page: number) => void
}

const ProductReviews: React.FC<IProps> = ({ reviewsData, handlePageChange }) => {
  return (
    <div id="product-reviews">
      <SectionHeading
        title="Product Reviews"
        sectionHeadingClass="md:text-[36px]"
        headingRootClass="lg:mb-5"
      />
      {Array.isArray(reviewsData) && reviewsData.length > 0 ? (
        <UserReview data={reviewsData} handlePageChange={handlePageChange} />
      ) : (
        'No Reviews'
      )}
    </div>
  )
}

export default ProductReviews
