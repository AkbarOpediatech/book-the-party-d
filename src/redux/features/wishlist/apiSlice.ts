import { baseQuery } from '@/utils/baseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'

export interface WishlistItem {
  service: number
  user: string
}

interface WishlistItemResponse {
  data: WishlistItem[]
}
export const wishlistApi = createApi({
  reducerPath: 'wishlistApi',
  baseQuery,
  tagTypes: ['Wishlist'],
  endpoints: builder => ({
    fetchWishlist: builder.query<WishlistItemResponse, void>({
      query: () => '/wishlist',
      providesTags: ['Wishlist']
    }),
    addToWishlist: builder.mutation<WishlistItem, WishlistItem>({
      query: item => ({
        url: '/wishlist',
        method: 'POST',
        body: item
      }),
      invalidatesTags: ['Wishlist']
    }),
    removeFromWishlist: builder.mutation<void, number>({
      query: itemId => ({
        url: `/wishlist/${itemId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Wishlist']
    })
  })
})

export const { useFetchWishlistQuery, useAddToWishlistMutation, useRemoveFromWishlistMutation } = wishlistApi
