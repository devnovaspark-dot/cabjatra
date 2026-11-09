import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { PopularJourneysSection } from "@/components/home/PopularJourneysSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { VehicleFleetSection } from "@/components/home/VehicleFleetSection";
import { OdishaDestinationsSection } from "@/components/home/OdishaDestinationsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { TrustSafetySection } from "@/components/home/TrustSafetySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#FAF9F5]">
      {/* SECTION 1 — HERO & TACTILE CONCIERGE BOOKING PASS */}
      <HeroSection />

      {/* SECTION 2 — POPULAR HIGHWAY CORRIDORS (ASYMMETRIC BENTO SHOWCASE) */}
      <PopularJourneysSection />

      {/* SECTION 3 — CORE DEDICATED MOBILITY VERTICALS */}
      <ServicesSection />

      {/* SECTION 4 — CHOOSE YOUR VEHICLE (AUTOMOTIVE FLEET SHOWROOM) */}
      <VehicleFleetSection />

      {/* SECTION 5 — EXPLORE TIMELESS ODISHA (MAGAZINE TRAVELOGUE) */}
      <OdishaDestinationsSection />

      {/* SECTION 6 — HOW CABJATRA WORKS & THE 10% ADVANCE GUARANTEE MATRIX */}
      <HowItWorksSection />

      {/* SECTION 7 — TRUST, SAFETY & LEGAL COMPLIANCE PROTOCOLS */}
      <TrustSafetySection />

      {/* SECTION 8 — REAL TRAVELER DISPATCHES & PILGRIMAGE REVIEWS */}
      <TestimonialsSection />

      {/* SECTION 9 — COMMON BOOKING INQUIRIES & OPERATIONS DESK */}
      <FaqSection />

      {/* SECTION 10 — GRAND LUXURY CLOSING CTA */}
      <FinalCtaSection />
    </div>
  );
}
