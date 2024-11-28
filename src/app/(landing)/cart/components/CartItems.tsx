'use client'
import { cartItems as initialCartItems } from '@/utils'
import { TrashIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import { useState } from 'react'
import Swal from 'sweetalert2'

const CartItems = () => {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const handleDelete = async (index: number) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to remove this item from your cart?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    })

    if (result.isConfirmed) {
      const updatedCartItems = cartItems.filter((_, itemIndex) => itemIndex !== index)
      setCartItems(updatedCartItems)

      Swal.fire('Deleted!', 'The item has been removed from your cart.', 'success')
    }
  }

  return (
    <div>
      <div className="bg-white">
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
              {cartItems.map((data, index) => (
                <tr key={index} className="mb-4 border-b last:mb-0">
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap items-center md:flex-nowrap">
                      <Image
                        width={80}
                        height={80}
                        src={data.pic}
                        alt="Party Item Image"
                        className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md object-cover md:mr-4"
                      />
                      <div>
                        <p className="mb-2 font-sora text-sm font-bold md:text-lg">{data.name}</p>
                        <p className="font-nunito text-sm font-light text-gray-500">
                          Location: {data.location}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500 md:text-lg">${data.price}</td>
                  <td className="px-4 py-4 text-sm text-gray-500 md:text-lg">{data.quantity}</td>
                  <td className="px-4 py-4 text-sm text-gray-500 md:text-lg">${data.subtotal}</td>
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
