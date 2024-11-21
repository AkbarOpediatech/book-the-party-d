'use client'
import { CameraIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import { useState } from 'react'
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
  const [avatar, setAvatar] = useState<any>(AvatarImage)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const newAvatar = URL.createObjectURL(e.target.files[0])
      setAvatar(newAvatar)
    }
  }

  return (
    <div className="mb-5 flex flex-wrap items-center gap-5 md:mb-12 md:gap-6">
      <div className="relative">
        <div className="h-[100px] w-[100px] overflow-hidden rounded-full md:mb-0 md:h-[200px] md:w-[200px]">
          <Image width={200} height={200} src={avatar} alt="avatar" />
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
            />
          )}
        </div>
        {isEditing && (
          <div
            onChange={handleImageChange}
            className="absolute bottom-[0px] right-1 z-20 cursor-pointer rounded-full bg-white p-2"
          >
            <CameraIcon className="size-8 cursor-pointer fill-purple-700 stroke-purple-700 text-3xl" />
          </div>
        )}
      </div>

      <div className="identity">
        {!isEditing && (
          <>
            <h4 className="text-3xl font-bold text-clr-27 md:mb-4 md:text-[42px]">{personalData[0].value}</h4>
            <p className="text-lg text-clr-81 md:text-[32px]">{personalData[1].value}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default Avatar
