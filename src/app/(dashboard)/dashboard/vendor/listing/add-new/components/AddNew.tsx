import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import FormInput from '@/app/(dashboard)/components/FormInput'

type IProps = {
  setStep: any
}
const AddNew: React.FC<IProps> = ({ setStep }) => {
  return (
    <div className="w-full max-w-[736px] rounded-lg bg-white p-6 shadow">
      <p className="mb-6 text-2xl font-bold text-clr-36">Add New</p>
      <form>
        <FormInput
          name="categories"
          label="Categories"
          type="select"
          customClass="mb-4"
          options={['Party Packages', 'Party Packages', 'Party Packages']}
        />
        <FormInput
          name="subcategories"
          label="Sub Categories"
          type="select"
          customClass="pb-6 border-b"
          options={['Birthday', 'Birthday', 'Birthday']}
        />
        <DashboardButton name="Continue" type="button" className="mt-5" onClick={() => setStep(1)} />
      </form>
    </div>
  )
}

export default AddNew
