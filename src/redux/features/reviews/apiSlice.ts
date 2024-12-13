import { baseQuery } from '@/utils/baseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'
import type { StaticImageData } from 'next/image'

export type IPagination = {
  current: number
  total: number
  next: number | null
  prev: number | null
  records: number
}

export type IAvailability = {
  days: string
  end_time: string
  start_time: string
  _id?: string
}

export type ICategory = {
  createdAt: string
  description: string
  featured_image: StaticImageData | null
  hierarchy: string
  icon: StaticImageData | null
  slug: string
  status: string
  title: string
  updatedAt: string
  user: string
  _id: string
}

export type ILocation = {
  createdAt: string
  description: string
  featured_image: {
    name: string
    reference: string
    sid: string
    size: number
    type: string
    url: string
    hierarchy: string
    location: {
      coordinates: object[]
      type: string
    }[]
  }[] //TODO: type will be modified
  slug: string
  status: string
  title: string
  type: string
  updatedAt: string
  user: string
  _id: string
}

export type IPrice = {
  text: string
  value?: number
  _id?: string
}

export type GlobalReviewsItem = {
  aproved_by?: null | undefined
  availability?: IAvailability[]
  cancellation_period_hours?: number
  createdAt?: string
  description: string
  inclusions?: string[]
  infos?: string[]
  is_featured: boolean
  is_unavailable: boolean
  price: IPrice[]
  price_type: string
  security_deposit: number
  slug: string
  status: string
  title: string
  updatedAt?: string
  _id?: string
}

export interface ReviewsItem extends GlobalReviewsItem {
  user: IUser
  category: ICategory
  location: ILocation
  featured_image: string
}
export interface ReviewsItemPost extends GlobalReviewsItem {
  user: string
  category?: string
  location?: string
  featured_image: File | null
}

interface ReviewsResponse {
  data?: ReviewsItem[]
  pagination: IPagination
}

interface SingleReviewsResponse {
  data: ReviewsItem
}

export type IUser = {
  name: string
  email: string
  phone: string
  password: string
  avatar: string
  role: string
  languages: string[]
  specialized: string[]
  stripe_acct: {
    id: string
    capabilities: {
      card_payments: string
      transfers: string
    }
    charges_enabled: boolean
    payouts_enabled: boolean
    details_submitted: boolean
    requirements: {
      disabled_reason: string | null
    }
  } | null
  about: string
  email_verified_at: Date | null
  phone_verified_at: Date | null
  status: string
  updatedAt?: string
}

export type IReview = {
  description: string
  rating: number
  user: IUser
  Reviews: ReviewsItem
  status: string
}

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery,
  tagTypes: ['Reviews'],
  endpoints: builder => ({
    fetchReviews: builder.query<ReviewsResponse, { reviews?: string; limit?: number; page?: number }>({
      query: ({ reviews, limit, page } = {}) => {
        const params = reviews ? { reviews } : {} // Conditionally include `role` if it exists
        return {
          url: `/reviews?limit=${limit}&page=${page}`,
          params // Add query parameters dynamically
        }
      },
      providesTags: ['Reviews']
    }),
    fetchReviewById: builder.query<SingleReviewsResponse, string>({
      query: slug => `/reviews/${slug}`,
      providesTags: (result, error, slug) => [{ type: 'Reviews', slug }]
    }),
    addReview: builder.mutation<ReviewsItemPost, Omit<ReviewsItemPost, 'id'>>({
      query: newReview => ({
        url: '/reviews',
        method: 'POST',
        body: newReview
      }),
      invalidatesTags: ['Reviews']
    }),
    updateReview: builder.mutation<ReviewsItem, Partial<ReviewsItem> & Pick<ReviewsItem, 'slug'>>({
      query: ({ slug, ...rest }) => ({
        url: `/reviews/${slug}`,
        method: 'PUT',
        body: rest
      }),
      invalidatesTags: ['Reviews']
    }),
    deleteReview: builder.mutation<void, number>({
      query: id => ({
        url: `/reviews/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Reviews']
    })
  })
})

export const {
  useFetchReviewsQuery,
  useFetchReviewByIdQuery,
  useAddReviewMutation,
  useUpdateReviewMutation,
  useDeleteReviewMutation
} = reviewsApi
