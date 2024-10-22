import Footer from './components/Footer'
import Header from './components/Header'

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default LandingLayout
