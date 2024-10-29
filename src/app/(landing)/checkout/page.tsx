'use client'
import { setStep } from '@/redux/features/stepperSlice'
import { useDispatch, useSelector } from 'react-redux'
import CartHead from '../cart/components/CartHead'
import SubTotal from '../components/SubTotal'
import CustomerInfo from './components/CustomerInfo'
import ProgressBar from './components/ProgressBar'

const Checkout = () => {
  const currentStep = useSelector((state: any) => state.stepper.currentStep)
  const dispatch = useDispatch()

  return (
    <section className="cart pb-[100px] pt-[74px]">
      <div className="container">
        <CartHead title="Event Address" />
        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-8">
            <div className="mb-11">
              <ProgressBar
                currentStep={currentStep}
                setCurrentStep={(step: any) => dispatch(setStep(step))}
              />
            </div>
            <CustomerInfo />
          </div>
          <div className="col-span-4">
            <SubTotal setCurrentStep={(step: any) => dispatch(setStep(step))} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout
