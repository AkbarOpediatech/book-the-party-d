import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface LoadingError {
  loading: boolean
  error: string | null
}

const initialState: LoadingError = {
  loading: false,
  error: null
}

const loadingErrorSlice = createSlice({
  name: 'loadingerror',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    clearError: state => {
      state.error = null
    }
  }
})

export const { setLoading, setError, clearError } = loadingErrorSlice.actions
export default loadingErrorSlice.reducer
