import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bhubaneswar Tour Packages — Temple City Sightseeing by Cab | CABJATRA",
  description:
    "Explore the Temple City with dedicated private cab tour packages in Bhubaneswar. Visit Lingaraj, Mukteswar, Rajarani, Dhauli Shanti Stupa, Khandagiri Caves & Nandankanan.",
};

export default function BhubaneswarTourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
