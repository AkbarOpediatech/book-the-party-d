'use client'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import SubTotal from '../components/SubTotal'
import CartHead from './components/CartHead'
import CartItems from './components/CartItems'

const Cart = () => {
  const { data: session, status } = useSession()

  useEffect(() => {
    if (!session) {
      return
    }
  }, [session])
  return (
    <section className="cart pb-[100px] pt-[74px]">
      <div className="container">
        <CartHead title="My Cart" actionBtnName="Remove All" />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-16">
          <div className="mb-5 md:mb-0 lg:col-span-2">
            <CartItems />
          </div>

          <SubTotal isCart={true} />
        </div>
      </div>
    </section>
  )
}

export default Cart
