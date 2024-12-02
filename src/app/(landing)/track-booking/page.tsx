'use client'
import BookingSummery from './components/BookingSummery'
import RelatedServices from './components/RelatedServices'
import StatusBar from './components/StatusBar'

const TrackBooking = () => {
  return (
    <section className="cart pb-[100px] pt-[74px] font-sora">
      <div className="container max-w-[1440px]">
        <StatusBar />
        <div className="my-16">
          <BookingSummery />
        </div>
        <div className="my-16">
          <RelatedServices />
        </div>
      </div>
    </section>
  )
}

export default TrackBooking
