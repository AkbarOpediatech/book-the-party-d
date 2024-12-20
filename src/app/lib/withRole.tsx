import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { FC } from 'react'
import Loader from '../(landing)/components/Loader/Loader'

const withRole = (WrappedComponent: FC, allowedRoles: string[]) => {
  const RoleProtectedComponent: FC = props => {
    const { data: session, status } = useSession()
    const router = useRouter()

    if (status === 'loading') {
      return <Loader type='loading'/>
    }

    if (status === 'unauthenticated') {
      signIn()
      router.push('/login')
      return null
    }

    if (!allowedRoles.includes(session?.user?.role || 'vendor')) {
      router.push('/unauthorized')
      return null
    }

    return <WrappedComponent {...props} />
  }

  return RoleProtectedComponent
}

export default withRole
