import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FC } from 'react'

const withRole = (WrappedComponent: FC, allowedRoles: string[]) => {
  const RoleProtectedComponent: FC = props => {
    const { data: session, status } = useSession()
    const router = useRouter()
    console.log('session', session)

    if (status === 'loading') {
      return <p>Loading...</p>
    }

    if (status === 'unauthenticated') {
      signIn()
      return null
    }

    if (!allowedRoles.includes(session?.user?.role || '')) {
      router.push('/unauthorized')
      return null
    }

    return <WrappedComponent {...props} />
  }

  return RoleProtectedComponent
}

export default withRole
