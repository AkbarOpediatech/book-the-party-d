import { baseQuery } from '@/utils/baseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'
import type { File } from 'buffer'

// Define the TypeScript types for your data
export interface IUser {
  _id?: string
  name?: string
  email?: string
  phone?: string
  password?: string
  avatar?: string
  role?: string
  languages?: string[]
  specialized?: string[]
  stripe_acct?: {
    id: string
    capabilities: {
      card_payments: string
      transfers: string
    }
    charges_enabled?: boolean
    payouts_enabled?: boolean
    details_submitted?: boolean
    requirements?: {
      disabled_reason?: string | null
    }
  } | null
  about?: string
  email_verified_at?: Date | null
  phone_verified_at?: Date | null
  status?: string
}

export interface IUserPost {
  name?: string
  email?: string
  phone?: string
  password?: string
  avatar?: File | null
  role?: string
  languages?: string[]
  specialized?: string[]
  stripe_acct?: {
    id: string
    capabilities: {
      card_payments: string
      transfers: string
    }
    charges_enabled?: boolean
    payouts_enabled?: boolean
    details_submitted?: boolean
    requirements?: {
      disabled_reason?: string | null
    }
  } | null
  about?: string
  email_verified_at?: Date | null
  phone_verified_at?: Date | null
  status?: string
}
export interface IUserPostUpdate {
  name?: string
  email?: string
  phone?: string
  password?: string
  avatar?: File | null
  role?: string
  languages?: string[]
  specialized?: string[]
  stripe_acct?: {
    id: string
    capabilities: {
      card_payments: string
      transfers: string
    }
    charges_enabled?: boolean
    payouts_enabled?: boolean
    details_submitted?: boolean
    requirements?: {
      disabled_reason?: string | null
    }
  } | null
  about?: string
  email_verified_at?: Date | null
  phone_verified_at?: Date | null
  status?: string
}

interface UserResponse {
  data: IUser
}

interface IProfileFormData {
  name?: string
  avatar?: File | null
}
// Redux Toolkit Query API
export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery,
  tagTypes: ['User'],
  endpoints: builder => ({
    fetchUser: builder.query<UserResponse, { role?: string; limit?: number; page?: number }>({
      query: ({ role, limit, page } = {}) => {
        const params = role ? { role } : {}
        return {
          url: `/users?limit=${limit}&page=${page}`,
          params
        }
      },
      providesTags: ['User']
    }),

    fetchUserById: builder.query<UserResponse, string>({
      query: id => `/users/${id}`,
      providesTags: (result, error, id) => [{ type: 'User', id: id }]
    }),

    updateUser: builder.mutation<IUserPostUpdate, FormData>({
      query: rest => ({
        url: `/users/671e315ed10e02c3ec3dacc3`,
        method: 'PATCH',
        body: rest
      }),
      invalidatesTags: ['User']
    })
  })
})

export const { useFetchUserQuery, useFetchUserByIdQuery, useUpdateUserMutation } = usersApi
