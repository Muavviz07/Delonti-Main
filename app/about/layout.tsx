import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Delonti",
  description: "Discover how Delonti transforms physical infrastructure into real-time operational intelligence with RFID, IoT, and zero-trust cybersecurity solutions.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
