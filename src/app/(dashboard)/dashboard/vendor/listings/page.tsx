'use client'

import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import TitleAndBreadCrumbs from '@/app/(dashboard)/components/TitleAndBreadCrumbs'
import Loader from '@/app/(landing)/components/Loader/Loader'
import usePagination from '@/hooks/usePagination'
import { useFetchServicesQuery } from '@/redux/features/services/apiSlice'
import { useFetchUserByIdQuery } from '@/redux/features/user/apiSlice'
import { useToken } from '@/redux/hooks/useToken'
import { PlusIcon } from '@heroicons/react/16/solid'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import AddedModal from './add-new/components/AddedModal'
import Listings from './components/Listings'

const VendorListing = () => {
  const userSub = useSession()
  const subscription = userSub?.data?.user?.subscription
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(true)
  const { currentPage, pageLimit, handlePageChange, handlePageLimitChange } = usePagination()

  const {
    data: response,
    isLoading,
    isError
  } = useFetchServicesQuery({ role: 'admin', limit: pageLimit, page: currentPage })

  const serviceData = response?.data
  const totalRecords = response?.pagination?.records || 0

  const { session } = useToken()
  const userId = session?.user?.id ?? ''
  const { data: user } = useFetchUserByIdQuery(userId, {
    skip: !userId
  })

  const isPaymentActive = user?.data?.stripe_acct

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    if (query.get('modal') === 'true') {
      setIsModalOpen(true)

      const timer = setTimeout(() => {
        setIsModalOpen(false)
        router.push('/dashboard/vendor/listings')
      }, 3000)

      return () => clearTimeout(timer)
    } else {
      setIsModalOpen(false)
    }
  }, [router])

  const handleCloseModal = () => {
    setIsModalOpen(false)
    router.push('/dashboard/vendor/listings')
  }

  if (isLoading) {
    return <Loader type="loading" message="Please wait sometimes" />
  }

  if (isError) {
    return <Loader type="error" message="Please try again later." />
  }

  return (
    <>
      <div className="bg-white px-2 py-10 lg:px-7">
        {subscription === null ? (
          <div className="flex w-full items-center justify-center bg-opacity-50 backdrop-blur-md lg:h-80">
            <div className="rounded bg-white p-6 text-center">
              <h2 className="text-lg font-semibold text-red-600">Subscription Required</h2>
              <p className="my-5 text-gray-700">
                Sorry, you need an active subscription to access this listing.
              </p>
              <DashboardButton type="link" linkUrl="/dashboard/vendor/subscription" name="Subscribe Now" />
            </div>
          </div>
        ) : (
          <>
            <div className="mb-10 flex flex-wrap items-center justify-between gap-5">
              <TitleAndBreadCrumbs title={'My Listings'} menuitem={'Dashboard'} breadcrumbs={'Items'} />
              {isPaymentActive === null ? (
                <DashboardButton
                  name={'Add Payment Method For Listing'}
                  type="link"
                  linkUrl="/dashboard/vendor/profile?tab=banking"
                  icon={<PlusIcon className="size-4 font-bold" />}
                />
              ) : (
                <DashboardButton
                  name={'New listing'}
                  type="link"
                  linkUrl="/dashboard/vendor/listings/add-new"
                  icon={<PlusIcon className="size-4 font-bold" />}
                />
              )}
            </div>

            {serviceData && (
              <Listings
                data={serviceData}
                currentPage={currentPage}
                pageLimit={pageLimit}
                totalRecords={totalRecords}
                handlePageChange={handlePageChange}
                handlePageLimitChange={handlePageLimitChange}
              />
            )}

            {isModalOpen && <AddedModal onClose={handleCloseModal} />}
          </>
        )}
      </div>
    </>
  )
}

export default VendorListing
