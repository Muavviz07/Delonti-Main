import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Solutions | Delonti",
  description: "RFID and AI-powered government infrastructure solutions providing real-time visibility across assets, facilities, workforce, and operations.",
};

export default function GovernmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
