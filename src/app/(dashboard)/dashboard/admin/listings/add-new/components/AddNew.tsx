import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import FormInput from '@/app/(dashboard)/components/FormInput'
import type { ServiceItemPost } from '@/redux/features/services/apiSlice'
import { categories, subCategories } from '@/utils'
import type { Dispatch, SetStateAction } from 'react'

type IProps = {
  setStep: Dispatch<SetStateAction<number>>
  isEditListing?: boolean
  handleChange: <T extends keyof ServiceItemPost>(field: T, value: ServiceItemPost[T]) => void
}

const AddNew: React.FC<IProps> = ({ setStep, isEditListing, handleChange }) => {
  return (
    <div className="w-full max-w-[736px] rounded-lg bg-white p-6 shadow">
      <p className="mb-6 text-xl font-bold text-clr-36 md:text-2xl">
        {isEditListing === true ? 'Edit' : 'Add New'}
      </p>
      <form>
        <FormInput
          name="categories"
          label="Categories"
          type="select"
          customClass="mb-4"
          options={categories}
          onChange={e => handleChange('category', e.target.value)}
        />

        <FormInput
          name="subcategories"
          label="Sub Categories"
          type="select"
          customClass="pb-6 border-b"
          options={subCategories}
          onChange={e => handleChange('category', e.target.value)}
        />
        <DashboardButton name="Continue" type="button" className="mt-5" onClick={() => setStep(1)} />
      </form>
    </div>
  )
}

export default AddNew
