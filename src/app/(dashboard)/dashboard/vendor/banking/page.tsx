import DashboardMasterCard from '@/app/(dashboard)/components/DashboardMasterCard'
import TitleAndBreadCrumbs from '@/app/(dashboard)/components/TitleAndBreadCrumbs'
import dynamic from 'next/dynamic'
import TransactionTable from './components/TransactionTable'

const TransactionHistory = dynamic(() => import('./components/TransactionHistory'), { ssr: false })

const VendorBanking = () => {
  return (
    <div className="bg-white px-7 py-10">
      <TitleAndBreadCrumbs title={'banking'} menuitem={'Dashboard'} breadcrumbs={'banking'} />
      <div className="mb-5 mt-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5">
          <DashboardMasterCard />
        </div>
        <div className="col-span-12 md:col-span-7">
          <TransactionHistory />
        </div>
      </div>
      <TransactionTable />
    </div>
  )
}

export default VendorBanking
