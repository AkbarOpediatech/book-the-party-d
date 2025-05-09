import Image from 'next/image'
import { useRef, useState } from 'react'
import Swal from 'sweetalert2'
import upload from '/public/assets/upload.svg'

// Define the component props
type IProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFileUpload?: (formData: FormData) => void
}

const FileUpload: React.FC<IProps> = ({ onFileUpload, onChange }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = (e.target as HTMLInputElement).files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      if (onChange) {
        onChange(e)
      }
    }
  }

  const handleUpload = () => {
    if (!file) {
      Swal.fire({
        icon: 'warning',
        title: 'No File Selected',
        text: 'Please select a file before uploading.',
        confirmButtonText: 'Okay'
      })
      return
    }

    const formData = new FormData()
    formData.append('file', file)

    // Pass the formData to the provided onFileUpload handler
    if (onFileUpload) {
      onFileUpload(formData)
    } else {
      console.warn('No onFileUpload handler provided.')
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
        accept=".svg, .png, .jpg, .jpeg, .gif, .mov, .mp4"
        onChange={handleFileChange}
      />

      <div
        onClick={() => fileInputRef.current?.click()}
        className="font-inter flex h-[228px] cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 text-gray-500"
      >
        {file ? (
          file.type.startsWith('image/') ? (
            <Image
              width={100}
              height={100}
              className="size-full object-cover"
              src={URL.createObjectURL(file) as string}
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

      {/* <button
        type="button"
        onClick={handleUpload}
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Upload
      </button> */}
    </div>
  )
}

export default FileUpload
