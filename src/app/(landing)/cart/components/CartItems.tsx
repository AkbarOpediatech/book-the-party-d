'use client'
import { useRemoveFromCartMutation, type CartItemResponse } from '@/redux/features/cart/apiSlice'
import { TrashIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import type { FC } from 'react'
import Swal from 'sweetalert2'
import Loader from '../../components/Loader/Loader'
import Pagination from '../../services/components/Pagination'
import Avatar from '/public/assets/package5.png'

type IProps = {
  loading: boolean
  error: boolean | Error | null
  cartItems: CartItemResponse | undefined
  currentPage: number
  pageLimit: number
  handlePageChange: (page: number) => void
}
const CartItems: FC<IProps> = ({ loading, error, cartItems, pageLimit, handlePageChange, currentPage }) => {
  const totalRecords = cartItems?.pagination?.records || 0

  const [removeFromCart, { isLoading: isDeleting }] = useRemoveFromCartMutation()

  const handleDelete = async (itemId: number) => {
    if (!itemId) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Invalid item ID. Please refresh the page and try again.',
        showConfirmButton: false,
        timer: 2000,
        toast: true
      })
      return
    }

    try {
      await removeFromCart(itemId).unwrap()
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Item removed successfully!',
        showConfirmButton: false,
        timer: 2000,
        toast: true
      })
    } catch (error) {
      console.error('Failed to delete the item:', error)
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Failed to delete the item. Please try again.',
        showConfirmButton: false,
        timer: 2000,
        toast: true
      })
    }
  }

  if (loading) return <Loader type="loading" message="Please wait sometimes" />
  if (error) return <Loader type="error" message="Please try again later." />

  return (
    <div>
      <div className="bg-white">
        <div className="cart-scroll overflow-x-auto">
          <table className="mb-5 min-w-full table-auto">
            <thead>
              <tr className="border-b text-left">
                {['Items for hire', 'Price', 'Quantity', 'Security Deposit', 'Actions'].map((i, index) => (
                  <th
                    className="text-nowrap px-4 py-3 font-sora text-sm font-semibold md:text-lg"
                    key={index}
                  >
                    {i}
                  </th>
                ))}
              </tr>
            </thead>

            {cartItems?.data?.length ? (
              <tbody>
                {cartItems?.data?.map((data, index) => (
                  <tr key={index} className="mb-4 border-b last:mb-0">
                    <td className="px-4 py-4">
                      <div className="flex flex-wrap items-start md:flex-nowrap">
                        <Image
                          width={80}
                          height={80}
                          src={data?.service?.featured_image ?? Avatar}
                          alt="Party Item Image"
                          className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-md object-cover md:mr-4"
                        />
                        <div>
                          <p className="mb-2 font-sora text-sm font-bold md:text-lg">{data.service?.title}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500 md:text-lg">
                      ${data.service?.price?.map(i => i.value)}
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
            ) : (
              <tbody>
                <tr>
                  <td colSpan={5}>
                    <p className="mx-auto mt-4 max-w-xs rounded-lg border border-red-200 bg-red-100 px-6 py-3 text-center text-lg text-red-500">
                      There is no service in your cart
                    </p>
                  </td>
                </tr>
              </tbody>
            )}
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
