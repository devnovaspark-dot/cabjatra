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
import { COMPANY_CONFIG } from "@/data/company";

type TimeOfDay = "sunrise" | "day" | "sunset" | "night";

interface MilestoneDestination {
  nh: string;
  name: string;
  km: string;
}

const PASSING_MILESTONES: MilestoneDestination[] = [
  { nh: "NH 316", name: "Puri Dham", km: "60 KM" },
  { nh: "NH 316A", name: "Konark", km: "65 KM" },
  { nh: "OD-SH", name: "Marine Drive", km: "35 KM" },
  { nh: "NH 16", name: "Chilika", km: "105 KM" },
  { nh: "BBI-AIR", name: "BBI Airport", km: "00 KM" },
];

// Pure automatic real-time daily astronomical cycle calculation
const getRealtimeTimeOfDay = (): TimeOfDay => {
  if (typeof window === "undefined") return "day";
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const time = hour + minute / 60;

  // Real-time daily cycle based on Indian Standard Time:
  // 05:00 - 06:45: Sunrise (Dawn)
  // 06:45 - 16:45: Daytime
  // 16:45 - 18:30: Sunset (Golden Hour / Dusk)
  // 18:30 - 05:00: Night (Starlit Sky & Moon)
  if (time >= 5.0 && time < 6.75) return "sunrise";
  if (time >= 6.75 && time < 16.75) return "day";
  if (time >= 16.75 && time < 18.5) return "sunset";
  return "night";
};

