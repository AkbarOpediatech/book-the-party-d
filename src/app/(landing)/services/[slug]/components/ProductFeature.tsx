'use client'
import SectionHeading from '@/app/(landing)/components/SectionHeading'
import type { ServiceItem } from '@/redux/features/services/apiSlice'
import { useAddToWishlistMutation } from '@/redux/features/wishlist/apiSlice'
import { HeartIcon } from '@heroicons/react/16/solid'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import serviceImage from '/public/assets/discover-img.png'

type IProps = {
  singleService: ServiceItem
}

const ProductFeature: React.FC<IProps> = ({ singleService }) => {
  const [addToWishlist] = useAddToWishlistMutation()
  const { data: session } = useSession() // Fetch session data
  const router = useRouter()

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
      service: singleService._id,
      user: session.user?.id //FIXME: change with user ID
    }
    addToWishlist(cartItem)
      .unwrap()
      .then(response => {
        if (response) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully added to cart',
            showConfirmButton: false,
            timer: 2000,
            toast: true
          })
        }
      })
      .catch(error => {
        console.error('Error adding to cart:', error)
        alert('Failed to book the service. Please try again.')
      })
    console.log('handleFavorite Clickted')
  }

  return (
    <div className="mb-9 grid grid-cols-1 gap-14 lg:grid-cols-2">
      <div className="col-span-1">
        <div className="overflow-hidden rounded-2xl">
          <div className="object- h-[500px] max-w-[738px] overflow-hidden">
            <Image
              src={singleService?.featured_image || serviceImage}
              width={738}
              height={500}
              className="object-right-top"
              alt="service-image"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <SectionHeading
            title={singleService.title || 'Service Title'}
            sectionHeadingClass="md:text-[56px] md:leading-[66px]"
            headingRootClass="md:mb-5"
          />

          {singleService.is_featured === true && (
            <p className="bold mb-4 inline-block bg-clr-fb/30 px-3 py-2 text-lg uppercase"> Featured </p>
          )}

          <p className="mb-4">
            By <span className="text-lg font-medium">Partyscout</span>
          </p>

          {/* <p className="mb-4 text-lg text-[#444444]">{singleService.description || `Product Description`}</p> */}
          <p className="text-lg capitalize text-[#444444]">
            Cancellation Period Hours: {singleService.cancellation_period_hours || `Product Description`}
          </p>

          <p className="text-lg capitalize text-[#444444]">
            inclusions:
            {singleService.inclusions.map(i => i) || `Product Description`}
          </p>

          <p className="text-lg capitalize text-[#444444]">
            infos:
            {singleService.infos.map(i => i) || `Product Description`}
          </p>

          <div className="flex items-center gap-3">
            <Link href={'#product-reviews'} className="text-xl font-medium text-clr-36">
              <span className="pb-5 underline">Reviews</span>
            </Link>
          </div>
        </div>

        <div className="space-y-5">
          <p className="text-base text-[#191919]">AUD(incl. of all taxes)</p>
          <p className="text-base text-[#191919]">
            <span className="text-[32px] font-bold text-clr-fb">
              ${singleService.price.map(i => i.value) || '100'}
            </span>
            ({singleService.price_type || 'Hourly'})
          </p>
          <p className="mb-2 text-base text-[#191919]">
            <span className="text-[32px] font-bold">Availability:</span> (
            {singleService.price_type || 'Hourly'})
          </p>
          <button
            onClick={() => handleWishlist()}
            className="flex items-center gap-1 rounded-[6px] border px-3 py-2"
          >
            <HeartIcon className="size-5 stroke-clr-fb" /> Add to wishlist
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductFeature
