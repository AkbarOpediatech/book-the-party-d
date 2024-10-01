import { Menu, MenuButton, MenuItem, MenuItems, Select } from '@headlessui/react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisVerticalIcon,
  PencilIcon,
  Square2StackIcon
} from '@heroicons/react/16/solid'
import Image from 'next/image'
import BHistory from '/public/assets/booking-history.png'

const listings = [
  {
    id: 1,
    itemName: 'Wedding Decoration',
    itemDescription: 'Description about the vendor',
    category: 'Party Set up',
    price: '$250.00',
    totalBookings: '42',
    image: BHistory
  }
]

const ListingTable = () => {
  return (
    <div className="rounded-lg bg-white shadow">
      <div className="p-2">
        <div className="flex flex-wrap items-center justify-between rounded py-5 md:px-6">
          <input
            type="text"
            className="input-date bg-left-[20px] w-full bg-icon-search bg-no-repeat pl-9"
            style={{ backgroundPosition: 'left 10px center' }}
            placeholder="Search by transaction id"
          />
        </div>
        <div className="no-scroll overflow-x-scroll">
          <table className="w-full">
            <thead className="rounded-md bg-red-200">
              <tr className="text-left">
                <th className="rounded-l-xl bg-clr-f8 p-4">
                  <input type="checkbox" /> {/* Main checkbox for selecting all rows */}
                </th>
                <th className="bg-clr-f8 p-4 text-sm font-semibold text-clr-81">Item Name</th>
                <th className="bg-clr-f8 p-4 text-sm font-semibold text-clr-81">Category</th>
                <th className="bg-clr-f8 p-4 text-sm font-semibold text-clr-81">Price</th>
                <th className="bg-clr-f8 p-4 text-sm font-semibold text-clr-81">Total Bookings</th>
                <th className="rounded-r-xl bg-clr-f8 p-4 text-sm font-semibold text-clr-81"></th>
              </tr>
            </thead>

            <tbody>
              {listings.map(item => (
                <tr key={item.id} className="border-t first:border-t-0">
                  <td className="p-4">
                    <input type="checkbox" /> {/* Individual checkbox for each row */}
                  </td>
                  <td className="flex items-center p-4">
                    <div className="mr-4 h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg">
                      <Image src={item.image} alt="Product Image" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-clr-36">{item.itemName}</p>
                      <p className="text-sm text-clr-36">{item.itemDescription}</p>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-clr-36">{item.category}</td>
                  <td className="p-4 text-sm text-clr-81">
                    <span className="rounded-md bg-clr-81/20 px-2 py-1 font-bold">{item.price}</span>
                  </td>
                  <td className="p-4 text-xs font-bold text-clr-36">
                    <span className={'rounded px-2 py-1'}>{item.totalBookings}</span>
                  </td>
                  <td className="p-4 text-xs font-bold text-clr-36">
                    <Menu>
                      <MenuButton className="">
                        <EllipsisVerticalIcon className="size-4 fill-black/30" />
                      </MenuButton>

                      <MenuItems
                        transition
                        anchor="bottom end"
                        className="w-52 origin-top-right rounded-xl border bg-white p-1 text-sm/6 text-black shadow-sm transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                      >
                        <MenuItem>
                          <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10">
                            <PencilIcon className="size-4 fill-black/30" />
                            Edit
                          </button>
                        </MenuItem>
                        <MenuItem>
                          <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10">
                            <Square2StackIcon className="size-4 fill-black/30" />
                            Duplicate
                          </button>
                        </MenuItem>
                      </MenuItems>
                    </Menu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* pagination */}
      <div className="flex items-center justify-end gap-4 border-t px-4 py-4">
        <p className="text-sm text-clr-36">Rows per page:</p>
        <Select className={'text-sm text-clr-36'} name="status" aria-label="Project status">
          <option value="5" className="text-sm text-clr-36">
            5
          </option>
          <option value="10" className="text-sm text-clr-36">
            10
          </option>
          <option value="15" className="text-sm text-clr-36">
            15
          </option>
          <option value="20" className="text-sm text-clr-36">
            20
          </option>
        </Select>
        <p className="text-sm text-clr-36">6-10 of 11</p>
        <div className="flex items-center gap-6">
          <button>
            <ChevronLeftIcon className="size-4" />
          </button>
          <button>
            <ChevronRightIcon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListingTable
