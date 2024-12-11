import SectionHeading from '@/app/(landing)/components/SectionHeading'
import type { ServiceItem } from '@/redux/features/services/apiSlice'
import UserReview from './UserReview'

type IProps = {
  singleService: ServiceItem | undefined
}

const ProductReviews: React.FC<IProps> = ({ singleService }) => {
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
      <UserReview data={singleService} />
    </div>
  )
}

export default ProductReviews
