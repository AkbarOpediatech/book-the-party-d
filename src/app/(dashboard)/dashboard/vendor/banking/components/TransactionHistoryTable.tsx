import type { IOrder } from '@/redux/features/bookings/apiSlice'
import Image from 'next/image'
import DataTable, { TableColumn } from 'react-data-table-component'
import TransactionImg from '/public/assets/package1.png'

type IProps = {
  data: IOrder[] | undefined
}

const TransactionHistoryTable: React.FC<IProps> = ({ data }) => {
  const columns: TableColumn<IOrder>[] = [
    {
      name: 'Transaction',
      cell: (row: IOrder) => (
        <div className="flex items-center gap-4">
          <div className="size-10 flex-shrink-0 overflow-hidden rounded-lg">
            <Image
              width={40}
              height={40}
              className="overflow-hidden"
              src={
                row?.service_embedded?.featured_image ? row?.service_embedded?.featured_image : TransactionImg
              }
              alt="Product Image"
            />
          </div>
          <div className="whitespace-nowrap">
            <p className="text-sm font-semibold text-clr-36">{row.service_embedded.title}</p>
            <p className="text-sm text-clr-81">{row.service_embedded.title}</p>
          </div>
        </div>
      ),
      sortable: true,
      width: '450px'
    },
    {
      name: 'Amount',
      selector: (row: IOrder) => row.price.value,
      sortable: true
    },
    {
      name: 'Date',
      selector: (row: IOrder) =>
        row.selected_date.map(i => new Date(i.start_date).toLocaleDateString('en-GB')).join(', '),
      sortable: true
    },
    {
      name: 'ID',
      selector: (row: IOrder) => row._id,
      sortable: true,
      width: '100px'
    },
    {
      name: 'Status',
      cell: (row: IOrder) => (
        <span
          className={`whitespace-nowrap rounded px-2 py-1 font-bold ${row.status && 'Security deposit held' ? 'bg-yellow-100 text-yellow-500' : row.status && 'Payout amount' ? 'bg-green-100 text-green-500' : row.status && 'Amount withdrawn' ? 'bg-red-100 text-red-500' : ''}`}
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
