import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import FullPageLoader from '@/app/(landing)/components/Loader/FullPageLoader'
import { useUpdateUserMutation, type IUser } from '@/redux/features/user/apiSlice'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { Session } from 'next-auth'
import Image from 'next/image'
import { useRef, useState } from 'react'
import Swal from 'sweetalert2'
import ICUser from '/public/assets/ic-user.svg'
import { getSession } from 'next-auth/react'

interface UserResponse {
  id: string
  email: string
  name: string
  role: string
  avatar: string
  accessToken: string
}

interface UpdateUserResponse {
  user: UserResponse
}

type IProps = {
  showProfileEdit: boolean
  setShowProfileEdit: (showIndex: boolean) => void
  data: IUser | undefined
}

const ProfileEdit: React.FC<IProps> = ({ setShowProfileEdit, showProfileEdit, data }) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)
  const [ProfileformData, setFormData] = useState({})

  const [updateUser] = useUpdateUserMutation()
  const [loading, setLoading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
    }
  }

  const handleInputChange = (name: string, value: string) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const updateProfileHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()

    if (file) {
      formData.append('avatar', file)
    }

    try {
      // Update the user profile on the server
      const response = await updateUser({ id: data?._id, formData }).unwrap()

      // Retrieve the current session
      const currentSession = (await getSession()) as Session

      if (!currentSession?.user) {
        throw new Error('No session found.')
      }

      // Update the session with the new user data
      const updatedUser = {
        ...currentSession.user,
        avatar: response?.avatar || ''
      }

      const updateSessionResponse = await fetch('/api/auth/session', {
        method: 'POST',
        body: JSON.stringify({ user: updatedUser }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (updateSessionResponse.ok) {
        Swal.fire({
          title: 'Success!',
          text: 'Profile updated and session refreshed successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
          background: '#f4f7fb',
          color: '#4caf50'
        })
      } else {
        console.error('Failed to update session with new user data.')
        Swal.fire({
          title: 'Warning!',
          text: 'Profile updated, but session could not be refreshed.',
          icon: 'warning',
          confirmButtonText: 'OK',
          background: '#f4f7fb',
          color: '#ff9800'
        })
      }
    } catch (err) {
      console.error('Failed to update profile:', err)
      Swal.fire({
        title: 'Error!',
        text: 'Failed to update profile. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
        background: '#f4f7fb',
        color: '#f44336'
      })
    } finally {
      setLoading(false)
      setShowProfileEdit(false)
    }
  }

  if (loading) {
    return <FullPageLoader type="loading" />
  }
  return (
    <>
      <Dialog
        as="div"
        open={showProfileEdit}
        className="relative z-10 focus:outline-none"
        onClose={() => setShowProfileEdit(false)}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel className="data-[closed]:transform-[scale(95%)] w-full max-w-md rounded-xl bg-white p-6 shadow duration-300 ease-out data-[closed]:opacity-0">
              <DialogTitle as="h3" className="mb-5 text-center font-medium">
                Update Vendor Profile
              </DialogTitle>
              <form onSubmit={updateProfileHandler}>
                {/* <FormInput
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  customClass="mb-4"
                  onChange={e => handleInputChange('name', e.target.value)}
                /> */}

                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept=".svg, .png, .jpg, .gif"
                  onChange={handleFileChange}
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
                      alt="pic"
                    />
                  ) : (
                    <>
                      <Image src={ICUser} alt="icon" />
                      <p className="text-sm">Change profile picture</p>
                    </>
                  )}
                </div>

                <div className="mt-5 flex items-center justify-center gap-4">
                  <DashboardButton name="Update" type="submit" />
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default ProfileEdit
