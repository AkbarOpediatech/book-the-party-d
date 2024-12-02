import SectionHeading from '@/app/(landing)/components/SectionHeading'
import RatingBarChart from './RatingBarChart'
import RatingPieChart from './RatingPieChart'

const ProductReviews = () => {
  return (
    <div>
      <SectionHeading
        title="Product Reviews"
        sectionHeadingClass="md:text-[36px]"
        headingRootClass="lg:mb-5"
      />

      <RatingPieChart />

      <RatingBarChart />
    </div>
  )
}

export default ProductReviews
