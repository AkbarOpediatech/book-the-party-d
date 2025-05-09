'use client'
import CartHead from '../cart/components/CartHead'
import { useFetchCartService } from '../cart/components/CartService'
import CustomerInfo from './components/CustomerInfo'
import ProgressBar from './components/ProgressBar'

const Checkout = () => {
  const { response: cartItems } = useFetchCartService({})

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

          {/* <SubTotal cartItems={cartItems?.data} isCart={true} /> */}
          {/* <SubTotal setCurrentStep={(step: number) => dispatch(setStep(step))} /> */}
        </div>
      </div>
    </section>
  )
}

export default Checkout
