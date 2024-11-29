'use client'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import ICDecrease from '/public/assets/ic_decrese.svg'
import ICIncrease from '/public/assets/ic_increse.svg'
import ICRDecrese from '/public/assets/ic_red_decrese.svg'
import ICTBooking from '/public/assets/ic_tbooking.svg'
import DashboardCard from '../../components/DashboardCard'
import BalanceStatistics from './dashboard/components/BalanceStatistics'
import BookingCategories from './dashboard/components/BookingCategories'
import Vendors from './vendors/page'

export default function VendorDashboard() {
  const [selectType, setSelectType] = useState('Status')
  const handleSelectChange = (value: string) => {
    setSelectType(value)
  }
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 xl:col-span-7">
        <div className="mb-11 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6">
            <DashboardCard
              title={'Total Income'}
              total={'$8063.02'}
              percent={'+3%'}
              imgSrc1={ICIncrease}
              imgSrc2={ICDecrease}
              className={'bg-clr-e8'}
            />
          </div>

          <div className="col-span-12 md:col-span-6">
            <DashboardCard
              title={'Total Bookings'}
              total={'10'}
              percent={'-0.2%'}
              imgSrc1={ICRDecrese}
              imgSrc2={ICTBooking}
              className={'bg-clr-eb'}
            />
          </div>
        </div>

        <div className="mb-7 w-full rounded-2xl bg-white p-5 shadow-one">
          <div className="mb-[69px]">
            <div className="flex items-center justify-between">
              <div>
                <p className="mb-1 text-lg font-bold capitalize text-clr-36">Balance Statistics</p>
                <p className="text-xs text-clr-81">(+43%) than last year</p>
              </div>

              <Menu>
                <MenuButton className="flex items-center gap-2 bg-clr-f8 px-2 py-1 text-sm text-clr-48">
                  {selectType} <ChevronDownIcon className="size-5" />
                </MenuButton>

                <MenuItems
                  anchor="bottom end"
                  className={
                    'w-40 origin-top-right border bg-white text-sm/6 text-black shadow-sm transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0'
                  }
                >
                  <MenuItem>
                    <button
                      onClick={() => handleSelectChange('Year')}
                      type="button"
                      className="group flex w-full items-center gap-2 px-3 py-1.5 text-sm data-[focus]:bg-clr-f8"
                    >
                      Year
                    </button>
                  </MenuItem>

                  <MenuItem>
                    <button
                      onClick={() => handleSelectChange('Month')}
                      type="button"
                      className="group flex w-full items-center gap-2 px-3 py-1.5 text-sm data-[focus]:bg-clr-f8"
                    >
                      Month
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
          <BalanceStatistics />
        </div>

        <div className="w-full rounded-2xl bg-white shadow-one">
          <div className="mb-[69px] p-5">
            <p className="mb-1 text-lg font-bold capitalize text-clr-36">Booking Categories</p>
          </div>
          <BookingCategories />
        </div>
      </div>

      <div className="col-span-12 xl:col-span-5">
        <Vendors />
      </div>
    </div>
  )
}
