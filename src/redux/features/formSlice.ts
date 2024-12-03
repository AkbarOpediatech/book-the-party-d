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
  }[]
  categoryChecked: boolean
  saveAddress: boolean
}

const initialState: FormState = {
  formData: [
    {
      name: '',
      email: '',
      mobileNumber: '',
      houseNo: '',
      streetName: '',
      suburb: '',
      state: '',
      postCode: ''
    }
  ],
  categoryChecked: false,
  saveAddress: false
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ index: number; field: keyof FormState['formData'][0]; value: string }>
    ) => {
      const { index, field, value } = action.payload
      if (state.formData[index]) {
        state.formData[index][field] = value
      }
    },
    toggleCategoryChecked: state => {
      state.categoryChecked = !state.categoryChecked
    },
    toggleSaveAddress: state => {
      state.saveAddress = !state.saveAddress
    },
    addNewAddress: state => {
      state.formData.push({
        name: '',
        email: '',
        mobileNumber: '',
        houseNo: '',
        streetName: '',
        suburb: '',
        state: '',
        postCode: ''
      })
    }
  }
})

export const { updateField, toggleCategoryChecked, toggleSaveAddress, addNewAddress } = formSlice.actions
export default formSlice.reducer
