'use client'
import TitleAndBreadCrumbs from '@/app/(dashboard)/components/TitleAndBreadCrumbs'
import type { IAdminChat } from '@/utils'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import { useEffect, useState } from 'react'

import ChatSidebar from './components/ChatSidebar'
import ChatWindow from './components/ChatWindow'
import { useAdminChatsQuery } from '@/redux/features/chat/apiSlice'
import { useSession } from 'next-auth/react'

const VendorChat: React.FC = () => {
  const { data: session } = useSession()
  const [selectedChat, setSelectedChat] = useState<IAdminChat>({
    _id: '',
    user: {
      _id: '',
      name: '',
      avatar: ''
    },
    receiver: {
      _id: '',
      name: '',
      avatar: ''
    },
    message: '',
    receiverInfo: {
      _id: '',
      name: '',
      avatar: '',
      location: '',
      email: '',
      type: '',
      phone: ''
    },
    createdAt: ''
  })
  const [isChatbarOpen, setChatbarOpen] = useState(false)

  const handleChatSelect = (chat: IAdminChat) => {
    setSelectedChat(chat)
  }

  // Assuming useAdminChatsQuery is a hook for fetching data
  const { data } = useAdminChatsQuery(session?.user?.id as string)

  // State to store the chats
  const [chats, setChats] = useState<IAdminChat[]>([])

  // useEffect to update chats when data changes
  useEffect(() => {
    if (data?.data) {
      setChats([...data.data])
    }
  }, [data])

  return (
    <>
      <TitleAndBreadCrumbs title={'Chat'} menuitem={'Dashboard'} breadcrumbs={'Chat'} className="mb-10" />
      <div className="rounded-2xl bg-white shadow-one" style={{ height: 'calc(100vh - 240px)' }}>
        <div className="flex h-full md:flex-row">
          <div
            className={`bg-clr-fa fixed left-0 z-40 h-full w-full max-w-[300px] overflow-y-auto bg-white p-3 transition-transform duration-300 ${
              isChatbarOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:relative lg:translate-x-0 lg:border-r`}
          >
            <ChatSidebar
              chatData={chats || []}
              onChatSelect={handleChatSelect}
              closeSidebar={() => setChatbarOpen(false)}
            />
          </div>
          <button
            className="text-clr-80 border-r p-2 md:block lg:hidden"
            onClick={() => setChatbarOpen(!isChatbarOpen)}
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <div className="flex w-full flex-col">
            <ChatWindow selectedChat={selectedChat} />
          </div>
        </div>
      </div>
    </>
  )
}

export default VendorChat
