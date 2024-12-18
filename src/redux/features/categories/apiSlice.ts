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

// Define the TypeScript types for your data
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
  // endpoints: builder => ({
  //   fetchCategories: builder.query<CategoriesResponse, { role?: string; limit?: number; page?: number }>({
  //     query: ({ role, limit, page } = {}) => {
  //       const params = role ? { role } : {}
  //       return {
  //         url: `/categories?limit=${limit}&page=${page}`,
  //         params
  //       }
  //     },
  //     providesTags: ['Categories']
  //   })
  endpoints: builder => ({
    fetchCategories: builder.query<CategoriesResponse, void>({
      query: () => ({
        url: '/categories'
      }),
      providesTags: ['Categories']
    })
  })

  // fetchCategoriesById: builder.query<IUser, string>({
  //   query: id => `/categories/${id}`,
  //   providesTags: (result, error, id) => [{ type: 'Categories', id: id }]
  // }),

  // updateUser: builder.mutation<IUser, Partial<IUser> & Pick<IUser, '_id'>>({
  //   query: ({ _id, ...rest }) => ({
  //     url: `/categories/${_id}`,
  //     method: 'PUT',
  //     body: rest
  //   }),
  //   invalidatesTags: ['Categories']
  // })
})

// export const { usefetchCategoriesQuery, usefetchCategoriesByIdQuery, useUpdateUserMutation } = categoriesApi
export const { useFetchCategoriesQuery } = categoriesApi
