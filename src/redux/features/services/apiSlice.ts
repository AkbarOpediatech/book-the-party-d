import { baseQuery } from '@/utils/baseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'

export interface ServiceItem {
  id: number
  name: string
  price: number
  description: string
  stock: number
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
    addService: builder.mutation<ServiceItem, Omit<ServiceItem, 'id'>>({
      query: newService => ({
        url: '/products',
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
  useAddServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation
} = servicesApi
