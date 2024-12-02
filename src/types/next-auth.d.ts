import 'next-auth'

declare module 'next-auth' {
  interface Session {
    accessToken?: string
    user?: {
      role: string
      id: string
      name: string
      email: string
      user: any
    }
  }

  interface User {
    id: string
    name: string
    email: string
    role: string
    token: string
    refreshToken: string
  }

  interface JWT {
    accessToken?: string
    id?: string
    refreshToken: string
    role: string
    accessTokenExpires: number
  }
}
