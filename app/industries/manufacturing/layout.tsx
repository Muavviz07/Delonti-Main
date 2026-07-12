import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing & Industrial IoT Solutions | Delonti",
  description: "Industrial IoT, automated RFID inventory tracking, and workforce safety systems that maximize operational efficiency across manufacturing facilities.",
};

export default function ManufacturingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
