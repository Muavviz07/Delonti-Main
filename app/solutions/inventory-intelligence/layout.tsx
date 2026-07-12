import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventory Intelligence Solutions | Delonti",
  description: "AI-driven inventory monitoring, automated stock tracking, and predictive supply chain analytics utilizing modern RFID and sensor networks.",
};

export default function InventoryIntelligenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
