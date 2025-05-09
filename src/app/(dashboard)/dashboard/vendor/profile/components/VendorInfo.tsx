import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import type { IUser } from '@/redux/features/user/apiSlice'
import { BriefcaseIcon, InformationCircleIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Info from './Info'
import ProfilePic from './ProfilePic'
import edit from '/public/assets/edit-user.svg'

type IProps = {
  setShowInfoEdit: (showIndex: boolean) => void
  data: IUser | undefined
  setShowProfileEdit: (showIndex: boolean) => void
}
const VendorInfo: React.FC<IProps> = ({ setShowInfoEdit, data, setShowProfileEdit }) => {
  return (
    <>
      <ProfilePic setShowProfileEdit={setShowProfileEdit} data={data} />

      <div className="rounded-lg bg-white p-6">
        <div className="mb-6 flex items-center gap-2">
          <p className="text-xl font-medium text-gray-900">Vendor information</p>
          <InformationCircleIcon className="size-3 text-gray-400" />
        </div>
        <div className="grid grid-cols-1 gap-6 border-b border-gray-200 pb-6 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-5">
            <Info title="Full name" value={data?.name || 'Joseph McFall'} />

            <Info
              title="Description"
              value={
                data?.about ||
                `Hello, I'm Helene Engels,
USA Designer, Creating things that stand out, Featured by Adobe, Figma, Webflow and others, Daily design tips & resources, Exploring Web3.`
              }
            />

            <Info
              title="Specialized in"
              value={data?.specialized?.map(i => i) || 'Frontend Developer'}
              icon={<BriefcaseIcon className="size-3.5 text-gray-400" />}
            />
          </div>

          <div className="flex flex-col gap-5">
            <Info title="Email Address" value={data?.email || 'yourname@example.com'} />
            <Info title="Phone Number" value={data?.phone || '+1234 567 890 / +12 345 678 '} />
          </div>
        </div>

        <DashboardButton
          onClick={() => setShowInfoEdit(true)}
          icon={<Image src={edit} alt="icon" />}
          name="Edit"
          type="button"
          className="mt-5"
        />
      </div>
    </>
  )
}

export default VendorInfo
