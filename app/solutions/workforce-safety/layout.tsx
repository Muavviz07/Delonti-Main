import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workforce Safety Solutions | Delonti",
  description: "Connected workforce monitoring systems, real-time safety alerts, and environmental sensors designed to protect personnel in hazardous conditions.",
};

export default function WorkforceSafetyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
