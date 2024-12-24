'use client'

import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import FormInput from '@/app/(dashboard)/components/FormInput'
import Loader from '@/app/(landing)/components/Loader/Loader'
import { useUpdateUserMutation, type IUser } from '@/redux/features/user/apiSlice'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

type IProps = {
  showInfoEdit: boolean
  setShowInfoEdit: (showIndex: boolean) => void
  userInfo: IUser | undefined
}

const InfoEdit: React.FC<IProps> = ({ setShowInfoEdit, showInfoEdit, userInfo }) => {
  const [updateUser, { isLoading, isError }] = useUpdateUserMutation()

  const { data: session, update } = useSession() // Access session and update method
  const user = session?.user

  const [formData, setFormData] = useState({
    name: userInfo?.name || 'Dihan Opedia',
    about: userInfo?.about || 'Your About',
    email: userInfo?.email || user?.email || '',
    phone: userInfo?.phone || '0123456789',
    language: userInfo?.languages || 'Bangla',
    specialized: userInfo?.specialized || '',
    location: userInfo?.location || 'Your Location'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!userInfo) {
      console.error('User info is undefined')
      return
    }

    console.log('Service added response:', userInfo._id)

    try {
      const formDataToSubmit = new FormData()
      formDataToSubmit.append('name', formData.name)
      formDataToSubmit.append('about', formData.about)
      formDataToSubmit.append('email', userInfo.email || formData.email)
      formDataToSubmit.append('phone', formData.phone)
      formDataToSubmit.append('language', formData.language.toString())
      formDataToSubmit.append('specialized', formData.specialized.toString())
      formDataToSubmit.append('location', formData.location)

      const response = await updateUser({ id: userInfo._id, formData: formDataToSubmit }).unwrap()
      setShowInfoEdit(false)
      await update({
        user: {
          ...session?.user,
          name: response.name,
          email: response.email,
          avatar: response.avatar
        }
      })
    } catch (error) {
      console.error('Error updating user:', error)
    }
  }

  return (
    <Dialog
      as="div"
      open={showInfoEdit}
      className="relative z-10 focus:outline-none"
      onClose={() => setShowInfoEdit(false)}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow">
            <DialogTitle as="h3" className="text-center font-medium">
              Update vendor Profile details
            </DialogTitle>
            <form onSubmit={handleSubmit}>
              <FormInput
                type="text"
                name="name"
                placeholder="Enter Full Name"
                value={formData.name}
                onChange={handleChange}
                customClass="mb-4"
              />
              <FormInput
                type="textarea"
                name="about"
                placeholder="Description"
                value={formData.about}
                onChange={handleChange}
                customClass="mb-4"
              />
              <FormInput
                type="text"
                name="location"
                placeholder="Enter Location"
                value={formData.location}
                onChange={handleChange}
                customClass="mb-4"
              />
              <FormInput
                type="text"
                name="specialized"
                placeholder="Specialized In"
                value={formData.specialized}
                onChange={handleChange}
                customClass="mb-4"
              />
              <FormInput
                type="email"
                name="email"
                placeholder="Email Address"
                value={userInfo?.email}
                onChange={handleChange}
                customClass="mb-4"
                readOnly={true}
              />
              <FormInput
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                customClass="mb-4"
              />
              <FormInput
                type="select"
                name="language"
                placeholder="Language"
                value={formData.language}
                options={['Bangla', 'English', 'Spanish', 'French']}
                onChange={handleChange}
                customClass="mb-4"
              />

              <div className="mt-5 flex items-center justify-center gap-4">
                <DashboardButton name="Update" type="submit" />
                <DashboardButton name="Cancel" onClick={() => setShowInfoEdit(false)} type="button" />
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
  )
}

export default InfoEdit
