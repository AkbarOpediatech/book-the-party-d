import { baseQuery } from '@/utils/baseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'

// Define the TypeScript types for your data
export interface IOrder {
  _id: string
  order: string
  user: string
  vendor: string
  service: string
  service_embedded: {
    title: string
    description: string
    featured_image: string | null
    category: string
    location: string
    inclusions: string[]
    infos: string[]
    price_type: 'fixed' | 'variable'
    price: {
      text: string
      value: number
      _id: string
    }[]
    security_deposit: number
    cancellation_period_hours: number
  }
  notes: string
  quantity: number
  price_id: string
  price: {
    text: string
    value: number
  }
  selected_date: {
    start_date: string
    end_date: string
  }[]
  amount: {
    service_total: number
    discounted_service_total: number
    discount: number
    security_deposit: number
    subtotal: number
    order_fee: number
    tax: number
    shipping_fee: number
    total: number
  }
  coupons: string[]
  security_deposit_payout_percentage: number
  status: 'draft' | 'pending' | 'processing' | 'completed_request_vendor' | 'completed'
  history: {
    message: string
    user: string | null
    date: string
  }[]
  createdAt: string
  updatedAt: string
}

export interface IOrderPost {
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

interface OrderResponse {
  data: IOrder[]
}

// Redux Toolkit Query API
export const bankingsApi = createApi({
  reducerPath: 'bankingsApi',
  baseQuery,
  tagTypes: ['Bankings'],
  endpoints: builder => ({
    fetchBankings: builder.query<OrderResponse, { role?: string; limit?: number; page?: number }>({
      query: ({ role, limit, page } = {}) => {
        const params = role ? { role } : {} // Conditionally include `vendor` if it exists
        return {
          url: `/order-transfers?limit=${limit}&page=${page}`,
          params // Add query parameters dynamically
        }
      },
      providesTags: ['Bankings']
    }),

    fetchBankingById: builder.query<IOrder, string>({
      query: slug => `/order-transfers/${slug}`,
      providesTags: (result, error, slug) => [{ type: 'Bankings', id: slug }]
    }),

    updateBanking: builder.mutation<IOrder, Partial<IOrder> & Pick<IOrder, '_id'>>({
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
export const { useFetchBankingsQuery, useFetchBankingByIdQuery, useUpdateBankingMutation } = bankingsApi
