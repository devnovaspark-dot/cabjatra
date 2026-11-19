import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Odisha Tour Package by Cab – Explore Odisha Your Way | CABJATRA",
  description:
    "Explore the beauty, culture, temples, beaches and heritage of Odisha with private cab tour packages from Cabjatra. Flexible itineraries covering Bhubaneswar, Puri, Konark, Chilika & Satapada.",
};

export default function OdishaTourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
