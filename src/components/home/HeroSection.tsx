"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Compass,
  Sparkles,
  Car,
  MapPin,
} from "lucide-react";
import { Hero3DEnvironment, TimeOfDay } from "./Hero3DEnvironment";

interface MilestoneDestination {
  nh: string;
  name: string;
  km: string;
  circuit: string;
}

const PASSING_MILESTONES: MilestoneDestination[] = [
  { nh: "NH 316", name: "Puri Jagannath Dham", km: "60 KM", circuit: "Sacred Coastal Corridor" },
  { nh: "NH 316A", name: "Konark Sun Temple", km: "65 KM", circuit: "UNESCO Heritage Highway" },
  { nh: "OD-SH", name: "Puri - Konark Marine Drive", km: "35 KM", circuit: "Scenic Ocean Highway" },
  { nh: "NH 16", name: "Chilika Dolphin Lagoon", km: "105 KM", circuit: "Asia's Largest Lagoon" },
  { nh: "BBI-AIR", name: "Bhubaneswar Airport (BBI)", km: "00 KM", circuit: "Capital Express Hub" },
];

// Pure automatic real-time daily astronomical cycle calculation
const getRealtimeTimeOfDay = (): TimeOfDay => {
  if (typeof window === "undefined") return "day";
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const time = hour + minute / 60;

  // Real-time daily cycle based on local clock:
  // 05:00 - 06:45: Sunrise (Dawn)
  // 06:45 - 16:45: Daytime (Tropical Coastal Sun)
  // 16:45 - 18:30: Sunset (Golden Hour & Dusk)
  // 18:30 - 05:00: Night (Starlit Deep Indigo & Glowing Moon)
  if (time >= 5.0 && time < 6.75) return "sunrise";
  if (time >= 6.75 && time < 16.75) return "day";
  if (time >= 16.75 && time < 18.5) return "sunset";
  return "night";
};

export const HeroSection: React.FC = () => {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("day");
  const [milestoneIndex, setMilestoneIndex] = useState(0);

  // Automatically synchronize lighting with real-time daily astronomical cycle
  useEffect(() => {
    setTimeOfDay(getRealtimeTimeOfDay());
    const interval = setInterval(() => {
      setTimeOfDay(getRealtimeTimeOfDay());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // Smoothly cycle through passing milestone signposts every 9 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setMilestoneIndex((prev) => (prev + 1) % PASSING_MILESTONES.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const currentMilestone = PASSING_MILESTONES[milestoneIndex];

  return (
    <section className="relative text-white overflow-hidden min-h-[92vh] sm:min-h-[96vh] flex flex-col justify-between pt-26 sm:pt-32 pb-6 border-b border-[#D9A52B]/30 select-none bg-[#051F21]">
      
      {/* =========================================================================
          LAYER 1: PHOTOREALISTIC 3D HIGHWAY & ODISHA COASTAL ENVIRONMENT
          Full-viewport Three.js WebGL scene with 3/4 perspective chase camera,
          executive commercial sedan, rooted trees with wind-fluttering leaves,
          Bay of Bengal waves, passing milestones, and real-time celestial lighting.
          ========================================================================= */}
      <Hero3DEnvironment timeOfDay={timeOfDay} />

      {/* Atmospheric Vignette & Text Contrast Gradient Overlays (Zero Layout Shift) */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-black/55 via-black/25 to-black/75" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(0,0,0,0.65)_100%)]" />

      {/* =========================================================================
          LAYER 2: ULTRA-CLEAN HERO BRANDING, HIGH-CONVERTING HEADLINE & CTAS
          (SPACIOUS, ELEGANT, ZERO CLUTTER, NO CARDS, NO SPEED GIMMICKS)
          ========================================================================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-center space-y-4 sm:space-y-5 my-auto">
        
        {/* Status Trust Pill with Live Beacon */}
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#D9A52B]/50 text-xs font-semibold text-[#D9A52B] shadow-2xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
            </span>
            <span>Verified Odisha Highway Network • Direct Dispatch Across 30 Districts</span>
          </div>
        </div>

        {/* Short, Direct, High-Converting Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold font-display tracking-tight text-white leading-tight sm:leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          Book Reliable Cabs <br />
          <span className="italic font-display font-normal text-[#D9A52B]">
            Across Odisha.
          </span>
        </h1>

        {/* Clear Concise Subtitle */}
        <p className="text-xs sm:text-base lg:text-lg text-white/95 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Punctual BBI airport pickups, outstation highway transfers &amp; sacred temple circuits. 100% yellow-board commercial fleet, zero surge pricing &amp; guaranteed on-time dispatch.
        </p>

        {/* High-Converting Action CTAs */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          <Link
            href="/book-cab"
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D9A52B] via-[#E5B543] to-[#C99320] text-[#062F31] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_4px_24px_rgba(217,165,43,0.5),inset_0_1px_0_rgba(255,255,255,0.6)] hover:brightness-105 active:scale-[0.98] transition-all group cursor-pointer border border-[#F2C868]/60"
          >
            <Car className="w-4 h-4 text-[#062F31]" />
            <span>Book Your Cab Now</span>
            <ArrowRight className="w-4 h-4 text-[#062F31] group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/book-tour"
            className="w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/30 hover:border-[#D9A52B]/70 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg active:scale-[0.98] cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#D9A52B]" />
            <span>Explore Curated Tours</span>
          </Link>
        </div>

        {/* Subtle Highway Cruising Status Indicator (Elegant, Non-Cluttered) */}
        <div className="pt-2 flex items-center justify-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs text-white/90 shadow-xl transition-all duration-700">
            <span className="flex items-center gap-1.5 text-[#FACC15] font-semibold">
              <MapPin className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>{currentMilestone.nh}</span>
            </span>
            <span className="text-white/40">•</span>
            <span className="font-medium text-white">{currentMilestone.name}</span>
            <span className="text-white/40">•</span>
            <span className="text-[#34D399] font-mono font-bold">{currentMilestone.km}</span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="hidden sm:inline text-white/70">{currentMilestone.circuit}</span>
          </div>
        </div>

      </div>

      {/* =========================================================================
          LAYER 3: BOTTOM FOUNDATIONAL SERVICE GUARANTEES
          ========================================================================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-white/90">
        <span className="inline-flex items-center gap-1.5 font-medium drop-shadow-md">
          <ShieldCheck className="w-4 h-4 text-[#D9A52B]" />
          <span>100% Yellow-Board Commercial Fleet</span>
        </span>
        <span className="hidden sm:inline text-white/30">&bull;</span>
        <span className="inline-flex items-center gap-1.5 font-medium drop-shadow-md">
          <CheckCircle2 className="w-4 h-4 text-[#D9A52B]" />
          <span>10% Advance Deposit Model</span>
        </span>
        <span className="hidden sm:inline text-white/30">&bull;</span>
        <span className="inline-flex items-center gap-1.5 font-medium drop-shadow-md">
          <Sparkles className="w-4 h-4 text-[#D9A52B]" />
          <span>Zero Surge Pricing Guarantee</span>
        </span>
      </div>

    </section>
  );
};
