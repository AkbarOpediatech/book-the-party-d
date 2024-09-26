import DashboardCard from '../components/DashboardCard'
import ICDecrease from '/public/assets/ic_decrese.svg'
import ICIncrease from '/public/assets/ic_increse.svg'
import ICRDecrese from '/public/assets/ic_red_decrese.svg'
import ICTBooking from '/public/assets/ic_tbooking.svg'

export default function Vendor() {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-7">
          <div className="grid grid-cols-12 gap-6">
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
        </div>
        <div className="col-span-12 xl:col-span-5">5</div>
      </div>
    </>
  )
}
