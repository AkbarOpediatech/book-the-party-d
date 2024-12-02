import { cn } from '@/utils'
import Link from 'next/link'
import React from 'react'

type IProps = {
  title: string
  linkURL?: string
  linkName?: string
  desc?: string
  sectionHeadingClass?: string
  headingRootClass?: string
}

const SectionHeading: React.FC<IProps> = ({
  title,
  linkURL,
  linkName,
  desc,
  sectionHeadingClass,
  headingRootClass
}) => {
  return (
    <>
      <div
        className={cn(
          'section-heading mb-5 flex flex-wrap items-center justify-between gap-4 md:mb-9',
          headingRootClass
        )}
      >
        <>
          <h1
            className={cn(
              'mb-4 font-sora text-2xl font-semibold text-neutral-900 md:text-[32px]',
              sectionHeadingClass
            )}
          >
            {title}
          </h1>

          {desc && <p className="text-xl font-medium text-black/65">{desc}</p>}
        </>
        {linkName && (
          <Link
            href={linkURL || '/'}
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
