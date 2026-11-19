import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Puri Tour Packages by Cab — Jagannath Temple, Beach & Marine Drive | CABJATRA",
  description:
    "Book private cab tour packages in Puri with CABJATRA. Sacred Sri Jagannath Temple darshan, Blue Flag Golden Beach, Swargadwar, Marine Drive & Raghurajpur heritage village.",
};

export default function PuriTourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
