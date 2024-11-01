import { Dialog, DialogPanel } from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import type { Dispatch, SetStateAction } from 'react'

type IProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const UnSuccessModal: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center bg-black/20 backdrop-blur-md">
        <DialogPanel className="w-full max-w-[700px] space-y-4 rounded-[40px] border bg-white p-16">
          <div className="mb-14 space-y-6">
            <div className="flex justify-center">
              <XCircleIcon className="size-24" fill="green" />
            </div>
            <h2 className="text-center text-[42px] font-bold text-black">Payment Successful</h2>
            <p className="text-center text-xl text-black md:text-2xl">Please check your payment method</p>
          </div>
          <div className="flex justify-between">
            <Link
              href={'/'}
              className="block rounded-2xl border border-black/5 px-4 py-5 text-xl font-semibold text-black md:text-2xl"
            >
              Continue Browsing
            </Link>
            <Link
              href={'/track-booking'}
              className="block rounded-2xl border border-clr-fb bg-clr-fb px-4 py-5 text-xl font-semibold text-white md:text-2xl"
            >
              Track booking status
            </Link>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}

export default UnSuccessModal
