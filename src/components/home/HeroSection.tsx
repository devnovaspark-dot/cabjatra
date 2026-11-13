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
  Navigation,
  Flame,
  Volume2,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";

type TimeOfDay = "sunrise" | "day" | "sunset" | "night";

interface TourDestination {
  id: string;
  name: string;
  shortName: string;
  odiaName: string;
  km: string;
  nhNumber: string;
  highway: string;
  duration: string;
  tag: string;
  fare: string;
  landmarkTitle: string;
  landmarkDetail: string;
  bookLink: string;
}

const ODISHA_DESTINATIONS: TourDestination[] = [
  {
    id: "marine-drive",
    name: "Puri – Konark Marine Drive",
    shortName: "Marine Drive",
    odiaName: "ପୁରୀ-କୋଣାର୍କ ମେରାଇନ୍ ଡ୍ରାଇଭ୍",
    km: "35 KM",
    nhNumber: "OD-SH",
    highway: "Coastal Highway Corridor",
    duration: "45 mins Cruise",
    tag: "Scenic Ocean Highway",
    fare: "₹13/km Fixed",
    landmarkTitle: "Casuarina Coast & Bay of Bengal Waves",
    landmarkDetail: "Golden beach surf, whispering pine forest trails & sea breeze highway.",
    bookLink: "/book-tour",
  },
  {
    id: "puri-dham",
    name: "Sacred Puri Jagannath Dham",
    shortName: "Puri Dham",
    odiaName: "ଶ୍ରୀକ୍ଷେତ୍ର ପୁରୀ ଜଗନ୍ନାଥ ଧାମ",
    km: "60 KM",
    nhNumber: "NH 316",
    highway: "NH-316 Heritage Corridor",
    duration: "1 hr 15 mins",
    tag: "Char Dham Pilgrimage",
    fare: "₹13/km Fixed",
    landmarkTitle: "12th-Century Jagannath Temple & Bada Danda",
    landmarkDetail: "Spiritual pilgrimage corridor, holy Neela Chakra & Grand Road temple gates.",
    bookLink: "/book-cab?to=Puri",
  },
  {
    id: "konark-temple",
    name: "Konark Sun Temple",
    shortName: "Konark",
    odiaName: "କୋଣାର୍କ ସୂର୍ଯ୍ୟ ମନ୍ଦିର",
    km: "65 KM",
    nhNumber: "NH 316A",
    highway: "UNESCO Heritage Highway",
    duration: "1 hr 25 mins",
    tag: "Architectural Wonder",
    fare: "₹13/km Fixed",
    landmarkTitle: "13th-Century Monolithic Chariot Wheels",
    landmarkDetail: "Colossal Sun Temple stone wheels, coastal reserve forest & Chandrabhaga surf.",
    bookLink: "/book-cab?to=Konark",
  },
  {
    id: "chilika-lagoon",
    name: "Chilika Dolphin Lagoon",
    shortName: "Chilika",
    odiaName: "ଚିଲିକା ଡଲ୍ଫିନ୍ ହ୍ରଦ",
    km: "105 KM",
    nhNumber: "NH 16",
    highway: "NH-16 & Satapada Trail",
    duration: "2 hrs 10 mins",
    tag: "Asia's Largest Lagoon",
    fare: "₹13/km Fixed",
    landmarkTitle: "Satapada Dolphin Waters & Traditional Boats",
    landmarkDetail: "Irrawaddy dolphin sanctuary, migratory bird wetlands & Kalijai Island harbor.",
    bookLink: "/book-cab?to=Chilika",
  },
  {
    id: "bbi-airport",
    name: "BBI Airport Transit Hub",
    shortName: "BBI Airport",
    odiaName: "ଭୁବନେଶ୍ୱର ଏୟାରପୋର୍ଟ",
    km: "00 KM",
    nhNumber: "BBI-AIR",
    highway: "Bhubaneswar Capital Express",
    duration: "10 mins Standby",
    tag: "Airport Pickup",
    fare: "Flat Airport Rate",
    landmarkTitle: "Biju Patnaik International Airport Gateway",
    landmarkDetail: "Terminal 1 & 2 meet-and-greet with real-time flight arrival radar sync.",
    bookLink: "/book-cab?service=airport",
  },
];

// Pure automatic real-time daily sunrise, day, sunset, and night calculation
const getRealtimeTimeOfDay = (): TimeOfDay => {
  if (typeof window === "undefined") return "sunset";
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const time = hour + minute / 60;

  // Real-time daily astronomical cycle:
  // 05:00 - 06:45: Sunrise (Dawn / Morning Golden Hour)
  // 06:45 - 16:45: Daytime (Bright Coastal Sun)
  // 16:45 - 18:30: Sunset (Evening Golden Hour / Dusk)
  // 18:30 - 05:00: Night (Starlit Sky & Glowing Moon)
  if (time >= 5.0 && time < 6.75) return "sunrise";
  if (time >= 6.75 && time < 16.75) return "day";
  if (time >= 16.75 && time < 18.5) return "sunset";
  return "night";
};

