import { vendorsData, type IVendorsData } from '@/utils'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import DataTable, { type TableColumn } from 'react-data-table-component'

const VendorRequest = () => {
  const columns: TableColumn<IVendorsData>[] = [
    {
      name: 'Vendor Name',
      cell: (row: IVendorsData) => (
        <Link href={`/dashboard/admin/vendors/${row.id}`} className="flex items-center gap-4">
          <div className="size-10 flex-shrink-0 overflow-hidden rounded-full">
            <Image src={row.image} alt="Product Image" />
          </div>
          <div className="whitespace-nowrap">
            <p className="text-sm font-semibold text-clr-36">{row.vendorName}</p>
            <p className="text-sm text-clr-81">{row.vendorDesc}</p>
          </div>
        </Link>
      ),
      sortable: true
    },
    {
      name: 'Join date',
      selector: (row: IVendorsData) => row.joinDate,
      sortable: true
    },
    {
      name: 'Action',
      cell: (row: IVendorsData) => (
        <div className="flex gap-2">
          <button className="rounded-md bg-clr-1c/20 px-2 py-[1px] text-sm font-bold capitalize text-clr-1c">
            Accept
          </button>
          <button className="rounded-md bg-clr-d48/20 px-2 py-[1px] text-sm font-bold capitalize text-clr-d48">
            Decline
          </button>
        </div>
      ),
      sortable: true
    },

    {
      name: '',
      cell: (row: IVendorsData) => (
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
                View Vendor
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10">
                Edit
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10">
                Delete
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
        data={vendorsData}
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

export default VendorRequest
