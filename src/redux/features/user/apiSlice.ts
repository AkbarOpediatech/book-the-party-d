import { baseQuery } from '@/utils/baseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'

// Define the TypeScript types for your data
export interface IUser {
  _id: string
  name: string
  email: string
  phone: string
  password: string
  avatar: string
  role: string
  languages: string[]
  specialized: string[]
  stripe_acct: {
    id: string
    capabilities: {
      card_payments: string
      transfers: string
    }
    charges_enabled: boolean
    payouts_enabled: boolean
    details_submitted: boolean
    requirements: {
      disabled_reason: string | null
    }
  } | null
  about: string
  email_verified_at: Date | null
  phone_verified_at: Date | null
  status: string
}

export interface IUserPost {
  order: string
  user: string
  vendor: string
  service: string
  notes: string
  quantity: number
  price_id: string
  selected_date: {
    start_date: string
    end_date: string
  }[]
}

interface UserResponse {
  data: IUser[]
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

    fetchUserById: builder.query<IUser, string>({
      query: id => `/users/${id}`,
      providesTags: (result, error, id) => [{ type: 'User', id: id }]
    }),

    updateUser: builder.mutation<IUser, Partial<IUser> & Pick<IUser, '_id'>>({
      query: ({ _id, ...rest }) => ({
        url: `/order-transfers/${_id}`,
        method: 'PUT',
        body: rest
      }),
      invalidatesTags: ['User']
    })
  })
})

export const { useFetchUserQuery, useFetchUserByIdQuery, useUpdateUserMutation } = usersApi
