import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ArrowRightEndOnRectangleIcon, UserIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import ICCart from '/public/assets/ic-cart.svg'
import ICFav from '/public/assets/ic-fav.svg'
import ICUser from '/public/assets/ic-user.svg'
import NavBrand from '/public/assets/nav-brand.svg'

const Header = () => {
  const iconContainerClasses =
    'flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#CBA6FF]/60'
  const badgeClasses =
    'absolute -right-2 -top-2 inline-flex size-4 items-center justify-center rounded-full bg-clr-d48 p-2 text-xs text-white'
  const menuItemClasses =
    'group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10'

  type NotificationIconProps = {
    icon: string
    count: number
    href: string
    alt: string
  }

  const NotificationIcon = ({ icon, count, href, alt }: NotificationIconProps) => (
    <li>
      <Link href={href} className={iconContainerClasses}>
        <div className="relative">
          <Image width={20} height={20} src={icon} alt={alt} />
          {count > 0 && <span className={badgeClasses}>{count}</span>}
        </div>
      </Link>
    </li>
  )

  return (
    <header className="bg-clr-eff py-5">
      <div className="custom-container">
        <div className="flex flex-wrap items-center justify-between gap-5 md:flex-none md:gap-0">
          <Link href="/">
            <Image width={203} height={108} src={NavBrand} alt="nav-brand" />
          </Link>

          <ul className="flex items-center gap-5">
            <NotificationIcon icon={ICCart} count={8} href="/cart" alt="cart-icon" />
            <NotificationIcon icon={ICFav} count={5} href="/favorite" alt="fav-icon" />

            <li>
              <Menu>
                <MenuButton>
                  <div className={iconContainerClasses}>
                    <Image width={20} height={20} src={ICUser} alt="user-icon" />
                  </div>
                </MenuButton>

                <MenuItems
                  anchor="bottom end"
                  className="mt-2 w-52 origin-top-right rounded-xl border bg-white p-1 text-sm/6 text-black shadow-sm transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                  <MenuItem>
                    <Link className={menuItemClasses} href="/profile">
                      <UserIcon className="size-4 fill-black/30" />
                      Profile
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <button className={menuItemClasses}>
                      <ArrowRightEndOnRectangleIcon className="size-4 fill-black/30" />
                      Logout
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
