import { updateAddress } from '@/redux/features/formSlice'
import { nextStep } from '@/redux/features/stepperSlice'
import useStepper from '@/redux/hooks/useStepper'
import { PencilIcon, TrashIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
type Address = {
  name: string
  email: string
  phone: string
  country: string
  street: string
  city: string
  state: string
  postcode: string
}

interface DeliveryAddressProps {
  addresses: Address[]
  onAddNew: () => void
  onSetDefault: (index: number) => void
  onDeleteAddress: (index: number) => void
}
const DeliveryAddress: React.FC<DeliveryAddressProps> = ({
  addresses,
  onAddNew,
  onSetDefault,
  onDeleteAddress
}) => {
  const { dispatch } = useStepper()
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const [currentEditIndex, setCurrentEditIndex] = useState<number | null>(null)
  const [formData, setFormData] = useState<Address>({
    name: '',
    email: '',
    phone: '',
    country: '',
    street: '',
    city: '',
    state: '',
    postcode: ''
  })
  const handleSave = (updatedData: Address) => {
    if (currentEditIndex !== null) {
      dispatch(updateAddress({ index: currentEditIndex, updatedAddress: updatedData }))
      setIsPopupVisible(false)
    }
  }
  const handleEditClick = (index: number) => {
    setCurrentEditIndex(index)
    setFormData(addresses[index])
    setIsPopupVisible(true)
  }

  return (
    <div className="mb-8 border-b pb-8">
      <div className="mb-6 flex justify-between">
        <h1 className="font-sora text-xl font-bold text-clr-0f md:text-2xl">Select a delivery address</h1>
      </div>
      <ul className="flex flex-wrap gap-5">
        {addresses.map((addr, index) => (
          <li key={index}>
            <div className="mb-6 w-full max-w-[590px] bg-gray-50 p-6">
              {/* <label className="mb-6 flex w-full max-w-[410px] cursor-pointer items-start space-x-3">
                <div
                  className={`relative h-4 w-4 rounded-md border border-gray-500 ${addr.isDefault && 'border-purple-700 bg-purple-700'}`}
                >
                  <input
                    type="checkbox"
                    checked={addr.isDefault}
                    onChange={() => onSetDefault(index)}
                    className="hidden h-4 w-4 cursor-pointer appearance-none rounded-md border border-gray-500 checked:bg-purple-700 focus:ring-purple-700"
                  />
                  {addr.isDefault && (
                    <CheckIcon
                      className="absolute left-1/2 top-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2"
                      fill="white"
                    />
                  )}
                </div>
                <div>
                  <p className="mb-5 font-sora text-2xl font-bold leading-5 md:text-[32px]">{addr.name}</p>
                  <p className="text-xl font-light md:text-2xl">{addr.streetName}</p>
                </div>
              </label> */}
              <div className="flex gap-6">
                <button
                  className="flex w-full max-w-[240px] items-center justify-center gap-3 bg-gray-100 py-3"
                  onClick={() => handleEditClick(index)}
                >
                  <PencilIcon className="size-4" />
                  <span className="text-sm font-light text-clr-0f">Edit</span>
                </button>

                <button
                  className="flex w-full max-w-[240px] items-center justify-center gap-3 bg-clr-e2 py-3"
                  onClick={() => onDeleteAddress(index)}
                >
                  <TrashIcon className="size-4 text-red-600" />
                  <span className="text-sm font-light text-clr-0f">Delete</span>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex gap-5">
        <button
          type="button"
          onClick={() => dispatch(nextStep())}
          disabled={addresses.length === 0}
          className="rounded-xl bg-clr-fb px-5 py-4 text-sm text-white md:px-10 md:text-2xl"
        >
          Deliver here
        </button>
        <button
          type="button"
          onClick={onAddNew}
          className="rounded-xl bg-clr-fb px-5 py-4 text-sm text-white md:px-10 md:text-2xl"
        >
          Add new address
        </button>
      </div>
      {/* <EditAddressPopup
        isVisible={isPopupVisible}
        onClose={() => setIsPopupVisible(false)}
        onSave={handleSave}
        formData={formData}
      /> */}
    </div>
  )
}

export default DeliveryAddress
