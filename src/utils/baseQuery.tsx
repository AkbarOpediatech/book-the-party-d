import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { getSession } from 'next-auth/react'
import { server } from './config'

export const baseQuery = fetchBaseQuery({
  baseUrl: server,

  //FIXME:  need to call session to change token
  prepareHeaders: async headers => {
    const session = await getSession()
    const token = session?.user?.accessToken

    if (token) {
      headers.set('Authorization', `${token}`)
    }
    return headers
  }
})
