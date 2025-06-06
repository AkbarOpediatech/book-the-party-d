import type { IOrder } from '@/types/common'
import { baseQuery } from '@/utils/baseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'

// Define the TypeScript types for your data
export type IPagination = {
  current: number
  total: number
  next: number | null
  prev: number | null
  records: number
}

// export interface IOrder {
//   _id?: string
//   order?: string
//   user?: string
//   vendor?: string
//   end_date?: string
//   service?: string
//   service_embedded?: {
//     title: string
//     description: string
//     featured_image: string | null
//     category: string
//     location: string
//     inclusions: string[]
//     infos: string[]
//     price_type: 'fixed' | 'variable'
//     price: {
//       text: string
//       value: number
//       _id: string
//     }[]
//     security_deposit: number
//     cancellation_period_hours: number
//   }
//   notes?: string
//   quantity?: number
//   price_id?: string
//   price?: {
//     text: string
//     value: number
//   }
//   selected_date?: {
//     start_date: string
//     end_date: string
//   }[]
//   amount?: {
//     service_total: number
//     discounted_service_total: number
//     discount: number
//     security_deposit: number
//     subtotal: number
//     order_fee: number
//     tax: number
//     shipping_fee: number
//     total: number
//   }
//   coupons?: string[]
//   security_deposit_payout_percentage?: number
//   status?: 'draft' | 'pending' | 'processing' | 'completed_request_vendor' | 'completed' | 'cancelled'
//   history?: {
//     message: string
//     user: string | null
//     date: string
//   }[]
//   createdAt?: string
//   updatedAt?: string
// }

export interface IOrderPost {
  order: string
  user: string
  vendor: string
  service: string
  notes: string
  quantity: number
  price_id: string
  selected_date: {
    start_date: string
    end_date: string
  }[]
}

interface OrderResponse {
  data: IOrder[]
  pagination: IPagination
}

// Redux Toolkit Query API
export const bookingsApi = createApi({
  reducerPath: 'bookingsApi',
  baseQuery,
  tagTypes: ['Bookings'],
  endpoints: builder => ({
    fetchBookings: builder.query<OrderResponse, { role?: string; limit?: number; page?: number }>({
      query: ({ role, limit, page } = {}) => {
        const params = role ? { role, limit, page } : {} // Conditionally include `vendor` if it exists
        return {
          url: `/order-items`,
          params // Add query parameters dynamically
        }
      },
      providesTags: ['Bookings']
    }),

    fetchBookingById: builder.query<IOrder, string>({
      query: slug => `/order-items/${slug}`,
      providesTags: (result, error, slug) => [{ type: 'Bookings', id: slug }]
    }),

    updateBooking: builder.mutation<IOrder, Partial<IOrder> & Pick<IOrder, '_id'>>({
      query: ({ _id, ...rest }) => ({
        url: `/order-items/${_id}`,
        method: 'PATCH',
        body: rest
      }),
      invalidatesTags: ['Bookings']
    })
  })
})

// Export hooks for using the API
export const { useFetchBookingsQuery, useFetchBookingByIdQuery, useUpdateBookingMutation } = bookingsApi
