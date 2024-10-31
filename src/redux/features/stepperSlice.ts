import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface StepperState {
  currentStep: number
}

const initialState: StepperState = {
  currentStep: 0
}

const stepperSlice = createSlice({
  name: 'stepper',
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload
    },
    nextStep: state => {
      state.currentStep += 1
    },
    previousStep: state => {
      if (state.currentStep > 0) state.currentStep -= 1
    }
  }
})

export const { setStep, nextStep, previousStep } = stepperSlice.actions
export default stepperSlice.reducer
