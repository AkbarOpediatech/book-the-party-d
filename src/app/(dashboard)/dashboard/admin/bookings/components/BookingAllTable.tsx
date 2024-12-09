'use client'
import type { IOrder } from '@/redux/features/bookings/apiSlice'
import { cn } from '@/utils'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon, PencilIcon, Square2StackIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import DataTable, { type TableColumn } from 'react-data-table-component'
import productImage from '/public/assets/package1.png'

type IProps = {
  data: IOrder[] | undefined
}

const BookingAllTable: React.FC<IProps> = ({ data }) => {
  const columns: TableColumn<IOrder>[] = [
    {
      name: 'Event',
      cell: (row: IOrder) => (
        <div className="flex items-center gap-4">
          <div className="size-10 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              src={row.service_embedded.featured_image ? row.service_embedded.featured_image : productImage}
              alt="Product Image"
            />
          </div>
          <div className="whitespace-nowrap">
            <p className="text-sm font-semibold text-clr-36">{row.service_embedded.title}</p>
            <p className="w-28 truncate text-sm text-clr-81">{row.order}</p>
          </div>
        </div>
      ),
      sortable: true,
      width: '230px'
    },
    {
      name: 'Start Date',
      selector: (row: IOrder) =>
        row.selected_date.map(i => new Date(i.start_date).toLocaleDateString('en-GB')).join(', '),
      sortable: true
    },
    {
      name: 'End Date',
      selector: (row: IOrder) =>
        row.selected_date.map(i => new Date(i.end_date).toLocaleDateString('en-GB')).join(', '),
      sortable: true
    },
    {
      name: 'Sale Total',
      cell: (row: IOrder) => <div>${row.amount.total}</div>,
      sortable: true
    },
    {
      name: 'Fee(10%)',
      cell: (row: IOrder) => <div>${row.amount.order_fee}</div>,

      sortable: true
    },
    {
      name: 'Total payout(incl GST)',
      cell: (row: IOrder) => <div>${row.amount.discounted_service_total}</div>,
      sortable: true
    },
    {
      name: 'Status',
      cell: (row: IOrder) => (
        <span
          className={cn(
            'whitespace-nowrap rounded bg-gray-100 px-2 py-1 font-bold capitalize text-gray-500',
            row.status === 'completed' && 'bg-green-100 text-green-500',
            row.status === 'pending' && 'bg-red-100 text-red-500',
            row.status === 'processing' && 'bg-yellow-100 text-yellow-500'
          )}
        >
          {row.status}
        </span>
      ),
      sortable: true
    },
    {
      name: '',
      cell: () => (
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
      {data && (
        <DataTable
          columns={columns}
          data={data}
          pagination
          customStyles={customStyles}
          selectableRows
          responsive
          highlightOnHover
          striped
          className="text-sm"
        />
      )}
    </div>
  )
}

export default BookingAllTable
