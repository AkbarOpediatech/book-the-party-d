'use client'
import { adminNavigation, vendorNavigation } from '@/utils'
import { roleWiseRoute } from '@/utils/constand'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/16/solid'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { Fragment } from 'react'
import Avatar from '/public/assets/avatar.jpeg'
import DLogo from '/public/assets/dashboard-logo.svg'

type IProps = {
  sidebarOpen: boolean
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DashboardSidebar: React.FC<IProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const { data: session } = useSession()
  const currentPath = usePathname()

  // Determine user role-based navigation
  const role = session?.user?.role
  const navigation = role === 'admin' ? adminNavigation : role === 'vendor' ? vendorNavigation : []

  const roleRoute = session?.user?.role as keyof typeof roleWiseRoute
  const route = role ? roleWiseRoute[roleRoute] : '/'

  // Function to render user information
  const renderUserInfo = () => (
    <Link href={route} className="mb-4 flex items-center gap-4 bg-clr-14 px-5 py-4">
      <div className="user-img h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
        <Image
          src={session?.user?.avatar || Avatar}
          alt="avatar"
          width={100}
          height={100}
          className="center h-full w-full flex-shrink-0 object-cover"
        />
      </div>
      <div className="user-info">
        <h3 className="text-sm font-semibold capitalize text-clr-48">{session?.user?.name || 'Ashiqur'}</h3>
        <p className="text-sm capitalize text-clr-81">{session?.user?.role || 'Vendor'}</p>
      </div>
    </Link>
  )

  // Render sidebar navigation
  const renderNavigation = () => (
    <ul className="space-y-1">
      {navigation.map((item, index) => (
        <li key={index}>
          <Link
            onClick={() => setSidebarOpen(false)}
            href={item.href}
            className={`flex items-center gap-3 rounded-lg px-[14px] py-3 text-sm capitalize text-clr-81 transition-all duration-300 ease-in-out hover:bg-clr-ff hover:text-clr-fb ${
              currentPath === item.href ? 'bg-clr-ff text-clr-fb' : ''
            }`}
          >
            <span>
              <Image width={24} height={24} src={item.icon} alt="icon" />
            </span>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )

  return (
    <>
      {/* Mobile Sidebar */}
      <Transition show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
          <TransitionChild
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </TransitionChild>

          <div className="fixed inset-0 z-40 flex">
            <TransitionChild
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative flex w-full max-w-xs flex-1 flex-col bg-white py-[26px]">
                <div className="absolute right-0 top-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
                <nav className="flex-1">
                  <div className="px-6">
                    <Link
                      href={role === 'admin' ? '/dashboard/admin' : '/dashboard/vendor'}
                      className="nav-brand mb-8 block text-black"
                    >
                      <Image width={90} height={40} src={DLogo} alt="logo" />
                    </Link>
                    {renderUserInfo()}
                  </div>
                  <div className="dashboard-navigation space-y-1 px-4 py-6">{renderNavigation()}</div>
                </nav>
              </DialogPanel>
            </TransitionChild>
            <div className="w-14 flex-shrink-0" />
          </div>
        </Dialog>
      </Transition>

      {/* Desktop Sidebar */}
      <div className="hidden h-screen lg:flex lg:flex-shrink-0">
        <div className="flex w-72 flex-col bg-white py-[26px]">
          <div className="h-0 flex-1 overflow-y-auto">
            <nav className="flex-1">
              <div className="px-6">
                <Link
                  href={role === 'admin' ? '/dashboard/admin' : '/dashboard/vendor'}
                  className="nav-brand mb-8 block text-black"
                >
                  <Image width={90} height={40} src={DLogo} alt="logo" />
                </Link>
                {renderUserInfo()}
              </div>
              <div className="dashboard-navigation space-y-1 px-4 py-6">{renderNavigation()}</div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardSidebar
