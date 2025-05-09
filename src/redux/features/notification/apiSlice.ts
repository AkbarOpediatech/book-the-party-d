import { MyNotificationResponse, NotificationItem, NotificationItemResponse } from '@/utils'
import { baseQuery } from '@/utils/baseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'

export const notificationApi = createApi({
  reducerPath: 'notificationApi',
  baseQuery,
  tagTypes: ['Notification'],
  endpoints: builder => ({
    fetchNotification: builder.query<NotificationItemResponse, void>({
      query: () => '/notifications',
      providesTags: ['Notification']
    }),
    myNotifications: builder.query<MyNotificationResponse, { page: number }>({
      query: ({ page = 1 }) => `/notifications/me/all?page=${page}`,
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

export const {
  useFetchNotificationQuery,
  useAddToNotificationMutation,
  useRemoveFromNotificationMutation,
  useMyNotificationsQuery
} = notificationApi
