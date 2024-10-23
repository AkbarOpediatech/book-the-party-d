import FormInput from '@/app/(dashboard)/components/FormInput'
const Hourly = () => {
  return (
    <div>
      <FormInput name="priceValue" type="number" placeholder="$450.00" customClass="mb-4" />
      <div>
        <p className="mb-3 text-clr-ab">Security Deposit Amount</p>
        <div className="flex items-center gap-3">
          <div className="border- flex items-center gap-6 rounded-lg border p-4">
            <label htmlFor="hour1" className="font-medium">
              6 hours
            </label>
            <input type="radio" id="hour1" name="deposit" value="60" className="bg-clr-ab accent-clr-fb" />
          </div>
          <div className="border- flex items-center gap-6 rounded-lg border p-4">
            <label htmlFor="hour2" className="font-medium">
              8 Hours
            </label>
            <input type="radio" id="hour2" name="deposit" className="bg-clr-ab accent-clr-fb" />
          </div>
          <div className="border- flex items-center gap-6 rounded-lg border p-4">
            <label htmlFor="hour3" className="font-medium">
              12 Hours
            </label>
            <input type="radio" id="hour3" name="deposit" className="bg-clr-ab accent-clr-fb" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hourly
