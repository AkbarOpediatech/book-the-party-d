import { ChatBubbleBottomCenterIcon, EnvelopeOpenIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import ContactInput from './components/ContactInput'
import ICFacebook from '/public/assets/ic-fb.svg'
import ICGoogle from '/public/assets/ic-google.svg'
import ICInstagram from '/public/assets/ic-instagram.svg'

const Contact = () => {
  return (
    <section id="contact" className="pb-28 pt-20">
      <div className="container">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-5">
            <div className="mb-16">
              <h1 className="mb-6 font-sora text-[84px] font-bold">Let's Talk</h1>
              <p className="mb-16 text-2xl font-light">
                Need Assistance? Our Dedicated Support Team is here to Help! Whether you have questions about
                booking your next event, need assistance with our online platform, or require personalised
                recommendations to make your celebration unforgettable, our friendly support staff is just a
                message away.
              </p>
              <div className="flex justify-between">
                <Link href={'/live-chat'} className="block w-full max-w-[345px] bg-clr-87 p-6">
                  <div className="flex justify-center">
                    <span className="inline-block rounded-full border-2 p-5">
                      <ChatBubbleBottomCenterIcon className="size-5" stroke="white" />
                    </span>
                  </div>

                  <h3 className="mb-6 text-center font-sora text-[42px] text-black">Live Chat</h3>
                  <p className="text-center text-xl text-black">
                    Chat in real time to one of our friendly team members
                  </p>
                </Link>

                <Link href={'/live-chat'} className="block w-full max-w-[345px] bg-clr-d8 p-6">
                  <div className="flex justify-center">
                    <span className="inline-block rounded-full border-2 p-5">
                      <EnvelopeOpenIcon className="size-5" stroke="white" />
                    </span>
                  </div>

                  <h3 className="mb-6 text-center font-sora text-[42px] text-black">Email</h3>
                  <p className="text-center text-xl text-black">Click here to send us an email.</p>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="mb-6 font-sora text-[42px] font-semibold text-black">Socials</h3>
              <ul className="flex gap-3">
                <li>
                  <Link href={'#'} className="block">
                    <Image width={50} height={50} src={ICFacebook} alt="icon" />
                  </Link>
                </li>
                <li>
                  <Link href={'#'} className="block">
                    <Image width={50} height={50} src={ICGoogle} alt="icon" />
                  </Link>
                </li>
                <li>
                  <Link href={'#'} className="block">
                    <Image width={50} height={50} src={ICInstagram} alt="icon" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-7">
            <form>
              <ul className="mb-10">
                <li className="mb-10 last:mb-0">
                  <ContactInput
                    htmlFor="name"
                    inputId="name"
                    inputType="text"
                    labelName="name"
                    placeholder="Name"
                  />
                </li>

                <li className="mb-10 last:mb-0">
                  <ContactInput
                    htmlFor="email"
                    inputId="email"
                    inputType="email"
                    labelName="email"
                    placeholder="Email"
                  />
                </li>

                <li className="mb-10 last:mb-0">
                  <ContactInput
                    inputType="select"
                    labelName="What service are you interested in"
                    htmlFor="select"
                    selectName="select"
                    selectId="select"
                    options={['Something', 'Something', 'Something']}
                  />
                </li>

                <li className="mb-10 last:mb-0">
                  <ContactInput
                    inputType="select"
                    labelName="Budget"
                    htmlFor="budget"
                    selectName="budget"
                    selectId="budget"
                    options={['Budget', 'Budget', 'Budget']}
                  />
                </li>

                <li className="mb-10 last:mb-0">
                  <ContactInput inputType="file" />
                </li>

                <li className="mb-10 last:mb-0">
                  <label className="mb-5 block text-base capitalize text-black">Message</label>
                  <textarea name="" id="" className="h-[220px] w-full bg-gray-50 p-5"></textarea>
                </li>
              </ul>

              <button className="w-full rounded-xl bg-clr-fb py-5 text-2xl font-bold text-white">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
