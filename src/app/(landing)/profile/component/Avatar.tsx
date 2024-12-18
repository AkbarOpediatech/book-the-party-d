'use client'
import { CameraIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'
import AvatarImage from '/public/assets/avatar.jpeg'

type PersonalData = {
  label: string
  value: string
}

type IProps = {
  isEditing: boolean
  personalData: PersonalData[]
}

const Avatar: React.FC<IProps> = ({ isEditing, personalData }) => {
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
          {isEditing ? (
            <div onClick={handleCameraClick} className="cursor-pointer">
              <Image width={200} height={200} src={avatar} alt="avatar" priority />
            </div>
          ) : (
            <Image width={200} height={200} src={avatar} alt="avatar" priority />
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
        {isEditing && (
          <button
            onClick={handleCameraClick}
            type="button"
            className="absolute bottom-[0px] right-1 z-20 rounded-full bg-white p-2"
          >
            <CameraIcon className="size-8 cursor-pointer fill-purple-700 stroke-purple-700 text-3xl" />
          </button>
        )}
      </div>

      <div className="identity text-center lg:text-left">
        {!isEditing && (
          <>
            <h4 className="text-3xl font-bold text-clr-27 md:mb-4 md:text-[42px]">Justin Bulbul</h4>
            <p className="text-lg text-clr-81 md:text-[32px]">justinbulbul@gmail.com</p>
          </>
        )}
      </div>
    </div>
  )
}

export default Avatar
