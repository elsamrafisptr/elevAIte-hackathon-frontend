import { NextResponse } from 'next/server'

export async function middleware() {
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
  ]
}
