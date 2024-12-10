import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useEffect, useState } from 'react'

type AddressFormData = {
  name: string
  email: string
  mobileNumber: string
  houseNo: string
  streetName: string
  suburb: string
  state: string
  postCode: string
  isDefault: boolean
}

type EditAddressPopupProps = {
  isVisible: boolean
  onClose: () => void
  onSave: (formData: AddressFormData) => void
  formData: AddressFormData
}

const EditAddressPopup: React.FC<EditAddressPopupProps> = ({ isVisible, onClose, onSave, formData }) => {
  const [localFormData, setLocalFormData] = useState<AddressFormData>(formData)
  useEffect(() => {
    setLocalFormData(formData)
  }, [formData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLocalFormData(prevState => ({ ...prevState, [name]: value }))
  }
  const handleSave = () => {
    onSave(localFormData)
  }
  return (
    <Dialog open={isVisible} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md">
        <DialogPanel className="w-full max-w-lg rounded-lg bg-white p-8 shadow-xl">
          <DialogTitle className="text-2xl font-semibold text-gray-900">Edit Address</DialogTitle>

          <form className="mt-4 space-y-4">
            {Object.keys(localFormData).map(key => (
              <div key={key} className="flex flex-col">
                <label htmlFor={key} className="text-sm text-gray-700">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <input
                  id={key}
                  name={key}
                  type="text"
                  value={localFormData[key as keyof AddressFormData] as string}
                  onChange={handleChange}
                  className="mt-2 rounded-lg border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            ))}
          </form>

          <div className="mt-6 flex justify-end gap-4">
            <button
              className="rounded-full bg-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition duration-200 hover:bg-gray-300"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="rounded-full bg-clr-fb px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-clr-fb"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}

export default EditAddressPopup
