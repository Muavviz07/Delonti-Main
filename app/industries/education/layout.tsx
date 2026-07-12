import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education Infrastructure Solutions | Delonti",
  description: "RFID, IoT, and smart campus solutions designed to optimize educational operations, improve student safety, and track university assets in real time.",
};

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
