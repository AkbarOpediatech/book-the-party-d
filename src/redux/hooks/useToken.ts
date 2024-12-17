import { useSession } from 'next-auth/react'

export const useToken = () => {
  const { data: session, status } = useSession()

  // Extract token details or return null
  const token = session?.user?.accessToken || null

  return { token, session, status }
}
