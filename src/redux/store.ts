import { configureStore } from '@reduxjs/toolkit'
import { cartApi } from './features/cart/apiSlice'
import loadingErrorSlice from './features/loadingErrorSlice'
import { servicesApi } from './features/services/apiSlice'
import servicesSlice from './features/services/servicesSlice'
import stepperSlice from './features/stepperSlice'

export const store = configureStore({
  reducer: {
    stepper: stepperSlice,
    loadingerror: loadingErrorSlice,
    services: servicesSlice,
    [cartApi.reducerPath]: cartApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(cartApi.middleware).concat(servicesApi.middleware)
  // .concat(userApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//TODO: create hook for redux
