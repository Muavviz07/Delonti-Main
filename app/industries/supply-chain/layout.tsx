import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supply Chain & Logistics Solutions | Delonti",
  description: "RFID and GPS-integrated supply chain tracking solutions providing sub-second inventory visibility, route optimization, and logistics management.",
};

export default function SupplyChainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
