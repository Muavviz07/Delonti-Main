import { NextRequest, NextResponse } from "next/server";
import { readAdminConfig, writeAdminConfig } from "@/lib/jobs";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
    try {
        const session = request.cookies.get("admin_session")?.value;
        if (session !== "delq-admin") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const config = readAdminConfig();
        return NextResponse.json({ users: config.users || {} });
    } catch (error) {
        console.error("Fetch credentials error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const session = request.cookies.get("admin_session")?.value;
        if (session !== "delq-admin") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const body = await request.json();
        const { username, password } = body;

        if (!username || !password) {
            return NextResponse.json({ error: "Username and password are required" }, { status: 400 });
        }

        const config = readAdminConfig();
        if (!config.users) {
            config.users = {};
        }

        config.users[username] = password;
        writeAdminConfig(config);

        return NextResponse.json({ success: true, users: config.users });
    } catch (error) {
        console.error("Update credentials error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
