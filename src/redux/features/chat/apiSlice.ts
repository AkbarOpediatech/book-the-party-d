import { ChatItem, ChatItemResponse, IAdminChatResponse } from '@/utils'
import { baseQuery } from '@/utils/baseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'

interface IAdminConversationPayload {
  user: string
  receiver: string
}

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery,
  tagTypes: ['Chat'],
  endpoints: builder => ({
    fetchChat: builder.query<ChatItemResponse, string | void>({
      query: (receiverId = '') => `/chats?receiver=${receiverId}`,
      providesTags: ['Chat']
    }),

    adminChats: builder.query<IAdminChatResponse, string | void>({
      query: (id = '') => `/chats/admin/${id}`,
      providesTags: ['Chat']
    }),

    adminConversations: builder.query<ChatItemResponse, IAdminConversationPayload>({
      query: ({ user, receiver }) => receiver && `/chats/admin/${user}/${receiver}`,
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

export const {
  useFetchChatQuery,
  useAddToChatMutation,
  useRemoveFromChatMutation,
  useAdminChatsQuery,
  useAdminConversationsQuery
} = chatApi
