import { baseQuery } from '@/utils/baseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'
import type { ServiceItemPost } from '../services/apiSlice'

// Define the TypeScript types for your data
export type IPagination = {
  current: number
  total: number
  next: number | null
  prev: number | null
  records: number
}

export interface IBanking {
  _id: string
  order: string
  user: string
  vendor: string
  order_item: string
  service: ServiceItemPost
  stripe_ch_id?: string
  service_embedded?: string
  notes: string
  quantity: number
  price_id: string
  price: {
    text: string
    value: number
  }
  selected_date: {
    start_date: Date
    end_date: Date
  }[]
  amount: number
  coupons: {
    code: string
    reference: string
    reference_embedded: string
    discounted_amount: number
  }[]
  security_deposit_payout_percentage: number
  status: string
  history: {
    message: string
    user: string | null
    date: Date
  }[]
  updatedAt: string
}

interface BankingsResponse {
  pagination: IPagination
  data: IBanking[]
}

// Redux Toolkit Query API
export const bankingsApi = createApi({
  reducerPath: 'bankingsApi',
  baseQuery,
  tagTypes: ['Bankings'],
  endpoints: builder => ({
    fetchBankings: builder.query<BankingsResponse, { role?: string; limit?: number; page?: number }>({
      query: ({ role, limit, page } = {}) => {
        const params = role ? { role } : {} // Conditionally include `vendor` if it exists
        return {
          url: `/order-transfers?limit=${limit}&page=${page}`,
          params // Add query parameters dynamically
        }
      },
      providesTags: ['Bankings']
    }),

    fetchBankingById: builder.query<IBanking, string>({
      query: slug => `/order-transfers/${slug}`,
      providesTags: (result, error, slug) => [{ type: 'Bankings', id: slug }]
    }),

    transferBanking: builder.mutation<IBanking, Partial<IBanking> & Pick<IBanking, '_id' | 'stripe_ch_id'>>({
      query: ({ _id, stripe_ch_id, ...rest }) => ({
        url: `/order-transfers/action`,
        method: 'POST',
        body: { id: _id, stripe_ch_id, ...rest }
      }),
      invalidatesTags: ['Bankings']
    }),

    updateBanking: builder.mutation<IBanking, Partial<IBanking> & Pick<IBanking, '_id'>>({
      query: ({ _id, ...rest }) => ({
        url: `/order-transfers/${_id}`,
        method: 'PUT',
        body: rest
      }),
      invalidatesTags: ['Bankings']
    })
  })
})

// Export hooks for using the API
export const {
  useFetchBankingsQuery,
  useFetchBankingByIdQuery,
  useUpdateBankingMutation,
  useTransferBankingMutation
} = bankingsApi
