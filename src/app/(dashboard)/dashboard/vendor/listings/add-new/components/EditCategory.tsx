import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import { useToken } from '@/redux/hooks/useToken'
import { Dialog } from '@headlessui/react'
import { TrashIcon } from '@heroicons/react/16/solid'
import React from 'react'
type OptionType = {
  value: string
  title: string
  userId: string
}
type IProps = {
  isOpen: boolean
  onClose: () => void
  options?: OptionType[]
}

const EditCategory: React.FC<IProps> = ({ isOpen, onClose, options }) => {
  const { session } = useToken()
  const userSessionId = session?.user?.id
  // console.log(session)

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="no-scroll max-h-[90vh] w-full max-w-sm overflow-y-scroll rounded bg-white p-6">
          <Dialog.Title className="mb-4 text-center text-lg font-medium leading-6 text-gray-900">
            Edit Category List
          </Dialog.Title>

          <form>
            <div>
              {options?.map((option, index) => (
                <div key={index} className="flex items-center justify-between gap-4 border-b p-2">
                  <p>{option?.title}</p>
                  <button>
                    {userSessionId === option?.userId && <TrashIcon className="h-4 w-4 text-red-500" />}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={onClose}
                className="mr-3 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Cancel
              </button>
              <DashboardButton name="Edit Category" type="button" />
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default EditCategory
