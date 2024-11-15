import Footer from './components/Footer'
import Header from './components/Header'

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="font-nunito">
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default LandingLayout
