'use client'
import { vendorNavigation } from '@/utils'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/16/solid'
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
  const currentpath = usePathname()

  return (
    <>
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
                    <Link href={'/vendor'} className="nav-brand mb-8 block text-black">
                      <Image width={90} height={40} src={DLogo} alt="logo" />
                    </Link>

                    <div className="mb-4 flex items-center gap-4 bg-clr-14 px-5 py-4">
                      <div className="user-img h-10 w-10 overflow-hidden rounded-full">
                        <Image src={Avatar} alt="avatar" />
                      </div>

                      <div className="user-info">
                        <h3 className="text-sm font-semibold text-clr-48">Alex Buckmaster</h3>
                        <p className="text-sm text-clr-81">Vendor</p>
                      </div>
                    </div>
                  </div>

                  <div className="dashboard-navigation space-y-1 px-4 py-6">
                    <ul className="space-y-1">
                      {vendorNavigation.map((items, index) => (
                        <li key={index}>
                          {items.type === 'button' && (
                            <Link
                              href={items.href}
                              className="flex items-center gap-3 rounded-lg px-[14px] py-3 text-sm capitalize text-clr-81 transition-all duration-300 ease-in-out hover:bg-clr-ff hover:text-clr-fb"
                            >
                              <span>
                                <Image width={24} height={24} src={items.icon} alt="icon" />
                              </span>
                              {items.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </DialogPanel>
            </TransitionChild>
            <div className="w-14 flex-shrink-0" />
          </div>
        </Dialog>
      </Transition>

      <div className="hidden h-screen lg:flex lg:flex-shrink-0">
        <div className="flex w-72 flex-col bg-white py-[26px]">
          <div className="h-0 flex-1 overflow-y-auto">
            <nav className="flex-1">
              <div className="px-6">
                <Link href={'/dashboard/vendor/dashboard'} className="nav-brand mb-8 block text-black">
                  <Image width={90} height={40} src={DLogo} alt="logo" />
                </Link>

                <div className="mb-4 flex items-center gap-4 bg-clr-14 px-5 py-4">
                  <div className="user-img h-10 w-10 overflow-hidden rounded-full">
                    <Image src={Avatar} alt="avatar" />
                  </div>

                  <div className="user-info">
                    <h3 className="text-sm font-semibold text-clr-48">Alex Buckmaster</h3>
                    <p className="text-sm text-clr-81">Vendor</p>
                  </div>
                </div>
              </div>

              <div className="dashboard-navigation space-y-1 px-4">
                <ul className="space-y-1">
                  {vendorNavigation.map((items, index) => (
                    <li key={index}>
                      <Link
                        href={items.href}
                        className={`flex items-center gap-3 rounded-lg px-[14px] py-3 text-sm font-semibold capitalize text-clr-81 transition-all duration-300 ease-in-out hover:bg-clr-ff hover:text-clr-fb ${currentpath === items.href && 'bg-clr-ff text-clr-fb'}`}
                      >
                        <span>
                          <Image width={24} height={24} src={items.icon} alt="icon" />
                        </span>
                        {items.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardSidebar
