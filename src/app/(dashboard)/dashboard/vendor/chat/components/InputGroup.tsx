import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import { PaperClipIcon, PhotoIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

interface InputGroupProps {
  onSendMessage: (messageContent: string) => void
}

const InputGroup: React.FC<InputGroupProps> = ({ onSendMessage }) => {
  const [text, setText] = useState('')

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const sendMessage = () => {
    if (text.trim()) {
      onSendMessage(text.trim())
      setText('')
    }
  }

  return (
    <div className="border-t border-gray-200">
      <textarea
        className="w-full resize-none overflow-y-auto border-none px-4 py-3 focus:outline-none"
        placeholder="Write a reply..."
        rows={3}
        value={text}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />

      <div className="flex items-center justify-between gap-4 border-t border-gray-200 px-4 py-3">
        <div className="flex items-center gap-4">
          <button>
            <PaperClipIcon className="h-5 w-5 text-[#6B7280]" />
          </button>
          <button>
            <PhotoIcon className="h-5 w-5 text-[#6B7280]" />
          </button>
        </div>
        <DashboardButton type="button" name="Send message" onClick={sendMessage} />
      </div>
    </div>
  )
}

export default InputGroup
