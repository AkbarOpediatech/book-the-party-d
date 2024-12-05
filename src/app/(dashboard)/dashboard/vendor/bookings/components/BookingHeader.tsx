// TODO: use it letter
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const BookingHeader = () => {
  //TODO: use it letter
  // const [startDate, setStartDate] = useState(new Date('Start date'))
  // const [endDate, setEndDate] = useState(new Date('End Date'))
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded px-4 pb-3 pt-5 lg:flex-nowrap">
      <div className="relative w-full lg:w-auto">
        <span className="absolute -top-2.5 left-2 block bg-white text-xs text-clr-ab">Categories</span>
        <select name="status" className="input w-full flex-shrink-0 text-sm md:text-base lg:w-[160px]">
          <option value="Wedding">Wedding</option>
        </select>
      </div>

      {/* TODO: use it letter */}
      {/* <DatePicker
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      /> */}

      <input type="date" className="input w-full text-clr-ab" placeholder="Start date" />
      <input type="date" className="input w-full text-clr-ab" placeholder="End date" />
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
