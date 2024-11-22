'use client'
import Reviews from './components/Reviews'
import Discover from './home/components/Discover'
import Featured from './home/components/Featured'
import Hero from './home/components/Hero'
import Occasion from './home/components/Occasion'
import SpecialPackages from './home/components/SpecialPackages'

export default function Home() {
  return (
    <>
      <Hero />
      <SpecialPackages />
      <Discover />
      <Occasion />
      <Featured />
      <Reviews />
    </>
  )
}
