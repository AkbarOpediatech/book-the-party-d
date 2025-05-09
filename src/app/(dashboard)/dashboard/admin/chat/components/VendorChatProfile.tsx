import type { IAdminChat, IChatData } from '@/utils'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon, EnvelopeIcon, EyeIcon, PhoneIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

type IProps = {
  selectedChat: IAdminChat
}

const VendorChatProfile: React.FC<IProps> = ({ selectedChat }) => {
  return (
    <div className="absolute w-2/3 border-l bg-white p-5 shadow lg:static lg:max-w-[350px] lg:shadow-none">
      <div className="flex justify-center">
        <div className="mb-3 h-[90px] w-[90px] overflow-hidden rounded-full">
          <Image width={90} height={90} src={selectedChat.receiverInfo.avatar} alt="avatar" />
        </div>
      </div>
      <div className="mb-5">
        <h2 className="text-center text-sm font-semibold capitalize text-clr-36">
          {selectedChat.receiverInfo.name}
        </h2>
        <p className="text-center text-sm capitalize text-clr-81">{selectedChat.receiverInfo.type}</p>
      </div>

      <Disclosure defaultOpen={true}>
        <DisclosureButton className="mb-5 flex w-full items-center justify-between text-sm font-bold uppercase text-clr-ab">
          information <ChevronDownIcon className="size-3" />
        </DisclosureButton>
        <DisclosurePanel>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-sm capitalize text-clr-36">
              <EyeIcon className="size-[14px]" />
              {selectedChat.receiverInfo.location}
            </li>
            <li className="flex items-center gap-2 text-sm text-clr-36">
              <PhoneIcon className="size-[14px]" />
              {selectedChat.receiverInfo.phone}
            </li>
            <li className="flex items-center gap-2 text-sm text-clr-36">
              <EnvelopeIcon className="size-[14px]" />
              {selectedChat.receiverInfo.email}
            </li>
          </ul>
        </DisclosurePanel>
      </Disclosure>
    </div>
  )
}

export default VendorChatProfile
