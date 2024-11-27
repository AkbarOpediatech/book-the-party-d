// // store/cartSlice.ts

// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { addToCart, CartItem, fetchCart, removeFromCart } from './apiSlice' // Import thunks and CartItem type

// interface CartState {
//   items: CartItem[]
//   status: 'idle' | 'loading' | 'succeeded' | 'failed'
//   error: string | null
// }

// const initialState: CartState = {
//   items: [],
//   status: 'idle',
//   error: null
// }

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     clearCart(state) {
//       state.items = []
//     }
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchCart.pending, state => {
//         state.status = 'loading'
//       })
//       .addCase(fetchCart.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
//         state.status = 'succeeded'
//         state.items = action.payload
//       })
//       .addCase(fetchCart.rejected, (state, action) => {
//         state.status = 'failed'
//         state.error = action.error.message ?? 'Failed to load cart'
//       })
//       .addCase(addToCart.fulfilled, (state, action: PayloadAction<CartItem>) => {
//         state.items.push(action.payload)
//       })
//       .addCase(removeFromCart.fulfilled, (state, action: PayloadAction<number>) => {
//         state.items = state.items.filter(item => item.id !== action.payload)
//       })
//   }
// })

// export const { clearCart } = cartSlice.actions

// export default cartSlice.reducer
