import Loader from '@/app/(landing)/components/Loader/Loader'
import { useFetchUserQuery, type IUser } from '@/redux/features/user/apiSlice'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from '/public/assets/avatar.jpeg'

const Vendors = () => {
  const { data: vendors, isLoading, isError } = useFetchUserQuery({ role: 'vendor', limit: 8, page: 1 })

  const vendorData: IUser[] = Array.isArray(vendors?.data) ? vendors.data : []

  if (isLoading) {
    return <Loader type="loading" message="Please wait sometimes" />
  }

  if (isError) {
    return <Loader type="error" message="Please try again later." />
  }

  return (
    <div className="no-scroll max-h-[806px] overflow-y-scroll bg-white pb-20 shadow-one">
      <div className="flex items-center justify-between p-6">
        <div className="div">
          <h4 className="mb-1 text-lg font-bold text-clr-48">Vendors</h4>
          <p className="text-sm text-clr-81">You have {vendors?.pagination?.records} vendors now</p>
        </div>
      </div>

      <ul className="px-5 lg:px-10">
        {vendorData?.map((item, index) => (
          <li className="mb-4 flex items-center gap-3 rounded-xl p-1 hover:bg-slate-100" key={index}>
            <div className="h-14 w-14 overflow-hidden rounded-full">
              <Image
                width={40}
                height={40}
                src={item?.avatar || Avatar}
                alt="image"
                className="w-full overflow-hidden"
              />
            </div>

            <div>
              <div className="text-sm font-semibold capitalize text-clr-36">
                {item?.name || 'Ashiqur Rahman'}
              </div>
              <p className="text-sm text-clr-81">{item?.email || 'getintouch.ashiq@gmail.com'}</p>
            </div>
          </li>
        ))}
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
