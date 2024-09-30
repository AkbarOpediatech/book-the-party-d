'use client'
import { cn } from '@/utils'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArrowTrendingUpIcon,
  EllipsisHorizontalIcon,
  PencilIcon,
  Square2StackIcon
} from '@heroicons/react/16/solid'
import Image from 'next/image'
import React from 'react'
import PayoutGraph from '/public/assets/payout.svg'
import SellingsFeesGraph from '/public/assets/sellings-fees.svg'
import TotalSaleGraph from '/public/assets/totalsales.svg'

const TransactionHistory = () => {
  return (
    <React.Fragment>
      <div className="mb-7 flex items-start justify-between">
        <div className="unused-class">
          <h2 className="text-clr-1d mb-1 text-lg font-bold">$23,99.55</h2>
          <p className="text-clr-682 text-sm">Last withdraw : 12.2.2024</p>
        </div>
        <Menu>
          <MenuButton className="">
            <EllipsisHorizontalIcon className="size-4 fill-black/30" />
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
      </div>
      <div className="grid grid-cols-12 gap-[14px]">
        <div className="col-span-12 md:col-span-4">
          <div className={cn('bg-clr-0e8/5 relative rounded-lg p-3')}>
            <div className={cn('bg-clr-0e8 absolute -left-[1px] top-3 h-5 w-1 rounded-sm')}></div>
            <div className={cn('text-clr-682 mb-4 text-sm font-medium')}>Total sales</div>
            <div className="flex items-end justify-between gap-4">
              <div className="unused-class">
                <h2 className="text-clr-1d mb-1 text-lg font-bold">$1120.00</h2>
                <p className="text-clr-0e8 flex gap-2 text-sm font-medium">
                  <ArrowTrendingUpIcon className="size-4" />
                  +4,85%
                </p>
              </div>
              <div className="">
                <Image src={TotalSaleGraph} alt="graph" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className={cn('relative rounded-lg bg-clr-fb/5 p-3')}>
            <div className={cn('absolute -left-[1px] top-3 h-5 w-1 rounded-sm bg-clr-fb')}></div>
            <div className={cn('text-clr-682 mb-4 text-sm font-medium')}>Selling fees</div>
            <div className="flex items-end justify-between gap-4">
              <div className="unused-class">
                <h2 className="text-clr-1d mb-1 text-lg font-bold">$5040,0</h2>
                <p className="flex gap-2 text-sm font-medium text-clr-fb">
                  <ArrowTrendingUpIcon className="size-4" />
                  +4,85%
                </p>
              </div>
              <div className="unused-class">
                <Image src={SellingsFeesGraph} alt="graph" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className={cn('bg-clr-5E/5 relative rounded-lg p-3')}>
            <div className={cn('bg-clr-5E absolute -left-[1px] top-3 h-5 w-1 rounded-sm')}></div>
            <div className={cn('text-clr-682 mb-4 text-sm font-medium')}>Total payout amount</div>
            <div className="flex items-end justify-between gap-4">
              <div className="unused-class">
                <h2 className="text-clr-1d mb-1 text-lg font-bold">$650,00</h2>
                <p className="text-clr-5E flex gap-2 text-sm font-medium">
                  <ArrowTrendingUpIcon className="size-4" />
                  +4,85%
                </p>
              </div>
              <div className="unused-class">
                <Image src={PayoutGraph} alt="graph" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TransactionHistory
