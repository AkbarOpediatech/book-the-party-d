import { configureStore } from '@reduxjs/toolkit'
import { bankingsApi } from './features/bankings/apiSlice'
import { bookingsApi } from './features/bookings/apiSlice'
import { cartApi } from './features/cart/apiSlice'
import cartSlice from './features/cart/cartSlice'
import { categoriesApi } from './features/categories/apiSlice'
import { chatApi } from './features/chat/apiSlice'
import formReducer from './features/formSlice'
import loadingErrorSlice from './features/loadingErrorSlice'
import { notificationApi } from './features/notification/apiSlice'
import { ordersApi } from './features/orders/apiSlice'
import orderReducer from './features/orderSlice'
import popupSlice from './features/popupSlice'
import profileReducer from './features/profileSlice'
import { reviewsApi } from './features/reviews/apiSlice'
import { servicesApi } from './features/services/apiSlice'
import listingSlice from './features/services/listingSlice'
import servicesSlice from './features/services/servicesSlice'
import stepperSlice from './features/stepperSlice'
import { subscriptionsApi } from './features/subscription/apiSlice'
import { usersApi } from './features/user/apiSlice'
import { wishlistApi } from './features/wishlist/apiSlice'

export const store = configureStore({
  reducer: {
    stepper: stepperSlice,
    loadingerror: loadingErrorSlice,
    services: servicesSlice,
    listing: listingSlice,
    cart: cartSlice,

    form: formReducer,
    popup: popupSlice,
    profile: profileReducer,
    order: orderReducer,

    [usersApi.reducerPath]: usersApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
    [bookingsApi.reducerPath]: bookingsApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [bankingsApi.reducerPath]: bankingsApi.reducer,
    [notificationApi.reducerPath]: notificationApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
    [wishlistApi.reducerPath]: wishlistApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [subscriptionsApi.reducerPath]: subscriptionsApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(cartApi.middleware)
      .concat(servicesApi.middleware)
      .concat(bookingsApi.middleware)
      .concat(reviewsApi.middleware)
      .concat(bankingsApi.middleware)
      .concat(notificationApi.middleware)
      .concat(usersApi.middleware)
      .concat(usersApi.middleware)
      .concat(wishlistApi.middleware)
      .concat(chatApi.middleware)
      .concat(categoriesApi.middleware)
      .concat(subscriptionsApi.middleware)
      .concat(ordersApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//TODO: create hook for redux
