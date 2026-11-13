"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
  MapPin,
  Clock,
  Zap,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";

interface TourPlaceEnv {
  id: string;
  name: string;
  odiaName: string;
  km: string;
  highway: string;
  duration: string;
  tag: string;
  fare: string;
  bgImage: string;
  landmarkSnippet: string;
  bookLink: string;
}

const ODISHA_TOUR_PLACES: TourPlaceEnv[] = [
  {
    id: "marine-drive",
    name: "Puri – Konark Marine Drive",
    odiaName: "ପୁରୀ-କୋଣାର୍କ ମେରାଇନ୍ ଡ୍ରାଇଭ୍",
    km: "35 KM",
    highway: "Coastal Highway Corridor",
    duration: "45 mins Cruise",
    tag: "Scenic Ocean Highway",
    fare: "₹13/km Fixed",
    bgImage:
      "https://images.unsplash.com/photo-1775050416787-fe3179f0679e?q=85&w=2400&auto=format&fit=crop",
    landmarkSnippet: "Casuarina pine forest trails, Bay of Bengal surf & pristine coastal sand dunes.",
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
    bgImage:
      "https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?q=85&w=2400&auto=format&fit=crop",
    landmarkSnippet: "12th-century Jagannath Temple, Grand Road, Swargadwar & Blue Flag Golden Beach.",
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
    bgImage:
      "https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?q=85&w=2400&auto=format&fit=crop",
    landmarkSnippet: "Monolithic cosmic chariot with 24 carved stone wheels & Chandrabhaga Beach.",
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
    bgImage:
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=85&w=2400&auto=format&fit=crop",
    landmarkSnippet: "Satapada Irrawaddy dolphin boat safaris, migratory bird wetlands & Kalijai Island.",
    bookLink: "/book-cab?to=Chilika",
  },
  {
    id: "bbi-airport",
    name: "BBI Airport Transit Hub",
    odiaName: "ଭୁବନେଶ୍ୱର ବିମାନବନ୍ଦର",
    km: "00 KM",
    highway: "Bhubaneswar Capital Express",
    duration: "10 mins Standby",
    tag: "Airport Pickup",
    fare: "Flat Airport Rate",
    bgImage:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=85&w=2400&auto=format&fit=crop",
    landmarkSnippet: "Punctual terminal greeting at Biju Patnaik International Airport with flight sync.",
    bookLink: "/book-cab?service=airport",
  },
];

