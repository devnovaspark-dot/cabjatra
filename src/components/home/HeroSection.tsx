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
  Clock,
  Navigation,
} from "lucide-react";
import { Hero3DEnvironment, TimeOfDay, OdishaLocationId } from "./Hero3DEnvironment";

interface MilestoneRoute {
  id: OdishaLocationId;
  nhCode: string;
  name: string;
  sub: string;
  km: string;
  time: string;
  circuitTag: string;
  tourSlug: string;
}

const ODISHA_MILESTONES: MilestoneRoute[] = [
  {
    id: "marine-drive",
    nhCode: "OD-SH",
    name: "Marine Drive",
    sub: "Puri – Konark Ocean Highway",
    km: "35 KM",
    time: "45 mins",
    circuitTag: "Scenic Ocean Highway",
    tourSlug: "konark-marine-drive-excursion",
  },
  {
    id: "puri-dham",
    nhCode: "NH 316",
    name: "Puri Dham",
    sub: "Sacred Jagannath Temple & Bada Danda",
    km: "60 KM",
    time: "1.2 hrs",
    circuitTag: "Char Dham Pilgrimage",
    tourSlug: "puri-jagannath-pilgrimage-trail",
  },
  {
    id: "konark",
    nhCode: "NH 316A",
    name: "Konark Sun Temple",
    sub: "13th-Cent. UNESCO Chariot Wheels",
    km: "65 KM",
    time: "1.4 hrs",
    circuitTag: "Architectural Wonder",
    tourSlug: "konark-marine-drive-excursion",
  },
  {
    id: "chilika",
    nhCode: "NH 16",
    name: "Chilika Lagoon",
    sub: "Satapada Dolphins & Coastal Islands",
    km: "105 KM",
    time: "2.2 hrs",
    circuitTag: "Asia's Largest Lagoon",
    tourSlug: "chilika-dolphin-lagoon-safari",
  },
  {
    id: "airport",
    nhCode: "BBI-AIR",
    name: "BBI Airport",
    sub: "Bhubaneswar Capital Transit Hub",
    km: "00 KM",
    time: "15 mins",
    circuitTag: "Airport Pickup & Dispatch",
    tourSlug: "book-cab",
  },
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatically synchronize lighting with real-time daily astronomical cycle
  useEffect(() => {
    setTimeOfDay(getRealtimeTimeOfDay());
    const interval = setInterval(() => {
      setTimeOfDay(getRealtimeTimeOfDay());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // Smoothly auto-cruise through Odisha milestones every 8 seconds if user is not hovering
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ODISHA_MILESTONES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const activeMilestone = ODISHA_MILESTONES[activeIndex];

  return (
    <section className="relative text-white overflow-hidden min-h-[94vh] sm:min-h-[98vh] flex flex-col justify-between pt-24 sm:pt-28 pb-4 sm:pb-6 border-b border-[#D9A52B]/30 select-none bg-[#051F21]">
      
      {/* =========================================================================
          LAYER 1: PHOTOREALISTIC 3D HIGHWAY & ODISHA COASTAL ENVIRONMENT
          Three.js WebGL scene with 3/4 front beauty tracking angle, executive sedan,
          dynamic location landmarks, rooted trees, and real-time celestial lighting.
          ========================================================================= */}
      <Hero3DEnvironment timeOfDay={timeOfDay} activeLocationId={activeMilestone.id} />

      {/* Atmospheric Vignette & Contrast Overlays for Crisp Typography */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-black/60 via-black/20 via-60% to-black/80" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_transparent_30%,_rgba(0,0,0,0.6)_100%)]" />

      {/* =========================================================================
          LAYER 2: HERO BRANDING, HIGH-CONVERTING HEADLINE & CTAS
          Framed cleanly on the upper/left side with spacious breathing room.
          ========================================================================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full text-center sm:text-left pt-2 sm:pt-4 my-auto">
        <div className="max-w-2xl space-y-3.5 sm:space-y-4 mx-auto sm:mx-0">
          
          {/* Status Trust Pill with Live Beacon */}
          <div className="flex items-center justify-center sm:justify-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#D9A52B]/50 text-[11px] sm:text-xs font-semibold text-[#D9A52B] shadow-2xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
              </span>
              <span>Verified Odisha Highway Network • Direct Dispatch Across 30 Districts</span>
            </div>
          </div>

          {/* High-Converting Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            Book Reliable Cabs <br />
            <span className="italic font-display font-normal text-[#D9A52B]">
              Across Odisha.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-base text-white/95 font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] max-w-xl">
            Punctual BBI airport pickups, outstation highway transfers &amp; sacred temple circuits. 100% yellow-board commercial fleet, zero surge pricing &amp; guaranteed on-time dispatch.
          </p>

          {/* High-Converting Action CTAs */}
          <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4">
            <Link
              href="/book-cab"
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-[#D9A52B] via-[#E5B543] to-[#C99320] text-[#062F31] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(217,165,43,0.45),inset_0_1px_0_rgba(255,255,255,0.6)] hover:brightness-105 active:scale-[0.98] transition-all group cursor-pointer border border-[#F2C868]/60"
            >
              <Car className="w-4 h-4 text-[#062F31]" />
              <span>Book Your Cab Now</span>
              <ArrowRight className="w-4 h-4 text-[#062F31] group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/book-tour"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/30 hover:border-[#D9A52B]/70 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg active:scale-[0.98] cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#D9A52B]" />
              <span>Explore Curated Tours</span>
            </Link>
          </div>

        </div>
      </div>

      {/* =========================================================================
          LAYER 3: INTERACTIVE MILESTONE ROUTE DECK (PLACES & MAIN LOCATIONS)
          Sleek, high-converting milestone chips letting users explore Odisha's
          top destinations with smooth 3D environment transitions on click!
          ========================================================================= */}
      <div
        className="relative z-10 max-w-6xl mx-auto px-3 sm:px-6 w-full pt-4 sm:pt-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex items-center justify-between pb-2 px-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
            <Navigation className="w-3.5 h-3.5 text-[#D9A52B] animate-pulse" />
            <span className="tracking-wide">ODISHA HIGHWAY MILESTONES • SELECT DESTINATION</span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-white/70">
            <span>Cruising in 3D:</span>
            <span className="text-[#FACC15] font-bold">{activeMilestone.name}</span>
          </span>
        </div>

        {/* Milestone Cards Deck */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5">
          {ODISHA_MILESTONES.map((m, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={m.id}
                onClick={() => setActiveIndex(idx)}
                className={`relative text-left p-2.5 sm:p-3 rounded-xl transition-all duration-300 cursor-pointer overflow-hidden border ${
                  isActive
                    ? "bg-gradient-to-b from-[#094747]/90 to-[#042A2C]/95 border-[#D9A52B] shadow-[0_0_20px_rgba(217,165,43,0.35)] scale-[1.02]"
                    : "bg-black/55 hover:bg-black/75 border-white/15 hover:border-white/40"
                } backdrop-blur-md flex flex-col justify-between`}
              >
                {/* Active Indicator Top Bar */}
                {isActive && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#D9A52B] via-[#FACC15] to-[#D9A52B]" />
                )}

                {/* Milestone Header with Authentic Indian Highway Stone Badge */}
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <div className="inline-flex items-center rounded-sm overflow-hidden border border-black/30 shadow-sm text-[9px] font-black">
                    <span className="bg-[#FACC15] text-[#052F31] px-1.5 py-0.5">
                      {m.nhCode}
                    </span>
                  </div>
                  <span
                    className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-[#10B981]/25 text-[#34D399]" : "bg-white/10 text-white/70"
                    }`}
                  >
                    {m.km}
                  </span>
                </div>

                {/* Destination Name */}
                <div>
                  <div
                    className={`text-xs sm:text-sm font-bold truncate ${
                      isActive ? "text-[#FACC15]" : "text-white"
                    }`}
                  >
                    {m.name}
                  </div>
                  <div className="text-[10px] text-white/70 truncate leading-tight mt-0.5">
                    {m.circuitTag}
                  </div>
                </div>

                {/* Drive Time & Direct Booking Pill */}
                <div className="pt-2 mt-1 border-t border-white/10 flex items-center justify-between text-[10px] text-white/75">
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-2.5 h-2.5 text-[#D9A52B]" />
                    <span>{m.time}</span>
                  </span>
                  {isActive && (
                    <span className="text-[#38BDF8] font-semibold text-[9.5px] flex items-center gap-0.5">
                      <span>Live 3D</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8] animate-ping" />
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          LAYER 4: BOTTOM FOUNDATIONAL SERVICE GUARANTEES
          ========================================================================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full pt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-white/90">
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
