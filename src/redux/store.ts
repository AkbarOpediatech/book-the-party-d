import { configureStore } from '@reduxjs/toolkit'
import { bankingsApi } from './features/bankings/apiSlice'
import { bookingsApi } from './features/bookings/apiSlice'
import { cartApi } from './features/cart/apiSlice'
import formReducer from './features/formSlice'
import loadingErrorSlice from './features/loadingErrorSlice'
import popupSlice from './features/popupSlice'
import profileReducer from './features/profileSlice'
import { servicesApi } from './features/services/apiSlice'
import servicesSlice from './features/services/servicesSlice'
import stepperSlice from './features/stepperSlice'
import { usersApi } from './features/user/apiSlice'

export const store = configureStore({
  reducer: {
    stepper: stepperSlice,
    loadingerror: loadingErrorSlice,
    services: servicesSlice,
    [usersApi.reducerPath]: usersApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
    [bookingsApi.reducerPath]: bookingsApi.reducer,
    [bankingsApi.reducerPath]: bankingsApi.reducer,
    form: formReducer,
    popup: popupSlice,
    profile: profileReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(cartApi.middleware)
      .concat(servicesApi.middleware)
      .concat(bookingsApi.middleware)
      .concat(bankingsApi.middleware)
      .concat(usersApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//TODO: create hook for redux
