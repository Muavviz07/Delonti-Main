import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Delonti Enterprise",
  description: "Learn how Delonti transforms physical infrastructure into operational intelligence through our RFID + AI-powered platform.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
