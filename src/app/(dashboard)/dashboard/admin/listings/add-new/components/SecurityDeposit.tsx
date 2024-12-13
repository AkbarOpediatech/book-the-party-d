'use client'
import RadioBox from './RadioBox'

type IProps = {
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void | undefined
}
const SecurityDeposit: React.FC<IProps> = ({ onChange }) => {
  return (
    <div>
      <p className="mb-3 text-clr-ab">Security Deposit Amount</p>
      <div className="flex flex-wrap items-center gap-3">
        <RadioBox id="deposit1" name="deposit" label="25%" value="25" onChange={onChange} />
        <RadioBox id="deposit2" name="deposit" label="50%" value="50" onChange={onChange} />
        <RadioBox id="deposit3" name="deposit" label="65%" value="65" onChange={onChange} />
        <RadioBox id="deposit4" name="deposit" label="80%" value="80" onChange={onChange} />
      </div>
    </div>
  )
}

export default SecurityDeposit
