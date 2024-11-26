'use client'
import DashboardCard from '../../../components/DashboardCard'
import BalanceStatistics from './components/BalanceStatistics'
import BookingCategories from './components/BookingCategories'
import Vendors from './components/Vendors'
import ICDecrease from '/public/assets/ic_decrese.svg'
import ICIncrease from '/public/assets/ic_increse.svg'
import ICRDecrese from '/public/assets/ic_red_decrese.svg'
import ICTBooking from '/public/assets/ic_tbooking.svg'

export default function VendorDashboard() {
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
            <p className="mb-1 text-lg font-bold capitalize text-clr-36">Balance Statistics</p>
            <p className="text-xs text-clr-81">(+43%) than last year</p>
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
