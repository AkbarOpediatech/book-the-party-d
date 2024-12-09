import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { server } from './config'

export const baseQuery = fetchBaseQuery({
  baseUrl: server,

  //FIXME:  need to call session to change token
  prepareHeaders: headers => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzFlMTI5M2E5MzY5MWEwYjQ5MmJjOWIiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzM3Mzc3NDUsImV4cCI6MTczNjMyOTc0NX0.FqOyJCSwywvfw7obCc0rDVKmt6swkoWQ6j3qCqoqbjs'

    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  }
})
