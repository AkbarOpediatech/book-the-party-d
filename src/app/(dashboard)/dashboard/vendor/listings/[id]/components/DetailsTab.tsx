type IProps = {
  tab: any
  setTab: any
}
const DetailsTab: React.FC<IProps> = ({ tab, setTab }) => {
  return (
    <div className="flex items-center gap-10 rounded bg-clr-f8 px-6">
      {['Details', 'Inclusions', 'Important info', 'Reviews(4)'].map((data, index) => (
        <button
          onClick={() => setTab(index)}
          className={`border-b-2 py-3 text-sm font-semibold ${tab === index ? 'border-clr-0e8 text-clr-36' : 'border-transparent text-clr-81'}`}
        >
          {data}
        </button>
      ))}
    </div>
  )
}

export default DetailsTab
