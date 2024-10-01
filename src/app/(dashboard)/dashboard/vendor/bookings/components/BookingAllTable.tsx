import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon, PencilIcon, Square2StackIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import BHistory from '/public/assets/booking-history.png'

const bookings = [
  {
    id: 1,
    eventTitle: 'Wedding Plan',
    eventId: 'INV1704-00061',
    startDate: '13 Jul 2021',
    endDate: '15 Jul 2021',
    saleTotal: '$767.50',
    fee: '$70.50',
    totalPayout: '$690.48',
    status: 'Request payout',
    statusColor: 'text-yellow-700 bg-yellow-100',
    image: BHistory
  }
]
const BookingAllTable = () => {
  return (
    <table className="w-full table-auto">
      <thead className="rounded-md rounded-tl-none rounded-tr-none bg-red-200">
        <tr className="text-left">
          <th className="rounded-l-xl bg-clr-f8 p-4">
            <input type="checkbox" /> {/* Main checkbox for selecting all rows */}
          </th>
          <th className="bg-clr-f8 p-4 text-sm font-semibold text-clr-81">Event</th>
          <th className="bg-clr-f8 p-4 text-sm font-semibold text-clr-81">Start Date</th>
          <th className="bg-clr-f8 p-4 text-sm font-semibold text-clr-81">End Date</th>
          <th className="bg-clr-f8 p-4 text-sm font-semibold text-clr-81">Sale Total</th>
          <th className="bg-clr-f8 p-4 text-sm font-semibold text-clr-81">Fee(10%)</th>
          <th className="bg-clr-f8 p-4 text-sm font-semibold text-clr-81">Total payout (incl GST)</th>
          <th className="bg-clr-f8 p-4 text-sm font-semibold text-clr-81">Status </th>
          <th className="rounded-r-xl bg-clr-f8 p-4 text-sm font-semibold text-clr-81"></th>
        </tr>
      </thead>

      <tbody>
        {bookings.map(bookingItem => (
          <tr key={bookingItem.id} className="border-t first:border-t-0">
            <td className="p-4">
              <input type="checkbox" /> {/* Individual checkbox for each row */}
            </td>
            <td className="flex items-center p-4">
              <div className="mr-4 h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                <Image src={bookingItem.image} alt="Product Image" />
              </div>
              <div className="unused-class">
                <p className="text-sm font-semibold text-clr-36">{bookingItem.eventTitle}</p>
                <p className="text-sm text-clr-36">{bookingItem.eventId}</p>
              </div>
            </td>
            <td className="p-4 text-sm text-clr-36">{bookingItem.startDate}</td>
            <td className="p-4 text-sm text-clr-36">{bookingItem.endDate}</td>
            <td className="p-4 text-sm text-clr-36">{bookingItem.saleTotal}</td>
            <td className="p-4 text-sm text-clr-36">{bookingItem.fee}</td>
            <td className="p-4 text-sm text-clr-36">{bookingItem.totalPayout}</td>
            <td className="p-4 text-xs font-bold text-clr-36">
              <span className={`rounded px-2 py-1 ${bookingItem.statusColor}`}>{bookingItem.status}</span>
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
  )
}

export default BookingAllTable
