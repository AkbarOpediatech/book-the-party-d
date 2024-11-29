import { configureStore } from '@reduxjs/toolkit'
import loadingErrorSlice from './features/loadingErrorSlice'
import stepperSlice from './features/stepperSlice'
import formReducer from './features/formSlice'

export const store = configureStore({
  reducer: {
    stepper: stepperSlice,
    loadingerror: loadingErrorSlice,
    form: formReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
