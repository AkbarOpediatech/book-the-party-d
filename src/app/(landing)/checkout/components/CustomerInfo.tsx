'use client'
import useStepper from '@/redux/hooks/useStepper'
import CustomerDetails from './CustomerDetails'
import Review from './Review'

const CustomerInfo = () => {
  const { currentStep, dispatch } = useStepper()

  return (
    <>
      {currentStep === 0 && <CustomerDetails />}
      {/* {currentStep === 1 && <PaymentOption onNext={() => dispatch(nextStep())} />} */}
      {currentStep === 1 && <Review />}
    </>
  )
}

export default CustomerInfo
