'use client'

import usePagination from '@/hooks/usePagination'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Loader from '../components/Loader/Loader'
import SubTotal from '../components/SubTotal'
import CartHead from './components/CartHead'
import CartItems from './components/CartItems'
import { useFetchCartService } from './components/CartService'

const Cart = () => {
  const { currentPage, pageLimit, handlePageChange } = usePagination({ initialLimit: 5 })
  const { data: session, status } = useSession()
  const router = useRouter()
  const pathname = usePathname()
  const { response: cartItems, loading, error } = useFetchCartService({ limit: pageLimit, page: currentPage })

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push(`/login?redirect=${pathname}`)
    }
  }, [status, router, pathname])

  if (status === 'loading') {
    return <Loader type="loading" />
  }

  if (!session) {
    return null
  }

  return (
    <section className="cart pb-[100px] pt-[74px]">
      <div className="container">
        <CartHead title="My Cart" actionBtnName="Remove All" />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-16">
          <div className="mb-5 md:mb-0 lg:col-span-2">
            <CartItems
              loading={loading}
              error={error}
              cartItems={cartItems}
              currentPage={currentPage}
              pageLimit={pageLimit}
              handlePageChange={handlePageChange}
            />
          </div>

          <SubTotal cartItems={cartItems?.data} isCart={true} />
        </div>
      </div>
    </section>
  )
}

export default Cart
