import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import FormInput from '@/app/(dashboard)/components/FormInput'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

type IProps = {
  showInfoEdit: any
  setShowInfoEdit: any
}

const InfoEdit: React.FC<IProps> = ({ setShowInfoEdit, showInfoEdit }) => {
  return (
    <>
      <Dialog
        as="div"
        open={showInfoEdit}
        className="relative z-10 focus:outline-none"
        onClose={() => setShowInfoEdit(false)}
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
                <FormInput type="text" name="fullName" placeholder="Enter Full Name" customClass="mb-4" />
                <FormInput type="textarea" name="description" placeholder="Description" customClass="mb-4" />
                <FormInput type="text" name="location" placeholder="Location" customClass="mb-4" />
                <FormInput type="text" name="specialized" placeholder="Specialized in" customClass="mb-4" />
                <FormInput type="email" name="email" placeholder="Email Address" customClass="mb-4" />
                <FormInput type="tel" name="tel" placeholder="Phone Number" customClass="mb-4" />
                <FormInput
                  type="select"
                  name="language"
                  placeholder="Language"
                  options={['Bangla', 'English', 'Spanish', 'French']}
                  customClass="mb-4"
                />

                <div className="mt-5 flex items-center justify-center gap-4">
                  <DashboardButton name="Update" onClick={() => setShowInfoEdit(false)} type="button" />
                  <DashboardButton name="Cancel" onClick={() => setShowInfoEdit(false)} type="button" />
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default InfoEdit
