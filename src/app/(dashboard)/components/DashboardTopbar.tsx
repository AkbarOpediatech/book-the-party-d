import { HeartIcon } from '@heroicons/react/16/solid'

type IProps = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DashboardTopbar: React.FC<IProps> = ({ setSidebarOpen }) => {
  return (
    <div className="w-full bg-red-300">
      <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
        <HeartIcon className="h-6 w-6 text-gray-500" />
      </button>
      <p className="w-full bg-red-300">DashboardTopbar</p>
    </div>
  )
}

export default DashboardTopbar
