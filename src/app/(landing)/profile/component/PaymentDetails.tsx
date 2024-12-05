import InputField from '@/app/(auth)/components/InputField'
import CustomBtn from '../../components/CustomBtn'

const PaymentDetails = () => {
  return (
    <ul className="space-y-7">
      <li>
        <InputField
          LabelName="Card Holder name"
          LabelHtmlFor="CardHolderName"
          InputName="Albert"
          InputId="CardHolderName"
          InputPlaceHolder="Albert"
        />
      </li>
      <li>
        <InputField
          LabelName="Card Number"
          LabelHtmlFor="CardNumber"
          InputName="5782  2657  2598  564"
          InputId="CardNumber"
          InputPlaceHolder="5782  2657  2598  564"
        />
      </li>
      <li className="flex gap-5">
        <div className="w-full">
          <InputField LabelName="Expire" LabelHtmlFor="Expire" InputId="Expire" InputType="date" />
        </div>
        <div className="w-full">
          <InputField LabelName="CVC" LabelHtmlFor="CVC" InputId="CVC" InputType="date" />
        </div>
      </li>
      <li>
        <CustomBtn btnName="Update Details" btnType="submit" className="w-full md:text-sm" />
      </li>
    </ul>
  )
}

export default PaymentDetails
