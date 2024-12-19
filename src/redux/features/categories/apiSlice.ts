import { baseQuery } from '@/utils/baseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'

export type IStatus = 'publish' | 'draft' | 'pending' | 'trash' | 'private'

export type IMedia = {
  _id?: string
  sid?: string
  name?: string
  size?: number
  type?: string
  user?: string
  status?: IStatus
  createdAt?: Date
  updatedAt?: Date
}

export type ICategory = {
  _id?: string
  title?: string
  description?: string
  featured_image?: string
  icon?: string
  slug?: string
  hierarchy?: ICategory | null
  status?: IStatus
}

interface CategoriesResponse {
  data?: ICategory[]
}

// Redux Toolkit Query API
export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery,
  tagTypes: ['Categories'],
  endpoints: builder => ({
    fetchCategories: builder.query<CategoriesResponse, void>({
      query: () => ({
        url: '/categories'
      }),
      providesTags: ['Categories']
    }),
    addCategory: builder.mutation<ICategory, Partial<ICategory>>({
      query: category => ({
        url: '/categories',
        method: 'POST',
        body: category
      }),
      invalidatesTags: ['Categories']
    })
  })
})

export const { useFetchCategoriesQuery, useAddCategoryMutation } = categoriesApi
