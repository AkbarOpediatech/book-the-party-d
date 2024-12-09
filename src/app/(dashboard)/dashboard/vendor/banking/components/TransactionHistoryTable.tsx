import type { IBanking } from '@/redux/features/bankings/apiSlice'
import { cn } from '@/utils'
import Image from 'next/image'
import DataTable, { TableColumn } from 'react-data-table-component'
import TransactionImg from '/public/assets/package1.png'

type IProps = {
  data: IBanking[] | undefined
}

const TransactionHistoryTable: React.FC<IProps> = ({ data }) => {
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
              src={row.service?.featured_image ? row.service?.featured_image : TransactionImg}
              alt="Product Image"
            />
          </div>
          <div className="whitespace-nowrap">
            <p className="text-sm font-semibold text-clr-36">{row.service.title}</p>
            <p className="text-sm text-clr-81">{row.service.description}</p>
          </div>
        </div>
      ),
      sortable: true,
      width: '450px'
    },
    {
      name: 'Amount',
      selector: (row: IBanking) => row.amount,
      sortable: true
    },
    {
      name: 'Date',
      selector: (row: IBanking) => row.updatedAt,
      sortable: true
    },
    {
      name: 'ID',
      selector: (row: IBanking) => row.order,
      sortable: true,
      width: '100px'
    },
    {
      name: 'Status',
      cell: (row: IBanking) => (
        <span
          className={cn(
            'whitespace-nowrap rounded bg-gray-100 px-2 py-1 font-bold capitalize text-gray-500',
            row.status === 'succeeded' && 'bg-green-100 text-green-500',
            row.status === 'canceled' && 'bg-red-100 text-red-500'
          )}
        >
          {row.status}
        </span>
      ),
      sortable: true,
      width: '200px'
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
    data && (
      <DataTable
        columns={columns}
        data={data}
        pagination
        customStyles={customStyles}
        selectableRows
        responsive
        highlightOnHover
        striped
      />
    )
  )
}

export default TransactionHistoryTable
