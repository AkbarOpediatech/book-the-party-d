// src/middleware.ts
import { getToken } from 'next-auth/jwt'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { client } from './utils/config'

export async function middleware(req: NextRequest) {
  const token = await getToken({ req })
  const url = req.nextUrl.clone()

  if (!token) {
    url.pathname = '/api/auth/signin'
    return NextResponse.redirect(`${client}/login`)
  }

  const userRole = token.role

  if (url.pathname.startsWith('/dashboard/admin') && userRole !== 'vendor') {
    url.pathname = '/unauthorized'
    return NextResponse.redirect(url)
  }

  if (url.pathname.startsWith('/dashboard/vendor') && userRole !== 'vendor') {
    url.pathname = '/unauthorized'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/admin/:path*', '/dashboard/vendor/:path*']
}
