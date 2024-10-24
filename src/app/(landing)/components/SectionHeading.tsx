import Link from 'next/link'

type IProps = {
  title: string
  linkURL?: any
  linkName?: string
}

const SectionHeading: React.FC<IProps> = ({ title, linkURL, linkName }) => {
  return (
    <>
      <div className="section-heading mb-9 flex items-center justify-between">
        <h1 className="font-sora text-[32px] font-semibold text-neutral-900">{title}</h1>
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
