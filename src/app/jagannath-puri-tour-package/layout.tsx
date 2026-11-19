import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jagannath Puri Tour Package by Cab — Sacred Darshan & Pilgrim Cab | CABJATRA",
  description:
    "Pre-book dedicated Jagannath Puri tour packages with verified AC cabs. Sacred Mahaprabhu Jagannath darshan, Anand Bazaar Mahaprasad guidance, 5 Sacred Tanks, Gundicha Temple & senior citizen-friendly pilgrimage travel.",
};

export default function JagannathPuriTourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
