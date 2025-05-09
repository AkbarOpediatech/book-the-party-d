'use client'
import type { IAdminChat, IChatData } from '@/utils'
import { useState } from 'react'
import ChatHead from './ChatHead'
import ChatPanel from './ChatPanel'
import VendorChatProfile from './VendorChatProfile'
import {
  useAddToChatMutation,
  useAdminConversationsQuery,
  useFetchChatQuery
} from '@/redux/features/chat/apiSlice'
import { useSession } from 'next-auth/react'

type IProps = {
  selectedChat: IAdminChat
}

const ChatWindow: React.FC<IProps> = ({ selectedChat }) => {
  const { data: session } = useSession()
  const { data, refetch } = useAdminConversationsQuery({
    user: session?.user?.id as string,
    receiver: selectedChat?.receiverInfo?._id
  })
  const [sendMessage] = useAddToChatMutation()
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const handleProfileToggle = () => {
    setIsProfileOpen(!isProfileOpen)
  }

  const handleSend = async (input: string) => {
    if (selectedChat?.receiverInfo?._id && session?.user?.id) {
      if (input.trim() !== '') {
        const formData = new FormData()
        formData.append('message', input)
        formData.append('user', session?.user?.id) // Replace with actual user data
        formData.append('receiver', selectedChat?.receiverInfo?._id) // Replace with actual receiver data

        await sendMessage(formData)
        refetch()
      }
    }
  }

  return (
    <>
      {selectedChat?._id && <ChatHead selectedChat={selectedChat} onProfileClick={handleProfileToggle} />}

      <div className="flex h-full w-full">
        <ChatPanel
          selectedChat={selectedChat}
          messages={data?.data || []}
          sendMessage={(input: string) => handleSend(input)}
        />

        {isProfileOpen === true && <VendorChatProfile selectedChat={selectedChat} />}
      </div>
    </>
  )
}

export default ChatWindow
