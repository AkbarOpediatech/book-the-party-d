'use client'
import {
  useAddToCartMutation,
  useFetchCartQuery,
  useRemoveFromCartMutation
} from '@/redux/features/cart/apiSlice'
import { TrashIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import ProductImg from '/public/assets/package1.png'

const CartItems = () => {
  const { data: cartItems, isLoading, isError } = useFetchCartQuery()
  const [addToCart] = useAddToCartMutation()
  const [removeFromCart] = useRemoveFromCartMutation()

  //TODO: Feching with redux
  if (isLoading) return <div>Loading cart...</div>
  if (isError) return <div>Error loading cart.</div>

  return (
    <div>
      <div className="bg-white">
        <p>Carts items {cartItems && cartItems.data.length}</p>
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
                <th className="px-4 py-3 font-sora text-sm font-semibold md:text-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="mb-4 border-b last:mb-0 last:border-b-0">
                <td className="px-4 py-4">
                  <div className="flex flex-wrap items-center md:flex-nowrap">
                    <Image
                      width={80}
                      height={80}
                      src={ProductImg}
                      alt="Party Item Image"
                      className="mb-4 h-20 w-20 flex-shrink-0 overflow-hidden rounded-md object-cover md:mr-4"
                    />
                    <div>
                      <p className="mb-2 font-sora text-sm font-bold md:text-lg">Party Name here</p>
                      <p className="font-nunito text-sm font-light text-gray-500">Location: XYZ</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-500 md:text-lg">$1999</td>
                <td className="px-4 py-4 text-sm text-gray-500 md:text-lg">1</td>
                <td className="px-4 py-4 text-sm text-gray-500 md:text-lg">$1999</td>
                <td className="px-4 py-4">
                  <button className="text-red-400">
                    <TrashIcon className="size-6" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CartItems
