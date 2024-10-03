'use client'
import { cn } from '@/utils'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArrowTrendingUpIcon,
  EllipsisHorizontalIcon,
  PencilIcon,
  Square2StackIcon
} from '@heroicons/react/16/solid'
import React from 'react'
import { Area, AreaChart } from 'recharts'

const salesData = [
  {
    name: 'Page A',
    pv: 2400
  },
  {
    name: 'Page B',
    pv: 1398
  },
  {
    name: 'Page C',
    pv: 9800
  },
  {
    name: 'Page D',
    pv: 3908
  },
  {
    name: 'Page E',
    pv: 4800
  },
  {
    name: 'Page F',
    pv: 3800
  },
  {
    name: 'Page G',
    pv: 4300
  }
]

const feesData = [
  {
    name: 'Page A',
    pv: 3800
  },
  {
    name: 'Page B',
    pv: 1398
  },
  {
    name: 'Page C',
    pv: 2400
  },
  {
    name: 'Page D',
    pv: 3908
  },
  {
    name: 'Page E',
    pv: 4800
  },
  {
    name: 'Page F',
    pv: 4300
  },
  {
    name: 'Page G',
    pv: 9800
  }
]

const payoutData = [
  {
    name: 'Page A',
    pv: 4800
  },
  {
    name: 'Page B',
    pv: 1398
  },
  {
    name: 'Page C',
    pv: 2400
  },
  {
    name: 'Page D',
    pv: 3908
  },
  {
    name: 'Page E',
    pv: 9800
  },
  {
    name: 'Page F',
    pv: 4300
  },
  {
    name: 'Page G',
    pv: 3800
  }
]

const TransactionHistory = () => {
  return (
    <React.Fragment>
      <div className="mb-7 flex items-start justify-between">
        <div className="unused-class">
          <h2 className="mb-1 text-lg font-bold text-clr-1d">$23,99.55</h2>
          <p className="text-sm text-clr-682">Last withdraw : 12.2.2024</p>
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
          <div className={cn('relative rounded-lg bg-clr-0e8/5 p-3')}>
            <div className={cn('absolute -left-[1px] top-3 h-5 w-1 rounded-sm bg-clr-0e8')}></div>
            <div className={cn('mb-4 text-sm font-medium text-clr-682')}>Total sales</div>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="unused-class">
                <h2 className="mb-1 text-lg font-bold text-clr-1d">$1120.00</h2>
                <p className="flex gap-2 text-sm font-medium text-clr-0e8">
                  <ArrowTrendingUpIcon className="size-4" />
                  +4,85%
                </p>
              </div>
              <div className="unused-class">
                <AreaChart
                  width={90}
                  height={50}
                  data={salesData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1C60E8" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#1C60E8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="pv" stroke="#1C60E8" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className={cn('relative rounded-lg bg-clr-fb/5 p-3')}>
            <div className={cn('absolute -left-[1px] top-3 h-5 w-1 rounded-sm bg-clr-fb')}></div>
            <div className={cn('mb-4 text-sm font-medium text-clr-682')}>Selling fees</div>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="unused-class">
                <h2 className="mb-1 text-lg font-bold text-clr-1d">$5040,0</h2>
                <p className="flex gap-2 text-sm font-medium text-clr-fb">
                  <ArrowTrendingUpIcon className="size-4" />
                  +4,85%
                </p>
              </div>
              <div className="unused-class">
                <AreaChart
                  width={90}
                  height={50}
                  data={feesData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9042fb" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#9042fb" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="pv" stroke="#9042fb" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className={cn('relative rounded-lg bg-clr-5E/5 p-3')}>
            <div className={cn('absolute -left-[1px] top-3 h-5 w-1 rounded-sm bg-clr-5E')}></div>
            <div className={cn('mb-4 text-sm font-medium text-clr-682')}>Total payout amount</div>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="unused-class">
                <h2 className="mb-1 text-lg font-bold text-clr-1d">$650,00</h2>
                <p className="flex gap-2 text-sm font-medium text-clr-5E">
                  <ArrowTrendingUpIcon className="size-4" />
                  +4,85%
                </p>
              </div>
              <div className="unused-class">
                <AreaChart
                  width={90}
                  height={50}
                  data={payoutData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#23c55e" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#23c55e" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="pv" stroke="#23c55e" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TransactionHistory
