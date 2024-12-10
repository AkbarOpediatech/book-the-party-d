// src/middleware.ts
import { getToken } from 'next-auth/jwt'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const token = await getToken({ req })
  const url = req.nextUrl.clone()

  if (!token) {
    url.pathname = '/api/auth/signin'
    return NextResponse.redirect(url)
  }

  const userRole = token.role

  if (url.pathname.startsWith('/admin') && userRole !== 'admin') {
    url.pathname = '/unauthorized'
    return NextResponse.redirect(url)
  }

  if (url.pathname.startsWith('/editor') && userRole !== 'editor') {
    url.pathname = '/unauthorized'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/editor/:path*']
}
