import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import FormInput from '@/app/(dashboard)/components/FormInput'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Image from 'next/image'
import { useRef, useState } from 'react'
import upload from '/public/assets/upload.svg'

type IProps = {
  showProfileEdit: any
  setShowProfileEdit: any
}

const ProfileEdit: React.FC<IProps> = ({ setShowProfileEdit, showProfileEdit }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
    }
  }
  return (
    <>
      <Dialog
        as="div"
        open={showProfileEdit}
        className="relative z-10 focus:outline-none"
        onClose={() => setShowProfileEdit(false)}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="data-[closed]:transform-[scale(95%)] w-full max-w-md rounded-xl bg-white p-6 shadow duration-300 ease-out data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-center font-medium">
                Update Your Profile
              </DialogTitle>
              <form>
                <FormInput type="text" name="name" placeholder="Enter Name" customClass="mb-4" />
                <div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    accept=".svg, .png, .jpg, .gif"
                    onChange={handleFileChange}
                  />

                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="flex h-[228px] cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 font-inter text-gray-500"
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
                        <Image src={upload} alt="icon" />
                        <p className="text-sm">Change profile picture</p>
                      </>
                    )}
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-center gap-4">
                  <DashboardButton name="Update" onClick={() => setShowProfileEdit(false)} type="button" />
                  <DashboardButton name="Cancel" onClick={() => setShowProfileEdit(false)} type="button" />
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
