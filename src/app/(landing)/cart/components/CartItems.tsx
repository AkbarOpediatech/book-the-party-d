'use client'
import { useFetchCartQuery } from '@/redux/features/cart/apiSlice'
import { TrashIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Swal from 'sweetalert2'
import { useFetchServiceService } from './CartService'
import Avatar from '/public/assets/avatar.jpeg'

const CartItems = () => {
  const { response: cartItems, loading, error } = useFetchServiceService()
  console.log(cartItems, 'cartItems')
  const { data, isLoading, isError } = useFetchCartQuery()

  if (loading) return <div>Loading cart...</div>
  if (error) return <div>Error loading cart.</div>

  const handleDelete = async (index: number) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to remove this item from your cart?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    })
  }

  return (
    <div>
      <div className="bg-white">
        <p>Carts items {cartItems && cartItems?.data.length}</p>
        <div className="cart-scroll overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="border-b text-left">
                <th className="text-nowrap px-4 py-3 font-sora text-sm font-semibold md:text-lg">
                  Items for hire
                </th>
                <th className="px-4 py-3 font-sora text-sm font-semibold md:text-lg">Price</th>
                <th className="px-4 py-3 font-sora text-sm font-semibold md:text-lg">Quantity</th>
                <th className="px-4 py-3 font-sora text-sm font-semibold md:text-lg">Subtotal</th>
                <th className="px-4 py-3 font-sora text-sm font-semibold md:text-lg">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems?.data?.map((data, index) => (
                <tr key={index} className="mb-4 border-b last:mb-0">
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap items-center md:flex-nowrap">
                      <Image
                        width={80}
                        height={80}
                        src={Avatar}
                        alt="Party Item Image"
                        className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md object-cover md:mr-4"
                      />
                      <div>
                        <p className="mb-2 font-sora text-sm font-bold md:text-lg">
                          {/*{data.service.title}*/}
                        </p>
                        <p className="font-nunito text-sm font-light text-gray-500">
                          Location:{/*  {data.location} */}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500 md:text-lg">${data.price}</td>
                  <td className="px-4 py-4 text-sm text-gray-500 md:text-lg">{data.quantity}</td>
                  <td className="px-4 py-4">
                    <button
                      className="text-red-400"
                      onClick={() => handleDelete(index)}
                      aria-label="Delete item"
                    >
                      <TrashIcon className="h-6 w-6" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CartItems
