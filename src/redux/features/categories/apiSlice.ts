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
  title?: string
  description?: string
  icon?: string
}

interface CategoryPost {
  title?: string
  user?: string
  description?: string
  icon?: string
  featured_image?: File | null
}

export interface CategoryFetch extends ICategory {
  _id?: string
  slug?: string
  featured_image?: string | null
}

interface CategoriesResponse {
  data?: CategoryFetch[]
}

// Redux Toolkit Query API
export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery,
  tagTypes: ['Categories', 'Media'],
  endpoints: builder => ({
    fetchCategories: builder.query<CategoriesResponse, void>({
      query: () => ({
        url: '/categories'
      }),
      providesTags: ['Categories']
    }),
    addCategory: builder.mutation<void, FormData>({
      query: formdata => ({
        url: '/categories',
        method: 'POST',
        body: formdata
      }),
      invalidatesTags: ['Categories']
    })
  })
})

export const { useFetchCategoriesQuery, useAddCategoryMutation } = categoriesApi
