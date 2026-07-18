import { NextRequest, NextResponse } from "next/server";
import { readAdminConfig } from "@/lib/jobs";
import { query } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
    try {
        const session = request.cookies.get("admin_session")?.value;
        const config = await readAdminConfig();
        const users = config.users || {};
        const userConfig = users[session || ""];

        if (!userConfig || userConfig.role !== "super-admin") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        return NextResponse.json({ users: config.users || {} });
    } catch (error) {
        console.error("Fetch credentials error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const session = request.cookies.get("admin_session")?.value;
        const config = await readAdminConfig();
        const users = config.users || {};
        const userConfig = users[session || ""];

        if (!userConfig || userConfig.role !== "super-admin") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const body = await request.json();
        const { oldUsername, newUsername, password } = body;

        if (!oldUsername || !newUsername || !password) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const targetUser = users[oldUsername];
        if (!targetUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const finalNewUsername = newUsername.trim();
        const finalPassword = password.trim();

        if (finalNewUsername !== oldUsername && users[finalNewUsername]) {
            return NextResponse.json({ error: "Username already taken" }, { status: 400 });
        }

        const now = new Date().toISOString();
        await query(
            `UPDATE admin_users SET username = $1, password = $2, updated_at = $3 WHERE username = $4`,
            [finalNewUsername, finalPassword, now, oldUsername]
        );

        const updatedConfig = await readAdminConfig();
        const response = NextResponse.json({ success: true, users: updatedConfig.users });
        if (oldUsername === session && finalNewUsername !== oldUsername) {
            response.cookies.set('admin_session', finalNewUsername, {
                httpOnly: true,
                secure: false,
                sameSite: 'lax',
                maxAge: 60 * 60 * 24,
                path: '/',
            });
            response.cookies.set('admin_user', finalNewUsername, {
                httpOnly: false,
                secure: false,
                sameSite: 'lax',
                maxAge: 60 * 60 * 24,
                path: '/',
            });
        }
        return response;
    } catch (error) {
        console.error("Update credentials error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
