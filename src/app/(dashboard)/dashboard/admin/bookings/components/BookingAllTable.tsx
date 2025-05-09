'use client'

import type { IOrder } from '@/types/common'
import { cn } from '@/utils'
import Image from 'next/image'
import DataTable, { type TableColumn } from 'react-data-table-component'
import productImage from '/public/assets/package1.png'

// interface IOrder {
//   _id?: string
//   order?: {
//     _id: string
//     user: string
//     status: string
//     currency: string
//     payment_method: string
//     stripe_ch_id: string
//     stripe_pi_id: string
//     stripe_transfer_group: string
//     notes: string
//     amount: {
//       service_total: number
//       discounted_service_total: number
//       discount: number
//       security_deposit: number
//       subtotal: number
//       order_fee: number
//       tax: number
//       shipping_fee: number
//       total: number
//     }
//     billing_details?: {
//       name: string
//       email: string
//       phone?: string
//       city: string
//       state: string
//       country: string
//       postcode: string
//       street: string
//     }
//     shipping_details?: any
//     createdAt: string
//     updatedAt: string
//   }
//   user?: {
//     _id: string
//     name: string
//     email: string
//     phone?: string
//     avatar?: string
//     role: string
//     specialized: string[]
//     stripe_acct?: string | null
//     about?: string
//     email_verified_at?: string | null
//     phone_verified_at?: string | null
//     status: string
//     createdAt: string
//     updatedAt: string
//   }
//   vendor?: string
//   service?: string
//   service_embedded?: {
//     title: string
//     description: string
//     featured_image: string | null
//     category: string
//     location: string
//     inclusions: string[]
//     infos: string[]
//     price_type: 'fixed' | 'variable' | 'hourly'
//     price: {
//       text: string
//       value: number
//       _id: string
//     }[]
//     security_deposit: number
//     cancellation_period_hours: number
//   }
//   notes?: string
//   quantity?: number
//   price_id?: string
//   price?: {
//     text: string
//     value: number
//   }
//   selected_date?: {
//     start_date: string
//     end_date: string
//   }[]
//   amount?: {
//     service_total: number
//     discounted_service_total: number
//     discount: number
//     security_deposit: number
//     subtotal: number
//     order_fee: number
//     tax: number
//     shipping_fee: number
//     total: number
//   }
//   coupons?: string[]
//   security_deposit_payout_percentage?: number
//   status?:
//     | 'draft'
//     | 'pending'
//     | 'processing'
//     | 'completed_request_vendor'
//     | 'completed'
//     | 'cancelled'
//     | string
//   history?: {
//     message: string
//     user: string | null
//     date: string
//   }[]
//   createdAt?: string
//   updatedAt?: string
// }

type IProps = {
  data: IOrder[]
  currentPage: number
  pageLimit: number
  onPageChange: (page: number) => void
  onPageLimitChange: (limit: number) => void
  totalRecords: number
}

const BookingAllTable: React.FC<IProps> = ({
  data,
  pageLimit,
  onPageChange,
  onPageLimitChange,
  totalRecords
}) => {
  const columns: TableColumn<IOrder>[] = [
    {
      name: 'Event',
      cell: (row: IOrder) => (
        <div className="flex items-center gap-4">
          <div className="size-10 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              width={40}
              height={40}
              className="center h-full w-full object-cover"
              src={row?.service_embedded?.featured_image || productImage}
              alt="Product Image"
            />
          </div>
          <div className="whitespace-nowrap">
            <p className="text-sm font-semibold text-clr-36">{row?.service_embedded?.title}</p>
            <p className="w-28 truncate text-sm text-clr-81">{row?.order?.notes}</p>
          </div>
        </div>
      ),
      sortable: true,
      width: '230px'
    },
    // {
    //   name: 'Start Date',
    //   selector: (row: IOrder) =>
    //     row?.selected_date?.map(i => new Date(i.start_date).toLocaleDateString('en-GB')).join(', '),
    //   sortable: true
    // },
    // {
    //   name: 'End Date',
    //   selector: (row: IOrder) =>
    //     row?.selected_date?.map(i => new Date(i.end_date).toLocaleDateString('en-GB')).join(', '),
    //   sortable: true
    // },
    {
      name: 'Sale Total',
      cell: (row: IOrder) => <div>${row?.amount?.total}</div>,
      sortable: true
    },
    {
      name: 'Fee(10%)',
      cell: (row: IOrder) => <div>${row?.amount?.order_fee}</div>,

      sortable: true
    },
    {
      name: 'Total payout(incl GST)',
      cell: (row: IOrder) => <div>${row?.amount?.discounted_service_total}</div>,
      sortable: true
    },
    {
      name: 'Status',
      cell: (row: IOrder) => (
        <span
          className={cn(
            'whitespace-nowrap rounded bg-gray-100 px-2 py-1 font-bold capitalize text-gray-500',
            row?.status === 'completed' && 'bg-green-100 text-green-500',
            row?.status === 'pending' && 'bg-red-100 text-red-500',
            row?.status === 'processing' && 'bg-yellow-100 text-yellow-500'
          )}
        >
          {row?.status}
        </span>
      ),
      sortable: true
    }
    // {
    //   name: '',
    //   cell: () => (
    //     <Menu>
    //       <MenuButton>
    //         <EllipsisVerticalIcon className="size-4 fill-black/30" />
    //       </MenuButton>

    //       <MenuItems
    //         transition
    //         anchor="bottom end"
    //         className="w-36 origin-top-right rounded-xl border bg-white p-1 text-sm/6 text-black shadow-sm transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
    //       >
    //         <MenuItem>
    //           <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10">
    //             <PencilIcon className="size-4 fill-black/30" />
    //             Edit
    //           </button>
    //         </MenuItem>
    //         <MenuItem>
    //           <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10">
    //             <Square2StackIcon className="size-4 fill-black/30" />
    //             Duplicate
    //           </button>
    //         </MenuItem>
    //       </MenuItems>
    //     </Menu>
    //   ),
    //   width: '50px'
    // }
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
        <>
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
        </>
      )}
    </div>
  )
}

export default BookingAllTable
