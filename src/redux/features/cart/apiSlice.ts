import { baseQuery } from '@/utils/baseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'

export interface CartItem {
  service: number
  user: string
  notes: string
  price: string
  quantity: number
  selected_date: {
    start_date: Date
    end_date: Date
  }
}

interface CartItemResponse {
  data: CartItem[]
}
export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery,
  tagTypes: ['Cart'],
  endpoints: builder => ({
    fetchCart: builder.query<CartItemResponse, void>({
      query: () => '/carts',
      providesTags: ['Cart']
    }),
    addToCart: builder.mutation<CartItem, CartItem>({
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
