import type { IOrder } from '@/redux/features/bookings/apiSlice'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import DataTable, { type TableColumn } from 'react-data-table-component'
import productImage from '/public/assets/package1.png'

type IProps = {
  data: IOrder[]
}

const ListingTable: React.FC<IProps> = ({ data }) => {
  const columns: TableColumn<IOrder>[] = [
    {
      name: 'Item Name',
      cell: (row: IOrder) => (
        //TODO: make it slug
        <Link href={`/dashboard/vendor/listings/${row._id}`} className="flex items-center gap-4">
          <div className="size-10 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              src={row.service_embedded.featured_image ? row.service_embedded.featured_image : productImage}
              alt="Product Image"
            />
          </div>
          <div className="whitespace-nowrap">
            <p className="text-sm font-semibold text-clr-36">{row.service_embedded.title}</p>
            <p className="text-sm text-clr-81">{row.service_embedded.description}</p>
          </div>
        </Link>
      ),
      sortable: true,
      width: '400px'
    },
    {
      name: 'Category',
      selector: (row: IOrder) => row.service_embedded.category,
      sortable: true
    },
    {
      name: 'Price',
      cell: (row: IOrder) => (
        <div className="rounded-md bg-clr-81/20 px-2 py-[1px] text-sm font-bold text-clr-81">
          ${row.service_embedded.price.map(i => i.value)}
        </div>
      ),
      sortable: true
    },
    {
      name: 'Total Bookings',
      selector: () => 5, //TODO: make it dynamic
      sortable: true
    },

    {
      name: '',
      cell: (row: IOrder) => (
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
              <Link
                href={`/dashboard/vendor/listings/${row._id}`} // TODO: make it slug
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10"
              >
                View Listing
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href={'/dashboard/vendor/listings/edit-listing'}
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10"
              >
                Edit
              </Link>
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
        data={data}
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

export default ListingTable
