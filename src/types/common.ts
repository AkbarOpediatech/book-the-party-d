export interface IOrder {
  _id?: string
  order?: {
    _id: string
    user: string
    status: string
    currency: string
    payment_method: string
    stripe_ch_id: string
    stripe_pi_id: string
    stripe_transfer_group: string
    notes: string
    amount: {
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
    billing_details?: {
      name: string
      email: string
      phone?: string
      city: string
      state: string
      country: string
      postcode: string
      street: string
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    shipping_details?: any
    createdAt: string
    updatedAt: string
  }
  user?: {
    _id: string
    name: string
    email: string
    phone?: string
    avatar?: string
    role: string
    specialized: string[]
    stripe_acct?: string | null
    about?: string
    email_verified_at?: string | null
    phone_verified_at?: string | null
    status: string
    createdAt: string
    updatedAt: string
  }
  vendor?: string
  service?: string
  service_embedded?: {
    title: string
    description: string
    featured_image: string | null
    category: string
    location: string
    inclusions: string[]
    infos: string[]
    price_type: 'fixed' | 'variable' | 'hourly'
    price: {
      text: string
      value: number
      _id: string
    }[]
    security_deposit: number
    cancellation_period_hours: number
  }
  notes?: string
  quantity?: number
  price_id?: string
  price?: {
    text: string
    value: number
  }
  selected_date?: {
    start_date: string
    end_date: string
  }[]
  amount?: {
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
  coupons?: string[]
  security_deposit_payout_percentage?: number
  status?:
    | 'draft'
    | 'pending'
    | 'processing'
    | 'completed_request_vendor'
    | 'completed'
    | 'cancelled'
    | string
  history?: {
    message: string
    user: string | null
    date: string
  }[]
  createdAt?: string
  updatedAt?: string
}
