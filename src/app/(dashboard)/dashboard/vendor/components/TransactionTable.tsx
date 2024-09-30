import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon, PencilIcon, Square2StackIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import BHistory from '/public/assets/booking-history.png'

const transactions = [
  {
    id: 1,
    title: 'Wedding Decoration',
    description: 'Description about the vendor',
    amount: '$250.00',
    date: '19 Jul 2022',
    status: 'Security deposit held',
    statusColor: 'text-yellow-700 bg-yellow-100',
    image: BHistory
  }
]

const TransactionTable = () => {
  return (
    <div className="rounded-lg bg-white p-2 shadow">
      <div className="flex items-center justify-between rounded px-6 py-5">
        <h2 className="text-base text-clr-36">Transaction History</h2>
        <div className="grid grid-cols-12 space-x-4 md:grid-cols-4">
          <input type="date" className="input-date" placeholder="Start date" />
          <input type="date" className="input-date" placeholder="End date" />
          <input
            type="text"
            className="input-date bg-left-[20px] col-span-2 bg-icon-search bg-no-repeat pl-9"
            style={{ backgroundPosition: 'left 10px center' }}
            placeholder="Search by transaction id"
          />
        </div>
      </div>

      <table className="min-w-full table-auto">
        <thead className="rounded-md bg-red-200">
          <tr className="text-left">
            <th className="rounded-l-xl bg-clr-f8 p-4">
              <input type="checkbox" /> {/* Main checkbox for selecting all rows */}
            </th>
            <th className="bg-clr-f8 p-4 text-sm font-semibold text-clr-81">Transaction</th>
            <th className="bg-clr-f8 p-4 text-sm font-semibold text-clr-81">Amount</th>
            <th className="bg-clr-f8 p-4 text-sm font-semibold text-clr-81">Date</th>
            <th className="bg-clr-f8 p-4 text-sm font-semibold text-clr-81">ID</th>
            <th className="bg-clr-f8 p-4 text-sm font-semibold text-clr-81">Status</th>
            <th className="rounded-r-xl bg-clr-f8 p-4 text-sm font-semibold text-clr-81"></th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id} className="border-t first:border-t-0">
              <td className="p-4">
                <input type="checkbox" /> {/* Individual checkbox for each row */}
              </td>
              <td className="flex items-center p-4">
                <div className="mr-4 h-14 w-14 overflow-hidden rounded-lg">
                  <Image src={transaction.image} alt="Product Image" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-clr-36">{transaction.title}</p>
                  <p className="text-sm text-clr-36">{transaction.description}</p>
                </div>
              </td>
              <td className="p-4 text-sm text-clr-36">{transaction.amount}</td>
              <td className="p-4 text-sm text-clr-36">{transaction.date}</td>
              <td className="p-4 text-sm text-clr-36">{transaction.id}</td>
              <td className="p-4 text-xs font-bold text-clr-36">
                <span className={`rounded px-2 py-1 ${transaction.statusColor}`}>{transaction.status}</span>
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

      {/* pagination */}
    </div>
  )
}

export default TransactionTable
