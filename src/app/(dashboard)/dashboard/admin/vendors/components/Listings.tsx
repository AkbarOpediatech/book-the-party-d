'use client'
import { useFetchUserQuery, type IUser } from '@/redux/features/user/apiSlice'
import { useState } from 'react'
import ListedVendor from './ListedVendor'
import ListingTab from './ListingTab'
import VendorRequest from './VendorRequest'

const Listings = () => {
  const [tab, setTab] = useState<number>(0)
  const { data: vendors } = useFetchUserQuery({ role: 'vendor', limit: 10, page: 1 })
  const vendorData: IUser[] = Array.isArray(vendors?.data) ? vendors.data : []

  // const serviceData = fullResponse?.data //FIXME:
  // const { session } = useToken()
  // const userId = session?.user?.id ?? ''
  // const {
  //   data: response,
  //   isLoading,
  //   isError
  // } = useFetchUserByIdQuery(userId, {
  //   skip: !userId
  // })

  // const userInfo = response?.data
  // console.log(userInfo, 'userInfo')

  // const [updateUser] = useUpdateUserMutation()
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
      {tab === 0 && <ListedVendor data={vendorData} />}
      {tab === 1 && <VendorRequest />}
    </div>
  )
}

export default Listings
