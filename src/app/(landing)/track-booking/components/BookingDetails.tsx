// BookingSummary.tsx
'use client'

import Image from 'next/image'
import bookingImage from '/public/assets/booking-history-5.png'

type BookingDetailsProps = {
  currentStep: number
}

const BookingDetails: React.FC<BookingDetailsProps> = ({ currentStep }) => {
  const bookingData = [
    { label: 'Customer Name', value: 'Maguire Harry' },
    { label: 'Customer Email', value: 'someone@example.com' },
    { label: 'Mobile Number', value: '23547956529' },
    { label: 'Flat, House no.', value: 'House no 23' },
    { label: 'Suburb', value: 'Sydney' },
    { label: 'Postcode', value: '31134' },
    { label: 'Street Name', value: 'Parker Rd.' },
    { label: 'Street Name', value: 'Parker Rd.' },
    { label: 'State', value: 'Australia' }
  ]

  const getBgColor = () => {
    switch (currentStep) {
      case 0:
        return 'bg-[#FFEDED]'
      case 1:
        return 'bg-[#FEF8E1]'
      case 2:
        return 'bg-[#E4F9E0]'
      default:
        return 'bg-[#FFEDED]'
    }
  }
  const status = () => {
    switch (currentStep) {
      case 0:
        return 'Pending'
      case 1:
        return 'In Progress'
      case 2:
        return 'Complete'
      default:
        return 'Pending'
    }
  }

  return (
    <div className="rounded-2xl border p-3 lg:p-7">
      <div className={`mb-6 flex flex-col items-start gap-4 rounded-lg p-4 sm:flex-row ${getBgColor()}`}>
        <Image
          width={86}
          height={86}
          src={bookingImage}
          alt="Booking History"
          className="rounded-xl sm:h-auto sm:w-auto md:h-20 md:w-20 lg:mr-3"
        />
        <div>
          <p className="text-lg font-semibold text-clr-1d sm:text-2xl">Your booking is {status()}</p>
          <p className="text-sm font-normal text-clr-48 sm:text-base">
            Lorem ipsum dolor sit amet consectetur. Viverra quam non at nunc massa. Turpis quisque lectus
            tortor elementum gravida tellus purus.
          </p>
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
