'use client'
import TitleAndBreadCrumbs from '@/app/(dashboard)/components/TitleAndBreadCrumbs'
import { useFetchServicesQuery } from '@/redux/features/services/apiSlice'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import AddedModal from './add-new/components/AddedModal'
import Listings from './components/Listings'

const VendorListing = () => {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { data: products, isLoading, isError } = useFetchServicesQuery({ role: 'admin' })
  const fullResponse = products
  const serviceData = fullResponse?.data //FIXME:
  console.log('serviceData', serviceData)

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

  return (
    <div className="h-full bg-white px-2 py-10 lg:px-7">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-5">
        <TitleAndBreadCrumbs title={'My Listings'} menuitem={'Dashboard'} breadcrumbs={'Items'} />
      </div>

      <Listings />
      {isModalOpen && <AddedModal onClose={handleCloseModal} />}
    </div>
  )
}

export default VendorListing
