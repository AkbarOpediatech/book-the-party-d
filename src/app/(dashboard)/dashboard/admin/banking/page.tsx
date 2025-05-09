'use client'
import TitleAndBreadCrumbs from '@/app/(dashboard)/components/TitleAndBreadCrumbs'
import Transaction from './components/Transaction'

// const TransactionHistory = dynamic(() => import('./components/TransactionHistory'), { ssr: false })

const VendorBanking = () => {
  return (
    <div className="bg-white px-2 py-10 lg:px-7">
      <TitleAndBreadCrumbs
        title={'admin banking'}
        menuitem={'Dashboard'}
        breadcrumbs={'banking'}
        className="mb-5"
      />
      {/* <div className="mb-5 mt-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5">
          <DashboardMasterCard />
        </div>
        <div className="col-span-12 md:col-span-7">
          <TransactionHistory />
        </div>
      </div> */}
      <Transaction />
    </div>
  )
}

export default VendorBanking
