'use client'
import { useFetchCategoriesQuery } from '@/redux/features/categories/apiSlice'
import Reviews from './components/Reviews'
import Discover from './home/components/Discover'
import Featured from './home/components/Featured'
import Hero from './home/components/Hero'
import Occasion from './home/components/Occasion'
import SpecialPackages from './home/components/SpecialPackages'

export default function Home() {
  const { data: categoriesResponse, isLoading, isError } = useFetchCategoriesQuery()
  const categoriesData = categoriesResponse?.data || []

  if (isLoading) {
    return <div>Loading bookings...</div>
  }

  if (isError) {
    return <div>Error loading bookings. Please try again later.</div>
  }

  return (
    <>
      <Hero data={categoriesData} />
      <SpecialPackages data={categoriesData} />
      <Discover />
      <Occasion />
      <Featured />
      <Reviews />
    </>
  )
}
