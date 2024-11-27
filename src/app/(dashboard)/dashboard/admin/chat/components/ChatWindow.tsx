'use client'
import type { IChatData } from '@/utils'
import { useState } from 'react'
import ChatHead from './ChatHead'
import ChatPanel from './ChatPanel'
import VendorChatProfile from './VendorChatProfile'

type IProps = {
  selectedChat: IChatData
}

const ChatWindow: React.FC<IProps> = ({ selectedChat }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const handleProfileToggle = () => {
    setIsProfileOpen(!isProfileOpen)
  }

  return (
    <>
      <ChatHead selectedChat={selectedChat} onProfileClick={handleProfileToggle} />

      <div className="flex h-full w-full">
        <ChatPanel selectedChat={selectedChat} />

        {isProfileOpen === true && <VendorChatProfile selectedChat={selectedChat} />}
      </div>
    </>
  )
}

export default ChatWindow
