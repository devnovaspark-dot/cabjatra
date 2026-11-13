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
  Gauge,
  MapPin,
  Clock,
  Zap,
  Volume2,
  Navigation,
  Check,
  Star,
  Flame,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";

interface DestinationMilestone {
  id: string;
  name: string;
  odiaName: string;
  km: string;
  highway: string;
  duration: string;
  tag: string;
  fare: string;
  icon: string;
  description: string;
  bookLink: string;
}

const DESTINATION_MILESTONES: DestinationMilestone[] = [
  {
    id: "puri",
    name: "Puri Jagannath Dham",
    odiaName: "ପୁରୀ ଶ୍ରୀକ୍ଷେତ୍ର",
    km: "60 KM",
    highway: "NH-316 Heritage Corridor",
    duration: "1 hr 15 mins",
    tag: "Sacred Pilgrimage",
    fare: "₹13/km Fixed",
    icon: "🛕",
    description: "Grand Road Jagannath Temple, VIP Road & Golden Beach.",
    bookLink: "/book-cab?to=Puri",
  },
  {
    id: "konark",
    name: "Konark Sun Temple",
    odiaName: "କୋଣାର୍କ ସୂର୍ଯ୍ୟ ମନ୍ଦିର",
    km: "65 KM",
    highway: "Marine Drive Coastal Route",
    duration: "1 hr 25 mins",
    tag: "UNESCO World Heritage",
    fare: "₹13/km Fixed",
    icon: "☀️",
    description: "13th-century chariot architecture & Chandrabhaga Blue Flag Beach.",
    bookLink: "/book-cab?to=Konark",
  },
  {
    id: "airport",
    name: "BBI Airport Transit",
    odiaName: "ବିଜୁ ପଟ୍ଟନାୟକ ଏୟାରପୋର୍ଟ",
    km: "00 KM",
    highway: "Bhubaneswar Capital Hub",
    duration: "10 mins Standby",
    tag: "Terminal Pickup",
    fare: "Flat Airport Fare",
    icon: "✈️",
    description: "Terminal 1 & 2 greeting with live flight radar synchronization.",
    bookLink: "/book-cab?service=airport",
  },
  {
    id: "chilika",
    name: "Chilika Dolphin Lagoon",
    odiaName: "ଚିଲିକା ହ୍ରଦ",
    km: "105 KM",
    highway: "Satapada Eco-Safari Trail",
    duration: "2 hrs 10 mins",
    tag: "Eco-Safari Corridor",
    fare: "₹13/km Fixed",
    icon: "🐬",
    description: "Satapada Irrawaddy Dolphins & Kalijai Island Temple Harbor.",
    bookLink: "/book-cab?to=Chilika",
  },
  {
    id: "cuttack",
    name: "Cuttack Silver City",
    odiaName: "କଟକ ସହର",
    km: "28 KM",
    highway: "NH-16 High Court Expressway",
    duration: "40 mins",
    tag: "Judicial & Commercial",
    fare: "₹13/km Fixed",
    icon: "🥈",
    description: "Badambadi Transit, Barabati Fort & Millennium Judicial District.",
    bookLink: "/book-cab?to=Cuttack",
  },
];

