'use client'

import { setActiveTab } from '@/redux/features/profileSlice'
import { useFetchWishlistQuery } from '@/redux/features/wishlist/apiSlice'
import { cn, profileMenuItems } from '@/utils'
import { roleWiseRoute } from '@/utils/constand'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ArrowRightEndOnRectangleIcon, Bars3Icon, UserIcon, XMarkIcon } from '@heroicons/react/16/solid'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useFetchCartService } from '../cart/components/CartService'
import ICCartGray from '/public/assets/ic-cart-gray.svg'
import ICCart from '/public/assets/ic-cart.svg'
import ICFavGray from '/public/assets/ic-fav-gray.svg'
import ICFav from '/public/assets/ic-fav.svg'
import ICUser from '/public/assets/ic-user.svg'
import NavBrand from '/public/assets/nav-brand.svg'

const Header = () => {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch()

  const { response: cartItems } = useFetchCartService()
  const { data: session } = useSession()

  const { data: response } = useFetchWishlistQuery()
  const wishlistData = response?.data.length

  const iconContainerClasses =
    'flex h-[40px] lg:h-[70px] w-[40px] lg:w-[70px] items-center justify-center rounded-full bg-[#CBA6FF]/60'
  const badgeClasses =
    'absolute -right-2 -top-2 inline-flex size-4 items-center justify-center rounded-full bg-clr-d48 p-2 text-xs text-white'
  const menuItemClasses =
    'group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10'

  const route = session?.user?.role ? roleWiseRoute[session.user.role as keyof typeof roleWiseRoute] : ''

  const handleLogout = () => {
    signOut({ callbackUrl: '/login' })
  }

  const handleMenuClick = (tabName: string) => {
    dispatch(setActiveTab(tabName))
    router.push('/profile')
  }

  return (
    <header className="bg-clr-eff py-5">
      <div className="custom-container">
        <div className="flex flex-wrap items-center justify-between gap-5 md:flex-none md:gap-0">
          {/* Logo */}
          <Link href="/">
            <Image width={203} height={108} className="h-auto w-28" src={NavBrand} alt="nav-brand" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-5 md:flex">
            {/* Cart */}
            {session && (
              <>
                <li>
                  <Link href="/cart" className={iconContainerClasses}>
                    <div className="relative">
                      <Image width={20} height={20} src={ICCart} alt="cart" />
                      {cartItems?.data && cartItems?.data.length > 0 && (
                        <span className={badgeClasses}>
                          {cartItems?.data.length ? cartItems?.data.length : 0}
                        </span>
                      )}
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href="/wishlist" className={iconContainerClasses}>
                    <div className="relative">
                      <Image width={20} height={20} src={ICFav} alt="fav" />
                      <span className={badgeClasses}>{wishlistData}</span>
                    </div>
                  </Link>
                </li>
              </>
            )}

            {/* Notifications */}
            {/* <li>
              <Menu>
                <MenuButton>
                  <div className={iconContainerClasses}>
                    <div className="relative">
                      <Image width={20} height={20} src={ICNotify} alt="notification-icon" />
                      <span className={badgeClasses}>8</span>
                    </div>
                  </div>
                </MenuButton>
                <MenuItems
                  anchor="bottom"
                  className="mt-2 w-52 origin-top-right rounded-xl border bg-white p-1 text-sm/6 text-black shadow-sm"
                >
                  <MenuItem>
                    <div className={menuItemClasses}>
                      <WrenchScrewdriverIcon className="size-4 fill-black/30" />
                      Notification 1
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <div className={menuItemClasses}>
                      <ArrowRightEndOnRectangleIcon className="size-4 fill-black/30" />
                      Notification 2
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <CustomBtn
                      isLink={true}
                      linkName="See All"
                      href="/notifications"
                      className="mt-2 justify-center py-2 text-center md:text-base"
                    />
                  </MenuItem>
                </MenuItems>
              </Menu>
            </li> */}

            {/* User Menu */}
            <li>
              <Menu>
                <MenuButton>
                  <div
                    className={`overflow-hidden rounded-full border border-gray-300 ${iconContainerClasses}`}
                  >
                    <div className={cn(session?.user?.avatar && 'h-[70px] w-[70px]')}>
                      <Image
                        width={session?.user?.avatar ? 80 : 20}
                        height={session?.user?.avatar ? 80 : 20}
                        src={session?.user?.avatar || ICUser}
                        alt="user-icon"
                        className="center h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </MenuButton>

                <MenuItems
                  anchor="bottom end"
                  className="mt-2 w-52 origin-top-right rounded-xl border bg-white p-1 text-sm/6 text-black shadow-sm"
                >
                  {session?.user ? (
                    <>
                      <MenuItem>
                        <Link className={menuItemClasses} href={route}>
                          <UserIcon className="size-4 fill-black/30" />
                          Profile
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <button className={menuItemClasses} onClick={handleLogout}>
                          <ArrowRightEndOnRectangleIcon className="size-4 fill-black/30" />
                          Logout
                        </button>
                      </MenuItem>
                    </>
                  ) : (
                    <MenuItem>
                      <Link className={menuItemClasses} href="/login">
                        <ArrowRightEndOnRectangleIcon className="size-4 fill-black/30" />
                        Login
                      </Link>
                    </MenuItem>
                  )}
                </MenuItems>
              </Menu>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-5 md:hidden">
            <button className="text-clr-80 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {isMenuOpen && (
          <div className="absolute left-0 w-full bg-clr-eff py-5 md:hidden">
            <ul>
              <li className={cn('px-5 py-3 hover:bg-clr-fb/10')} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Link href="/cart" className={cn('flex items-center gap-3 text-base font-bold text-clr-96')}>
                  <Image src={ICCartGray} alt="cart-icon" width={25} height={25} />
                  <p>Cart</p>
                </Link>
              </li>

              <li className={cn('px-5 py-3 hover:bg-clr-fb/10')} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Link
                  href="/wishlist"
                  className={cn('flex items-center gap-3 text-base font-bold text-clr-96')}
                >
                  <Image src={ICFavGray} alt="fav-icon" width={25} height={25} />
                  <p>Favorite</p>
                </Link>
              </li>
            </ul>

            <ul className="mb-5">
              {profileMenuItems.map(item => (
                <li
                  key={item.label}
                  className={cn('block px-5 py-3 hover:bg-clr-fb/10')}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <button
                    onClick={() => handleMenuClick(item.label)}
                    className={cn('flex items-center gap-3 text-base font-bold text-clr-96')}
                  >
                    <Image width={26} height={26} src={item.icon} alt="icon" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-clr-87 px-5 py-3 font-sora text-sm text-white"
              onClick={handleLogout}
            >
              <ArrowRightEndOnRectangleIcon className="size-5 text-white" />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
