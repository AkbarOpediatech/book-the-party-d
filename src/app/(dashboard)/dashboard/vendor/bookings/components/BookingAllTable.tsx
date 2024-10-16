'use client'
import { bookingData, type IBookingData } from '@/utils'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon, PencilIcon, Square2StackIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import DataTable, { type TableColumn } from 'react-data-table-component'

const BookingAllTable = () => {
  const columns: TableColumn<IBookingData>[] = [
    {
      name: 'Event',
      cell: (row: IBookingData) => (
        <div className="flex items-center gap-4">
          <div className="size-10 flex-shrink-0 overflow-hidden rounded-full">
            <Image src={row.image} alt="Product Image" />
          </div>
          <div className="whitespace-nowrap">
            <p className="text-sm font-semibold text-clr-36">{row.eventTitle}</p>
            <p className="text-sm text-clr-81">{row.eventId}</p>
          </div>
        </div>
      ),
      sortable: true,
      width: '230px'
    },
    {
      name: 'Start Date',
      selector: (row: IBookingData) => row.startDate,
      sortable: true
    },
    {
      name: 'End Date',
      selector: (row: IBookingData) => row.endDate,
      sortable: true
    },
    {
      name: 'Sale Total',
      selector: (row: IBookingData) => row.saleTotal,
      sortable: true
    },
    {
      name: 'Fee(10%)',
      selector: (row: IBookingData) => row.fee,
      sortable: true
    },
    {
      name: 'Total payout(incl GST)',
      selector: (row: IBookingData) => row.fee,
      sortable: true
    },
    {
      name: 'Status',
      cell: (row: IBookingData) => (
        <span
          className={`rounded px-2 py-1 font-bold ${row.status === 'Request payout' ? 'bg-yellow-100 text-yellow-500' : row.status === 'Payout amount' ? 'bg-green-100 text-green-500' : row.status === 'Amount withdrawn' ? 'bg-red-100 text-red-500' : ''} whitespace-nowrap`}
        >
          {row.status}
        </span>
      ),
      sortable: true
    },
    {
      name: '',
      cell: (row: IBookingData) => (
        <Menu>
          <MenuButton>
            <EllipsisVerticalIcon className="size-4 fill-black/30" />
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="w-36 origin-top-right rounded-xl border bg-white p-1 text-sm/6 text-black shadow-sm transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
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
      ),
      width: '50px'
    }
  ]

  const customStyles = {
    headCells: {
      style: {
        fontSize: '14px',
        fontWeight: 'semibold',
        backgroundColor: '#F8F8F8',
        color: '#637381'
      }
    },
    rows: {
      style: {
        backgroundColor: 'inherit !important',
        fontSize: '14px',
        color: '#363636',
        borderBottom: 'none !important',
        border: 'none'
      }
    },
    cells: {
      style: {
        padding: '16px',
        backgroundColor: 'inherit !important',
        borderBottom: 'none !important'
      }
    }
  }
  return (
    <div className="p-2">
      <DataTable
        columns={columns}
        data={bookingData}
        pagination
        customStyles={customStyles}
        selectableRows
        responsive
        highlightOnHover
        striped
        className="text-sm"
      />
    </div>
  )
}

export default BookingAllTable
