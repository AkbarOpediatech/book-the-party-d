import Discover from './components/Discover'
import Featured from './components/Featured'
import Hero from './components/Hero'
import Occasion from './components/Occasion'
import SpecialPackages from './components/SpecialPackages'

export default function Home() {
  return (
    <>
      <Hero />
      <SpecialPackages />
      <Discover />
      <Occasion />
      <Featured />
    </>
  )
}
