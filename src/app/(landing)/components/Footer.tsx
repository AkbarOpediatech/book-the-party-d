import Image from 'next/image'
import Link from 'next/link'
import ICFacebook from '/public/assets/ic-fb.svg'
import ICGoogle from '/public/assets/ic-google.svg'
import ICHelp from '/public/assets/ic-help.svg'
import ICInstagram from '/public/assets/ic-instagram.svg'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer>
      <div className="bg-clr-f2 py-[47px] pb-[66px]">
        <div className="mx-auto max-w-[1607px] px-5">
          <h1 className="mb-5 flex items-center gap-2 font-sora text-3xl font-semibold">
            <Image src={ICHelp} alt="icon" />
            Help & support
          </h1>
          <p className="mb-2 font-poppins text-base font-light text-black">Get Help or get in touch</p>
          {/* footer nav items */}
          <ul className="flex gap-1">
            <li>
              <Link className="font-poppins text-base font-light text-black" href={'#'}>
                About |
              </Link>
            </li>
            <li>
              <Link className="font-poppins text-base font-light text-black" href={'#'}>
                Contact |{' '}
              </Link>
            </li>
            <li>
              <Link className="font-poppins text-base font-light text-black" href={'#'}>
                FAQ |
              </Link>
            </li>
            <li>
              <Link className="font-poppins text-base font-light text-black" href={'#'}>
                Policies |
              </Link>
            </li>
            <li>
              <Link className="font-poppins text-base font-light text-black" href={'#'}>
                Terms & Conditions |
              </Link>
            </li>
            <li>
              <Link
                className="font-poppins text-base font-light text-black"
                href={'/dashboard/vendor/dashboard'}
              >
                Vendor
              </Link>
            </li>
          </ul>
          {/* footer social items */}
          <ul className="my-5 flex items-center gap-5">
            <li>
              <Link href={'#'}>
                <Image width={30} height={30} src={ICFacebook} alt="facebook" />
              </Link>
            </li>
            <li>
              <Link href={'#'}>
                <Image width={30} height={30} src={ICGoogle} alt="facebook" />
              </Link>
            </li>
            <li>
              <Link href={'#'}>
                <Image width={30} height={30} src={ICInstagram} alt="facebook" />
              </Link>
            </li>
          </ul>

          <p className="font-poppins text-base font-light text-black">
            Book the Party acknowledges the Traditional Aboriginal and Torres Strait Islander Owners of the
            land, sea and <br className="lg:block" /> waters of Australia. We respect and recognise their
            custodianship of culture and Country.
          </p>
        </div>
      </div>
      <p className="py-5 text-center font-light">Copyright © {year} Vacasky. All rights reserved.</p>
    </footer>
  )
}

export default Footer
