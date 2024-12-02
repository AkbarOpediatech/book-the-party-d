'use client'
import { store } from '@/redux/store'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'

const ReduxProvider = ({ children, session }: { children: React.ReactNode; session: any }) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  )
}

export default ReduxProvider
