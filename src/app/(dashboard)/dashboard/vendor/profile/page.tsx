'use client'

import Loader from '@/app/(landing)/components/Loader/Loader'
import { useFetchUserByIdQuery } from '@/redux/features/user/apiSlice'
import { useToken } from '@/redux/hooks/useToken'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import BankInfoEdit from './components/BankInfoEdit'
import BankingInfo from './components/BankingInfo'
import InfoEdit from './components/InfoEdit'
import ProfileEdit from './components/ProfileEdit'
import ProfileTab from './components/ProfileTab'
import VendorInfo from './components/VendorInfo'

const ProfileContent = () => {
  const { session } = useToken()
  const searchParams = useSearchParams()
  const bankTabQuery = searchParams.get('tab')
  const [tab, setTab] = useState<number>(0)
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

  useEffect(() => {
    if (bankTabQuery === 'banking') {
      setTab(1)
    } else {
      setTab(0)
    }
  }, [bankTabQuery])

  if (isLoading) {
    return <Loader type="loading" message="Please wait sometimes" />
  }

  if (isError) {
    return <Loader type="error" message="Please try again later." />
  }

  return (
    <>
      <ProfileTab tab={tab} setTab={setTab} />

      {tab === 0 && (
        <VendorInfo
          setShowInfoEdit={setShowInfoEdit}
          data={userInfo}
          setShowProfileEdit={setShowProfileEdit}
        />
      )}

      {tab === 1 && <BankingInfo setShowBankInfoEdit={setShowBankInfoEdit} />}

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

const Login = () => {
  return (
    <Suspense fallback={<Loader type="loading" />}>
      <ProfileContent />
    </Suspense>
  )
}
export default Login
