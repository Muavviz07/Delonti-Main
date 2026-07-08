import { NextRequest, NextResponse } from 'next/server'
import { readAdminConfig } from '@/lib/jobs'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { username, password } = body

        const adminConfig = readAdminConfig()
        const users = adminConfig.users || {}

        if (
            typeof username === 'string' &&
            typeof password === 'string' &&
            users[username] &&
            users[username] === password
        ) {
            const response = NextResponse.json({ success: true, role: username })
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
