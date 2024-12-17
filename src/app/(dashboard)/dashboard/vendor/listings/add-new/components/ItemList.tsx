import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import FormInput from '@/app/(dashboard)/components/FormInput'
import GrayBtn from '@/app/(dashboard)/components/GrayBtn'
import type { ServiceItemPost } from '@/redux/features/services/apiSlice'
import { updateListingField } from '@/redux/features/services/listingSlice'
import type React from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { useDispatch } from 'react-redux'
import FileUpload from './FileUpload'
import Inclusions from './Inclusions'

type IProps = {
  setStep: Dispatch<SetStateAction<number>>
  isEditListing?: boolean
  formData: ServiceItemPost
  setFormData: Dispatch<SetStateAction<ServiceItemPost>>
  handleChange: <T extends keyof ServiceItemPost>(field: T, value: ServiceItemPost[T]) => void
}

const ItemList: React.FC<IProps> = ({ setStep, isEditListing, handleChange }) => {
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  return (
    <div className="w-full max-w-[736px] rounded-lg bg-white p-6 shadow">
      <p className="mb-6 text-xl font-bold text-clr-36 md:text-2xl">
        {isEditListing === true ? 'Edit Item List' : 'Item List'}
      </p>
      <form onSubmit={handleSubmit}>
        {/* title */}
        <FormInput
          name="title"
          label="Title"
          type="text"
          customClass="mb-4"
          placeholder="Write a tittle"
          onChange={(e: any) => void dispatch(updateListingField({ field: 'title', value: e.target.value }))}
          // onChange={e => handleChange('title', e.target.value)}
        />
        {/* Description */}
        <FormInput
          name="description"
          label="Description"
          type="textarea"
          customClass="mb-4"
          onChange={(e: any) =>
            void dispatch(updateListingField({ field: 'description', value: e.target.value }))
          }
        />

        {/* Location */}
        <FormInput
          name="location"
          label="Location"
          type="select"
          options={['Sydney', 'Brisbane', 'Melbourne']}
          customClass="mb-4"
          onChange={(e: any) =>
            void dispatch(updateListingField({ field: 'location', value: e.target.value }))
          }
        />

        {/* inclusions */}
        <Inclusions
          onChange={(e: any) =>
            void dispatch(updateListingField({ field: 'inclusions', value: e.target.value }))
          }
        />

        {/* infos */}
        {/* <ImportantInfo
          onChange={(e: any) =>
            void dispatch(updateListingField({ field: 'location', value: e.target.value }))
          }
        /> */}

        {/*FileUpload  */}
        <FileUpload
          onChange={(e: any) =>
            void dispatch(
              updateListingField({
                field: 'featured_image',
                value: e.target.files?.[0] ? e.target.files?.[0] : null
              })
            )
          }
        />

        <div className="mt-6 border-b border-gray-200" />
        <div className="mt-5 flex items-center gap-4">
          <GrayBtn name="Back" onClick={() => setStep(0)} />
          <DashboardButton name="Continue" type="submit" />
        </div>
      </form>
    </div>
  )
}

export default ItemList
