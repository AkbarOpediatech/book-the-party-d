'use client'
import CustomerDetails from './CustomerDetails'
import PaymentOption from './PaymentOption'
import Review from './Review'

const CustomerInfo = ({ currentStep, setCurrentStep }: any) => {
  return (
    <>
      {currentStep === 0 && <CustomerDetails setCurrentStep={setCurrentStep} />}
      {currentStep === 1 && <PaymentOption />}
      {currentStep === 2 && <Review />}
    </>
  )
}

export default CustomerInfo
