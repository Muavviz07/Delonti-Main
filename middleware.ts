import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    const isLoginPage = pathname === '/console/login'
    const isConsoleRoute = pathname.startsWith('/console')
    const session = request.cookies.get('admin_session')?.value

    if (!isConsoleRoute) {
        return NextResponse.next()
    }

    if (isLoginPage && session) {
        return NextResponse.redirect(new URL('/console', request.url))
    }

    if (!isLoginPage && !session) {
        return NextResponse.redirect(new URL('/console/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/console', '/console/:path*']
}
