import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import { useFetchUserByIdQuery } from '@/redux/features/user/apiSlice'
import { useToken } from '@/redux/hooks/useToken'
import { InformationCircleIcon, PlusIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Info from './Info'
import edit from '/public/assets/edit-user.svg'

type IProps = {
  setShowBankInfoEdit: (showIndex: boolean) => void
}

const BankingInfo: React.FC<IProps> = ({ setShowBankInfoEdit }) => {
  const { session } = useToken()
  const userId = session?.user?.id ?? ''
  const { data: response } = useFetchUserByIdQuery(userId, {
    skip: !userId
  })

  const isPaymentActive = response?.data?.stripe_acct

  return (
    <>
      {isPaymentActive === null ? (
        <DashboardButton
          name={'Add Payment Method'}
          type="button"
          icon={<PlusIcon className="size-4 font-bold" />}
        />
      ) : (
        <>
          <div className="mb-6 flex items-center gap-2">
            <p className="text-xl font-medium text-gray-900">Banking Details</p>
            <InformationCircleIcon className="size-3 text-gray-400" />
          </div>
          <div className="grid grid-cols-2 gap-12 border-b border-gray-200 pb-6">
            <div className="flex flex-col gap-5">
              <Info
                title="Billing Address"
                value="92 Miles Drive, Newark, NJ 07103, California, United States of America"
              />
            </div>
          </div>
          <DashboardButton
            icon={<Image src={edit} alt="icon" />}
            name="Edit"
            type="button"
            className="mt-5"
            onClick={() => setShowBankInfoEdit(true)}
          />
        </>
      )}
    </>
  )
}

export default BankingInfo
