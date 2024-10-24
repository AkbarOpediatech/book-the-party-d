import Link from 'next/link'
import React from 'react'

type IProps = {
  title: string
  linkURL?: any
  linkName?: string
  desc?: string
}

const SectionHeading: React.FC<IProps> = ({ title, linkURL, linkName, desc }) => {
  return (
    <>
      <div className="section-heading mb-9 flex items-center justify-between">
        <div>
          <h1 className="font-sora text-[32px] font-semibold text-neutral-900">{title}</h1>
          {desc && <p className="text-xl font-medium text-black/65">{desc}</p>}
        </div>
        {linkName && (
          <Link
            href={linkURL}
            className="inline-block rounded-lg bg-clr-fb px-8 py-5 text-base font-bold text-white"
          >
            {linkName}
          </Link>
        )}
      </div>
    </>
  )
}

export default SectionHeading
