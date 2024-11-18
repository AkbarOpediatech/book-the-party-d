'use client'
import { cn, profileMenuItems } from '@/utils'
import { useState } from 'react'
import AccountSettings from './component/AccountSettings'
import GeneralSettings from './component/GeneralSettings'

const Profile = () => {
  const [profileMenu, setProfileMenu] = useState('Account Settings')

  return (
    <section id="profile">
      <div className="container">
        <div className="section-padding">
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-1">
              <h1 className="mb-6 font-sora text-2xl font-semibold text-neutral-900 md:text-6xl">Profile</h1>
              <ul>
                {profileMenuItems.map(item => (
                  <li key={item.label}>
                    <button
                      onClick={() => setProfileMenu(item.label)}
                      className={cn(
                        'py-4 text-4xl font-bold text-clr-96',
                        profileMenu === item.label && 'text-clr-27'
                      )}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2">
              {profileMenu === 'Account Settings' && <AccountSettings />}
              {profileMenu === 'General Settings' && <GeneralSettings />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
