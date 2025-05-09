import { ChatItem, cn, IAdminChat } from '@/utils'
import moment from 'moment'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { FC, useState } from 'react'
import Emoji from '/public/assets/emoji.png'
import Send from '/public/assets/send.png'

type IProps = {
  selectedChat: IAdminChat
  messages: ChatItem[]
  sendMessage: (message: string) => void
}

const ChatPanel: FC<IProps> = ({ selectedChat, messages, sendMessage }) => {
  const { data: session } = useSession()
  const [input, setInput] = useState('')

  const handleSend = async () => {
    if (input.trim() !== '') {
      await sendMessage(input)
      setInput('')
    }
  }

  return (
    <div className={'flex h-full w-full flex-col justify-end bg-white'}>
      <ul className="no-scroll space-y-6 overflow-y-scroll border-b p-4">
        {messages?.map((message, index) => (
          <li
            key={index}
            className={cn(
              'flex max-w-xs items-start gap-3',
              message?.user === session?.user?.id && 'ml-auto w-full'
            )}
          >
            {message?.user !== session?.user?.id && (
              <div className="avatar h-[30px] w-[30px] flex-shrink-0 overflow-hidden rounded-full">
                <Image width={30} height={30} src={selectedChat?.receiverInfo?.avatar} alt="avatar" />
              </div>
            )}
            <div className="w-full">
              <span
                className={cn(
                  'mb-2 block text-xs uppercase text-clr-81',
                  message?.user === session?.user?.id && 'text-end'
                )}
              >
                {moment(message?.createdAt).format('hh:mm A')}
              </span>
              <p
                className={`p-3 text-sm text-clr-36 ${message?.user === session?.user?.id ? 'bg-[#F2F8FF]' : 'bg-[#F4F6F8]'}`}
              >
                {message?.message}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between">
        <button className="flex h-14 w-14 items-center justify-center">
          <Image src={Emoji} alt="emoji" />
        </button>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="h-14 w-full rounded p-2"
          placeholder="Type a message..."
        />
        <button onClick={() => handleSend()} className="flex h-14 w-14 items-center justify-center border-l">
          <Image src={Send} alt="emoji" />
        </button>
      </div>
    </div>
  )
}

export default ChatPanel
