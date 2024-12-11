import type { ServiceItem } from '@/redux/features/services/apiSlice'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import DataTable, { type TableColumn } from 'react-data-table-component'
import productImage from '/public/assets/package1.png'

type IProps = {
  data: ServiceItem[]
  currentPage: number
  pageLimit: number
  onPageChange: (page: number) => void
  onPageLimitChange: (limit: number) => void
  totalRecords: number
}

const ListingTable: React.FC<IProps> = ({
  data,
  pageLimit,
  onPageChange,
  onPageLimitChange,
  totalRecords
}) => {
  const columns: TableColumn<ServiceItem>[] = [
    {
      name: 'Item Name',
      cell: (row: ServiceItem) => (
        <Link href={`/dashboard/vendor/listings/${row.slug}`} className="flex items-center gap-4">
          <div className="size-10 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              width={40}
              height={40}
              src={row.featured_image ? row.featured_image : productImage}
              alt="Product Image"
            />
          </div>
          <div className="whitespace-nowrap">
            <p className="text-sm font-semibold text-clr-36">{row.title}</p>
            <p className="text-sm text-clr-81">{row.description}</p>
          </div>
        </Link>
      ),
      sortable: true,
      width: '400px'
    },
    {
      name: 'Category',
      selector: (row: ServiceItem) => row.category.title,
      sortable: true
    },
    {
      name: 'Price',
      cell: (row: ServiceItem) => (
        <div className="rounded-md bg-clr-81/20 px-2 py-[1px] text-sm font-bold text-clr-81">
          ${row.price.map(i => i.value)}
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
      cell: (row: ServiceItem) => (
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
                href={`/dashboard/vendor/listings/${row.slug}`}
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
        paginationServer
        paginationTotalRows={totalRecords}
        onChangePage={onPageChange}
        paginationPerPage={pageLimit}
        customStyles={customStyles}
        paginationRowsPerPageOptions={[5, 10, 15, 25, 30]}
        onChangeRowsPerPage={newLimit => onPageLimitChange(newLimit)}
        paginationComponentOptions={{
          rowsPerPageText: 'Rows per page:',
          rangeSeparatorText: 'of',
          noRowsPerPage: false,
          selectAllRowsItem: false,
          selectAllRowsItemText: 'All'
        }}
        highlightOnHover
        striped
        responsive
        selectableRows
        className="text-sm"
      />
    </div>
  )
}

export default ListingTable
