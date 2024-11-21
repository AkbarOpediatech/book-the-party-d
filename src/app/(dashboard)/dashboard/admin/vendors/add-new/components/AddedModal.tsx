import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import Image from 'next/image'
import success from '/public/assets/success.svg'
const AddedModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed left-1/2 top-[52px] w-full -translate-x-1/2 p-4">
      <div className="w-full max-w-[448px] rounded-lg border border-gray-200 bg-white p-5 text-center">
        <Image className="mx-auto mb-3.5" src={success} alt="icon" />
        <p className="mb-4 text-lg font-semibold text-gray-900">Listing added and under review. </p>
        <DashboardButton onClick={onClose} name="Close" type="button" className="mx-auto" />
      </div>
    </div>
  )
}

export default AddedModal
