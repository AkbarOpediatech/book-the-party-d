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
          <label htmlFor="discount-code" className="mb-2 block text-base text-clr-0f">
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
          <span className="text-base text-clr-0f">Booking fee</span>
          <span className="text-base text-clr-0f">$50</span>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <span className="text-base text-clr-0f">Additional delivery fee (outside of metro area)</span>
          <span className="text-base text-clr-0f">$50</span>
        </div>

        <div className="mb-4 border-t border-gray-200 pt-4">
          <div className="flex justify-between">
            <span className="font-sora text-base font-bold text-clr-0f">Grand Total (incl of GST)</span>
            <span className="font-sora text-base font-bold text-clr-0f">$5400</span>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <span className="font-sora text-base font-bold text-clr-0f">Security Deposit</span>
          <span className="font-sora text-base font-bold text-clr-0f">$1500</span>
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

        <Link
          href={'/checkout'}
          className="inline-block w-full rounded-xl bg-purple-500 py-3 text-center text-lg font-semibold text-white"
        >
          Proceed to Pay
        </Link>
      </div>
    </>
  )
}

export default SubTotal
