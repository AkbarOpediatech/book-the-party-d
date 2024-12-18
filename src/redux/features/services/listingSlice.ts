/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define the shape of the listing schema
export interface Price {
  text?: string
  value: number
}

export interface Availability {
  days: string // Enum for availability days
  start_time: string
  end_time: string
}

export interface Listing {
  user: string // ObjectId as string
  title: string
  description?: string
  slug?: string
  featured_image?: string | null
  category: string // ObjectId as string
  location: string // ObjectId as string
  inclusions?: string[]
  infos?: string[]
  is_featured?: boolean
  price_type: string // Enum for price types
  price: Price[]
  security_deposit: number
  cancellation_period_hours: number
  availability: Availability[]
  is_unavailable?: boolean
}

// Define the state shape
interface ListingState {
  listing: Partial<Listing> | null // Store the listing data
  loading: boolean
  error: string | null
}

// Initial state
const initialState: ListingState = {
  listing: null,
  loading: false,
  error: null
}

// Create the Redux slice
const listingSlice = createSlice({
  name: 'listing',
  initialState,
  reducers: {
    // Set the entire listing (merge with existing data)
    setListing: (state, action: PayloadAction<Partial<Listing>>) => {
      state.listing = { ...state.listing, ...action.payload }
    },

    // Reset the listing
    resetListing: state => {
      state.listing = null
    },

    // Update a specific field in the listing
    updateListingField: (state, action: PayloadAction<{ field: keyof Listing; value: any }>) => {
      if (state.listing) {
        const { field, value } = action.payload

        // Handle arrays (append to the array)
        if (Array.isArray(state.listing[field])) {
          state.listing[field] = { ...(state.listing[field] as string[]), ...value }
        }
        // Handle objects (merge with existing object)
        else if (typeof state.listing[field] === 'object' && state.listing[field] !== null) {
          state.listing[field] = { ...(state.listing[field] as object), ...value }
        }
        // Handle other fields (just update the value)
        else {
          state.listing[field] = value
        }
      }
    },

    // Set the loading state
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },

    // Set error message
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    }
  }
})

// Export actions
export const { setListing, resetListing, updateListingField, setLoading, setError } = listingSlice.actions

// Export reducer
export default listingSlice.reducer
