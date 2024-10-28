'use client'
import { useState } from 'react'
import CartHead from '../cart/components/CartHead'
import SubTotal from '../components/SubTotal'
import CustomerInfo from './components/CustomerInfo'
import ProgressBar from './components/ProgressBar'

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <section className="cart pb-[100px] pt-[74px]">
      <div className="container">
        <CartHead title="Event Address" />
        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-8">
            <div className="mb-11">
              <ProgressBar currentStep={currentStep} setCurrentStep={setCurrentStep} />
            </div>
            <CustomerInfo currentStep={currentStep} setCurrentStep={setCurrentStep} />
          </div>
          <div className="col-span-4">
            <SubTotal />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout
