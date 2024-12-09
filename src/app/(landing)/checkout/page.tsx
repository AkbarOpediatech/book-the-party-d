'use client'
import useStepper from '@/redux/hooks/useStepper'
import { useState } from 'react'
import CartHead from '../cart/components/CartHead'
import SubTotal from '../components/SubTotal'
import CustomerInfo from './components/CustomerInfo'
import ProgressBar from './components/ProgressBar'

const Checkout = () => {
  const { currentStep, dispatch } = useStepper()

  return (
    <section className="cart pb-[100px] pt-[74px]">
      <div className="container">
        <CartHead title="Event Address" />
        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="mb-11">
              <ProgressBar
              // setCurrentStep={(step: number) => dispatch(setStep(step))}
              />
            </div>

            <CustomerInfo />
          </div>

          <SubTotal />
          {/* <SubTotal setCurrentStep={(step: number) => dispatch(setStep(step))} /> */}
        </div>
      </div>
    </section>
  )
}

export default Checkout
