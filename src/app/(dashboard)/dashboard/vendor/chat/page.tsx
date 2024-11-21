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
      sender: 'user',
      content: messageContent,
      timestamp: new Date().toLocaleTimeString(),
      type: 'text'
    }
    setMessages(prevMessages => [...prevMessages, newMessage])
    triggerAutoReply()
  }

  const onSendImage = (images: File[]) => {
    const imageUrls = images.map(image => URL.createObjectURL(image))

    const newMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      content: imageUrls,
      timestamp: new Date().toLocaleTimeString(),
      type: 'image'
    }

    setMessages(prevMessages => [...prevMessages, newMessage])
    triggerAutoReply()
  }

  const onSendFile = (file: File) => {
    const newMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      content: file,
      timestamp: new Date().toLocaleTimeString(),
      type: 'file'
    }

    setMessages(prevMessages => [...prevMessages, newMessage])
    triggerAutoReply()
  }

  const triggerAutoReply = () => {
    setTimeout(() => {
      const botReply: Message = {
        id: messages.length + 1,
        sender: 'bot',
        content: 'Thank you for your message! We will get back to you shortly.',
        timestamp: new Date().toLocaleTimeString(),
        type: 'text'
      }
      setMessages(prevMessages => [...prevMessages, botReply])
    }, 1000) // 1-second delay
  }

  return (
    <div className="flex h-full flex-col justify-between bg-white">
      <ChatHeader />
      <Conversation messages={messages} />
      <InputGroup onSendMessage={onSendMessage} onSendImage={onSendImage} onSendFile={onSendFile} />
    </div>
  )
}

export default VendorChat
