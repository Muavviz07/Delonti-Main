import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Kiosk & State Solutions | Delonti",
  description: "RFID and AI-powered smart kiosk systems and municipal IoT infrastructure to connect communities and improve state resource visibility.",
};

export default function StateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
