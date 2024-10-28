import type { Message } from '@/utils'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ArrowDownIcon, EllipsisVerticalIcon, Square2StackIcon, TrashIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import avatar from '/public/assets/avatar.jpeg'

interface ConversationProps {
  messages: Message[]
}

const Conversation: React.FC<ConversationProps> = ({ messages }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div
      ref={containerRef}
      className="no-scroll flex h-full flex-col gap-4 overflow-y-scroll border-t border-gray-200 p-4"
    >
      {messages.map(message => (
        <div
          key={message.id}
          className={`flex items-start gap-2.5 ${message.sender === 'user' ? 'justify-end' : ''}`}
        >
          <div className="size-8 overflow-hidden rounded-full">
            <Image className="object-cover" src={avatar} alt="User Avatar" />
          </div>
          <div className="w-full max-w-[316px]">
            <div className="mb-1 flex items-center gap-1.5 font-inter text-sm">
              <p className="text-gray-900">{message.sender === 'user' ? 'You' : 'Bot'}</p>
              <p className="text-gray-500">{message.timestamp}</p>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="rounded-[20px] bg-gray-100 p-4">
                {message.type === 'text' && typeof message.content === 'string' ? (
                  <p className="font-inter text-sm text-gray-900">{message.content}</p>
                ) : message.type === 'image' ? (
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(message.content) &&
                      message.content.map((url, index) => (
                        <div key={index} className="relative">
                          <Image
                            src={url}
                            alt="Sent Image"
                            width={80}
                            height={80}
                            className="flex-shrink-0 rounded-lg object-cover"
                          />
                          <a
                            href={url}
                            download
                            className="absolute bottom-0 right-0 rounded bg-blue-500 p-0.5 text-white"
                          >
                            <ArrowDownIcon className="size-3" />
                          </a>
                        </div>
                      ))}
                  </div>
                ) : message.type === 'file' ? (
                  <div className="flex items-center gap-2">
                    <p className="text-wrap">{(message.content as File).name}</p>

                    <a
                      href={URL.createObjectURL(message.content as File)}
                      download={(message.content as File).name}
                      className="rounded bg-blue-500 p-0.5 text-white"
                    >
                      <ArrowDownIcon className="size-3" />
                    </a>
                  </div>
                ) : (
                  <p className="text-red-500">Error: Invalid message type</p>
                )}
              </div>
              {message.sender === 'user' && (
                <Menu>
                  <MenuButton>
                    <EllipsisVerticalIcon className="size-4 fill-black/30" />
                  </MenuButton>

                  <MenuItems
                    anchor="bottom end"
                    className="w-36 origin-top-right rounded-xl border bg-white p-1 text-sm/6 text-black shadow-sm transition duration-100 ease-out focus:outline-none"
                  >
                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-black/10">
                        <TrashIcon className="size-4 fill-black/30" />
                        Delete
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-black/10">
                        <Square2StackIcon className="size-4 fill-black/30" />
                        Copy
                      </button>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Conversation
