'use client'
import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import TitleAndBreadCrumbs from '@/app/(dashboard)/components/TitleAndBreadCrumbs'
import { PlusIcon } from '@heroicons/react/16/solid'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import AddedModal from './add-new/components/AddedModal'
import Listings from './components/Listings'

const VendorListing = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    console.log('Search Params:', searchParams)

    if (searchParams.get('modal') === 'true') {
      setIsModalOpen(true)
    } else {
      setIsModalOpen(false)
    }
  }, [searchParams])

  const handleCloseModal = () => {
    setIsModalOpen(false)
    router.push('/dashboard/vendor/listing')
  }

  return (
    <div className="bg-white px-7 py-10">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-5">
        <TitleAndBreadCrumbs title={'My Listings'} menuitem={'Dashboard'} breadcrumbs={'Items'} />
        <DashboardButton
          name={'New listing'}
          type="link"
          linkUrl="/dashboard/vendor/listing/add-new"
          icon={<PlusIcon className="size-4 font-bold" />}
        />
      </div>

      <Listings />
      {isModalOpen && <AddedModal onClose={handleCloseModal} />}
    </div>
  )
}

export default VendorListing
