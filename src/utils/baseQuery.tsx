import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { getSession } from 'next-auth/react'
import { server } from './config'

export const baseQuery = fetchBaseQuery({
  baseUrl: server,

  //FIXME:  need to call session to change token
  prepareHeaders: async headers => {
    const session = await getSession()
    console.log('session', session)

    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzFlMTRlMjc2N2ZkMDZlMTNlMTk0OWEiLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE3MzM5OTY5MzUsImV4cCI6MTczNjU4ODkzNX0.-YcrWdHdInpJvW2U_DxzFy9aCduEMCZW5jNGAjDokQY'

    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  }
})
