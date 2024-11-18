'use client'
import { useState } from 'react'
import Reviews from './components/Reviews'
import Discover from './home/components/Discover'
import Featured from './home/components/Featured'
import Hero from './home/components/Hero'
import HotDeals from './home/components/HotDeals'
import Occasion from './home/components/Occasion'
import SearchResults from './home/components/SearchResults'
import SpecialPackages from './home/components/SpecialPackages'

export default function Home() {
  const [isSearchOrPackageClicked, setIsSearchOrPackageClicked] = useState(false)

  const handleSearchClick = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()
    setIsSearchOrPackageClicked(true)
  }

  return (
    <>
      <Hero onSearchClick={handleSearchClick} />
      {isSearchOrPackageClicked ? (
        <>
          <SearchResults />
          <HotDeals />
        </>
      ) : (
        <>
          <SpecialPackages />
          <Discover />
          <Occasion />
          <Featured />
        </>
      )}
      <Reviews />
    </>
  )
}
