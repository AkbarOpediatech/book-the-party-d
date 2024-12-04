import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ServiceItem } from './apiSlice'

interface ServicesState {
  selectedService: ServiceItem | null
  newServiceDraft: Partial<ServiceItem>
  filter: string
}

const initialState: ServicesState = {
  selectedService: null,
  newServiceDraft: {},
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
    },
    setNewServiceDraft(state, action: PayloadAction<{ field: string; value: ServiceItem }>) {
      const { field, value } = action.payload
      state.newServiceDraft = {
        ...state.newServiceDraft,
        [field]: value
      }
    },
    clearNewServiceDraft(state) {
      state.newServiceDraft = {}
    }
  }
})

export const { setSelectedService, setFilter, setNewServiceDraft, clearNewServiceDraft } =
  servicesSlice.actions

export default servicesSlice.reducer
