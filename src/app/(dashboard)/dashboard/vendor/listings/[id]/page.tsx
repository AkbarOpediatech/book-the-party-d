'use client'

import { useParams } from 'next/navigation'

const ListingDetails = () => {
  const params = useParams()
  const { id } = params
  return (
    <div className="bg-white px-7 py-3">
      <p className="mb-[70px] text-2xl font-bold text-clr-36">Listing Details {id}</p>
    </div>
  )
}

export default ListingDetails
