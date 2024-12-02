import { cancelBooking, closePopup, openPopup } from '@/redux/features/popupSlice'
import type { RootState } from '@/redux/store'
import { useDispatch, useSelector } from 'react-redux'
import CancelPopup from './CancelPopup'

type BookingInfoProps = {
  currentStep: number
}
const BookingInfo: React.FC<BookingInfoProps> = () => {
  const dispatch = useDispatch()
  const { isVisible, currentStep } = useSelector((state: RootState) => state.popup)

  const handleCancelClick = () => {
    dispatch(openPopup())
  }

  const handleConfirmCancel = (reason?: string, penalty?: number) => {
    // Pass the penalty value from the popup here
    dispatch(cancelBooking({ reason, penalty }))
  }

  const handleClosePopup = () => {
    dispatch(closePopup())
  }
  const summaryData = [
    { label: 'Booking ID', value: '#BKG20241101' },
    { label: 'Service Name', value: 'Birthday Party Arrangements' },
    { label: 'Booking Date', value: 'November 16, 2024' },
    { label: 'Booking Fee', value: '$421' },
    { label: 'Subtotal', value: '$520' }
  ]
  const message =
    currentStep === 1
      ? 'Cancellation during progress requires a reason and incurs penalty.'
      : 'Are you sure you want to cancel this booking?'
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
        <button
          onClick={handleCancelClick}
          className="mt-6 w-full rounded-lg border border-clr-fb py-2 text-sm font-bold text-clr-fb transition hover:bg-clr-fb hover:text-white sm:py-3 sm:text-xl"
        >
          Cancel Booking
        </button>
      )}
      <CancelPopup
        isVisible={isVisible}
        title="Cancel Booking"
        message={message}
        showReasonInput={currentStep === 1}
        penaltyNotice={currentStep === 1}
        onConfirm={handleConfirmCancel}
        onCancel={handleClosePopup}
      />
    </div>
  )
}

export default BookingInfo
