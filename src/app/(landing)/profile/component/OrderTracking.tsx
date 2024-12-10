import Image from 'next/image'
import Link from 'next/link'
import proudctImage from '/public/assets/package1.png'

const OrderTracking = () => {
  return (
    <table className="w-full table-auto">
      <tbody>
        <tr className="flex flex-wrap rounded border p-3 md:table-row">
          <td className="w-full px-2 py-2 md:w-auto">
            <div className="flex items-center">
              <div className="h-20 w-20 flex-shrink-0">
                <Image
                  width={80}
                  height={80}
                  src={proudctImage}
                  alt="product-img"
                  className="h-full w-full"
                />
              </div>
              <div className="ml-3">
                <p className="mb-2 whitespace-nowrap text-base text-[#757575]">Booking ID</p>
                <p className="text-xl font-medium text-[#081B2F]">#BKG20241101</p>
              </div>
            </div>
          </td>

          <td className="w-full px-2 py-2 md:w-auto">
            <p className="mb-2 whitespace-nowrap text-base text-[#757575]">Service Name</p>
            <p className="text-xl font-medium text-[#081B2F]">Birthday Party Arrangements</p>
          </td>

          <td className="w-full px-2 py-2 md:w-auto">
            <p className="mb-2 whitespace-nowrap text-base text-[#757575]">Price</p>
            <p className="text-xl font-medium text-[#081B2F]">$520</p>
          </td>

          <td className="w-full px-2 py-2 md:w-auto">
            <p className="mb-2 whitespace-nowrap text-base text-[#757575]">Status</p>
            <p className="rounded bg-clr-d48/20 px-2 py-1 text-center text-sm font-medium text-clr-d48">
              Pending
            </p>
          </td>

          <td className="w-full items-center px-2 py-2 md:w-auto">
            <Link
              href={'/track-booking'}
              className="whitespace-nowrap rounded bg-clr-fb px-4 py-2 text-base text-white"
            >
              Track Order
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default OrderTracking
