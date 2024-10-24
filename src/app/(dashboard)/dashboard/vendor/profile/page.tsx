'use client'
import { useState } from 'react'
import BankingInfo from './components/BankingInfo'
import ProfilePic from './components/ProfilePic'
import ProfileTab from './components/ProfileTab'
import VendorInfo from './components/VendorInfo'

const Profile = () => {
  const [tab, setTab] = useState<number>(0)
  return (
    <div>
      <ProfileTab tab={tab} setTab={setTab} />
      <ProfilePic />
      <div className="rounded-lg bg-white p-6">
        {tab === 0 && <VendorInfo />}
        {tab === 1 && <BankingInfo />}
      </div>
    </div>
  )
}

export default Profile
