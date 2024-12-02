import ReduxProvider from '@/ReduxProvider/ReduxProvider'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { Nunito, Public_Sans, Sora } from 'next/font/google'
import { authOptions } from './api/auth/[...nextauth]/route'
import './style.css'

const publicsans = Public_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-sora'
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-nunito'
})

export const metadata: Metadata = {
  title: 'Book the party',
  description:
    'BOOKTHEPARTY® is one of the leading and best even planners and party organizers in the worldwide that provides high quality services at an affordable price.'
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body
        className={`${publicsans.className} ${sora.variable} ${nunito.variable}`}
        suppressHydrationWarning={true}
      >
        <ReduxProvider session={session}>{children}</ReduxProvider>
      </body>
    </html>
  )
}
