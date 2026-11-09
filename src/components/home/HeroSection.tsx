"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Car,
  Compass,
  ArrowRight,
  Sparkles,
  Star,
  MapPin,
  Plane,
} from "lucide-react";
import { QuickBookingWidget } from "./QuickBookingWidget";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative text-white overflow-hidden pt-28 sm:pt-36 pb-16 lg:pt-40 lg:pb-24 border-b border-black/20">
      {/* Authentic Odisha Cultural Heritage Background (Iconic Konark Sun Temple Chariot & Kalinga Architecture) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?q=85&w=2400&auto=format&fit=crop"
          alt="Majestic Konark Sun Temple - UNESCO World Heritage Site in Odisha"
          fill
          priority
          className="object-cover object-center scale-102"
        />
        {/* Balanced cinematic gradient overlay: preserves temple grandeur while ensuring text & card legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean, Spacious & Uncluttered Header */}
        <div className="max-w-4xl mx-auto text-center space-y-5 mb-10 sm:mb-12">
          {/* Tradition & Mobility Collaborative Kicker */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#D9A52B] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
            <span>Sacred Temples • Coastal Corridors • Chauffeur Distinction</span>
          </div>

          {/* Majestic Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white leading-[1.08]">
            Discover Timeless Odisha, <br />
            <span className="italic font-display font-normal text-[#D9A52B]">
              Traveled in Private Comfort.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
            From punctual BBI airport pickups and sacred pilgrimages to Puri &amp; Konark, to scenic drives along Marine Drive—experience dedicated commercial chauffeurs with guaranteed on-time dispatch.
          </p>

          {/* Clean Assurance Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-white/90">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 shadow-sm">
              <Star className="w-3.5 h-3.5 text-[#D9A52B] fill-[#D9A52B]" />
              <span>4.9 / 5.0 (14,200+ Journeys)</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>10% Advance Deposit Model</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>100% Yellow-Board Commercial Fleet</span>
            </span>
          </div>
        </div>

        {/* Clean, Streamlined Concierge Booking Terminal */}
        <div className="max-w-5xl mx-auto">
          <QuickBookingWidget />
        </div>
      </div>
    </section>
  );
};
