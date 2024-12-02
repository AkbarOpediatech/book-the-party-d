import { server } from '@/utils/config'
import axios from 'axios'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

async function refreshAccessToken(token: any) {
  try {
    const res = await axios.post(`${server}/auth/refresh`, {
      refreshToken: token.refreshToken
    })

    if (res.data) {
      return {
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken ?? token.refreshToken,
        accessTokenExpires: Date.now() + 60 * 60 * 1000 // 1 hour
      }
    }
  } catch (error) {
    console.error('Refresh token error:', error)
    return {
      ...token,
      error: 'RefreshTokenError'
    }
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Custom API',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error('Missing credentials')
        }

        try {
          const response = await axios.post(`${server}/auth/login`, {
            email: credentials.email,
            password: credentials.password
          })

          if (response.data) {
            return {
              id: response.data.data._id,
              name: response.data.data.name,
              email: response.data.data.email,
              role: response.data.data.role,
              token: response.data.data.access_token,
              refreshToken: response.data.data.refresh_token
            }
          }
          return null
        } catch (error: any) {
          throw new Error(error.response?.data?.message || 'Authentication failed')
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token
        token.refreshToken = user.refreshToken
        token.accessTokenExpires = Date.now() + 60 * 60 * 1000
        token.user = user
        token.id = user.id
        token.role = user.role
      }

      if (token.accessTokenExpires && Date.now() > (token.accessTokenExpires as number)) {
        return await refreshAccessToken(token)
      }

      return token
    },
    async session({ session, token }) {
      // console.log('user - session', token)
      session.user = {
        role: token.role as string,
        id: token.id as string, // Cast to string
        name: session.user?.name || '',
        email: session.user?.email || '',
        user: session.user || ''
      }
      session.accessToken = token.accessToken as string // Cast to string
      // console.log('token', session.accessToken)
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
