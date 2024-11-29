'use client'
import { useState } from 'react'
import BookingSummery from './components/BookingSummery'
import RelatedServices from './components/RelatedServices'
import StatusBar from './components/StatusBar'

const TrackBooking = () => {
  const [currentStep, setCurrentStep] = useState<number>(0)
  return (
    <section className="cart pb-[100px] pt-[74px] font-sora">
      <div className="container max-w-[1440px]">
        <StatusBar currentStep={currentStep} setCurrentStep={setCurrentStep} />
        <div className="my-16">
          <BookingSummery currentStep={currentStep} />
        </div>
        <div className="my-16">
          <RelatedServices />
        </div>
      </div>
    </section>
  )
}

export default TrackBooking
