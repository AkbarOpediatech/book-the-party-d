import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type error from 'next/error'
import type { getCartItem } from '../cart/apiSlice'
import { wishlistApi } from './apiSlice'

interface wishlistSlice {
  subTotal: number
  items: getCartItem[]
  loading: boolean
  isDiscountApplied: boolean
  error: error | string | null
}

const initialState: wishlistSlice = {
  subTotal: 0,
  items: [],
  loading: false,
  isDiscountApplied: false,
  error: null
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    updateSubtotal: (state, action: PayloadAction<number>) => {
      state.subTotal = action.payload
      state.isDiscountApplied = true  
    }
  },
  extraReducers: builder => {
    builder
      .addMatcher(wishlistApi.endpoints.fetchWishlist.matchPending, state => {
        state.loading = true
      })
      .addMatcher(wishlistApi.endpoints.fetchWishlist.matchFulfilled, (state, action: any) => {
        state.loading = true
        state.items = action.payload.data || []
      })
      .addMatcher(wishlistApi.endpoints.fetchWishlist.matchRejected, (state, action) => {
        state.loading = false
        state.error = action.error?.message || 'Failed to fetch wishlist'
      })
  }
})
export const { updateSubtotal } = wishlistSlice.actions

export default wishlistSlice.reducer
