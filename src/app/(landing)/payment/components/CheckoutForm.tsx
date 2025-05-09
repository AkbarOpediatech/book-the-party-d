import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CustomBtn from '../../components/CustomBtn'

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) return
    await stripe.confirmPayment({
      elements,
      redirect: 'if_required'
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />

      <CustomBtn btnName="Submit" className="mt-9 w-full md:py-2 md:text-base" disabled={!stripe} />
    </form>
  )
}

export default CheckoutForm
