import Image from 'next/image'
import CustomBtn from '../components/CustomBtn'
import IMAboutUS from '/public/assets/about-us.png'

const AboutUs = () => {
  return (
    <section id="AboutUs" className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
          <div>
            <div className="mb-8">
              <h1 className="mb-6 font-sora text-5xl font-bold md:text-[84px]">Let&apos;s Talk</h1>
            </div>

            <div className="mb-10 space-y-5">
              <p className="text-base text-black md:text-xl">
                Book The Party is an online party and events booking platform dedicated to providing memorable
                party and events experiences for both customers and vendors. Our mission is to make party
                planning a fun, simple and seamless process by offering a wide range of party options,
                competitive prices and flexible inclusions to suit all budgets. With a user-friendly, easy to
                use website, we provide you with a booking experience that is quick and easy from start to
                finish. Select, book and pay securely for your event all in a few simple clicks.
              </p>
              <p className="text-base text-black md:text-xl">
                We build trust and reliability in our customers to ensure a stress-free and enjoyable party
                planning experience. Customer satisfaction is our priority which is why we only promote
                reputable and professional vendors on our website.
              </p>
              <p className="text-base font-semibold text-clr-fb md:text-xl">
                Whatever the event or wherever it is, we will be with you every step of the way by providing
                you with 24/7 customer support. With Book the Party, you can party easy!
              </p>
            </div>

            <div className="flex flex-wrap gap-5">
              <CustomBtn
                className={'px-6 py-3 text-sm md:px-8 md:py-4 md:text-base'}
                href="/services"
                isLink={true}
                isLinkIcon={true}
                linkName="View all events"
              />
              <CustomBtn
                className={'px-6 py-3 text-sm md:px-8 md:py-4 md:text-base'}
                href="/contact"
                isLink={true}
                isBorderedLink={true}
                linkName="Contact now"
              />
            </div>
          </div>

          <div>
            <Image src={IMAboutUS} alt="image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
