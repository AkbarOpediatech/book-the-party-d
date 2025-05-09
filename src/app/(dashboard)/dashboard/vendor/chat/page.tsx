/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useAddToChatMutation, useFetchChatQuery } from '@/redux/features/chat/apiSlice'
import { ADMIN_ID } from '@/utils/config'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const VendorChat: React.FC = () => {
  const { data: messages, refetch } = useFetchChatQuery(ADMIN_ID as string)
  const [sendMessage] = useAddToChatMutation()
  const [input, setInput] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const { data: session } = useSession()

  const handleSend = async () => {
    if (ADMIN_ID && session?.user?.id) {
      if (input.trim() !== '' || file) {
        const formData = new FormData()
        formData.append('message', input)
        formData.append('user', session?.user?.id) // Replace with actual user data
        formData.append('receiver', ADMIN_ID) // Replace with actual receiver data
        if (file) {
          formData.append('file', file)
        }

        await sendMessage(formData) // Send the FormData object
        setInput('')
        setFile(null)
        refetch()
      }
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  useEffect(() => {}, [messages])

  return (
    <div className="flex h-full flex-col bg-white">
      {/* Chat Messages Section */}
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages?.data?.map((message: any) => (
          <div
            key={message.id}
            className={`flex ${message.user === session?.user?.id ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`w-fit max-w-xs rounded-lg px-4 py-2 ${
                message.user === session?.user?.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
              }`}
            >
              {message.fileUrl && message.fileType?.startsWith('image/') && (
                <img
                  src={message.fileUrl}
                  alt="Uploaded file"
                  className="w-fit cursor-pointer rounded-lg"
                  style={{
                    maxWidth: '70%',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              )}
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
