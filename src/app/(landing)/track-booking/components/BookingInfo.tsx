import { useUpdateBookingMutation } from '@/redux/features/bookings/apiSlice'
import type { Order } from '@/redux/features/orders/apiSlice'
import { cancelBooking, closePopup } from '@/redux/features/popupSlice'
import type { RootState } from '@/redux/store'
import { useParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import CancelPopup from './CancelPopup'

type BookingInfoProps = {
  // currentStep: number
  data: Order | undefined
}

const BookingInfo: React.FC<BookingInfoProps> = ({ data }) => {
  const params = useParams()
  const { id } = params
  const dispatch = useDispatch()
  const { isVisible, currentStep } = useSelector((state: RootState) => state.popup)
  const [updateBooking] = useUpdateBookingMutation()

  const handleCompleteOrder = async (id: string) => {
    try {
      await updateBooking({ _id: id, status: 'completed' }).unwrap()
      Swal.fire({
        icon: 'success',
        title: 'Order Completed',
        text: 'Order completed successfully!',
        timer: 2000,
        showConfirmButton: false,
        position: 'top-end',
        toast: true
      })
    } catch (error) {
      console.error('Failed to completed order:', error)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to complete the order. Please try again.',
        confirmButtonText: 'Retry'
      })
    }
  }

  const handleProcessingOrder = async (id: string) => {
    try {
      await updateBooking({ _id: id, status: 'processing' }).unwrap()
      Swal.fire({
        icon: 'success',
        title: 'Order Processing',
        text: 'Order is now processing!',
        timer: 2000,
        showConfirmButton: false,
        position: 'top-end',
        toast: true
      })
    } catch (error) {
      console.error('Failed to processing order:', error)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to process the order. Please try again.',
        confirmButtonText: 'Retry'
      })
    }
  }

  const handleConfirmCancel = (reason?: string, penalty?: number) => {
    dispatch(cancelBooking({ reason, penalty }))
  }

  const handleClosePopup = () => {
    dispatch(closePopup())
  }

  const summaryData = [
    { label: 'Booking ID', value: `#${data?._id}` },
    { label: 'Service Name', value: data?.service_embedded?.title },
    { label: 'Booking Date', value: new Date(data?.createdAt as string).toLocaleDateString() },
    { label: 'Booking Fee', value: `$${data?.amount?.service_total}` },
    { label: 'Subtotal', value: `$${data?.amount?.subtotal}` }
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

      {data?.status === 'completed_request_vendor' && (
        <div className="flex gap-2">
          <button
            onClick={() => handleCompleteOrder(id as string)}
            className="mt-6 w-full rounded-lg border border-clr-fb py-2 text-sm font-bold text-clr-fb transition hover:bg-clr-fb hover:text-white sm:py-3 sm:text-xl"
          >
            Completed
          </button>
          <button
            onClick={() => handleProcessingOrder(id as string)}
            className="mt-6 w-full rounded-lg border border-clr-fb py-2 text-sm font-bold text-clr-fb transition hover:bg-clr-fb hover:text-white sm:py-3 sm:text-xl"
          >
            Processing
          </button>
        </div>
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
