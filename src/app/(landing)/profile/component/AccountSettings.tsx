import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import FormInput from '@/app/(dashboard)/components/FormInput'
import type { IUser } from '@/redux/features/user/apiSlice'
import { useFetchUserByIdQuery, useUpdateUserMutation } from '@/redux/features/user/apiSlice'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2'
import CustomBtn from '../../components/CustomBtn'
import Loader from '../../components/Loader/Loader'
import Avatar from './Avatar'
import ICUser from '/public/assets/ic-user.svg'

type IProps = {
  data: IUser | undefined
}

const AccountSettings: React.FC<IProps> = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false)
  const { data: session, update } = useSession()
  const [file, setFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const userId = session?.user?.id ?? ''
  const { data: response, isLoading, isError } = useFetchUserByIdQuery(userId, { skip: !userId })
  const userInfo = response?.data

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: ''
  })

  useEffect(() => {
    if (userInfo) {
      setFormData({
        name: userInfo.name || '',
        email: userInfo.email || '',
        phone: userInfo.phone || '00000000',
        location: userInfo.location || 'Location'
      })
    }
  }, [userInfo])

  const [updateUser] = useUpdateUserMutation()

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    if (e.target instanceof HTMLInputElement && e.target.files) {
      const selectedFile = e.target.files[0]
      if (selectedFile) {
        setFile(selectedFile)
      }
    }
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!userInfo) {
      console.error('User info is undefined')
      return
    }

    try {
      const formDataToSubmit = new FormData()
      formDataToSubmit.append('avatar', file || userInfo.avatar || '')
      formDataToSubmit.append('name', formData.name)
      formDataToSubmit.append('email', formData.email)
      formDataToSubmit.append('phone', formData.phone)
      formDataToSubmit.append('location', formData.location)

      const response = await updateUser({ id: userInfo._id, formData: formDataToSubmit }).unwrap()
      await update({
        user: {
          ...session?.user,
          name: response.name,
          email: response.email,
          avatar: response.avatar
        }
      })

      Swal.fire({
        title: 'Success!',
        text: 'Profile updated successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      })
      setIsEditing(false)
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'An error occurred while updating the profile. Please try again.',
        icon: 'error',
        confirmButtonText: 'Retry'
      })
      setIsEditing(false)
      console.error('Error updating user:', error)
    }
  }

  return (
    <>
      <form>
        <Avatar onData={data} isEditing={isEditing} />
        <div className="mb-4">
          <h2 className="text-xl font-bold md:text-2xl">Customer Information</h2>
        </div>

        <ul className="mb-12 grid gap-4 md:grid-cols-2 md:gap-6">
          {[
            { label: 'Name', value: userInfo?.name || 'Your Name' },
            { label: 'Email', value: userInfo?.email || 'example@example.com' },
            { label: 'Role', value: userInfo?.role || 'Customer' },
            { label: 'Phone Number', value: userInfo?.phone || '+0961245795' },
            { label: 'Status', value: userInfo?.status || 'Pending' }
          ].map(({ label, value }, index) => (
            <li key={index} className="col-span-2 md:col-span-1">
              <label>
                <p className="mb-2 text-base text-clr-81 md:mb-4 md:text-xl">{label}</p>
                <p className="text-base font-semibold text-clr-27 md:text-xl">{value}</p>
              </label>
            </li>
          ))}
        </ul>

        <CustomBtn btnType="button" btnName="Edit Profile" className="w-full" onClickFunc={handleEditClick} />
      </form>

      {isEditing && (
        <Dialog
          as="div"
          open={isEditing}
          className="relative z-10 focus:outline-none"
          onClose={() => setIsEditing(false)}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow">
                <DialogTitle as="h3" className="mb-5 text-center font-medium">
                  Update Customer Profile Details
                </DialogTitle>
                <form onSubmit={handleSubmit}>
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    accept=".svg, .png, .jpg, .gif"
                    onChange={handleChange}
                  />
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="font-inter flex h-[228px] cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 text-gray-500"
                  >
                    {file ? (
                      <Image
                        width={100}
                        height={100}
                        className="size-full object-cover"
                        src={URL.createObjectURL(file)}
                        alt="Profile Preview"
                      />
                    ) : (
                      <>
                        <Image width={40} height={40} src={ICUser} alt="icon" />
                        <p className="text-sm">Change profile picture</p>
                      </>
                    )}
                  </div>

                  {[
                    { name: 'name', placeholder: 'Enter Full Name', value: formData.name },
                    { name: 'location', placeholder: 'Enter Location', value: formData.location },
                    { name: 'email', placeholder: 'Email Address', value: formData.email, readOnly: true },
                    { name: 'phone', placeholder: 'Phone Number', value: formData.phone }
                  ].map(({ name, placeholder, value, readOnly }, index) => (
                    <FormInput
                      key={index}
                      type={name === 'email' ? 'email' : 'text'}
                      name={name}
                      placeholder={placeholder}
                      value={value}
                      onChange={handleChange}
                      customClass="mb-4"
                      readOnly={readOnly}
                    />
                  ))}

                  <div className="mt-5 flex items-center justify-center gap-4">
                    <DashboardButton name="Update" type="submit" />
                    <DashboardButton name="Cancel" onClick={() => setIsEditing(false)} type="button" />
                  </div>
                </form>
                {isLoading && (
                  <p className="mt-2 text-center">
                    <Loader type="loading" />
                  </p>
                )}
                {isError && <p className="mt-2 text-center text-red-500">Failed to update. Try again.</p>}
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      )}
    </>
  )
}

export default AccountSettings
