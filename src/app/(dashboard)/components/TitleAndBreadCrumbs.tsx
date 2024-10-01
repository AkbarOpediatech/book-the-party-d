import React from 'react'

type IProps = {
  title: string
  breadcrumbs: string
  menuitem: string
}

const TitleAndBreadCrumbs: React.FC<IProps> = ({ title, menuitem: menuitem, breadcrumbs }) => {
  return (
    <React.Fragment>
      <h1 className="mb-2 font-bold capitalize text-clr-36">{title}</h1>
      <p className="flex items-center gap-4 text-sm capitalize text-clr-36">
        {menuitem}
        <span className="block h-1 w-1 rounded-full bg-clr-ab"></span>
        <span className="capitalize text-clr-bc">{breadcrumbs}</span>
      </p>
    </React.Fragment>
  )
}

export default TitleAndBreadCrumbs
