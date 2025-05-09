'use client'
import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import Loader from '@/app/(landing)/components/Loader/Loader'
import { useFetchUserByIdQuery, useUpdateUserMutation } from '@/redux/features/user/apiSlice'
import { CheckBadgeIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import Swal from 'sweetalert2'
import details from '/public/assets/listing-details.png'

const ListingDetails = () => {
  const params = useParams()
  const { id } = params
  const router = useRouter()

  const { data: vendors, isLoading, isError } = useFetchUserByIdQuery(id as string)
  const singleVendor = vendors?.data || {}

  const { about, avatar, email, location, name, status, role, _id } = singleVendor

  const [updateUser] = useUpdateUserMutation()
  const [isButtonLoading, setIsButtonLoading] = useState(false)

  const handleAccept = async (id: string) => {
    const formData = new FormData()
    formData.append('status', 'active')

    setIsButtonLoading(true)
    try {
      await updateUser({ id, formData }).unwrap()
      Swal.fire('Success', 'Vendor request accepted successfully.', 'success')
      router.push('/dashboard/admin/vendors')
    } catch (error) {
      console.error('Failed to accept vendor request:', error)
      Swal.fire('Error', 'An error occurred while accepting the request.', 'error')
    } finally {
      setIsButtonLoading(false)
    }
  }

  const handleDecline = async (id: string) => {
    const formData = new FormData()
    formData.append('status', 'inactive')

    setIsButtonLoading(true)
    try {
      await updateUser({ id, formData }).unwrap()
      Swal.fire('Success', 'Vendor request declined successfully.', 'success')
      router.push('/dashboard/admin/vendors')
    } catch (error) {
      console.error('Failed to decline vendor request:', error)
      Swal.fire('Error', 'An error occurred while declining the request.', 'error')
    } finally {
      setIsButtonLoading(false)
    }
  }

  if (isLoading) {
    return <Loader type="loading" message="Please wait sometimes" />
  }

  if (isError) {
    return <Loader type="error" message="Please try again later." />
  }

  return (
    <div className="bg-white px-7 py-3">
      <p className="mb-2 text-xl font-bold text-clr-36 md:text-2xl">{name || 'Ashiqur Rahman'}</p>

      <ul className="mb-10 flex items-center gap-3">
        <li className="text-xm text-clr-36">Dashboard</li>
        <span className="block h-1 w-1 rounded-full bg-clr-ab"></span>
        <li className="text-xm text-clr-36">Vendors</li>
        <span className="block h-1 w-1 rounded-full bg-clr-ab"></span>
        <li className="text-xm text-clr-ab">Vendor Details</li>
      </ul>

      <div className="mb-5 grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
        <div className="col-span-1">
          <div className="w-full overflow-hidden rounded-xl lg:h-[478px]">
            <Image
              width={500}
              height={100}
              className="w-full object-cover"
              src={avatar || details}
              alt="pic"
            />
          </div>
        </div>

        <div className="">
          <span className="mb-4 inline-block rounded-md bg-clr-16/20 px-2 py-[1px] text-xs font-bold text-clr-16">
            {status === 'active' ? 'Available' : 'Unavailable'}
          </span>

          <div className="flex h-full max-h-[350px] flex-col justify-between">
            <div className="space-y-4">
              <p className="text-xl font-bold text-clr-36">{name || 'Ashiqur Rahman'}</p>

              <p className="text-xl font-bold text-clr-36">{about || 'Ashiqur Rahman'}</p>

              <p className="text-xl font-bold text-clr-36 md:text-2xl">
                Role: <span className="capitalize text-clr-ab">{role || 'No Role'}</span>
              </p>

              <p className="text-xl font-bold text-clr-36 md:text-2xl">
                Email: <span className="capitalize text-clr-ab">{email || 'N/A'}</span>
              </p>

              <p className="text-xl font-bold text-clr-36 md:text-2xl">
                Location: <span className="capitalize text-clr-ab">{location || 'N/A'}</span>
              </p>
            </div>

            <div className="flex gap-5">
              {/* <DashboardButton
                name="Send Email"
                type="button"
                icon={<EnvelopeIcon className="size-5" />}
                className="flex w-full justify-center border border-clr-fb bg-transparent font-bold text-black"
              /> */}

              {status === 'inactive' ? (
                <DashboardButton
                  onClick={() => handleAccept(_id as string)}
                  name={isButtonLoading ? 'Loading....' : 'Active Vendor'}
                  type="button"
                  className={`${isButtonLoading && 'cursor-not-allowed'} flex w-full justify-center font-bold`}
                  disabled={isButtonLoading}
                />
              ) : (
                <DashboardButton
                  onClick={() => handleDecline(_id as string)}
                  name={isButtonLoading ? 'Loading....' : 'Remove Vendor'}
                  type="button"
                  className={`${isButtonLoading && 'cursor-not-allowed'} flex w-full justify-center font-bold`}
                  disabled={isButtonLoading}
                />
              )}
            </div>
          </div>

          <DashboardButton
            name="WWCC verified"
            type="button"
            icon={<CheckBadgeIcon className="size-7 text-clr-5E" />}
            className="mt-5 flex w-full justify-center border border-clr-fb bg-transparent font-bold text-black"
          />
        </div>
      </div>

      {/* <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="col-span-1 w-full rounded-2xl bg-white shadow-one">
          <h2 className="py-5 text-center text-sm font-bold text-clr-36 md:text-base">Booking history</h2>
          <BookingHistoryChart />
        </div>
        <div className="col-span-2 mb-7 h-full w-full rounded-2xl bg-white p-5 shadow-one">
          <div className="mb-[69px]">
            <p className="mb-1 font-bold text-clr-36">Booking Statistics</p>
            <p className="text-xs text-clr-81">(+43%) than last year</p>
          </div>
          <BookingStatistics />
        </div>
      </div> */}
    </div>
  )
}

export default ListingDetails
