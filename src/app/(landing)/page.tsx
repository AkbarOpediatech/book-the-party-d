import Link from 'next/link'
import Hero from './components/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <h1 className="mb-5 text-4xl text-slate-600">This is Landing Page</h1>
      <Link href={'/admin'} className="mb-5 block bg-orange-200 text-5xl">
        Go Admin
      </Link>
      <Link href={'/dashboard/vendor/dashboard'} className="block bg-orange-200 text-5xl">
        Go Vendor
      </Link>
    </>
  )
}
