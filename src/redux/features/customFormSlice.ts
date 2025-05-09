// redux/features/customFormSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FormState {
  formData: {
    name: string
    email: string
    phone: string
    country: string
    street: string
    city: string
    state: string
    postcode: string
  }
  categoryChecked: boolean
  saveAddress: boolean
}

const initialState: FormState = {
  formData: {
    name: '',
    email: '',
    phone: '',
    country: '',
    street: '',
    city: '',
    state: '',
    postcode: ''
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
