import { baseQuery } from '@/utils/baseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'
import type { ServiceItemPost } from '../services/apiSlice'

export interface WishlistItem {
  service: string | undefined
  user: string | undefined
}

export interface wishlistFetch {
  service?: ServiceItemPost
  user?: string | undefined
}

export interface WishlistItemResponse {
  data: wishlistFetch[]
}

export const wishlistApi = createApi({
  reducerPath: 'wishlistApi',
  baseQuery,
  tagTypes: ['Wishlist'],
  endpoints: builder => ({
    fetchWishlist: builder.query<WishlistItemResponse, void>({
      query: () => '/wishlists',
      providesTags: ['Wishlist']
    }),

    addToWishlist: builder.mutation<WishlistItem, WishlistItem>({
      query: item => ({
        url: '/wishlists',
        method: 'POST',
        body: item
      }),
      invalidatesTags: ['Wishlist']
    }),

    removeFromWishlist: builder.mutation<void, string>({
      query: itemId => ({
        url: `/wishlists/${itemId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Wishlist']
    })
  })
})

export const { useFetchWishlistQuery, useAddToWishlistMutation, useRemoveFromWishlistMutation } = wishlistApi
