'use client'

import { footerNav, footerSocialItems } from '@/utils'
import { ChatBubbleLeftIcon } from '@heroicons/react/16/solid'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import ICHelp from '/public/assets/ic-help.svg'

interface SessionUser {
  role?: 'admin' | 'vendor' | string
}

const roleToNavigation: Record<string, string> = {
  admin: '/dashboard/admin/chat',
  vendor: '/dashboard/vendor/chat'
}

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  const { data: session } = useSession()
  const user = session?.user as SessionUser | undefined
  const role = user?.role
  const navigation = roleToNavigation[role || ''] || '/contact'

  return (
    <footer>
      <div className="bg-clr-f2 py-[47px] pb-[66px]">
        <div className="container">
          <h1 className="mb-5 flex items-center gap-2 font-sora text-xl font-semibold md:text-2xl lg:text-3xl">
            <Image src={ICHelp} alt="icon" />
            Help & support
          </h1>
          <p className="mb-2 text-sm font-light text-black md:text-base">Get Help or get in touch</p>
          {/* footer nav items */}
          <ul className="flex flex-wrap gap-1">
            {footerNav.map((i, index) => (
              <li key={index} className="mr-2 border-r border-r-gray-500 pr-2 last:border-r-0">
                <Link className="text-sm font-light text-black md:text-base" href={i.url}>
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="my-5 flex items-center gap-5">
            {footerSocialItems.map((i, index) => (
              <li key={index}>
                <Link href={i.linkUrl}>
                  <Image width={30} height={30} src={i.img} alt="facebook" />
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-sm font-light text-black md:text-base lg:text-sm">
            Book the Party acknowledges the Traditional Aboriginal and Torres Strait Islander Owners of the
            land, sea and <br className="lg:block" /> waters of Australia. We respect and recognize their
            custodianship of culture and Country.
          </p>
        </div>

        {/* <Link
          href={navigation}
          className="fixed bottom-10 right-10 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-clr-fb"
        >
          <ChatBubbleLeftIcon className="size-5 text-white" />
        </Link> */}
      </div>
      <p className="py-5 text-center text-xs font-light md:text-base lg:text-sm">
        Copyright © {year} Vacasky. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
