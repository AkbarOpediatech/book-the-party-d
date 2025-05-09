import { baseQuery } from '@/utils/baseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'
import type { Address } from 'cluster'
import type { getCartItem } from '../cart/apiSlice'
import type { ReviewsItem } from '../reviews/apiSlice'

export type OrderAmount = {
  service_total: number
  discounted_service_total: number
  discount: number
  security_deposit: number
  subtotal: number
  order_fee: number
  tax: number
  shipping_fee: number
  total: number
}

export type OrderBillingDetails = {
  name: string
  email: string
  phone: string
  city?: string
  state?: string
  country?: string
  postcode?: string
  street?: string
}

export type OrderShippingDetails = OrderBillingDetails | null

export type ServicePrice = {
  text: string
  value: number
  _id: string
}

export type ServiceEmbedded = {
  title: string
  description: string
  featured_image: string
  category: string
  location: string
  status?: string
  inclusions: string[] // Array of strings
  infos: string[] // Array of strings
  price_type: 'hourly' | 'daily' | 'fixed' // Adjust as needed based on possible values
  price: ServicePrice[] // Array of prices
  security_deposit: number // Security deposit amount
  cancellation_period_hours: number // Cancellation period in hours
}

export type amountOrderDetails = {
  amount: OrderAmount
  billing_details: OrderBillingDetails
}

export type Order = {
  _id?: string
  user?: string
  status?: string
  service?: string
  currency?: string
  payment_method?: string
  stripe_ch_id?: string
  stripe_pi_id?: string
  stripe_transfer_group?: string
  notes?: string
  review?: ReviewsItem
  amount?: OrderAmount
  billing_details?: OrderBillingDetails
  service_embedded?: ServiceEmbedded
  order?: amountOrderDetails
  shipping_details?: OrderShippingDetails
  createdAt?: string
  updatedAt?: string
  client_secret?: string
}

export type orderData = {
  user: string
  notes: string
  billing_details: Address
  shipping_details: null
  carts: getCartItem[] | undefined
  coupons?: string[] | undefined
}

export type OrderResponse = {
  data: Order[]
  pagination: {
    current: number
    total: number
    next: number | null
    prev: number | null
    records: number
  }
}

interface PaymentInterface extends Order {
  data: Order
}

interface SingleOrderResponse {
  data: Order
}

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery,
  tagTypes: ['Orders'],
  endpoints: builder => ({
    addOrder: builder.mutation<PaymentInterface, Partial<Order>>({
      query: body => ({
        url: '/orders',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Orders']
    }),
    getOrdersByUser: builder.query<OrderResponse, void>({
      query: () => '/order-items',
      providesTags: result => ['Orders']
    }),
    getOrderById: builder.query<SingleOrderResponse, string>({
      query: orderId => `/order-items/${orderId}`,
      providesTags: ['Orders']
    }),

    updateOrder: builder.mutation<Order, Partial<Order> & Pick<Order, '_id'>>({
      query: ({ _id, ...rest }) => ({
        url: `/orders/${_id}`,
        method: 'PATCH',
        body: rest
      }),
      invalidatesTags: ['Orders']
    }),

    deleteOrder: builder.mutation<void, string>({
      query: id => ({
        url: `/orders/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Orders']
    })
  })
})

export const {
  useAddOrderMutation,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
  useGetOrdersByUserQuery,
  useGetOrderByIdQuery
} = ordersApi
