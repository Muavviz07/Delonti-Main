import { NextRequest, NextResponse } from "next/server";
import { readAdminConfig, writeAdminConfig } from "@/lib/jobs";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
    try {
        const session = request.cookies.get("admin_session")?.value;
        if (!session || (session !== "delq-admin" && session !== "delonti-admin")) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();
        const { currentPassword, newPassword } = body;

        if (!currentPassword || !newPassword) {
            return NextResponse.json({ error: "Current password and new password are required" }, { status: 400 });
        }

        const config = readAdminConfig();
        const users = config.users || {};
        const activePassword = users[session];

        if (currentPassword !== activePassword) {
            return NextResponse.json({ error: "Incorrect current password" }, { status: 400 });
        }

        if (!config.users) {
            config.users = {};
        }
        config.users[session] = newPassword;
        writeAdminConfig(config);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Change password error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
