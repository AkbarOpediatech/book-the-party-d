'use client'
import { useFetchCategoriesQuery } from '@/redux/features/categories/apiSlice'
import Reviews from './components/Reviews'
import Discover from './home/components/Discover'
import Featured from './home/components/Featured'
import Hero from './home/components/Hero'
import Occasion from './home/components/Occasion'
import SpecialPackages from './home/components/SpecialPackages'
import Loader from './components/Loader/Loader'

export default function Home() {
  const { data: categoriesResponse, isLoading, isError } = useFetchCategoriesQuery()
  const categoriesData = categoriesResponse?.data || []

  if (isLoading) {
    return <div><Loader type='loading'/></div>
  }

  if (isError) {
    return <div><Loader type='error'/></div>
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
