import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { server } from './config'

export const baseQuery = fetchBaseQuery({
  baseUrl: server,
  prepareHeaders: headers => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzFlMzE1ZWQxMGUwMmMzZWMzZGFjYzMiLCJyb2xlIjoidmVuZG9yIiwiaWF0IjoxNzMzMzA2NTE4LCJleHAiOjE3MzU4OTg1MTh9.l8cFGkCNWuqwL4gp5tXy2Fdeb6K9ccQGwpEZC7O_0oA'

    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  }
})
