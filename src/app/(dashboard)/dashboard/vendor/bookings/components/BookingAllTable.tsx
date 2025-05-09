'use client'
import FullPageLoader from '@/app/(landing)/components/Loader/FullPageLoader'
import { useUpdateBookingMutation } from '@/redux/features/bookings/apiSlice'
import type { IOrder } from '@/types/common'
import { cn } from '@/utils'
import Image from 'next/image'
import React, { useState } from 'react'
import DataTable, { type TableColumn } from 'react-data-table-component'
import Swal from 'sweetalert2'
import ActionMenu from './ActionMenu'
import productImage from '/public/assets/package1.png'

type IProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
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
  const [updateBooking] = useUpdateBookingMutation()
  const [loading, setLoading] = useState(false)

  const shouldRenderEmpty = (status: string): boolean => {
    switch (status) {
      case 'completed':
      case 'cancelled':
      case 'completed_request_vendor':
      case 'draft':
        return true
      default:
        return false
    }
  }

  const handleProcessingOrder = async (id: string) => {
    setLoading(true)
    try {
      await updateBooking({ _id: id, status: 'processing' }).unwrap()

      Swal.fire({
        title: 'Success!',
        text: 'Order processing successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
        background: '#f4f7fb',
        color: '#4caf50'
      })
    } catch (error) {
      console.error('Failed to processing order:', error)
      Swal.fire({
        title: 'Error!',
        text: 'Failed to process the order. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
        background: '#f4f7fb',
        color: '#f44336'
      })
    } finally {
      setLoading(false)
    }
  }

  const handleCancelOrder = async (id: string) => {
    setLoading(true)
    try {
      await updateBooking({ _id: id, status: 'cancelled' }).unwrap()

      Swal.fire({
        title: 'Success!',
        text: 'Order canceled successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
        background: '#f4f7fb',
        color: '#4caf50'
      })
    } catch (error) {
      console.error('Failed to cancel order:', error)
      Swal.fire({
        title: 'Error!',
        text: 'Failed to cancel the order. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
        background: '#f4f7fb',
        color: '#f44336'
      })
    } finally {
      setLoading(false)
    }
  }

  const handleCompleteOrder = async (id: string) => {
    setLoading(true)
    try {
      await updateBooking({ _id: id, status: 'completed' }).unwrap()
      Swal.fire({
        title: 'Success!',
        text: 'Order completed successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
        background: '#f4f7fb',
        color: '#4caf50'
      })
    } catch (error) {
      console.error('Failed to cancel order:', error)
      Swal.fire({
        title: 'Error!',
        text: 'Failed to complete the order. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
        background: '#f4f7fb',
        color: '#f44336'
      })
    } finally {
      setLoading(false)
    }
  }

  const handleRequestApproval = async (id: string) => {
    setLoading(true)
    try {
      await updateBooking({ _id: id, status: 'completed_request_vendor' }).unwrap()
      Swal.fire({
        title: 'Success!',
        text: 'Approval requested successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
        background: '#f4f7fb',
        color: '#4caf50'
      })
    } catch (error) {
      console.error('Failed to request approval:', error)
      Swal.fire({
        title: 'Error!',
        text: 'Failed to request approval. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
        background: '#f4f7fb',
        color: '#f44336'
      })
    } finally {
      setLoading(false)
    }
  }

  const columns: TableColumn<IOrder>[] = [
    {
      name: 'Event',
      cell: (row: IOrder) => (
        <div className="flex items-center gap-4">
          <div className="size-10 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              width={40}
              height={40}
              src={row?.service_embedded?.featured_image || productImage}
              alt="Product Image"
            />
          </div>
          <div className="whitespace-nowrap">
            <p className="text-sm font-semibold text-clr-36">{row?.service_embedded?.title}</p>
            <p className="w-28 truncate text-sm text-clr-81">{row?.order?.billing_details?.email}</p>
          </div>
        </div>
      ),
      sortable: true,
      width: '230px'
    },

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
    },

    {
      name: '',
      cell: (row: IOrder) =>
        shouldRenderEmpty(row.status as string) ? (
          ''
        ) : (
          <ActionMenu
            status={row.status}
            id={row._id as string}
            onCancel={handleCancelOrder}
            onProcess={handleProcessingOrder}
            onComplete={handleCompleteOrder}
            onRequestApproval={handleRequestApproval}
          />
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
    return <FullPageLoader type="loading" />
  }

  return (
    <div className="p-2">
      {data && (
        <>
          <DataTable
            columns={columns}
            data={data || []}
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
