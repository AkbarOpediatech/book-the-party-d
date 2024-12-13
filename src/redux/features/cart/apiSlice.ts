import { baseQuery } from '@/utils/baseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'

export type IPagination = {
  current: number
  total: number
  next: number | null
  prev: number | null
  records: number
}

export type IPrice = {
  text: string
  value?: number
  _id?: string
}

export type GlobalServiceItem = {
  _id?: string
  aproved_by?: null | undefined
  cancellation_period_hours: number
  createdAt?: string
  description: string
  inclusions: string[]
  infos: string[]
  is_featured: boolean
  is_unavailable: boolean
  price: IPrice[]
  price_type: string
  security_deposit: number
  slug: string
  status: string
  title: string
  updatedAt?: string
}

export interface CartItem {
  _id?: string | number
  id?: string
  service?: GlobalServiceItem
  user?: string
  notes?: string
  price_id?: string
  quantity?: number
  selected_date?: {
    start_date: string
    end_date: string
  }[]
}

interface CartItemResponse {
  data: CartItem[]
  pagination: IPagination
}

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery,
  tagTypes: ['Cart'],
  endpoints: builder => ({
    fetchCart: builder.query<CartItemResponse, { limit?: number; page?: number }>({
      query: ({ limit, page } = {}) => `/carts?limit=${limit}&page=${page}`,
      providesTags: ['Cart']
    }),
    addToCart: builder.mutation<CartItem, Omit<CartItem, 'id'>>({
      query: item => ({
        url: '/carts',
        method: 'POST',
        body: item
      }),
      invalidatesTags: ['Cart']
    }),
    removeFromCart: builder.mutation<void, number>({
      query: itemId => ({
        url: `/carts/${itemId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Cart']
    })
  })
})

export const { useFetchCartQuery, useAddToCartMutation, useRemoveFromCartMutation } = cartApi
