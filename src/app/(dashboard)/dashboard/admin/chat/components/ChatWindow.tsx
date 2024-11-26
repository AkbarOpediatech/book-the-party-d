'use client'
import { useState } from 'react'
import ChatHead from './ChatHead'
import ChatPanel from './ChatPanel'
import VendorChatProfile from './VendorChatProfile'

function ChatWindow() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const handleProfileToggle = () => {
    setIsProfileOpen(!isProfileOpen)
  }

  return (
    <>
      <ChatHead onProfileClick={handleProfileToggle} />

      <div className="flex h-full w-full">
        <ChatPanel />

        {isProfileOpen === true && <VendorChatProfile />}
      </div>
    </>
  )
}

export default ChatWindow
