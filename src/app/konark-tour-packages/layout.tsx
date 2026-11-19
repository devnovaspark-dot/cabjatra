import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Konark Tour Packages by Cab — Sun Temple & Marine Drive | CABJATRA",
  description:
    "Pre-book private cab tour packages to Konark Sun Temple with CABJATRA. Explore UNESCO Sun Temple, Chandrabhaga Beach, Ramachandi Beach & scenic Puri-Konark Marine Drive.",
};

export default function KonarkTourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
