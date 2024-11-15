import { configureStore } from '@reduxjs/toolkit'
import loadingErrorSlice from './features/loadingErrorSlice'
import stepperSlice from './features/stepperSlice'

export const store = configureStore({
  reducer: {
    stepper: stepperSlice,
    loadingerror: loadingErrorSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
