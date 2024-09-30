type IProps = {
  title: string
  breadcrumbs: string
}

const TitleAndBreadCrumbs: React.FC<IProps> = ({ title, breadcrumbs }) => {
  return (
    <div className="mb-10">
      <h1 className="mb-2 font-bold capitalize text-clr-36">{title}</h1>
      <p className="flex items-center gap-4 text-sm capitalize text-clr-36">
        Dashboard
        <span className="block h-1 w-1 rounded-full bg-clr-ab"></span>
        <span className="text-clr-bc capitalize">{breadcrumbs}</span>
      </p>
    </div>
  )
}

export default TitleAndBreadCrumbs
