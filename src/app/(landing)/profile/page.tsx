'use client'
import { cn, profileMenuItems } from '@/utils'

import { setActiveTab } from '@/redux/features/profileSlice'
import { useFetchUserByIdQuery } from '@/redux/features/user/apiSlice'
import { useToken } from '@/redux/hooks/useToken'
import type { RootState } from '@/redux/store'
import Image from 'next/image'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AccountSettings from './component/AccountSettings'
import GeneralSettings from './component/GeneralSettings'
import OrderTracking from './component/OrderTracking'
import PaymentDetails from './component/PaymentDetails'

const Profile = () => {
  const dispatch = useDispatch()
  const activeTab = useSelector((state: RootState) => state.profile.activeTab)
  const { session } = useToken()
  const userId = session?.user?.id ?? ''

  const { data: response } = useFetchUserByIdQuery(userId, {
    skip: !userId
  })
  const userInfo = response?.data

  useEffect(() => {}, [])

  const handleTabChange = (tabName: string) => {
    dispatch(setActiveTab(tabName))
  }

  return (
    <section id="profile">
      <div className="mx-auto max-w-[1460px]">
        <div className="section-padding py-[80px]">
          <h1 className="mb-3 hidden font-sora text-2xl font-semibold text-neutral-900 md:mb-12 md:block md:text-6xl">
            Profile
          </h1>
          <div className="grid grid-cols-1 md:gap-[40px] lg:grid-cols-3">
            <div className="col-span-1 hidden border-r md:block">
              <ul className="gap-2 space-y-5 md:block lg:w-full">
                {profileMenuItems.map(item => (
                  <li
                    key={item.label}
                    className={cn(
                      'max-w-[350px] border-l-4 border-l-clr-fb border-l-transparent px-5 py-5',
                      activeTab === item.label && 'border-l-4 border-l-clr-fb bg-clr-fb/10'
                    )}
                  >
                    <button
                      onClick={() => handleTabChange(item.label)}
                      className={cn(
                        'flex items-center gap-3 text-base font-bold text-clr-96 md:text-nowrap md:text-xl lg:text-2xl xl:text-2xl',
                        activeTab === item.label && 'text-clr-fb'
                      )}
                    >
                      <Image
                        width={26}
                        height={26}
                        src={activeTab === item.label ? item.activeIcon : item.icon}
                        alt="icon"
                      />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 m-3">
              {activeTab === 'Account Settings' && <AccountSettings data={userInfo} />}
              {activeTab === 'General Settings' && <GeneralSettings />}
              {activeTab === 'Order Tracking' && <OrderTracking />}
              {activeTab === 'Payment Details' && <PaymentDetails />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
