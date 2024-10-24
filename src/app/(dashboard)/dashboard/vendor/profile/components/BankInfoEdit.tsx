import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import FormInput from '@/app/(dashboard)/components/FormInput'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

type IProps = {
  showBankInfoEdit: boolean
  setShowBankInfoEdit: (index: boolean) => void
}

const BankInfoEdit: React.FC<IProps> = ({ setShowBankInfoEdit, showBankInfoEdit }) => {
  return (
    <>
      <Dialog
        as="div"
        open={showBankInfoEdit}
        className="relative z-10 focus:outline-none"
        onClose={() => setShowBankInfoEdit(false)}
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
                <FormInput
                  type="text"
                  name="billing"
                  placeholder="Enter Billing Address"
                  customClass="mb-4"
                />

                <div className="mt-5 flex items-center justify-center gap-4">
                  <DashboardButton name="Update" onClick={() => setShowBankInfoEdit(false)} type="button" />
                  <DashboardButton name="Cancel" onClick={() => setShowBankInfoEdit(false)} type="button" />
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default BankInfoEdit
