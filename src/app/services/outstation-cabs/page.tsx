import React from "react";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata = {
  title: "Outstation Cabs Odisha — CABJATRA Intercity Cab Service",
  description:
    "Reliable one-way and round-trip outstation cabs from Bhubaneswar, Puri, and Cuttack. Experienced highway drivers, clean AC cars, and transparent per-km billing.",
};

export default function OutstationCabsPage() {
  return (
    <ServiceDetailPage
      title="Outstation Cabs"
      subtitle="Comfortable intercity travel across Odisha with experienced highway drivers"
      tagline="Travel across Odisha's cultural corridors in absolute peace"
      badge="Intercity & One-Way"
      heroImage="https://images.unsplash.com/photo-1775050416787-fe3179f0679e?q=85&w=1600&auto=format&fit=crop"
      overview="Whether visiting holy shrines in Puri, exploring the architectural marvel at Konark, or cruising along Chilika Lake, our outstation cabs provide unmatched reliability. Travel at your own pace with clean air-conditioned vehicles and drivers who know every highway bypass and authentic dhaba stop."
      whyUsPoints={[
        {
          title: "Seasoned Highway Drivers",
          desc: "Our outstation drivers have over 5+ years of highway experience across NH-16, NH-316, and coastal state expressways with clean safety records.",
        },
        {
          title: "Clear Kilometre & Toll Transparency",
          desc: "No hidden charges. Clear base per-km tariffs, upfront driver batta disclosure, and exact toll calculation so you are never surprised at journey's end.",
        },
        {
          title: "Flexible Sightseeing Halts",
          desc: "Take leisurely breaks for fresh tender coconut water, roadside tea, temple blessings, or photo stops along the scenic Marine Drive without rushed meters.",
        },
      ]}
      routeFares={[
        {
          route: "Bhubaneswar ⇄ Puri (Round Trip)",
          distance: "130 km approx",
          approxDuration: "Full Day / 8-10 Hrs",
          sedanEstimate: "₹1,850 - ₹2,100",
          suvEstimate: "₹2,750 - ₹3,100",
        },
        {
          route: "Bhubaneswar ⇄ Konark & Marine Drive",
          distance: "145 km approx",
          approxDuration: "Full Day / 8-10 Hrs",
          sedanEstimate: "₹1,950 - ₹2,250",
          suvEstimate: "₹2,850 - ₹3,300",
        },
        {
          route: "Bhubaneswar ⇄ Chilika Lake (Satapada)",
          distance: "210 km approx",
          approxDuration: "Full Day / 9-11 Hrs",
          sedanEstimate: "₹2,650 - ₹2,950",
          suvEstimate: "₹3,850 - ₹4,300",
        },
        {
          route: "Bhubaneswar ⇄ Sambalpur (One-Way)",
          distance: "280 km approx",
          approxDuration: "5 hr 30 min",
          sedanEstimate: "₹4,200 - ₹4,600",
          suvEstimate: "₹6,100 - ₹6,800",
        },
      ]}
      inclusions={[
        "Driver allowance (batta) included in standard outstation packages",
        "Air-conditioned private sedan or SUV with ample boot capacity",
        "Toll tax guidance and route planning support",
        "Doorstep pickup and drop at your chosen hotel or residence",
      ]}
      exclusions={[
        "National highway toll booth receipts and parking entry passes (billed actuals)",
        "State monument entry tickets and boating charges",
        "Night driving allowance if journey extends beyond 10:00 PM",
      ]}
      bookingCategoryKey="outstation"
      serviceFaq={[
        {
          q: "Are tolls and parking included in the outstation fare?",
          a: "In standard outstation bookings, highway toll receipts and destination parking fees are either paid directly at booths or added as transparent line-items on your final trip invoice.",
        },
        {
          q: "Can I book a one-way drop to Puri or Cuttack?",
          a: "Yes! We support dedicated one-way outstation transfers between all approved Odisha hubs with economical one-way tariffs.",
        },
      ]}
    />
  );
}

