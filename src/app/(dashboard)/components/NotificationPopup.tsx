'use client'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ArrowRightEndOnRectangleIcon, WrenchScrewdriverIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import DashboardButton from './DashboardButton'
import ICNotification from '/public/assets/ic_notification.svg'

function NotificationPopup() {
  return (
    <Menu>
      <MenuButton className="relative">
        <Image className="size-6" src={ICNotification} alt="icon" />
        <span className="absolute -top-1 right-0 block size-3 rounded-full bg-clr-fb text-[8px] text-white">
          8
        </span>
      </MenuButton>

      <MenuItems
        anchor="bottom end"
        className="w-52 origin-top-right rounded-xl border bg-white p-1 text-sm/6 text-black shadow-sm transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <MenuItem>
          <div className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10">
            <WrenchScrewdriverIcon className="size-4 fill-black/30" />
            notification 1
          </div>
        </MenuItem>
        <MenuItem>
          <div className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10">
            <ArrowRightEndOnRectangleIcon className="size-4 fill-black/30" />
            notification 2
          </div>
        </MenuItem>
        <MenuItem>
          <DashboardButton
            name="See All"
            type="link"
            linkUrl={`/dashboard/vendor/notifications`} // root page - notification
            className="m-2 flex justify-center"
          />
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}

export default NotificationPopup
