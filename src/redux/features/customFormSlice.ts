// redux/features/customFormSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FormState {
  formData: {
    name: string
    email: string
    mobileNumber: string
    houseNo: string
    streetName: string
    suburb: string
    state: string
    postCode: string
  }
  categoryChecked: boolean
  saveAddress: boolean
}

const initialState: FormState = {
  formData: {
    name: '',
    email: '',
    mobileNumber: '',
    houseNo: '',
    streetName: '',
    suburb: '',
    state: '',
    postCode: ''
  },
  categoryChecked: false,
  saveAddress: false
}

const customFormSlice = createSlice({
  name: 'customForm',
  initialState,
  reducers: {
    updateField: (state, action: PayloadAction<{ field: keyof FormState['formData']; value: string }>) => {
      state.formData[action.payload.field] = action.payload.value
    },
    toggleCategoryChecked: state => {
      state.categoryChecked = !state.categoryChecked
    },
    toggleSaveAddress: state => {
      state.saveAddress = !state.saveAddress
    }
  }
})

export const { updateField, toggleCategoryChecked, toggleSaveAddress } = customFormSlice.actions

export default customFormSlice.reducer
