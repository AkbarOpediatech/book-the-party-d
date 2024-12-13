/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useAddToChatMutation, useFetchChatQuery } from '@/redux/features/chat/apiSlice'
import React, { useEffect, useState } from 'react'

const VendorChat: React.FC = () => {
  const { data: messages, refetch } = useFetchChatQuery()
  const [sendMessage] = useAddToChatMutation()
  const [input, setInput] = useState('')
  const [file, setFile] = useState<File | null>(null)

  const handleSend = async () => {
    if (input.trim() !== '' || file) {
      const formData = new FormData()
      formData.append('message', input)
      formData.append('user', '671e1293a93691a0b492bc9b') // Replace with actual user data
      formData.append('receiver', '671e315ed10e02c3ec3dacc3') // Replace with actual receiver data
      if (file) {
        formData.append('file', file)
      }

      await sendMessage(formData) // Send the FormData object
      setInput('')
      setFile(null)
      refetch()
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  useEffect(() => {
    console.log('messages', messages)
  }, [messages])

  return (
    <div className="flex h-full flex-col bg-white">
      {/* Chat Messages Section */}
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages?.data?.map((message: any) => (
          <div
            key={message.id}
            className={`flex ${message.user === '671e315ed10e02c3ec3dacc3' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs rounded-lg px-4 py-2 ${
                message.user === '671e315ed10e02c3ec3dacc3'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-black'
              }`}
            >
              {message.message}
              {message.file && (
                <div className="mt-2 cursor-pointer text-sm text-blue-600 underline">{message.file}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="flex items-center border-t p-4">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="mr-2 flex-1 rounded-lg border px-4 py-2 focus:outline-none"
          placeholder="Type your message..."
        />
        <input type="file" onChange={handleFileChange} className="mr-2" />
        <button
          onClick={handleSend}
          className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default VendorChat
