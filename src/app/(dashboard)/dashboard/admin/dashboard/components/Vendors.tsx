import { PlusCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from '/public/assets/avatar.jpeg'

const Vendors = () => {
  return (
    <div className="max-h-[806px] bg-white pb-20 shadow-one">
      <div className="flex items-center justify-between p-6">
        <div className="div">
          <h4 className="mb-1 text-lg font-bold text-clr-48">Vendors</h4>
          <p className="text-sm text-clr-81">You have 125 vendors now</p>
        </div>

        <button>
          <PlusCircleIcon className="size-6" />
        </button>
      </div>

      <ul className="px-5 lg:px-10">
        <li className="mb-4 flex items-center gap-3 rounded-xl p-1 hover:bg-slate-100">
          <div className="h-14 w-14 overflow-hidden rounded-full">
            <Image src={Avatar} alt="image" />
          </div>

          <div>
            <Link href={'#'} className="text-sm font-semibold text-clr-36">
              Courtney Henry
            </Link>
            <p className="text-sm text-clr-81">nvt.isst.nute@gmail.com</p>
          </div>
        </li>
      </ul>

      <div className="px-10">
        <Link
          href={'/dashboard/admin/vendors'}
          className="block border py-3 text-center text-sm font-bold text-clr-48 hover:bg-slate-100"
        >
          View All
        </Link>
      </div>
    </div>
  )
}

export default Vendors
