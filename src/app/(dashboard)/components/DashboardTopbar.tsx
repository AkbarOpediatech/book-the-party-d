'use client'
import { roleWiseRoute } from '@/utils/constand'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ArrowRightEndOnRectangleIcon, Bars3Icon, UserIcon } from '@heroicons/react/16/solid'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import NotificationPopup from './NotificationPopup'
import Avatar from '/public/assets/avatar.jpeg'

type IProps = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DashboardTopbar: React.FC<IProps> = ({ setSidebarOpen }) => {
  const { data: session } = useSession()

  const role = session?.user?.role as keyof typeof roleWiseRoute | undefined
  const route = role ? roleWiseRoute[role] : '/'

  const handleLogout = () => {
    signOut({ callbackUrl: '/login' })
  }

  const renderMenuItems = () => (
    <>
      <MenuItem>
        <Link
          className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-black/10"
          href={route}
        >
          <UserIcon className="size-4 fill-black/30" />
          Profile
        </Link>
      </MenuItem>
      <MenuItem>
        <button
          className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-black/10"
          onClick={handleLogout}
        >
          <ArrowRightEndOnRectangleIcon className="size-4 fill-black/30" />
          Logout
        </button>
      </MenuItem>
    </>
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
          {role && (
            <>
              <NotificationPopup />
              <Menu>
                <MenuButton className="size-8 overflow-hidden rounded-full lg:size-10">
                  <Image
                    width={80}
                    height={80}
                    src={session?.user?.avatar || Avatar}
                    alt="user-icon"
                    className="center object-fill"
                  />
                </MenuButton>
                <MenuItems
                  anchor="bottom end"
                  className="mt-2 w-52 origin-top-right rounded-xl border bg-white p-1 text-sm/6 text-black shadow-sm transition duration-100 ease-out focus:outline-none"
                >
                  {renderMenuItems()}
                </MenuItems>
              </Menu>
            </>
          )}
          {!role && (
            <Menu>
              <MenuButton className="size-8 overflow-hidden rounded-full lg:size-10">
                <Image width={80} height={80} src={Avatar} alt="user-icon" className="center object-fill" />
              </MenuButton>
              <MenuItems
                anchor="bottom end"
                className="mt-2 w-52 origin-top-right rounded-xl border bg-white p-1 text-sm/6 text-black shadow-sm transition duration-100 ease-out focus:outline-none"
              >
                <MenuItem>
                  <Link
                    className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-black/10"
                    href="/login"
                  >
                    <ArrowRightEndOnRectangleIcon className="size-4 fill-black/30" />
                    Login
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          )}
        </div>
      </div>
    </div>
  )
}

export default DashboardTopbar
