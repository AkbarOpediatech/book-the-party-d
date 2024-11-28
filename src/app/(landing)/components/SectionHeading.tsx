import { cn } from '@/utils'
import Link from 'next/link'
import React from 'react'

type IProps = {
  title: string
  linkURL?: any
  linkName?: string
  desc?: string
  sectionHeadingClass?: string
}

const SectionHeading: React.FC<IProps> = ({ title, linkURL, linkName, desc, sectionHeadingClass }) => {
  return (
    <>
      <div className="section-heading mb-5 flex flex-wrap items-center justify-between gap-4 md:mb-9">
        <div>
          <h1
            className={cn(
              'font-sora text-2xl font-semibold text-neutral-900 md:text-[32px]',
              sectionHeadingClass
            )}
          >
            {title}
          </h1>
          {desc && <p className="text-xl font-medium text-black/65">{desc}</p>}
        </div>
        {linkName && (
          <Link
            href={linkURL}
            className="inline-block rounded-lg bg-clr-fb p-3 text-sm font-bold text-white md:text-base lg:px-8 lg:py-5"
          >
            {linkName}
          </Link>
        )}
      </div>
    </>
  )
}

export default SectionHeading
