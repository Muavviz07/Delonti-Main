import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asset Tracking Solutions | Delonti",
  description: "Advanced GPS and RFID-powered asset tracking systems for real-time visibility, equipment monitoring, and loss prevention across your enterprise.",
};

export default function AssetTrackingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
