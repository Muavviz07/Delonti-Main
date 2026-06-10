import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facility Intelligence Solutions | Delonti",
  description: "Smart building monitoring and facility optimization solutions utilizing integrated IoT sensors and data analytics to reduce cost and increase security.",
};

export default function FacilityIntelligenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
