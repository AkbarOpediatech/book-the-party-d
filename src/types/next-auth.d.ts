import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user?: User
  }

  export interface User {
    _id?: string
    name?: string
    email?: string
    role?: string
    avatar?: string
    token?: string
    refreshToken?: string | null
    accessToken?: string | null
  }

  interface JWT {
    accessToken?: string // Unified field for token naming consistency
    id?: string
    refreshToken?: string | null
    role?: string
    accessTokenExpires?: number // Optional for token expiry handling
  }
}
