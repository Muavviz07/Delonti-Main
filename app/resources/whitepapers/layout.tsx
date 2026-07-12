import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Whitepapers | Delonti",
};

export default function WhitepapersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
