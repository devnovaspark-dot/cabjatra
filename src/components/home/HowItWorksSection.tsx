"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  CalendarSearch,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  XCircle,
  PhoneCall,
  UserCheck,
  Car,
  Compass,
  MapPin,
  Gauge,
  Navigation,
  Zap,
  Check,
} from "lucide-react";

/**
 * Photorealistic Top-Down Executive Commercial Sedan SVG
 * Crafted with realistic metallic reflections, curved aerodynamic contours,
 * tinted windshield with specular glare, panoramic sunroof, alloy rims,
 * Odisha commercial yellow plate, dual Xenon projector headlights with
 * volumetric road illumination, and dynamic LED brake lights.
 */
function RealisticCommercialCar({
  speed,
  isReversing,
  steeringAngle = 0,
  className = "",
}: {
  speed: number;
  isReversing: boolean;
  steeringAngle?: number;
  className?: string;
}) {
  const isMoving = speed > 2;
  const beamOpacity = isMoving ? 0.9 : 0.65;

  return (
    <div
      className={`relative flex flex-col items-center select-none transition-transform duration-150 ${className}`}
      style={{
        transform: `rotate(${steeringAngle}deg)`,
      }}
    >
      {/* Volumetric Dual Xenon Headlight Beams (Casting light onto the dark highway tarmac) */}
      <div
        className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-48 pointer-events-none transition-opacity duration-300 z-0"
        style={{ opacity: beamOpacity }}
      >
        <svg viewBox="0 0 180 130" className="w-full h-auto overflow-visible">
          <defs>
            <radialGradient id="headlightBeamLeft" cx="45%" cy="0%" r="90%">
              <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.9" />
              <stop offset="25%" stopColor="#FDE047" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#EAB308" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="headlightBeamRight" cx="55%" cy="0%" r="90%">
              <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.9" />
              <stop offset="25%" stopColor="#FDE047" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#EAB308" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
            </radialGradient>
          </defs>
          <polygon points="70,0 15,130 85,130" fill="url(#headlightBeamLeft)" />
          <polygon points="110,0 95,130 165,130" fill="url(#headlightBeamRight)" />
        </svg>
      </div>

      {/* Realistic Chassis Contact Shadow & Ambient Occlusion on Asphalt */}
      <div className="absolute inset-0 top-1 rounded-3xl bg-black/75 blur-[7px] transform scale-105 pointer-events-none" />

      {/* Realistic Executive Sedan Body SVG */}
      <svg
        width="54"
        height="112"
        viewBox="0 0 54 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
      >
        <defs>
          {/* Metallic Emerald & Obsidian Body Paint with Curvature Gradient */}
          <linearGradient id="bodyPaintMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0E5853" />
            <stop offset="20%" stopColor="#073B3A" />
            <stop offset="50%" stopColor="#0B4B48" />
            <stop offset="80%" stopColor="#052D2E" />
            <stop offset="100%" stopColor="#021B1C" />
          </linearGradient>

          {/* Central Highlight Spine Reflection */}
          <linearGradient id="spineGlare" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Curved Front Windshield Glass Reflection */}
          <linearGradient id="frontWindshieldGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="35%" stopColor="#BAE6FD" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#0F172A" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#020617" stopOpacity="0.95" />
          </linearGradient>

          {/* Panoramic Sunroof Glass Tint */}
          <linearGradient id="sunroofGlass" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#031A1C" />
            <stop offset="100%" stopColor="#062F31" />
          </linearGradient>

          {/* Alloy Wheel Rim Gradient */}
          <linearGradient id="alloyRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="50%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>

        {/* 4 Performance Rubber Highway Tires with Chrome Alloy Wheels */}
        <g>
          {/* Front Left Tire */}
          <rect x="1.5" y="18" width="6" height="17" rx="3" fill="#0F172A" stroke="#334155" strokeWidth="0.8" />
          <line x1="4.5" y1="21" x2="4.5" y2="32" stroke="url(#alloyRim)" strokeWidth="1.2" strokeLinecap="round" />

          {/* Front Right Tire */}
          <rect x="46.5" y="18" width="6" height="17" rx="3" fill="#0F172A" stroke="#334155" strokeWidth="0.8" />
          <line x1="49.5" y1="21" x2="49.5" y2="32" stroke="url(#alloyRim)" strokeWidth="1.2" strokeLinecap="round" />

          {/* Rear Left Tire */}
          <rect x="1.5" y="78" width="6" height="17" rx="3" fill="#0F172A" stroke="#334155" strokeWidth="0.8" />
          <line x1="4.5" y1="81" x2="4.5" y2="92" stroke="url(#alloyRim)" strokeWidth="1.2" strokeLinecap="round" />

          {/* Rear Right Tire */}
          <rect x="46.5" y="78" width="6" height="17" rx="3" fill="#0F172A" stroke="#334155" strokeWidth="0.8" />
          <line x1="49.5" y1="81" x2="49.5" y2="92" stroke="url(#alloyRim)" strokeWidth="1.2" strokeLinecap="round" />
        </g>

        {/* Aerodynamic Sedan Monocoque Chassis */}
        <path
          d="M11 14 C11 5, 19 3, 27 3 C35 3, 43 5, 43 14 L45 36 C46 42, 46 72, 45 82 L43 100 C43 108, 36 109, 27 109 C18 109, 11 108, 11 100 L9 82 C8 72, 8 42, 9 36 Z"
          fill="url(#bodyPaintMetallic)"
          stroke="#D9A52B"
          strokeWidth="1.2"
        />

        {/* Central Spine Reflection Highlight */}
        <path
          d="M13 14 C13 7, 20 5, 27 5 C34 5, 41 7, 41 14 L43 36 C44 42, 44 72, 43 82 L41 98 C41 105, 34 107, 27 107 C20 107, 13 105, 13 98 L11 82 C10 72, 10 42, 11 36 Z"
          fill="url(#spineGlare)"
        />

        {/* Aerodynamic Side Mirrors with Gold Indicators */}
        <path d="M5.5 32 C2.5 31, 2.5 37, 5.5 38 Z" fill="#073B3A" stroke="#D9A52B" strokeWidth="0.8" />
        <line x1="3" y1="34.5" x2="5.5" y2="34.5" stroke="#FACC15" strokeWidth="0.8" strokeLinecap="round" />

        <path d="M48.5 32 C51.5 31, 51.5 37, 48.5 38 Z" fill="#073B3A" stroke="#D9A52B" strokeWidth="0.8" />
        <line x1="51" y1="34.5" x2="48.5" y2="34.5" stroke="#FACC15" strokeWidth="0.8" strokeLinecap="round" />

        {/* Sculpted Hood Power Bulge Contours */}
        <path d="M16 11 C20 7, 34 7, 38 11 L36 26 C33 28, 21 28, 18 26 Z" fill="#0E5853" opacity="0.5" />
        <line x1="20" y1="12" x2="19" y2="25" stroke="#D9A52B" strokeWidth="0.5" opacity="0.7" />
        <line x1="34" y1="12" x2="35" y2="25" stroke="#D9A52B" strokeWidth="0.5" opacity="0.7" />

        {/* Curved Front Windshield with Crystal Specular Reflection */}
        <path
          d="M13.5 28 C15 25, 39 25, 40.5 28 L41.5 44 C41.5 45, 12.5 45, 12.5 44 Z"
          fill="url(#frontWindshieldGlass)"
          stroke="#062F31"
          strokeWidth="0.8"
        />

        {/* Luxury Glass Panoramic Sunroof with Champagne Bevel */}
        <rect x="14.5" y="46" width="25" height="28" rx="3.5" fill="url(#sunroofGlass)" stroke="#D9A52B" strokeWidth="0.7" />
        <line x1="15" y1="60" x2="39" y2="60" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />

        {/* Rear Windshield Glass */}
        <path
          d="M14 76 C15 74.5, 39 74.5, 40 76 L41.5 89 C41.5 90, 12.5 90, 12.5 89 Z"
          fill="#0F172A"
          stroke="#062F31"
          strokeWidth="0.8"
        />
        {/* Subtle Rear Defroster Filaments */}
        <line x1="16" y1="79" x2="38" y2="79" stroke="#D9A52B" strokeWidth="0.4" opacity="0.6" />
        <line x1="15" y1="82" x2="39" y2="82" stroke="#D9A52B" strokeWidth="0.4" opacity="0.6" />
        <line x1="14" y1="85" x2="40" y2="85" stroke="#D9A52B" strokeWidth="0.4" opacity="0.6" />

        {/* Dual Projector Headlights (Crystal Lenses) */}
        <ellipse cx="15" cy="5" rx="3.2" ry="2" fill="#FEF08A" />
        <circle cx="15" cy="5" r="1.5" fill="#FFFFFF" />
        <ellipse cx="39" cy="5" rx="3.2" ry="2" fill="#FEF08A" />
        <circle cx="39" cy="5" r="1.5" fill="#FFFFFF" />

        {/* Odisha Commercial Yellow-Board Registration Plate */}
        <rect x="18" y="103" width="18" height="4.5" rx="1" fill="#FACC15" stroke="#000000" strokeWidth="0.4" />
        <text x="27" y="106.5" fontSize="2.8" fontWeight="bold" fontFamily="monospace" textAnchor="middle" fill="#000000">
          OD 02 CJ
        </text>

        {/* Dual Red LED Tail-lights (Active on slow/reverse) */}
        <rect
          x="11"
          y="100"
          width="6.5"
          height="2.5"
          rx="1"
          fill={isReversing || speed === 0 ? "#EF4444" : "#DC2626"}
          className="transition-colors"
        />
        <rect
          x="36.5"
          y="100"
          width="6.5"
          height="2.5"
          rx="1"
          fill={isReversing || speed === 0 ? "#EF4444" : "#DC2626"}
          className="transition-colors"
        />
      </svg>
    </div>
  );
}

