import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CheckIcon, ClockIcon, EllipsisHorizontalIcon, EyeIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import avater from '/public/assets/avatar.jpeg'

const Notification = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="size-8 flex-shrink-0 overflow-hidden rounded-full lg:size-11">
          <Image className="object-cover" src={avater} alt="pic" />
        </div>
        <div className="text-gray-500">
          <p className="mb-1.5">You have a new Booking from Ashley D morgan</p>
          <div className="flex items-center gap-1.5">
            <ClockIcon className="size-3" />
            <p className="text-sm">a few moments ago</p>
          </div>
        </div>
      </div>
      <Menu>
        <MenuButton>
          <EllipsisHorizontalIcon className="size-4" />
        </MenuButton>

        <MenuItems
          anchor="bottom end"
          className={
            'w-52 origin-top-right rounded-xl border bg-white p-1 text-sm/6 text-black shadow-sm transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0'
          }
        >
          <MenuItem>
            <div className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10">
              <EyeIcon className="size-4 fill-black/30" />
              View
            </div>
          </MenuItem>
          <MenuItem>
            <div className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10">
              <CheckIcon className="size-4 fill-black/30" />
              Mark as read
            </div>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}

export default Notification
