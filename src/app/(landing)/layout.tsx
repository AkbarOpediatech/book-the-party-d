'use client'
import { useState } from 'react'
import AuthModal from './components/AuthModal'
import Footer from './components/Footer'
import Header from './components/Header'

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  const [showAuthModal, setShowAuthModal] = useState(true)
  return (
    <main className="font-nunito">
      <Header />
      {children}
      <Footer />
      {showAuthModal && <AuthModal setShowAuthModal={setShowAuthModal} />}
    </main>
  )
}

export default LandingLayout
