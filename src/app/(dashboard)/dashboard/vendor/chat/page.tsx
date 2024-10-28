'use client'
import type { Message } from '@/utils'
import { useState } from 'react'
import ChatHeader from './components/ChatHeader'
import Conversation from './components/Conversation'
import InputGroup from './components/InputGroup'

const VendorChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([])

  const onSendMessage = (messageContent: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      sender: 'user', // Ensure this is strictly "user" | "bot"
      content: messageContent,
      timestamp: new Date().toLocaleTimeString(),
      type: 'text'
    }
    setMessages(prevMessages => [...prevMessages, newMessage])
  }

  const onSendImage = (images: File[]) => {
    const imageUrls = images.map(image => URL.createObjectURL(image))

    const newMessage: Message = {
      id: messages.length + 1, // Ensure unique ID
      sender: 'user',
      content: imageUrls, // Store URLs as an array
      timestamp: new Date().toLocaleTimeString(),
      type: 'image' // Specify type as 'image'
    }

    setMessages(prevMessages => [...prevMessages, newMessage])
  }
  return (
    <div className="flex h-full flex-col justify-between bg-white">
      <ChatHeader />
      <Conversation messages={messages} />
      <InputGroup onSendMessage={onSendMessage} onSendImage={onSendImage} />
    </div>
  )
}

export default VendorChat
