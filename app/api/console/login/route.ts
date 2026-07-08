import { NextRequest, NextResponse } from 'next/server'
import { readAdminConfig } from '@/lib/jobs'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { username, password } = body

        const adminConfig = readAdminConfig()
        const users = adminConfig.users || {}
        const userConfig = users[username]

        if (
            typeof username === 'string' &&
            typeof password === 'string' &&
            userConfig &&
            userConfig.password === password
        ) {
            const response = NextResponse.json({ success: true, role: userConfig.role, username })
            response.cookies.set('admin_session', username, {
                httpOnly: true,
                secure: false,
                sameSite: 'lax',
                maxAge: 60 * 60 * 24,
                path: '/',
            })
            response.cookies.set('admin_user', username, {
                httpOnly: false,
                secure: false,
                sameSite: 'lax',
                maxAge: 60 * 60 * 24,
                path: '/',
            })
            response.cookies.set('admin_role', userConfig.role || 'restricted-admin', {
                httpOnly: false,
                secure: false,
                sameSite: 'lax',
                maxAge: 60 * 60 * 24,
                path: '/',
            })
            return response
        }

        return NextResponse.json(
            { error: 'Invalid credentials' },
            { status: 401 }
        )
    } catch {
        return NextResponse.json(
            { error: 'Bad request' },
            { status: 400 }
        )
    }
}
