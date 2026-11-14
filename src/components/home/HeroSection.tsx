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
    <section className="relative text-white overflow-hidden h-[100dvh] max-h-[100dvh] flex flex-col justify-between pt-24 sm:pt-28 pb-1 border-b border-[#D9A52B]/35 select-none transition-colors duration-1000 bg-[#073B3A]">
      
      {/* =========================================================================
          LAYER 1: FULL REALISTIC ODISHA SKY & ATMOSPHERE (SPANS ENTIRE BACKGROUND)
          Smoothly transitions between Morning, Afternoon, Evening, and Night.
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
          <div className="absolute inset-0 transition-opacity duration-1000 opacity-80">
            <div className="absolute inset-0 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px] opacity-45" />
            <div className="absolute inset-0 bg-[radial-gradient(#FDE047_1.5px,transparent_1.5px)] [background-size:60px_60px] opacity-55" />
            <span className="absolute top-10 left-[18%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#FFF] animate-pulse" />
            <span className="absolute top-24 left-[44%] w-1 h-1 rounded-full bg-[#FEF08A] shadow-[0_0_6px_#FEF08A] animate-ping" />
            <span className="absolute top-8 left-[68%] w-1.5 h-1.5 rounded-full bg-[#93C5FD] shadow-[0_0_8px_#93C5FD] animate-pulse" />
            <span className="absolute top-28 left-[84%] w-1 h-1 rounded-full bg-white shadow-[0_0_6px_#FFF] animate-pulse" />
          </div>
        )}

        {/* ================= CELESTIAL ORBS: MORNING / AFTERNOON / EVENING / NIGHT ================= */}
        {/* 1. MORNING SUN (Soft Warm Golden Rise) */}
        {timeOfDay === "morning" && (
          <div className="absolute top-10 sm:top-14 right-10 sm:right-24 pointer-events-none transition-all duration-1000">
            <div className="absolute -inset-10 rounded-full bg-gradient-to-br from-amber-300/25 via-yellow-500/15 to-transparent blur-2xl animate-celestial-pulse" />
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#EA580C] via-[#FACC15] to-[#FEF08A] shadow-[0_0_60px_rgba(250,204,21,0.85)] border border-yellow-100/50" />
          </div>
        )}

        {/* 2. AFTERNOON SUN (Brilliant Daylight Overhead Corona) */}
        {timeOfDay === "afternoon" && (
          <div className="absolute top-8 sm:top-12 right-12 sm:right-28 pointer-events-none transition-all duration-1000">
            <div className="absolute -inset-14 rounded-full bg-gradient-to-br from-yellow-100/30 via-yellow-300/15 to-transparent blur-2xl animate-celestial-pulse" />
            <div className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-gradient-to-tr from-[#FACC15] via-[#FEF08A] to-[#FFFFFF] shadow-[0_0_80px_rgba(250,204,21,0.95)] border border-white/70" />
          </div>
        )}

        {/* 3. EVENING SUN (Dramatic Crimson & Burnt Orange Sunset) */}
        {timeOfDay === "evening" && (
          <div className="absolute top-12 sm:top-16 right-10 sm:right-24 pointer-events-none transition-all duration-1000">
            <div className="absolute -inset-12 rounded-full bg-gradient-to-br from-red-500/30 via-orange-500/20 to-transparent blur-2xl animate-celestial-pulse" />
            <div className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-gradient-to-tr from-[#991B1B] via-[#EA580C] to-[#FBBF24] shadow-[0_0_70px_rgba(234,88,12,0.9)] border border-orange-200/40" />
          </div>
        )}

        {/* 4. NIGHT MOON (Luminous Moon with Realistic Crater Textures) */}
        {timeOfDay === "night" && (
          <div className="absolute top-10 sm:top-14 right-10 sm:right-24 pointer-events-none transition-all duration-1000">
            <div className="absolute -inset-8 rounded-full bg-cyan-200/15 blur-xl animate-celestial-pulse" />
            <svg viewBox="0 0 80 80" className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_0_35px_rgba(186,230,253,0.7)]">
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
          <div className="absolute top-0 right-6 w-[550px] h-[450px] pointer-events-none animate-sunbeams overflow-hidden">
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-200/20 via-yellow-400/5 to-transparent blur-md" />
          </div>
        )}

        {/* Natural Soft Atmospheric Drifting Cloud Layers (NO sharp wing-like shapes) */}
        <div className="absolute top-8 sm:top-12 inset-x-0 h-24 opacity-25 animate-clouds-slow flex w-[200%] pointer-events-none">
          <div className="w-1/2 flex items-center justify-around">
            <div className="w-72 h-10 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-md" />
            <div className="w-96 h-12 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent blur-lg" />
            <div className="w-64 h-8 rounded-full bg-gradient-to-r from-transparent via-white/35 to-transparent blur-md" />
          </div>
          <div className="w-1/2 flex items-center justify-around">
            <div className="w-72 h-10 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-md" />
            <div className="w-96 h-12 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent blur-lg" />
            <div className="w-64 h-8 rounded-full bg-gradient-to-r from-transparent via-white/35 to-transparent blur-md" />
          </div>
        </div>

        {/* ================= SMALL, DISTANT, REALISTIC SEAGULLS IN HIGH SKY ================= */}
        {/* Tiny flock high in the distance (14px - 16px wide, delicate silhouettes) */}
        <div className="absolute top-8 left-0 pointer-events-none animate-bird-flight-1 z-10">
          <div className="flex items-center gap-4 opacity-75">
            {/* Seagull 1 (Leader) */}
            <svg
              viewBox="0 0 32 14"
              className="text-white/85 shrink-0 animate-bird-wing"
              style={{ width: "16px", height: "7px" }}
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
              style={{ width: "13px", height: "6px" }}
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
              style={{ width: "11px", height: "5px" }}
            >
              <path
                d="M 1,9 Q 7,1 15,6 Q 23,1 31,9 Q 23,4 16,8 Q 9,4 1,9 Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* Second Small Seagull Pair (Distant glide) */}
        <div className="absolute top-16 left-0 pointer-events-none animate-bird-flight-2 z-10">
          <div className="flex items-center gap-5 opacity-65">
            {/* Seagull 4 */}
            <svg
              viewBox="0 0 32 14"
              className="text-white/70 shrink-0 animate-bird-wing"
              style={{ width: "14px", height: "6px" }}
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
              style={{ width: "10px", height: "5px" }}
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
          Comfortable top clearance ensures headline is 100% visible below navbar.
          ========================================================================= */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 w-full text-center space-y-2.5 sm:space-y-3.5">
        
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
        <div className="pt-1 flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          <Link
            href="/book-cab"
            className="w-full sm:w-auto px-7 sm:px-8 py-3 rounded-full bg-gradient-to-r from-[#D9A52B] via-[#E5B543] to-[#C99320] text-[#062F31] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(217,165,43,0.45),inset_0_1px_0_rgba(255,255,255,0.6)] hover:brightness-105 active:scale-[0.98] transition-all group cursor-pointer border border-[#F2C868]/60"
          >
            <Car className="w-4 h-4 text-[#062F31]" />
            <span>Book Your Cab Now</span>
            <ArrowRight className="w-4 h-4 text-[#062F31] group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/book-tour"
            className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/30 hover:border-[#D9A52B]/70 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98] cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#D9A52B]" />
            <span>Explore Curated Tours</span>
          </Link>
        </div>

      </div>

      {/* =========================================================================
          LAYER 3: RICH REALISTIC ODISHA ENVIRONMENT & HIGHWAY
          Full architectural fidelity for Puri Jagannath Rekha Deula temple,
          13th-century Konark Sun Temple chariot wheel, coastal sand dunes,
          Bay of Bengal surf, coconut palms & casuarina pines.
          ========================================================================= */}
      <div className="relative z-10 w-full mt-auto">
        
        {/* ================= HIGH-FIDELITY SCENIC ODISHA PANORAMA (MIDGROUND) ================= */}
        <div className="relative w-full h-32 sm:h-40 -mb-2 pointer-events-none overflow-hidden">
          <svg viewBox="0 0 1440 200" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              {/* Distant Eastern Ghats Mist Gradient */}
              <linearGradient id="distantHillsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#08373B" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#042629" stopOpacity="0.85" />
              </linearGradient>

              {/* Bay of Bengal Ocean Gradient */}
              <linearGradient id="oceanWaterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#05454C" />
                <stop offset="60%" stopColor="#085B64" />
                <stop offset="100%" stopColor="#0A3C40" />
              </linearGradient>

              {/* Golden Chandrabhaga Beach Sand Dunes */}
              <linearGradient id="sandDunesGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#B45309" stopOpacity="0.65" />
                <stop offset="40%" stopColor="#78350F" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#042629" stopOpacity="0.98" />
              </linearGradient>

              {/* Puri Jagannath Temple Sandstone Gradients */}
              <linearGradient id="jagannathSunlit" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D97706" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
              <linearGradient id="jagannathShadow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#92400E" />
                <stop offset="70%" stopColor="#78350F" />
                <stop offset="100%" stopColor="#451A03" />
              </linearGradient>
              <linearGradient id="jagannathPlinth" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#92400E" />
                <stop offset="100%" stopColor="#451A03" />
              </linearGradient>
              <linearGradient id="amalakaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#78350F" />
              </linearGradient>
              <linearGradient id="holyFlagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DC2626" />
                <stop offset="50%" stopColor="#EA580C" />
                <stop offset="100%" stopColor="#FBBF24" />
              </linearGradient>

              {/* Konark 13th-Century Wheel Sandstone Gradients */}
              <linearGradient id="konarkRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D97706" />
                <stop offset="40%" stopColor="#B45309" />
                <stop offset="80%" stopColor="#78350F" />
                <stop offset="100%" stopColor="#451A03" />
              </linearGradient>
              <linearGradient id="konarkHubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="60%" stopColor="#B45309" />
                <stop offset="100%" stopColor="#451A03" />
              </linearGradient>
              <linearGradient id="konarkPlinthGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#92400E" />
                <stop offset="100%" stopColor="#451A03" />
              </linearGradient>

              {/* Botanical Gradients (Palm Bark & Lush Foliage) */}
              <linearGradient id="palmBarkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#451A03" />
                <stop offset="50%" stopColor="#78350F" />
                <stop offset="100%" stopColor="#291102" />
              </linearGradient>
              <linearGradient id="palmFrondGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#15803D" />
                <stop offset="40%" stopColor="#166534" />
                <stop offset="80%" stopColor="#0B4E47" />
                <stop offset="100%" stopColor="#032628" />
              </linearGradient>
              <linearGradient id="casuarinaFoliage" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0F766E" />
                <stop offset="50%" stopColor="#115E59" />
                <stop offset="100%" stopColor="#042F2E" />
              </linearGradient>
            </defs>

            {/* 1. Distant Eastern Ghats Soft Mountain Ridges */}
            <path
              d="M 0,165 Q 240,115 500,135 T 1000,125 T 1440,150 L 1440,200 L 0,200 Z"
              fill="url(#distantHillsGrad)"
            />

            {/* 2. Bay of Bengal Glistening Ocean Layer */}
            <path
              d="M 0,172 Q 350,145 720,158 T 1440,165 L 1440,200 L 0,200 Z"
              fill="url(#oceanWaterGrad)"
            />

            {/* 3. Rolling Ocean Surf Foam Lines */}
            <path
              d="M 0,168 Q 180,160 360,168 T 720,168 T 1080,168 T 1440,168"
              stroke="#A7F3D0"
              strokeWidth="1.6"
              strokeOpacity="0.45"
              fill="none"
              className="animate-ocean-wave-roll"
            />
            <path
              d="M 0,173 Q 200,167 400,173 T 800,173 T 1200,173 T 1440,173"
              stroke="#E0F2FE"
              strokeWidth="1"
              strokeOpacity="0.35"
              fill="none"
              className="animate-ocean-wave-roll"
            />

            {/* 4. Chandrabhaga Coastal Sand Dunes with Natural Curves */}
            <path
              d="M 0,200 Q 280,140 600,165 T 1150,152 T 1440,185 L 1440,200 Z"
              fill="url(#sandDunesGrad)"
            />

            {/* Dune Grass / Sea Oats Tufts */}
            <g stroke="#CA8A04" strokeWidth="1.2" strokeLinecap="round" opacity="0.6">
              <path d="M 280,165 L 276,155 M 280,165 L 282,154 M 280,165 L 286,157" />
              <path d="M 640,170 L 636,160 M 640,170 L 642,158 M 640,170 L 647,162" />
              <path d="M 1120,160 L 1116,150 M 1120,160 L 1123,148 M 1120,160 L 1127,152" />
            </g>

            {/* ================= 5. SACRED PURI JAGANNATH TEMPLE (REKHA DEULA) ================= */}
            <g transform="translate(420, 15)" className="filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]">
              {/* Stepped Temple Base (Bada) */}
              <rect x="25" y="165" width="90" height="20" rx="1" fill="url(#jagannathPlinth)" />
              <rect x="32" y="152" width="76" height="13" fill="#78350F" />
              <rect x="38" y="138" width="64" height="14" fill="#92400E" />
              {/* Central Sanctum Niche */}
              <rect x="63" y="155" width="14" height="18" rx="2" fill="#1C110A" />

              {/* Gandi (Curvilinear Soaring Tower) - Left Sunlit, Right Shadow */}
              <path
                d="M 38,138 C 42,92 52,50 64,28 L 70,28 L 70,138 Z"
                fill="url(#jagannathSunlit)"
              />
              <path
                d="M 70,28 L 76,28 C 88,50 98,92 102,138 L 70,138 Z"
                fill="url(#jagannathShadow)"
              />

              {/* Horizontal Kalinga Stone Tiers (Bhumi Moldings) */}
              <line x1="42" y1="124" x2="98" y2="124" stroke="#451A03" strokeWidth="1.2" opacity="0.65" />
              <line x1="46" y1="110" x2="94" y2="110" stroke="#451A03" strokeWidth="1.2" opacity="0.65" />
              <line x1="50" y1="96" x2="90" y2="96" stroke="#451A03" strokeWidth="1.2" opacity="0.65" />
              <line x1="54" y1="82" x2="86" y2="82" stroke="#451A03" strokeWidth="1.2" opacity="0.65" />
              <line x1="58" y1="68" x2="82" y2="68" stroke="#451A03" strokeWidth="1.2" opacity="0.65" />
              <line x1="62" y1="54" x2="78" y2="54" stroke="#451A03" strokeWidth="1.2" opacity="0.65" />
              <line x1="65" y1="40" x2="75" y2="40" stroke="#451A03" strokeWidth="1.2" opacity="0.65" />

              {/* Vertical Pagas Fluting Highlight */}
              <path d="M 64,138 C 66,95 68,52 70,28" stroke="#FDE68A" strokeWidth="0.8" opacity="0.45" fill="none" />
              <path d="M 76,138 C 74,95 72,52 70,28" stroke="#451A03" strokeWidth="0.8" opacity="0.45" fill="none" />

              {/* Beki (Cylindrical Neck) */}
              <rect x="66" y="24" width="8" height="4" fill="#78350F" />

              {/* Amalaka (Ribbed Stone Disc Crown) */}
              <ellipse cx="70" cy="22" rx="9" ry="3.5" fill="url(#amalakaGrad)" stroke="#B45309" strokeWidth="0.8" />
              <line x1="64" y1="19.5" x2="64" y2="24.5" stroke="#451A03" strokeWidth="0.8" />
              <line x1="67" y1="19" x2="67" y2="25" stroke="#451A03" strokeWidth="0.8" />
              <line x1="70" y1="18.5" x2="70" y2="25.5" stroke="#451A03" strokeWidth="0.8" />
              <line x1="73" y1="19" x2="73" y2="25" stroke="#451A03" strokeWidth="0.8" />
              <line x1="76" y1="19.5" x2="76" y2="24.5" stroke="#451A03" strokeWidth="0.8" />

              {/* Khapuri & Golden Kalasha */}
              <ellipse cx="70" cy="18" rx="5" ry="2" fill="#D97706" />
              <path d="M 68,18 L 70,13 L 72,18 Z" fill="#FACC15" />
              <circle cx="70" cy="12.5" r="1.8" fill="#FEF08A" />

              {/* Sacred Neelachakra (Eight-spoked wheel atop spire) */}
              <circle cx="70" cy="8" r="4.2" stroke="#38BDF8" strokeWidth="1" fill="#03262C" />
              <circle cx="70" cy="8" r="1.2" fill="#38BDF8" />
              <line x1="70" y1="4" x2="70" y2="12" stroke="#38BDF8" strokeWidth="0.6" />
              <line x1="66" y1="8" x2="74" y2="8" stroke="#38BDF8" strokeWidth="0.6" />
              <line x1="67.2" y1="5.2" x2="72.8" y2="10.8" stroke="#38BDF8" strokeWidth="0.6" />
              <line x1="67.2" y1="10.8" x2="72.8" y2="5.2" stroke="#38BDF8" strokeWidth="0.6" />

              {/* Holy Patitapabana Flag Fluttering */}
              <g className="animate-flag-flutter" style={{ transformOrigin: "70px 4px" }}>
                <path d="M 70,4 L 84,2 L 77,7 L 87,11 L 70,8 Z" fill="url(#holyFlagGrad)" />
              </g>
            </g>

            {/* ================= 6. 13TH-CENTURY KONARK SUN TEMPLE CHARIOT WHEEL ================= */}
            <g transform="translate(800, 30)" className="filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.65)]">
              {/* Carved Stone Basement Plinth */}
              <rect x="25" y="142" width="130" height="14" rx="1" fill="url(#konarkPlinthGrad)" />
              <rect x="35" y="136" width="110" height="7" fill="#78350F" />
              {/* Bas-relief carved blocks along plinth */}
              {Array.from({ length: 9 }).map((_, i) => (
                <rect
                  key={i}
                  x={38 + i * 12}
                  y="144"
                  width="8"
                  height="7"
                  rx="1"
                  fill="#451A03"
                  opacity="0.6"
                />
              ))}

              {/* Outer Wheel Rim with Carved Stone Depth */}
              <circle cx="90" cy="82" r="54" stroke="url(#konarkRimGrad)" strokeWidth="8" fill="#082A2E" />
              <circle cx="90" cy="82" r="58" stroke="#D9A52B" strokeWidth="1" fill="none" opacity="0.6" />
              <circle cx="90" cy="82" r="50" stroke="#78350F" strokeWidth="1.2" fill="none" />

              {/* 24 Carved Circular Medallions Along Rim */}
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i * 360) / 24;
                const rad = (angle * Math.PI) / 180;
                const mx = 90 + 54 * Math.cos(rad);
                const my = 82 + 54 * Math.sin(rad);
                return (
                  <circle
                    key={i}
                    cx={mx}
                    cy={my}
                    r="2.2"
                    fill="#FACC15"
                    stroke="#78350F"
                    strokeWidth="0.6"
                  />
                );
              })}

              {/* 8 Primary Carved Spokes (Thick Sundial Spokes with Carved Medallions) */}
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 360) / 8;
                const rad = (angle * Math.PI) / 180;
                const x2 = 90 + 49 * Math.cos(rad);
                const y2 = 82 + 49 * Math.sin(rad);
                const mx = 90 + 27 * Math.cos(rad);
                const my = 82 + 27 * Math.sin(rad);
                return (
                  <g key={i}>
                    <line
                      x1="90"
                      y1="82"
                      x2={x2}
                      y2={y2}
                      stroke="#D9A52B"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="90"
                      y1="82"
                      x2={x2}
                      y2={y2}
                      stroke="#FEF08A"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <circle cx={mx} cy={my} r="3.4" fill="#F59E0B" stroke="#451A03" strokeWidth="0.8" />
                    <circle cx={mx} cy={my} r="1.4" fill="#FEF08A" />
                  </g>
                );
              })}

              {/* 8 Secondary Slender Carved Spokes */}
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 360) / 8 + 22.5;
                const rad = (angle * Math.PI) / 180;
                const x2 = 90 + 49 * Math.cos(rad);
                const y2 = 82 + 49 * Math.sin(rad);
                return (
                  <line
                    key={i}
                    x1="90"
                    y1="82"
                    x2={x2}
                    y2={y2}
                    stroke="#B45309"
                    strokeWidth="1.6"
                    strokeDasharray="3,1.5"
                  />
                );
              })}

              {/* Central Axle Hub with Concentric Carved Rings */}
              <circle cx="90" cy="82" r="15" fill="url(#konarkHubGrad)" stroke="#451A03" strokeWidth="1.5" />
              <circle cx="90" cy="82" r="10" fill="#D9A52B" stroke="#78350F" strokeWidth="1" />
              <circle cx="90" cy="82" r="4.5" fill="#FEF08A" stroke="#000000" strokeWidth="0.8" />
            </g>

            {/* ================= 7. COASTAL COCONUT PALMS & CASUARINA CONIFERS ================= */}
            {/* Left Coconut Palm (Curving naturally towards coastal highway) */}
            <g transform="translate(140, 20)">
              {/* Natural Curved Segmented Bark Trunk */}
              <path
                d="M 28,175 Q 22,105 38,55 Q 42,40 48,28"
                stroke="url(#palmBarkGrad)"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 28,175 Q 22,105 38,55 Q 42,40 48,28"
                stroke="#B45309"
                strokeWidth="4"
                strokeDasharray="2,3"
                fill="none"
                opacity="0.4"
              />
              {/* Coconuts at crown */}
              <circle cx="45" cy="30" r="3" fill="#58310C" />
              <circle cx="50" cy="31" r="2.8" fill="#713F12" />
              <circle cx="47" cy="34" r="2.5" fill="#451A03" />

              {/* Cascading Lush Palm Fronds (Swaying naturally in ocean breeze) */}
              <g className="animate-leaf-flutter-left" style={{ transformOrigin: "48px 28px" }}>
                <path d="M 48,28 Q 18,16 -16,32 Q 4,14 48,28" fill="url(#palmFrondGrad)" />
                <path d="M 48,28 Q 12,-2 -10,10 Q 14,3 48,28" fill="url(#palmFrondGrad)" opacity="0.9" />
              </g>
              <g className="animate-leaf-flutter-top" style={{ transformOrigin: "48px 28px" }}>
                <path d="M 48,28 Q 42,-8 48,-20 Q 56,-2 48,28" fill="url(#palmFrondGrad)" />
              </g>
              <g className="animate-leaf-flutter-right" style={{ transformOrigin: "48px 28px" }}>
                <path d="M 48,28 Q 80,-2 105,8 Q 80,6 48,28" fill="url(#palmFrondGrad)" opacity="0.9" />
                <path d="M 48,28 Q 88,18 115,36 Q 86,22 48,28" fill="url(#palmFrondGrad)" />
              </g>
            </g>

            {/* Left Roadside Casuarina Conifer (Jhāu Tree) */}
            <g transform="translate(45, 35)">
              <rect x="20" y="55" width="6" height="120" fill="url(#palmBarkGrad)" rx="1.5" />
              <g className="animate-foliage-shimmer" style={{ transformOrigin: "23px 175px" }}>
                <path d="M 23,12 C 38,28 42,50 23,50 C 4,50 8,28 23,12 Z" fill="url(#casuarinaFoliage)" />
                <path d="M 23,32 C 42,52 46,76 23,76 C 0,76 4,52 23,32 Z" fill="url(#casuarinaFoliage)" opacity="0.92" />
                <path d="M 23,56 C 48,78 52,104 23,104 C -6,104 -2,78 23,56 Z" fill="url(#casuarinaFoliage)" opacity="0.96" />
              </g>
            </g>

            {/* Right Roadside Casuarina Conifer (Jhāu Tree) */}
            <g transform="translate(1330, 35)">
              <rect x="20" y="55" width="6" height="120" fill="url(#palmBarkGrad)" rx="1.5" />
              <g className="animate-foliage-shimmer-fast" style={{ transformOrigin: "23px 175px" }}>
                <path d="M 23,12 C 38,28 42,50 23,50 C 4,50 8,28 23,12 Z" fill="url(#casuarinaFoliage)" />
                <path d="M 23,32 C 42,52 46,76 23,76 C 0,76 4,52 23,32 Z" fill="url(#casuarinaFoliage)" opacity="0.92" />
                <path d="M 23,56 C 48,78 52,104 23,104 C -6,104 -2,78 23,56 Z" fill="url(#casuarinaFoliage)" opacity="0.96" />
              </g>
            </g>

            {/* Right Second Coconut Palm (Curving left) */}
            <g transform="translate(1220, 30)">
              <path
                d="M 38,165 Q 44,105 32,58 Q 28,42 22,30"
                stroke="url(#palmBarkGrad)"
                strokeWidth="4.5"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="20" cy="32" r="2.8" fill="#58310C" />
              <circle cx="25" cy="33" r="2.5" fill="#713F12" />

              <g className="animate-leaf-flutter-left" style={{ transformOrigin: "22px 30px" }}>
                <path d="M 22,30 Q -4,18 -32,34 Q -12,16 22,30" fill="url(#palmFrondGrad)" />
                <path d="M 22,30 Q -10,0 -26,12 Q -2,4 22,30" fill="url(#palmFrondGrad)" opacity="0.9" />
              </g>
              <g className="animate-leaf-flutter-top" style={{ transformOrigin: "22px 30px" }}>
                <path d="M 22,30 Q 18,-6 22,-16 Q 30,-2 22,30" fill="url(#palmFrondGrad)" />
              </g>
              <g className="animate-leaf-flutter-right" style={{ transformOrigin: "22px 30px" }}>
                <path d="M 22,30 Q 52,2 74,12 Q 52,8 22,30" fill="url(#palmFrondGrad)" opacity="0.9" />
                <path d="M 22,30 Q 60,20 84,38 Q 58,24 22,30" fill="url(#palmFrondGrad)" />
              </g>
            </g>

          </svg>
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

        {/* ================= REALISTIC FULL-WIDTH ASPHALT ROAD (DIRECTLY BENEATH TYRES) ================= */}
        <div className="w-full relative h-14 sm:h-16 bg-gradient-to-b from-[#141B1D] via-[#1A2225] to-[#0E1416] border-t-2 border-[#3A4B4E] shadow-[inset_0_4px_16px_rgba(0,0,0,0.85)] flex items-center overflow-hidden">
          
          {/* Asphalt Fine Mineral Granular Texture */}
          <div className="absolute inset-0 opacity-22 bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:4px_4px]" />

          {/* Roadside Retro-Reflective Amber Cat-Eye Studs Directly along Shoulder */}
          <div className="absolute top-1.5 inset-x-0 flex justify-around pointer-events-none opacity-85">
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#F59E0B]"
              />
            ))}
          </div>

          {/* Upper Highway Shoulder Solid Continuous White Line */}
          <div className="absolute top-2 inset-x-0 h-0.5 bg-white/80 shadow-[0_0_4px_rgba(255,255,255,0.4)]" />

          {/* ================= PASSING AUTHENTIC INDIAN NATIONAL HIGHWAY MILESTONE ================= */}
          <div className="absolute top-1 z-10 animate-passing-milestone-1 pointer-events-none">
            <div className="w-22 h-10.5 rounded-t-2xl overflow-hidden border border-black/40 shadow-2xl flex flex-col items-center">
              <div className="w-full bg-[#FACC15] text-[#062F31] font-black text-[8px] text-center py-0.5 border-b border-black/20">
                {currentMilestone.nh}
              </div>
              <div className="w-full bg-[#FFFFFF] text-[#062F31] flex flex-col items-center justify-center py-0.5 px-1 leading-tight">
                <span className="text-[7.5px] font-extrabold truncate w-full text-center">
                  {currentMilestone.name}
                </span>
                <span className="text-[8px] font-black font-mono text-[#062F31]">
                  {currentMilestone.km}
                </span>
              </div>
            </div>
          </div>

          {/* ================= PASSING HIGHWAY GANTRY SIGN ================= */}
          <div className="absolute top-1 z-10 animate-passing-milestone-2 pointer-events-none">
            <div className="p-1 px-2.5 rounded-lg bg-[#073B3A] border border-[#D9A52B] text-white shadow-xl flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#10B981] text-white flex items-center justify-center font-black text-[7.5px]">
                STA
              </div>
              <div>
                <div className="text-[8px] font-black uppercase tracking-wider text-[#D9A52B]">
                  ODISHA COMMERCIAL HIGHWAY
                </div>
                <div className="text-[7px] text-white/80">100% Commercial Fleet • Zero Surge</div>
              </div>
            </div>
          </div>

          {/* Moving Dashed Center Yellow Lane Divider Stripes */}
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
          <div className="absolute bottom-1.5 inset-x-0 h-0.5 bg-white/80 shadow-[0_0_4px_rgba(255,255,255,0.4)]" />

        </div>

      </div>

      {/* =========================================================================
          LAYER 4: BOTTOM FOUNDATIONAL SERVICE GUARANTEES
          ========================================================================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full pt-1 pb-1 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-white/90">
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
