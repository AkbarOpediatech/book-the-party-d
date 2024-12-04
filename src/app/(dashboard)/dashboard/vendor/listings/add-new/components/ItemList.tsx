import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import FormInput from '@/app/(dashboard)/components/FormInput'
import GrayBtn from '@/app/(dashboard)/components/GrayBtn'
import FileUpload from './FileUpload'
import ImportantInfo from './ImportantInfo'
import Inclusions from './Inclusions'

type IProps = {
  setStep: (stepIndex: number) => void
  isEditListing: boolean
}
const ItemList: React.FC<IProps> = ({ setStep, isEditListing }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  return (
    <div className="w-full max-w-[736px] rounded-lg bg-white p-6 shadow">
      <p className="mb-6 text-xl font-bold text-clr-36 md:text-2xl">
        {' '}
        {isEditListing === true ? 'Edit Item List' : 'Item List'}
      </p>
      <form onSubmit={handleSubmit}>
        <FormInput name="tittle" label="Tittle" type="text" customClass="mb-4" placeholder="Write a tittle" />
        <FormInput name="description" label="Description" type="textarea" customClass="mb-4" />
        <FormInput
          name="location"
          label="Location"
          type="select"
          options={['Sydney', 'Sydney', 'Sydney']}
          customClass="mb-4"
        />
        <Inclusions />
        <ImportantInfo />
        <FileUpload />
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
