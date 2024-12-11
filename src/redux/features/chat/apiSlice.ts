import { baseQuery } from '@/utils/baseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'

type ChatItem = {
  message: string
  file: string | null
  receiver: string
  user: string
}

interface ChatItemResponse {
  data: ChatItem[]
}
export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery,
  tagTypes: ['Chat'],
  endpoints: builder => ({
    fetchChat: builder.query<ChatItemResponse, void>({
      query: () => '/chats',
      providesTags: ['Chat']
    }),
    addToChat: builder.mutation<ChatItem, ChatItem | FormData>({
      query: (formData: ChatItem) => ({
        url: '/chats',
        method: 'POST',
        body: formData
      }),
      invalidatesTags: ['Chat']
    }),
    removeFromChat: builder.mutation<void, number>({
      query: itemId => ({
        url: `/chats/${itemId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Chat']
    })
  })
})

export const { useFetchChatQuery, useAddToChatMutation, useRemoveFromChatMutation } = chatApi
