'use client'
import { nextStep } from '@/redux/features/stepperSlice'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, type Dispatch, type SetStateAction } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SuccessModal from '../checkout/components/SuccessModal'

interface RootState {
  stepper: {
    currentStep: number
  }
}

type IProps = {
  setCurrentStep?: Dispatch<SetStateAction<number>>
  isCart?: boolean
}

const SubTotal: React.FC<IProps> = ({ isCart }) => {
  const currentStep = useSelector((state: RootState) => state.stepper.currentStep)
  const dispatch = useDispatch()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleProceedToPay = async () => {
    if (loading) return

    if (currentStep < 2) {
      dispatch(nextStep())
    } else {
      setLoading(true)
      try {
        //TODO: async database call for payment
        //TODO: Simulate API call for payment
        setIsOpen(true)
      } catch (error) {
        alert('Payment failed!')
      } finally {
        setLoading(false)
      }
    }
  }

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
          <input
            type="checkbox"
            id="terms"
            className="mr-2 mt-1"
            checked={agreedToTerms}
            onChange={e => setAgreedToTerms(e.target.checked)}
          />
          <label htmlFor="terms" className="text-sm text-clr-0f">
            I understand and accept the{' '}
            <Link href="#" className="text-blue-500 underline">
              terms and conditions, privacy policy, cancellation policy, and refund policy.
            </Link>
          </label>
        </div>
        {isCart ? (
          <Link
            href={'/checkout'}
            className={`inline-block w-full rounded-xl py-3 text-center text-lg font-semibold text-white ${
              agreedToTerms ? 'bg-purple-500' : 'bg-gray-300'
            }`}
          >
            {loading ? 'Processing...' : 'Proceed to Pay'}
          </Link>
        ) : (
          <button
            onClick={handleProceedToPay}
            disabled={!agreedToTerms || loading}
            className={`inline-block w-full rounded-xl py-3 text-center text-lg font-semibold text-white ${
              agreedToTerms ? 'bg-purple-500' : 'bg-gray-300'
            }`}
          >
            {loading ? 'Processing...' : 'Proceed to Pay'}
          </button>
        )}
      </div>
      <SuccessModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default SubTotal
