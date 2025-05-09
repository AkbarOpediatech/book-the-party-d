import { baseQuery } from '@/utils/baseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'

// Define TypeScript interfaces for the request and response
interface SubscriptionRequest {
  user: string
  product: string
  stripe_price_id: string
}

interface SubscriptionResponse {
  user: string
  product: string
  stripe_cus_id: string
  stripe_sub_id: string
  stripe_prod_id: string
  start_date: number
  end_date: number
  package: {
    title: string
    price: number
    stripe_price_id: string
    type: string
  }
  pause_collection: null | object
  status: string
  _id: string
  createdAt: string
  updatedAt: string
  client_secret: null | string
}

// Define the base API configuration
export const subscriptionsApi = createApi({
  reducerPath: 'subscriptionsApi',
  baseQuery,
  tagTypes: ['Subscriptions'],
  endpoints: builder => ({
    createSubscription: builder.mutation<SubscriptionResponse, SubscriptionRequest>({
      query: body => ({
        url: '/subscriptions',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Subscriptions']
    }),
    fetchSubscriptions: builder.query<
      SubscriptionResponse[],
      { role?: string; limit?: number; page?: number }
    >({
      query: params => {
        const queryParams = new URLSearchParams(params as Record<string, string>).toString()
        return {
          url: `/subscriptions?${queryParams}`
        }
      },
      providesTags: ['Subscriptions']
    }),
    fetchSubscriptionById: builder.query<SubscriptionResponse, string>({
      query: id => `/subscriptions/${id}`,
      providesTags: (result, error, id) => [{ type: 'Subscriptions', id }]
    })
  })
})

// Export hooks for using the API
export const { useCreateSubscriptionMutation, useFetchSubscriptionsQuery, useFetchSubscriptionByIdQuery } =
  subscriptionsApi
