'use client'
import { setActiveTab } from '@/redux/features/profileSlice'
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
import ICCartGray from '/public/assets/ic-cart-gray.svg'
import ICCart from '/public/assets/ic-cart.svg'
import ICFavGray from '/public/assets/ic-fav-gray.svg'
import ICNotify from '/public/assets/ic-notify.svg'
import ICUser from '/public/assets/ic-user.svg'
import NavBrand from '/public/assets/nav-brand.svg'

const Header = () => {
  const iconContainerClasses =
    'flex h-[40px] lg:h-[70px] w-[40px] lg:w-[70px] items-center justify-center rounded-full bg-[#CBA6FF]/60'
  const badgeClasses =
    'absolute -right-2 -top-2 inline-flex size-4 items-center justify-center rounded-full bg-clr-d48 p-2 text-xs text-white'
  const menuItemClasses =
    'group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10'

  type NavIconProps = {
    icon: string
    count: number
    href: string
    alt: string
  }

  const { data: session } = useSession()
  let route = ''
  if (session?.user?.role) {
    route = roleWiseRoute[session?.user?.role as keyof typeof roleWiseRoute]
  }

  const LogoutHandler = () => {
    signOut({
      callbackUrl: '/login'
    })
  }

  const NavIcon = ({ icon, count, href, alt }: NavIconProps) => (
    <li>
      <Link href={href} className={iconContainerClasses}>
        <div className="relative">
          <Image width={20} height={20} src={icon} alt={alt} />
          {count > 0 && <span className={badgeClasses}>{count}</span>}
        </div>
      </Link>
    </li>
  )
  const router = useRouter()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch()
  const handleMenuClick = (tabName: string) => {
    dispatch(setActiveTab(tabName))
    router.push('/profile')
  }

  return (
    <header className="bg-clr-eff py-5">
      <div className="custom-container">
        <div className="flex flex-wrap items-center justify-between gap-5 md:flex-none md:gap-0">
          <Link href="/">
            <Image width={203} height={108} className="h-auto w-28" src={NavBrand} alt="nav-brand" />
          </Link>

          <ul className="hidden items-center gap-5 md:flex">
            <NavIcon icon={ICCart} count={8} href="/cart" alt="cart-icon" />
            <NavIcon icon={ICCart} count={8} href="/cart" alt="cart-icon" />

            <li>
              <Menu>
                <MenuButton>
                  <div className={iconContainerClasses}>
                    <div className="relative">
                      <Image width={20} height={20} src={ICNotify} alt="user-icon" />
                      <span className={badgeClasses}>8</span>
                    </div>
                  </div>
                </MenuButton>

                <MenuItems
                  anchor="bottom end"
                  className="mt-2 w-52 origin-top-right rounded-xl border bg-white p-1 text-sm/6 text-black shadow-sm transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                  {session && session?.user ? (
                    <>
                      <MenuItem>
                        <Link className={menuItemClasses} href={`${route}`}>
                          <UserIcon className="size-4 fill-black/30" />
                          Profile
                        </Link>
                      </MenuItem>

                      <MenuItem>
                        <button className={menuItemClasses} onClick={LogoutHandler}>
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
                  {session && session?.user ? (
                    <>
                      <MenuItem>
                        <Link className={menuItemClasses} href={`${route}`}>
                          <UserIcon className="size-4 fill-black/30" />
                          Profile
                        </Link>
                      </MenuItem>

                      <MenuItem>
                        <button className={menuItemClasses} onClick={LogoutHandler}>
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

          <div className="flex items-center gap-5 md:hidden">
            <Menu>
              <MenuButton>
                <div className={iconContainerClasses}>
                  <div className="relative">
                    <Image width={20} height={20} src={ICNotify} alt="user-icon" />
                    <span className={badgeClasses}>8</span>
                  </div>
                </div>
              </MenuButton>

              <MenuItems
                anchor="bottom end"
                className="mt-2 w-52 origin-top-right rounded-xl border bg-white p-1 text-sm/6 text-black shadow-sm transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
              >
                {session && session?.user ? (
                  <>
                    <MenuItem>
                      <Link className={menuItemClasses} href={`${route}`}>
                        <UserIcon className="size-4 fill-black/30" />
                        Profile
                      </Link>
                    </MenuItem>

                    <MenuItem>
                      <button className={menuItemClasses} onClick={LogoutHandler}>
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
            <button className="text-clr-80 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Sidebar */}
        {isMenuOpen && (
          <div className="absolute left-0 mt-4 w-full bg-clr-eff p-5 md:hidden">
            <ul className="mb-5 gap-2 space-y-5 md:block lg:w-full">
              <li
                className={cn('max-w-[350px] border-l-4 border-l-clr-fb border-l-transparent px-5')}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Link
                  href={'/cart'}
                  className={cn(
                    'flex items-center gap-3 text-base font-bold text-clr-96 md:text-nowrap md:text-xl lg:text-2xl xl:text-2xl'
                  )}
                >
                  <Image src={ICCartGray} alt="cart-icon" width={25} height={25} />
                  <p>Cart</p>
                </Link>
              </li>
              <li
                className={cn('max-w-[350px] border-l-4 border-l-clr-fb border-l-transparent px-5')}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Link
                  href={'/favorite'}
                  className={cn(
                    'flex items-center gap-3 text-base font-bold text-clr-96 md:text-nowrap md:text-xl lg:text-2xl xl:text-2xl'
                  )}
                >
                  <Image src={ICFavGray} alt="fav-icon" width={25} height={25} />
                  <p>Favorite</p>
                </Link>
              </li>
            </ul>

            {/* <div className="col-span-1"> */}
            <ul className="mb-5 gap-2 space-y-5 md:block lg:w-full">
              {profileMenuItems.map(item => (
                <li
                  key={item.label}
                  className={cn('max-w-[350px] border-l-4 border-l-clr-fb border-l-transparent px-5')}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <button
                    onClick={() => handleMenuClick(item.label)}
                    className={cn(
                      'flex items-center gap-3 text-base font-bold text-clr-96 md:text-nowrap md:text-xl lg:text-2xl xl:text-2xl'
                    )}
                  >
                    <Image width={26} height={26} className="stroke-black" src={item.icon} alt="icon" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            {/* </div> */}

            <button
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-clr-87 px-5 py-3 font-sora text-sm text-white"
              onClick={LogoutHandler}
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
