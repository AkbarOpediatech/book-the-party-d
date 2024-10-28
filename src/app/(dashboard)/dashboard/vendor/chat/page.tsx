'use client'
import type { Message } from '@/utils'
import { useState } from 'react'
import ChatHeader from './components/ChatHeader'
import Conversation from './components/Conversation'
import InputGroup from './components/InputGroup'

const VendorChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([])

  const handleSendMessage = (messageContent: string) => {
    const newMessage: Message = {
      id: Date.now(),
      sender: 'user',
      content: messageContent,
      timestamp: new Date().toLocaleTimeString()
    }

    setMessages(prevMessages => [...prevMessages, newMessage])

    setTimeout(() => {
      const replyMessage: Message = {
        id: Date.now() + 1,
        sender: 'bot',
        content: "Here's an automated reply.",
        timestamp: new Date().toLocaleTimeString()
      }
      setMessages(prevMessages => [...prevMessages, replyMessage])
    }, 1000)
  }

  return (
    <div className="flex h-full flex-col justify-between bg-white">
      <ChatHeader />
      <Conversation messages={messages} />
      <InputGroup onSendMessage={handleSendMessage} />
    </div>
  )
}

export default VendorChat
