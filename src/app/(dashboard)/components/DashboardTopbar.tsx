'use client'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ArrowRightEndOnRectangleIcon, Bars3Icon, UserIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NotificationPopup from './NotificationPopup'
import Avatar from '/public/assets/avatar.jpeg'

type IProps = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DashboardTopbar: React.FC<IProps> = ({ setSidebarOpen }) => {
  const currentpath = usePathname()
  const isVendorDashboard = currentpath === '/dashboard/vendor'
  const isAdminDashboard = currentpath === '/dashboard/admin'

  const renderProfileMenu = (userType: 'vendor' | 'admin') => (
    <Menu>
      <MenuButton className="size-8 overflow-hidden rounded-full lg:size-10">
        <Image src={Avatar} alt="avatar" />
      </MenuButton>

      <MenuItems
        anchor="bottom end"
        className="mt-2 w-52 origin-top-right rounded-xl border bg-white p-1 text-sm/6 text-black shadow-sm transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <MenuItem>
          <Link
            className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10"
            href={`/dashboard/${userType}/profile`}
          >
            <UserIcon className="size-4 fill-black/30" />
            Profile
          </Link>
        </MenuItem>
        <MenuItem>
          <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10">
            <ArrowRightEndOnRectangleIcon className="size-4 fill-black/30" />
            Logout
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  )

  return (
    <div className="w-full border-l bg-white px-6 py-[22px] md:px-10">
      <div className="flex items-center justify-between gap-5 lg:flex-nowrap lg:gap-0">
        <div className="flex w-full max-w-[467px] gap-2">
          <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Bars3Icon className="h-6 w-6 text-gray-500" />
          </button>

          <input
            placeholder="Search"
            className="h-12 w-full max-w-[467px] bg-clr-f8 bg-icon-search bg-left bg-no-repeat px-2 pl-10 placeholder:font-semibold placeholder:text-clr-96 focus:outline-none"
            style={{ backgroundPosition: '10px' }}
          />
        </div>

        <div className="flex flex-shrink-0 items-center gap-6">
          {isVendorDashboard && (
            <>
              <NotificationPopup />
              {renderProfileMenu('vendor')}
            </>
          )}

          {isAdminDashboard && (
            <>
              <NotificationPopup />
              {renderProfileMenu('admin')}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default DashboardTopbar
