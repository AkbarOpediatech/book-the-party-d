import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Address {
  name: string
  email: string
  mobileNumber: string
  houseNo: string
  streetName: string
  suburb: string
  state: string
  postCode: string
  isDefault: boolean
}

interface FormState {
  addresses: Address[]
  categoryChecked: boolean
}

const initialState: FormState = {
  addresses: [],
  categoryChecked: false
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addNewAddress: (state, action: PayloadAction<Address>) => {
      state.addresses.push(action.payload)
    },
    deleteAddress: (state, action: PayloadAction<number>) => {
      state.addresses.splice(action.payload, 1)
    },
    setDefaultAddress: (state, action: PayloadAction<number>) => {
      state.addresses.forEach((addr, idx) => (addr.isDefault = idx === action.payload))
    },
    updateAddress: (state, action: PayloadAction<{ index: number; updatedAddress: Address }>) => {
      const { index, updatedAddress } = action.payload
      state.addresses = state.addresses.map((address, idx) =>
        idx === index ? { ...address, ...updatedAddress } : address
      )
    },
    toggleCategoryChecked: state => {
      state.categoryChecked = !state.categoryChecked
    }
  }
})

export const { addNewAddress, deleteAddress, setDefaultAddress, updateAddress, toggleCategoryChecked } =
  formSlice.actions
export default formSlice.reducer
