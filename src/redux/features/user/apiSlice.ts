import { baseQuery } from '@/utils/baseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'
import type { File } from 'buffer'
import type { IPagination } from '../services/apiSlice'
import { IDashboardStatistics } from '@/utils'

export interface IUser {
  _id?: string
  createdAt?: string
  name?: string
  email?: string
  phone?: string
  password?: string
  avatar?: string
  role?: string
  location?: string
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
  url?: string
  about?: string
  email_verified_at?: Date | null
  phone_verified_at?: Date | null
  status?: string
}

interface UserResponse {
  data: IUser
}

export interface UserResponsePagination {
  data: IUser[]
  pagination: IPagination
}

interface passwordsData {
  token?: string | null
  email?: string
  password?: string | null
  new_password?: string
  confirm_new_password?: string
}

interface UserStripe extends IUserPostUpdate {
  data: IUserPostUpdate
}

interface IDashboardStatisticsResponse {
  data: IDashboardStatistics
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery,
  tagTypes: ['User'],
  endpoints: builder => ({
    fetchUser: builder.query<
      UserResponsePagination,
      { role?: string; limit?: string | number; page?: number }
    >({
      query: ({ role, limit, page } = {}) => {
        const params = role ? { role } : {}
        return {
          url: `/users?limit=${limit}&page=${page}`,
          params
        }
      },
      providesTags: result => (result ? [{ type: 'User', id: 'LIST' }] : [])
    }),

    fetchUserById: builder.query<UserResponse, string>({
      query: id => `/users/${id}`,
      providesTags: (result, error, id) => [{ type: 'User', id: id }]
    }),

    updateUser: builder.mutation<IUserPostUpdate, { id: string | undefined; formData: FormData }>({
      query: ({ id, formData }) => ({
        url: `/users/${id}`,
        method: 'PATCH',
        body: formData
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'User', id },
        { type: 'User', id: 'LIST' }
      ]
    }),

    resetPassword: builder.mutation<passwordsData, { bodyData: passwordsData }>({
      query: ({ bodyData }) => ({
        url: `/auth/reset-password`,
        method: 'POST',
        body: bodyData
      }),
      invalidatesTags: (result, error) => [{ type: 'User' }]
    }),

    forgotPassword: builder.mutation<passwordsData, { bodyData: passwordsData }>({
      query: ({ bodyData }) => ({
        url: `/auth/forgot-password`,
        method: 'POST',
        body: bodyData
      }),
      invalidatesTags: (result, error) => []
    }),

    addToVendorOnBoarding: builder.mutation<UserStripe, { user: string | undefined }>({
      query: data => ({
        url: `/users/vendor-account-opening`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }]
    }),

    openingConnectorAccount: builder.mutation<UserStripe, { user: string | undefined }>({
      query: data => ({
        url: `/users/vendor-onboarding`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }]
    }),

    getDashboardStatistics: builder.query<IDashboardStatisticsResponse, string | undefined>({
      query: () => `/order-items/dashboard/statistics`,
      providesTags: ['User']
    })
  })
})

export const {
  useFetchUserQuery,
  useFetchUserByIdQuery,
  useUpdateUserMutation,
  useResetPasswordMutation,
  useForgotPasswordMutation,
  useAddToVendorOnBoardingMutation,
  useOpeningConnectorAccountMutation,

  // dashboard
  useGetDashboardStatisticsQuery
} = usersApi
