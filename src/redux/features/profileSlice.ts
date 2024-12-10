// src/store/slices/profileSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProfileState {
  activeTab: string
}

const initialState: ProfileState = {
  activeTab: 'Account Settings'
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setActiveTab(state, action: PayloadAction<string>) {
      state.activeTab = action.payload
    }
  }
})

export const { setActiveTab } = profileSlice.actions
export default profileSlice.reducer
