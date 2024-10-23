import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import FormInput from '@/app/(dashboard)/components/FormInput'
import FileUpload from './FileUpload'
import Inclusions from './Inclusions'

type IProps = {
  setStep: any
}
const ItemList: React.FC<IProps> = ({ setStep }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // setStep(2)
  }

  return (
    <div className="w-full max-w-[736px] rounded-lg bg-white p-6 shadow">
      <p className="mb-6 text-2xl font-bold text-clr-36">Item List</p>
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
        <FileUpload />
        <div className="mt-6 border-b border-gray-200" />
        <DashboardButton name="Continue" type="submit" className="mt-5" />
      </form>
    </div>
  )
}

export default ItemList
