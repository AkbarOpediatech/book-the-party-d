import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import TitleAndBreadCrumbs from '@/app/(dashboard)/components/TitleAndBreadCrumbs'
import ListingTable from './components/ListingTable'

const VendorListing = () => {
  return (
    <div className="bg-white px-7 py-10">
      <div className="mb-10 flex items-center justify-between">
        <TitleAndBreadCrumbs title={'My Listings'} menuitem={'Dashboard'} breadcrumbs={'Items'} />

        <DashboardButton />
      </div>
      <ListingTable />
    </div>
  )
}

export default VendorListing
