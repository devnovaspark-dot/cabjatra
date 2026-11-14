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
    <section className="relative text-white overflow-hidden h-[100dvh] max-h-[100dvh] flex flex-col justify-between pt-24 sm:pt-28 pb-2 border-b border-[#D9A52B]/35 select-none transition-colors duration-1000 bg-[#073B3A]">
      
      {/* =========================================================================
          LAYER 1: FULL REALISTIC ODISHA ENVIRONMENT (SPANS ENTIRE BACKGROUND)
          Smoothly transitions between Morning, Afternoon, Evening, and Night.
          ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Dynamic Sky Gradient according to Realtime Morning / Afternoon / Evening / Night */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ${
            timeOfDay === "morning"
              ? "bg-gradient-to-b from-[#0e2c34] via-[#0d4f55] via-35% via-[#136868] to-[#073937]"
              : timeOfDay === "afternoon"
              ? "bg-gradient-to-b from-[#032328] via-[#06424a] via-35% via-[#0b5c63] to-[#084847]"
              : timeOfDay === "evening"
              ? "bg-gradient-to-b from-[#1c1232] via-[#7a2418] via-30% via-[#a34000] to-[#083533]"
              : "bg-gradient-to-b from-[#01090c] via-[#021518] via-40% to-[#042426]"
          }`}
        />

        {/* Ambient Atmospheric Skylight Depth Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/40 pointer-events-none" />

        {/* ================= STARFIELD (NIGHT ONLY) ================= */}
        {timeOfDay === "night" && (
          <div className="absolute inset-0 transition-opacity duration-1000 opacity-75">
            <div className="absolute inset-0 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:22px_22px] opacity-45" />
            <div className="absolute inset-0 bg-[radial-gradient(#FDE047_1.5px,transparent_1.5px)] [background-size:56px_56px] opacity-55" />
            <span className="absolute top-10 left-[18%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#FFF] animate-pulse" />
            <span className="absolute top-24 left-[44%] w-1 h-1 rounded-full bg-[#FEF08A] shadow-[0_0_6px_#FEF08A] animate-ping" />
            <span className="absolute top-8 left-[68%] w-1.5 h-1.5 rounded-full bg-[#93C5FD] shadow-[0_0_8px_#93C5FD] animate-pulse" />
            <span className="absolute top-32 left-[84%] w-1 h-1 rounded-full bg-white shadow-[0_0_6px_#FFF] animate-pulse" />
          </div>
        )}

        {/* ================= CELESTIAL ORBS: MORNING / AFTERNOON / EVENING / NIGHT ================= */}
        {/* 1. MORNING SUN (Soft Warm Golden Rise) */}
        {timeOfDay === "morning" && (
          <div className="absolute top-12 sm:top-16 right-10 sm:right-24 pointer-events-none transition-all duration-1000">
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
          <div className="absolute top-14 sm:top-18 right-10 sm:right-24 pointer-events-none transition-all duration-1000">
            <div className="absolute -inset-12 rounded-full bg-gradient-to-br from-red-500/30 via-orange-500/20 to-transparent blur-2xl animate-celestial-pulse" />
            <div className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-gradient-to-tr from-[#991B1B] via-[#EA580C] to-[#FBBF24] shadow-[0_0_70px_rgba(234,88,12,0.9)] border border-orange-200/40" />
          </div>
        )}

        {/* 4. NIGHT MOON (Luminous Moon with Crater Textures) */}
        {timeOfDay === "night" && (
          <div className="absolute top-10 sm:top-14 right-10 sm:right-24 pointer-events-none transition-all duration-1000">
            <div className="absolute -inset-8 rounded-full bg-cyan-200/10 blur-xl animate-celestial-pulse" />
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
          <div className="absolute top-0 right-6 w-[600px] h-[480px] pointer-events-none animate-sunbeams overflow-hidden">
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-200/20 via-yellow-400/5 to-transparent blur-md" />
          </div>
        )}

        {/* Volumetric Drifting Clouds */}
        <div className="absolute top-8 sm:top-10 inset-x-0 h-28 opacity-30 animate-clouds-slow flex w-[200%] pointer-events-none">
          <svg viewBox="0 0 1400 110" className="w-1/2 h-full fill-current" preserveAspectRatio="none">
            <defs>
              <linearGradient id="cloudGradReal" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={timeOfDay === "night" ? "#CBD5E1" : "#FFFFFF"} stopOpacity="0.85" />
                <stop offset="60%" stopColor={timeOfDay === "evening" ? "#FED7AA" : "#E2E8F0"} stopOpacity="0.35" />
                <stop offset="100%" stopColor="#0B4E54" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M 60,65 Q 110,20 180,42 Q 240,12 310,38 Q 380,22 430,62 Q 250,78 60,65 Z" fill="url(#cloudGradReal)" />
            <path d="M 600,60 Q 660,18 730,40 Q 810,12 880,44 Q 950,26 1000,60 Q 800,75 600,60 Z" fill="url(#cloudGradReal)" />
          </svg>
          <svg viewBox="0 0 1400 110" className="w-1/2 h-full fill-current" preserveAspectRatio="none">
            <path d="M 60,65 Q 110,20 180,42 Q 240,12 310,38 Q 380,22 430,62 Q 250,78 60,65 Z" fill="url(#cloudGradReal)" />
            <path d="M 600,60 Q 660,18 730,40 Q 810,12 880,44 Q 950,26 1000,60 Q 800,75 600,60 Z" fill="url(#cloudGradReal)" />
          </svg>
        </div>

        {/* ================= MORE REALISTIC BIRDS IN STAGGERED FLIGHT FORMATION ================= */}
        {/* Flock Leader & High V-Formation */}
        <div className="absolute top-12 left-0 w-80 h-16 pointer-events-none animate-bird-flight-1">
          <div className="flex items-center gap-5 opacity-85">
            {/* Bird 1 (Leader) */}
            <svg viewBox="0 0 50 24" className="w-6 h-3 text-white/90">
              <ellipse cx="25" cy="13" rx="7" ry="2" fill="currentColor" />
              <g className="animate-bird-wing">
                <path d="M 23,12 Q 17,2 9,1 Q 14,8 21,13 Z" fill="currentColor" />
                <path d="M 27,12 Q 33,2 41,1 Q 36,8 29,13 Z" fill="currentColor" />
              </g>
            </svg>
            {/* Bird 2 */}
            <svg viewBox="0 0 50 24" className="w-5 h-2.5 -mt-3 text-white/80">
              <ellipse cx="25" cy="13" rx="5.5" ry="1.6" fill="currentColor" />
              <g className="animate-bird-wing-fast">
                <path d="M 23,12 Q 18,3 10,2 Q 15,8 21,13 Z" fill="currentColor" />
                <path d="M 27,12 Q 32,3 40,2 Q 35,8 29,13 Z" fill="currentColor" />
              </g>
            </svg>
            {/* Bird 3 */}
            <svg viewBox="0 0 50 24" className="w-4 h-2 text-white/70">
              <ellipse cx="25" cy="13" rx="4.5" ry="1.4" fill="currentColor" />
              <g className="animate-bird-wing">
                <path d="M 23,12 Q 17,2 9,1 Q 14,8 21,13 Z" fill="currentColor" />
                <path d="M 27,12 Q 33,2 41,1 Q 36,8 29,13 Z" fill="currentColor" />
              </g>
            </svg>
            {/* Bird 4 */}
            <svg viewBox="0 0 50 24" className="w-4.5 h-2.2 -mt-4 text-white/75">
              <ellipse cx="25" cy="13" rx="5" ry="1.5" fill="currentColor" />
              <g className="animate-bird-wing-fast">
                <path d="M 23,12 Q 18,3 10,2 Q 15,8 21,13 Z" fill="currentColor" />
                <path d="M 27,12 Q 32,3 40,2 Q 35,8 29,13 Z" fill="currentColor" />
              </g>
            </svg>
          </div>
        </div>

        {/* Second Bird Pair (Gliding in lower altitude) */}
        <div className="absolute top-24 left-0 w-60 h-12 pointer-events-none animate-bird-flight-2">
          <div className="flex items-center gap-7 opacity-70">
            {/* Bird 5 */}
            <svg viewBox="0 0 50 24" className="w-5 h-2.5 text-white/80">
              <ellipse cx="25" cy="13" rx="6" ry="1.8" fill="currentColor" />
              <g className="animate-bird-wing">
                <path d="M 23,12 Q 17,2 9,1 Q 14,8 21,13 Z" fill="currentColor" />
                <path d="M 27,12 Q 33,2 41,1 Q 36,8 29,13 Z" fill="currentColor" />
              </g>
            </svg>
            {/* Bird 6 */}
            <svg viewBox="0 0 50 24" className="w-3.5 h-1.8 -mt-2 text-white/60">
              <ellipse cx="25" cy="13" rx="4" ry="1.2" fill="currentColor" />
              <g className="animate-bird-wing-fast">
                <path d="M 23,12 Q 18,3 10,2 Q 15,8 21,13 Z" fill="currentColor" />
                <path d="M 27,12 Q 32,3 40,2 Q 35,8 29,13 Z" fill="currentColor" />
              </g>
            </svg>
          </div>
        </div>

      </div>

      {/* =========================================================================
          LAYER 2: HERO BRANDING, HIGH-CONVERTING HEADLINE & CTAS (ZERO CARDS)
          Eyebrow text and milestone text below buttons REMOVED as requested.
          Comfortable top clearance ensures headline is 100% visible below navbar.
          ========================================================================= */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 w-full text-center space-y-2.5 sm:space-y-3.5">
        
        {/* Short, Direct, High-Converting Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
          Book Reliable Cabs <br />
          <span className="italic font-display font-normal text-[#D9A52B]">
            Across Odisha.
          </span>
        </h1>

        {/* Clear Concise Subtitle */}
        <p className="text-xs sm:text-sm lg:text-base text-white/95 max-w-xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
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
          LAYER 3: THE HIGHWAY ROAD PLACED DIRECTLY BENEATH THE TYRES
          AND ROADSIDE TREES & MILESTONES PLACED SIDE BY SIDE WITH THE CAR!
          ========================================================================= */}
      <div className="relative z-10 w-full mt-auto">
        
        {/* ================= SCENIC ODISHA HORIZON & ROADSIDE VERGE ================= */}
        <div className="relative w-full h-24 sm:h-30 -mb-2 pointer-events-none overflow-hidden">
          <svg viewBox="0 0 1440 140" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="treeBarkGradRoad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3E2718" />
                <stop offset="100%" stopColor="#1E130B" />
              </linearGradient>

              <linearGradient id="foliageRoadside" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10685E" />
                <stop offset="60%" stopColor="#0B4E47" />
                <stop offset="100%" stopColor="#042628" />
              </linearGradient>

              <linearGradient id="templeStoneShade" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0D4B4E" />
                <stop offset="50%" stopColor="#08373A" />
                <stop offset="100%" stopColor="#031F21" />
              </linearGradient>

              <linearGradient id="distantDunes" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6C4916" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#052628" stopOpacity="0.95" />
              </linearGradient>
            </defs>

            {/* Puri Chandrabhaga Sand Dunes */}
            <path d="M 0,140 Q 320,85 640,105 T 1250,95 T 1440,140 Z" fill="url(#distantDunes)" />

            {/* Bay of Bengal Ocean Foam Surf Line */}
            <path
              d="M 0,120 Q 150,110 300,120 T 600,120 T 900,120 T 1200,120 T 1440,120"
              stroke="#A7F3D0"
              strokeWidth="1.5"
              strokeOpacity="0.45"
              fill="none"
              className="animate-ocean-wave-roll"
            />

            {/* Sacred Puri Jagannath Temple Shikhara */}
            <g transform="translate(420, 15)">
              <path
                d="M 44,125 L 56,70 L 66,32 L 73,15 L 77,10 L 81,15 L 88,32 L 98,70 L 110,125 Z"
                fill="url(#templeStoneShade)"
                stroke="#14B8A6"
                strokeWidth="1.2"
                strokeOpacity="0.35"
              />
              <circle cx="77" cy="10" r="4.5" stroke="#D9A52B" strokeWidth="1.4" fill="#042F31" />
              <circle cx="77" cy="10" r="1.6" fill="#FACC15" />
            </g>

            {/* 13th-Century Konark Sun Temple Chariot Wheel */}
            <g transform="translate(760, 35)">
              <circle cx="100" cy="70" r="32" stroke="#D9A52B" strokeWidth="2.8" fill="#032628" />
              <circle cx="100" cy="70" r="26" stroke="#2DD4BF" strokeWidth="1" fill="none" opacity="0.5" />
              <circle cx="100" cy="70" r="8" fill="#D9A52B" stroke="#000000" strokeWidth="1" />
              <line x1="100" y1="38" x2="100" y2="102" stroke="#FDE047" strokeWidth="1.8" />
              <line x1="68" y1="70" x2="132" y2="70" stroke="#FDE047" strokeWidth="1.8" />
              <line x1="77" y1="47" x2="123" y2="93" stroke="#D9A52B" strokeWidth="1.4" />
              <line x1="77" y1="93" x2="123" y2="47" stroke="#D9A52B" strokeWidth="1.4" />
            </g>

            {/* Left Roadside Casuarina Conifer */}
            <g transform="translate(50, 30)">
              <rect x="18" y="42" width="6" height="78" fill="url(#treeBarkGradRoad)" rx="1.5" />
              <g className="animate-foliage-shimmer">
                <path d="M 21,8 C 34,22 38,42 21,42 C 4,42 8,22 21,8 Z" fill="url(#foliageRoadside)" />
                <path d="M 21,26 C 38,44 42,66 21,66 C 0,66 4,44 21,26 Z" fill="url(#foliageRoadside)" opacity="0.92" />
                <path d="M 21,48 C 44,68 48,90 21,90 C -6,90 -2,68 21,48 Z" fill="url(#foliageRoadside)" opacity="0.96" />
              </g>
            </g>

            {/* Roadside Coconut Palm */}
            <g transform="translate(160, 15)">
              <path
                d="M 20,135 Q 15,80 28,40 Q 32,28 38,18"
                stroke="url(#treeBarkGradRoad)"
                strokeWidth="4.5"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="36" cy="20" r="3" fill="#58310C" />
              <circle cx="41" cy="21" r="2.6" fill="#713F12" />

              <g className="animate-leaf-flutter-left">
                <path d="M 38,18 Q 10,8 -22,20 Q -4,8 38,18" fill="url(#foliageRoadside)" />
                <path d="M 38,18 Q 8,-6 -12,2 Q 4,2 38,18" fill="url(#foliageRoadside)" opacity="0.9" />
              </g>
              <g className="animate-leaf-flutter-top">
                <path d="M 38,18 Q 34,-8 38,-18 Q 44,-4 38,18" fill="url(#foliageRoadside)" />
              </g>
              <g className="animate-leaf-flutter-right">
                <path d="M 38,18 Q 68,-6 88,2 Q 68,4 38,18" fill="url(#foliageRoadside)" opacity="0.9" />
                <path d="M 38,18 Q 76,10 98,24 Q 74,14 38,18" fill="url(#foliageRoadside)" />
              </g>
            </g>

            {/* Right Roadside Casuarina Conifer */}
            <g transform="translate(1330, 30)">
              <rect x="18" y="42" width="6" height="78" fill="url(#treeBarkGradRoad)" rx="1.5" />
              <g className="animate-foliage-shimmer-fast">
                <path d="M 21,8 C 34,22 38,42 21,42 C 4,42 8,22 21,8 Z" fill="url(#foliageRoadside)" />
                <path d="M 21,26 C 38,44 42,66 21,66 C 0,66 4,44 21,26 Z" fill="url(#foliageRoadside)" opacity="0.92" />
                <path d="M 21,48 C 44,68 48,90 21,90 C -6,90 -2,68 21,48 Z" fill="url(#foliageRoadside)" opacity="0.96" />
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
