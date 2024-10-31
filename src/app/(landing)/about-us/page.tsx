import { ArrowRightIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import IMAboutUS from '/public/assets/about-us.png'

const AboutUs = () => {
  return (
    <section id="AboutUs" className="py-20">
      <div className="container">
        <div className="grid grid-cols-12 items-center gap-14">
          <div className="col-span-6">
            <div className="mb-8">
              <h1 className="mb-6 font-sora text-[84px] font-bold">Let's Talk</h1>
            </div>
            <p className="mb-5 text-xl text-black">
              Book The Party is an online party and events booking platform dedicated to providing memorable
              party and events experiences for both customers and vendors. Our mission is to make party
              planning a fun, simple and seamless process by offering a wide range of party options,
              competitive prices and flexible inclusions to suit all budgets. With a user-friendly, easy to
              use website, we provide you with a booking experience that is quick and easy from start to
              finish. Select, book and pay securely for your event all in a few simple clicks.
            </p>
            <p className="mb-5 text-xl text-black">
              We build trust and reliability in our customers to ensure a stress-free and enjoyable party
              planning experience. Customer satisfaction is our priority which is why we only promote
              reputable and professional vendors on our website.
            </p>
            <p className="mb-5 text-xl font-semibold text-clr-fb">
              Whatever the event or wherever it is, we will be with you every step of the way by providing you
              with 24/7 customer support. With Book the Party, you can party easy!
            </p>

            <div className="btn-group flex gap-5">
              <button className="flex items-center gap-5 rounded-full bg-clr-fb px-[50px] py-5 text-2xl font-bold text-white">
                View all events
                <span>
                  <ArrowRightIcon className="size-6" />
                </span>
              </button>
              <button className="rounded-full border border-clr-fb px-[50px] py-5 text-2xl font-bold text-clr-fb">
                Contact now
              </button>
            </div>
          </div>
          <div className="col-span-6">
            <div>
              <Image src={IMAboutUS} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
