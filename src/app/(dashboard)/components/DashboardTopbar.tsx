import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import Avater from '/public/assets/avatar.jpeg'
import ICNotification from '/public/assets/ic_notification.svg'

type IProps = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DashboardTopbar: React.FC<IProps> = ({ setSidebarOpen }) => {
  return (
    <div className="w-full border-l bg-white px-6 py-[22px] md:px-10">
      <div className="flex flex-wrap items-center justify-between gap-5 lg:flex-nowrap lg:gap-0">
        <div className="flex w-full max-w-[467px] gap-2">
          <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Bars3Icon className="h-6 w-6 text-gray-500" />
          </button>
          {/* input filed */}
          <input
            placeholder="Search"
            className="bg-icon-search bg-clr-f8 placeholder:text-clr-96 h-12 w-full max-w-[467px] bg-left bg-no-repeat px-2 pl-10 placeholder:font-semibold focus:outline-none"
            style={{ backgroundPosition: '10px' }}
          />
        </div>

        {/* user function */}
        <div className="flex items-center gap-6">
          <button>
            <Image className="h-5 w-5" src={ICNotification} alt="icon" />
          </button>

          <Menu>
            <MenuButton className={'h-10 w-10 overflow-hidden rounded-full'}>
              <Image src={Avater} alt="avater" />
            </MenuButton>

            <MenuItems anchor="bottom end" className={'mt-2 w-48 rounded bg-blue-100 p-3'}>
              <MenuItem>
                <Link className="block" href="/settings">
                  Settings
                </Link>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default DashboardTopbar
