import { baseQuery } from '@/utils/baseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'

export interface ServiceItem {
  id: number
  user: string
  title: string
  description: string
  slug: string
  featured_image: string | null
  category: string
  location: string
  inclusions: string[]
  infos: string[]
  is_featured: boolean
  price_type: string
  price: {
    text: string
    value: number
  }[]
  security_deposit: number
  cancellation_period_hours: number
  availability: {
    days: string
    start_time: string
    end_time: string
  }[]
  is_unavailable: boolean
  status: string
}

export const servicesApi = createApi({
  reducerPath: 'servicesApi',
  baseQuery,
  tagTypes: ['Services'],
  endpoints: builder => ({
    fetchServices: builder.query<ServiceItem[], void>({
      query: () => '/services',
      providesTags: ['Services']
    }),
    fetchServiceById: builder.query<ServiceItem, string>({
      query: slug => `/services/${slug}`,
      providesTags: (result, error, slug) => [{ type: 'Services', slug }]
    }),
    addService: builder.mutation<ServiceItem, Omit<ServiceItem, 'id'>>({
      query: newService => ({
        url: '/services',
        method: 'POST',
        body: newService
      }),
      invalidatesTags: ['Services']
    }),
    updateService: builder.mutation<ServiceItem, Partial<ServiceItem> & Pick<ServiceItem, 'id'>>({
      query: ({ id, ...rest }) => ({
        url: `/services/${id}`,
        method: 'PUT',
        body: rest
      }),
      invalidatesTags: ['Services']
    }),
    deleteService: builder.mutation<void, number>({
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
