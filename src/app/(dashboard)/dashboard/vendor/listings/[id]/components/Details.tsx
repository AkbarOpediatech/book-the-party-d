import type { ServiceItem } from '@/redux/features/services/apiSlice'

type IProps = {
  onData: ServiceItem | undefined
}

const Details: React.FC<IProps> = ({ onData }) => {
  return (
    <div className="p-4 sm:p-6">
      <p className="mb-2 text-xs font-bold uppercase text-clr-36 sm:text-sm">About the listing</p>
      <p className="w-full text-sm text-[#6F757C] sm:max-w-[581px] sm:text-base">{onData?.description}</p>
    </div>
  )
}

export default Details