export const HeroSection: React.FC = () => {
  const [activeTourIndex, setActiveTourIndex] = useState(0);
  const [isSprint, setIsSprint] = useState(false);
  const [honkActive, setHonkActive] = useState(false);

  // Auto-cycle through Odisha's iconic tour places every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTourIndex((prev) => (prev + 1) % ODISHA_TOUR_PLACES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const currentPlace = ODISHA_TOUR_PLACES[activeTourIndex];
  const currentSpeed = isSprint ? 92 : 62;

  const triggerHonk = () => {
    setHonkActive(true);
    setTimeout(() => setHonkActive(false), 900);
  };

  const toggleSprint = () => {
    setIsSprint((prev) => !prev);
  };

  return (
    <section className="relative text-white overflow-hidden min-h-[90vh] sm:min-h-[94vh] flex flex-col justify-between pt-26 sm:pt-32 pb-6 sm:pb-8 border-b border-[#D9A52B]/30 select-none bg-[#011415]">
      
      {/* ================= LAYER 1: REALISTIC PANORAMIC PASSING ODISHA TOUR ENVIRONMENT ================= */}
      {/* The entire hero section is immersed in the actual photographic scenery of Odisha's tour places */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Active High-Res Odisha Destination Photography */}
        <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
          <Image
            key={currentPlace.id}
            src={currentPlace.bgImage}
            alt={`${currentPlace.name} - ${currentPlace.highway}`}
            fill
            priority
            className="object-cover object-center scale-105 transition-transform duration-10000 ease-out"
          />
        </div>

        {/* Cinematic Atmospheric Color Grading: Ensures deep ocean blue/emerald hues while text is 100% readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#011415]/85 via-[#021819]/55 via-50% to-[#011415]/95" />
        <div className="absolute inset-0 bg-radial-[at_center_top] from-transparent via-transparent to-black/50 pointer-events-none" />

        {/* Ambient Warm Golden Horizon Haze */}
        <div className="absolute bottom-28 inset-x-0 h-40 bg-gradient-to-t from-[#D9A52B]/15 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* ================= LAYER 2: HERO HEADLINE & DIRECT CONCIERGE BOOKING PASS ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center space-y-3.5 sm:space-y-4">
        
        {/* Live Status Pill with Radar Beacon */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#D9A52B]/45 text-xs font-semibold text-[#D9A52B] shadow-xl">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
          </span>
          <span>Odisha Commercial Cab Mobility • Live Dispatched Across All 30 Districts</span>
        </div>

        {/* Direct, High-Converting Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold font-display tracking-tight text-white leading-tight sm:leading-[1.08] drop-shadow-2xl">
          Book Reliable Cabs <br />
          <span className="italic font-display font-normal text-[#D9A52B]">
            Across Odisha.
          </span>
        </h1>

        {/* Concise, Benefit-Driven Subtitle */}
        <p className="text-xs sm:text-base lg:text-lg text-white/95 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-md">
          Punctual BBI airport pickups, outstation highway transfers &amp; sacred temple circuits. 100% yellow-board commercial fleet, zero surge pricing &amp; guaranteed on-time dispatch.
        </p>

        {/* Primary Action Buttons */}
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
            className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-full bg-black/45 hover:bg-black/65 backdrop-blur-md border border-white/25 hover:border-[#D9A52B]/70 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98] cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#D9A52B]" />
            <span>Explore Curated Tours</span>
          </Link>
        </div>
      </div>

      {/* ================= LAYER 3: INTERACTIVE ODISHA TOUR PLACES CAROUSEL BAR ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6 sm:mt-8">
        
        {/* Section Header: Interactive Environment Selector */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-[#D9A52B] flex items-center gap-1.5 drop-shadow">
              <Navigation className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Odisha Tour Milestones • Tap to Cruise Circuit</span>
            </span>
          </div>

          {/* Interactive Car Controls: Sprint / Horn */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleSprint}
              className={`px-3 py-1 rounded-xl text-[10.5px] font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-md ${
                isSprint
                  ? "bg-[#D9A52B] text-[#062F31] shadow-[0_0_14px_rgba(217,165,43,0.5)] scale-105"
                  : "bg-black/50 text-white/90 hover:bg-black/70 border border-white/15"
              }`}
              title="Toggle Highway Sprint Speed"
            >
              <Flame className={`w-3.5 h-3.5 ${isSprint ? "text-[#062F31] animate-bounce" : "text-[#D9A52B]"}`} />
              <span>{isSprint ? "Sprint 92 km/h" : "Highway Sprint"}</span>
            </button>

            <button
              type="button"
              onClick={triggerHonk}
              className="px-2.5 py-1 rounded-xl bg-black/50 hover:bg-black/70 border border-white/15 text-white/90 text-[10.5px] font-bold transition flex items-center gap-1 cursor-pointer"
              title="Cab Horn Effect"
            >
              <Volume2 className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span className="hidden sm:inline">Honk</span>
            </button>
          </div>
        </div>

        {/* 5 Authentic Highway Signboard Pills (Odisha Tour Places) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5">
          {ODISHA_TOUR_PLACES.map((place, idx) => {
            const isSelected = activeTourIndex === idx;

            return (
              <button
                key={place.id}
                type="button"
                onClick={() => setActiveTourIndex(idx)}
                className={`text-left p-2.5 rounded-2xl transition-all duration-300 relative overflow-hidden group cursor-pointer border ${
                  isSelected
                    ? "bg-gradient-to-br from-[#064E3B]/95 via-[#043E2E]/95 to-[#022A1F]/95 border-[#D9A52B] shadow-[0_0_22px_rgba(217,165,43,0.35)] scale-[1.02] ring-2 ring-[#D9A52B]/50"
                    : "bg-black/55 hover:bg-black/75 border-white/15 hover:border-[#D9A52B]/50 backdrop-blur-md"
                }`}
              >
                {/* Board Top Tag: Distance Marker */}
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-[10px] font-bold text-[#A7F3D0] uppercase truncate">
                    {place.tag}
                  </span>
                  <span className={`text-[9.5px] font-black font-mono px-2 py-0.5 rounded shadow-xs ${
                    isSelected ? "bg-[#D9A52B] text-[#062F31]" : "bg-white/15 text-white"
                  }`}>
                    {place.km}
                  </span>
                </div>

                {/* Tour Place Name */}
                <div className="font-bold text-xs sm:text-sm text-white font-display line-clamp-1 group-hover:text-[#D9A52B] transition-colors">
                  {place.name}
                </div>

                {/* Highway corridor & travel time */}
                <div className="text-[10px] text-white/75 font-medium flex items-center justify-between mt-0.5">
                  <span className="truncate">{place.highway.split(" ")[0]}</span>
                  <span className="text-white/50 text-[9px] shrink-0">{place.duration}</span>
                </div>

                {/* Active Indicator Bar */}
                {isSelected && (
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#D9A52B] via-[#F2C052] to-[#10B981]" />
                )}
              </button>
            );
          })}
        </div>

      </div>

      {/* ================= LAYER 4: REALISTIC ASPHALT HIGHWAY WITH RUNNING BRANDED CAB ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4 sm:mt-5">
        
        {/* Full-Width Asphalt Highway Deck */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#D9A52B]/45 bg-[#172021] shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-3 sm:p-5">
          
          {/* Active Passing Highway Telemetry HUD Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 border-b border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span className="text-white font-bold">
                Passing Corridor:{" "}
                <span className="text-[#D9A52B] font-display font-bold">
                  {currentPlace.name}
                </span>{" "}
                <span className="text-white/60">({currentPlace.km})</span>
              </span>
              <span className="hidden md:inline-block text-[10.5px] text-[#A7F3D0] bg-black/50 px-2 py-0.5 rounded-full border border-white/15">
                {currentPlace.landmarkSnippet}
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
                href={currentPlace.bookLink}
                className="px-3 py-1 rounded-xl bg-[#D9A52B] hover:brightness-110 text-[#062F31] font-extrabold text-[11px] transition flex items-center gap-1 shadow-md"
              >
                <span>Book This Circuit</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#062F31]" />
              </Link>
            </div>
          </div>

          {/* Highway Asphalt Road Surface with Moving Stripes & Passing Milestone Board */}
          <div className="relative h-28 sm:h-34 w-full mt-2.5 overflow-hidden rounded-2xl bg-gradient-to-b from-[#141B1C] via-[#1D2526] to-[#111718] border-y-2 border-[#3A4A4C] flex items-center shadow-inner">
            
            {/* Real Asphalt Fine Gravel Noise Texture */}
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:5px_5px]" />

            {/* Upper Highway Shoulder Solid White Line */}
            <div className="absolute top-2.5 inset-x-0 h-0.5 bg-white/70 shadow-[0_0_4px_rgba(255,255,255,0.4)]" />

            {/* Passing Indian Highway Milestone Board (Gantry Board that physically glides past!) */}
            <div className="absolute top-1 z-10 animate-passing-milestone-1 pointer-events-none">
              <div className="p-1.5 px-3 rounded-lg bg-[#064E3B] border border-white text-white shadow-xl flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#FACC15] text-[#062F31] flex items-center justify-center font-black text-[9px]">
                  NH
                </div>
                <div>
                  <div className="text-[9px] font-black uppercase tracking-wider text-white">
                    {currentPlace.name.split(" ")[0]} • {currentPlace.km}
                  </div>
                  <div className="text-[7.5px] text-[#A7F3D0]">{currentPlace.highway}</div>
                </div>
              </div>
            </div>

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
                    BEEP!
                  </span>
                </div>
              )}

              {/* Suspension Micro-Bounce Chassis */}
              <div className="relative animate-car-chassis">
                
                {/* Volumetric Xenon Projector Headlight Beam */}
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
              <span>Odisha National Highway Travel • Tap any tour place above to cruise that circuit</span>
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
