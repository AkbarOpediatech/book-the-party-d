import { transactions, type ITransactionType } from '@/utils'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon, PencilIcon, Square2StackIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import DataTable, { TableColumn } from 'react-data-table-component'

const TransactionHistoryTable = () => {
  const columns: TableColumn<ITransactionType>[] = [
    {
      name: 'Transaction',
      cell: (row: ITransactionType) => (
        <div className="flex items-center gap-4">
          <div className="size-[60px]flex-shrink-0 overflow-hidden rounded-lg">
            <Image src={row.image} alt="Product Image" />
          </div>
          <div className="whitespace-nowrap">
            <p className="text-sm font-semibold text-clr-36">{row.title}</p>
            <p className="text-sm text-clr-81">{row.description}</p>
          </div>
        </div>
      ),
      sortable: true,
      width: '450px'
    },
    {
      name: 'Amount',
      selector: (row: ITransactionType) => row.amount,
      sortable: true
    },
    {
      name: 'Date',
      selector: (row: ITransactionType) => row.date,
      sortable: true
    },
    {
      name: 'ID',
      selector: (row: ITransactionType) => row.id,
      sortable: true,
      width: '100px'
    },
    {
      name: 'Status',
      cell: (row: ITransactionType) => (
        <span
          className={`whitespace-nowrap rounded px-2 py-1 font-bold ${row.status === 'Security deposit held' ? 'bg-yellow-100 text-yellow-500' : row.status === 'Payout amount' ? 'bg-green-100 text-green-500' : row.status === 'Amount withdrawn' ? 'bg-red-100 text-red-500' : ''}`}
        >
          {row.status}
        </span>
      ),
      sortable: true,
      width: '200px'
    },
    {
      name: '',
      cell: () => (
        <Menu>
          <MenuButton>
            <EllipsisVerticalIcon className="size-4 fill-black/30" />
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="w-52 origin-top-right rounded-xl border bg-white p-1 text-sm/6 text-black shadow-sm transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10">
                <PencilIcon className="size-4 fill-black/30" />
                Edit
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10">
                <Square2StackIcon className="size-4 fill-black/30" />
                Duplicate
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      ),
      width: '100px'
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
    <DataTable
      columns={columns}
      data={transactions}
      pagination
      customStyles={customStyles}
      selectableRows
      responsive
      highlightOnHover
      striped
    />
  )
}

export default TransactionHistoryTable
