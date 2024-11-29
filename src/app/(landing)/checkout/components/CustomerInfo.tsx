'use client'
import { nextStep } from '@/redux/features/stepperSlice'
import useStepper from '@/redux/hooks/useStepper'
import CustomerDetails from './CustomerDetails'
import PaymentOption from './PaymentOption'
import Review from './Review'

const CustomerInfo = () => {
  const { currentStep, dispatch } = useStepper()

  return (
    <>
      {currentStep === 0 && <CustomerDetails onNext={() => dispatch(nextStep())} />}
      {currentStep === 1 && <PaymentOption onNext={() => dispatch(nextStep())} />}
      {currentStep === 2 && <Review />}
    </>
  )
}

export default CustomerInfo
