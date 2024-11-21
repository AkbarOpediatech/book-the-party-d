import { type ReactNode } from 'react'
type IProps = {
  title: string
  value: string
  icon?: ReactNode
}
const Info: React.FC<IProps> = ({ title, value, icon }) => {
  return (
    <div>
      <p className="text-xl font-medium text-gray-900">{title}</p>
      <div className="flex items-center gap-1.5 text-gray-500">
        {icon}
        <p>{value}</p>
      </div>
    </div>
  )
}

export default Info
