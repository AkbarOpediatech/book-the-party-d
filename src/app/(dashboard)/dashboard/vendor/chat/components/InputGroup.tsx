import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import { PaperClipIcon, PhotoIcon, XMarkIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import { useRef, useState } from 'react'

type InputGroupProps = {
  onSendMessage: (messageContent: string) => void
  onSendImage: (images: File[]) => void
  onSendFile: (file: File) => void
}

const InputGroup: React.FC<InputGroupProps> = ({ onSendMessage, onSendImage, onSendFile }) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)
  const [text, setText] = useState('')
  const [selectedImages, setSelectedImages] = useState<File[]>([])
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

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

    if (selectedFile) {
      onSendFile(selectedFile)
      setSelectedFile(null)
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      setSelectedImages(prev => [...prev, ...filesArray])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      setSelectedFile(filesArray[0])
    }
  }

  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index))
  }

  const removeFile = () => {
    setSelectedFile(null)
  }

  return (
    <div className="border-t border-gray-200">
      <textarea
        className="w-full resize-none overflow-y-auto border-none px-4 py-3 focus:outline-none"
        placeholder="Write a reply..."
        rows={3}
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={handleKeyPress}
      />

      {selectedImages.length > 0 && (
        <div className="flex flex-wrap gap-2 overflow-x-auto p-4">
          {selectedImages.map((image, index) => (
            <div key={index} className="relative">
              <Image
                src={URL.createObjectURL(image)}
                alt={`Selected ${index}`}
                className="size-20 rounded-lg object-cover"
              />
              <button
                type="button"
                className="absolute right-0 top-0 flex size-5 items-center justify-center rounded-full bg-red-500 p-1 text-xs text-white"
                onClick={() => removeImage(index)}
              >
                <XMarkIcon />
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedFile && (
        <div className="flex items-center justify-between p-4">
          <p className="text-sm text-gray-600">Selected file: {selectedFile.name}</p>
          <button
            type="button"
            className="ml-2 flex size-5 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-xs text-white"
            onClick={removeFile}
          >
            <XMarkIcon />
          </button>
        </div>
      )}

      <div className="flex items-center justify-between gap-4 border-t border-gray-200 px-4 py-3">
        <div className="flex items-center gap-4">
          <button type="button" onClick={() => fileInputRef.current?.click()}>
            <PaperClipIcon className="h-5 w-5 text-[#6B7280]" />
          </button>
          <button type="button" onClick={() => imageInputRef.current?.click()}>
            <PhotoIcon className="h-5 w-5 text-[#6B7280]" />
          </button>
          <input
            className="hidden"
            type="file"
            ref={fileInputRef}
            accept=".pdf,.doc,.docx,.ppt,.pptx,.txt"
            onChange={handleFileChange}
          />
          <input
            className="hidden"
            type="file"
            ref={imageInputRef}
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
        </div>
        <DashboardButton type="button" name="Send message" onClick={sendMessage} />
      </div>
    </div>
  )
}

export default InputGroup
