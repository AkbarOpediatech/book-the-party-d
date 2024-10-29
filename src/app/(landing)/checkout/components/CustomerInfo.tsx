'use client'
import { nextStep } from '@/redux/features/stepperSlice'
import { useDispatch, useSelector } from 'react-redux'
import CustomerDetails from './CustomerDetails'
import PaymentOption from './PaymentOption'
import Review from './Review'

const CustomerInfo = () => {
  const currentStep = useSelector((state: any) => state.stepper.currentStep)
  const dispatch = useDispatch()

  return (
    <>
      {currentStep === 0 && <CustomerDetails onNext={() => dispatch(nextStep())} />}
      {currentStep === 1 && <PaymentOption />}
      {currentStep === 2 && <Review />}
    </>
  )
}

export default CustomerInfo
