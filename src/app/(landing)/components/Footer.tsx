import Image from 'next/image'
import Link from 'next/link'
import ICHelp from '/public/assets/ic-help.svg'

const Footer = () => {
  return (
    <footer className="bg-clr-f2 py-[47px] pb-[66px]">
      <div className="mx-auto max-w-[1607px] px-5">
        <h1 className="mb-5 flex items-center gap-2 font-sora text-3xl font-semibold">
          <Image src={ICHelp} alt="icon" />
          Help & support
        </h1>
        <p className="font-poppins mb-2 text-base font-light text-black">Get Help or get in touch</p>
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
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
