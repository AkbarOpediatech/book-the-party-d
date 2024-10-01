import Image from 'next/image'
import ICCanceled from '/public/assets/ic_canceled.svg'
import ICComplete from '/public/assets/ic_complete.svg'
import ICPending from '/public/assets/ic_pending.svg'
import ICTotal from '/public/assets/ic_total.svg'

const BookingAnalytics = () => {
  return (
    <div className="my-10 rounded-2xl bg-white py-4 shadow-one">
      <div className="grid grid-cols-12">
        {/* Total */}
        <div className="col-span-3">
          <div className="flex justify-center border-r border-dotted">
            <div className="flex items-center gap-4">
              <div className="task-chart">
                <Image src={ICTotal} alt="icon" />
              </div>
              <div className="task-information">
                <h3 className="mb-1 text-lg font-bold text-clr-36">Total</h3>
                <p className="mb-1 text-sm text-clr-81">
                  <span className="text-clr-36">24</span> Bookings
                </p>
                <p className="text-clr-1c text-sm font-semibold">$27500.43</p>
              </div>
            </div>
          </div>
        </div>

        {/* Completed */}
        <div className="col-span-3">
          <div className="flex justify-center border-r border-dotted">
            <div className="flex items-center gap-4">
              <div className="task-chart">
                <Image src={ICComplete} alt="icon" />
              </div>
              <div className="task-information">
                <h3 className="mb-1 text-lg font-bold text-clr-36">Total</h3>
                <p className="mb-1 text-sm text-clr-81">
                  <span className="text-clr-36">20</span> Bookings
                </p>
                <p className="text-sm font-semibold text-clr-fb">$4460.61</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pending */}
        <div className="col-span-3">
          <div className="flex justify-center">
            <div className="flex items-center gap-4">
              <div className="task-chart">
                <Image src={ICPending} alt="icon" />
              </div>
              <div className="task-information">
                <h3 className="mb-1 text-lg font-bold text-clr-36">Pending</h3>
                <p className="mb-1 text-sm text-clr-81">
                  <span className="text-clr-36">4</span> Bookings
                </p>
                <p className="text-clr-07 text-sm font-semibold">$27500.43</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cancelled */}
        <div className="col-span-3">
          <div className="flex justify-center">
            <div className="flex items-center gap-4">
              <div className="task-chart">
                <Image src={ICCanceled} alt="icon" />
              </div>
              <div className="task-information">
                <h3 className="mb-1 text-lg font-bold text-clr-36">Cancelled</h3>
                <p className="mb-1 text-sm text-clr-81">
                  <span className="text-clr-36">3</span> Bookings
                </p>
                <p className="text-clr-d48 text-sm font-semibold">$27500.43</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingAnalytics
