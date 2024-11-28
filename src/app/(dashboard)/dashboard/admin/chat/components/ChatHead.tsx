import type { IChatData } from '@/utils'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon, PencilIcon, Square2StackIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

type IProps = {
  onProfileClick: () => void
  selectedChat: IChatData
}

const ChatHead: React.FC<IProps> = ({ onProfileClick, selectedChat }) => {
  return (
    <div className="border-b p-5">
      <div className="flex items-center justify-between">
        <div className="flex cursor-pointer items-center gap-4 py-3" onClick={onProfileClick}>
          <div className="relative">
            <div className="h-11 w-11 overflow-hidden rounded-full">
              <Image width={44} height={44} src={selectedChat.avatar} alt="avatar" />
            </div>
            {selectedChat.status === 'active now' && (
              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-clr-16"></div>
            )}
          </div>

          <div className="w-full max-w-[150px]">
            <p className="flex w-full justify-between text-sm font-semibold text-clr-36">
              {selectedChat.name}
            </p>
            <p className="truncate text-sm font-semibold capitalize text-clr-81">{selectedChat.status}</p>
          </div>
        </div>

        <Menu>
          <MenuButton>
            <EllipsisVerticalIcon className="size-4 fill-black/30" />
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="w-36 origin-top-right rounded-xl border bg-white p-1 text-sm/6 text-black shadow-sm transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <MenuItem>
              <button
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10"
                onClick={onProfileClick}
              >
                <PencilIcon className="size-4 fill-black/30" />
                Profile
              </button>
            </MenuItem>

            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10">
                <Square2StackIcon className="size-4 fill-black/30" />
                Block
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  )
}

export default ChatHead
