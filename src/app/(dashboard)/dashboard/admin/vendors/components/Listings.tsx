'use client'

import Loader from '@/app/(landing)/components/Loader/Loader'
import usePagination from '@/hooks/usePagination'
import { useFetchUserQuery, type IUser } from '@/redux/features/user/apiSlice'
import { useState } from 'react'
import InactiveVendor from './InactiveVendor'
import ListedVendor from './ListedVendor'
import ListingTab from './ListingTab'
import VendorRequest from './VendorRequest'

const Listings = () => {
  const [tab, setTab] = useState<number>(0)
  const { currentPage, pageLimit, handlePageChange, handlePageLimitChange } = usePagination()
  const {
    data: vendors,
    isLoading,
    isError
  } = useFetchUserQuery({ role: 'vendor', limit: pageLimit, page: currentPage })

  const vendorData: IUser[] = Array.isArray(vendors?.data) ? vendors.data : []
  const activeVendors = vendorData.filter(vendor => vendor.status === 'active')
  const totalActiveVendors = activeVendors.length
  const pendingVendors = vendorData.filter(vendor => vendor.status === 'pending')
  const totalPendingVendors = activeVendors.length
  const inactiveVendors = vendorData.filter(vendor => vendor.status === 'inactive')
  const totalInactiveVendors = activeVendors.length

  if (isLoading) {
    return <Loader type="loading" message="Please wait sometimes" />
  }

  if (isError) {
    return <Loader type="error" message="Please try again later." />
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">
      <ListingTab tab={tab} setTab={setTab} />

      <div className="p-4 md:px-6 md:py-5">
        <input
          type="search"
          className="input bg-left-[20px] col-span-2 w-full bg-icon-search bg-no-repeat pl-9"
          style={{ backgroundPosition: 'left 10px center' }}
          placeholder="Search by transaction id"
        />
      </div>

      {tab === 0 && (
        <ListedVendor
          data={activeVendors}
          totalRecords={totalActiveVendors}
          pageLimit={pageLimit}
          handlePageChange={handlePageChange}
          handlePageLimitChange={handlePageLimitChange}
        />
      )}

      {tab === 1 && (
        <VendorRequest
          data={pendingVendors}
          totalRecords={totalPendingVendors}
          pageLimit={pageLimit}
          handlePageChange={handlePageChange}
          handlePageLimitChange={handlePageLimitChange}
        />
      )}

      {tab === 2 && (
        <InactiveVendor
          data={inactiveVendors}
          totalRecords={totalInactiveVendors}
          pageLimit={pageLimit}
          handlePageChange={handlePageChange}
          handlePageLimitChange={handlePageLimitChange}
        />
      )}
    </div>
  )
}

export default Listings
