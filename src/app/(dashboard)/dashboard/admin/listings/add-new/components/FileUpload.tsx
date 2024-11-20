import Image from 'next/image'
import { useRef, useState } from 'react'
import upload from '/public/assets/upload.svg'

const FileUpload = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
    }
  }

  return (
    <div>
      <label htmlFor="file" className="mb-2 block text-clr-ab">
        Upload Service images/ Videos
      </label>

      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        accept=".svg, .png, .jpg, .gif, .mov, .mp4"
        onChange={handleFileChange}
      />

      <div
        onClick={() => fileInputRef.current?.click()}
        className="flex h-[228px] cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 font-inter text-gray-500"
      >
        {file ? (
          file.type.startsWith('image/') ? (
            <Image
              width={100}
              height={100}
              className="size-full object-cover"
              src={URL.createObjectURL(file)}
              alt="pic"
            />
          ) : file.type.startsWith('video/') ? (
            <video controls className="h-full w-full object-cover">
              <source src={URL.createObjectURL(file)} type={file.type} />
              Your browser does not support the video tag.
            </video>
          ) : (
            <p className="text-sm text-red-500">Unsupported file type</p>
          )
        ) : (
          <>
            <Image src={upload} alt="icon" />
            <p className="text-sm">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs">SVG, PNG, JPG, GIF or MOV (MAX. 800x400px)</p>
          </>
        )}
      </div>
    </div>
  )
}

export default FileUpload
