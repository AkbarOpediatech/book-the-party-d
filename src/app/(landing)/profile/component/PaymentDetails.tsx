import InputField from '@/app/(auth)/components/InputField'
import CustomBtn from '../../components/CustomBtn'

const PaymentDetails = () => {
  return (
    <ul className="space-y-7 px-4 md:px-8">
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
      <li className="flex flex-col gap-5 md:flex-row">
        <div className="w-full">
          <InputField LabelName="Expire" LabelHtmlFor="Expire" InputId="Expire" InputType="date" />
        </div>
        <div className="w-full">
          <InputField
            LabelName="CVC"
            LabelHtmlFor="CVC"
            InputId="CVC"
            InputType="text"
            InputPlaceHolder="123"
          />
        </div>
      </li>
      <li>
        <CustomBtn btnName="Update Details" btnType="submit" className="mx-auto w-full md:w-1/2 md:text-sm" />
      </li>
    </ul>
  )
}

export default PaymentDetails
