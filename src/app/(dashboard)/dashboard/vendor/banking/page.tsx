import DashboardMasterCard from '@/app/(dashboard)/components/DashboardMasterCard'
import TitleAndBreadCrumbs from '@/app/(dashboard)/components/TitleAndBreadCrumbs'
import TransactionHistory from '../components/TransactionHistory'
import TransactionTable from '../components/TransactionTable'

const Banking = () => {
  return (
    <div className="bg-white px-7 py-10">
      <TitleAndBreadCrumbs title={'banking'} breadcrumbs={'banking'} />
      <div className="mb-5 grid grid-cols-12 gap-6">
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

export default Banking
