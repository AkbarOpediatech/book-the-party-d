import { listingImportantInfo } from '@/utils'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

const ImportantInfo = () => {
  return (
    <div className="listing-details-inclusion p-6">
      {listingImportantInfo.map((data, index) => (
        <div key={index} className="mb-4 flex items-start gap-3 sm:gap-4">
          <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-clr-fb sm:h-8 sm:w-8" />
          <p className="text-sm font-medium text-clr-36 sm:text-base">{data}</p>
        </div>
      ))}
    </div>
  )
}

export default ImportantInfo
