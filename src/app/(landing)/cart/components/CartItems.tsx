'use client'
import usePagination from '@/hooks/usePagination'
import { useRemoveFromCartMutation } from '@/redux/features/cart/apiSlice'
import { TrashIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Pagination from '../../services/components/Pagination'
import { useFetchCartService } from './CartService'
import Avatar from '/public/assets/avatar.jpeg'

const CartItems = () => {
  const { currentPage, pageLimit, handlePageChange } = usePagination({ initialLimit: 5 })
  const { response: cartItems, loading, error } = useFetchCartService({ limit: pageLimit, page: currentPage })
  const totalRecords = cartItems?.pagination?.records || 0

  const [removeFromCart, { isLoading: isDeleting }] = useRemoveFromCartMutation()

  const handleDelete = async (itemId: number) => {
    try {
      await removeFromCart(itemId).unwrap()
      alert('Item removed successfully!')
    } catch (error) {
      console.error('Failed to delete the item:', error)
      alert('Failed to delete the item. Please try again.')
    }
  }

  if (loading) return <div>Loading cart...</div>
  if (error) return <div>Error loading cart.</div>

  return (
    <div>
      <div className="bg-white">
        <div className="cart-scroll overflow-x-auto">
          <table className="mb-5 min-w-full table-auto">
            <thead>
              <tr className="border-b text-left">
                {[' Items for hire', 'Price', 'Quantity', 'Security Deposit', 'Actions'].map((i, index) => (
                  <th
                    className="text-nowrap px-4 py-3 font-sora text-sm font-semibold md:text-lg"
                    key={index}
                  >
                    {i}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {cartItems?.data?.map((data, index) => (
                <tr key={index} className="mb-4 border-b last:mb-0">
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap items-start md:flex-nowrap">
                      <Image
                        width={80}
                        height={80}
                        src={Avatar}
                        alt="Party Item Image"
                        className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-md object-cover md:mr-4"
                      />
                      <div>
                        <p className="mb-2 font-sora text-sm font-bold md:text-lg">{data.service?.title}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500 md:text-lg">
                    ${data.service?.price.map(i => i.value)}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500 md:text-lg">{data.quantity}</td>
                  <td className="px-4 py-4 text-sm text-gray-500 md:text-lg">
                    {data.service?.security_deposit}
                  </td>
                  <td className="px-4 py-4">
                    <button
                      className="text-red-400"
                      onClick={() => handleDelete(data._id as number)}
                      disabled={isDeleting}
                      aria-label="Delete item"
                    >
                      <TrashIcon className="h-6 w-6" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Pagination
            totalRecords={totalRecords}
            currentPage={currentPage}
            pageLimit={pageLimit}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}

export default CartItems
