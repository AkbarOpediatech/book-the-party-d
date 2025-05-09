import { useGetOrdersByUserQuery } from '@/redux/features/orders/apiSlice'
import { cn } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import Loader from '../../components/Loader/Loader'
import productImage from '/public/assets/package1.png'

const OrderTracking = () => {
  const { data, isLoading, isError } = useGetOrdersByUserQuery()
  const orders = data?.data

  if (isLoading) {
    return <Loader type="loading" message="Please wait sometimes" />
  }

  if (isError) {
    return <Loader type="error" message="Please try again later." />
  }

  return (
    <table className="w-full table-auto">
      <tbody>
        {orders?.map(order => {
          const { title, featured_image } = order?.service_embedded || {}

          return order?.status === 'draft' ? null : data?.data.length === 0 ? (
            <p>No orders found</p>
          ) : (
            <tr className="flex flex-wrap rounded border p-3 md:table-row" key={order._id}>
              <td className="w-full px-2 py-2 md:w-auto">
                <div className="flex items-center">
                  <div className="h-20 w-20 flex-shrink-0">
                    <Image
                      width={80}
                      height={80}
                      src={featured_image || productImage}
                      alt="product-img"
                      className="h-full w-full"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="mb-2 whitespace-nowrap text-base text-[#757575]">Booking Id</p>
                    <p className="text-xl font-medium text-[#081B2F]">#{order._id}</p>{' '}
                  </div>
                </div>
              </td>

              <td className="w-full px-2 py-2 md:w-auto">
                <p className="mb-2 whitespace-nowrap text-base text-[#757575]">Service Name</p>
                <p className="text-xl font-medium capitalize text-[#081B2F]">
                  {title || 'Service Title'}
                </p>{' '}
              </td>

              <td className="w-full px-2 py-2 md:w-auto">
                <p className="mb-2 whitespace-nowrap text-base text-[#757575]">Price</p>
                <p className="text-xl font-medium text-[#081B2F]">${order?.amount?.total}</p>
              </td>

              <td className="w-full px-2 py-2 md:w-auto">
                <p className="mb-2 whitespace-nowrap text-base text-[#757575]">Status</p>
                <p
                  className={cn(
                    'rounded bg-clr-d48/20 px-2 py-1 text-center text-sm font-medium capitalize text-clr-d48',
                    order.status === 'pending' && 'bg-clr-5E text-clr-f8',
                    order.status === 'processing' && 'bg-clr-fb text-clr-f8',
                    order.status === 'completed' && 'bg-clr-16 text-clr-f8',
                    order.status === 'cancelled' && 'bg-clr-d48 text-clr-f8',
                    order.status === 'draft' && 'bg-clr-ab text-clr-36',
                    order.status === 'completed_request_vendor' && 'bg-clr-fb text-clr-f8',
                    order.status === 'completed_request_customer' && 'bg-clr-fb text-clr-f8'
                  )}
                >
                  {order.status}
                </p>
              </td>

              <td className="w-full items-center px-2 py-2 md:w-auto">
                <Link
                  href={`/track-booking/${order._id}`}
                  className="whitespace-nowrap rounded bg-clr-fb px-4 py-2 text-base text-white"
                >
                  Track Order
                </Link>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default OrderTracking
