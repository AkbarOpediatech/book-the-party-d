'use client'

import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import FormInput from '@/app/(dashboard)/components/FormInput'
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
    description: userInfo?.about || 'fsd f',
    email: userInfo?.email || user?.email,
    tel: userInfo?.phone || '',
    language: userInfo?.languages || 'Bangla'
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

    console.log('Service added response:', formData)

    try {
      const response = await updateUser(formData).unwrap()
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
      console.log('Error')
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
                value={formData.description}
                onChange={handleChange}
                customClass="mb-4"
              />
              {/* <FormInput
                type="text"
                name="location"
                placeholder="Location"
                // value={formData.}
                onChange={handleChange}
                customClass="mb-4"
              /> */}
              <FormInput
                type="text"
                name="specialized"
                placeholder="Specialized in"
                // value={formData.specialized}
                onChange={handleChange}
                customClass="mb-4"
              />
              <FormInput
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                customClass="mb-4"
              />
              <FormInput
                type="tel"
                name="tel"
                placeholder="Phone Number"
                value={formData.tel}
                onChange={handleChange}
                customClass="mb-4"
              />
              <FormInput
                type="select"
                name="language"
                placeholder="Language"
                // value={formData.language}
                options={['Bangla', 'English', 'Spanish', 'French']}
                onChange={handleChange}
                customClass="mb-4"
              />

              <div className="mt-5 flex items-center justify-center gap-4">
                <DashboardButton name="Update" type="submit" />
                <DashboardButton name="Cancel" onClick={() => setShowInfoEdit(false)} type="button" />
              </div>
            </form>
            {isLoading && <p className="mt-2 text-center">Updating...</p>}
            {isError && <p className="mt-2 text-center text-red-500">Failed to update. Try again.</p>}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default InfoEdit
