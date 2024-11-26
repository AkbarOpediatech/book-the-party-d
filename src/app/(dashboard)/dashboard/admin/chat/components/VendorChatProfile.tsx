import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon, EnvelopeIcon, EyeIcon, PhoneIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Avatar from '/public/assets/avatar.jpeg'

const VendorChatProfile = () => {
  return (
    <div className="w-full max-w-[350px] border-l p-5">
      <div className="flex justify-center">
        <div className="mb-3 h-[90px] w-[90px] overflow-hidden rounded-full">
          <Image width={90} height={90} src={Avatar} alt="avatar" />
        </div>
      </div>
      <div className="mb-5">
        <h2 className="text-center text-sm font-semibold text-clr-36">Lewis Simmons</h2>
        <p className="text-center text-sm text-clr-81">Customer</p>
      </div>

      <Disclosure defaultOpen={true}>
        <DisclosureButton className="mb-5 flex w-full items-center justify-between text-sm font-bold uppercase text-clr-ab">
          information <ChevronDownIcon className="size-3" />
        </DisclosureButton>
        <DisclosurePanel>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-sm text-clr-36">
              <EyeIcon className="size-[14px]" />
              Location
            </li>
            <li className="flex items-center gap-2 text-sm text-clr-36">
              <PhoneIcon className="size-[14px]" />
              (229)538-1421
            </li>
            <li className="flex items-center gap-2 text-sm text-clr-36">
              <EnvelopeIcon className="size-[14px]" />
              khalid_watsica@reed.ca
            </li>
          </ul>
        </DisclosurePanel>
      </Disclosure>
    </div>
  )
}

export default VendorChatProfile
