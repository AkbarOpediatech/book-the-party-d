import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface OrderAmount {
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

interface OrderState {
  clientSecret: string
  orderAmount: OrderAmount
}

const initialState: OrderState = {
  clientSecret: '',
  orderAmount: {
    service_total: 0,
    discounted_service_total: 0,
    discount: 0,
    security_deposit: 0,
    subtotal: 0,
    order_fee: 0,
    tax: 0,
    shipping_fee: 0,
    total: 0
  }
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    updateClientSecret: (state, action: PayloadAction<string>) => {
      state.clientSecret = action.payload
      // console.log('clientSecret - redux', action.payload, initialState)
    },
    updateOrderAmount: (state, action: PayloadAction<Partial<OrderAmount>>) => {
      state.orderAmount = { ...state.orderAmount, ...action.payload }
      // console.log('Order amount - redux', action.payload, initialState)
    }
    // resetOrderState: () => initialState
  }
})

export const { updateClientSecret, updateOrderAmount } = orderSlice.actions

export default orderSlice.reducer
