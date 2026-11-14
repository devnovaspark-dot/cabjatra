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
} from "lucide-react";

export type TimeOfDay = "morning" | "afternoon" | "evening" | "night";

interface MilestoneDestination {
  nh: string;
  name: string;
  km: string;
}

const PASSING_MILESTONES: MilestoneDestination[] = [
  { nh: "NH 316", name: "Puri Jagannath Dham", km: "60 KM" },
  { nh: "NH 316A", name: "Konark Sun Temple", km: "65 KM" },
  { nh: "OD-SH", name: "Puri – Konark Marine Drive", km: "35 KM" },
  { nh: "NH 16", name: "Chilika Dolphin Lagoon", km: "105 KM" },
  { nh: "BBI-AIR", name: "Bhubaneswar Airport (BBI)", km: "00 KM" },
];

// Pre-computed, hydration-safe static geometry coordinates for Konark Sun Temple Chariot Wheel (zero floating point drift)
const KONARK_RIM_MEDALLIONS = [
  { cx: 134, cy: 74 },
  { cx: 132.16, cy: 87.98 },
  { cx: 126.77, cy: 101 },
  { cx: 118.18, cy: 112.18 },
  { cx: 107, cy: 120.77 },
  { cx: 93.98, cy: 126.16 },
  { cx: 80, cy: 128 },
  { cx: 66.02, cy: 126.16 },
  { cx: 53, cy: 120.77 },
  { cx: 41.82, cy: 112.18 },
  { cx: 33.23, cy: 101 },
  { cx: 27.84, cy: 87.98 },
  { cx: 26, cy: 74 },
  { cx: 27.84, cy: 60.02 },
  { cx: 33.23, cy: 47 },
  { cx: 41.82, cy: 35.82 },
  { cx: 53, cy: 27.23 },
  { cx: 66.02, cy: 21.84 },
  { cx: 80, cy: 20 },
  { cx: 93.98, cy: 21.84 },
  { cx: 107, cy: 27.23 },
  { cx: 118.18, cy: 35.82 },
  { cx: 126.77, cy: 47 },
  { cx: 132.16, cy: 60.02 },
];

const KONARK_PRIMARY_SPOKES = [
  { x2: 129, y2: 74, mx: 108, my: 74 },
  { x2: 114.65, y2: 108.65, mx: 99.8, my: 93.8 },
  { x2: 80, y2: 123, mx: 80, my: 102 },
  { x2: 45.35, y2: 108.65, mx: 60.2, my: 93.8 },
  { x2: 31, y2: 74, mx: 52, my: 74 },
  { x2: 45.35, y2: 39.35, mx: 60.2, my: 54.2 },
  { x2: 80, y2: 25, mx: 80, my: 46 },
  { x2: 114.65, y2: 39.35, mx: 99.8, my: 54.2 },
];

const KONARK_SECONDARY_SPOKES = [
  { x2: 125.27, y2: 92.75 },
  { x2: 98.75, y2: 119.27 },
  { x2: 61.25, y2: 119.27 },
  { x2: 34.73, y2: 92.75 },
  { x2: 34.73, y2: 55.25 },
  { x2: 61.25, y2: 28.73 },
  { x2: 98.75, y2: 28.73 },
  { x2: 125.27, y2: 55.25 },
];

// Pure automatic real-time daily astronomical cycle calculation:
// Morning:   05:00 - 11:30 (Soft morning sun, fresh dawn-to-midday golden coastal glow)
// Afternoon: 11:30 - 16:30 (Broad tropical daylight, high overhead sun, crystal clear sky)
// Evening:   16:30 - 19:00 (Golden hour, crimson/burnt-orange sunset, dramatic dusk rays)
// Night:     19:00 - 05:00 (Starlit deep midnight indigo, luminous moon, projector headlights)
export const getRealtimeTimeOfDay = (): TimeOfDay => {
  if (typeof window === "undefined") return "afternoon";
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const time = hour + minute / 60;

  if (time >= 5.0 && time < 11.5) return "morning";
  if (time >= 11.5 && time < 16.5) return "afternoon";
  if (time >= 16.5 && time < 19.0) return "evening";
  return "night";
};

