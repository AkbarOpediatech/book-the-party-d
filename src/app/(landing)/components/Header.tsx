import Image from 'next/image'
import NavBrand from '/public/assets/nav-brand.svg'

import Link from 'next/link'
import ICCart from '/public/assets/ic-cart.svg'
import ICFav from '/public/assets/ic-fav.svg'
import ICUser from '/public/assets/ic-user.svg'

const Header = () => {
  return (
    <header className="bg-clr-eff py-6">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href={'/'}>
            <Image src={NavBrand} alt="nav-brand" />
          </Link>
          {/* nav-actions */}
          <ul className="flex items-center gap-5">
            <li className="relative">
              <Link href={'#'} className="inline-block rounded-full bg-clr-fb p-5">
                <Image width={20} height={20} src={ICCart} alt="cart-icon" />
                <span className="absolute -top-1 right-0 inline-flex size-5 items-center justify-center rounded-full bg-white text-xs text-clr-fb">
                  8
                </span>
              </Link>
            </li>

            <li className="relative">
              <Link href={'#'} className="inline-block rounded-full bg-clr-fb p-5">
                <Image width={20} height={20} src={ICFav} alt="fav-icon" />
                <span className="absolute -top-1 right-0 inline-flex size-5 items-center justify-center rounded-full bg-white text-xs text-clr-fb">
                  5
                </span>
              </Link>
            </li>

            <li>
              <Link href={'#'} className="inline-block rounded-full bg-clr-fb p-5">
                <Image width={20} height={20} src={ICUser} alt="fav-icon" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
