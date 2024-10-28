import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import { handleInputChange } from '@/components/inputHandlers'
import { PaperClipIcon, PhotoIcon } from '@heroicons/react/16/solid'
import { useRef, useState } from 'react'

interface InputGroupProps {
  onSendMessage: (messageContent: string) => void
  onSendImage: (images: File[]) => void
}

const InputGroup: React.FC<InputGroupProps> = ({ onSendMessage, onSendImage }) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [text, setText] = useState('')
  const [selectedImages, setSelectedImages] = useState<File[]>([])

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const sendMessage = () => {
    if (text.trim()) {
      onSendMessage(text.trim())
      setText('')
    }

    if (selectedImages.length > 0) {
      onSendImage(selectedImages)
      setSelectedImages([])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      setSelectedImages(prev => [...prev, ...filesArray])
    }
  }

  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="border-t border-gray-200">
      <textarea
        className="w-full resize-none overflow-y-auto border-none px-4 py-3 focus:outline-none"
        placeholder="Write a reply..."
        rows={3}
        value={text}
        onChange={e => handleInputChange(e, setText)}
        onKeyDown={handleKeyPress}
      />

      {selectedImages.length > 0 && (
        <div className="mb-2 flex gap-2 overflow-x-auto">
          {selectedImages.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={URL.createObjectURL(image)}
                alt={`Selected ${index}`}
                className="size-16 rounded-lg object-cover"
              />
              <button
                type="button"
                className="absolute right-0 top-0 flex size-5 items-center justify-center rounded-full bg-red-500 p-1 text-xs text-white"
                onClick={() => removeImage(index)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between gap-4 border-t border-gray-200 px-4 py-3">
        <div className="flex items-center gap-4">
          <button type="button">
            <PaperClipIcon className="h-5 w-5 text-[#6B7280]" />
          </button>
          <button type="button" onClick={() => fileInputRef.current?.click()}>
            <PhotoIcon className="h-5 w-5 text-[#6B7280]" />
          </button>
          <input
            className="hidden"
            type="file"
            ref={fileInputRef}
            accept="image/*"
            multiple
            onChange={handleFileChange}
          />
        </div>
        <DashboardButton type="button" name="Send message" onClick={sendMessage} />
      </div>
    </div>
  )
}

export default InputGroup
