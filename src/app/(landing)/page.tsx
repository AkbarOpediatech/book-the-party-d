import Discover from './home/components/Discover'
import Featured from './home/components/Featured'
import Hero from './home/components/Hero'
import Occasion from './home/components/Occasion'
import Reviews from './home/components/Reviews'
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
