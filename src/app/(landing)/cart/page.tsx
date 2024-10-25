import CartHead from './components/CartHead'
import CartItems from './components/CartItems'
import SubTotal from './components/SubTotal'

const Cart = () => {
  return (
    <section className="cart pb-[100px] pt-[74px]">
      <div className="container">
        <CartHead />
        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-8">
            <CartItems />
          </div>
          <div className="col-span-4">
            <SubTotal />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
