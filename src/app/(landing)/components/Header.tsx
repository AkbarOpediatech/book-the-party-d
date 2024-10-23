import Image from 'next/image'
import NavBrand from '/public/assets/nav-brand.svg'

import Link from 'next/link'
import ICCart from '/public/assets/ic-cart.svg'
import ICFav from '/public/assets/ic-fav.svg'
import ICUser from '/public/assets/ic-user.svg'

const Header = () => {
  return (
    <header className="bg-clr-eff py-6">
      <div className="mx-auto flex max-w-[1860px] items-center justify-between px-5">
        <div className="nav-brand">
          <Image src={NavBrand} alt="nav-brand" />
        </div>
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

          {/* Dropdown Profile  */}
          {/* <Menu>
            <MenuButton className={'inline-block rounded-full bg-clr-fb p-5'}>
              <Image width={20} height={20} src={ICUser} alt="fav-icon" />
            </MenuButton>

            <MenuItems
              anchor="bottom end"
              className={
                'mt-2 w-52 origin-top-right rounded-xl border bg-white p-1 text-sm/6 text-black shadow-sm transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0'
              }
            >
              <MenuItem>
                <Link
                  className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10"
                  href="/settings"
                >
                  <UserCircleIcon className="size-4 fill-black/30" />
                  Profile
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10"
                  href="/settings"
                >
                  <ArrowRightEndOnRectangleIcon className="size-4 fill-black/30" />
                  Logout
                </Link>
              </MenuItem>
            </MenuItems>
          </Menu> */}
        </ul>
      </div>
    </header>
  )
}

export default Header
