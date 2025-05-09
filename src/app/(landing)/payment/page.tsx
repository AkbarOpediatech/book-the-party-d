'use client'
import type { RootState } from '@/redux/store'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useSelector } from 'react-redux'
import CheckoutForm from './components/CheckoutForm'

const Payment = () => {
  const stripePromise = loadStripe(
    'pk_test_51QJvQAGv43xW3jcnqdRrjWFAw5nmcDDvmJxjFGzGvBeN7i0G5meJyJVN8i2kARIMku0z4qH4v3C6A6lX6PHbnSNf00dhIGPaJB'
  )

  // const [clientSecret, setClientSecret] = useState<string | null>(null)

  const { clientSecret, orderAmount } = useSelector((state: RootState) => state.order)

  // if (!clientSecret) {
  //   return <Loader type="loading" message="Please wait sometimes" />
  // }

  // const clientSecret = 'pi_3QbeeaGv43xW3jcn009beQYU_secret_pEs1YSi4mk1LvIq8BePjzGB8o'

  return (
    <section className="payment section-padding">
      <div className="container">
        <div className="grid grid-cols-2 gap-10">
          <div className="col-span-1">
            <div className="border bg-white p-6">
              <div className="mb-4 flex justify-between border-b pb-4">
                <span className="font-sora text-lg font-semibold text-clr-0f">Subtotal </span>
                <span className="font-sora text-lg font-semibold text-clr-0f">$ {orderAmount?.subtotal}</span>
              </div>

              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-clr-0f md:text-base">Service Total</span>
                <span className="text-sm text-clr-0f md:text-base">${orderAmount?.service_total}</span>
              </div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-clr-0f md:text-base">Discount</span>
                <span className="text-sm text-clr-0f md:text-base">${orderAmount?.discount}</span>
              </div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-clr-0f md:text-base">Discounted Service Total</span>
                <span className="text-sm text-clr-0f md:text-base">
                  ${orderAmount?.discounted_service_total}
                </span>
              </div>

              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-clr-0f md:text-base">Order Fee</span>
                <span className="text-sm text-clr-0f md:text-base">${orderAmount?.order_fee}</span>
              </div>

              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-clr-0f md:text-base">Tax</span>
                <span className="text-sm text-clr-0f md:text-base">${orderAmount?.tax}</span>
              </div>

              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-clr-0f md:text-base">Shipping Fee</span>
                <span className="text-sm text-clr-0f md:text-base">${orderAmount?.shipping_fee}</span>
              </div>

              <div className="mb-4 border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="font-sora text-sm font-bold text-clr-0f md:text-base">Grand Total</span>
                  <span className="font-sora text-sm font-bold text-clr-0f md:text-base">
                    ${orderAmount?.total}
                  </span>
                </div>
              </div>
              <div className="mb-4 flex items-center justify-between">
                <span className="font-sora text-sm font-bold text-clr-0f md:text-base">Security Deposit</span>

                <span className={`font-sora text-sm font-bold text-clr-0f md:text-base`}>
                  $ {orderAmount.security_deposit}
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            {clientSecret && (
              <div className="border bg-white p-6">
                <Elements stripe={stripePromise} options={{ clientSecret: clientSecret }}>
                  <CheckoutForm />
                </Elements>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Payment
