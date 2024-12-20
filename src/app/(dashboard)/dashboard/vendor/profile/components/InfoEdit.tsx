'use client'

import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import FormInput from '@/app/(dashboard)/components/FormInput'
import Loader from '@/app/(landing)/components/Loader/Loader'
import { useUpdateUserMutation, type IUser } from '@/redux/features/user/apiSlice'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

type IProps = {
  showInfoEdit: boolean
  setShowInfoEdit: (showIndex: boolean) => void
  userInfo: IUser | undefined
}

const InfoEdit: React.FC<IProps> = ({ setShowInfoEdit, showInfoEdit, userInfo }) => {
  const [updateUser, { isLoading, isError }] = useUpdateUserMutation()

  // State for form data
  const [formData, setFormData] = useState({
    fullName: userInfo?.name || '',
    description: userInfo?.about || '',
    // location: userInfo?. || '',
    specialized: userInfo?.specialized || '',
    email: userInfo?.email || '',
    tel: userInfo?.phone || '',
    language: userInfo?.languages || 'Bangla'
  })

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!userInfo) {
      console.error('User info is undefined')
      return
    }

    try {
      const updatedUserData = {
        ...formData,
        specialized: Array.isArray(formData.specialized) ? formData.specialized : [formData.specialized]
      }
      await updateUser({ _id: userInfo._id, ...updatedUserData }).unwrap()
      setShowInfoEdit(false) // Close the dialog box
    } catch (error) {
      console.error('Failed to update user:', error)
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
              Update Your Profile
            </DialogTitle>
            <form onSubmit={handleSubmit}>
              <FormInput
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={handleChange}
                customClass="mb-4"
              />
              <FormInput
                type="textarea"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                customClass="mb-4"
              />
              <FormInput
                type="text"
                name="location"
                placeholder="Location"
                // value={formData.}
                onChange={handleChange}
                customClass="mb-4"
              />
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
            {isLoading && <p className="mt-2 text-center"><Loader type='loading'/></p>}
            {isError && <p className="mt-2 text-center text-red-500">Failed to update. Try again.</p>}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default InfoEdit
