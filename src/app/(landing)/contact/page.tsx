import { ChatBubbleBottomCenterIcon, EnvelopeOpenIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import CustomBtn from '../components/CustomBtn'
import ContactInput from './components/ContactInput'
import ICFacebook from '/public/assets/ic-fb.svg'
import ICGoogle from '/public/assets/ic-google.svg'
import ICInstagram from '/public/assets/ic-instagram.svg'

const Contact = () => {
  return (
    <section id="contact" className="pb-28 pt-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="space-y-16">
            <div>
              <h1 className="mb-6 font-sora text-5xl font-bold md:text-[84px]">Let's Talk</h1>

              <p className="mb-16 text-xl font-light md:text-2xl">
                Need Assistance? Our Dedicated Support Team is here to Help! Whether you have questions about
                booking your next event, need assistance with our online platform, or require personalised
                recommendations to make your celebration unforgettable, our friendly support staff is just a
                message away.
              </p>

              <div className="flex flex-wrap gap-10 lg:flex-nowrap">
                <Link href={'/live-chat'} className="block w-full max-w-[345px] bg-clr-87 p-6">
                  <div className="mb-2 flex justify-center md:mb-5">
                    <span className="inline-block rounded-full border-2 p-3 md:p-5">
                      <ChatBubbleBottomCenterIcon className="size-4 md:size-5" stroke="white" />
                    </span>
                  </div>

                  <h3 className="mb-2 text-center font-sora text-2xl text-black md:mb-6 md:text-[42px]">
                    Live Chat
                  </h3>

                  <p className="text-center text-base text-black md:text-xl">
                    Chat in real time to one of our friendly team members
                  </p>
                </Link>

                <Link href={'/live-chat'} className="block w-full max-w-[345px] bg-clr-d8 p-6">
                  <div className="mb-2 flex justify-center md:mb-5">
                    <span className="inline-block rounded-full border-2 p-3 md:p-5">
                      <EnvelopeOpenIcon className="size-4 md:size-5" stroke="white" />
                    </span>
                  </div>

                  <h3 className="mb-2 text-center font-sora text-2xl text-black md:mb-6 md:text-[42px]">
                    Email
                  </h3>
                  <p className="text-center text-base text-black md:text-xl">
                    Click here to send us an email.
                  </p>
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

          <form>
            <ul className="mb-10 space-y-6 md:space-y-10">
              <li>
                <ContactInput
                  htmlFor="name"
                  inputId="name"
                  inputType="text"
                  labelName="name"
                  placeholder="Name"
                />
              </li>

              <li>
                <ContactInput
                  htmlFor="email"
                  inputId="email"
                  inputType="email"
                  labelName="email"
                  placeholder="Email"
                />
              </li>

              <li>
                <ContactInput
                  inputType="select"
                  labelName="What service are you interested in"
                  htmlFor="select"
                  selectName="select"
                  selectId="select"
                  options={['Something', 'Something', 'Something']}
                />
              </li>

              <li>
                <ContactInput
                  inputType="select"
                  labelName="Budget"
                  htmlFor="budget"
                  selectName="budget"
                  selectId="budget"
                  options={['Budget', 'Budget', 'Budget']}
                />
              </li>

              <li>
                <ContactInput inputType="file" />
              </li>

              <li>
                <label className="mb-5 block text-sm capitalize text-black md:text-base">Message</label>
                <textarea name="" id="" className="h-[120px] w-full bg-gray-50 p-5 md:h-[220px]"></textarea>
              </li>
            </ul>

            <CustomBtn btnType="submit" btnName="Submit" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
