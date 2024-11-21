import { listingImportantInfo } from '@/utils'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

const ImportantInfo = () => {
  return (
    <div className="listing-details-inclusion p-6">
      {listingImportantInfo.map((data, index) => (
        <div key={index} className="mb-4 flex items-center gap-4">
          <CheckCircleIcon className="size-8 text-clr-fb" />
          <p className="font-medium" dangerouslySetInnerHTML={{ __html: data }} />
        </div>
      ))}
    </div>
  )
}

export default ImportantInfo
