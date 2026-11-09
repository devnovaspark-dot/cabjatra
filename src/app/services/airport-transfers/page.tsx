import React from "react";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata = {
  title: "BBI Airport Transfers — CABJATRA Bhubaneswar",
  description:
    "Punctual, stress-free pickups and drops to and from Biju Patnaik International Airport (BBI). Flight tracking, zero wait anxiety, and transparent fixed tariffs.",
};

export default function AirportTransfersPage() {
  return (
    <ServiceDetailPage
      title="Airport Transfers (BBI)"
      subtitle="Punctual, stress-free airport connections with flight tracking & terminal meet"
      tagline="Never miss a flight or wait anxiously at arrivals"
      badge="BBI Airport Special"
      heroImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop"
      overview="Biju Patnaik International Airport (BBI) handles hundreds of daily travelers visiting Odisha's capital, IT hubs, and sacred coastal cities. CABJATRA provides seamless pre-booked airport transfers with flight arrival monitoring, complimentary waiting buffers for baggage claim, and zero midnight surge multipliers."
      whyUsPoints={[
        {
          title: "Flight Delay Tracking",
          desc: "We track your flight number in real-time. If your incoming flight is delayed or rescheduled, your chauffeur's arrival time is automatically adjusted at no extra waiting penalty.",
        },
        {
          title: "Zero Surge at Odd Hours",
          desc: "Whether landing at 11:30 PM or departing at 04:00 AM, our pre-booked tariff remains completely transparent with zero last-minute surge multiplier gouging.",
        },
        {
          title: "Doorstep Luggage Assistance",
          desc: "Our polite chauffeurs meet you outside the arrival gate with your name placard and assist with loading and unloading heavy suitcases.",
        },
      ]}
      routeFares={[
        {
          route: "BBI Airport ⇄ Patia / Infocity / KIIT",
          distance: "16 km",
          approxDuration: "35 - 45 min",
          sedanEstimate: "₹599 - ₹699",
          suvEstimate: "₹950 - ₹1,150",
        },
        {
          route: "BBI Airport ⇄ Master Canteen / Station",
          distance: "5 km",
          approxDuration: "15 min",
          sedanEstimate: "₹399 - ₹499",
          suvEstimate: "₹699 - ₹799",
        },
        {
          route: "BBI Airport ⇄ Puri Golden Beach / Temple",
          distance: "62 km",
          approxDuration: "1 hr 20 min",
          sedanEstimate: "₹1,499 - ₹1,650",
          suvEstimate: "₹2,200 - ₹2,500",
        },
        {
          route: "BBI Airport ⇄ Cuttack Badambadi / CDA",
          distance: "32 km",
          approxDuration: "50 min",
          sedanEstimate: "₹950 - ₹1,100",
          suvEstimate: "₹1,500 - ₹1,750",
        },
      ]}
      inclusions={[
        "Chauffeur-driven AC car reserved exclusively for you",
        "Complimentary 45 minutes of post-landing buffer wait time",
        "Airport parking charge included in final booking quote",
        "WhatsApp driver coordination 30 minutes prior to pickup",
      ]}
      exclusions={[
        "Excessive halt time beyond 45 minutes at arrival terminal",
        "Multiple unscheduled detours unless added in trip notes",
        "GST (5%) calculated transparently at payment",
      ]}
      bookingCategoryKey="airport"
      serviceFaq={[
        {
          q: "What if my flight arrives earlier or later than scheduled?",
          a: "Please input your active Flight Number during booking. Our dispatch desk continuously tracks real-time radar arrivals at BBI and updates the chauffeur's dispatch time accordingly.",
        },
        {
          q: "Where does the driver meet me at BBI Airport?",
          a: "The driver coordinates via phone and WhatsApp, waiting right at the designated passenger pickup lane outside Terminal 1 (Domestic) or Terminal 2 with a name placard.",
        },
      ]}
    />
  );
}

