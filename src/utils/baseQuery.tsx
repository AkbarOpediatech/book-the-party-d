import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { server } from './config'

export const baseQuery = fetchBaseQuery({
  baseUrl: server,
  prepareHeaders: headers => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzFlMTI5M2E5MzY5MWEwYjQ5MmJjOWIiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzE1ODkxNDIsImV4cCI6MTczNDE4MTE0Mn0.AJIaA6gorvcf9Jxp1YKvJB7pOQXBXSQTgjsqSu5o2_4'
      
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  }
})