export const HeroSection: React.FC = () => {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("afternoon");
  const [milestoneIndex, setMilestoneIndex] = useState(0);

  // Automatically update the environment based on real-time daily cycle (Morning, Afternoon, Evening, Night)
  useEffect(() => {
    setTimeOfDay(getRealtimeTimeOfDay());
    const interval = setInterval(() => {
      setTimeOfDay(getRealtimeTimeOfDay());
    }, 20000);
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
    <section className="relative text-white overflow-hidden h-[100dvh] max-h-[100dvh] flex flex-col justify-between pt-28 sm:pt-32 pb-1 border-b border-[#D9A52B]/35 select-none transition-colors duration-1000 bg-[#073B3A]">
      
      {/* =========================================================================
          LAYER 1: FULL REALISTIC ODISHA SKY & ATMOSPHERE (SPANS ENTIRE BACKGROUND)
          Crisp sky gradient, soft natural cumulus clouds, and dynamic celestial bodies.
          ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Dynamic Sky Gradient according to Realtime Morning / Afternoon / Evening / Night */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ${
            timeOfDay === "morning"
              ? "bg-gradient-to-b from-[#0a2328] via-[#0f464c] via-35% via-[#166367] to-[#125052]"
              : timeOfDay === "afternoon"
              ? "bg-gradient-to-b from-[#032328] via-[#06424a] via-35% via-[#0a585f] to-[#0a484a]"
              : timeOfDay === "evening"
              ? "bg-gradient-to-b from-[#1e1333] via-[#7c2818] via-30% via-[#9e4408] to-[#153e3b]"
              : "bg-gradient-to-b from-[#01090d] via-[#02151b] via-40% to-[#042429]"
          }`}
        />

        {/* Ambient Atmospheric Skylight Depth Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/45 pointer-events-none" />

        {/* ================= STARFIELD (NIGHT ONLY) ================= */}
        {timeOfDay === "night" && (
          <div className="absolute inset-0 transition-opacity duration-1000 opacity-80 z-10">
            <div className="absolute inset-0 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px] opacity-45" />
            <div className="absolute inset-0 bg-[radial-gradient(#FDE047_1.5px,transparent_1.5px)] [background-size:60px_60px] opacity-55" />
            <span className="absolute top-28 left-[18%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#FFF] animate-pulse" />
            <span className="absolute top-36 left-[44%] w-1 h-1 rounded-full bg-[#FEF08A] shadow-[0_0_6px_#FEF08A] animate-ping" />
            <span className="absolute top-24 left-[68%] w-1.5 h-1.5 rounded-full bg-[#93C5FD] shadow-[0_0_8px_#93C5FD] animate-pulse" />
            <span className="absolute top-40 left-[84%] w-1 h-1 rounded-full bg-white shadow-[0_0_6px_#FFF] animate-pulse" />
          </div>
        )}

        {/* ================= REALISTIC COASTAL CUMULUS CLOUDS (PARALLAX DRIFT) ================= */}
        <div className="absolute top-10 sm:top-14 inset-x-0 h-28 opacity-45 animate-clouds-slow flex w-[200%] pointer-events-none z-10">
          <div className="w-1/2 h-full flex justify-around items-center">
            <svg viewBox="0 0 500 120" className="w-[420px] h-24" preserveAspectRatio="none">
              <defs>
                <linearGradient id="cloudGradReal1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={timeOfDay === "night" ? "#E2E8F0" : "#FFFFFF"} stopOpacity="0.85" />
                  <stop offset="40%" stopColor={timeOfDay === "evening" ? "#FED7AA" : "#F1F5F9"} stopOpacity="0.55" />
                  <stop offset="85%" stopColor="#94A3B8" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#475569" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M 50,110 Q 75,68 125,70 Q 155,38 215,44 Q 265,18 325,38 Q 375,28 415,62 Q 455,72 465,110 Z"
                fill="url(#cloudGradReal1)"
              />
            </svg>
            <svg viewBox="0 0 450 110" className="w-[360px] h-20 -mt-3" preserveAspectRatio="none">
              <path
                d="M 40,105 Q 65,62 115,66 Q 145,32 200,40 Q 245,15 295,36 Q 345,30 380,62 Q 415,72 425,105 Z"
                fill="url(#cloudGradReal1)"
              />
            </svg>
          </div>
          <div className="w-1/2 h-full flex justify-around items-center">
            <svg viewBox="0 0 500 120" className="w-[420px] h-24" preserveAspectRatio="none">
              <path
                d="M 50,110 Q 75,68 125,70 Q 155,38 215,44 Q 265,18 325,38 Q 375,28 415,62 Q 455,72 465,110 Z"
                fill="url(#cloudGradReal1)"
              />
            </svg>
            <svg viewBox="0 0 450 110" className="w-[360px] h-20 -mt-3" preserveAspectRatio="none">
              <path
                d="M 40,105 Q 65,62 115,66 Q 145,32 200,40 Q 245,15 295,36 Q 345,30 380,62 Q 415,72 425,105 Z"
                fill="url(#cloudGradReal1)"
              />
            </svg>
          </div>
        </div>

        {/* ================= CELESTIAL ORBS: VIBRANT & PROMINENT IN OPEN SKY ================= */}
        {/* 1. MORNING SUN (Soft Warm Golden Rise) */}
        {timeOfDay === "morning" && (
          <div className="absolute top-20 sm:top-24 right-8 sm:right-20 lg:right-32 pointer-events-none transition-all duration-1000 z-30">
            <div className="absolute -inset-10 rounded-full bg-gradient-to-br from-amber-300/30 via-yellow-500/20 to-transparent blur-2xl animate-celestial-pulse" />
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#EA580C] via-[#FACC15] to-[#FEF08A] shadow-[0_0_70px_rgba(250,204,21,0.95)] border-2 border-yellow-100/70" />
          </div>
        )}

        {/* 2. AFTERNOON SUN (Brilliant Tropical Daylight Corona) */}
        {timeOfDay === "afternoon" && (
          <div className="absolute top-20 sm:top-24 right-8 sm:right-20 lg:right-32 pointer-events-none transition-all duration-1000 z-30">
            <div className="absolute -inset-14 rounded-full bg-gradient-to-br from-yellow-100/40 via-yellow-300/20 to-transparent blur-2xl animate-celestial-pulse" />
            <div className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-gradient-to-tr from-[#FACC15] via-[#FEF08A] to-[#FFFFFF] shadow-[0_0_90px_rgba(250,204,21,1)] border-2 border-white/90" />
          </div>
        )}

        {/* 3. EVENING SUN (Dramatic Crimson & Burnt Orange Sunset) */}
        {timeOfDay === "evening" && (
          <div className="absolute top-20 sm:top-24 right-8 sm:right-20 lg:right-32 pointer-events-none transition-all duration-1000 z-30">
            <div className="absolute -inset-12 rounded-full bg-gradient-to-br from-red-500/40 via-orange-500/25 to-transparent blur-2xl animate-celestial-pulse" />
            <div className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-gradient-to-tr from-[#991B1B] via-[#EA580C] to-[#FBBF24] shadow-[0_0_80px_rgba(234,88,12,0.95)] border-2 border-orange-200/60" />
          </div>
        )}

        {/* 4. NIGHT MOON (Luminous Moon with Realistic Crater Textures) */}
        {timeOfDay === "night" && (
          <div className="absolute top-20 sm:top-24 right-8 sm:right-20 lg:right-32 pointer-events-none transition-all duration-1000 z-30">
            <div className="absolute -inset-8 rounded-full bg-cyan-200/20 blur-xl animate-celestial-pulse" />
            <svg viewBox="0 0 80 80" className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_0_40px_rgba(186,230,253,0.85)]">
              <defs>
                <radialGradient id="moonGradRealistic" cx="38%" cy="38%" r="65%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="45%" stopColor="#F1F5F9" />
                  <stop offset="75%" stopColor="#CBD5E1" />
                  <stop offset="100%" stopColor="#94A3B8" />
                </radialGradient>
              </defs>
              <circle cx="40" cy="40" r="32" fill="url(#moonGradRealistic)" />
              <ellipse cx="32" cy="30" rx="6" ry="4.5" fill="#94A3B8" fillOpacity="0.32" />
              <ellipse cx="46" cy="44" rx="7" ry="5" fill="#94A3B8" fillOpacity="0.28" />
              <circle cx="48" cy="28" r="3.5" fill="#94A3B8" fillOpacity="0.25" />
            </svg>
          </div>
        )}

        {/* Dynamic Sunbeam Rays Streaming Across Coastal Sky (Day, Morning, Evening) */}
        {timeOfDay !== "night" && (
          <div className="absolute top-14 right-2 w-[650px] h-[500px] pointer-events-none animate-sunbeams overflow-hidden z-20">
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-200/30 via-yellow-400/12 to-transparent blur-md" />
          </div>
        )}

        {/* ================= SMALL, DISTANT, REALISTIC SEAGULLS IN HIGH SKY ================= */}
        <div className="absolute top-8 left-0 pointer-events-none animate-bird-flight-1 z-30">
          <div className="flex items-center gap-4 opacity-75">
            {/* Seagull 1 (Leader) */}
            <svg
              viewBox="0 0 32 14"
              className="text-white/85 shrink-0 animate-bird-wing"
              style={{ width: "15px", height: "7px" }}
            >
              <path
                d="M 1,9 Q 7,1 15,6 Q 23,1 31,9 Q 23,4 16,8 Q 9,4 1,9 Z"
                fill="currentColor"
              />
            </svg>
            {/* Seagull 2 (Staggered trailing) */}
            <svg
              viewBox="0 0 32 14"
              className="text-white/75 shrink-0 -mt-2 animate-bird-wing-fast"
              style={{ width: "12px", height: "6px" }}
            >
              <path
                d="M 1,9 Q 7,1 15,6 Q 23,1 31,9 Q 23,4 16,8 Q 9,4 1,9 Z"
                fill="currentColor"
              />
            </svg>
            {/* Seagull 3 */}
            <svg
              viewBox="0 0 32 14"
              className="text-white/65 shrink-0 -mt-4 animate-bird-wing"
              style={{ width: "10px", height: "5px" }}
            >
              <path
                d="M 1,9 Q 7,1 15,6 Q 23,1 31,9 Q 23,4 16,8 Q 9,4 1,9 Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* Second Small Seagull Pair (Distant glide) */}
        <div className="absolute top-14 left-0 pointer-events-none animate-bird-flight-2 z-30">
          <div className="flex items-center gap-5 opacity-65">
            {/* Seagull 4 */}
            <svg
              viewBox="0 0 32 14"
              className="text-white/70 shrink-0 animate-bird-wing"
              style={{ width: "13px", height: "6px" }}
            >
              <path
                d="M 1,9 Q 7,1 15,6 Q 23,1 31,9 Q 23,4 16,8 Q 9,4 1,9 Z"
                fill="currentColor"
              />
            </svg>
            {/* Seagull 5 */}
            <svg
              viewBox="0 0 32 14"
              className="text-white/60 shrink-0 -mt-2 animate-bird-wing-fast"
              style={{ width: "9px", height: "4.5px" }}
            >
              <path
                d="M 1,9 Q 7,1 15,6 Q 23,1 31,9 Q 23,4 16,8 Q 9,4 1,9 Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

      </div>

      {/* =========================================================================
          LAYER 2: HERO BRANDING, HIGH-CONVERTING HEADLINE & CTAS (ZERO CARDS)
          Generous top clearance (pt-28 sm:pt-32) ensures headline is 100% visible below navbar.
          ========================================================================= */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 w-full text-center space-y-2 sm:space-y-3">
        
        {/* Short, Direct, High-Converting Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
          Book Reliable Cabs <br />
          <span className="italic font-display font-normal text-[#D9A52B]">
            Across Odisha.
          </span>
        </h1>

        {/* Clear Concise Subtitle */}
        <p className="text-xs sm:text-sm lg:text-base text-white/95 max-w-xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          Punctual BBI airport pickups, outstation highway transfers &amp; sacred temple circuits. 100% yellow-board commercial fleet, zero surge pricing &amp; guaranteed on-time dispatch.
        </p>

        {/* Action CTAs */}
        <div className="pt-0.5 flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          <Link
            href="/book-cab"
            className="w-full sm:w-auto px-7 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#D9A52B] via-[#E5B543] to-[#C99320] text-[#062F31] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(217,165,43,0.45),inset_0_1px_0_rgba(255,255,255,0.6)] hover:brightness-105 active:scale-[0.98] transition-all group cursor-pointer border border-[#F2C868]/60"
          >
            <Car className="w-4 h-4 text-[#062F31]" />
            <span>Book Your Cab Now</span>
            <ArrowRight className="w-4 h-4 text-[#062F31] group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/book-tour"
            className="w-full sm:w-auto px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/30 hover:border-[#D9A52B]/70 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98] cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#D9A52B]" />
            <span>Explore Curated Tours</span>
          </Link>
        </div>

      </div>

      {/* =========================================================================
          LAYER 3: HIGH-FIDELITY REALISTIC ODISHA ENVIRONMENT & HIGHWAY
          Positioned as an absolute background layer directly docked to the road horizon!
          Never adds in-flow height; road is 100% fully visible and NEVER cropped!
          ========================================================================= */}
      <div className="relative z-10 w-full mt-auto">
        
        {/* ================= SCENIC ODISHA PANORAMA (DOCKED DIRECTLY BEHIND THE ROAD) ================= */}
        <div className="absolute bottom-16 sm:bottom-18 inset-x-0 h-48 sm:h-56 lg:h-64 pointer-events-none overflow-hidden z-10">
          
          {/* 1. Natural Terrain Layer (Undulating Hills, Ocean Water & Golden Dunes) */}
          <svg viewBox="0 0 1440 220" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <defs>
              {/* Eastern Ghats Mountain Mist */}
              <linearGradient id="hillsMistGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#08383C" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#042629" stopOpacity="0.85" />
              </linearGradient>

              {/* Bay of Bengal Glistening Ocean */}
              <linearGradient id="bengalOceanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0284C7" />
                <stop offset="40%" stopColor="#0369A1" />
                <stop offset="80%" stopColor="#075985" />
                <stop offset="100%" stopColor="#042F2E" />
              </linearGradient>

              {/* Chandrabhaga Beach Coastal Sand Dunes - WARM LUMINOUS GOLDEN SAND */}
              <linearGradient id="chandrabhagaDunes" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.95" />
                <stop offset="25%" stopColor="#D97706" stopOpacity="0.95" />
                <stop offset="60%" stopColor="#B45309" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#78350F" stopOpacity="0.98" />
              </linearGradient>

              {/* Secondary Foreground Coastal Ridge */}
              <linearGradient id="lowerDuneSlope" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D97706" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#B45309" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#451A03" />
              </linearGradient>
            </defs>

            {/* Distant Eastern Ghats Mountain Contours */}
            <path
              d="M 0,155 Q 220,105 480,130 T 960,120 T 1440,140 L 1440,220 L 0,220 Z"
              fill="url(#hillsMistGrad)"
            />

            {/* Main Undulating Golden Sand Dunes (Chandrabhaga / Marine Drive) */}
            <path
              d="M 0,220 Q 260,135 560,162 T 1100,150 T 1440,180 L 1440,220 Z"
              fill="url(#chandrabhagaDunes)"
            />
            {/* Sunlit Dune Crest Highlight Line */}
            <path
              d="M 0,220 Q 260,135 560,162 T 1100,150 T 1440,180"
              stroke="#FDE68A"
              strokeWidth="2"
              strokeOpacity="0.75"
              fill="none"
            />

            {/* Secondary Foreground Coastal Ridge with Warm Terracotta Shadow */}
            <path
              d="M 0,220 Q 380,172 780,184 T 1440,195 L 1440,220 Z"
              fill="url(#lowerDuneSlope)"
            />

            {/* Coastal Dune Grass Tufts along Ridge */}
            <g stroke="#FDE047" strokeWidth="1.4" strokeLinecap="round" opacity="0.8">
              <path d="M 260,172 L 255,160 M 260,172 L 263,158 M 260,172 L 268,164" />
              <path d="M 580,176 L 575,164 M 580,176 L 583,162 M 580,176 L 588,168" />
              <path d="M 1080,168 L 1075,156 M 1080,168 L 1083,154 M 1080,168 L 1088,160" />
            </g>
          </svg>

          {/* 2. PURI JAGANNATH TEMPLE (REKHA DEULA) - Dedicated Aspect-Ratio Constrained SVG */}
          <div className="absolute bottom-1 sm:bottom-2 left-[30%] sm:left-[34%] w-24 sm:w-28 lg:w-32 h-44 sm:h-52 lg:h-60 z-10 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)] pointer-events-none">
            <svg
              viewBox="0 0 110 200"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="pjtSunlit" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D97706" />
                  <stop offset="50%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#B45309" />
                </linearGradient>
                <linearGradient id="pjtShadow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#92400E" />
                  <stop offset="60%" stopColor="#78350F" />
                  <stop offset="100%" stopColor="#451A03" />
                </linearGradient>
                <linearGradient id="pjtPlinth" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#B45309" />
                  <stop offset="100%" stopColor="#451A03" />
                </linearGradient>
                <linearGradient id="pjtAmalaka" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#78350F" />
                </linearGradient>
                <linearGradient id="pjtFlag" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#DC2626" />
                  <stop offset="50%" stopColor="#EA580C" />
                  <stop offset="100%" stopColor="#FBBF24" />
                </linearGradient>
              </defs>

              {/* Stepped Temple Base (Bada) */}
              <rect x="15" y="172" width="80" height="24" rx="2" fill="url(#pjtPlinth)" />
              <rect x="22" y="156" width="66" height="18" fill="#78350F" />
              <rect x="28" y="140" width="54" height="18" fill="#92400E" />
              {/* Central Sanctum Niche */}
              <rect x="49" y="160" width="12" height="18" rx="2" fill="#1C110A" />

              {/* Gandi (Curvilinear Soaring Tower) - Sunlit Left / Shadowed Right */}
              <path
                d="M 28,140 C 33,90 42,48 53,24 L 55,24 L 55,140 Z"
                fill="url(#pjtSunlit)"
              />
              <path
                d="M 55,24 L 57,24 C 68,48 77,90 82,140 L 55,140 Z"
                fill="url(#pjtShadow)"
              />

              {/* Horizontal Kalinga Stone Tiers (Bhumi Moldings) */}
              <line x1="32" y1="126" x2="78" y2="126" stroke="#451A03" strokeWidth="1.2" opacity="0.65" />
              <line x1="36" y1="112" x2="74" y2="112" stroke="#451A03" strokeWidth="1.2" opacity="0.65" />
              <line x1="40" y1="98" x2="70" y2="98" stroke="#451A03" strokeWidth="1.2" opacity="0.65" />
              <line x1="43" y1="84" x2="67" y2="84" stroke="#451A03" strokeWidth="1.2" opacity="0.65" />
              <line x1="46" y1="70" x2="64" y2="70" stroke="#451A03" strokeWidth="1.2" opacity="0.65" />
              <line x1="49" y1="56" x2="61" y2="56" stroke="#451A03" strokeWidth="1.2" opacity="0.65" />
              <line x1="51" y1="42" x2="59" y2="42" stroke="#451A03" strokeWidth="1.2" opacity="0.65" />

              {/* Vertical Pagas Fluting Highlight */}
              <path d="M 51,140 C 53,92 54,48 55,24" stroke="#FDE68A" strokeWidth="0.8" opacity="0.45" fill="none" />
              <path d="M 59,140 C 57,92 56,48 55,24" stroke="#451A03" strokeWidth="0.8" opacity="0.45" fill="none" />

              {/* Beki (Cylindrical Neck) */}
              <rect x="52" y="20" width="6" height="4" fill="#78350F" />

              {/* Amalaka (Ribbed Stone Disc Crown) */}
              <ellipse cx="55" cy="18" rx="8" ry="3.2" fill="url(#pjtAmalaka)" stroke="#B45309" strokeWidth="0.8" />
              <line x1="50" y1="16" x2="50" y2="20" stroke="#451A03" strokeWidth="0.8" />
              <line x1="53" y1="15.5" x2="53" y2="20.5" stroke="#451A03" strokeWidth="0.8" />
              <line x1="55" y1="15" x2="55" y2="21" stroke="#451A03" strokeWidth="0.8" />
              <line x1="57" y1="15.5" x2="57" y2="20.5" stroke="#451A03" strokeWidth="0.8" />
              <line x1="60" y1="16" x2="60" y2="20" stroke="#451A03" strokeWidth="0.8" />

              {/* Khapuri & Golden Kalasha */}
              <ellipse cx="55" cy="14.5" rx="4.5" ry="1.8" fill="#D97706" />
              <path d="M 53,14.5 L 55,9.5 L 57,14.5 Z" fill="#FACC15" />
              <circle cx="55" cy="9" r="1.6" fill="#FEF08A" />

              {/* Sacred Neelachakra (Eight-spoked wheel atop spire) */}
              <circle cx="55" cy="5" r="3.8" stroke="#38BDF8" strokeWidth="1" fill="#03262C" />
              <circle cx="55" cy="5" r="1" fill="#38BDF8" />
              <line x1="55" y1="1.5" x2="55" y2="8.5" stroke="#38BDF8" strokeWidth="0.6" />
              <line x1="51.5" y1="5" x2="58.5" y2="5" stroke="#38BDF8" strokeWidth="0.6" />
              <line x1="52.5" y1="2.5" x2="57.5" y2="7.5" stroke="#38BDF8" strokeWidth="0.6" />
              <line x1="52.5" y1="7.5" x2="57.5" y2="2.5" stroke="#38BDF8" strokeWidth="0.6" />

              {/* Holy Patitapabana Flag Fluttering */}
              <g className="animate-flag-flutter" style={{ transformOrigin: "55px 2px" }}>
                <path d="M 55,2 L 68,0.5 L 62,5 L 71,8.5 L 55,6 Z" fill="url(#pjtFlag)" />
              </g>
            </svg>
          </div>

          {/* 3. 13TH-CENTURY KONARK SUN TEMPLE CHARIOT WHEEL - Dedicated Perfect Circle SVG */}
          <div className="absolute bottom-1 sm:bottom-2 left-[58%] sm:left-[62%] lg:left-[64%] w-28 sm:w-36 lg:w-44 h-28 sm:h-36 lg:h-44 z-10 filter drop-shadow-[0_10px_24px_rgba(0,0,0,0.75)] pointer-events-none">
            <svg
              viewBox="0 0 160 160"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="ktwRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D97706" />
                  <stop offset="40%" stopColor="#B45309" />
                  <stop offset="80%" stopColor="#78350F" />
                  <stop offset="100%" stopColor="#451A03" />
                </linearGradient>
                <linearGradient id="ktwHubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="60%" stopColor="#B45309" />
                  <stop offset="100%" stopColor="#451A03" />
                </linearGradient>
                <linearGradient id="ktwPlinth" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#92400E" />
                  <stop offset="100%" stopColor="#451A03" />
                </linearGradient>
              </defs>

              {/* Carved Stone Basement Plinth */}
              <rect x="15" y="138" width="130" height="18" rx="2" fill="url(#ktwPlinth)" />
              <rect x="25" y="132" width="110" height="8" fill="#78350F" />
              {Array.from({ length: 9 }).map((_, i) => (
                <rect
                  key={i}
                  x={28 + i * 12}
                  y="141"
                  width="8"
                  height="8"
                  rx="1"
                  fill="#451A03"
                  opacity="0.65"
                />
              ))}

              {/* Outer Wheel Rim - PERFECT CIRCLE */}
              <circle cx="80" cy="74" r="54" stroke="url(#ktwRimGrad)" strokeWidth="8" fill="#082A2E" />
              <circle cx="80" cy="74" r="58" stroke="#D9A52B" strokeWidth="1.2" fill="none" opacity="0.65" />
              <circle cx="80" cy="74" r="50" stroke="#78350F" strokeWidth="1.2" fill="none" />

              {/* 24 Carved Circular Medallions Along Rim (Pre-computed hydration-safe coordinates) */}
              {KONARK_RIM_MEDALLIONS.map((m, i) => (
                <circle
                  key={i}
                  cx={m.cx}
                  cy={m.cy}
                  r="2.2"
                  fill="#FACC15"
                  stroke="#78350F"
                  strokeWidth="0.6"
                />
              ))}

              {/* 8 Primary Carved Spokes (Thick Sundial Spokes with Relief Medallions) */}
              {KONARK_PRIMARY_SPOKES.map((s, i) => (
                <g key={i}>
                  <line
                    x1="80"
                    y1="74"
                    x2={s.x2}
                    y2={s.y2}
                    stroke="#D9A52B"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="80"
                    y1="74"
                    x2={s.x2}
                    y2={s.y2}
                    stroke="#FEF08A"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  <circle cx={s.mx} cy={s.my} r="3.5" fill="#F59E0B" stroke="#451A03" strokeWidth="0.8" />
                  <circle cx={s.mx} cy={s.my} r="1.5" fill="#FEF08A" />
                </g>
              ))}

              {/* 8 Secondary Slender Carved Spokes */}
              {KONARK_SECONDARY_SPOKES.map((s, i) => (
                <line
                  key={i}
                  x1="80"
                  y1="74"
                  x2={s.x2}
                  y2={s.y2}
                  stroke="#B45309"
                  strokeWidth="1.6"
                  strokeDasharray="3,1.5"
                />
              ))}

              {/* Central Axle Hub with Concentric Carved Rings */}
              <circle cx="80" cy="74" r="15" fill="url(#ktwHubGrad)" stroke="#451A03" strokeWidth="1.5" />
              <circle cx="80" cy="74" r="10" fill="#D9A52B" stroke="#78350F" strokeWidth="1" />
              <circle cx="80" cy="74" r="4.5" fill="#FEF08A" stroke="#000000" strokeWidth="0.8" />
            </svg>
          </div>

          {/* 4. COASTAL COCONUT PALMS & CASUARINA CONIFERS */}
          {/* Left Coconut Palm */}
          <div className="absolute bottom-0 left-[10%] sm:left-[14%] w-32 sm:w-40 h-44 sm:h-56 z-10 pointer-events-none">
            <svg viewBox="0 0 140 180" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="cPalmBark" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#451A03" />
                  <stop offset="50%" stopColor="#78350F" />
                  <stop offset="100%" stopColor="#291102" />
                </linearGradient>
                <linearGradient id="cPalmFrond" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#15803D" />
                  <stop offset="40%" stopColor="#166534" />
                  <stop offset="80%" stopColor="#0B4E47" />
                  <stop offset="100%" stopColor="#032628" />
                </linearGradient>
              </defs>
              <path
                d="M 32,180 Q 26,110 44,58 Q 50,42 56,30"
                stroke="url(#cPalmBark)"
                strokeWidth="5.5"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="53" cy="32" r="3.2" fill="#58310C" />
              <circle cx="58" cy="33" r="2.8" fill="#713F12" />
              <circle cx="55" cy="36" r="2.6" fill="#451A03" />
              <g className="animate-leaf-flutter-left" style={{ transformOrigin: "56px 30px" }}>
                <path d="M 56,30 Q 22,18 -16,34 Q 6,16 56,30" fill="url(#cPalmFrond)" />
                <path d="M 56,30 Q 18,-2 -10,12 Q 18,5 56,30" fill="url(#cPalmFrond)" opacity="0.9" />
              </g>
              <g className="animate-leaf-flutter-top" style={{ transformOrigin: "56px 30px" }}>
                <path d="M 56,30 Q 48,-10 56,-22 Q 65,-2 56,30" fill="url(#cPalmFrond)" />
              </g>
              <g className="animate-leaf-flutter-right" style={{ transformOrigin: "56px 30px" }}>
                <path d="M 56,30 Q 92,-2 120,10 Q 92,8 56,30" fill="url(#cPalmFrond)" opacity="0.9" />
                <path d="M 56,30 Q 100,20 130,40 Q 98,24 56,30" fill="url(#cPalmFrond)" />
              </g>
            </svg>
          </div>

          {/* Right Coconut Palm */}
          <div className="absolute bottom-0 right-[10%] sm:right-[15%] w-28 sm:w-36 h-40 sm:h-50 z-10 pointer-events-none">
            <svg viewBox="0 0 140 180" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
              <path
                d="M 108,180 Q 114,112 96,62 Q 90,44 82,32"
                stroke="url(#cPalmBark)"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="80" cy="34" r="3" fill="#58310C" />
              <circle cx="85" cy="35" r="2.6" fill="#713F12" />
              <g className="animate-leaf-flutter-left" style={{ transformOrigin: "82px 32px" }}>
                <path d="M 82,32 Q 52,20 22,34 Q 48,16 82,32" fill="url(#cPalmFrond)" />
                <path d="M 82,32 Q 46,2 26,14 Q 52,6 82,32" fill="url(#cPalmFrond)" opacity="0.9" />
              </g>
              <g className="animate-leaf-flutter-top" style={{ transformOrigin: "82px 32px" }}>
                <path d="M 82,32 Q 78,-8 82,-20 Q 90,-2 82,32" fill="url(#cPalmFrond)" />
              </g>
              <g className="animate-leaf-flutter-right" style={{ transformOrigin: "82px 32px" }}>
                <path d="M 82,32 Q 116,2 144,12 Q 118,8 82,32" fill="url(#cPalmFrond)" opacity="0.9" />
                <path d="M 82,32 Q 124,20 152,38 Q 122,24 82,32" fill="url(#cPalmFrond)" />
              </g>
            </svg>
          </div>

          {/* Casuarina Pine Conifers (Jhāu Groves along Roadside Verge) */}
          <div className="absolute bottom-0 left-[2%] w-16 sm:w-20 h-36 sm:h-44 z-10 pointer-events-none">
            <svg viewBox="0 0 60 140" className="w-full h-full">
              <rect x="27" y="45" width="6" height="95" fill="url(#cPalmBark)" rx="1.5" />
              <g className="animate-foliage-shimmer" style={{ transformOrigin: "30px 140px" }}>
                <path d="M 30,12 C 48,28 52,50 30,50 C 8,50 12,28 30,12 Z" fill="#0F766E" />
                <path d="M 30,32 C 52,52 56,76 30,76 C 4,76 8,52 30,32 Z" fill="#115E59" opacity="0.92" />
                <path d="M 30,56 C 58,78 62,104 30,104 C -2,104 2,78 30,56 Z" fill="#042F2E" opacity="0.96" />
              </g>
            </svg>
          </div>

          <div className="absolute bottom-0 right-[2%] w-16 sm:w-20 h-36 sm:h-44 z-10 pointer-events-none">
            <svg viewBox="0 0 60 140" className="w-full h-full">
              <rect x="27" y="45" width="6" height="95" fill="url(#cPalmBark)" rx="1.5" />
              <g className="animate-foliage-shimmer-fast" style={{ transformOrigin: "30px 140px" }}>
                <path d="M 30,12 C 48,28 52,50 30,50 C 8,50 12,28 30,12 Z" fill="#0F766E" />
                <path d="M 30,32 C 52,52 56,76 30,76 C 4,76 8,52 30,32 Z" fill="#115E59" opacity="0.92" />
                <path d="M 30,56 C 58,78 62,104 30,104 C -2,104 2,78 30,56 Z" fill="#042F2E" opacity="0.96" />
              </g>
            </svg>
          </div>

        </div>

        {/* ================= THE RUNNING CAR: RESTING EXACTLY ON TOP OF THE ROAD ================= */}
        <div className="relative -mb-[10px] z-30 left-6 sm:left-16 lg:left-24 flex items-end">
          
          {/* Suspension Micro-Bounce Chassis */}
          <div className="relative animate-car-chassis">
            
            {/* Volumetric Projector Headlight Beam Shining Forward Across Asphalt */}
            <div className="absolute top-[28px] left-[225px] w-64 sm:w-96 h-28 pointer-events-none z-10 animate-headlight-beam">
              <svg viewBox="0 0 350 100" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="headlightVolumetricBeam" x1="0%" y1="30%" x2="100%" y2="50%">
                    <stop
                      offset="0%"
                      stopColor="#FEF08A"
                      stopOpacity={timeOfDay === "night" ? "0.9" : "0.55"}
                    />
                    <stop
                      offset="25%"
                      stopColor="#FDE047"
                      stopOpacity={timeOfDay === "night" ? "0.45" : "0.25"}
                    />
                    <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polygon points="0,30 350,0 350,100 0,55" fill="url(#headlightVolumetricBeam)" />
              </svg>
            </div>

            {/* High-Fidelity Executive Commercial Sedan SVG */}
            <svg
              width="240"
              height="78"
              viewBox="0 0 250 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-20 filter drop-shadow-[0_12px_22px_rgba(0,0,0,0.95)]"
            >
              <defs>
                <linearGradient id="realCarBody" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop
                    offset="0%"
                    stopColor={
                      timeOfDay === "morning" || timeOfDay === "afternoon"
                        ? "#16A34A"
                        : timeOfDay === "evening"
                        ? "#B45309"
                        : "#147B72"
                    }
                  />
                  <stop offset="25%" stopColor="#0B4B48" />
                  <stop offset="65%" stopColor="#073B3A" />
                  <stop offset="90%" stopColor="#032425" />
                  <stop offset="100%" stopColor="#011415" />
                </linearGradient>

                <linearGradient id="realCarGlass" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#334155" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#0F172A" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#020617" stopOpacity="0.95" />
                </linearGradient>
              </defs>

              {/* Direct Asphalt Contact Rubber Tire Shadows */}
              <ellipse cx="58" cy="72" rx="20" ry="4" fill="#000000" fillOpacity="0.9" />
              <ellipse cx="182" cy="72" rx="20" ry="4" fill="#000000" fillOpacity="0.9" />
              <ellipse cx="125" cy="74" rx="110" ry="5.5" fill="#000000" fillOpacity="0.75" />

              {/* Aerodynamic Sedan Body Profile */}
              <path
                d="M 18,52 
                   C 18,48 24,44 38,44 
                   L 58,44 
                   L 82,20 
                   C 86,16 94,14 105,14 
                   L 155,14 
                   C 168,14 175,18 185,25 
                   L 204,44 
                   L 236,46 
                   C 244,46 248,50 248,56 
                   L 246,65 
                   C 246,68 242,70 236,70 
                   L 216,70 
                   C 214,60 202,54 190,54 
                   C 178,54 166,60 164,70 
                   L 86,70 
                   C 84,60 72,54 60,54 
                   C 48,54 36,60 34,70 
                   L 18,70 
                   Z"
                fill="url(#realCarBody)"
                stroke="#0E5853"
                strokeWidth="1.2"
              />

              {/* Chrome Beltline & Window Trim */}
              <path
                d="M 86,22 L 130,22 L 130,42 L 67,42 Z"
                fill="url(#realCarGlass)"
                stroke="#CBD5E1"
                strokeWidth="0.8"
              />
              <path
                d="M 134,22 L 154,22 L 178,42 L 134,42 Z"
                fill="url(#realCarGlass)"
                stroke="#CBD5E1"
                strokeWidth="0.8"
              />

              {/* Glass Glare */}
              <polygon points="100,22 110,22 90,42 80,42" fill="#FFFFFF" fillOpacity="0.25" />
              <polygon points="148,22 154,22 144,42 138,42" fill="#FFFFFF" fillOpacity="0.25" />

              {/* Door Separation Grooves */}
              <line x1="132" y1="20" x2="132" y2="68" stroke="#041E20" strokeWidth="1" />
              <line x1="78" y1="42" x2="78" y2="68" stroke="#041E20" strokeWidth="0.8" />
              <line x1="184" y1="42" x2="184" y2="68" stroke="#041E20" strokeWidth="0.8" />

              {/* Chrome Door Handles */}
              <rect x="115" y="47" width="8" height="1.8" rx="0.9" fill="#E2E8F0" />
              <rect x="145" y="47" width="8" height="1.8" rx="0.9" fill="#E2E8F0" />

              {/* ================= CABJATRA BRANDED DOOR CREST ================= */}
              <g transform="translate(94, 51)">
                <rect x="0" y="0" width="34" height="13" rx="2.5" fill="#032021" stroke="#D9A52B" strokeWidth="0.8" />
                <text x="17" y="6.8" fill="#D9A52B" fontSize="4.4" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.4">
                  CABJATRA
                </text>
                <text x="17" y="10.8" fill="#F2C052" fontSize="2.4" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.2">
                  ODISHA CAB
                </text>
              </g>

              {/* ================= AUTHENTIC ODISHA YELLOW COMMERCIAL PLATE ================= */}
              <g transform="translate(14, 57)">
                <rect x="0" y="0" width="13" height="5.5" rx="1" fill="#FACC15" stroke="#000000" strokeWidth="0.6" />
                <text x="6.5" y="4" fill="#000000" fontSize="2.6" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
                  OD 02 CJ
                </text>
              </g>

              {/* Dual Xenon Headlight Bulb */}
              <path
                d="M 234,48 L 244,52 L 246,58 L 235,56 Z"
                fill="#FEF08A"
                stroke="#FFFFFF"
                strokeWidth="0.8"
              />
              <circle cx="242" cy="53" r="2.2" fill="#FFFFFF" />

              {/* Sleek Taillight Housing */}
              <path
                d="M 20,48 L 28,48 L 26,55 L 18,54 Z"
                fill="#B91C1C"
                stroke="#991B1B"
                strokeWidth="0.8"
              />
              <rect x="20" y="49" width="4" height="3" rx="0.5" fill="#FFFFFF" fillOpacity="0.8" />
            </svg>

            {/* Front Spinning Alloy Wheel Planted Firmly On Asphalt */}
            <div className="absolute top-[48px] left-[165px] w-[35px] h-[35px] rounded-full z-30 animate-wheel-spin">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <circle cx="18" cy="18" r="17" fill="#18181B" stroke="#27272A" strokeWidth="2" />
                <circle cx="18" cy="18" r="12" fill="#71717A" stroke="#E4E4E7" strokeWidth="1" />
                <line x1="18" y1="18" x2="18" y2="6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                <line x1="18" y1="18" x2="29" y2="14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                <line x1="18" y1="18" x2="25" y2="28" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                <line x1="18" y1="18" x2="11" y2="28" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                <line x1="18" y1="18" x2="7" y2="14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                <circle cx="18" cy="18" r="3.5" fill="#D9A52B" stroke="#000000" strokeWidth="0.6" />
              </svg>
            </div>

            {/* Rear Spinning Alloy Wheel Planted Firmly On Asphalt */}
            <div className="absolute top-[48px] left-[40px] w-[35px] h-[35px] rounded-full z-30 animate-wheel-spin">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <circle cx="18" cy="18" r="17" fill="#18181B" stroke="#27272A" strokeWidth="2" />
                <circle cx="18" cy="18" r="12" fill="#71717A" stroke="#E4E4E7" strokeWidth="1" />
                <line x1="18" y1="18" x2="18" y2="6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                <line x1="18" y1="18" x2="29" y2="14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                <line x1="18" y1="18" x2="25" y2="28" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                <line x1="18" y1="18" x2="11" y2="28" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                <line x1="18" y1="18" x2="7" y2="14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                <circle cx="18" cy="18" r="3.5" fill="#D9A52B" stroke="#000000" strokeWidth="0.6" />
              </svg>
            </div>

          </div>
        </div>

        {/* ================= REALISTIC FULL-WIDTH ASPHALT ROAD ================= */}
        <div className="w-full relative h-16 sm:h-18 bg-gradient-to-b from-[#1C2427] via-[#151D20] to-[#0E1315] border-t-2 border-[#3A4B4E] shadow-[inset_0_4px_16px_rgba(0,0,0,0.85)] flex items-center overflow-hidden">
          
          {/* Asphalt Fine Mineral Granular Texture */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:6px_6px]" />

          {/* Roadside Retro-Reflective Amber Cat-Eye Studs Directly along Upper Shoulder */}
          <div className="absolute top-1.5 inset-x-0 flex justify-around pointer-events-none opacity-85">
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#F59E0B]"
              />
            ))}
          </div>

          {/* Upper Highway Shoulder Solid Continuous White Line */}
          <div className="absolute top-2.5 inset-x-0 h-0.5 bg-white/85 shadow-[0_0_4px_rgba(255,255,255,0.4)]" />

          {/* Moving Dashed Center Yellow Lane Divider Stripes (In Middle of Road) */}
          <div className="absolute top-1/2 -translate-y-1/2 inset-x-0 h-1 flex overflow-hidden pointer-events-none">
            <div className="flex shrink-0 w-[200%] animate-road-flow">
              {Array.from({ length: 50 }).map((_, i) => (
                <span
                  key={i}
                  className="inline-block w-8 sm:w-12 h-1 bg-[#FACC15] mr-6 sm:mr-8 rounded-full shadow-[0_0_8px_rgba(250,204,21,0.7)] shrink-0"
                />
              ))}
            </div>
          </div>

          {/* Lower Highway Shoulder Solid Continuous White Line */}
          <div className="absolute bottom-2.5 inset-x-0 h-0.5 bg-white/85 shadow-[0_0_4px_rgba(255,255,255,0.4)]" />

          {/* ================= AUTHENTIC ROADSIDE MILESTONE (ON LOWER ROADSIDE SHOULDER) =================
              Positioned on the near-side roadside shoulder (bottom of the road).
              Completely separate from the car lane above — car wheels NEVER go over the milestone!
              ============================================================================================= */}
          <div className="absolute bottom-1 sm:bottom-1.5 z-20 animate-passing-milestone-1 pointer-events-none">
            <div className="w-22 sm:w-26 h-9 sm:h-10 rounded-t-2xl overflow-hidden border border-black/40 shadow-xl flex flex-col items-center bg-white filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
              {/* Highway Yellow Upper Dome */}
              <div className="w-full bg-[#FACC15] text-[#062F31] font-black text-[8px] sm:text-[8.5px] text-center py-0.5 border-b border-black/25 uppercase tracking-wider font-mono">
                {currentMilestone.nh}
              </div>
              {/* White Concrete Stone Base */}
              <div className="w-full bg-white text-[#062F31] flex flex-col items-center justify-center py-0.5 px-1 leading-tight">
                <span className="text-[7px] sm:text-[7.5px] font-extrabold truncate w-full text-center">
                  {currentMilestone.name}
                </span>
                <span className="text-[7.5px] sm:text-[8px] font-black font-mono text-[#062F31]">
                  {currentMilestone.km}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* =========================================================================
          LAYER 4: BOTTOM FOUNDATIONAL SERVICE GUARANTEES
          ========================================================================= */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 w-full pt-1 pb-1 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-white/90">
        <span className="inline-flex items-center gap-1.5 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-[#D9A52B]" />
          <span>100% Yellow-Board Commercial Fleet</span>
        </span>
        <span className="hidden sm:inline text-white/30">&bull;</span>
        <span className="inline-flex items-center gap-1.5 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A52B]" />
          <span>10% Advance Deposit Model</span>
        </span>
        <span className="hidden sm:inline text-white/30">&bull;</span>
        <span className="inline-flex items-center gap-1.5 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
          <span>Zero Surge Pricing Guarantee</span>
        </span>
      </div>

    </section>
  );
};
