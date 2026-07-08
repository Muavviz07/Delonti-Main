import { NextRequest, NextResponse } from 'next/server'
import { readAdminConfig } from '@/lib/jobs'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { username, password } = body

        const adminConfig = readAdminConfig()
        const validUsername = process.env.ADMIN_USERNAME ?? 'admin'
        const validPassword = adminConfig.password || process.env.ADMIN_PASSWORD || 'admin'

        if (
            typeof username === 'string' &&
            typeof password === 'string' &&
            username.trim() === validUsername.trim() &&
            password.trim() === validPassword.trim()
        ) {
            const response = NextResponse.json({ success: true })
            response.cookies.set('admin_session', 'authenticated', {
                httpOnly: true,
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
