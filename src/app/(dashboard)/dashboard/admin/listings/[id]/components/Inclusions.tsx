import { listingInclusions } from '@/utils'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

const Inclusions = () => {
  return (
    <div className="listing-details-inclusion p-6">
      {listingInclusions.map((data, index) => (
        <div key={index} className="mb-4 flex items-center gap-4">
          <CheckCircleIcon className="size-8 text-clr-fb" />
          <p className="font-medium" dangerouslySetInnerHTML={{ __html: data }} />
        </div>
      ))}
    </div>
  )
}

export default Inclusions
