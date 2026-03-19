import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    const isLoginPage = pathname === '/admin/login'
    const isAdminRoute = pathname.startsWith('/admin')
    const session = request.cookies.get('admin_session')?.value

    if (!isAdminRoute) {
        return NextResponse.next()
    }

    if (isLoginPage && session) {
        return NextResponse.redirect(new URL('/admin/careers', request.url))
    }

    if (!isLoginPage && !session) {
        return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/admin', '/admin/:path*']
}
