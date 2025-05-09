import { useDeleteServiceMutation, type ServiceItem } from '@/redux/features/services/apiSlice'
import { cn } from '@/utils'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import DataTable, { type TableColumn } from 'react-data-table-component'
import ListingEditPopUp from './ListingEditPopUp'
import productImage from '/public/assets/package1.png'
import Swal from 'sweetalert2'

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
  const [editListingPopup, setEditListingPopup] = useState(false)
  const [selectedRowData, setSelectedRowData] = useState<ServiceItem | null>(null)
  const [deleteService, { isLoading: isDeleting }] = useDeleteServiceMutation()
  const handleEditClick = (row: ServiceItem) => {
    setSelectedRowData(row)
    setEditListingPopup(true)
  }
  const handleDeleteClick = async (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      background: '#f4f7fb',
      color: '#4caf50'
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          await deleteService(id).unwrap()
          Swal.fire({
            title: 'Deleted!',
            text: 'Service has been deleted successfully.',
            icon: 'success',
            confirmButtonText: 'OK',
            background: '#f4f7fb',
            color: '#4caf50'
          })
        } catch (error) {
          console.error('Failed to delete service:', error)
          Swal.fire({
            title: 'Error!',
            text: 'Failed to delete the service. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK',
            background: '#f4f7fb',
            color: '#f44336'
          })
        }
      }
    })
  }

  const columns: TableColumn<ServiceItem>[] = [
    {
      name: 'Item Name',
      cell: (row: ServiceItem) => (
        <Link href={`/dashboard/vendor/listings/${row?.slug}`} className="flex items-center gap-4">
          <div className="size-10 flex-shrink-0 overflow-hidden rounded-full">
            <Image width={40} height={40} src={row?.featured_image || productImage} alt="Product Image" />
          </div>
          <div className="whitespace-nowrap">
            <p className="text-sm font-semibold text-clr-36">{row?.title}</p>
            {/* <div dangerouslySetInnerHTML={{__html: '<p>First &middot; Second</p>'}}>{row.description}</div> */}

            <p
              className="h-4 w-64 truncate text-sm text-clr-81"
              dangerouslySetInnerHTML={{ __html: `<p>${row?.infos}</p>` }}
            ></p>
          </div>
        </Link>
      ),
      sortable: true,
      width: '400px'
    },

    {
      name: 'Price',
      cell: (row: ServiceItem) => (
        <div className="rounded-md bg-clr-81/20 px-2 py-[1px] text-sm font-bold text-clr-81">
          ${row?.price?.map(i => i.value)}
        </div>
      ),
      sortable: true
    },

    {
      name: 'Security Deposit',
      cell: (row: ServiceItem) => (
        <div className="rounded-md bg-clr-81/20 px-2 py-[1px] text-sm font-bold text-clr-81">
          ${row?.security_deposit || 'N/A'}
        </div>
      ),
      sortable: true
    },

    {
      name: 'Status',
      cell: (row: ServiceItem) => (
        <span
          className={cn(
            'whitespace-nowrap rounded bg-gray-100 px-2 py-1 font-bold capitalize text-gray-500',
            row?.status === 'publish' && 'bg-green-100 text-green-500',
            row?.status === 'pending' && 'bg-red-100 text-red-500'
          )}
        >
          {row?.status}
        </span>
      ),
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
                href={`/dashboard/vendor/listings/${row?.slug}`}
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10"
              >
                View Listing
              </Link>
            </MenuItem>
            <MenuItem>
              <button
                onClick={() => handleEditClick(row)}
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10"
              >
                Edit
              </button>
            </MenuItem>
            <MenuItem>
              <button
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10"
                onClick={() => handleDeleteClick(row._id!)}
              >
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
    <>
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
      {editListingPopup && (
        <ListingEditPopUp
          isOpen={editListingPopup}
          onClose={() => setEditListingPopup(false)}
          title="Edit Listing"
          tableData={selectedRowData}
        />
      )}
    </>
  )
}

export default ListingTable
