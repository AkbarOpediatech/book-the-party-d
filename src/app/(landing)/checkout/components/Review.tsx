import usePagination from '@/hooks/usePagination'
import { useAddOrderMutation } from '@/redux/features/orders/apiSlice'
import { updateClientSecret, updateOrderAmount, type OrderAmount } from '@/redux/features/orderSlice'
import { useToken } from '@/redux/hooks/useToken'
import type { RootState } from '@/redux/store'
import { useRouter } from 'next/navigation'
import { useCallback, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItems from '../../cart/components/CartItems'
import { useFetchCartService } from '../../cart/components/CartService'
import CustomBtn from '../../components/CustomBtn'
import Loader from '../../components/Loader/Loader'
import AddressField from './AddressField'

const Review = () => {
  const { addresses } = useSelector((state: RootState) => state.form)
  const [instructions, setInstructions] = useState('')
  const { currentPage, pageLimit, handlePageChange } = usePagination({ initialLimit: 5 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { response: cartItems, loading, error } = useFetchCartService({ limit: pageLimit, page: currentPage })
  const cartItemIds = useMemo(() => cartItems?.data?.map(item => item._id) ?? [], [cartItems])
  const dispatch = useDispatch()

  const handleInstructionsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target
    setInstructions(value)
  }
  const { session } = useToken()
  const router = useRouter()
  const userId = session?.user?.id ?? ''
  const [addOrder, { isLoading, isError }] = useAddOrderMutation()

  const handleSubmit = useCallback(async () => {
    if (isSubmitting) return
    setIsSubmitting(true)
    const orderData = {
      user: userId,
      notes: instructions,
      billing_details: addresses[0],
      shipping_details: null,
      carts: cartItemIds,
      coupons: []
    }

    try {
      const response = await addOrder(orderData).unwrap()

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const clientSecret = response?.data?.client_secret

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const OrderAmount: OrderAmount | undefined = response?.data?.amount

      // eslint-disable-next-line no-unused-expressions, @typescript-eslint/no-unused-expressions
      response?.data?.client_secret && dispatch(updateClientSecret(response?.data?.client_secret))

      // eslint-disable-next-line no-unused-expressions, @typescript-eslint/no-unused-expressions
      OrderAmount && dispatch(updateOrderAmount(OrderAmount))

      router.push('/payment')
    } catch (err) {
      console.error('Error creating order:', err)
    } finally {
      setIsSubmitting(false)
    }
  }, [userId, instructions, addresses, cartItemIds, isSubmitting, addOrder, router])
  if (isLoading) {
    return <Loader type="loading" message="Please wait sometimes" />
  }

  if (isError) {
    return <Loader type="error" message="Please try again later." />
  }
  return (
    <div className="space-y-6">
      <h1 className="mb-6 font-sora text-xl font-bold text-clr-0f md:text-2xl">Order List</h1>
      <div className="mb-5 md:mb-0 lg:col-span-2">
        <CartItems
          loading={loading}
          error={error}
          cartItems={cartItems}
          currentPage={currentPage}
          pageLimit={pageLimit}
          handlePageChange={handlePageChange}
          pagination={false}
        />
      </div>
      <div>
        <h3 className="mb-6 font-sora text-xl font-bold text-clr-0f md:text-2xl">Your Address</h3>
        {addresses?.length > 0 ? (
          addresses.map((address, index) => (
            <div key={index} className="space-y-4">
              <AddressField label="Name" value={address.name} />
              <AddressField label="Email" value={address.email} />
              <AddressField label="Phone" value={address.phone} />
              <AddressField label="Country" value={address.country} />
              <AddressField label="City" value={address.city} />
              <AddressField label="Street" value={address.street} />
              <AddressField label="Post Code" value={address.postcode} />
            </div>
          ))
        ) : (
          <p className="text-sm text-clr-1d">No address available.</p>
        )}
      </div>
      <div>
        <h3 className="mb-4 font-sora text-lg font-normal text-clr-0f">Add special instructions</h3>
        <textarea
          name=""
          id=""
          className="h-[220px] w-full bg-gray-50 p-5"
          onChange={handleInstructionsChange}
        ></textarea>
      </div>
      <CustomBtn btnName={isSubmitting ? 'Processing...' : 'Payment'} onClickFunc={handleSubmit} />
    </div>
  )
}

export default Review