export const HeroSection: React.FC = () => {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("day");
  const [milestoneIndex, setMilestoneIndex] = useState(0);

  // Automatically update the environment based on real-time daily cycle
  useEffect(() => {
    setTimeOfDay(getRealtimeTimeOfDay());
    const interval = setInterval(() => {
      setTimeOfDay(getRealtimeTimeOfDay());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // Smoothly cycle through passing milestone signposts every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setMilestoneIndex((prev) => (prev + 1) % PASSING_MILESTONES.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const currentMilestone = PASSING_MILESTONES[milestoneIndex];

  return (
    <section className="relative text-white overflow-hidden min-h-[88vh] sm:min-h-[92vh] flex flex-col justify-between pt-24 sm:pt-28 pb-4 sm:pb-6 border-b border-[#D9A52B]/35 select-none transition-colors duration-1000 bg-[#073B3A]">
      
      {/* =========================================================================
          LAYER 1: CINEMATIC ODISHA SKY (CLEAN SKY BEHIND NAVBAR - NO SCENERY OVERLAP)
          ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Dynamic Sky Gradient according to Realtime Day / Sunset / Night */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ${
            timeOfDay === "sunrise"
              ? "bg-gradient-to-b from-[#181D3B] via-[#7B1D3A] via-40% via-[#B45309] to-[#083533]"
              : timeOfDay === "day"
              ? "bg-gradient-to-b from-[#063842] via-[#084A54] via-40% to-[#0A4E4E]"
              : timeOfDay === "sunset"
              ? "bg-gradient-to-b from-[#18163B] via-[#7B241C] via-35% via-[#A04000] to-[#083533]"
              : "bg-gradient-to-b from-[#010C0E] via-[#02181A] via-45% to-[#042426]"
          }`}
        />

        {/* Ambient Atmospheric Skylight Depth Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/35 pointer-events-none" />

        {/* ================= STARFIELD (NIGHT ONLY) ================= */}
        {timeOfDay === "night" && (
          <div className="absolute inset-0 transition-opacity duration-1000 opacity-60">
            <div className="absolute inset-0 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
            <div className="absolute inset-0 bg-[radial-gradient(#FDE047_1.5px,transparent_1.5px)] [background-size:68px_68px] opacity-50" />
            <span className="absolute top-16 left-[22%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#FFF] animate-pulse" />
            <span className="absolute top-28 left-[48%] w-1 h-1 rounded-full bg-[#FEF08A] shadow-[0_0_6px_#FEF08A] animate-ping" />
            <span className="absolute top-12 left-[74%] w-1.5 h-1.5 rounded-full bg-[#93C5FD] shadow-[0_0_8px_#93C5FD] animate-pulse" />
          </div>
        )}

        {/* ================= CELESTIAL ORBS: REALISTIC SUN / MOON ================= */}
        {timeOfDay === "sunrise" && (
          <div className="absolute top-24 sm:top-28 right-16 sm:right-36 pointer-events-none transition-all duration-1000">
            <div className="absolute -inset-14 rounded-full bg-[#F43F5E]/25 blur-3xl animate-celestial-pulse" />
            <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#FBBF24] via-[#F43F5E] to-[#FFFBEB] shadow-[0_0_50px_rgba(251,191,36,0.7)]" />
          </div>
        )}

        {timeOfDay === "day" && (
          <div className="absolute top-8 sm:top-12 right-12 sm:right-28 pointer-events-none transition-all duration-1000">
            <div className="absolute -inset-10 rounded-full bg-[#FEF08A]/20 blur-3xl animate-celestial-pulse" />
            <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-[#FDE047] via-[#FFFBEB] to-[#FFFFFF] shadow-[0_0_45px_rgba(254,240,138,0.85)]" />
            <div className="absolute top-1/2 -left-20 -right-20 h-0.5 bg-gradient-to-r from-transparent via-[#FEF08A]/35 to-transparent blur-xs -translate-y-1/2" />
          </div>
        )}

        {timeOfDay === "sunset" && (
          <div className="absolute top-20 sm:top-24 right-16 sm:right-36 pointer-events-none transition-all duration-1000">
            <div className="absolute -inset-16 rounded-full bg-[#EA580C]/35 blur-3xl animate-celestial-pulse" />
            <div className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-gradient-to-b from-[#FEF08A] via-[#F97316] to-[#DC2626] shadow-[0_0_55px_rgba(249,115,22,0.8)]" />
          </div>
        )}

        {timeOfDay === "night" && (
          <div className="absolute top-10 sm:top-14 right-14 sm:right-32 pointer-events-none transition-all duration-1000">
            <div className="absolute -inset-12 rounded-full bg-[#FEF08A]/15 blur-2xl animate-celestial-pulse" />
            <svg
              className="relative w-14 h-14 sm:w-18 sm:h-18 drop-shadow-[0_0_24px_rgba(254,240,138,0.65)]"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="moonGlowGrad" cx="38%" cy="38%" r="65%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="55%" stopColor="#FEF9C3" />
                  <stop offset="85%" stopColor="#E2E8F0" />
                  <stop offset="100%" stopColor="#CBD5E1" />
                </radialGradient>
                <radialGradient id="craterDarkGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.65" />
                  <stop offset="100%" stopColor="#475569" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="50" cy="50" r="46" fill="url(#moonGlowGrad)" />
              <ellipse cx="38" cy="36" rx="14" ry="11" fill="url(#craterDarkGrad)" />
              <ellipse cx="58" cy="42" rx="12" ry="14" fill="url(#craterDarkGrad)" />
              <ellipse cx="44" cy="64" rx="16" ry="10" fill="url(#craterDarkGrad)" />
              <circle cx="36" cy="34" r="4.5" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.45" fill="none" />
            </svg>
          </div>
        )}

        {/* ================= VOLUMETRIC HIGH CLOUDS ================= */}
        <div className="absolute top-8 sm:top-12 inset-x-0 h-24 sm:h-28 opacity-30 animate-clouds-slow flex w-[200%] pointer-events-none">
          <svg viewBox="0 0 1400 100" className="w-1/2 h-full fill-current" preserveAspectRatio="none">
            <defs>
              <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop
                  offset="0%"
                  stopColor={timeOfDay === "night" ? "#CBD5E1" : "#FFFFFF"}
                  stopOpacity="0.8"
                />
                <stop offset="100%" stopColor="#0B4E54" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 60,60 Q 110,20 180,40 Q 240,10 310,35 Q 380,20 430,60 Q 250,75 60,60 Z"
              fill="url(#cloudGrad)"
            />
            <path
              d="M 600,55 Q 660,15 730,38 Q 810,10 880,42 Q 950,25 1000,58 Q 800,72 600,55 Z"
              fill="url(#cloudGrad)"
            />
          </svg>
          <svg viewBox="0 0 1400 100" className="w-1/2 h-full fill-current" preserveAspectRatio="none">
            <path
              d="M 60,60 Q 110,20 180,40 Q 240,10 310,35 Q 380,20 430,60 Q 250,75 60,60 Z"
              fill="url(#cloudGrad)"
            />
            <path
              d="M 600,55 Q 660,15 730,38 Q 810,10 880,42 Q 950,25 1000,58 Q 800,72 600,55 Z"
              fill="url(#cloudGrad)"
            />
          </svg>
        </div>

        {/* ================= HIGH-ALTITUDE GLIDING COASTAL BIRDS ================= */}
        <div className="absolute top-20 left-0 w-56 h-12 pointer-events-none animate-bird-flight-1">
          <div className="flex items-center gap-5 opacity-70">
            <svg viewBox="0 0 50 24" className="w-6 h-3.5 text-white/80">
              <ellipse cx="25" cy="13" rx="7" ry="2" fill="currentColor" />
              <g className="animate-bird-wing">
                <path d="M 23,12 Q 17,2 9,1 Q 14,8 21,13 Z" fill="currentColor" />
                <path d="M 27,12 Q 33,2 41,1 Q 36,8 29,13 Z" fill="currentColor" />
              </g>
            </svg>
            <svg viewBox="0 0 50 24" className="w-4.5 h-2.5 -mt-2 text-white/65">
              <ellipse cx="25" cy="13" rx="5" ry="1.5" fill="currentColor" />
              <g className="animate-bird-wing-fast">
                <path d="M 23,12 Q 18,3 10,2 Q 15,8 21,13 Z" fill="currentColor" />
                <path d="M 27,12 Q 32,3 40,2 Q 35,8 29,13 Z" fill="currentColor" />
              </g>
            </svg>
          </div>
        </div>

        {/* =========================================================================
            LAYER 1B: REALISTIC ODISHA COASTAL LANDSCAPE (ANCHORED IN LOWER THIRD)
            (Sits right above the highway, leaving the top 70% clear of any navbar collision)
            ========================================================================= */}
        <div className="absolute bottom-20 sm:bottom-24 inset-x-0 h-28 sm:h-34 pointer-events-none overflow-hidden opacity-95">
          <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              {/* Natural Tree Wood */}
              <linearGradient id="treeBarkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3E2718" />
                <stop offset="100%" stopColor="#1E130B" />
              </linearGradient>

              {/* Foliage Green with Realism */}
              <linearGradient id="foliageNaturalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0E5852" />
                <stop offset="60%" stopColor="#083E3B" />
                <stop offset="100%" stopColor="#042628" />
              </linearGradient>

              {/* Temple Dignified Stone */}
              <linearGradient id="templeDignifiedStone" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0D4B4E" />
                <stop offset="50%" stopColor="#08373A" />
                <stop offset="100%" stopColor="#031F21" />
              </linearGradient>

              {/* Distant Misty Coastal Ridge */}
              <linearGradient id="distantMistyRidge" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0A3C40" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#041E20" stopOpacity="0.9" />
              </linearGradient>

              {/* Coastal Golden Dune Horizon */}
              <linearGradient id="duneHorizonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#785317" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#052628" stopOpacity="0.95" />
              </linearGradient>
            </defs>

            {/* Distant Misty Hill Ridge */}
            <path
              d="M 0,120 Q 220,70 480,85 T 980,75 T 1440,120 Z"
              fill="url(#distantMistyRidge)"
            />

            {/* Rolling Bay of Bengal Horizon Surf */}
            <path
              d="M 0,120 Q 300,90 600,105 T 1200,95 T 1440,120 Z"
              fill="url(#duneHorizonGrad)"
            />

            {/* Ocean Foam Surf Line */}
            <path
              d="M 0,108 Q 150,96 300,108 T 600,108 T 900,108 T 1200,108 T 1440,108"
              stroke="#A7F3D0"
              strokeWidth="1.2"
              strokeOpacity="0.4"
              fill="none"
              className="animate-ocean-wave-roll"
            />

            {/* ================= LEFT CASUARINA GROVE (STATIONARY ROOTED TRUNKS) ================= */}
            <g>
              <rect x="52" y="55" width="5" height="65" fill="url(#treeBarkGrad)" rx="1.5" />
              <g className="animate-foliage-shimmer">
                <polygon points="54,20 68,55 40,55" fill="url(#foliageNaturalGrad)" />
                <polygon points="54,40 73,78 35,78" fill="url(#foliageNaturalGrad)" opacity="0.9" />
                <polygon points="54,60 78,100 30,100" fill="url(#foliageNaturalGrad)" opacity="0.95" />
              </g>
            </g>

            {/* ================= NATURAL ODISHA COCONUT PALM (ROOTED TRUNK, WAVING LEAVES) ================= */}
            <g transform="translate(105, 0)">
              {/* Firm Grounded Trunk (Zero movement) */}
              <path
                d="M 18,120 Q 14,80 24,42 Q 28,34 32,26"
                stroke="url(#treeBarkGrad)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="30" cy="27" r="2.5" fill="#58310C" />
              <circle cx="34" cy="28" r="2.2" fill="#713F12" />

              {/* Leaves Waving Gracefully in Sea Breeze */}
              <g className="animate-leaf-flutter-left">
                <path d="M 32,26 Q 8,16 -18,28 Q -2,14 32,26" fill="url(#foliageNaturalGrad)" />
                <path d="M 32,26 Q 5,4 -10,12 Q 2,12 32,26" fill="url(#foliageNaturalGrad)" opacity="0.9" />
              </g>
              <g className="animate-leaf-flutter-top">
                <path d="M 32,26 Q 28,0 31,-10 Q 37,2 32,26" fill="url(#foliageNaturalGrad)" />
              </g>
              <g className="animate-leaf-flutter-right">
                <path d="M 32,26 Q 55,2 72,10 Q 54,12 32,26" fill="url(#foliageNaturalGrad)" opacity="0.9" />
                <path d="M 32,26 Q 62,18 80,32 Q 60,20 32,26" fill="url(#foliageNaturalGrad)" />
              </g>
            </g>

            {/* Casuarina Tree 2 */}
            <g>
              <rect x="200" y="65" width="5" height="55" fill="url(#treeBarkGrad)" rx="1.5" />
              <g className="animate-foliage-shimmer-fast">
                <polygon points="202,32 215,62 189,62" fill="url(#foliageNaturalGrad)" />
                <polygon points="202,50 220,85 184,85" fill="url(#foliageNaturalGrad)" opacity="0.9" />
              </g>
            </g>

            {/* ================= THE SACRED PURI JAGANNATH TEMPLE SHIKHARA ================= */}
            <g transform="translate(370, 0)">
              {/* Rekha Deula Curvilinear Spire */}
              <path
                d="M 44,120 L 56,70 L 66,30 L 73,14 L 77,8 L 81,14 L 88,30 L 98,70 L 110,120 Z"
                fill="url(#templeDignifiedStone)"
                stroke="#14B8A6"
                strokeWidth="1"
                strokeOpacity="0.3"
              />
              {/* Stepped Kalinga Ridges */}
              <line x1="58" y1="70" x2="96" y2="70" stroke="#2DD4BF" strokeWidth="0.8" opacity="0.4" />
              <line x1="62" y1="52" x2="92" y2="52" stroke="#2DD4BF" strokeWidth="0.8" opacity="0.4" />
              <line x1="68" y1="36" x2="86" y2="36" stroke="#2DD4BF" strokeWidth="0.8" opacity="0.4" />

              {/* Neela Chakra */}
              <circle cx="77" cy="7" r="4.5" stroke="#D9A52B" strokeWidth="1.4" fill="#042F31" />
              <circle cx="77" cy="7" r="1.5" fill="#FACC15" />

              {/* Saffron Flag Fluttering */}
              <g className="animate-flag-flutter" transform="translate(77, 4)">
                <polygon points="0,0 18,-4 0,-8" fill="#EA580C" />
                <polygon points="0,0 13,-3 0,-6" fill="#F97316" />
              </g>

              {/* Jagamohana Pyramid Hall */}
              <polygon
                points="98,120 120,78 142,120"
                fill="url(#templeDignifiedStone)"
                stroke="#14B8A6"
                strokeWidth="0.8"
                strokeOpacity="0.25"
              />
            </g>

            {/* ================= THE 13TH-CENTURY KONARK SUN TEMPLE CHARIOT WHEEL ================= */}
            <g transform="translate(680, 24)">
              <polygon points="0,96 35,42 70,96" fill="url(#templeDignifiedStone)" opacity="0.85" />
              {/* Chariot Wheel */}
              <circle cx="120" cy="70" r="26" stroke="#D9A52B" strokeWidth="2.5" fill="#032628" />
              <circle cx="120" cy="70" r="22" stroke="#2DD4BF" strokeWidth="1" fill="none" opacity="0.5" />
              <circle cx="120" cy="70" r="6.5" fill="#D9A52B" stroke="#000000" strokeWidth="0.8" />
              <line x1="120" y1="44" x2="120" y2="96" stroke="#FDE047" strokeWidth="1.6" />
              <line x1="94" y1="70" x2="146" y2="70" stroke="#FDE047" strokeWidth="1.6" />
              <line x1="102" y1="52" x2="138" y2="88" stroke="#D9A52B" strokeWidth="1.2" />
              <line x1="102" y1="88" x2="138" y2="52" stroke="#D9A52B" strokeWidth="1.2" />
            </g>

            {/* ================= CHILIKA LAGOON WATERS & FISHING BOAT ================= */}
            <g transform="translate(980, 52)">
              <path d="M 35,52 Q 55,62 75,52 L 70,48 L 40,48 Z" fill="#2E1D13" stroke="#D9A52B" strokeWidth="0.8" />
              <polygon points="55,48 55,16 72,42" fill="#F8FAFC" opacity="0.8" />
              <path d="M 85,68 Q 135,28 185,68" stroke="#083E3B" strokeWidth="2" fill="none" opacity="0.6" />
            </g>

            {/* ================= RIGHT CASUARINA FOREST ================= */}
            <g>
              <rect x="1330" y="65" width="5" height="55" fill="url(#treeBarkGrad)" rx="1.5" />
              <g className="animate-foliage-shimmer">
                <polygon points="1332,25 1346,60 1318,60" fill="url(#foliageNaturalGrad)" />
                <polygon points="1332,45 1352,85 1312,85" fill="url(#foliageNaturalGrad)" opacity="0.9" />
              </g>
            </g>
          </svg>
        </div>

      </div>

      {/* =========================================================================
          LAYER 2: ULTRA-CLEAN HERO BRANDING, HIGH-CONVERTING HEADLINE & CTAS
          (NO CLUTTER, NO CARDS, NO SPEED GIMMICKS - PURE LUXURY & TRUST)
          ========================================================================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-center space-y-3.5 sm:space-y-4 my-auto">
        
        {/* Status Trust Pill with Live Beacon */}
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#D9A52B]/50 text-xs font-semibold text-[#D9A52B] shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
            </span>
            <span>Verified Odisha Highway Network • Direct Dispatch Across 30 Districts</span>
          </div>
        </div>

        {/* Short, Direct, High-Converting Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold font-display tracking-tight text-white leading-tight sm:leading-[1.08] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
          Book Reliable Cabs <br />
          <span className="italic font-display font-normal text-[#D9A52B]">
            Across Odisha.
          </span>
        </h1>

        {/* Clear Concise Subtitle */}
        <p className="text-xs sm:text-base lg:text-lg text-white/95 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-md">
          Punctual BBI airport pickups, outstation highway transfers &amp; sacred temple circuits. 100% yellow-board commercial fleet, zero surge pricing &amp; guaranteed on-time dispatch.
        </p>

        {/* Action CTAs */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          <Link
            href="/book-cab"
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D9A52B] via-[#E5B543] to-[#C99320] text-[#062F31] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(217,165,43,0.45),inset_0_1px_0_rgba(255,255,255,0.6)] hover:brightness-105 active:scale-[0.98] transition-all group cursor-pointer border border-[#F2C868]/60"
          >
            <Car className="w-4 h-4 text-[#062F31]" />
            <span>Book Your Cab Now</span>
            <ArrowRight className="w-4 h-4 text-[#062F31] group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/book-tour"
            className="w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-full bg-black/55 hover:bg-black/75 backdrop-blur-md border border-white/25 hover:border-[#D9A52B]/70 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98] cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#D9A52B]" />
            <span>Explore Curated Tours</span>
          </Link>
        </div>
      </div>

      {/* =========================================================================
          LAYER 3: REALISTIC FULL-WIDTH OPEN HIGHWAY (NOT IN A BOX)
          (Edge-to-edge highway with running branded cab and passing milestones)
          ========================================================================= */}
      <div className="relative z-10 w-full mt-auto overflow-hidden">
        
        {/* Full-Width Asphalt Highway Deck */}
        <div className="w-full relative h-26 sm:h-30 bg-gradient-to-b from-[#131A1C] via-[#1B2325] to-[#101517] border-y border-[#3A4B4E] flex items-center overflow-hidden shadow-[inset_0_4px_12px_rgba(0,0,0,0.8)]">
          
          {/* Real Asphalt Fine Mineral Texture */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:4px_4px]" />

          {/* Highway Steel Guardrail along the Top Shoulder Verge */}
          <div className="absolute top-0 inset-x-0 h-2 bg-[#263133] border-b border-[#3E4F52] flex items-center pointer-events-none">
            <div className="w-full h-0.5 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 opacity-60" />
          </div>

          {/* Roadside Retro-Reflective Amber Cat-Eye Studs */}
          <div className="absolute top-3.5 inset-x-0 flex justify-around pointer-events-none opacity-85">
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#F59E0B]"
              />
            ))}
          </div>

          {/* Upper Highway Shoulder Solid Continuous White Line */}
          <div className="absolute top-4 inset-x-0 h-0.5 bg-white/75 shadow-[0_0_4px_rgba(255,255,255,0.4)]" />

          {/* ================= AUTHENTIC PASSING INDIAN NATIONAL HIGHWAY MILESTONE 1 ================= */}
          <div className="absolute top-1.5 z-10 animate-passing-milestone-1 pointer-events-none">
            <div className="w-22 h-10.5 rounded-t-2xl overflow-hidden border border-black/40 shadow-2xl flex flex-col items-center">
              <div className="w-full bg-[#FACC15] text-[#062F31] font-black text-[8px] text-center py-0.5 border-b border-black/20">
                {currentMilestone.nh}
              </div>
              <div className="w-full bg-[#FFFFFF] text-[#062F31] flex flex-col items-center justify-center py-0.5 px-1 leading-tight">
                <span className="text-[7.5px] font-extrabold truncate w-full text-center">
                  {currentMilestone.name}
                </span>
                <span className="text-[8px] font-black font-mono text-[#B91C1C]">
                  {currentMilestone.km}
                </span>
              </div>
            </div>
          </div>

          {/* ================= PASSING HIGHWAY GANTRY MILESTONE 2 ================= */}
          <div className="absolute top-1.5 z-10 animate-passing-milestone-2 pointer-events-none">
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
          <div className="absolute bottom-3 inset-x-0 h-0.5 bg-white/75 shadow-[0_0_4px_rgba(255,255,255,0.4)]" />

          {/* ================= THE RUNNING BRANDED COMMERCIAL CAR ON OPEN HIGHWAY ================= */}
          <div className="relative z-20 left-4 sm:left-14 lg:left-24 flex items-center">
            
            {/* Suspension Micro-Bounce Chassis */}
            <div className="relative animate-car-chassis">
              
              {/* Volumetric Projector Headlight Beam */}
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

              {/* Red LED Tail Lamp Streak */}
              <div className="absolute top-[34px] -left-10 w-16 h-3 bg-gradient-to-l from-[#EF4444] to-transparent rounded-full blur-[2px] opacity-80 pointer-events-none" />

              {/* High-Fidelity Executive Commercial Sedan SVG */}
              <svg
                width="240"
                height="78"
                viewBox="0 0 250 85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-20 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.85)]"
              >
                <defs>
                  <linearGradient id="realCarBody" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop
                      offset="0%"
                      stopColor={
                        timeOfDay === "day"
                          ? "#16A34A"
                          : timeOfDay === "sunset" || timeOfDay === "sunrise"
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

                {/* Asphalt Contact Shadow */}
                <ellipse cx="125" cy="74" rx="110" ry="5.5" fill="#000000" fillOpacity="0.85" />

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

                {/* Red LED Tail Lamp */}
                <path
                  d="M 20,48 L 28,48 L 26,55 L 18,54 Z"
                  fill="#EF4444"
                  stroke="#DC2626"
                  strokeWidth="0.8"
                />
                <rect x="20" y="49" width="4" height="3" rx="0.5" fill="#FFFFFF" fillOpacity="0.8" />
              </svg>

              {/* Front Spinning Alloy Wheel */}
              <div className="absolute top-[48px] left-[165px] w-[35px] h-[35px] rounded-full z-30 animate-wheel-spin">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <circle cx="18" cy="18" r="17" fill="#18181B" stroke="#27272A" strokeWidth="2" />
                  <circle cx="18" cy="18" r="12" fill="#71717A" stroke="#E4E4E7" strokeWidth="1" />
                  <rect x="22" y="10" width="4" height="8" rx="1.5" fill="#EF4444" />
                  <line x1="18" y1="18" x2="18" y2="6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                  <line x1="18" y1="18" x2="29" y2="14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                  <line x1="18" y1="18" x2="25" y2="28" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                  <line x1="18" y1="18" x2="11" y2="28" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                  <line x1="18" y1="18" x2="7" y2="14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="18" cy="18" r="3.5" fill="#D9A52B" stroke="#000000" strokeWidth="0.6" />
                </svg>
              </div>

              {/* Rear Spinning Alloy Wheel */}
              <div className="absolute top-[48px] left-[40px] w-[35px] h-[35px] rounded-full z-30 animate-wheel-spin">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <circle cx="18" cy="18" r="17" fill="#18181B" stroke="#27272A" strokeWidth="2" />
                  <circle cx="18" cy="18" r="12" fill="#71717A" stroke="#E4E4E7" strokeWidth="1" />
                  <rect x="22" y="10" width="4" height="8" rx="1.5" fill="#EF4444" />
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

        </div>

      </div>

      {/* =========================================================================
          LAYER 4: BOTTOM FOUNDATIONAL SERVICE GUARANTEES
          ========================================================================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-white/90">
        <span className="inline-flex items-center gap-1.5 font-medium">
          <ShieldCheck className="w-4 h-4 text-[#D9A52B]" />
          <span>100% Yellow-Board Commercial Fleet</span>
        </span>
        <span className="hidden sm:inline text-white/30">&bull;</span>
        <span className="inline-flex items-center gap-1.5 font-medium">
          <CheckCircle2 className="w-4 h-4 text-[#D9A52B]" />
          <span>10% Advance Deposit Model</span>
        </span>
        <span className="hidden sm:inline text-white/30">&bull;</span>
        <span className="inline-flex items-center gap-1.5 font-medium">
          <Sparkles className="w-4 h-4 text-[#D9A52B]" />
          <span>Zero Surge Pricing Guarantee</span>
        </span>
      </div>

    </section>
  );
};
