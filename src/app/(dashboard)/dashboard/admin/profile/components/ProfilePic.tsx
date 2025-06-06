import DashboardButton from '@/app/(dashboard)/components/DashboardButton'

import type { IUser } from '@/redux/features/user/apiSlice'
import { InformationCircleIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import avater from '/public/assets/avatar.jpeg'
import edit from '/public/assets/edit-user.svg'

type IProps = {
  setShowProfileEdit: (showIndex: boolean) => void
  data: IUser | undefined
}

const ProfilePic: React.FC<IProps> = ({ setShowProfileEdit, data }) => {
  return (
    <div className="mb-4 rounded-lg bg-white p-6 shadow">
      <div className="mb-6 flex items-center gap-2">
        <p className="text-xl font-medium text-gray-900">Profile picture</p>
        <InformationCircleIcon className="size-3 text-gray-400" />
      </div>
      <div className="flex items-center gap-4 border-b border-gray-200 pb-6">
        <div className="size-[96px] overflow-hidden rounded">
          <Image
            width={150}
            height={150}
            className="center h-full w-full object-cover"
            src={data?.avatar || avater}
            alt="pic"
          />
        </div>
        <div>
          <span className="rounded-md bg-[#1E429F]/20 px-3 py-0.5 text-sm font-medium text-[#1E429F]">
            PRO
          </span>
          <p className="mt-3 text-xl text-gray-900">{data?.name || 'Alex Buckmaster'}</p>
        </div>
      </div>
      <DashboardButton
        onClick={() => setShowProfileEdit(true)}
        icon={<Image src={edit} alt="icon" />}
        name="Edit"
        type="button"
        className="mt-5"
      />
    </div>
  )
}

export default ProfilePic
