'use client'

import { useFetchWishlistQuery, useRemoveFromWishlistMutation } from '@/redux/features/wishlist/apiSlice'
import { TrashIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Swal from 'sweetalert2'
import Loader from '../components/Loader/Loader'
import productImage from '/public/assets/package1.png'

const Wishlist = () => {
  const { data: response, isLoading: isFetching } = useFetchWishlistQuery()
  const wishlistData = response?.data

  const [removeFromWishlist, { isLoading: isDeleting }] = useRemoveFromWishlistMutation()

  const handleDelete = async (itemId: string) => {
    console.log(itemId, 'itemID')
    try {
      await removeFromWishlist(itemId).unwrap()
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

  if (isFetching) {
    return <Loader type="loading" />
  }

  return (
    <section className="py-10">
      <div className="container max-w-[1440px]">
        <div className="bg-white">
          <div className="cart-scroll overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="border-b text-left">
                  {['Items for hire', 'Price', 'Security Deposit', 'Actions'].map(header => (
                    <th
                      key={header}
                      className="text-nowrap px-4 py-3 font-sora text-sm font-semibold md:text-lg"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {wishlistData && wishlistData.length > 0 ? (
                  wishlistData.map((item, index) => (
                    <tr key={index} className="mb-4 border-b last:mb-0">
                      <td className="px-4 py-4">
                        <div className="flex flex-wrap items-center md:flex-nowrap">
                          <Image
                            width={80}
                            height={80}
                            src={(item.service?.featured_image as string) || productImage}
                            alt="cart-img"
                            className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md object-cover md:mr-4"
                          />
                          <div>
                            <p className="mb-2 font-sora text-sm font-bold md:text-lg">
                              {item.service?.title}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 md:text-lg">
                        ${item.service?.price?.[0]?.value || 'N/A'}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 md:text-lg">
                        ${item.service?.security_deposit || 'N/A'}
                      </td>
                      <td className="px-4 py-4">
                        <button
                          className="text-red-400"
                          onClick={() => handleDelete(item._id as string)}
                          disabled={isDeleting}
                          aria-label="Delete item"
                        >
                          <TrashIcon className="h-6 w-6" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-4 py-4 text-center text-gray-500">
                      Wishlist is empty
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Wishlist
