import { baseQuery } from '@/utils/baseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
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
  value?: string | undefined
  _id?: string
}

export type IUser = {
  _id?: string
  name?: string
  email?: string
  phone?: string
  password?: string
  avatar?: string
  role?: string
  languages?: string[]
  specialized?: string[]
  stripe_acct?: {
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
  about?: string
  email_verified_at?: Date | null
  phone_verified_at?: Date | null
  status?: string
}

export type GlobalServiceItem = {
  aproved_by?: null | undefined
  availability: IAvailability[]
  cancellation_period_hours?: number
  createdAt?: string
  description?: string
  inclusions?: string | string[]
  infos?: string[]
  is_featured?: boolean
  is_unavailable?: boolean
  price?: IPrice[]
  price_type?: string
  security_deposit?: number
  slug?: string
  status?: string
  title?: string
  updatedAt?: string
  _id?: string | IUser
}

export interface ServiceItem extends GlobalServiceItem {
  _id: string
  user: IUser
  category: ICategory
  location: ILocation
  featured_image: string
}

export interface ServiceItemPost extends GlobalServiceItem {
  user?: string
  category?: string
  location?: string
  featured_image?: File | null | string | StaticImport
}

export interface ServiceResponse {
  data: ServiceItem[]
  pagination: IPagination
}
interface SingleServiceResponse {
  data: ServiceItem
}
interface UpdateServiceParams {
  _id: string
  formData: FormData
}

export const servicesApi = createApi({
  reducerPath: 'servicesApi',
  baseQuery,
  tagTypes: ['Services'],
  endpoints: builder => ({
    fetchServices: builder.query<
      ServiceResponse,
      {
        role?: string
        limit?: number
        page?: number
        title?: string
        category?: string[]
        location?: string[]
        populate?: string[]
        description?: string
      }
    >({
      query: ({ role, limit, page, title, description, category, location, populate } = {}) => {
        const params: Record<string, string | number | undefined | string[]> = {
          ...(role && { role }),
          ...(limit && { limit: limit ?? 30 }),
          ...(page && { page: page ?? 1 }),
          ...(title && { title }),
          ...(description && { description }),
          ...(category && { category }),
          ...(location && { location }),
          ...(populate && { populate })
        }

        const queryString = new URLSearchParams(
          Object.entries(params)
            .filter(([_, value]) => value !== null) // Filter out undefined values
            .map(([key, value]) => [key, value!.toString()])
        ).toString()

        return {
          url: `/services?${queryString}`
        }
      },
      providesTags: ['Services']
    }),
    fetchServiceById: builder.query<SingleServiceResponse, string>({
      query: slug => `/services/${slug}`,
      providesTags: (result, error, slug) => [{ type: 'Services', slug }]
    }),
    addService: builder.mutation<ServiceItemPost, FormData>({
      query: formData => ({
        url: '/services',
        method: 'POST',
        body: formData
      }),
      invalidatesTags: ['Services']
    }),

    updateService: builder.mutation<ServiceItemPost, UpdateServiceParams>({
      query: ({ _id, formData }) => ({
        url: `/services/${_id}`,
        method: 'PATCH',
        body: formData
      }),
      invalidatesTags: ['Services']
    }),
    deleteService: builder.mutation<void, string>({
      query: id => ({
        url: `/services/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Services']
    })
  })
})

export const {
  useFetchServicesQuery,
  useFetchServiceByIdQuery,
  useAddServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation
} = servicesApi
