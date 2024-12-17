'use client'

import { useFetchUserByIdQuery } from '@/redux/features/user/apiSlice'
import { useToken } from '@/redux/hooks/useToken'
import { useState } from 'react'
import BankInfoEdit from './components/BankInfoEdit'
import BankingInfo from './components/BankingInfo'
import InfoEdit from './components/InfoEdit'
import ProfileEdit from './components/ProfileEdit'
import ProfilePic from './components/ProfilePic'
import ProfileTab from './components/ProfileTab'
import VendorInfo from './components/VendorInfo'

const Profile = () => {
<<<<<<< HEAD
  // const { data: response, isLoading, isError } = useFetchUserByIdQuery({ id: '676102fe02420191894a4e29' })
  // console.log(response)
=======
  const { session } = useToken()
  // console.log('token', session?.user.id)

  const userId = session?.user?.id ?? ''
  const {
    data: response,
    isLoading,
    isError
  } = useFetchUserByIdQuery(userId, {
    skip: !userId // Skip query until userId is set
  })
  console.log('response', response)
>>>>>>> 3e5d4749cc7f0a3a12b35dfcf87f9463b2feff70

  const [tab, setTab] = useState<number>(0)
  const [showProfileEdit, setShowProfileEdit] = useState<boolean>(false)
  const [showInfoEdit, setShowInfoEdit] = useState<boolean>(false)
  const [showBankInfoEdit, setShowBankInfoEdit] = useState<boolean>(false)

  return (
    <div>
      <ProfileTab tab={tab} setTab={setTab} />
      <ProfilePic setShowProfileEdit={setShowProfileEdit} />

      <div className="rounded-lg bg-white p-6">
        {tab === 0 && <VendorInfo setShowInfoEdit={setShowInfoEdit} />}
        {tab === 1 && <BankingInfo setShowBankInfoEdit={setShowBankInfoEdit} />}
      </div>

      <ProfileEdit showProfileEdit={showProfileEdit} setShowProfileEdit={setShowProfileEdit} />
      <InfoEdit showInfoEdit={showInfoEdit} setShowInfoEdit={setShowInfoEdit} />
      <BankInfoEdit showBankInfoEdit={showBankInfoEdit} setShowBankInfoEdit={setShowBankInfoEdit} />
    </div>
  )
}

export default Profile
