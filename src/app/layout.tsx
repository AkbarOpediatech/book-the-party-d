import ClientProvider from '@/components/ClientProvider'
import type { Metadata } from 'next'
import { Inter, Public_Sans, Sora } from 'next/font/google'
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

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Book the party',
  description:
    'BOOKTHEPARTY® is one of the leading and best even planners and party organizers in the worldwide that provides high quality services at an affordable price.'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${publicsans.className} ${sora.variable} ${inter.variable} font-Public_sans`}
        suppressHydrationWarning={true}
      >
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  )
}
