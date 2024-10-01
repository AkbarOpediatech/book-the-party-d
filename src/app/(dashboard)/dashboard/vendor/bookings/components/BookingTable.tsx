'use client'
import { cn } from '@/utils'
import { Select } from '@headlessui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import React, { useEffect, useState } from 'react'
import BookingAllTable from './BookingAllTable'

const BookingTable = () => {
  const [tab, setTab] = useState(0)
  const [tabCheck, setTabCheck] = useState(false)

  /* storing tab in localStorage */
  const handleTab = (index: any) => {
    setTab(index)
    localStorage.setItem('tab', index)
  }

  /* getting tab from localStorage */
  useEffect(() => {
    const storedTab = localStorage.getItem('tab')
    if (storedTab) {
      setTab(Number(storedTab))
      setTabCheck(true)
    } else {
      setTabCheck(true)
    }
  }, [tabCheck])
  return (
    <React.Fragment>
      {/* tabs */}
      <div className="flex rounded-tl-lg rounded-tr-lg border">
        <button
          className={cn(
            'flex items-center gap-2 border-b-2 border-b-transparent px-6 py-3 text-sm font-semibold capitalize text-clr-81',
            tab === 0 && 'border-b-2 border-b-clr-0e8 text-clr-36'
          )}
          onClick={() => handleTab(0)}
        >
          all
          <span className="rounded-md bg-clr-0e8/20 p-1 text-xs font-bold">24</span>
        </button>

        <button
          className={cn(
            'flex items-center gap-2 border-b-2 border-b-transparent px-6 py-3 text-sm font-semibold capitalize text-clr-81',
            tab === 1 && 'border-b-clr-03 border-b-2 text-clr-36'
          )}
          onClick={() => handleTab(1)}
        >
          pending
          <span className="bg-clr-03/20 rounded-md p-1 text-xs font-bold">24</span>
        </button>

        <button
          className={cn(
            'flex items-center gap-2 border-b-2 border-b-transparent px-6 py-3 text-sm font-semibold capitalize text-clr-81',
            tab === 2 && 'border-b-clr-16 border-b-2 text-clr-36'
          )}
          onClick={() => handleTab(2)}
        >
          complete
          <span className="bg-clr-16/20 rounded-md p-1 text-xs font-bold">24</span>
        </button>
      </div>
      <div className="rounded-lg rounded-tl-none rounded-tr-none bg-white shadow">
        <div className="p-2">
          {/* search filter */}
          {/* <div className="flex flex-wrap items-center justify-between rounded py-5 md:px-6"> */}
          <div className="mb-4 flex gap-2 md:grid md:flex-none md:grid-cols-5 md:flex-nowrap md:gap-0 md:space-x-4">
            <Select
              className={'input-date text-sm text-clr-36 focus:outline-none'}
              name="status"
              aria-label="Categories"
            >
              <option value="Wedding" className="text-sm text-clr-36">
                Wedding
              </option>
            </Select>

            <input type="date" className="input-date" placeholder="Start date" />

            <input type="date" className="input-date" placeholder="End date" />

            <input
              type="text"
              className="input-date bg-left-[20px] col-span-2 bg-icon-search bg-no-repeat pl-9"
              style={{ backgroundPosition: 'left 10px center' }}
              placeholder="Search by transaction id"
            />
          </div>
          {/* </div> */}

          {/* table */}
          <div className="no-scroll overflow-x-scroll">
            {tab === 0 && <BookingAllTable />}
            {tab === 1 && 'Pending'}
            {tab === 2 && 'complete'}
          </div>
        </div>

        {/* pagination */}
        <div className="flex items-center justify-end gap-4 border-t px-4 py-4">
          <p className="text-sm text-clr-36">Rows per page:</p>
          <Select
            className={'text-sm text-clr-36 focus:outline-none'}
            name="status"
            aria-label="Project status"
          >
            <option value="5" className="text-sm text-clr-36">
              5
            </option>
            <option value="10" className="text-sm text-clr-36">
              10
            </option>
            <option value="15" className="text-sm text-clr-36">
              15
            </option>
            <option value="20" className="text-sm text-clr-36">
              20
            </option>
          </Select>
          <p className="text-sm text-clr-36">6-10 of 11</p>
          <div className="flex items-center gap-6">
            <button>
              <ChevronLeftIcon className="size-4" />
            </button>
            <button>
              <ChevronRightIcon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BookingTable
