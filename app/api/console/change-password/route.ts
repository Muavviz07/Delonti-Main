import { NextRequest, NextResponse } from "next/server";
import { readAdminConfig, writeAdminConfig } from "@/lib/jobs";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
    try {
        const session = request.cookies.get("admin_session")?.value; // current username
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const config = readAdminConfig();
        const users = config.users || {};
        const userConfig = users[session];

        if (!userConfig) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();
        const { newUsername, currentPassword, newPassword } = body;

        if (!currentPassword) {
            return NextResponse.json({ error: "Current password is required" }, { status: 400 });
        }

        if (currentPassword !== userConfig.password) {
            return NextResponse.json({ error: "Incorrect current password" }, { status: 400 });
        }

        const finalUsername = newUsername && newUsername.trim() ? newUsername.trim() : session;
        const finalPassword = newPassword && newPassword.trim() ? newPassword.trim() : userConfig.password;

        if (finalUsername !== session && users[finalUsername]) {
            return NextResponse.json({ error: "Username already taken" }, { status: 400 });
        }

        if (finalUsername !== session) {
            delete config.users![session];
            config.users![finalUsername] = {
                password: finalPassword,
                role: userConfig.role
            };
        } else {
            config.users![session].password = finalPassword;
        }

        writeAdminConfig(config);

        const response = NextResponse.json({ success: true, newUsername: finalUsername });
        if (finalUsername !== session) {
            response.cookies.set('admin_session', finalUsername, {
                httpOnly: true,
                secure: false,
                sameSite: 'lax',
                maxAge: 60 * 60 * 24,
                path: '/',
            });
            response.cookies.set('admin_user', finalUsername, {
                httpOnly: false,
                secure: false,
                sameSite: 'lax',
                maxAge: 60 * 60 * 24,
                path: '/',
            });
        }
        return response;
    } catch (error) {
        console.error("Change credentials error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
