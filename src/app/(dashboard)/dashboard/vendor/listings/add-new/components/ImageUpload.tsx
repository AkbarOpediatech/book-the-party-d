import { useState } from 'react'
import Image from 'next/image'

interface ImageUploadProps {
  onChange: (file: File | null) => void
  onUpload: (file: File | null) => void;
  maxSize?: number
}

export default function ImageUpload({ onUpload, maxSize = 2 }: ImageUploadProps) {
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleFileChange = (selectedFile: File | null) => {
    if (!selectedFile) return;

    const allowedTypes = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/jpg'];
    if (!allowedTypes.includes(selectedFile.type)) {
      setError('Only SVG, PNG, JPG, and JPEG files are allowed');
      setFile(null);
      onUpload(null);
      return;
    }

    if (selectedFile.size > maxSize * 1024 * 1024) {
      setError(`File size must be less than ${maxSize}MB`);
      setFile(null);
      onUpload(null);
      return;
    }

    setFile(selectedFile);
    setError(null);
    onUpload(selectedFile);
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) handleFileChange(droppedFile)
  }

  return (
    <div className="w-full">
      <input
        type="file"
        id="file-upload"
        accept=".svg,.png,.jpg,.jpeg"
        onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
        className="hidden"
      />
      <label
        htmlFor="file-upload"
        className={`relative flex min-h-[200px] w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed transition-colors
          ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
          ${file ? 'p-0' : 'p-6'}`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {file ? (
          <Image
            src={URL.createObjectURL(file)}
            alt="Uploaded preview"
            fill
            className="rounded-lg object-cover"
          />
        ) : (
          <div className="flex flex-col items-center text-center">
            <div className="mb-2 rounded-full bg-gray-100 p-2">
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <p className="mb-1 text-sm font-medium text-gray-700">Select Files to Upload</p>
            <p className="text-xs text-gray-500">or Drag and Drop, Copy and Paste Files</p>
          </div>
        )}
      </label>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  )
}
