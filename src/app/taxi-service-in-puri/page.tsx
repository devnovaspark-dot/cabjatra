import React from "react";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata = {
  title: "Taxi Service in Puri — Station Pickups, Local Taxi & Tours | CABJATRA",
  description:
    "Book verified commercial taxi service in Puri. Fixed-fare pickups at Puri Railway Station, hotel drops, local sightseeing, and outstation trips with zero surge pricing.",
};

export default function TaxiServiceInPuriPage() {
  return (
    <ServiceDetailPage
      title="Taxi Service in Puri"
      subtitle="Guaranteed on-time taxi pickups at Puri Railway Station, hotel transfers, and coastal day tours"
      tagline="Skip the station auto haggling — pre-book verified yellow-board commercial taxis with fixed rates"
      badge="Puri Railway Station & Local Taxi"
      heroImage="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=85&w=1600&auto=format&fit=crop"
      overview="Arriving by train at Puri Railway Station or looking for reliable daily taxi hire in Puri? CABJATRA provides seamless online taxi booking with upfront, fixed pricing. Skip chaotic station exits, aggressive touts, and arbitrary auto haggling. Your certified driver meets you promptly at the station gate, helps with luggage, and drives you straight to your beachside resort in cool AC comfort."
      whyUsPoints={[
        {
          title: "Zero Station Haggling or Delays",
          desc: "Your taxi is locked and confirmed before your train pulls into Puri station. Your driver awaits you at the main terminal exit with a dedicated WhatsApp confirmation.",
        },
        {
          title: "100% Yellow-Board Commercial Fleet",
          desc: "We strictly deploy registered commercial vehicles with comprehensive passenger insurance, commercial fitness certificates, and police-verified drivers.",
        },
        {
          title: "Transparent Fixed Tariffs",
          desc: "Never worry about inflated tourist pricing during Rath Yatra, holidays, or festival seasons. What you see is what you pay, backed by our 10% advance deposit model.",
        },
      ]}
      routeFares={[
        {
          route: "Puri Railway Station ⇄ Sea Beach / Marine Drive Hotels",
          distance: "5–8 km approx",
          approxDuration: "15–20 Mins",
          sedanEstimate: "₹400 - ₹500",
          suvEstimate: "₹700 - ₹850",
        },
        {
          route: "Puri Full-Day Local Taxi (8 Hrs / 80 Km)",
          distance: "Temple, Beach, Craft Villages",
          approxDuration: "8 Hours Sightseeing",
          sedanEstimate: "₹1,850 - ₹2,200",
          suvEstimate: "₹2,800 - ₹3,300",
        },
        {
          route: "Puri ⇄ Konark Sun Temple (Half-Day Sightseeing)",
          distance: "70 km RT",
          approxDuration: "4–5 Hours Circuit",
          sedanEstimate: "₹1,450 - ₹1,750",
          suvEstimate: "₹2,200 - ₹2,600",
        },
        {
          route: "Puri ⇄ Bhubaneswar BBI Airport (Direct Outstation Drop)",
          distance: "62 km approx",
          approxDuration: "1 hr 20 min Direct",
          sedanEstimate: "₹1,650 - ₹1,950",
          suvEstimate: "₹2,600 - ₹3,050",
        },
      ]}
      inclusions={[
        "Guaranteed on-time railway station pickup and luggage assistance",
        "Clean, sanitized, air-conditioned vehicle (Sedan, SUV, or Tempo Traveller)",
        "Fuel charges and driver allowance (batta)",
        "Standby waiting period at temple points or beaches",
      ]}
      exclusions={[
        "Railway station parking fees (billed actuals if applicable)",
        "State heritage monument entrance fees",
        "Additional kilometres beyond selected package limits",
      ]}
      bookingCategoryKey="puri-taxi"
      serviceFaq={[
        {
          q: "What if my train to Puri arrives late?",
          a: "We track your train number live. If your train is delayed, your driver adjusts their station arrival time automatically without any extra waiting charge.",
        },
        {
          q: "Can I book a 7-seater Innova Crysta taxi in Puri for a large family?",
          a: "Yes! We maintain verified Toyota Innova Crysta and Maruti Ertiga SUVs in Puri, perfect for families traveling with multiple bags and elderly members.",
        },
        {
          q: "Do you provide one-way drop taxis from Puri to Bhubaneswar?",
          a: "Yes, we operate daily direct one-way outstation taxi runs between Puri and all Bhubaneswar locations including BBI Airport, Master Canteen, Patia, and AIIMS.",
        },
      ]}
    />
  );
}
