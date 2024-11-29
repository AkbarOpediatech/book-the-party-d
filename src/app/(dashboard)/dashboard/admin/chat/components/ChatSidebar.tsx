import { type IChatData } from '@/utils'
import { formatDistanceToNow, parseISO } from 'date-fns'
import Image from 'next/image'
import React from 'react'

type IProps = {
  chatData: IChatData[]
  onChatSelect: (chat: IChatData) => void
}

const ChatSidebar: React.FC<IProps> = ({ chatData, onChatSelect }) => {
  return (
    <div className="p-5">
      <input
        className="mb-3 h-10 w-full rounded-lg border border-clr-ab/30 bg-icon-search bg-no-repeat px-3 py-2 pl-10"
        placeholder="Search Contact…"
        style={{ backgroundPosition: 'left 12px center' }}
      />

      <ul>
        {chatData.map((chat, index) => {
          const relativeTime = (timestamp: string): string => {
            const distance = formatDistanceToNow(parseISO(timestamp), { addSuffix: false })
            if (distance === 'less than a minute') {
              return 'Just now'
            }
            return distance
          }
          const relativeTimeResult = relativeTime(chat.createdAt)
          return (
            <li
              key={index}
              className="flex cursor-pointer items-center gap-4 py-3"
              onClick={() => onChatSelect(chat)}
            >
              <div className="relative">
                <div className="h-11 w-11 overflow-hidden rounded-full">
                  <Image width={44} height={44} src={chat.avatar} alt="avatar" />
                </div>
                {chat.status === 'active now' && (
                  <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-clr-16"></div>
                )}
              </div>

              <div className="w-full max-w-[150px]">
                <p className="flex w-full items-center justify-between text-sm font-semibold text-clr-36">
                  {chat.name} <span className="text-xs text-clr-ab">{relativeTimeResult}</span>
                </p>
                <p className="truncate text-sm font-semibold text-clr-36">{chat.message}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ChatSidebar
