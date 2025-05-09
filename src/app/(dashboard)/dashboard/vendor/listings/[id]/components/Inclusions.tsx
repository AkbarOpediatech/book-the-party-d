import type { ServiceItem } from '@/redux/features/services/apiSlice'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

type IProps = {
  onData: ServiceItem | undefined
}

const Inclusions: React.FC<IProps> = ({ onData }) => {
  const inclusions = Array.isArray(onData?.inclusions) ? onData?.inclusions : [onData?.inclusions || '']
  return (
    <div className="listing-details-inclusion p-6">
      {inclusions.map((data, index) => (
        <div key={index} className="mb-4 flex items-start gap-3 sm:gap-4">
          <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-clr-fb sm:h-8 sm:w-8" />
          <p className="font-medium">{data}</p>
        </div>
      ))}
    </div>
  )
}

export default Inclusions
