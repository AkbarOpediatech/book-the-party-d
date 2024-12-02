import { configureStore } from '@reduxjs/toolkit'
import formReducer from './features/formSlice'
import loadingErrorSlice from './features/loadingErrorSlice'
import popupSlice from './features/popupSlice'
import stepperSlice from './features/stepperSlice'

export const store = configureStore({
  reducer: {
    stepper: stepperSlice,
    loadingerror: loadingErrorSlice,
    form: formReducer,
    popup: popupSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
