import { useUpdateUserMutation } from '@/redux/features/user/apiSlice'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useRef, useState } from 'react'

type IProps = {
  showProfileEdit: boolean
  setShowProfileEdit: (showIndex: boolean) => void
}

const ProfileEdit: React.FC<IProps> = ({ setShowProfileEdit, showProfileEdit }) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)
  const [ProfileformData, setFormData] = useState({})

  const [updateUser] = useUpdateUserMutation()

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

    // const formData = new FormData()

    // if (file) {
    //   formData.append('avatar', file)
    // }

    // for (const [key, value] of formData.entries()) {
    //   console.log(`Data ${key}:`, value)
    // }
    // console.log('formData', formData)

    // try {
    //   const response = await updateUser(formData).unwrap()
    //   console.log('Profile updated successfully:', response)
    //   alert('Profile updated successfully!')
    // } catch (err) {
    //   console.error('Failed to update profile:', err)
    // }
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
              <DialogTitle as="h3" className="text-center font-medium">
                Update vendor Profile
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
                    <img
                      width={100}
                      height={100}
                      className="size-full object-cover"
                      src={URL.createObjectURL(file)}
                      alt="pic"
                    />
                  ) : (
                    <>
                      <img src="/path/to/upload-icon.svg" alt="icon" />
                      <p className="text-sm">Change profile picture</p>
                    </>
                  )}
                </div>

                {/* <div className="mt-5 flex items-center justify-center gap-4">
                  <DashboardButton name="Update" onClick={() => setShowProfileEdit(false)} type="button" />
                  </div> */}
                <button type="submit" className="btn-primary">
                  Update
                </button>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default ProfileEdit
