'use client'
import { useAddToWishlistMutation, useFetchWishlistQuery } from '@/redux/features/wishlist/apiSlice'
import { cn } from '@/utils'
import { HeartIcon, MapPinIcon } from '@heroicons/react/16/solid'
import { useSession } from 'next-auth/react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'

type IProps = {
  imgSrc?: string | StaticImageData
  title?: string
  review?: number
  price?: number | number[] | string | undefined
  Href?: string
  info?: string | string[]
  chooseLocation?: string
  serviceId?: string | undefined
  wishlistDataId?: string
}

const ServiceCard: React.FC<IProps> = ({ imgSrc, title, info, price, Href, chooseLocation, serviceId }) => {
  const { data: session } = useSession()
  const router = useRouter()

  const [addToWishlist] = useAddToWishlistMutation()

  const { data: response } = useFetchWishlistQuery()
  const wishlistData = response?.data
  const wishlistDataId = wishlistData?.map(i => i.service?._id)
  const isWishlist = wishlistDataId?.includes(serviceId || '')

  const handleWishlist = () => {
    if (!session) {
      Swal.fire({
        title: 'Login Required',
        text: 'You need to log in to add items to the cart.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Login',
        cancelButtonText: 'Cancel'
      }).then(result => {
        if (result.isConfirmed) {
          router.push('/login')
        }
      })
      return
    }

    const cartItem = {
      service: serviceId,
      user: session.user?.id
    }

    addToWishlist(cartItem)
      .unwrap()
      .then(response => {
        if (response) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully added to wishlist',
            showConfirmButton: false,
            timer: 2000,
            toast: true
          })
        }
      })
      .catch(error => {
        console.error('Error adding to cart:', error)
        Swal.fire({
          title: 'Error',
          text: 'Failed to add to wishlist. Please try again.',
          icon: 'error',
          confirmButtonText: 'Retry'
        })
      })
  }

  return (
    <div className="w-full rounded-3xl border">
      <div className="h-[165px] overflow-hidden rounded-t-3xl">
        <Image width={278} height={165} src={imgSrc || ''} className="w-full" alt="image" />
      </div>
      <div className="flex h-[200px] flex-col justify-between p-5">
        <div className="">
          <Link
            href={Href || ''}
            className="mb-2 block truncate font-sora text-lg font-semibold text-neutral-900"
          >
            {title}
          </Link>

          <div className="h-12 overflow-hidden">
            <p className="truncate text-sm font-extrabold italic text-neutral-500 md:text-base"> {info} </p>
          </div>
        </div>

        <div>
          <button className="mb-5 flex items-center gap-2 text-sm font-extrabold italic text-neutral-500 md:text-base">
            <MapPinIcon className="size-6" />
            {chooseLocation}
          </button>
          <div className="flex items-center justify-between">
            <p className="font-sora text-xl font-bold text-neutral-900 md:text-2xl">${price}</p>
            {/* heart icon */}
            <button
              onClick={handleWishlist}
              className={cn('group rounded-full bg-clr-f8 p-1', isWishlist && 'bg-red-600')}
            >
              <HeartIcon
                className={cn(
                  'size-6 fill-clr-c6 group-hover:fill-red-600',
                  isWishlist && 'fill-white group-hover:fill-white'
                )}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
