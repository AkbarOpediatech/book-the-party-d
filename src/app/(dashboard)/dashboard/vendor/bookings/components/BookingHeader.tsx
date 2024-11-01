const BookingHeader = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded px-4 pb-3 pt-5 lg:flex-nowrap">
      <div className="relative">
        <span className="absolute -top-2.5 left-2 block bg-white text-xs text-clr-ab">Categories</span>
        <select name="status" className="input w-[160px] flex-shrink-0 text-sm md:text-base">
          <option value="Wedding">Wedding</option>
        </select>
      </div>

      <input type="date" className="input text-clr-ab" placeholder="Start date" />
      <input type="date" className="input text-clr-ab" placeholder="End date" />
      <input
        type="search"
        className="input bg-left-[20px] col-span-2 w-full bg-icon-search bg-no-repeat pl-9"
        style={{ backgroundPosition: 'left 10px center' }}
        placeholder="Search by transaction id"
      />
    </div>
  )
}

export default BookingHeader
