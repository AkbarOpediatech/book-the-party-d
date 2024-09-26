import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl text-slate-600 mb-5">This is Landing Page</h1>
      <Link href={'/dashboard/admin'} className="text-5xl block bg-orange-200 mb-5">
        Go Admin
      </Link>
      <Link href={'/dashboard/vendor'} className="text-5xl block bg-orange-200">
        Go Vendor
      </Link>
    </div>
  )
}
