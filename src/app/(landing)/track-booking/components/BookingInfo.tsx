type BookingInfoProps = {
  currentStep: number
}
const BookingInfo: React.FC<BookingInfoProps> = ({ currentStep }) => {
  const summaryData = [
    { label: 'Booking ID', value: '#BKG20241101' },
    { label: 'Service Name', value: 'Birthday Party Arrangements' },
    { label: 'Booking Date', value: 'November 16, 2024' },
    { label: 'Booking Fee', value: '$421' },
    { label: 'Subtotal', value: '$520' }
  ]
  return (
    <div className="">
      <div className="rounded-2xl border p-3 lg:p-7">
        <h1 className="mb-4 text-2xl font-semibold">Booking Summary</h1>
        {summaryData.map((item, index) => (
          <div key={index} className="py-2">
            <p className="text-sm font-medium text-clr-48 sm:text-base">{item.label}:</p>
            <p className="text-base font-semibold text-clr-1d sm:text-xl lg:my-2">{item.value}</p>
          </div>
        ))}
      </div>
      {currentStep !== 2 && (
        <button className="mt-6 w-full rounded-lg border border-clr-fb py-2 text-sm font-bold text-clr-fb transition hover:bg-clr-fb hover:text-white sm:py-3 sm:text-xl">
          Cancel Booking
        </button>
      )}
    </div>
  )
}

export default BookingInfo
