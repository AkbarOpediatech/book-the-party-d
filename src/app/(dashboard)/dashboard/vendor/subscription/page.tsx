import TitleAndBreadCrumbs from '@/app/(dashboard)/components/TitleAndBreadCrumbs'
import Subscription from './components/Subscription'

const VendorSubscription = () => {
  return (
    <div className="bg-white px-7 py-10">
      <TitleAndBreadCrumbs
        title="Subscription"
        menuitem="Dashboard"
        breadcrumbs="Subscription"
        className="mb-10"
      />
      <Subscription />
    </div>
  )
}

export default VendorSubscription
