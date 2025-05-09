'use client'
import type { getCartItem } from '@/redux/features/cart/apiSlice'
import { updateSubtotal } from '@/redux/features/cart/cartSlice'
import { nextStep } from '@/redux/features/stepperSlice'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { RootState } from '../../../redux/store'
import SuccessModal from '../checkout/components/SuccessModal'
interface RootState1 {
  stepper: {
    currentStep: number
  }
}

function calculateSubtotal(cartItems: getCartItem[]) {
  let subtotal = 0

  if (cartItems) {
    cartItems.forEach(item => {
      const service = item.service
      const quantity = item.quantity
      const priceId = item.price_id

      const matchedPrice = service?.price && service?.price.find(price => price._id === priceId)

      if (matchedPrice && matchedPrice?.value && quantity) {
        subtotal += matchedPrice?.value * quantity
      }
    })
  }

  return subtotal
}

type IProps = {
  isCart?: boolean
  cartItems: getCartItem[] | undefined
}
const SubTotal: React.FC<IProps> = ({ isCart, cartItems }) => {
  const currentStep = useSelector((state: RootState1) => state.stepper.currentStep)
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [subtotal, setSubtotal] = useState(0)
  const [subtotalold, setSubtotalOld] = useState(0)
  const [grosstotal, setGrosstotal] = useState(100)
  const [loading, setLoading] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [discountCode, setDiscountCode] = useState('')
  const pathname = usePathname()

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
        Swal.fire({
          title: 'Error',
          text: 'Payment failed!',
          icon: 'error',
          confirmButtonText: 'Retry'
        })
      } finally {
        setLoading(false)
      }
    }
  }
  const isCheckoutStepValid = pathname === '/checkout' && currentStep === 2
  const {
    items,
    isDiscountApplied,
    subTotal: reduxSubTotal,
    error
  } = useSelector((state: RootState) => state.cart)

  const handleApplyDiscount = () => {
    // Check if the entered discount code is valid (for example, "PARTY225")
    if (discountCode === 'PARTY225') {
      const discount = 0.2 // 20% discount
      const discountAmount = subtotal * discount
      const newSubtotal = subtotal - discountAmount
      setSubtotalOld(subtotal)
      // Dispatch an action to update the subtotal in Redux state
      dispatch(updateSubtotal(newSubtotal))

      Swal.fire({
        title: 'Success!',
        text: `Discount applied! You've saved $${discountAmount.toFixed(2)}.`,
        icon: 'success',
        confirmButtonText: 'OK'
      })
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Invalid discount code! Please try again.',
        icon: 'error',
        confirmButtonText: 'Retry'
      })
    }
  }

  useEffect(() => {
    let subtotalCal = 0
    if (cartItems) {
      subtotalCal = calculateSubtotal(cartItems)
    }
    setSubtotal(subtotalCal)
  }, [cartItems, subtotal])

  return (
    <>
      <div className="border bg-white p-6">
        <div className="mb-4 flex justify-between border-b pb-4">
          <span className="font-sora text-lg font-semibold text-clr-0f">Subtotal </span>
          <span className="font-sora text-lg font-semibold text-clr-0f">${subtotal}</span>
        </div>

        <div className="mb-4">
          <label htmlFor="discount-code" className="mb-2 block text-sm text-clr-0f md:text-base">
            Enter Discount Code
          </label>
          <div className="flex">
            <input
              type="text"
              id="discount-code"
              value={discountCode}
              onChange={e => setDiscountCode(e.target.value)}
              className="w-full border border-purple-500 p-2 font-semibold"
              placeholder="PARTY225"
            />
            <button onClick={handleApplyDiscount} className="bg-purple-500 px-4 py-2 font-sora text-white">
              Apply
            </button>
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
            <span className="font-sora text-sm font-bold text-clr-0f md:text-base">$100</span>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <span className="font-sora text-sm font-bold text-clr-0f md:text-base">Security Deposit</span>
          {/* <span className="font-sora text-sm font-bold text-clr-0f md:text-base">
            ${grosstotal}
          </span> */}

          {isDiscountApplied && (
            <span className={`font-sora text-sm font-bold text-clr-0f line-through md:text-base`}>
              ${subtotalold}
            </span>
          )}
          <span className={`font-sora text-sm font-bold text-clr-0f md:text-base`}>${reduxSubTotal}</span>
        </div>

        {isCart && (
          <>
            <div className="mb-4 flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 mt-1"
                checked={agreedToTerms}
                onChange={e => setAgreedToTerms(e.target.checked)}
              />
              <label htmlFor="terms" className="cursor-pointer text-sm text-clr-0f">
                I understand and accept the{' '}
                <Link href="#" className="text-blue-500 underline">
                  terms and conditions, privacy policy, cancellation policy, and refund policy.
                </Link>
              </label>
            </div>
            <Link
              href={'/checkout'}
              className={`inline-block w-full rounded-xl py-3 text-center text-lg font-semibold text-white ${
                agreedToTerms ? 'bg-purple-500' : 'bg-gray-300'
              }`}
            >
              {loading ? 'Processing...' : 'Continue'}
            </Link>
          </>
        )}
        {isCheckoutStepValid && (
          <>
            <div className="mb-4 flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 mt-1"
                checked={agreedToTerms}
                onChange={e => setAgreedToTerms(e.target.checked)}
              />
              <label htmlFor="terms" className="cursor-pointer text-sm text-clr-0f">
                I understand and accept the{' '}
                <Link href="#" className="text-blue-500 underline">
                  terms and conditions, privacy policy, cancellation policy, and refund policy.
                </Link>
              </label>
            </div>
            <button
              onClick={handleProceedToPay}
              disabled={!agreedToTerms || loading}
              className={`inline-block w-full rounded-xl py-3 text-center text-lg font-semibold text-white ${
                agreedToTerms ? 'bg-purple-500' : 'bg-gray-300'
              }`}
            >
              {loading ? 'Processing...' : 'Proceed to Pay'}
            </button>
          </>
        )}
      </div>
      <SuccessModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default SubTotal
