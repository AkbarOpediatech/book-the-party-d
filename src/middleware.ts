// src/middleware.ts
import { getToken } from 'next-auth/jwt'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const token = await getToken({ req })
  const url = req.nextUrl.clone()

  if (!token) {
    url.pathname = '/api/auth/signin'
    const callbackUrl = encodeURIComponent(req.nextUrl.pathname)
    // return NextResponse.redirect(`${client}/login`)
    return NextResponse.redirect(new URL(`/login?callbackUrl=${callbackUrl}`, req.url))
  }
  const userRole = token.role

  // if (url.pathname.startsWith('/dashboard/admin/') && userRole !== 'admin') {
  //   url.pathname = '/unauthorized'
  //   return NextResponse.redirect(url)
  // }

  // if (url.pathname.startsWith('/dashboard/vendor') && userRole !== 'vendor') {
  //   url.pathname = '/unauthorized'
  //   return NextResponse.redirect(url)
  // }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/admin/:path*', '/dashboard/vendor/:path*', '/dashboard/admin', '/dashboard/vendor']
}
