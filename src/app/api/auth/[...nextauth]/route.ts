import { server } from '@/utils/config'
import NextAuth, { AuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

type LoginResponse = {
  success: boolean
  error?: string
  message?: string
  data?: {
    id: string
    email: string
    name: string
    role: string
    access_token: string
  }
}

type CredentialsType = {
  email: string
  password: string
}

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      name: 'BookTheParty App',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials: CredentialsType | undefined) {
        if (!credentials) throw new Error('No credentials provided')

        const { email, password } = credentials

        const response = await fetch(`${server}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        })

        const result: LoginResponse = await response.json()

        if (!result.success && result.message === "Your account has been 'pending'") {
          throw new Error(result.error || 'Pending')
        }
        if (!result.success && result.message === "Your account has been 'inactive'") {
          throw new Error(result.error || 'inactive')
        }

        if (!result.success) {
          throw new Error(result.error || 'Login failed')
        }

        if (result.data) {
          return {
            ...result.data,
            accessToken: result.data.access_token
          }
        }

        return null
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 7 // 7 days
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 7 // 7 days
  },
  callbacks: {
    jwt: async ({ token, user, trigger, session }) => {
      if (user) {
        token.accessToken = user.accessToken // Set accessToken from user object
        token.role = user.role // Add additional fields as needed
        token.avatar = user.avatar // Add additional fields as needed
        token.id = user._id // Add additional fields as needed
        token.subscription = user?.subscription
      }

      if (trigger === 'update' && session) {
        return { ...token, ...session }
      }
      return token
    },
    session: async ({ session, token }) => {
      session.user = {
        id: token.id as string, // Explicitly cast to string if needed
        email: token.email as string,
        name: token.name as string,
        role: token?.role as string,
        avatar: token?.avatar as string,
        subscription: token?.subscription as string,
        accessToken: token?.accessToken as string
      }
      return session
    }
  },
  pages: {
    signIn: '/'
  }
} as AuthOptions)

export { handler as GET, handler as POST }
