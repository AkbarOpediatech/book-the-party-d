'use client'
import { useState } from 'react'
import BankInfoEdit from './components/BankInfoEdit'
import BankingInfo from './components/BankingInfo'
import InfoEdit from './components/InfoEdit'
import ProfileEdit from './components/ProfileEdit'
import ProfilePic from './components/ProfilePic'
import ProfileTab from './components/ProfileTab'
import VendorInfo from './components/VendorInfo'

const Profile = () => {
  const [tab, setTab] = useState<number>(0)
  const [showProfileEdit, setShowProfileEdit] = useState<boolean>(false)
  const [showInfoEdit, setShowInfoEdit] = useState<boolean>(false)
  const [showBankInfoEdit, setShowBankInfoEdit] = useState<boolean>(false)

  return (
    <>
      <ProfileTab tab={tab} setTab={setTab} />
      <ProfilePic setShowProfileEdit={setShowProfileEdit} />
      <div className="rounded-lg bg-white p-6">
        {tab === 0 && <VendorInfo setShowInfoEdit={setShowInfoEdit} />}
        {tab === 1 && <BankingInfo setShowBankInfoEdit={setShowBankInfoEdit} />}
      </div>

      <ProfileEdit showProfileEdit={showProfileEdit} setShowProfileEdit={setShowProfileEdit} />
      <InfoEdit showInfoEdit={showInfoEdit} setShowInfoEdit={setShowInfoEdit} />
      <BankInfoEdit showBankInfoEdit={showBankInfoEdit} setShowBankInfoEdit={setShowBankInfoEdit} />
    </>
  )
}

export default Profile
