'use client'
import type { IUser } from '@/redux/features/user/apiSlice'
import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'
import AvatarImage from '/public/assets/avatar.jpeg'

type IProps = {
  isEditing: boolean
  onData: IUser | undefined
}

const Avatar: React.FC<IProps> = ({ onData }) => {
  const [avatar, setAvatar] = useState<string>(AvatarImage.src)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const newAvatar = URL.createObjectURL(e.target.files[0])
      setAvatar(newAvatar)
    }
  }, [])

  const handleCameraClick = useCallback(() => {
    fileInputRef.current?.click()
  }, [])

  return (
    <div className="mb-5 flex flex-col flex-wrap items-center gap-5 md:mb-12 md:gap-6 lg:flex-row">
      <div className="relative">
        <div className="h-[100px] w-[100px] overflow-hidden rounded-full md:mb-0 md:h-[200px] md:w-[200px]">
          <Image width={200} height={200} src={onData?.avatar || avatar} alt="avatar" priority />

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
      </div>

      <div className="identity text-center lg:text-left">
        <h4 className="text-3xl font-bold text-clr-27 md:mb-4 md:text-[42px]">
          {onData?.name || 'Loading...'}
        </h4>
        <p className="text-lg text-clr-81 md:text-[32px]">{onData?.email || 'Loading...'}</p>
      </div>
    </div>
  )
}

export default Avatar
