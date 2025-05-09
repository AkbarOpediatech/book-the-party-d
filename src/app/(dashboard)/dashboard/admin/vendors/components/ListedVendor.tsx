import FullPageLoader from '@/app/(landing)/components/Loader/FullPageLoader'
import { useUpdateUserMutation, type IUser } from '@/redux/features/user/apiSlice'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import DataTable, { type TableColumn } from 'react-data-table-component'
import Swal from 'sweetalert2'
import vendorImg from '/public/assets/avatar.jpeg'

type IProps = {
  data: IUser[]
  handlePageChange: (page: number) => void
  handlePageLimitChange: (limit: number) => void
  totalRecords: number
  pageLimit: number
}

const ListedVendor: React.FC<IProps> = ({
  data,
  handlePageChange,
  handlePageLimitChange,
  totalRecords,
  pageLimit
}) => {
  const [updateUser] = useUpdateUserMutation()
  const [loadingId, setLoadingId] = useState<string | null>(null)

  const handleDecline = async (id: string) => {
    setLoadingId(id) // Set the loading ID
    const formData = new FormData()
    formData.append('status', 'inactive')
    try {
      await updateUser({ id, formData }).unwrap()
      await Swal.fire({
        title: 'Success!',
        text: 'Vendor request declined successfully.',
        icon: 'success',
        confirmButtonText: 'OK',
        background: '#f4f7fb',
        color: '#4caf50'
      })
      setLoadingId(null)
    } catch (error) {
      await Swal.fire({
        title: 'Error!',
        text: 'An error occurred while declining the request.',
        icon: 'error',
        confirmButtonText: 'OK',
        background: '#f4f7fb',
        color: '#f44336'
      })
      setLoadingId(null)
    } finally {
      setLoadingId(null)
    }
  }

  const imageLoader = ({ src }: { src: string }) => {
    return src
  }

  if (loadingId) {
    return <FullPageLoader type="loading" />
  }

  const columns: TableColumn<IUser>[] = [
    {
      name: 'Vendor Name',
      cell: (row: IUser) => (
        <Link href={`/dashboard/admin/vendors/${row?._id}`} className="flex items-center gap-4">
          <div className="size-10 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              width={50}
              height={50}
              className="center h-full w-full object-cover"
              loader={imageLoader}
              src={row?.avatar || vendorImg.src}
              alt="Vendor Image"
            />
          </div>
          <div className="whitespace-nowrap">
            <p className="text-sm font-semibold text-clr-36">{row?.name}</p>
            <p className="w-72 truncate text-sm text-clr-81">{row?.about}</p>
          </div>
        </Link>
      ),
      sortable: true,
      width: '400px'
    },

    {
      name: 'Join date',
      selector: (row: IUser) => {
        if (!row?.createdAt) return ''
        const date = new Date(row.createdAt)
        const day = date.getDate().toString().padStart(2, '0')
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const year = date.getFullYear()
        return `${day}/${month}/${year}`
      },
      sortable: true
    },

    {
      name: 'Phone',
      selector: (row: IUser) => row?.phone ?? '',
      sortable: true
    },

    {
      name: 'Email',
      selector: (row: IUser) => row?.email ?? '',
      sortable: true
    },

    {
      name: '',
      cell: (row: IUser) => (
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
                href={`/dashboard/admin/vendors/${row?._id}`}
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10"
              >
                View Vendor
              </Link>
            </MenuItem>
            <MenuItem>
              <button
                onClick={() => handleDecline(row._id as string)}
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10"
                disabled={loadingId === row._id}
              >
                Inactive
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
        onChangePage={handlePageChange}
        paginationPerPage={pageLimit}
        customStyles={customStyles}
        paginationRowsPerPageOptions={[5, 10, 15, 25, 30]}
        onChangeRowsPerPage={newLimit => handlePageLimitChange(newLimit)}
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

export default ListedVendor
