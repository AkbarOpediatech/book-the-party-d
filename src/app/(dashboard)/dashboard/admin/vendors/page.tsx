'use client'
import TitleAndBreadCrumbs from '@/app/(dashboard)/components/TitleAndBreadCrumbs'
import { useFetchUserQuery } from '@/redux/features/user/apiSlice'
import Listings from './components/Listings'

const Vendors = () => {
  const { data: products } = useFetchUserQuery({ role: 'vendor', limit: 10, page: 1 })
  const fullResponse = products
  const serviceData = fullResponse?.data //FIXME:
  console.log(' Vendor User', serviceData)
  return (
    <div className="bg-white px-2 py-10 lg:px-7">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-5">
        <TitleAndBreadCrumbs title={'Vendor List'} menuitem={'Dashboard'} breadcrumbs={'Vendors'} />
      </div>
      <Listings />
    </div>
  )
}

export default Vendors
