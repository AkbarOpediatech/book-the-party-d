'use client'

import Loader from '@/app/(landing)/components/Loader/Loader'
import { useFetchUserByIdQuery } from '@/redux/features/user/apiSlice'
import { useToken } from '@/redux/hooks/useToken'
import { useState } from 'react'
import AdminInfo from './components/AdminInfo'
import BankInfoEdit from './components/BankInfoEdit'
import InfoEdit from './components/InfoEdit'
import ProfileEdit from './components/ProfileEdit'
import ProfileTab from './components/ProfileTab'

const Profile = () => {
  const { session } = useToken()
  const [showProfileEdit, setShowProfileEdit] = useState<boolean>(false)
  const [showInfoEdit, setShowInfoEdit] = useState<boolean>(false)
  const [showBankInfoEdit, setShowBankInfoEdit] = useState<boolean>(false)

  const userId = session?.user?.id ?? ''
  const {
    data: response,
    isLoading,
    isError
  } = useFetchUserByIdQuery(userId, {
    skip: !userId
  })

  const userInfo = response?.data

  if (isLoading) {
    return <Loader type="loading" message="Please wait sometimes" />
  }

  if (isError) {
    return <Loader type="error" message="Please try again later." />
  }

  return (
    <>
      <ProfileTab />
      {userInfo?.avatar && (
        <AdminInfo
          setShowInfoEdit={setShowInfoEdit}
          data={userInfo}
          setShowProfileEdit={setShowProfileEdit}
        />
      )}
      <ProfileEdit
        showProfileEdit={showProfileEdit}
        data={userInfo}
        setShowProfileEdit={setShowProfileEdit}
      />
      <InfoEdit showInfoEdit={showInfoEdit} setShowInfoEdit={setShowInfoEdit} userInfo={userInfo} />
      <BankInfoEdit showBankInfoEdit={showBankInfoEdit} setShowBankInfoEdit={setShowBankInfoEdit} />
    </>
  )
}

export default Profile
