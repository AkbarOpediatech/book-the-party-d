import FullPageLoader from '@/app/(landing)/components/Loader/FullPageLoader'
import { useTransferBankingMutation, type IBanking } from '@/redux/features/bankings/apiSlice'
import { cn } from '@/utils'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import { useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'
import Swal from 'sweetalert2'
import TransactionImg from '/public/assets/package1.png'

type IProps = {
  data: IBanking[] | undefined
  currentPage: number
  pageLimit: number
  onPageChange: (page: number) => void
  onPageLimitChange: (limit: number) => void
  totalRecords: number
}

const TransactionHistoryTable: React.FC<IProps> = ({
  data,
  pageLimit,
  onPageChange,
  onPageLimitChange,
  totalRecords
}) => {
  // const dispatch = useDispatch()
  const [transferBanking] = useTransferBankingMutation()
  const [loading, setLoading] = useState<string | null>(null)

  const handleTransferPayment = async (row: IBanking) => {
    setLoading(row._id)
    try {
      await transferBanking({
        _id: row?._id,
        stripe_ch_id: row?.stripe_ch_id
      }).unwrap()

      Swal.fire({
        title: 'Success!',
        text: 'Payment transferred successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
        background: '#f4f7fb',
        color: '#4caf50'
      })
    } catch (error) {
      console.error('Transfer failed:', error)
      Swal.fire({
        title: 'Error!',
        text: 'Payment transfer failed. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
        background: '#f4f7fb',
        color: '#f44336'
      })
    } finally {
      setLoading(null)
    }
  }

  const columns: TableColumn<IBanking>[] = [
    {
      name: 'Transaction',
      cell: (row: IBanking) => (
        <div className="flex items-center gap-4">
          <div className="size-10 flex-shrink-0 overflow-hidden rounded-lg">
            <Image
              width={40}
              height={40}
              className="overflow-hidden"
              src={(row?.service?.featured_image as string) || TransactionImg}
              alt="Product Image"
            />
          </div>

          <div className="whitespace-nowrap">
            <p className="text-sm font-semibold text-clr-36">{row?.service?.title || 'Service name'}</p>
            <p
              className="h-5 w-64 truncate text-sm text-clr-81"
              dangerouslySetInnerHTML={{ __html: `<p>${row?.service?.infos}</p>` }}
            ></p>
          </div>
        </div>
      ),
      sortable: true,
      width: '450px'
    },
    {
      name: 'Amount',
      selector: (row: IBanking) => row?.amount,
      sortable: true
    },
    {
      name: 'Date',
      selector: (row: IBanking) => new Date(row?.updatedAt).toLocaleDateString(),
      sortable: true
    },

    {
      name: 'Status',
      cell: (row: IBanking) => (
        <span
          className={cn(
            'whitespace-nowrap rounded bg-gray-100 px-2 py-1 font-bold capitalize text-gray-500',
            row?.status === 'succeeded' && 'bg-green-100 text-green-500',
            row?.status === 'canceled' && 'bg-red-100 text-red-500'
          )}
        >
          {row?.status}
        </span>
      ),
      sortable: true,
      width: '200px'
    },

    {
      name: '',
      cell: (row: IBanking) =>
        row?.status === 'pending' && (
          <Menu>
            <MenuButton>
              <EllipsisVerticalIcon className="size-4 fill-black/30" />
            </MenuButton>

            <MenuItems
              transition
              anchor="bottom end"
              className="w-64 origin-top-right rounded-xl border bg-white p-1 text-sm/6 text-black shadow-sm transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <MenuItem>
                <div className="flex flex-col">
                  <button
                    className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-black/10"
                    onClick={() => handleTransferPayment(row)}
                    disabled={loading === row._id}
                  >
                    {loading === row._id ? <FullPageLoader /> : 'Transfer Payment'}
                  </button>
                </div>
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

  if (loading) {
    return <FullPageLoader type="loading" message="Processing payment..." />
  }

  return (
    data && (
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
      />
    )
  )
}

export default TransactionHistoryTable
