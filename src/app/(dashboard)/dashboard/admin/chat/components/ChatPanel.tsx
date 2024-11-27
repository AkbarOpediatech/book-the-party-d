import { cn, type IChatData } from '@/utils'
import Image from 'next/image'
import { FC } from 'react'

type IProps = {
  selectedChat: IChatData
}

const ChatPanel: FC<IProps> = ({ selectedChat }) => {
  return (
    <div className={'h-full w-full bg-white'}>
      <ul className="no-scroll space-y-6 overflow-y-scroll border-b p-4">
        {selectedChat.messages.map((message, index) => (
          <li key={index} className={cn('flex max-w-xs items-start gap-3', message.isSender && 'ml-auto')}>
            {!message.isSender && (
              <div className="avatar h-[30px] w-[30px] flex-shrink-0 overflow-hidden rounded-full">
                <Image width={30} height={30} src={selectedChat.avatar} alt="avatar" />
              </div>
            )}
            <div>
              <span
                className={cn('mb-2 block text-xs uppercase text-clr-81', message.isSender && 'text-end')}
              >
                {message.time}
              </span>
              <p className={`p-3 text-sm text-clr-36 ${message.isSender ? 'bg-[#F2F8FF]' : 'bg-[#F4F6F8]'}`}>
                {message.text}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div>
        <input type="text" className="w-full rounded p-2" placeholder="Type a message..." />
      </div>
    </div>
  )
}

export default ChatPanel
