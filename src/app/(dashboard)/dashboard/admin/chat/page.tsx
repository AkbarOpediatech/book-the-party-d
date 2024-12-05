'use client'
import TitleAndBreadCrumbs from '@/app/(dashboard)/components/TitleAndBreadCrumbs'
import type { IChatData } from '@/utils'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import { chatData } from '../../../../../utils/data'
import ChatSidebar from './components/ChatSidebar'
import ChatWindow from './components/ChatWindow'

const VendorChat: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<IChatData>(chatData[0])
  const [isChatbarOpen, setChatbarOpen] = useState(false)

  const handleChatSelect = (chat: IChatData) => {
    setSelectedChat(chat)
  }
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
              chatData={chatData}
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
