'use client'
import { cartItems as initialCartItems } from '@/utils'
import { TrashIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import { useState } from 'react'

const Favorite = () => {
  const [favoriteItems, setFavoriteItems] = useState(initialCartItems)

  const handleRemoveFromFavorites = async (index: number) => {}

  return (
    <section className="py-10">
      <div className="container max-w-[1440px]">
        <div className="bg-white">
          <div className="cart-scroll overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="border-b text-left">
                  {['Items for hire', 'Price', 'Subtotal', 'Actions'].map(header => (
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
                {favoriteItems.map((item, index) => (
                  <tr key={index} className="mb-4 border-b last:mb-0">
                    <td className="px-4 py-4">
                      <div className="flex flex-wrap items-center md:flex-nowrap">
                        <Image
                          width={80}
                          height={80}
                          src={item.pic}
                          alt={item.name}
                          className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md object-cover md:mr-4"
                        />
                        <div>
                          <p className="mb-2 font-sora text-sm font-bold md:text-lg">{item.name}</p>
                          <p className="font-nunito text-sm font-light text-gray-500">
                            Location: {item.location}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500 md:text-lg">${item.price}</td>
                    {/* <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleQuantityChange(index, false)}
                          className="rounded-full bg-gray-200 p-1 hover:bg-gray-300"
                          aria-label="Decrease quantity"
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                        <span className="text-sm text-gray-500 md:text-lg">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(index, true)}
                          className="rounded-full bg-gray-200 p-1 hover:bg-gray-300"
                          aria-label="Increase quantity"
                        >
                          <PlusIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </td> */}
                    <td className="px-4 py-4 text-sm text-gray-500 md:text-lg">${item.subtotal}</td>
                    <td className="px-4 py-4">
                      <button
                        className="text-red-400 transition-colors hover:text-red-600"
                        onClick={() => handleRemoveFromFavorites(index)}
                        aria-label={`Remove ${item.name} from favorites`}
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
    </section>
  )
}

export default Favorite
