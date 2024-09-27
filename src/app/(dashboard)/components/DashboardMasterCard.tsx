import Image from 'next/image'
import ICMaster from '/public/assets/ic_mastercard.png'

const DashboardMasterCard = () => {
  return (
    <div className="bg-clr-3f flex h-64 flex-col justify-between p-6">
      <div className="flex justify-between">
        <div>
          <small className="text-clr-82 mb-4 block text-sm font-semibold">Current Balance</small>
          <h3 className="text-3xl font-bold text-white">$23,99.55</h3>
        </div>
        <div>
          <Image src={ICMaster} alt="mastercard" />
        </div>
      </div>
      <p className="py-7 text-end text-base font-semibold text-white">**** **** **** 6789</p>
      <div className="flex items-center justify-between">
        <div className="holder_name">
          <h4 className="text-clr-82 mb-2 text-xs">Card Holder</h4>
          <h2 className="text-base font-semibold text-white">Alex Buckmaster</h2>
        </div>

        <div className="valid_dates">
          <h4 className="text-clr-82 mb-2 text-xs">Valid dates</h4>
          <h2 className="text-base font-semibold text-white">11/22</h2>
        </div>

        <button className="rounded-lg bg-clr-fb px-4 py-3 text-sm font-bold text-white">Withdraw</button>
      </div>
    </div>
  )
}
export default DashboardMasterCard
