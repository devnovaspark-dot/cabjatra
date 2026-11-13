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
  Zap,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";

interface TourDestination {
  id: string;
  name: string;
  odiaName: string;
  km: string;
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
    odiaName: "ପୁରୀ-କୋଣାର୍କ ମେରାଇନ୍ ଡ୍ରାଇଭ୍",
    km: "35 KM",
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
    odiaName: "ଶ୍ରୀକ୍ଷେତ୍ର ପୁରୀ ଜଗନ୍ନାଥ ଧାମ",
    km: "60 KM",
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
    odiaName: "କୋଣାର୍କ ସୂର୍ଯ୍ୟ ମନ୍ଦିର",
    km: "65 KM",
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
    odiaName: "ଚିଲିକା ଡଲ୍ଫିନ୍ ହ୍ରଦ",
    km: "105 KM",
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
    odiaName: "ଭୁବନେଶ୍ୱର ଏୟାରପୋର୍ଟ",
    km: "00 KM",
    highway: "Bhubaneswar Capital Express",
    duration: "10 mins Standby",
    tag: "Airport Pickup",
    fare: "Flat Airport Rate",
    landmarkTitle: "Biju Patnaik International Airport Gateway",
    landmarkDetail: "Terminal 1 & 2 meet-and-greet with real-time flight arrival radar sync.",
    bookLink: "/book-cab?service=airport",
  },
];

