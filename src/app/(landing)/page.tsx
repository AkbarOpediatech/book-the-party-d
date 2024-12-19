'use client'
import { useFetchCategoriesQuery } from '@/redux/features/categories/apiSlice'
import Loader from './components/Loader/Loader'
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
    return <Loader type="loading" />
  }

  if (isError) {
    return <Loader type="error" />
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
