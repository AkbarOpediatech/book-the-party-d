'use client'
import TitleAndBreadCrumbs from '@/app/(dashboard)/components/TitleAndBreadCrumbs'
import type { IChatData } from '@/utils'
import { useState } from 'react'
import { chatData } from '../../../../../utils/data'
import ChatSidebar from './components/ChatSidebar'
import ChatWindow from './components/ChatWindow'

const VendorChat: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<IChatData>(chatData[0])

  const handleChatSelect = (chat: IChatData) => {
    setSelectedChat(chat)
  }
  return (
    <>
      <TitleAndBreadCrumbs title={'Chat'} menuitem={'Dashboard'} breadcrumbs={'Chat'} className="mb-10" />
      <div className="rounded-2xl bg-white shadow-one" style={{ height: 'calc(100vh - 240px)' }}>
        <div className="flex h-full">
          <div className="h-full w-full max-w-[300px] overflow-hidden border-r">
            <ChatSidebar chatData={chatData} onChatSelect={handleChatSelect} />
          </div>
          <div className="flex w-full flex-col">
            <ChatWindow selectedChat={selectedChat} />
          </div>
        </div>
      </div>
    </>
  )
}

export default VendorChat
