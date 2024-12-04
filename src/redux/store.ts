import { configureStore } from '@reduxjs/toolkit'
import { bookingsApi } from './features/bookings/apiSlice'
import { cartApi } from './features/cart/apiSlice'
import formReducer from './features/formSlice'
import loadingErrorSlice from './features/loadingErrorSlice'
import popupSlice from './features/popupSlice'
import { servicesApi } from './features/services/apiSlice'
import servicesSlice from './features/services/servicesSlice'
import stepperSlice from './features/stepperSlice'

export const store = configureStore({
  reducer: {
    stepper: stepperSlice,
    loadingerror: loadingErrorSlice,
    services: servicesSlice,
    [cartApi.reducerPath]: cartApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
    [bookingsApi.reducerPath]: bookingsApi.reducer,
    form: formReducer,
    popup: popupSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(cartApi.middleware)
      .concat(servicesApi.middleware)
      .concat(bookingsApi.middleware)
  // .concat(userApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//TODO: create hook for redux