export const HeroSection: React.FC = () => {
  const [selectedDestIndex, setSelectedDestIndex] = useState(0);
  const [isTurbo, setIsTurbo] = useState(false);
  const [headlightsHigh, setHeadlightsHigh] = useState(true);
  const [honkActive, setHonkActive] = useState(false);

  // Auto-cycle destinations gently if idle
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedDestIndex((prev) => (prev + 1) % DESTINATION_MILESTONES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const activeDest = DESTINATION_MILESTONES[selectedDestIndex];
  const currentSpeed = isTurbo ? 94 : 64;

  const triggerHonk = () => {
    setHonkActive(true);
    setTimeout(() => setHonkActive(false), 900);
  };

  const triggerTurbo = () => {
    setIsTurbo((prev) => !prev);
  };

  return (
    <section className="relative text-white overflow-hidden bg-gradient-to-b from-[#011415] via-[#021B1C] to-[#042426] pt-28 sm:pt-34 pb-8 sm:pb-12 border-b border-[#D9A52B]/30 select-none">
      {/* Ambient Celestial Highway Horizon Background (Zero external photos, pure vector & CSS) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle Starry Night Texture */}
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#F2C052_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Coastal Sky Ambient Glow Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#073B3A]/40 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#D9A52B]/10 rounded-full blur-[120px]" />

        {/* Distant Odisha Coastal Landmark Silhouette Skyline (Temple Shikhara & Palms) */}
        <div className="absolute bottom-28 inset-x-0 h-28 opacity-25 flex items-end justify-between px-4 pointer-events-none">
          {/* Subtle Silhouette Skyline Pattern */}
          <svg viewBox="0 0 1200 120" className="w-full h-full text-[#073B3A] fill-current preserve-3d" preserveAspectRatio="none">
            {/* Lingaraj / Puri Temple Shikhara Outline */}
            <path d="M 120,120 L 130,70 L 145,25 L 150,15 L 155,25 L 170,70 L 180,120 Z" />
            <path d="M 148,15 L 150,0 L 152,15 Z" />
            {/* Konark Chariot Wheel Silhouette */}
            <circle cx="320" cy="95" r="22" stroke="#073B3A" strokeWidth="3" fill="none" />
            <circle cx="320" cy="95" r="5" fill="#073B3A" />
            {/* Coconut Palms */}
            <path d="M 450,120 Q 455,70 465,45 Q 435,35 425,48 M 465,45 Q 480,25 500,32 M 465,45 Q 495,50 490,65" stroke="#073B3A" strokeWidth="2.5" fill="none" />
            <path d="M 720,120 L 732,65 L 745,20 L 750,8 L 755,20 L 768,65 L 780,120 Z" />
            <circle cx="920" cy="95" r="20" stroke="#073B3A" strokeWidth="2.5" fill="none" />
            <path d="M 1040,120 Q 1045,70 1055,45 Q 1025,35 1015,48 M 1055,45 Q 1070,25 1090,32" stroke="#073B3A" strokeWidth="2.5" fill="none" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HERO TEXT & BRANDING HEADER ================= */}
        <div className="text-center max-w-4xl mx-auto space-y-3.5 sm:space-y-4">
          
          {/* Eyebrow Kicker Pill with Live Beacon */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#D9A52B]/40 text-xs font-semibold text-[#D9A52B] shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
            </span>
            <span>24/7 Odisha Commercial Highway Network • Live Dispatched</span>
          </div>

          {/* Regal Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight">
            Book Reliable Cabs <br />
            <span className="italic font-display font-normal text-[#D9A52B]">
              Across Odisha.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-base text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Punctual BBI airport pickups, outstation highway journeys &amp; temple circuits. 100% yellow-board commercial fleet, zero surge pricing &amp; guaranteed on-time dispatch.
          </p>

          {/* Action CTAs */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-3 sm:gap-3.5">
            <Link
              href="/book-cab"
              className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-[#D9A52B] via-[#E5B543] to-[#C99320] text-[#062F31] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(217,165,43,0.4),inset_0_1px_0_rgba(255,255,255,0.6)] hover:brightness-105 active:scale-[0.98] transition-all group cursor-pointer border border-[#F2C868]/60"
            >
              <Car className="w-4 h-4 text-[#062F31]" />
              <span>Book Your Cab Now</span>
              <ArrowRight className="w-4 h-4 text-[#062F31] group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/book-tour"
              className="px-6 sm:px-7 py-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/25 hover:border-[#D9A52B]/70 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98] cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#D9A52B]" />
              <span>Explore Curated Tours</span>
            </Link>
          </div>
        </div>

        {/* ================= THE ANIMATED RUNNING CAR & HIGHWAY ARENA ================= */}
        <div className="mt-8 sm:mt-10 relative">
          
          {/* Top Milestone Board Ticker: Most Visited Places in Odisha */}
          <div className="mb-3 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D9A52B] flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-[#D9A52B]" />
                <span>Odisha Highway Milestones • Select Destination</span>
              </span>
            </div>

            {/* Interactive Driving Mode Controls */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={triggerTurbo}
                className={`px-2.5 py-1 rounded-lg text-[10.5px] font-bold transition-all flex items-center gap-1 cursor-pointer shadow-xs ${
                  isTurbo
                    ? "bg-[#D9A52B] text-[#062F31] shadow-[0_0_12px_rgba(217,165,43,0.5)] scale-105"
                    : "bg-white/10 text-white/80 hover:bg-white/20 border border-white/10"
                }`}
                title="Toggle Turbo Highway Speed"
              >
                <Flame className={`w-3.5 h-3.5 ${isTurbo ? "text-[#062F31] animate-bounce" : "text-[#D9A52B]"}`} />
                <span>{isTurbo ? "Turbo 95 km/h" : "Boost Speed"}</span>
              </button>

              <button
                type="button"
                onClick={triggerHonk}
                className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 hover:text-white text-[10.5px] font-bold transition flex items-center gap-1 cursor-pointer"
                title="Horn Sound Effect"
              >
                <Volume2 className="w-3.5 h-3.5 text-[#D9A52B]" />
                <span className="hidden sm:inline">Honk</span>
              </button>
            </div>
          </div>

          {/* Interactive Milestone Signboards Row (Indian Highway Green Boards) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-4">
            {DESTINATION_MILESTONES.map((dest, idx) => {
              const isSelected = selectedDestIndex === idx;

              return (
                <button
                  key={dest.id}
                  type="button"
                  onClick={() => setSelectedDestIndex(idx)}
                  className={`text-left p-2.5 rounded-2xl transition-all duration-300 relative overflow-hidden group cursor-pointer border ${
                    isSelected
                      ? "bg-gradient-to-br from-[#064E3B] via-[#043E2E] to-[#022A1F] border-[#D9A52B] shadow-[0_0_20px_rgba(217,165,43,0.35)] scale-[1.02] ring-2 ring-[#D9A52B]/40"
                      : "bg-[#052922]/80 hover:bg-[#06382D] border-white/15 hover:border-[#D9A52B]/50"
                  }`}
                >
                  {/* Highway Green Board Header Badge */}
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-sm">{dest.icon}</span>
                    <span className={`text-[9.5px] font-extrabold uppercase font-mono px-2 py-0.5 rounded ${
                      isSelected ? "bg-[#D9A52B] text-[#062F31]" : "bg-black/40 text-white/80"
                    }`}>
                      {dest.km}
                    </span>
                  </div>

                  {/* Destination Name */}
                  <div className="font-bold text-xs sm:text-sm text-white font-display line-clamp-1 group-hover:text-[#D9A52B] transition-colors">
                    {dest.name}
                  </div>
                  
                  {/* Odia script accent & highway tag */}
                  <div className="text-[10px] text-[#A7F3D0] font-medium flex items-center justify-between mt-0.5">
                    <span className="truncate">{dest.tag}</span>
                    <span className="text-white/40 text-[9px] shrink-0">{dest.duration}</span>
                  </div>

                  {/* Bottom selection indicator light */}
                  {isSelected && (
                    <div className="absolute bottom-0 inset-x-0 h-0.5 bg-[#D9A52B]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* ================= THE HIGHWAY ROAD STAGE & RUNNING CAR ================= */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#D9A52B]/40 bg-gradient-to-b from-[#0B1516] via-[#121B1D] to-[#0A1112] shadow-2xl p-4 sm:p-6">
            
            {/* Top Atmospheric Star & Dust Overlay */}
            <div className="absolute inset-0 bg-radial-[at_center_top] from-[#D9A52B]/10 via-transparent to-transparent pointer-events-none" />

            {/* Live Journey Cockpit HUD Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                <span className="text-white font-bold">
                  Active Dispatch Corridor:{" "}
                  <span className="text-[#D9A52B] font-display font-bold">
                    {activeDest.name} ({activeDest.km})
                  </span>
                </span>
                <span className="hidden md:inline-block text-[11px] text-[#A7F3D0] bg-black/40 px-2 py-0.5 rounded-full border border-white/10">
                  {activeDest.highway}
                </span>
              </div>

              {/* Quick Route Telemetry */}
              <div className="flex items-center gap-3 text-[11px]">
                <span className="text-white/80 font-mono">
                  Speed: <strong className="text-[#D9A52B]">{currentSpeed} km/h</strong>
                </span>
                <span className="text-white/40">•</span>
                <span className="text-white/80">
                  AC: <strong className="text-[#10B981]">22°C Primed</strong>
                </span>
                <span className="text-white/40">•</span>
                <Link
                  href={activeDest.bookLink}
                  className="px-2.5 py-1 rounded-lg bg-[#D9A52B] text-[#062F31] font-extrabold text-[10.5px] hover:brightness-110 transition flex items-center gap-1 shadow-xs"
                >
                  <span>Book {activeDest.name.split(" ")[0]}</span>
                  <ArrowRight className="w-3 h-3 text-[#062F31]" />
                </Link>
              </div>
            </div>

            {/* The Running Highway Track */}
            <div className="relative h-32 sm:h-38 w-full mt-3 overflow-hidden rounded-2xl bg-[#172021] border-y-2 border-[#334446] flex items-center shadow-inner">
              
              {/* Asphalt Fine Noise Texture */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:6px_6px]" />

              {/* Upper White Shoulder Line */}
              <div className="absolute top-3 inset-x-0 h-0.5 bg-white/70 shadow-[0_0_4px_rgba(255,255,255,0.4)]" />

              {/* Center Flowing Dashed Yellow Lane Markers */}
              <div className="absolute top-1/2 -translate-y-1/2 inset-x-0 h-1 flex overflow-hidden">
                <div
                  className={`flex shrink-0 w-[200%] ${
                    isTurbo ? "animate-road-flow-fast" : "animate-road-flow"
                  }`}
                >
                  {Array.from({ length: 40 }).map((_, i) => (
                    <span
                      key={i}
                      className="inline-block w-8 sm:w-12 h-1 bg-[#FACC15] mr-6 sm:mr-8 rounded-full shadow-[0_0_6px_rgba(250,204,21,0.6)] shrink-0"
                    />
                  ))}
                </div>
              </div>

              {/* Lower White Shoulder Line */}
              <div className="absolute bottom-3 inset-x-0 h-0.5 bg-white/70 shadow-[0_0_4px_rgba(255,255,255,0.4)]" />

              {/* Reflective Road Cat-Eyes / Studs */}
              <div className="absolute bottom-4 inset-x-0 flex justify-around pointer-events-none opacity-60">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_4px_#10B981]" />
                ))}
              </div>

              {/* ================= THE RUNNING CABJATRA BRANDED COMMERCIAL CAR ================= */}
              <div className="relative z-20 left-6 sm:left-16 lg:left-24 flex items-center">
                
                {/* Visual Honk Ripple Waves */}
                {honkActive && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 pointer-events-none flex items-center gap-1">
                    <span className="w-6 h-6 rounded-full border-2 border-[#D9A52B] animate-ping" />
                    <span className="w-10 h-10 rounded-full border-2 border-[#D9A52B]/60 animate-ping" />
                    <span className="text-xs font-black text-[#D9A52B] font-mono tracking-widest uppercase">HONK!</span>
                  </div>
                )}

                {/* Car Chassis with Organic Suspension Bounce */}
                <div className={`relative ${isTurbo ? "animate-car-chassis" : "animate-car-chassis"}`}>
                  
                  {/* Volumetric Xenon Headlight Beam casting forward */}
                  {headlightsHigh && (
                    <div className="absolute top-[32px] left-[235px] w-64 sm:w-96 h-28 pointer-events-none z-10 animate-headlight-beam">
                      <svg viewBox="0 0 350 100" className="w-full h-full overflow-visible">
                        <defs>
                          <linearGradient id="headlightCone" x1="0%" y1="30%" x2="100%" y2="50%">
                            <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.85" />
                            <stop offset="20%" stopColor="#FDE047" stopOpacity="0.4" />
                            <stop offset="60%" stopColor="#EAB308" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <polygon points="0,30 350,0 350,100 0,55" fill="url(#headlightCone)" />
                      </svg>
                    </div>
                  )}

                  {/* Red Tail Light Motion Trail */}
                  <div className="absolute top-[38px] -left-12 w-16 h-4 bg-gradient-to-l from-[#EF4444] to-transparent rounded-full blur-[2px] opacity-75 pointer-events-none" />

                  {/* Photorealistic Executive Sedan Side-Profile SVG */}
                  <svg
                    width="250"
                    height="85"
                    viewBox="0 0 250 85"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-20 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]"
                  >
                    <defs>
                      {/* Metallic Deep Forest Teal & Obsidian Body Paint */}
                      <linearGradient id="carBodyTeal" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#136962" />
                        <stop offset="25%" stopColor="#0B4B48" />
                        <stop offset="60%" stopColor="#073B3A" />
                        <stop offset="90%" stopColor="#032425" />
                        <stop offset="100%" stopColor="#011415" />
                      </linearGradient>

                      {/* Roof Specular Light Highlight */}
                      <linearGradient id="roofGlint" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0B4B48" />
                        <stop offset="45%" stopColor="#3DD598" stopOpacity="0.6" />
                        <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0.8" />
                        <stop offset="70%" stopColor="#0B4B48" />
                      </linearGradient>

                      {/* Tinted Windshield Glass Reflection */}
                      <linearGradient id="tintedGlass" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E293B" stopOpacity="0.9" />
                        <stop offset="50%" stopColor="#0F172A" stopOpacity="0.95" />
                        <stop offset="100%" stopColor="#020617" stopOpacity="0.9" />
                      </linearGradient>
                    </defs>

                    {/* Underbody Ground Shadow */}
                    <ellipse cx="125" cy="74" rx="110" ry="6" fill="#000000" fillOpacity="0.8" />

                    {/* Main Aerodynamic Sedan Chassis Silhouette */}
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
                      fill="url(#carBodyTeal)"
                      stroke="#0E5853"
                      strokeWidth="1"
                    />

                    {/* Roof Spine Light Glint */}
                    <path
                      d="M 85,20 L 105,15 L 155,15 L 182,24"
                      stroke="url(#roofGlint)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />

                    {/* Passenger Cabin Tinted Windows with Chrome Border */}
                    <path
                      d="M 86,22 L 130,22 L 130,42 L 67,42 Z"
                      fill="url(#tintedGlass)"
                      stroke="#94A3B8"
                      strokeWidth="0.8"
                    />
                    <path
                      d="M 134,22 L 154,22 L 178,42 L 134,42 Z"
                      fill="url(#tintedGlass)"
                      stroke="#94A3B8"
                      strokeWidth="0.8"
                    />

                    {/* Window Diagonal Glare Reflection */}
                    <polygon points="100,22 110,22 90,42 80,42" fill="#FFFFFF" fillOpacity="0.25" />
                    <polygon points="148,22 154,22 144,42 138,42" fill="#FFFFFF" fillOpacity="0.25" />

                    {/* Car Door Cut Lines */}
                    <line x1="132" y1="20" x2="132" y2="68" stroke="#041E20" strokeWidth="1" />
                    <line x1="78" y1="42" x2="78" y2="68" stroke="#041E20" strokeWidth="0.8" />
                    <line x1="184" y1="42" x2="184" y2="68" stroke="#041E20" strokeWidth="0.8" />

                    {/* Chrome Door Handles */}
                    <rect x="115" y="47" width="8" height="1.8" rx="0.9" fill="#E2E8F0" />
                    <rect x="145" y="47" width="8" height="1.8" rx="0.9" fill="#E2E8F0" />

                    {/* ================= CABJATRA BRANDED DOOR LOGO ================= */}
                    <g transform="translate(94, 52)">
                      <rect x="0" y="0" width="34" height="12" rx="2" fill="#042324" stroke="#D9A52B" strokeWidth="0.6" />
                      <text x="17" y="6.5" fill="#D9A52B" fontSize="4.2" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.4">
                        CABJATRA
                      </text>
                      <text x="17" y="10" fill="#F2C052" fontSize="2.4" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.2">
                        ODISHA CAB
                      </text>
                    </g>

                    {/* ================= ODISHA YELLOW COMMERCIAL PLATE ================= */}
                    <g transform="translate(14, 58)">
                      <rect x="0" y="0" width="13" height="5" rx="1" fill="#FACC15" stroke="#000000" strokeWidth="0.5" />
                      <text x="6.5" y="3.8" fill="#000000" fontSize="2.6" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
                        OD 02 CJ
                      </text>
                    </g>

                    {/* Dual Xenon Projector Headlamp Assembly */}
                    <path
                      d="M 234,48 L 244,52 L 246,58 L 235,56 Z"
                      fill="#FEF08A"
                      stroke="#FFFFFF"
                      strokeWidth="0.8"
                    />
                    <circle cx="242" cy="53" r="2.2" fill="#FFFFFF" />

                    {/* Rear Red LED Tail Lamp Assembly */}
                    <path
                      d="M 20,48 L 28,48 L 26,55 L 18,54 Z"
                      fill="#EF4444"
                      stroke="#DC2626"
                      strokeWidth="0.8"
                    />
                    <rect x="20" y="49" width="4" height="3" rx="0.5" fill="#FFFFFF" fillOpacity="0.8" />
                  </svg>

                  {/* Rotating Front Alloy Wheel */}
                  <div
                    className={`absolute top-[52px] left-[173px] w-[36px] h-[36px] rounded-full z-30 ${
                      isTurbo ? "animate-wheel-spin-fast" : "animate-wheel-spin"
                    }`}
                  >
                    <svg viewBox="0 0 36 36" className="w-full h-full">
                      {/* Black Rubber Tire with Tread Depth */}
                      <circle cx="18" cy="18" r="17" fill="#18181B" stroke="#27272A" strokeWidth="2" />
                      {/* Diamond Cut Alloy Rim Base */}
                      <circle cx="18" cy="18" r="12" fill="#71717A" stroke="#E4E4E7" strokeWidth="1" />
                      {/* Red Brake Caliper */}
                      <rect x="22" y="10" width="4" height="8" rx="1.5" fill="#EF4444" />
                      {/* 5-Spoke Metallic Silver Alloy Blades */}
                      <line x1="18" y1="18" x2="18" y2="6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                      <line x1="18" y1="18" x2="29" y2="14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                      <line x1="18" y1="18" x2="25" y2="28" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                      <line x1="18" y1="18" x2="11" y2="28" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                      <line x1="18" y1="18" x2="7" y2="14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                      {/* Central Golden Hubcap with CJ Monogram */}
                      <circle cx="18" cy="18" r="3.5" fill="#D9A52B" stroke="#000000" strokeWidth="0.6" />
                    </svg>
                  </div>

                  {/* Rotating Rear Alloy Wheel */}
                  <div
                    className={`absolute top-[52px] left-[42px] w-[36px] h-[36px] rounded-full z-30 ${
                      isTurbo ? "animate-wheel-spin-fast" : "animate-wheel-spin"
                    }`}
                  >
                    <svg viewBox="0 0 36 36" className="w-full h-full">
                      {/* Black Rubber Tire with Tread Depth */}
                      <circle cx="18" cy="18" r="17" fill="#18181B" stroke="#27272A" strokeWidth="2" />
                      {/* Diamond Cut Alloy Rim Base */}
                      <circle cx="18" cy="18" r="12" fill="#71717A" stroke="#E4E4E7" strokeWidth="1" />
                      {/* Red Brake Caliper */}
                      <rect x="22" y="10" width="4" height="8" rx="1.5" fill="#EF4444" />
                      {/* 5-Spoke Metallic Silver Alloy Blades */}
                      <line x1="18" y1="18" x2="18" y2="6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                      <line x1="18" y1="18" x2="29" y2="14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                      <line x1="18" y1="18" x2="25" y2="28" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                      <line x1="18" y1="18" x2="11" y2="28" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                      <line x1="18" y1="18" x2="7" y2="14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                      {/* Central Golden Hubcap with CJ Monogram */}
                      <circle cx="18" cy="18" r="3.5" fill="#D9A52B" stroke="#000000" strokeWidth="0.6" />
                    </svg>
                  </div>

                </div>
              </div>

            </div>

            {/* Bottom Highway Feature Strip */}
            <div className="pt-3 flex flex-wrap items-center justify-between text-[11px] text-white/80 gap-2">
              <span className="flex items-center gap-1 text-[#D9A52B] font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive CabJatra Highway Experience • Click any milestone above to lock route</span>
              </span>

              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>100% Yellow-Board</span>
                </span>
                <span className="flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Dual AC Primed</span>
                </span>
                <span className="flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Zero Surge Surcharge</span>
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* ================= BOTTOM THREE TRUST PILLARS ================= */}
        <div className="mt-8 pt-4 border-t border-white/15 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-white/85">
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

      </div>
    </section>
  );
};
