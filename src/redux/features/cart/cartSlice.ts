import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type error from 'next/error'
import { cartApi, type CartItemResponse, type getCartItem } from './apiSlice'

interface cartSlice {
  subTotal: number
  items: getCartItem[]
  loading: boolean
  isDiscountApplied: boolean
  error: error | string | null
}

const initialState: cartSlice = {
  subTotal: 0,
  items: [],
  loading: false,
  isDiscountApplied: false,
  error: null
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateSubtotal: (state, action: PayloadAction<number>) => {
      state.subTotal = action.payload
      state.isDiscountApplied = true
    }
  },
  extraReducers: builder => {
    builder
      .addMatcher(cartApi.endpoints.fetchCart.matchPending, state => {
        state.loading = true
      })
      .addMatcher(
        cartApi.endpoints.fetchCart.matchFulfilled,
        (state, action: PayloadAction<CartItemResponse>) => {
          state.loading = true
          state.items = action.payload.data || []
          state.subTotal = state.items.reduce((total, item) => {
            const matchPrice =
              item?.service?.price &&
              item?.service?.price.find(singlePrice => {
                return item?.price_id == singlePrice._id
              })

            const price = (matchPrice ? matchPrice?.value : 0) as number
            return total + price * (item.quantity || 1)
          }, 0)
        }
      )
      .addMatcher(cartApi.endpoints.fetchCart.matchRejected, (state, action) => {
        state.loading = false
        state.error = action.error?.message || 'Failed to fetch cart'
      })
  }
})
export const { updateSubtotal } = cartSlice.actions

export default cartSlice.reducer
