import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ServiceItem } from './apiSlice'

interface ServicesState {
  selectedService: ServiceItem | null
  filter: string
}

const initialState: ServicesState = {
  selectedService: null,
  filter: ''
}

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setSelectedService(state, action: PayloadAction<ServiceItem | null>) {
      state.selectedService = action.payload
    },
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload
    }
  }
})

export const { setSelectedService, setFilter } = servicesSlice.actions

export default servicesSlice.reducer
