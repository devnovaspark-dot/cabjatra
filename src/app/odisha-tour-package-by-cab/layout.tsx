import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Odisha Tour Package by Cab – Explore Odisha Your Way | Cabjatra",
  description:
    "Explore the beauty, culture, temples, beaches and heritage of Odisha with an Odisha Tour Package offered by Cab from Cabjatra. Private cab, experienced driver and flexible sightseeing options.",
  keywords: [
    "Odisha Tour Package by Cab",
    "Odisha cab tour",
    "Bhubaneswar Puri Konark tour package",
    "Odisha sightseeing by cab",
    "Puri Konark sightseeing tour",
    "Chilika Lake tour cab",
    "Cabjatra Odisha tour",
  ],
  openGraph: {
    title: "Odisha Tour Package by Cab – Explore Odisha Your Way | Cabjatra",
    description:
      "Explore the beauty, culture, temples, beaches and heritage of Odisha with an Odisha Tour Package offered by Cab from Cabjatra. Private cab, experienced driver and flexible sightseeing options.",
    type: "website",
    locale: "en_IN",
  },
};

export default function OdishaTourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
