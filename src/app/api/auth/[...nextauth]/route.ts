// import { server } from '@/utils/config'
// import axios from 'axios'
// import NextAuth, { AuthOptions, type User } from 'next-auth'
// import CredentialsProvider from 'next-auth/providers/credentials'

// type IToken = {
//   accessToken?: string | undefined
//   refreshToken?: string | undefined
//   accessTokenExpires?: number | undefined
//   user?: User | undefined
//   id?: string | undefined
//   role?: string | undefined
//   error?: string | undefined
// }

// type IJWT = {
//   accessToken?: string | undefined
//   refreshToken?: string | undefined
//   accessTokenExpires?: number | undefined
// }

// async function refreshAccessToken(token: IToken) {
//   try {
//     const res = await axios.post(`${server}/auth/refresh`, {
//       refreshToken: token.refreshToken
//     })

//     if (res.data) {
//       return {
//         accessToken: res.data.accessToken,
//         refreshToken: res.data.refreshToken ?? token.refreshToken,
//         accessTokenExpires: Date.now() + 60 * 60 * 1000 // 1 hour
//       }
//     }
//   } catch (error) {
//     console.error('Refresh token error:', error)
//     return {
//       ...token,
//       error: 'RefreshTokenError'
//     }
//   }
// }

// export const authOptions: AuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: 'Custom API',
//       credentials: {
//         email: { label: 'Email', type: 'email' },
//         password: { label: 'Password', type: 'password' }
//       },
//       async authorize(credentials) {
//         if (!credentials) {
//           throw new Error('Missing credentials')
//         }

//         try {
//           const response = await axios.post(`${server}/auth/login`, {
//             email: credentials.email,
//             password: credentials.password
//           })

//           if (response.data) {
//             return {
//               id: response.data.data._id,
//               name: response.data.data.name,
//               email: response.data.data.email,
//               role: response.data.data.role,
//               token: response.data.data.access_token,
//               refreshToken: response.data.data.refresh_token
//             }
//           }
//           return null
//           // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         } catch (error: any) {
//           throw new Error(error?.response?.data?.message || 'Authentication failed')
//         }
//       }
//     })
//   ],
//   callbacks: {
//     async jwt({ token, user }): Promise<IToken | IJWT> {
//       if (user) {
//         token.accessToken = user.token
//         token.refreshToken = user.refreshToken
//         token.accessTokenExpires = Date.now() + 60 * 60 * 1000
//         token.user = user
//         token.id = user.id
//         token.role = user.role
//       }

//       if (token.accessTokenExpires && Date.now() > (token.accessTokenExpires as number)) {
//         const refreshedToken = await refreshAccessToken(token as IJWT)
//         if (!refreshedToken) {
//           throw new Error('Failed to refresh access token') // Ensure you throw an error if no token is returned
//         }

//         return refreshedToken as IToken
//       }

//       return token as IToken
//     },
//     async session({ session, token }) {
//       // console.log('user - session', token)
//       session.user = {
//         role: token.role as string,
//         id: token.id as string, // Cast to string
//         name: session.user?.name || '',
//         email: session.user?.email || '',
//         user: session.user || {}
//       }
//       session.accessToken = token.accessToken as string // Cast to string
//       // console.log('token', session.accessToken)
//       return session
//     }
//   },
//   secret: process.env.NEXTAUTH_SECRET
// }

// const handler = NextAuth(authOptions)
// export { handler as GET, handler as POST }
import { server } from '@/utils/config'
import NextAuth, { AuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

type LoginResponse = {
  success: boolean
  error?: string
  data?: {
    id: string
    email: string
    name: string
    role: string
    accessToken: string
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

        if (!result.success) {
          throw new Error(result.error || 'Login failed')
        }

        if (result.data) {
          return {
            ...result.data,
            accessToken: result.data.accessToken
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
        accessToken: token.accessToken as string
      }
      return session
    }
  },
  pages: {
    signIn: '/'
  }
} as AuthOptions)

export { handler as GET, handler as POST }
