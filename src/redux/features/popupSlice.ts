import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface PopupState {
  isVisible: boolean
  canceled: boolean
  currentStep: number
  cancellationReason?: string
  penalty?: number
}

const initialState: PopupState = {
  isVisible: false,
  canceled: false,
  currentStep: 0,
  penalty: 0
}

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup: state => {
      state.isVisible = true
    },
    closePopup: state => {
      state.isVisible = false
    },
    cancelBooking: (state, action: PayloadAction<{ reason?: string; penalty?: number }>) => {
      state.canceled = true
      state.cancellationReason = action.payload.reason
      state.penalty = action.payload.penalty || 0
      state.isVisible = false
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload
    }
  }
})

export const { openPopup, closePopup, cancelBooking, setStep } = popupSlice.actions
export default popupSlice.reducer
