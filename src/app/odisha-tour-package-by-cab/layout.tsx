import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Odisha Tour Package by Cab | Cabjatra",
  },
  description:
    "Explore Odisha with Cabjatra’s flexible cab tour packages. Discover temples, beaches, heritage sites, and scenic destinations with comfortable travel and local expertise.",
  keywords: [
    "Odisha Tour Package by Cab",
  ],
  openGraph: {
    title: "Odisha Tour Package by Cab | Cabjatra",
    description:
      "Explore Odisha with Cabjatra’s flexible cab tour packages. Discover temples, beaches, heritage sites, and scenic destinations with comfortable travel and local expertise.",
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