export const HeroSection: React.FC = () => {
  const [activeDestIndex, setActiveDestIndex] = useState(0);
  const [isSprint, setIsSprint] = useState(false);
  const [headlightsOn, setHeadlightsOn] = useState(true);
  const [honkActive, setHonkActive] = useState(false);

  // Auto-cycle through Odisha tour destinations every 8 seconds
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
    <section className="relative text-white overflow-hidden min-h-[90vh] sm:min-h-[96vh] flex flex-col justify-between pt-26 sm:pt-32 pb-6 sm:pb-8 border-b border-[#D9A52B]/35 select-none bg-gradient-to-b from-[#011213] via-[#021B1C] to-[#042426]">
      
      {/* ================= LAYER 1: FULLY ANIMATED REALISTIC ODISHA SKY & HORIZON (ZERO STATIC IMAGES) ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Dynamic Celestial Sky Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#011415] via-[#032325] via-40% to-[#083532]" />
        
        {/* Twinkling Starry Constellations Texture */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#FDE047_1px,transparent_1px)] [background-size:28px_28px]" />

        {/* Ambient Moon & Golden Coastal Horizon Glow */}
        <div className="absolute top-8 right-16 sm:right-32 w-28 h-28 rounded-full bg-[#FEF08A]/15 blur-xl pointer-events-none" />
        <div className="absolute top-12 right-20 sm:right-36 w-14 h-14 rounded-full bg-gradient-to-tr from-[#FEF08A] to-[#FDE047] opacity-85 shadow-[0_0_40px_rgba(254,240,138,0.6)]" />

        {/* Drifting Clouds Layer */}
        <div className="absolute top-10 inset-x-0 h-32 opacity-25 animate-clouds-glide flex w-[200%] pointer-events-none">
          <svg viewBox="0 0 1200 120" className="w-1/2 h-full text-white/40 fill-current" preserveAspectRatio="none">
            <path d="M 50,60 Q 80,20 120,40 Q 160,10 200,35 Q 240,25 260,60 Q 150,70 50,60 Z" />
            <path d="M 450,70 Q 480,30 520,50 Q 560,20 600,45 Q 650,30 680,70 Z" />
            <path d="M 850,55 Q 890,15 940,35 Q 990,10 1030,40 Q 1070,30 1100,55 Z" />
          </svg>
          <svg viewBox="0 0 1200 120" className="w-1/2 h-full text-white/40 fill-current" preserveAspectRatio="none">
            <path d="M 50,60 Q 80,20 120,40 Q 160,10 200,35 Q 240,25 260,60 Q 150,70 50,60 Z" />
            <path d="M 450,70 Q 480,30 520,50 Q 560,20 600,45 Q 650,30 680,70 Z" />
            <path d="M 850,55 Q 890,15 940,35 Q 990,10 1030,40 Q 1070,30 1100,55 Z" />
          </svg>
        </div>

        {/* Distant Flock of Coastal Migratory Birds (Chilika & Marine Drive) */}
        <div className="absolute top-24 left-0 w-48 h-12 animate-birds-flock opacity-70 pointer-events-none">
          <svg viewBox="0 0 160 40" className="w-full h-full fill-none stroke-[#FEF08A] stroke-[1.4]">
            <path d="M 10,20 Q 18,10 26,20 Q 34,10 42,20" />
            <path d="M 50,15 Q 56,7 62,15 Q 68,7 74,15" />
            <path d="M 85,24 Q 91,16 97,24 Q 103,16 109,24" />
            <path d="M 120,18 Q 126,10 132,18 Q 138,10 144,18" />
          </svg>
        </div>

        {/* Distant Rolling Ocean Waves of the Bay of Bengal */}
        <div className="absolute bottom-36 inset-x-0 h-28 pointer-events-none overflow-hidden opacity-45">
          {/* Deep Sea Surface Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#04282B] via-[#033438] to-transparent" />
          
          {/* Animated Rolling White Foam Wave Crests */}
          <div className="absolute bottom-4 inset-x-0 h-8 animate-ocean-surf flex w-[200%]">
            <svg viewBox="0 0 1200 40" className="w-1/2 h-full fill-none stroke-[#A7F3D0] stroke-[1.2] opacity-75" preserveAspectRatio="none">
              <path d="M 0,25 Q 75,5 150,25 T 300,25 T 450,25 T 600,25 T 750,25 T 900,25 T 1050,25 T 1200,25" />
              <path d="M 0,32 Q 60,18 120,32 T 240,32 T 360,32 T 480,32 T 600,32 T 720,32 T 840,32 T 960,32 T 1080,32 T 1200,32" strokeOpacity="0.5" />
            </svg>
            <svg viewBox="0 0 1200 40" className="w-1/2 h-full fill-none stroke-[#A7F3D0] stroke-[1.2] opacity-75" preserveAspectRatio="none">
              <path d="M 0,25 Q 75,5 150,25 T 300,25 T 450,25 T 600,25 T 750,25 T 900,25 T 1050,25 T 1200,25" />
              <path d="M 0,32 Q 60,18 120,32 T 240,32 T 360,32 T 480,32 T 600,32 T 720,32 T 840,32 T 960,32 T 1080,32 T 1200,32" strokeOpacity="0.5" />
            </svg>
          </div>
        </div>

        {/* ================= LAYER 1B: ICONIC ODISHA TOUR MONUMENTS & COASTAL FORESTS (PROCEDURAL VECTOR) ================= */}
        <div className="absolute bottom-28 inset-x-0 h-44 pointer-events-none overflow-hidden opacity-90">
          <svg viewBox="0 0 1400 160" className="w-full h-full preserve-3d" preserveAspectRatio="none">
            <defs>
              {/* Golden Sunset Light Shimmer on Architecture */}
              <linearGradient id="monumentStone" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#115E59" />
                <stop offset="40%" stopColor="#0B4B48" />
                <stop offset="80%" stopColor="#062F31" />
                <stop offset="100%" stopColor="#021C1D" />
              </linearGradient>

              <linearGradient id="templeGoldGlint" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#062F31" />
                <stop offset="50%" stopColor="#D9A52B" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#062F31" />
              </linearGradient>

              <linearGradient id="sandDune" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#785317" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#062F31" />
              </linearGradient>
            </defs>

            {/* Coastal Golden Sand Dunes of Puri & Chandrabhaga */}
            <path
              d="M 0,160 Q 200,110 400,135 T 800,120 T 1200,130 T 1400,160 Z"
              fill="url(#sandDune)"
            />

            {/* Coastal Swaying Casuarina (Jhau) Trees & Palms along Marine Drive */}
            <g className="animate-tree-sway">
              {/* Palm 1 */}
              <path d="M 80,160 Q 88,100 95,65 Q 60,50 45,68 M 95,65 Q 115,40 140,50 M 95,65 Q 125,75 120,95 M 95,65 Q 70,85 65,105" stroke="#0D5C56" strokeWidth="2.8" fill="none" />
              {/* Casuarina pine cones */}
              <polygon points="170,160 185,75 200,160" fill="#0A4A45" opacity="0.8" />
              <polygon points="185,160 198,60 210,160" fill="#083E3A" opacity="0.9" />
              <polygon points="205,160 218,80 230,160" fill="#0A4A45" opacity="0.75" />
            </g>

            {/* ================= THE SACRED PURI JAGANNATH TEMPLE SHIKHARA ================= */}
            <g transform="translate(340, 0)">
              {/* Towering 214-ft Curvilinear Rekha Deula Spire */}
              <path
                d="M 50,160 L 65,95 L 80,40 L 90,20 L 95,12 L 100,20 L 110,40 L 125,95 L 140,160 Z"
                fill="url(#monumentStone)"
                stroke="#0F766E"
                strokeWidth="1.2"
              />
              {/* Horizontal Kalingan Architectural Carved Ridges */}
              <line x1="68" y1="95" x2="122" y2="95" stroke="#14B8A6" strokeWidth="0.8" opacity="0.6" />
              <line x1="74" y1="70" x2="116" y2="70" stroke="#14B8A6" strokeWidth="0.8" opacity="0.6" />
              <line x1="82" y1="45" x2="108" y2="45" stroke="#14B8A6" strokeWidth="0.8" opacity="0.6" />
              {/* Sacred Neela Chakra (Blue/Gold Wheel at the Crest) */}
              <circle cx="95" cy="11" r="5" stroke="#D9A52B" strokeWidth="1.5" fill="none" />
              <circle cx="95" cy="11" r="1.5" fill="#FACC15" />
              {/* Fluttering Sacred Saffron Patitapabana Flag */}
              <g className="animate-flag-flutter" transform="translate(95, 7)">
                <polygon points="0,0 22,-4 0,-9" fill="#EA580C" />
                <polygon points="0,0 16,-3 0,-7" fill="#F97316" />
              </g>
              {/* Jagamohana (Audience Hall) Pyramid Spire */}
              <polygon points="120,160 148,105 175,160" fill="url(#monumentStone)" stroke="#0F766E" strokeWidth="1" />
            </g>

            {/* ================= THE 13TH-CENTURY KONARK SUN TEMPLE CHARIOT WHEEL ================= */}
            <g transform="translate(680, 45)">
              {/* Konark Jagamohana Stepped Pyramid Silhouette */}
              <polygon points="0,115 45,45 90,115" fill="url(#monumentStone)" stroke="#0F766E" strokeWidth="1" />
              {/* Monumental Colossal 16-Spoke Stone Chariot Wheel */}
              <circle cx="150" cy="85" r="32" stroke="#D9A52B" strokeWidth="3" fill="#042F31" />
              <circle cx="150" cy="85" r="28" stroke="#14B8A6" strokeWidth="1" fill="none" opacity="0.6" />
              <circle cx="150" cy="85" r="8" fill="#D9A52B" stroke="#000000" strokeWidth="1" />
              {/* Carved Spokes with Sunbeams */}
              <line x1="150" y1="53" x2="150" y2="117" stroke="#FDE047" strokeWidth="2" />
              <line x1="118" y1="85" x2="182" y2="85" stroke="#FDE047" strokeWidth="2" />
              <line x1="127" y1="62" x2="173" y2="108" stroke="#D9A52B" strokeWidth="1.5" />
              <line x1="127" y1="108" x2="173" y2="62" stroke="#D9A52B" strokeWidth="1.5" />
            </g>

            {/* ================= CHILIKA LAGOON WATERS & TRADITIONAL BOATS ================= */}
            <g transform="translate(1000, 80)">
              {/* Traditional Wooden Fishing Boat (Nauka) with Triangular Sail */}
              <path d="M 40,55 Q 65,65 90,55 L 85,50 L 45,50 Z" fill="#032123" stroke="#D9A52B" strokeWidth="1" />
              <polygon points="65,50 65,15 85,45" fill="#F8FAFC" opacity="0.85" />
              <polygon points="65,50 65,22 48,46" fill="#E2E8F0" opacity="0.7" />
              {/* Distant Hills of Satapada & Barkul */}
              <path d="M 120,80 Q 180,30 240,80" stroke="#0D5C56" strokeWidth="2" fill="none" />
              <path d="M 220,80 Q 280,20 340,80" stroke="#0A4A45" strokeWidth="2.5" fill="none" />
            </g>

            {/* Casuarina Pines Forest on Right Horizon */}
            <g className="animate-tree-sway" style={{ animationDelay: "1.5s" }}>
              <polygon points="1280,160 1295,70 1310,160" fill="#083E3A" />
              <polygon points="1305,160 1318,55 1330,160" fill="#0A4A45" />
              <polygon points="1325,160 1338,80 1350,160" fill="#083E3A" />
              <polygon points="1345,160 1360,65 1375,160" fill="#0A4A45" />
            </g>
          </svg>
        </div>

      </div>

      {/* ================= LAYER 2: HERO BRANDING & EXECUTIVE BOOKING INTERFACE ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center space-y-3.5 sm:space-y-4">
        
        {/* Status Kicker Pill with Live Beacon */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-[#D9A52B]/50 text-xs font-semibold text-[#D9A52B] shadow-2xl">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
          </span>
          <span>Verified Odisha Highway Network • Direct Dispatch Across 30 Districts</span>
        </div>

        {/* Short, Direct, High-Converting Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold font-display tracking-tight text-white leading-tight sm:leading-[1.08] drop-shadow-2xl">
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
            className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/25 hover:border-[#D9A52B]/70 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98] cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#D9A52B]" />
            <span>Explore Curated Tours</span>
          </Link>
        </div>
      </div>

      {/* ================= LAYER 3: INTERACTIVE ODISHA TOUR PLACES CIRCUIT SELECTOR ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6 sm:mt-8">
        
        {/* Destination Highway Bar Header */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-[#D9A52B] flex items-center gap-1.5 drop-shadow">
              <Navigation className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Odisha Tour Milestones • Tap to Cruise Circuit</span>
            </span>
          </div>

          {/* Interactive Sprint & Horn Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleSprint}
              className={`px-3 py-1 rounded-xl text-[10.5px] font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-md ${
                isSprint
                  ? "bg-[#D9A52B] text-[#062F31] shadow-[0_0_14px_rgba(217,165,43,0.5)] scale-105"
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

        {/* 5 Milestone Signboard Tabs (Authentic Indian National Highway Boards) */}
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
                    ? "bg-gradient-to-br from-[#064E3B]/95 via-[#043E2E]/95 to-[#022A1F]/95 border-[#D9A52B] shadow-[0_0_22px_rgba(217,165,43,0.35)] scale-[1.02] ring-2 ring-[#D9A52B]/50"
                    : "bg-black/60 hover:bg-black/80 border-white/15 hover:border-[#D9A52B]/50 backdrop-blur-md"
                }`}
              >
                {/* Distance & Tag Indicator */}
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-[10px] font-bold text-[#A7F3D0] uppercase truncate">
                    {dest.tag}
                  </span>
                  <span className={`text-[9.5px] font-black font-mono px-2 py-0.5 rounded shadow-xs ${
                    isSelected ? "bg-[#D9A52B] text-[#062F31]" : "bg-white/15 text-white"
                  }`}>
                    {dest.km}
                  </span>
                </div>

                {/* Destination Name */}
                <div className="font-bold text-xs sm:text-sm text-white font-display line-clamp-1 group-hover:text-[#D9A52B] transition-colors">
                  {dest.name}
                </div>

                {/* Corridor detail & duration */}
                <div className="text-[10px] text-white/75 font-medium flex items-center justify-between mt-0.5">
                  <span className="truncate">{dest.highway.split(" ")[0]}</span>
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

      {/* ================= LAYER 4: REALISTIC ASPHALT HIGHWAY DECK & RUNNING BRANDED CAB ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4 sm:mt-5">
        
        {/* Full-Width Asphalt Highway Deck */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#D9A52B]/45 bg-[#172021] shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-3 sm:p-5">
          
          {/* Active Passing Highway Telemetry HUD Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 border-b border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span className="text-white font-bold">
                Passing Corridor:{" "}
                <span className="text-[#D9A52B] font-display font-bold">
                  {activeDest.name}
                </span>{" "}
                <span className="text-white/60">({activeDest.km})</span>
              </span>
              <span className="hidden md:inline-block text-[10.5px] text-[#A7F3D0] bg-black/50 px-2 py-0.5 rounded-full border border-white/15">
                {activeDest.landmarkTitle}
              </span>
            </div>

            {/* Quick Live Route Spec */}
            <div className="flex items-center gap-3 text-[11px]">
              <span className="text-white/80 font-mono">
                Speed: <strong className="text-[#D9A52B]">{currentSpeed} km/h</strong>
              </span>
              <span className="text-white/40">•</span>
              <span className="text-white/80">
                Tariff: <strong className="text-[#10B981]">1.0x Fixed (Zero Surge)</strong>
              </span>
              <span className="text-white/40">•</span>
              <Link
                href={activeDest.bookLink}
                className="px-3 py-1 rounded-xl bg-[#D9A52B] hover:brightness-110 text-[#062F31] font-extrabold text-[11px] transition flex items-center gap-1 shadow-md"
              >
                <span>Book {activeDest.name.split(" ")[0]}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#062F31]" />
              </Link>
            </div>
          </div>

          {/* Highway Asphalt Road Surface with Moving Center Stripes & Passing Milestone Boards */}
          <div className="relative h-28 sm:h-34 w-full mt-2.5 overflow-hidden rounded-2xl bg-gradient-to-b from-[#141B1C] via-[#1D2526] to-[#111718] border-y-2 border-[#3A4A4C] flex items-center shadow-inner">
            
            {/* Real Asphalt Fine Gravel Noise Texture */}
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:5px_5px]" />

            {/* Upper Highway Shoulder Solid White Line */}
            <div className="absolute top-2.5 inset-x-0 h-0.5 bg-white/70 shadow-[0_0_4px_rgba(255,255,255,0.4)]" />

            {/* Passing Indian Highway Milestone Board (Gantry Board 1) */}
            <div className="absolute top-1 z-10 animate-passing-milestone-1 pointer-events-none">
              <div className="p-1.5 px-3 rounded-lg bg-[#064E3B] border border-white text-white shadow-xl flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#FACC15] text-[#062F31] flex items-center justify-center font-black text-[9px]">
                  NH
                </div>
                <div>
                  <div className="text-[9px] font-black uppercase tracking-wider text-white">
                    {activeDest.name.split(" ")[0]} • {activeDest.km}
                  </div>
                  <div className="text-[7.5px] text-[#A7F3D0]">{activeDest.highway}</div>
                </div>
              </div>
            </div>

            {/* Passing Indian Highway Milestone Board (Gantry Board 2) */}
            <div className="absolute top-1 z-10 animate-passing-milestone-2 pointer-events-none">
              <div className="p-1.5 px-3 rounded-lg bg-[#073B3A] border border-[#D9A52B] text-white shadow-xl flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#10B981] text-white flex items-center justify-center font-black text-[9px]">
                  STA
                </div>
                <div>
                  <div className="text-[9px] font-black uppercase tracking-wider text-[#D9A52B]">
                    ODISHA COMMERCIAL HIGHWAY
                  </div>
                  <div className="text-[7.5px] text-white/80">100% Commercial Yellow-Board Fleet</div>
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
                {Array.from({ length: 40 }).map((_, i) => (
                  <span
                    key={i}
                    className="inline-block w-8 sm:w-12 h-1 bg-[#FACC15] mr-6 sm:mr-8 rounded-full shadow-[0_0_8px_rgba(250,204,21,0.7)] shrink-0"
                  />
                ))}
              </div>
            </div>

            {/* Lower Highway Shoulder Solid White Line */}
            <div className="absolute bottom-2.5 inset-x-0 h-0.5 bg-white/70 shadow-[0_0_4px_rgba(255,255,255,0.4)]" />

            {/* ================= THE RUNNING BRANDED COMMERCIAL CAR ================= */}
            <div className="relative z-20 left-4 sm:left-14 lg:left-20 flex items-center">
              
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
                
                {/* Volumetric Xenon Projector Headlight Beam */}
                {headlightsOn && (
                  <div className="absolute top-[28px] left-[225px] w-64 sm:w-96 h-28 pointer-events-none z-10 animate-headlight-beam">
                    <svg viewBox="0 0 350 100" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="headlightBeamVolumetric" x1="0%" y1="30%" x2="100%" y2="50%">
                          <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.85" />
                          <stop offset="20%" stopColor="#FDE047" stopOpacity="0.4" />
                          <stop offset="60%" stopColor="#EAB308" stopOpacity="0.15" />
                          <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <polygon points="0,30 350,0 350,100 0,55" fill="url(#headlightBeamVolumetric)" />
                    </svg>
                  </div>
                )}

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
                    {/* Metallic Deep Emerald & Forest Teal Paint */}
                    <linearGradient id="realCarBody" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#147B72" />
                      <stop offset="25%" stopColor="#0B4B48" />
                      <stop offset="65%" stopColor="#073B3A" />
                      <stop offset="90%" stopColor="#032425" />
                      <stop offset="100%" stopColor="#011415" />
                    </linearGradient>

                    {/* Windshield Tint & Sky Reflection */}
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

                {/* Front Spinning Alloy Wheel */}
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

          {/* Bottom Highway Feature Strip */}
          <div className="pt-2.5 flex flex-wrap items-center justify-between text-[11px] text-white/85 gap-2">
            <span className="flex items-center gap-1.5 text-[#D9A52B] font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Realistic Animated Odisha Highway • Tap any tour milestone above to cruise that circuit</span>
            </span>

            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 font-semibold text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                <span>100% Commercial Fleet</span>
              </span>
              <span className="flex items-center gap-1 font-semibold text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                <span>22°C AC Primed</span>
              </span>
              <span className="flex items-center gap-1 font-semibold text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Zero Surge Traps</span>
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* ================= LAYER 5: BOTTOM THREE FOUNDATIONAL SERVICE GUARANTEES ================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4 sm:mt-5 pt-3 border-t border-white/15 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-white/90">
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
