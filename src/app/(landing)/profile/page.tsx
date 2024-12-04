'use client'
import { cn, profileMenuItems } from '@/utils'
import { useState } from 'react'

import Image from 'next/image'
import AccountSettings from './component/AccountSettings'
import GeneralSettings from './component/GeneralSettings'
import OrderTracking from './component/OrderTracking'

const Profile = () => {
  const [profileMenu, setProfileMenu] = useState('Account Settings')

  return (
    <section id="profile">
      <div className="mx-auto max-w-[1440px]">
        <div className="section-padding">
          <h1 className="mb-3 font-sora text-2xl font-semibold text-neutral-900 md:text-6xl">Profile</h1>
          <div className="grid grid-cols-1 md:gap-[104px] lg:grid-cols-3">
            <div className="col-span-1 border-r">
              <ul className="gap-2 space-y-5 p-4 md:block lg:w-full">
                {profileMenuItems.map(item => (
                  <li key={item.label}>
                    <button
                      onClick={() => setProfileMenu(item.label)}
                      className={cn(
                        'flex items-center gap-3 py-2 text-base font-bold text-clr-96 md:text-nowrap md:text-xl lg:text-2xl xl:text-2xl',
                        profileMenu === item.label && 'text-clr-fb'
                      )}
                    >
                      <Image
                        width={26}
                        height={26}
                        src={profileMenu === item.label ? item.activeIcon : item.icon}
                        alt="icon"
                      />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 m-3">
              {profileMenu === 'Account Settings' && <AccountSettings />}
              {profileMenu === 'General Settings' && <GeneralSettings />}
              {profileMenu === 'Order Tracking' && <OrderTracking />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
