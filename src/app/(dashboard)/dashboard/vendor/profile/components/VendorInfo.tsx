import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import { BriefcaseIcon, InformationCircleIcon, MapPinIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Info from './Info'
import edit from '/public/assets/edit-user.svg'

type IProps = {
  setShowInfoEdit: (showIndex: boolean) => void
}

const VendorInfo: React.FC<IProps> = ({ setShowInfoEdit }) => {
  return (
    <div>
      <div className="mb-6 flex items-center gap-2">
        <p className="text-xl font-medium text-gray-900">Vendor information</p>
        <InformationCircleIcon className="size-3 text-gray-400" />
      </div>
      <div className="grid grid-cols-2 gap-12 border-b border-gray-200 pb-6">
        <div className="flex flex-col gap-5">
          <Info title="Full name" value="Joseph McFall" />
          <Info
            title="Description"
            value="Hello, I'm Helene Engels,
USA Designer, Creating things that stand out, Featured by Adobe, Figma, Webflow and others, Daily design tips & resources, Exploring Web3."
          />
          <Info
            title="Location"
            value="California, United States of America"
            icon={<MapPinIcon className="size-3.5 text-gray-400" />}
          />
          <Info
            title="Specialized in"
            value="Frontend Developer"
            icon={<BriefcaseIcon className="size-3.5 text-gray-400" />}
          />
        </div>
        <div className="flex flex-col gap-5">
          <Info title="Email Address" value="yourname@example.com" />
          <Info title="Phone Number" value="+1234 567 890 / +12 345 678 " />
          <Info title="Languages" value="English, French, Spanish" />
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
  )
}

export default VendorInfo
