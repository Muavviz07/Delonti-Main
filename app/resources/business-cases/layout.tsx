import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Business Cases | Delonti",
};

export default function BusinessCasesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
