import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public Safety Infrastructure Solutions | Delonti",
  description: "Real-time public safety tracking, IoT emergency alert systems, and zero-trust cybersecurity networks designed to safeguard first responders and citizens.",
};

export default function PublicSafetyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
