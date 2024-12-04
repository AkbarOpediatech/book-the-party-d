import SectionHeading from '@/app/(landing)/components/SectionHeading'
import RatingBarChart from './RatingBarChart'
import RatingPieChart from './RatingPieChart'
import UserReview from './UserReview'

const ProductReviews = () => {
  return (
    <div>
      <SectionHeading
        title="Product Reviews"
        sectionHeadingClass="md:text-[36px]"
        headingRootClass="lg:mb-5"
      />
      <div className="mb-8 flex flex-wrap items-center justify-between gap-5 border-b border-b-[#afafafb9] pb-8">
        <RatingPieChart />
        <RatingBarChart />
      </div>
      <UserReview />
    </div>
  )
}

export default ProductReviews
