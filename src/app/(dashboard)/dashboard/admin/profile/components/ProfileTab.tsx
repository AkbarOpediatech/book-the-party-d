type IProps = {
  tab: number
  setTab: (tabIndex: number) => void
}
const ProfileTab: React.FC<IProps> = ({ tab, setTab }) => {
  return (
    <div className="mb-4 flex items-center gap-4 rounded-lg bg-white p-4 shadow">
      <button
        onClick={() => setTab(0)}
        className={`${tab === 0 ? 'bg-clr-fb text-white' : 'text-gray-500'} rounded-lg px-4 py-2 text-sm font-medium`}
      >
        Overview
      </button>
      <button
        onClick={() => setTab(1)}
        className={`${tab === 1 ? 'bg-clr-fb text-white' : 'text-gray-500'} rounded-lg px-4 py-2 text-sm font-medium`}
      >
        Banking information
      </button>
    </div>
  )
}

export default ProfileTab
