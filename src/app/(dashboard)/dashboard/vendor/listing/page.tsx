'use client'
import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import TitleAndBreadCrumbs from '@/app/(dashboard)/components/TitleAndBreadCrumbs'
import { PlusIcon } from '@heroicons/react/16/solid'
import Listings from './components/Listings'

const VendorListing = () => {
  return (
    <div className="bg-white px-7 py-10">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-5">
        <TitleAndBreadCrumbs title={'My Listings'} menuitem={'Dashboard'} breadcrumbs={'Items'} />
        <DashboardButton
          name={'New listing'}
          type="button"
          icon={<PlusIcon className="size-4 font-bold" />}
        />
      </div>

      <Listings />
    </div>
  )
}

export default VendorListing
