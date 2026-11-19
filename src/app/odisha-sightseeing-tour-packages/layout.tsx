import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Odisha Sightseeing Tour Packages by Private Cab | CABJATRA",
  description:
    "Pre-book curated Odisha sightseeing tour packages with private commercial AC cabs. Explore Golden Triangle, Chilika Lake, Dhauli Peace Pagoda, Raghurajpur & Gopalpur with verified local drivers.",
};

export default function OdishaSightseeingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
