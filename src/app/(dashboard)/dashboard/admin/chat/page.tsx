'use client'
import TitleAndBreadCrumbs from '@/app/(dashboard)/components/TitleAndBreadCrumbs'
import type { IChatData } from '@/utils'
import { useState } from 'react'
import { chatData } from '../../../../../utils/data'
import ChatSidebar from './components/ChatSidebar'
import ChatWindow from './components/ChatWindow'

const VendorChat: React.FC = () => {
  // const [messages, setMessages] = useState<Message[]>([])
  const [selectedChat, setSelectedChat] = useState<IChatData>(chatData[0])

  // const onSendMessage = (messageContent: string) => {
  //   const newMessage: Message = {
  //     id: messages.length + 1,
  //     sender: 'user',
  //     content: messageContent,
  //     timestamp: new Date().toLocaleTimeString(),
  //     type: 'text'
  //   }
  //   setMessages(prevMessages => [...prevMessages, newMessage])
  // }

  // const onSendImage = (images: File[]) => {
  //   const imageUrls = images.map(image => URL.createObjectURL(image))

  //   const newMessage: Message = {
  //     id: messages.length + 1,
  //     sender: 'user',
  //     content: imageUrls,
  //     timestamp: new Date().toLocaleTimeString(),
  //     type: 'image'
  //   }

  //   setMessages(prevMessages => [...prevMessages, newMessage])
  // }

  // const onSendFile = (file: File) => {
  //   const newMessage: Message = {
  //     id: messages.length + 1,
  //     sender: 'user',
  //     content: file,
  //     timestamp: new Date().toLocaleTimeString(),
  //     type: 'file'
  //   }

  //   setMessages(prevMessages => [...prevMessages, newMessage])
  // }

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
