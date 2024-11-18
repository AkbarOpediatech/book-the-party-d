type IProps = {
  label: string
  value: string
}

const InfoItem: React.FC<IProps> = ({ label, value }) => {
  return (
    <li className="col-span-1">
      <p className="mb-4 text-xl text-clr-81">{label}</p>
      <p className="text-xl font-semibold text-clr-27">{value}</p>
    </li>
  )
}

export default InfoItem
