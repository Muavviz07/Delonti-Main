import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare & Medical Tracking Solutions | Delonti",
  description: "IoT and RFID tracking solutions for healthcare systems, providing real-time patient flow visibility, asset tracking, and facility intelligence.",
};

export default function HealthcareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
