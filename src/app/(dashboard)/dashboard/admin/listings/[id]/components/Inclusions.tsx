import { listingInclusions } from '@/utils'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

const Inclusions = () => {
  return (
    <div className="listing-details-inclusion p-6">
      {listingInclusions.map((data, index) => (
        <div key={index} className="mb-4 flex items-start gap-3 sm:gap-4">
          <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-clr-fb sm:h-8 sm:w-8" />
          <p className="font-medium" dangerouslySetInnerHTML={{ __html: data }} />
        </div>
      ))}
    </div>
  )
}

export default Inclusions
