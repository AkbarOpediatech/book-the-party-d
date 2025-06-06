import Link from 'next/link'

const SubTotal = () => {
  return (
    <>
      <div className="rounded-lg border bg-white p-6">
        <div className="mb-4 flex justify-between border-b pb-4">
          <span className="font-sora text-lg font-semibold text-clr-0f">Subtotal</span>
          <span className="font-sora text-lg font-semibold text-clr-0f">$5350</span>
        </div>

        <div className="mb-4">
          <label htmlFor="discount-code" className="mb-2 block text-sm text-clr-0f md:text-base">
            Enter Discount Code
          </label>
          <div className="flex">
            <input
              type="text"
              id="discount-code"
              className="w-full rounded-l-md border border-gray-300 p-2 font-semibold"
              placeholder="PARTY225"
            />
            <button className="rounded-r-md bg-purple-500 px-4 py-2 font-sora text-white">Apply</button>
          </div>
        </div>

        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-clr-0f md:text-base">Booking fee</span>
          <span className="text-sm text-clr-0f md:text-base">$50</span>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm text-clr-0f md:text-base">
            Additional delivery fee (outside of metro area)
          </span>
          <span className="text-sm text-clr-0f md:text-base">$50</span>
        </div>

        <div className="mb-4 border-t border-gray-200 pt-4">
          <div className="flex justify-between">
            <span className="font-sora text-sm font-bold text-clr-0f md:text-base">
              Grand Total (incl of GST)
            </span>
            <span className="font-sora text-sm font-bold text-clr-0f md:text-base">$5400</span>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <span className="font-sora text-sm font-bold text-clr-0f md:text-base">Security Deposit</span>
          <span className="font-sora text-sm font-bold text-clr-0f md:text-base">$1500</span>
        </div>

        <div className="mb-4 flex items-start">
          <input type="checkbox" id="terms" className="mr-2 mt-1" />
          <label htmlFor="terms" className="text-sm text-clr-0f">
            I understand and accept the{' '}
            <Link href="#" className="text-blue-500 underline">
              terms and conditions, privacy policy, cancellation policy, and refund policy.
            </Link>
          </label>
        </div>

        <button className="w-full rounded-lg bg-purple-500 py-3 text-lg font-semibold text-white">
          Proceed to Pay
        </button>
      </div>
    </>
  )
}

export default SubTotal
