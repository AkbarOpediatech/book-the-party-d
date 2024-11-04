import { Dialog, DialogPanel } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import type { Dispatch, SetStateAction } from 'react'

type IProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const SuccessModal: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center bg-black/20 backdrop-blur-md">
        <DialogPanel className="w-full max-w-[700px] space-y-4 rounded-3xl border bg-white px-5 py-10 md:rounded-[40px] md:p-16">
          <div className="mb-14 space-y-6">
            <div className="flex justify-center">
              <CheckCircleIcon className="size-12 md:size-24" fill="green" />
            </div>
            <h2 className="text-center text-3xl font-bold text-black md:text-[42px]">Payment Successful</h2>
            <p className="text-center text-base text-black md:text-2xl">
              A confirmation email will be sent to your registered email shortly.
            </p>
          </div>
          <div className="flex flex-wrap justify-center space-y-5 md:justify-between">
            <Link
              href={'/'}
              className="block rounded-2xl border border-black/5 px-4 py-5 text-base font-semibold text-black md:text-2xl"
            >
              Continue Browsing
            </Link>
            <Link
              href={'/track-booking'}
              className="block rounded-2xl border border-clr-fb bg-clr-fb px-4 py-5 text-base font-semibold text-white md:text-2xl"
            >
              Track booking status
            </Link>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}

export default SuccessModal
