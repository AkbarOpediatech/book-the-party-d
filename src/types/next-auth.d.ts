import 'next-auth'

declare module 'next-auth' {
  interface Session {
    accessToken?: string
    user?: {
      id: string
      name: string
      email: string
    }
  }

  interface User {
    id: string
    name: string
    email: string
    token: string
    refreshToken: string
  }

  interface JWT {
    accessToken?: string
    id?: string
    refreshToken: string
    accessTokenExpires: number
  }
}