export const HowItWorksSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const roadTrackRef = useRef<HTMLDivElement>(null);

  // Scroll simulation physics state
  const [scrollProgress, setScrollProgress] = useState(0); // 0 to 1
  const [carSpeed, setCarSpeed] = useState(0); // km/h
  const [isReversing, setIsReversing] = useState(false);
  const [steeringAngle, setSteeringAngle] = useState(0);
  const [activeStep, setActiveStep] = useState(0); // 0, 1, 2, 3
  const [roadHeight, setRoadHeight] = useState(850);

  // 4 Focused, Non-Text-Heavy Guarantee Steps
  const guaranteeSteps = [
    {
      step: "01",
      km: "KM 00",
      milestone: "Bhubaneswar Departure Hub",
      title: "Select Journey & Vehicle Class",
      desc: "Pick your travel format—Airport pickup, Outstation highway trip, or Tour circuit. Select your verified AC Sedan, Innova Crysta, or Urbania with zero upfront lock-in.",
      icon: <CalendarSearch className="w-5 h-5 text-[#D9A52B]" />,
      badge: "No Upfront Payment",
      feature: "Instant route customization & transparent quote",
      corridor: "NH-316 Coastal Hub • Live Standby",
    },
    {
      step: "02",
      km: "KM 25",
      milestone: "Fleet Safety Inspection",
      title: "Dispatch Fleet Verification",
      desc: "Our Odisha operations desk manually verifies commercial vehicle fitness, yellow-board compliance, and matches an experienced, police-verified local driver.",
      icon: <ShieldCheck className="w-5 h-5 text-[#D9A52B]" />,
      badge: "Manual Verification",
      feature: "Background verified & highway-certified driver",
      corridor: "State Transport Authority (STA) Compliant",
    },
    {
      step: "03",
      km: "KM 48",
      milestone: "Reservation Lock-in",
      title: "10% Advance Deposit Model",
      desc: "Once your cab and driver are allocated, lock your ride with a transparent 10% advance deposit. Zero surge pricing guaranteed. Remaining 90% is settled at drop.",
      icon: <CheckCircle2 className="w-5 h-5 text-[#D9A52B]" />,
      badge: "Accountability Guarantee",
      feature: "Zero surge traps • 100% refundable on 6hr notice",
      corridor: "Bank-Grade Razorpay / UPI Security",
    },
    {
      step: "04",
      km: "KM 65",
      milestone: "Punctual Destination Arrival",
      title: "Punctual Driver Arrival",
      desc: "Your professional driver coordinates via phone & WhatsApp, arrives with AC active at your doorstep 10 mins prior, and handles all luggage with zero cancellations.",
      icon: <UserCheck className="w-5 h-5 text-[#D9A52B]" />,
      badge: "Zero Cancellations",
      feature: "Guaranteed on-time arrival with luggage assistance",
      corridor: "Puri Jagannath Dham • Arrival Terminal",
    },
  ];

  // Measure road height on mount and resize
  useEffect(() => {
    const updateRoadHeight = () => {
      if (roadTrackRef.current) {
        setRoadHeight(roadTrackRef.current.offsetHeight);
      }
    };
    updateRoadHeight();
    window.addEventListener("resize", updateRoadHeight);
    return () => window.removeEventListener("resize", updateRoadHeight);
  }, []);

  // Butter-Smooth Scroll Physics Loop using requestAnimationFrame & Lerp
  useEffect(() => {
    let animationFrameId: number;
    let targetProgress = 0;
    let currentProgress = 0;
    let lastProgress = 0;
    let lastTime = performance.now();

    const handleScroll = () => {
      if (!roadTrackRef.current) return;
      const rect = roadTrackRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Realistic highway trigger range
      const startTrigger = windowHeight * 0.65;
      const endTrigger = windowHeight * 0.35;
      const totalDist = rect.height - (endTrigger - startTrigger);
      const scrolled = startTrigger - rect.top;

      const p = Math.min(1, Math.max(0, scrolled / Math.max(1, totalDist)));
      targetProgress = p;
    };

    const loop = () => {
      const now = performance.now();
      const dt = Math.max(1, now - lastTime);
      lastTime = now;

      // Inertia smoothing factor (0.1 gives realistic vehicle mass)
      const diff = targetProgress - currentProgress;
      currentProgress += diff * 0.1;

      // Calculate speed based on scroll velocity (0 to 75 km/h)
      const velocity = (currentProgress - lastProgress) / (dt / 1000);
      lastProgress = currentProgress;
      const calculatedSpeed = Math.round(Math.min(75, Math.abs(velocity) * 150));

      // Gentle steering angle based on scroll direction & speed
      const steer = Math.max(-6, Math.min(6, diff * 120));
      setSteeringAngle(steer);

      setCarSpeed(calculatedSpeed);
      setIsReversing(diff < -0.002);
      setScrollProgress(currentProgress);

      // Determine active milestone
      if (currentProgress < 0.28) setActiveStep(0);
      else if (currentProgress < 0.55) setActiveStep(1);
      else if (currentProgress < 0.82) setActiveStep(2);
      else setActiveStep(3);

      animationFrameId = requestAnimationFrame(loop);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Interactive step jump on click
  const handleMilestoneClick = (idx: number) => {
    if (!roadTrackRef.current) return;
    const rect = roadTrackRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const targetY = scrollTop + rect.top + (idx / 3) * (rect.height * 0.75) - windowHeight * 0.25;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  // Car travel bounds
  const carMaxTravel = Math.max(0, roadHeight - 120);
  const carY = scrollProgress * carMaxTravel;

  return (
    <section ref={sectionRef} className="py-10 sm:py-14 lg:py-16 bg-[#F2F5F2] border-b border-[#E5EAE5] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Crisp, Non-Content-Heavy Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E0ECEA] text-xs font-bold text-[#073B3A] uppercase tracking-wider mb-2.5 border border-[#C1DAD7] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
            <span>The Pre-Booked Guarantee</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#182A2B] font-display tracking-tight">
            How CabJatra Works
          </h2>
          <p className="text-xs sm:text-sm text-[#556464] mt-2 leading-relaxed">
            Our 4-step verified dispatch model guarantees zero cancellations, 100% yellow-board commercial fleet, and transparent tariffs across Odisha.
          </p>

          {/* Interactive Scroll Hint Badge */}
          <div className="mt-3.5 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D5DDD5] text-xs font-semibold text-[#073B3A] shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#D9A52B] animate-spin" style={{ animationDuration: "10s" }} />
            <span>Scroll to drive along the NH-316 Highway</span>
          </div>
        </div>

        {/* ================= VERTICAL HIGHWAY SIMULATION TIMELINE ================= */}
        <div ref={roadTrackRef} className="relative mb-12 sm:mb-16">
          {/* ================= PHOTOREALISTIC ASPHALT HIGHWAY ================= */}
          {/* Desktop: Centered Highway Spine. Mobile: Left-Aligned Road. */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-10 lg:left-1/2 -translate-x-1/2 w-20 sm:w-26 bg-[#172021] rounded-2xl border-x-2 border-[#334446] shadow-[inset_0_0_20px_rgba(0,0,0,0.9),0_12px_30px_rgba(0,0,0,0.2)] overflow-visible z-10 pointer-events-none">
            {/* Asphalt Fine Gravel Noise Texture */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:5px_5px]" />

            {/* Alternating Red & White Road Curb Rumble Strips */}
            <div className="absolute inset-y-0 left-0 w-1 bg-[repeating-linear-gradient(to_bottom,#EF4444,#EF4444_12px,#FFFFFF_12px,#FFFFFF_24px)] opacity-80" />
            <div className="absolute inset-y-0 right-0 w-1 bg-[repeating-linear-gradient(to_bottom,#EF4444,#EF4444_12px,#FFFFFF_12px,#FFFFFF_24px)] opacity-80" />

            {/* Solid White Highway Shoulder Lines */}
            <div className="absolute inset-y-0 left-2 w-0.5 bg-white/70 shadow-[0_0_3px_rgba(255,255,255,0.4)]" />
            <div className="absolute inset-y-0 right-2 w-0.5 bg-white/70 shadow-[0_0_3px_rgba(255,255,255,0.4)]" />

            {/* Dashed Center Yellow Lane Markings */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 border-r-2 border-dashed border-[#FACC15]/85 shadow-[0_0_5px_rgba(250,204,21,0.3)]" />

            {/* Illuminated Laser Trail Behind the Car */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 bg-gradient-to-b from-[#10B981] via-[#D9A52B] to-[#FEF08A] shadow-[0_0_12px_#D9A52B] transition-all duration-75"
              style={{ height: `${carY + 56}px` }}
            />

            {/* ================= THE REAL SIMULATED COMMERCIAL SEDAN ================= */}
            <div
              className="absolute left-1/2 -translate-x-1/2 will-change-transform z-20 pointer-events-auto cursor-grab"
              style={{
                transform: `translate(-50%, ${carY}px)`,
                transition: "transform 0.04s linear",
              }}
            >
              <RealisticCommercialCar
                speed={carSpeed}
                isReversing={isReversing}
                steeringAngle={steeringAngle}
              />

              {/* Digital Cockpit HUD Tag — Neatly Centered Under Car, Never Overlapping Side Cards */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 hidden md:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#062F31]/95 backdrop-blur-md border border-[#D9A52B]/50 text-white text-[9.5px] font-bold shadow-xl pointer-events-none whitespace-nowrap z-30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                <Gauge className="w-3 h-3 text-[#D9A52B]" />
                <span className="font-mono text-[#D9A52B]">{carSpeed} km/h</span>
                <span className="text-white/40">•</span>
                <span className="text-[#FAF9F5]">NH-316</span>
              </div>
            </div>

            {/* 4 Checkpoint Nodes Stationed on the Road */}
            {guaranteeSteps.map((st, i) => {
              const nodeTop = `${(i / 3) * 100}%`;
              const isPassed = scrollProgress >= i / 3 - 0.05;
              const isCurrent = activeStep === i;

              return (
                <div
                  key={i}
                  onClick={() => handleMilestoneClick(i)}
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto cursor-pointer group"
                  style={{ top: nodeTop }}
                  title={`Click to navigate to ${st.milestone}`}
                >
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                      isCurrent
                        ? "bg-[#D9A52B] text-[#062F31] ring-4 ring-[#D9A52B]/40 shadow-[0_0_18px_#D9A52B] scale-110 font-black"
                        : isPassed
                        ? "bg-[#10B981] text-white ring-2 ring-[#10B981]/50 shadow-sm"
                        : "bg-[#062F31] text-[#D9A52B] border border-white/20"
                    }`}
                  >
                    {isPassed && !isCurrent ? <Check className="w-4 h-4 stroke-[2.5]" /> : st.step}
                  </div>

                  {/* Kilometer Marker Pill on Asphalt */}
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 hidden sm:block bg-black/85 px-1.5 py-0.5 rounded text-[8px] font-mono text-[#FAF9F5] whitespace-nowrap border border-white/10 pointer-events-none">
                    {st.km}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= 4 CLEAN, ALTERNATING LUXURY STEP CARDS ================= */}
          {/* Desktop: Alternating Left & Right for perfect breathing room. Mobile: Stacked beside road. */}
          <div className="space-y-10 sm:space-y-14 lg:space-y-20 pl-16 sm:pl-28 lg:pl-0">
            {guaranteeSteps.map((st, idx) => {
              const isEven = idx % 2 === 0;
              const isCurrent = activeStep === idx;

              return (
                <div
                  key={idx}
                  onClick={() => handleMilestoneClick(idx)}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-32 items-center cursor-pointer"
                >
                  {/* Alternating Step Placement: Even on Left, Odd on Right */}
                  <div
                    className={`transition-all duration-300 ${
                      isEven ? "lg:col-start-1" : "lg:col-start-2"
                    } ${isCurrent ? "scale-[1.02]" : "opacity-90 hover:opacity-100"}`}
                  >
                    <div
                      className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                        isCurrent
                          ? "bg-white border-2 border-[#D9A52B] ring-4 ring-[#D9A52B]/20 shadow-[0_20px_50px_rgba(217,165,43,0.18)]"
                          : "card-skeuo hover:border-[#073B3A]/40 shadow-card"
                      }`}
                    >
                      {/* Gold Top Accent Bar */}
                      <div
                        className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#D9A52B] to-transparent transition-opacity duration-300 ${
                          isCurrent ? "opacity-100" : "opacity-0"
                        }`}
                      />

                      <div>
                        {/* Header: Medallion Icon, Step Numeral & Milestone */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl medallion-dark flex items-center justify-center text-[#D9A52B] shadow-sm">
                              {st.icon}
                            </div>
                            <div>
                              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E0ECEA] text-[#073B3A] border border-[#C1DAD7]">
                                {st.badge}
                              </span>
                              <span className="text-[11px] font-mono text-[#667575] block mt-1">
                                {st.milestone}
                              </span>
                            </div>
                          </div>

                          <div className="text-right">
                            <span className="font-display font-black text-3xl sm:text-4xl text-[#D9A52B] drop-shadow-sm block leading-none">
                              {st.step}
                            </span>
                            <span className="text-[10px] font-mono font-bold text-[#073B3A] bg-[#EEF2EE] px-2 py-0.5 rounded-md mt-1 inline-block">
                              {st.km}
                            </span>
                          </div>
                        </div>

                        {/* Step Title */}
                        <h3 className="text-lg sm:text-xl font-bold text-[#182A2B] font-display">
                          {st.title}
                        </h3>

                        {/* Concise, Crisp Description */}
                        <p className="text-xs sm:text-sm text-[#556464] leading-relaxed mt-2 font-medium">
                          {st.desc}
                        </p>
                      </div>

                      {/* Card Footer Feature Strip */}
                      <div className="mt-5 pt-3.5 border-t border-[#EEF2EE] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#073B3A] font-semibold">
                        <span className="flex items-center gap-1.5 text-emerald-700">
                          <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                          <span>{st.feature}</span>
                        </span>
                        <span className="text-[10.5px] text-[#8A9797] font-medium hidden sm:inline">
                          {st.corridor}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Empty Column Filler on Desktop to Maintain Alternating Balance */}
                  <div
                    className={`hidden lg:flex items-center ${
                      isEven ? "lg:col-start-2 justify-start pl-6" : "lg:col-start-1 justify-end pr-6"
                    }`}
                  >
                    <div className="p-3 rounded-2xl bg-white/70 backdrop-blur-md border border-[#D5DDD5] text-xs text-[#667575] flex items-center gap-2 shadow-xs">
                      <MapPin className="w-3.5 h-3.5 text-[#D9A52B]" />
                      <span className="font-semibold text-[#182A2B]">{st.milestone}</span>
                      <span className="text-[#8A9797]">• {st.km}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* High-Conversion Comparison Matrix: CabJatra vs. Generic Aggregators */}
        <div className="card-skeuo rounded-3xl overflow-hidden p-6 sm:p-8 lg:p-10 shadow-card">
          <div className="max-w-xl mb-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#D9A52B] block">
              Transparent Travel Standard
            </span>
            <h3 className="text-xl sm:text-3xl font-bold font-display text-[#182A2B] mt-1">
              The 10% Advance Guarantee Difference
            </h3>
            <p className="text-xs sm:text-sm text-[#667575] mt-1.5 leading-relaxed">
              Why do generic ride-hailing apps fail tourists and families in Odisha? When drivers can cancel at will, schedules fall apart. Here is how our verified dispatch model protects you:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Generic Ride Apps Column */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#FFF5F5] to-[#FEECEC] border-2 border-rose-200/90 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_6px_#F43F5E]" />
                <h4 className="text-xs sm:text-sm font-black text-rose-950 uppercase tracking-wide">
                  Generic App Aggregators
                </h4>
              </div>

              <ul className="space-y-2.5 text-xs text-[#667575]">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Driver Cancellations:</strong> Frequent cancellations leaving passengers stranded at airports or temple gates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Surge Pricing Spikes:</strong> Sudden 2x–3x surge multipliers during rain, late nights, or festival rush.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>AC Haggling &amp; Demands:</strong> Drivers refusing air conditioning or demanding unexpected offline toll cash.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Automated Bot Loops:</strong> No human dispatchers to resolve urgent coordination issues.</span>
                </li>
              </ul>
            </div>

            {/* CabJatra Verified Model Column */}
            <div className="p-5 sm:p-6 rounded-2xl card-skeuo-dark text-white space-y-3 relative overflow-hidden shadow-md">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#D9A52B]/15 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_#10B981]" />
                  <h4 className="text-xs sm:text-sm font-bold text-[#FAF9F5] uppercase tracking-wide">
                    CabJatra Verified Model
                  </h4>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full btn-skeuo-gold text-[#062F31]">
                  100% Guaranteed
                </span>
              </div>

              <ul className="space-y-2.5 text-xs text-[#E0ECEA]/90 relative z-10">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A52B] shrink-0 mt-0.5" />
                  <span><strong>Zero Driver Cancellations:</strong> Your allocated driver and commercial vehicle are contractually locked.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A52B] shrink-0 mt-0.5" />
                  <span><strong>100% Transparent Fixed Tariffs:</strong> Zero sudden surge gouging. Exact fare honored day or night.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A52B] shrink-0 mt-0.5" />
                  <span><strong>Guaranteed Dual-Zone AC:</strong> Pristine commercial vehicle hygiene with sanitized interiors guaranteed.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A52B] shrink-0 mt-0.5" />
                  <span><strong>24/7 Human WhatsApp Desk:</strong> Direct phone and WhatsApp coordination with real Odisha dispatchers.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
