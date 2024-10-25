import { TrashIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import ProductImg from '/public/assets/package1.png'

const CartItems = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="border-b text-left">
                <th className="px-4 py-3 font-sora text-lg font-semibold">Items for hire</th>
                <th className="px-4 py-3 font-sora text-lg font-semibold">Price</th>
                <th className="px-4 py-3 font-sora text-lg font-semibold">Quantity</th>
                <th className="px-4 py-3 font-sora text-lg font-semibold">Subtotal</th>
                <th className="px-4 py-3 font-sora text-lg font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="mb-4 border-b last:mb-0 last:border-b-0">
                <td className="px-4 py-4">
                  <div className="flex items-center">
                    <Image
                      width={80}
                      height={80}
                      src={ProductImg}
                      alt="Party Item Image"
                      className="mr-4 h-20 w-20 overflow-hidden rounded-md object-cover"
                    />
                    <div>
                      <p className="mb-2 font-sora text-lg font-bold">Party Name here</p>
                      <p className="font-nunito text-sm font-light text-gray-500">Location: XYZ</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 font-nunito text-lg text-gray-500">$1999</td>
                <td className="px-4 py-4 font-nunito text-lg text-gray-500">1</td>
                <td className="px-4 py-4 font-nunito text-lg text-gray-500">$1999</td>
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
