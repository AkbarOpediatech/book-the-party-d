import Image, { type StaticImageData } from 'next/image'

type IProps = {
  title: string
  total: string
  percent: string
  imgSrc1: StaticImageData
  imgSrc2: StaticImageData
  className: string
}

const DashboardCard: React.FC<IProps> = ({ title, total, percent, imgSrc1, imgSrc2, className }) => {
  return (
    <div className="bg-white p-6">
      <div className="card-wrapper flex flex-wrap justify-between gap-4">
        <div className="card-info">
          <h2 className="mb-2 text-sm font-semibold text-clr-48">{title}</h2>
          <p className="mb-2 text-2xl font-bold text-clr-48 md:text-[32px]">{total}</p>
          <p className="flex items-center gap-1 text-sm text-clr-48">
            <Image src={imgSrc1} alt="icon" />
            <span className="font-semibold">{percent}</span>
            <span>than last month</span>
          </p>
        </div>

        <div className="card-icon">
          <div className={`${className} flex h-12 w-12 items-center justify-center rounded-full`}>
            <Image src={imgSrc2} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardCard
