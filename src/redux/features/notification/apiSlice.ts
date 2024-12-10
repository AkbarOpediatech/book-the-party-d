import { baseQuery } from '@/utils/baseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'

export interface NotificationItem {
  _id: string
  type: string
  message: string
  isRead: boolean
  user: string
  status: string
}

interface NotificationItemResponse {
  data: NotificationItem[]
}
export const notificationApi = createApi({
  reducerPath: 'notificationApi',
  baseQuery,
  tagTypes: ['Notification'],
  endpoints: builder => ({
    fetchNotification: builder.query<NotificationItemResponse, void>({
      query: () => '/notifications',
      providesTags: ['Notification']
    }),
    addToNotification: builder.mutation<NotificationItem, NotificationItem>({
      query: item => ({
        url: '/notifications',
        method: 'POST',
        body: item
      }),
      invalidatesTags: ['Notification']
    }),
    removeFromNotification: builder.mutation<void, number>({
      query: itemId => ({
        url: `/notifications/${itemId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Notification']
    })
  })
})

export const { useFetchNotificationQuery, useAddToNotificationMutation, useRemoveFromNotificationMutation } =
  notificationApi
