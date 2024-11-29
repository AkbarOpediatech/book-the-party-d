import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FormState = {
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

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (state, action: PayloadAction<{ field: keyof FormState['formData']; value: string }>) => {
      const { field, value } = action.payload
      state.formData[field] = value
    },
    toggleCategoryChecked: state => {
      state.categoryChecked = !state.categoryChecked
    },
    toggleSaveAddress: state => {
      state.saveAddress = !state.saveAddress
    }
  }
})

export const { updateField, toggleCategoryChecked, toggleSaveAddress } = formSlice.actions

export default formSlice.reducer
