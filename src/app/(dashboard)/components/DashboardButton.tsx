import { PlusIcon } from '@heroicons/react/16/solid'

const DashboardButton = () => {
  return (
    <button className="flex items-center gap-2 rounded-md bg-clr-fb px-3 py-2 font-bold text-white">
      <PlusIcon className="size-4 font-bold" />
      New listing
    </button>
  )
}

export default DashboardButton
