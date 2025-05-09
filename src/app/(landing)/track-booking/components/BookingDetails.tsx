'use client'

import type { Order } from '@/redux/features/orders/apiSlice'
import Image from 'next/image'
import bookingImage from '/public/assets/booking-history-5.png'

type BookingDetailsProps = {
  data: Order | undefined
}

const BookingDetails: React.FC<BookingDetailsProps> = ({ data }) => {
  const bookingData = [
    { label: 'Customer Name', value: data?.order?.billing_details?.name },
    { label: 'Customer Email', value: data?.order?.billing_details?.email },
    { label: 'Mobile Number', value: data?.order?.billing_details?.phone },
    { label: 'City', value: data?.order?.billing_details?.city },
    { label: 'State', value: data?.order?.billing_details?.state },
    { label: 'Country', value: data?.order?.billing_details?.country },
    { label: 'Postcode', value: data?.order?.billing_details?.postcode },
    { label: 'Street', value: data?.order?.billing_details?.street }
  ]

  const getBgColor = () => {
    switch (data?.status) {
      case 'pending':
        return 'bg-[#FFEDED]'
      case 'processing':
        return 'bg-[#FEF8E1]'
      case 'succeeded':
        return 'bg-[#E4F9E0]'
      default:
        return 'bg-[#FFEDED]'
    }
  }

  return (
    <div className="rounded-2xl border p-3 lg:p-7">
      <div className={`mb-6 flex flex-col items-start gap-4 rounded-lg p-4 sm:flex-row ${getBgColor()}`}>
        <Image
          width={86}
          height={86}
          src={data?.service_embedded?.featured_image || bookingImage}
          alt="Booking History"
          className="rounded-xl sm:h-auto sm:w-auto md:h-20 md:w-20 lg:mr-3"
        />
        <div>
          <p className="text-lg font-semibold text-clr-1d sm:text-2xl">
            Your booking is {data?.status === 'processing' && 'processing'}
            {data?.status === 'completed' && 'completed'}
            {data?.status === 'cancelled' && 'cancelled'}
            {data?.status === 'completed_request_vendor' && 'completed request vendor'}
            {data?.status === 'completed_request_customer' && 'completed request customer'}
          </p>
          <p
            className="text-sm font-normal text-clr-48 sm:text-base"
            dangerouslySetInnerHTML={{
              __html:
                data?.service_embedded?.description ||
                'Lorem ipsum dolor sit amet consectetur. Viverra quam non at nunc massa. Turpis quisque lectus tortor elementum gravida tellus purus.'
            }}
          />
        </div>
      </div>
      <h1 className="my-6 text-xl font-semibold sm:my-8 sm:text-3xl">Booking Information</h1>
      <div className="grid grid-cols-1 gap-6 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {bookingData.map((item, index) => (
          <div key={index} className="">
            <p className="text-xs font-medium text-clr-48 sm:text-sm md:text-base">{item.label}:</p>
            <p className="my-2 text-sm font-semibold text-clr-1d sm:text-base md:text-lg">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookingDetails
