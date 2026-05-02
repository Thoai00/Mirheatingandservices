import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. If someone types 'yourdomain.com/admin', pretend it doesn't exist (404)
  if (pathname === '/admin' || pathname === '/login') {
    return NextResponse.rewrite(new URL('/404', request.url));
  }

  // 2. Hide the secret portal from search engines
  if (pathname.startsWith('/system-portal-x99')) {
    const response = NextResponse.next();
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/login', '/system-portal-x99/:path*'],
};