export const HeroSection: React.FC = () => {
  const [activeDestIndex, setActiveDestIndex] = useState(0);
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("sunset");
  const [isSprint, setIsSprint] = useState(false);
  const [honkActive, setHonkActive] = useState(false);

  // Automatically update the environment based on the user's real-time daily cycle
  useEffect(() => {
    setTimeOfDay(getRealtimeTimeOfDay());
    const interval = setInterval(() => {
      setTimeOfDay(getRealtimeTimeOfDay());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // Auto-cycle through destinations every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDestIndex((prev) => (prev + 1) % ODISHA_DESTINATIONS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const activeDest = ODISHA_DESTINATIONS[activeDestIndex];
  const currentSpeed = isSprint ? 94 : 64;

  const triggerHonk = () => {
    setHonkActive(true);
    setTimeout(() => setHonkActive(false), 900);
  };

  const toggleSprint = () => {
    setIsSprint((prev) => !prev);
  };

  return (
    <section className="relative text-white overflow-hidden min-h-[92vh] sm:min-h-[98vh] flex flex-col justify-between pt-24 sm:pt-28 pb-4 sm:pb-6 border-b border-[#D9A52B]/35 select-none transition-colors duration-1000 bg-[#073B3A]">
      
      {/* =========================================================================
          LAYER 1: REALISTIC ODISHA SKY & ATMOSPHERE (AUTOMATIC REALTIME DYNAMICS)
          ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Dynamic Sky Gradient according to Realtime Day / Sunset / Night */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ${
            timeOfDay === "sunrise"
              ? "bg-gradient-to-b from-[#181D3B] via-[#7B1D3A] via-35% via-[#B45309] via-60% to-[#083533]"
              : timeOfDay === "day"
              ? "bg-gradient-to-b from-[#0B5269] via-[#0E687A] via-45% to-[#114D4C]"
              : timeOfDay === "sunset"
              ? "bg-gradient-to-b from-[#18163B] via-[#7B241C] via-35% via-[#A04000] via-60% to-[#083533]"
              : "bg-gradient-to-b from-[#011012] via-[#021A1C] via-40% to-[#05292A]"
          }`}
        />

        {/* Ambient Atmospheric Skylight Depth Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/40 pointer-events-none" />

        {/* ================= STARFIELD (NIGHT ONLY) ================= */}
        {timeOfDay === "night" && (
          <div className="absolute inset-0 transition-opacity duration-1000 opacity-60">
            {/* Fine twinkling star grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
            <div className="absolute inset-0 bg-[radial-gradient(#FDE047_1.5px,transparent_1.5px)] [background-size:68px_68px] opacity-50" />
            {/* Brighter Sirius & Polaris Constellation Stars */}
            <span className="absolute top-16 left-[22%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#FFF] animate-pulse" />
            <span className="absolute top-28 left-[48%] w-1 h-1 rounded-full bg-[#FEF08A] shadow-[0_0_6px_#FEF08A] animate-ping" />
            <span className="absolute top-12 left-[74%] w-1.5 h-1.5 rounded-full bg-[#93C5FD] shadow-[0_0_8px_#93C5FD] animate-pulse" />
            <span className="absolute top-36 left-[88%] w-1 h-1 rounded-full bg-white shadow-[0_0_5px_#FFF]" />
          </div>
        )}

        {/* ================= CELESTIAL ORBS: REALISTIC SUN / REALISTIC MOON ================= */}
        {timeOfDay === "sunrise" && (
          /* Realistic Morning Dawn Sun Emerging on Horizon */
          <div className="absolute top-24 sm:top-28 right-16 sm:right-36 pointer-events-none transition-all duration-1000">
            <div className="absolute -inset-14 rounded-full bg-[#F43F5E]/30 blur-3xl animate-celestial-pulse" />
            <div className="absolute -inset-5 rounded-full bg-[#FBBF24]/40 blur-xl" />
            <div className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-gradient-to-tr from-[#FBBF24] via-[#F43F5E] to-[#FFFBEB] shadow-[0_0_60px_rgba(251,191,36,0.8)]" />
          </div>
        )}

        {timeOfDay === "day" && (
          /* Realistic Radiant Day Sun with Solar Corona & Atmospheric Rays */
          <div className="absolute top-8 sm:top-12 right-12 sm:right-32 pointer-events-none transition-all duration-1000">
            <div className="absolute -inset-10 rounded-full bg-[#FEF08A]/25 blur-3xl animate-celestial-pulse" />
            <div className="absolute -inset-4 rounded-full bg-[#FDE047]/35 blur-xl" />
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#FDE047] via-[#FFFBEB] to-[#FFFFFF] shadow-[0_0_50px_rgba(254,240,138,0.9),0_0_100px_rgba(253,224,71,0.4)]" />
            <div className="absolute top-1/2 -left-24 -right-24 h-0.5 bg-gradient-to-r from-transparent via-[#FEF08A]/40 to-transparent blur-xs -translate-y-1/2" />
          </div>
        )}

        {timeOfDay === "sunset" && (
          /* Realistic Sinking Sunset Sun over the Bay of Bengal Horizon */
          <div className="absolute top-20 sm:top-24 right-16 sm:right-36 pointer-events-none transition-all duration-1000">
            <div className="absolute -inset-16 rounded-full bg-[#EA580C]/35 blur-3xl animate-celestial-pulse" />
            <div className="absolute -inset-6 rounded-full bg-[#F59E0B]/45 blur-xl" />
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-b from-[#FEF08A] via-[#F97316] to-[#DC2626] shadow-[0_0_60px_rgba(249,115,22,0.85),0_0_120px_rgba(220,38,38,0.5)]" />
            <div className="absolute top-1/2 -left-36 -right-36 h-1 bg-gradient-to-r from-transparent via-[#FDE047]/50 via-50% to-transparent blur-xs -translate-y-1/2" />
          </div>
        )}

        {timeOfDay === "night" && (
          /* Realistic Glowing Lunar Sphere with Geological Maria & Lunar Halos */
          <div className="absolute top-10 sm:top-14 right-14 sm:right-36 pointer-events-none transition-all duration-1000">
            <div className="absolute -inset-12 rounded-full bg-[#FEF08A]/15 blur-2xl animate-celestial-pulse" />
            <div className="absolute -inset-4 rounded-full bg-[#E2E8F0]/20 blur-md" />
            
            <svg
              className="relative w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_0_28px_rgba(254,240,138,0.7)]"
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
                  <stop offset="80%" stopColor="#64748B" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#475569" stopOpacity="0" />
                </radialGradient>
              </defs>

              <circle cx="50" cy="50" r="46" fill="url(#moonGlowGrad)" />
              <ellipse cx="38" cy="36" rx="14" ry="11" fill="url(#craterDarkGrad)" />
              <ellipse cx="58" cy="42" rx="12" ry="14" fill="url(#craterDarkGrad)" />
              <ellipse cx="44" cy="64" rx="16" ry="10" fill="url(#craterDarkGrad)" />
              <ellipse cx="64" cy="68" rx="9" ry="8" fill="url(#craterDarkGrad)" />
              <circle cx="28" cy="54" r="5" fill="url(#craterDarkGrad)" />
              <circle cx="36" cy="34" r="4.5" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.45" fill="none" />
              <circle cx="56" cy="62" r="3" stroke="#FFFFFF" strokeWidth="0.6" strokeOpacity="0.4" fill="none" />
            </svg>
          </div>
        )}

        {/* ================= VOLUMETRIC MULTI-LAYER DRIFTING CLOUDS ================= */}
        {/* Layer A: High-Altitude Cirrus Clouds (Slow Parallax) */}
        <div className="absolute top-6 sm:top-10 inset-x-0 h-28 sm:h-36 opacity-35 animate-clouds-slow flex w-[200%] pointer-events-none">
          <svg viewBox="0 0 1400 120" className="w-1/2 h-full fill-current" preserveAspectRatio="none">
            <defs>
              <linearGradient id="cloudGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop
                  offset="0%"
                  stopColor={
                    timeOfDay === "day"
                      ? "#FFFFFF"
                      : timeOfDay === "sunset" || timeOfDay === "sunrise"
                      ? "#FED7AA"
                      : "#CBD5E1"
                  }
                  stopOpacity="0.8"
                />
                <stop
                  offset="100%"
                  stopColor={
                    timeOfDay === "day"
                      ? "#BAE6FD"
                      : timeOfDay === "sunset" || timeOfDay === "sunrise"
                      ? "#C084FC"
                      : "#334155"
                  }
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
            <path
              d="M 60,70 Q 110,25 180,45 Q 240,15 310,40 Q 380,25 430,70 Q 250,85 60,70 Z"
              fill="url(#cloudGrad1)"
            />
            <path
              d="M 600,65 Q 660,18 730,42 Q 810,12 880,46 Q 950,28 1000,68 Q 800,82 600,65 Z"
              fill="url(#cloudGrad1)"
            />
          </svg>
          <svg viewBox="0 0 1400 120" className="w-1/2 h-full fill-current" preserveAspectRatio="none">
            <path
              d="M 60,70 Q 110,25 180,45 Q 240,15 310,40 Q 380,25 430,70 Q 250,85 60,70 Z"
              fill="url(#cloudGrad1)"
            />
            <path
              d="M 600,65 Q 660,18 730,42 Q 810,12 880,46 Q 950,28 1000,68 Q 800,82 600,65 Z"
              fill="url(#cloudGrad1)"
            />
          </svg>
        </div>

        {/* Layer B: Volumetric Cumulus Clouds (Medium Parallax) */}
        <div className="absolute top-16 sm:top-20 inset-x-0 h-32 sm:h-40 opacity-45 animate-clouds-medium flex w-[200%] pointer-events-none">
          <svg viewBox="0 0 1400 130" className="w-1/2 h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="cloudGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop
                  offset="0%"
                  stopColor={
                    timeOfDay === "day"
                      ? "#FFFFFF"
                      : timeOfDay === "sunset" || timeOfDay === "sunrise"
                      ? "#FDBA74"
                      : "#E2E8F0"
                  }
                  stopOpacity="0.9"
                />
                <stop
                  offset="60%"
                  stopColor={
                    timeOfDay === "day"
                      ? "#E0F2FE"
                      : timeOfDay === "sunset" || timeOfDay === "sunrise"
                      ? "#E879F9"
                      : "#64748B"
                  }
                  stopOpacity="0.5"
                />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 200,85 Q 250,30 330,55 Q 390,15 470,40 Q 550,20 600,60 Q 640,45 690,85 Q 440,105 200,85 Z"
              fill="url(#cloudGrad2)"
            />
            <path
              d="M 850,80 Q 910,25 990,50 Q 1060,10 1140,42 Q 1210,24 1260,82 Q 1050,102 850,80 Z"
              fill="url(#cloudGrad2)"
            />
          </svg>
          <svg viewBox="0 0 1400 130" className="w-1/2 h-full" preserveAspectRatio="none">
            <path
              d="M 200,85 Q 250,30 330,55 Q 390,15 470,40 Q 550,20 600,60 Q 640,45 690,85 Q 440,105 200,85 Z"
              fill="url(#cloudGrad2)"
            />
            <path
              d="M 850,80 Q 910,25 990,50 Q 1060,10 1140,42 Q 1210,24 1260,82 Q 1050,102 850,80 Z"
              fill="url(#cloudGrad2)"
            />
          </svg>
        </div>

        {/* ================= REALISTIC COASTAL BIRDS WITH FLAPPING WINGS ================= */}
        {/* Flock 1: High-Altitude Gliding Terns across Odisha Horizon */}
        <div className="absolute top-20 sm:top-24 left-0 w-64 h-16 pointer-events-none animate-bird-flight-1">
          <div className="flex items-center gap-6">
            <svg
              viewBox="0 0 50 24"
              className={`w-7 h-4 ${
                timeOfDay === "day"
                  ? "text-white/85"
                  : timeOfDay === "sunset" || timeOfDay === "sunrise"
                  ? "text-[#FED7AA]"
                  : "text-[#E2E8F0]/70"
              }`}
            >
              <ellipse cx="25" cy="13" rx="7" ry="2.2" fill="currentColor" />
              <polygon points="20,13 14,14 16,12" fill="currentColor" />
              <g className="animate-bird-wing">
                <path d="M 23,12 Q 17,2 9,1 Q 14,8 21,13 Z" fill="currentColor" />
                <path d="M 27,12 Q 33,2 41,1 Q 36,8 29,13 Z" fill="currentColor" />
              </g>
            </svg>

            <svg
              viewBox="0 0 50 24"
              className={`w-5 h-3 -mt-3 ${
                timeOfDay === "day"
                  ? "text-white/75"
                  : timeOfDay === "sunset" || timeOfDay === "sunrise"
                  ? "text-[#FED7AA]/80"
                  : "text-[#E2E8F0]/60"
              }`}
            >
              <ellipse cx="25" cy="13" rx="6" ry="1.8" fill="currentColor" />
              <g className="animate-bird-wing-fast">
                <path d="M 23,12 Q 18,3 10,2 Q 15,8 21,13 Z" fill="currentColor" />
                <path d="M 27,12 Q 32,3 40,2 Q 35,8 29,13 Z" fill="currentColor" />
              </g>
            </svg>

            <svg
              viewBox="0 0 50 24"
              className={`w-6 h-3.5 mt-2 ${
                timeOfDay === "day"
                  ? "text-white/80"
                  : timeOfDay === "sunset" || timeOfDay === "sunrise"
                  ? "text-[#FED7AA]/75"
                  : "text-[#E2E8F0]/65"
              }`}
            >
              <ellipse cx="25" cy="13" rx="6.5" ry="2" fill="currentColor" />
              <g className="animate-bird-wing">
                <path d="M 23,12 Q 17,3 9,2 Q 14,8 21,13 Z" fill="currentColor" />
                <path d="M 27,12 Q 33,3 41,2 Q 36,8 29,13 Z" fill="currentColor" />
              </g>
            </svg>
          </div>
        </div>

        {/* Flock 2: Distant Chilika Migratory Herons (Slower, Higher Parallax) */}
        <div className="absolute top-12 left-0 w-44 h-12 pointer-events-none animate-bird-flight-2 opacity-65">
          <div className="flex items-center gap-4">
            <svg viewBox="0 0 50 24" className="w-4 h-2.5 text-white/60">
              <ellipse cx="25" cy="13" rx="5" ry="1.5" fill="currentColor" />
              <g className="animate-bird-wing-fast">
                <path d="M 23,12 Q 18,4 11,3 Q 15,8 21,13 Z" fill="currentColor" />
                <path d="M 27,12 Q 32,4 39,3 Q 35,8 29,13 Z" fill="currentColor" />
              </g>
            </svg>
            <svg viewBox="0 0 50 24" className="w-3.5 h-2 -mt-2 text-white/50">
              <ellipse cx="25" cy="13" rx="4.5" ry="1.3" fill="currentColor" />
              <g className="animate-bird-wing">
                <path d="M 23,12 Q 18,4 11,3 Q 15,8 21,13 Z" fill="currentColor" />
                <path d="M 27,12 Q 32,4 39,3 Q 35,8 29,13 Z" fill="currentColor" />
              </g>
            </svg>
          </div>
        </div>

        {/* ================= REALISTIC BAY OF BENGAL ROLLING SURF & HORIZON ================= */}
        <div className="absolute bottom-28 sm:bottom-32 inset-x-0 h-32 pointer-events-none overflow-hidden">
          <div
            className={`absolute inset-0 transition-all duration-1000 ${
              timeOfDay === "day"
                ? "bg-gradient-to-t from-[#024959] via-[#056075] to-transparent"
                : timeOfDay === "sunset" || timeOfDay === "sunrise"
                ? "bg-gradient-to-t from-[#052E30] via-[#5B2516] to-transparent"
                : "bg-gradient-to-t from-[#02181A] via-[#032629] to-transparent"
            }`}
          />

          {/* Sunset Specular Shimmer on Ocean Waters */}
          {(timeOfDay === "sunset" || timeOfDay === "sunrise") && (
            <div className="absolute bottom-6 right-24 sm:right-48 w-48 sm:w-72 h-14 bg-gradient-to-t from-transparent via-[#FDE047]/25 to-transparent blur-md pointer-events-none" />
          )}

          {/* Animated Rolling White Foam Wave Crests */}
          <div className="absolute bottom-3 inset-x-0 h-10 animate-ocean-wave-roll flex w-[200%] opacity-70">
            <svg viewBox="0 0 1200 45" className="w-1/2 h-full fill-none" preserveAspectRatio="none">
              <path
                d="M 0,22 Q 75,4 150,22 T 300,22 T 450,22 T 600,22 T 750,22 T 900,22 T 1050,22 T 1200,22"
                stroke={
                  timeOfDay === "day"
                    ? "#A7F3D0"
                    : timeOfDay === "sunset" || timeOfDay === "sunrise"
                    ? "#FED7AA"
                    : "#99F6E4"
                }
                strokeWidth="1.6"
              />
              <path
                d="M 0,30 Q 60,16 120,30 T 240,30 T 360,30 T 480,30 T 600,30 T 720,30 T 840,30 T 960,30 T 1080,30 T 1200,30"
                stroke={
                  timeOfDay === "day"
                    ? "#BAE6FD"
                    : timeOfDay === "sunset" || timeOfDay === "sunrise"
                    ? "#FDBA74"
                    : "#5EEAD4"
                }
                strokeWidth="1.2"
                strokeOpacity="0.6"
              />
            </svg>
            <svg viewBox="0 0 1200 45" className="w-1/2 h-full fill-none" preserveAspectRatio="none">
              <path
                d="M 0,22 Q 75,4 150,22 T 300,22 T 450,22 T 600,22 T 750,22 T 900,22 T 1050,22 T 1200,22"
                stroke={
                  timeOfDay === "day"
                    ? "#A7F3D0"
                    : timeOfDay === "sunset" || timeOfDay === "sunrise"
                    ? "#FED7AA"
                    : "#99F6E4"
                }
                strokeWidth="1.6"
              />
              <path
                d="M 0,30 Q 60,16 120,30 T 240,30 T 360,30 T 480,30 T 600,30 T 720,30 T 840,30 T 960,30 T 1080,30 T 1200,30"
                stroke={
                  timeOfDay === "day"
                    ? "#BAE6FD"
                    : timeOfDay === "sunset" || timeOfDay === "sunrise"
                    ? "#FDBA74"
                    : "#5EEAD4"
                }
                strokeWidth="1.2"
                strokeOpacity="0.6"
              />
            </svg>
          </div>
        </div>

        {/* =========================================================================
            LAYER 1B: REALISTIC ODISHA TREES & ARCHITECTURAL LANDMARKS
            (Positioned seamlessly right above the open highway)
            ========================================================================= */}
        <div className="absolute bottom-22 sm:bottom-26 inset-x-0 h-44 sm:h-52 pointer-events-none overflow-hidden opacity-95">
          <svg viewBox="0 0 1440 180" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="palmTrunkWood" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4A3423" />
                <stop offset="45%" stopColor="#785338" />
                <stop offset="100%" stopColor="#2F1F14" />
              </linearGradient>

              <linearGradient id="palmFrondGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop
                  offset="0%"
                  stopColor={
                    timeOfDay === "day"
                      ? "#22C55E"
                      : timeOfDay === "sunset" || timeOfDay === "sunrise"
                      ? "#EAB308"
                      : "#0D6E66"
                  }
                />
                <stop
                  offset="100%"
                  stopColor={
                    timeOfDay === "day"
                      ? "#14532D"
                      : timeOfDay === "sunset" || timeOfDay === "sunrise"
                      ? "#713F12"
                      : "#042D2B"
                  }
                />
              </linearGradient>

              <linearGradient id="casuarinaNeedles" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop
                  offset="0%"
                  stopColor={
                    timeOfDay === "day"
                      ? "#15803D"
                      : timeOfDay === "sunset" || timeOfDay === "sunrise"
                      ? "#CA8A04"
                      : "#0B4B48"
                  }
                />
                <stop
                  offset="100%"
                  stopColor={
                    timeOfDay === "day"
                      ? "#052E16"
                      : timeOfDay === "sunset" || timeOfDay === "sunrise"
                      ? "#451A03"
                      : "#021E20"
                  }
                />
              </linearGradient>

              <linearGradient id="templeKhondaliteStone" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop
                  offset="0%"
                  stopColor={
                    timeOfDay === "day"
                      ? "#134E4A"
                      : timeOfDay === "sunset" || timeOfDay === "sunrise"
                      ? "#78350F"
                      : "#0F3D3B"
                  }
                />
                <stop
                  offset="50%"
                  stopColor={
                    timeOfDay === "day"
                      ? "#0F766E"
                      : timeOfDay === "sunset" || timeOfDay === "sunrise"
                      ? "#9A3412"
                      : "#0A2F31"
                  }
                />
                <stop offset="100%" stopColor="#021B1C" />
              </linearGradient>

              <linearGradient id="coastalSandDunes" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop
                  offset="0%"
                  stopColor={
                    timeOfDay === "day"
                      ? "#CA8A04"
                      : timeOfDay === "sunset" || timeOfDay === "sunrise"
                      ? "#9A3412"
                      : "#785317"
                  }
                  stopOpacity="0.45"
                />
                <stop offset="100%" stopColor="#021C1D" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* Coastal Sand Dunes */}
            <path
              d="M 0,180 Q 200,130 420,150 T 840,135 T 1220,145 T 1440,180 Z"
              fill="url(#coastalSandDunes)"
            />

            {/* Casuarina Tree 1 */}
            <g className="animate-casuarina-sway">
              <rect x="58" y="100" width="6" height="80" fill="#2E1D13" rx="2" />
              <path d="M 61,45 L 78,85 L 68,85 L 82,120 L 72,120 L 86,155 L 36,155 L 50,120 L 40,120 L 54,85 L 44,85 Z" fill="url(#casuarinaNeedles)" />
            </g>

            {/* Realistic Coconut Palm Tree */}
            <g className="animate-palm-sway" transform="translate(110, 0)">
              <path
                d="M 20,180 Q 15,120 28,68 Q 32,58 36,46"
                stroke="url(#palmTrunkWood)"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />
              <line x1="16" y1="160" x2="22" y2="162" stroke="#25160E" strokeWidth="1.2" />
              <line x1="17" y1="135" x2="24" y2="137" stroke="#25160E" strokeWidth="1.2" />
              <line x1="21" y1="105" x2="27" y2="107" stroke="#25160E" strokeWidth="1.2" />
              <line x1="27" y1="75" x2="33" y2="76" stroke="#25160E" strokeWidth="1.2" />

              <circle cx="34" cy="48" r="3.2" fill="#713F12" />
              <circle cx="38" cy="49" r="3" fill="#854D0E" />
              <circle cx="35" cy="52" r="2.8" fill="#58310C" />

              <path d="M 36,46 Q 10,32 -25,48 Q -5,30 36,46" fill="url(#palmFrondGreen)" />
              <path d="M 36,46 Q 5,12 -18,22 Q 2,22 36,46" fill="url(#palmFrondGreen)" />
              <path d="M 36,46 Q 30,8 34,-6 Q 42,12 36,46" fill="url(#palmFrondGreen)" />
              <path d="M 36,46 Q 65,10 85,20 Q 64,22 36,46" fill="url(#palmFrondGreen)" />
              <path d="M 36,46 Q 75,34 98,54 Q 72,36 36,46" fill="url(#palmFrondGreen)" />
              <path d="M 36,46 Q 60,56 70,72 Q 52,52 36,46" fill="url(#palmFrondGreen)" />
            </g>

            {/* Casuarina Tree 2 */}
            <g className="animate-casuarina-sway" style={{ animationDelay: "1.2s" }}>
              <rect x="220" y="110" width="7" height="70" fill="#2E1D13" rx="2" />
              <path d="M 223,60 L 240,95 L 232,95 L 246,130 L 236,130 L 250,165 L 196,165 L 210,130 L 200,130 L 214,95 L 206,95 Z" fill="url(#casuarinaNeedles)" />
            </g>

            {/* ================= THE SACRED PURI JAGANNATH TEMPLE SHIKHARA ================= */}
            <g transform="translate(390, 0)">
              <path
                d="M 52,180 L 68,110 L 82,50 L 92,24 L 97,14 L 102,24 L 112,50 L 126,110 L 142,180 Z"
                fill="url(#templeKhondaliteStone)"
                stroke="#14B8A6"
                strokeWidth="1.2"
                strokeOpacity="0.4"
              />
              <line x1="70" y1="110" x2="124" y2="110" stroke="#2DD4BF" strokeWidth="0.9" opacity="0.5" />
              <line x1="76" y1="85" x2="118" y2="85" stroke="#2DD4BF" strokeWidth="0.9" opacity="0.5" />
              <line x1="84" y1="60" x2="110" y2="60" stroke="#2DD4BF" strokeWidth="0.9" opacity="0.5" />
              <line x1="90" y1="36" x2="104" y2="36" stroke="#2DD4BF" strokeWidth="0.9" opacity="0.5" />
              
              <circle cx="97" cy="13" r="5.5" stroke="#D9A52B" strokeWidth="1.6" fill="#042F31" />
              <circle cx="97" cy="13" r="2" fill="#FACC15" />

              <g className="animate-flag-flutter" transform="translate(97, 9)">
                <polygon points="0,0 24,-5 0,-11" fill="#EA580C" />
                <polygon points="0,0 17,-4 0,-8" fill="#F97316" />
              </g>

              <polygon
                points="126,180 156,120 186,180"
                fill="url(#templeKhondaliteStone)"
                stroke="#14B8A6"
                strokeWidth="0.8"
                strokeOpacity="0.3"
              />
            </g>

            {/* ================= THE 13TH-CENTURY KONARK SUN TEMPLE CHARIOT WHEEL ================= */}
            <g transform="translate(730, 48)">
              <polygon points="0,132 50,55 100,132" fill="url(#templeKhondaliteStone)" opacity="0.9" />
              <circle cx="165" cy="95" r="35" stroke="#D9A52B" strokeWidth="3.2" fill="#032628" />
              <circle cx="165" cy="95" r="30" stroke="#2DD4BF" strokeWidth="1.2" fill="none" opacity="0.6" />
              <circle cx="165" cy="95" r="9" fill="#D9A52B" stroke="#000000" strokeWidth="1" />
              <line x1="165" y1="60" x2="165" y2="130" stroke="#FDE047" strokeWidth="2.2" />
              <line x1="130" y1="95" x2="200" y2="95" stroke="#FDE047" strokeWidth="2.2" />
              <line x1="140" y1="70" x2="190" y2="120" stroke="#D9A52B" strokeWidth="1.6" />
              <line x1="140" y1="120" x2="190" y2="70" stroke="#D9A52B" strokeWidth="1.6" />
              <circle cx="165" cy="74" r="2.2" fill="#FACC15" />
              <circle cx="165" cy="116" r="2.2" fill="#FACC15" />
              <circle cx="144" cy="95" r="2.2" fill="#FACC15" />
              <circle cx="186" cy="95" r="2.2" fill="#FACC15" />
            </g>

            {/* ================= CHILIKA LAGOON WATERS & WOODEN FISHING BOATS ================= */}
            <g transform="translate(1060, 92)">
              <path d="M 45,62 Q 72,74 100,62 L 95,56 L 50,56 Z" fill="#2E1D13" stroke="#D9A52B" strokeWidth="1" />
              <polygon points="72,56 72,18 95,50" fill="#F8FAFC" opacity="0.85" />
              <polygon points="72,56 72,26 54,52" fill="#E2E8F0" opacity="0.7" />
              <path d="M 110,88 Q 170,35 230,88" stroke="#0B524E" strokeWidth="2.5" fill="none" />
              <path d="M 210,88 Q 270,25 330,88" stroke="#073B3A" strokeWidth="3" fill="none" />
            </g>

            {/* Casuarina Forest Right */}
            <g className="animate-casuarina-sway" style={{ animationDelay: "2s" }}>
              <rect x="1330" y="105" width="6" height="75" fill="#2E1D13" rx="2" />
              <path d="M 1333,55 L 1350,90 L 1342,90 L 1356,125 L 1346,125 L 1360,160 L 1306,160 L 1320,125 L 1310,125 L 1324,90 L 1316,90 Z" fill="url(#casuarinaNeedles)" />
            </g>
          </svg>
        </div>

      </div>

      {/* =========================================================================
          LAYER 2: HERO BRANDING, HIGH-CONVERTING HEADLINE & CTAS (CLEAN, NO TABS)
          ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center space-y-3 sm:space-y-3.5">
        
        {/* Status Kicker Pill with Live Beacon (No Manual Tabs) */}
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#D9A52B]/50 text-xs font-semibold text-[#D9A52B] shadow-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
            </span>
            <span>Verified Odisha Highway Network • Direct Dispatch Across 30 Districts</span>
          </div>
        </div>

        {/* Short, Direct, High-Converting Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold font-display tracking-tight text-white leading-tight sm:leading-[1.08] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
          Book Reliable Cabs <br />
          <span className="italic font-display font-normal text-[#D9A52B]">
            Across Odisha.
          </span>
        </h1>

        {/* Clear Subtitle */}
        <p className="text-xs sm:text-base lg:text-lg text-white/95 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-md">
          Punctual BBI airport pickups, outstation highway transfers &amp; sacred temple circuits. 100% yellow-board commercial fleet, zero surge pricing &amp; guaranteed on-time dispatch.
        </p>

        {/* Action CTAs */}
        <div className="pt-1 flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto">
          <Link
            href="/book-cab"
            className="w-full sm:w-auto px-7 sm:px-8 py-3 rounded-full bg-gradient-to-r from-[#D9A52B] via-[#E5B543] to-[#C99320] text-[#062F31] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_4px_18px_rgba(217,165,43,0.45),inset_0_1px_0_rgba(255,255,255,0.6)] hover:brightness-105 active:scale-[0.98] transition-all group cursor-pointer border border-[#F2C868]/60"
          >
            <Car className="w-4 h-4 text-[#062F31]" />
            <span>Book Your Cab Now</span>
            <ArrowRight className="w-4 h-4 text-[#062F31] group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/book-tour"
            className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-full bg-black/55 hover:bg-black/75 backdrop-blur-md border border-white/25 hover:border-[#D9A52B]/70 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98] cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#D9A52B]" />
            <span>Explore Curated Tours</span>
          </Link>
        </div>
      </div>

      {/* =========================================================================
          LAYER 3: INTERACTIVE ODISHA TOUR CIRCUIT SELECTOR (ZERO LAYOUT SHIFT)
          ========================================================================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4 sm:mt-5">
        
        {/* Circuit Bar Header */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-[#D9A52B] flex items-center gap-1.5 drop-shadow">
            <Navigation className="w-3.5 h-3.5 text-[#D9A52B]" />
            <span>Odisha Tour Milestones • Tap to Cruise Circuit</span>
          </span>

          {/* Interactive Sprint & Horn Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleSprint}
              className={`px-3 py-1 rounded-xl text-[10.5px] font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-md ${
                isSprint
                  ? "bg-[#D9A52B] text-[#062F31] shadow-[0_0_14px_rgba(217,165,43,0.5)] font-extrabold"
                  : "bg-black/55 text-white/90 hover:bg-black/75 border border-white/15"
              }`}
              title="Toggle Highway Sprint Speed"
            >
              <Flame className={`w-3.5 h-3.5 ${isSprint ? "text-[#062F31] animate-bounce" : "text-[#D9A52B]"}`} />
              <span>{isSprint ? "Sprint 94 km/h" : "Highway Sprint"}</span>
            </button>

            <button
              type="button"
              onClick={triggerHonk}
              className="px-2.5 py-1 rounded-xl bg-black/55 hover:bg-black/75 border border-white/15 text-white/90 text-[10.5px] font-bold transition flex items-center gap-1 cursor-pointer"
              title="Cab Horn Effect"
            >
              <Volume2 className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span className="hidden sm:inline">Honk</span>
            </button>
          </div>
        </div>

        {/* 5 Milestone Signboard Tabs (Stable Grid with Zero Layout Shift) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5">
          {ODISHA_DESTINATIONS.map((dest, idx) => {
            const isSelected = activeDestIndex === idx;

            return (
              <button
                key={dest.id}
                type="button"
                onClick={() => setActiveDestIndex(idx)}
                className={`text-left p-2.5 rounded-2xl transition-all duration-300 relative overflow-hidden group cursor-pointer border ${
                  isSelected
                    ? "bg-gradient-to-br from-[#064E3B]/95 via-[#043E2E]/95 to-[#022A1F]/95 border-[#D9A52B] ring-2 ring-[#D9A52B]/60 shadow-[0_0_20px_rgba(217,165,43,0.35)]"
                    : "bg-black/60 hover:bg-black/80 border-white/15 hover:border-[#D9A52B]/50 backdrop-blur-md"
                }`}
              >
                {/* Distance & Tag Indicator */}
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-[10px] font-bold text-[#A7F3D0] uppercase truncate">
                    {dest.tag}
                  </span>
                  <span
                    className={`text-[9.5px] font-black font-mono px-2 py-0.5 rounded shadow-xs ${
                      isSelected ? "bg-[#D9A52B] text-[#062F31]" : "bg-white/15 text-white"
                    }`}
                  >
                    {dest.km}
                  </span>
                </div>

                {/* Destination Name */}
                <div className="font-bold text-xs sm:text-sm text-white font-display truncate group-hover:text-[#D9A52B] transition-colors">
                  {dest.name}
                </div>

                {/* Corridor detail & duration */}
                <div className="text-[10px] text-white/75 font-medium flex items-center justify-between mt-0.5">
                  <span className="truncate">{dest.shortName}</span>
                  <span className="text-white/50 text-[9px] shrink-0">{dest.duration}</span>
                </div>

                {/* Bottom Active Glow Bar */}
                {isSelected && (
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#D9A52B] via-[#F2C052] to-[#10B981]" />
                )}
              </button>
            );
          })}
        </div>

      </div>

      {/* =========================================================================
          LAYER 4: REALISTIC FULL-WIDTH OPEN HIGHWAY (NOT IN A BOX!)
          (Edge-to-edge highway surface, roadside cat-eye studs, passing milestones)
          ========================================================================= */}
      <div className="relative z-10 w-full mt-4 sm:mt-5 overflow-hidden">
        
        {/* Floating Highway Telemetry HUD Ribbon (Stable & Zero Shift) */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-2">
          <div className="h-10 min-h-[40px] px-3.5 sm:px-4 rounded-xl bg-black/65 backdrop-blur-md border border-white/15 flex items-center justify-between text-xs text-white shadow-xl">
            
            {/* Left Slot: Fixed Min-Width Container with Truncate */}
            <div className="flex items-center gap-2 min-w-0 max-w-[65%] sm:max-w-[70%]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping shrink-0" />
              <div className="truncate font-medium">
                <span className="text-white/70">Passing: </span>
                <span className="text-[#D9A52B] font-display font-bold">
                  {activeDest.name}
                </span>{" "}
                <span className="text-white/50 font-mono text-[11px]">({activeDest.km})</span>
                <span className="hidden lg:inline text-white/40 ml-2 text-[10.5px]">
                  • {activeDest.landmarkTitle}
                </span>
              </div>
            </div>

            {/* Right Slot: Stable Route Telemetry (Fixed Sizes) */}
            <div className="flex items-center gap-3 shrink-0 text-[11px]">
              <span className="hidden sm:inline text-white/80 font-mono">
                Speed: <strong className="text-[#D9A52B]">{currentSpeed} km/h</strong>
              </span>
              <span className="hidden sm:inline text-white/30">•</span>
              <span className="hidden md:inline text-white/80">
                Tariff: <strong className="text-[#10B981]">1.0x Fixed</strong>
              </span>
              <span className="hidden md:inline text-white/30">•</span>
              
              {/* Stable Fixed-Width Route Booking Button */}
              <Link
                href={activeDest.bookLink}
                className="w-32 sm:w-36 h-7 px-3 rounded-lg bg-[#D9A52B] hover:brightness-110 text-[#062F31] font-extrabold text-[11px] transition flex items-center justify-center gap-1 shadow-md shrink-0 cursor-pointer"
              >
                <span>Book This Route</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#062F31]" />
              </Link>
            </div>
          </div>
        </div>

        {/* FULL-WIDTH OPEN ASPHALT HIGHWAY SURFACE (NO BOX, EDGE-TO-EDGE) */}
        <div className="w-full relative h-28 sm:h-34 bg-gradient-to-b from-[#121819] via-[#1B2324] to-[#0F1415] border-y border-[#3A4A4C] flex items-center overflow-hidden shadow-[inset_0_4px_12px_rgba(0,0,0,0.8)]">
          
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
            <div className="w-24 h-11 rounded-t-2xl overflow-hidden border border-black/40 shadow-2xl flex flex-col items-center">
              <div className="w-full bg-[#FACC15] text-[#062F31] font-black text-[8px] text-center py-0.5 border-b border-black/20">
                {activeDest.nhNumber}
              </div>
              <div className="w-full bg-[#FFFFFF] text-[#062F31] flex flex-col items-center justify-center py-0.5 px-1 leading-tight">
                <span className="text-[7.5px] font-extrabold truncate w-full text-center">
                  {activeDest.shortName}
                </span>
                <span className="text-[8px] font-black font-mono text-[#B91C1C]">
                  {activeDest.km}
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
                <div className="text-[8.5px] font-black uppercase tracking-wider text-[#D9A52B]">
                  ODISHA COMMERCIAL HIGHWAY
                </div>
                <div className="text-[7px] text-white/80">100% Commercial Fleet • Zero Surge</div>
              </div>
            </div>
          </div>

          {/* Moving Dashed Center Yellow Lane Divider Stripes */}
          <div className="absolute top-1/2 -translate-y-1/2 inset-x-0 h-1 flex overflow-hidden pointer-events-none">
            <div
              className={`flex shrink-0 w-[200%] ${
                isSprint ? "animate-road-flow-fast" : "animate-road-flow"
              }`}
            >
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
            
            {/* Visual Honk Soundwave Animation */}
            {honkActive && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 pointer-events-none flex items-center gap-1 z-30">
                <span className="w-6 h-6 rounded-full border-2 border-[#D9A52B] animate-ping" />
                <span className="w-10 h-10 rounded-full border-2 border-[#D9A52B]/60 animate-ping" />
                <span className="text-xs font-black text-[#D9A52B] font-mono tracking-widest uppercase bg-black/60 px-1.5 py-0.5 rounded">
                  HONK!
                </span>
              </div>
            )}

            {/* Suspension Micro-Bounce Chassis */}
            <div className="relative animate-car-chassis">
              
              {/* Volumetric Projector Headlight Beam (Reacts to Realtime Time of Day) */}
              <div className="absolute top-[28px] left-[225px] w-64 sm:w-96 h-28 pointer-events-none z-10 animate-headlight-beam">
                <svg viewBox="0 0 350 100" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="headlightVolumetricBeam" x1="0%" y1="30%" x2="100%" y2="50%">
                      <stop
                        offset="0%"
                        stopColor="#FEF08A"
                        stopOpacity={
                          timeOfDay === "night"
                            ? "0.9"
                            : timeOfDay === "sunset" || timeOfDay === "sunrise"
                            ? "0.75"
                            : "0.35"
                        }
                      />
                      <stop
                        offset="25%"
                        stopColor="#FDE047"
                        stopOpacity={
                          timeOfDay === "night"
                            ? "0.45"
                            : timeOfDay === "sunset" || timeOfDay === "sunrise"
                            ? "0.35"
                            : "0.15"
                        }
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

                {/* Glass Diagonal Glare */}
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

              {/* Front Spinning Alloy Wheel with Disc Rotor & Red Brake Caliper */}
              <div
                className={`absolute top-[48px] left-[165px] w-[35px] h-[35px] rounded-full z-30 ${
                  isSprint ? "animate-wheel-spin-fast" : "animate-wheel-spin"
                }`}
              >
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
              <div
                className={`absolute top-[48px] left-[40px] w-[35px] h-[35px] rounded-full z-30 ${
                  isSprint ? "animate-wheel-spin-fast" : "animate-wheel-spin"
                }`}
              >
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
          LAYER 5: BOTTOM FOUNDATIONAL SERVICE GUARANTEES
          ========================================================================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-2.5 pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-white/90">
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
