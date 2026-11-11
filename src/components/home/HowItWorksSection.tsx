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
} from "lucide-react";

/**
 * Top-Down Realistic Luxury Commercial Chauffeur Sedan SVG
 * Includes Xenon dual headlight beams casting onto the road, tinted glass sunroof,
 * official Odisha commercial yellow-board license plate, and dynamic brake lights.
 */
function RealisticChauffeurCar({
  speed,
  isReversing,
  className = "",
}: {
  speed: number;
  isReversing: boolean;
  className?: string;
}) {
  const isMoving = speed > 2;
  const beamOpacity = isMoving ? 0.8 : 0.55;

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Volumetric Dual Headlight Beams (Casting forward down the asphalt road) */}
      <div
        className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-44 pointer-events-none transition-opacity duration-300 z-0"
        style={{ opacity: beamOpacity }}
      >
        <svg viewBox="0 0 160 110" className="w-full h-auto overflow-visible">
          <defs>
            <radialGradient id="headlightLeft" cx="45%" cy="0%" r="90%">
              <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#FDE047" stopOpacity="0.35" />
              <stop offset="70%" stopColor="#FACC15" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="headlightRight" cx="55%" cy="0%" r="90%">
              <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#FDE047" stopOpacity="0.35" />
              <stop offset="70%" stopColor="#FACC15" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
            </radialGradient>
          </defs>
          <polygon points="62,0 15,110 75,110" fill="url(#headlightLeft)" />
          <polygon points="98,0 85,110 145,110" fill="url(#headlightRight)" />
        </svg>
      </div>

      {/* Real Car Drop Shadow on Asphalt */}
      <div className="absolute inset-0 top-1 rounded-2xl bg-black/65 blur-[5px] transform scale-95 pointer-events-none" />

      {/* The Car Body SVG (Top-Down Luxury Commercial Chauffeur Sedan) */}
      <svg
        width="48"
        height="98"
        viewBox="0 0 52 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.55)]"
      >
        <defs>
          {/* Car metallic paint gradient */}
          <linearGradient id="carPaint" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0C4F4B" />
            <stop offset="40%" stopColor="#073B3A" />
            <stop offset="75%" stopColor="#052F30" />
            <stop offset="100%" stopColor="#021C1D" />
          </linearGradient>

          {/* Windshield glare reflection */}
          <linearGradient id="windshieldGlare" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#E0F2FE" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0.85" />
          </linearGradient>

          {/* Roof glass tint */}
          <linearGradient id="sunroofTint" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#021617" />
            <stop offset="100%" stopColor="#062729" />
          </linearGradient>
        </defs>

        {/* 4 Rubber Tires with Rim Detail */}
        <rect x="2" y="16" width="5" height="15" rx="2.5" fill="#111827" stroke="#374151" strokeWidth="0.8" />
        <rect x="45" y="16" width="5" height="15" rx="2.5" fill="#111827" stroke="#374151" strokeWidth="0.8" />
        <rect x="2" y="72" width="5" height="15" rx="2.5" fill="#111827" stroke="#374151" strokeWidth="0.8" />
        <rect x="45" y="72" width="5" height="15" rx="2.5" fill="#111827" stroke="#374151" strokeWidth="0.8" />

        {/* Aerodynamic Chassis Base */}
        <path
          d="M10 12 C10 4, 18 2, 26 2 C34 2, 42 4, 42 12 L44 32 C45 38, 45 68, 44 76 L42 94 C42 101, 35 102, 26 102 C17 102, 10 101, 10 94 L8 76 C7 68, 7 38, 8 32 Z"
          fill="url(#carPaint)"
          stroke="#D9A52B"
          strokeWidth="1.2"
        />

        {/* Side Mirrors */}
        <path d="M6 30 C3 29, 3 34, 6 35 Z" fill="#073B3A" stroke="#D9A52B" strokeWidth="0.8" />
        <path d="M46 30 C49 29, 49 34, 46 35 Z" fill="#073B3A" stroke="#D9A52B" strokeWidth="0.8" />

        {/* Hood Contours */}
        <path d="M15 10 C18 6, 34 6, 37 10 L35 24 C33 26, 19 26, 17 24 Z" fill="#0A4D49" opacity="0.6" />

        {/* Front Windshield with Specular Glare */}
        <path
          d="M13 25 C14 23, 38 23, 39 25 L40 40 C40 41, 12 41, 12 40 Z"
          fill="url(#windshieldGlare)"
          stroke="#062F31"
          strokeWidth="0.8"
        />

        {/* Panoramic Roof / Sunroof with Gold Trim */}
        <rect x="13.5" y="42" width="25" height="26" rx="3" fill="url(#sunroofTint)" stroke="#D9A52B" strokeWidth="0.6" opacity="0.9" />
        <line x1="14" y1="55" x2="38" y2="55" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />

        {/* Rear Windshield */}
        <path
          d="M13.5 70 C14 69, 38 69, 38.5 70 L40 82 C40 83, 12 83, 12 82 Z"
          fill="#0F172A"
          stroke="#062F31"
          strokeWidth="0.8"
        />
        {/* Rear defroster lines */}
        <line x1="16" y1="73" x2="36" y2="73" stroke="#D9A52B" strokeWidth="0.4" opacity="0.6" />
        <line x1="15" y1="76" x2="37" y2="76" stroke="#D9A52B" strokeWidth="0.4" opacity="0.6" />
        <line x1="14" y1="79" x2="38" y2="79" stroke="#D9A52B" strokeWidth="0.4" opacity="0.6" />

        {/* Dual Xenon Headlights (Front Bumper) */}
        <ellipse cx="14" cy="4" rx="3" ry="1.8" fill="#FEF08A" />
        <ellipse cx="38" cy="4" rx="3" ry="1.8" fill="#FEF08A" />
        <circle cx="14" cy="4" r="1.2" fill="#FFFFFF" />
        <circle cx="38" cy="4" r="1.2" fill="#FFFFFF" />

        {/* Odisha Commercial Yellow-Board License Plate (Rear) */}
        <rect x="18" y="96" width="16" height="4.5" rx="1" fill="#FACC15" stroke="#000000" strokeWidth="0.4" />
        <text x="26" y="99.5" fontSize="2.8" fontWeight="bold" fontFamily="monospace" textAnchor="middle" fill="#000000">
          OD 02 CJ
        </text>

        {/* Dual Red LED Taillights (Rear Bumper) */}
        <rect
          x="10.5"
          y="93"
          width="6"
          height="2"
          rx="1"
          fill={isReversing || speed === 0 ? "#EF4444" : "#B91C1C"}
          className="transition-colors"
        />
        <rect
          x="35.5"
          y="93"
          width="6"
          height="2"
          rx="1"
          fill={isReversing || speed === 0 ? "#EF4444" : "#B91C1C"}
          className="transition-colors"
        />
      </svg>
    </div>
  );
}

export const HowItWorksSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const roadTrackRef = useRef<HTMLDivElement>(null);

  // Scroll simulation state
  const [scrollProgress, setScrollProgress] = useState(0); // 0 to 1
  const [carSpeed, setCarSpeed] = useState(0); // km/h
  const [isReversing, setIsReversing] = useState(false);
  const [activeStep, setActiveStep] = useState(0); // 0, 1, 2, 3
  const [roadHeight, setRoadHeight] = useState(800);

  const guaranteeSteps = [
    {
      step: "01",
      km: "KM 00",
      milestone: "Bhubaneswar Departure Hub",
      title: "Select Journey & Vehicle Class",
      desc: "Choose between Airport transfer, Outstation highway trip, Hourly city package, or Curated tour. Select your preferred commercial vehicle from Prime Sedans to Innova Crysta.",
      icon: <CalendarSearch className="w-5 h-5 text-[#D9A52B]" />,
      badge: "No Upfront Payment",
      highlight: "Instant route customization",
      companion: {
        title: "Departure Corridor Ready",
        detail: "BBI Airport / Railway Station / Hotel doorstep pickup across Bhubaneswar, Cuttack & Puri.",
        tag: "Zero Upfront Lock-in",
      },
    },
    {
      step: "02",
      km: "KM 25",
      milestone: "Fleet Safety Inspection",
      title: "Dispatch Fleet Verification",
      desc: "Our Odisha operations desk manually verifies commercial vehicle fitness, yellow-board compliance, sanitized AC interior, and matches an experienced, courteous local chauffeur.",
      icon: <ShieldCheck className="w-5 h-5 text-[#D9A52B]" />,
      badge: "Manual Verification",
      highlight: "Chauffeur record check",
      companion: {
        title: "3-Tier Driver Screening",
        detail: "Police verification, verified commercial badge & thorough background screening on every chauffeur.",
        tag: "100% Commercial Fleet",
      },
    },
    {
      step: "03",
      km: "KM 48",
      milestone: "Reservation Lock-in",
      title: "10% Advance Deposit Only",
      desc: "Once your cab and chauffeur are 100% assigned, lock your reservation with a transparent 10% advance deposit. Zero surge pricing guaranteed. Remaining 90% is settled at destination.",
      icon: <CheckCircle2 className="w-5 h-5 text-[#D9A52B]" />,
      badge: "Accountability Guarantee",
      highlight: "Zero financial lock-in",
      companion: {
        title: "Zero Surge Pricing",
        detail: "Fixed upfront pricing that never spikes during rain, temple rush, or festival late nights.",
        tag: "10% Advance Model",
      },
    },
    {
      step: "04",
      km: "KM 65",
      milestone: "Punctual Destination Arrival",
      title: "Punctual Chauffeur Arrival",
      desc: "Your uniformed chauffeur coordinates via phone & WhatsApp, arrives with AC active at your doorstep or terminal gate 10 mins prior, and handles all luggage with zero cancellations.",
      icon: <UserCheck className="w-5 h-5 text-[#D9A52B]" />,
      badge: "Zero Cancellations",
      highlight: "Guaranteed on-time start",
      companion: {
        title: "Zero Cancellation Guarantee",
        detail: "Unlike ride-hailing apps where drivers cancel on you, CabJatra drivers are contractually committed.",
        tag: "On-Time Dispatch",
      },
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

      // Start when the top of the road reaches 60% of viewport
      // Complete when the bottom reaches 45% of viewport
      const startTrigger = windowHeight * 0.62;
      const endTrigger = windowHeight * 0.38;
      const totalDist = rect.height - (endTrigger - startTrigger);
      const scrolled = startTrigger - rect.top;

      const p = Math.min(1, Math.max(0, scrolled / Math.max(1, totalDist)));
      targetProgress = p;
    };

    const loop = () => {
      const now = performance.now();
      const dt = Math.max(1, now - lastTime);
      lastTime = now;

      // Lerp inertia smoothing (factor 0.12 gives realistic vehicle weight)
      const diff = targetProgress - currentProgress;
      currentProgress += diff * 0.12;

      // Calculate speed based on scroll velocity (0 to 65 km/h)
      const velocity = (currentProgress - lastProgress) / (dt / 1000);
      lastProgress = currentProgress;
      const calculatedSpeed = Math.round(Math.min(70, Math.abs(velocity) * 140));

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
  const carMaxTravel = Math.max(0, roadHeight - 110);
  const carY = scrollProgress * carMaxTravel;

  return (
    <section ref={sectionRef} className="py-8 sm:py-12 lg:py-14 bg-[#F2F5F2] border-b border-[#E5EAE5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E0ECEA]/70 text-[10px] font-bold text-[#073B3A] uppercase tracking-wider mb-2 border border-[#C1DAD7] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
            <span>The Pre-Booked Guarantee</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#182A2B] font-display">
            How CabJatra Works
          </h2>
          <p className="text-xs sm:text-sm text-[#667575] mt-1 sm:mt-1.5 leading-relaxed">
            Unlike on-demand ride-hailing apps where drivers cancel on you repeatedly, CabJatra operates on a verified dispatch model that guarantees vehicle arrival and accountability across Odisha.
          </p>

          {/* Interactive Scroll Hint Badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D5DDD5] text-[11px] font-semibold text-[#073B3A] shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#D9A52B] animate-spin" style={{ animationDuration: "10s" }} />
            <span>Scroll with mouse to drive along the Odisha Highway simulation</span>
          </div>
        </div>

        {/* ================= VERTICAL HIGHWAY SIMULATION TIMELINE ================= */}
        <div ref={roadTrackRef} className="relative mb-8 sm:mb-10">
          {/* ================= DESKTOP & MOBILE ASPHALT ROAD TRACK ================= */}
          {/* Desktop: Centered Highway Spine. Mobile: Left-Aligned Road. */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-10 lg:left-1/2 -translate-x-1/2 w-20 sm:w-24 bg-[#1A2526] rounded-2xl border-x-2 border-white/40 shadow-[inset_0_0_15px_rgba(0,0,0,0.8),0_10px_25px_rgba(0,0,0,0.15)] overflow-visible z-10 pointer-events-none">
            {/* Asphalt subtle surface texture */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:6px_6px]" />

            {/* Road Edge White Solid Shoulder Lines */}
            <div className="absolute inset-y-0 left-1 w-0.5 bg-white/60" />
            <div className="absolute inset-y-0 right-1 w-0.5 bg-white/60" />

            {/* Central Dashed Yellow Road Markings */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 border-r-2 border-dashed border-[#FACC15]/75" />

            {/* Illuminated Highway Laser Trail (Fills behind the car as it drives) */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 bg-gradient-to-b from-[#10B981] via-[#D9A52B] to-[#FEF08A] shadow-[0_0_12px_#D9A52B] transition-all duration-75"
              style={{ height: `${carY + 50}px` }}
            />

            {/* ================= THE REAL SIMULATED CHAUFFEUR CAR ================= */}
            <div
              className="absolute left-1/2 -translate-x-1/2 will-change-transform z-20 pointer-events-auto cursor-grab"
              style={{
                transform: `translate(-50%, ${carY}px)`,
                transition: "transform 0.04s linear",
              }}
            >
              <RealisticChauffeurCar speed={carSpeed} isReversing={isReversing} />

              {/* Live Telemetry HUD Tag (Coordinates with Mouse Scroll) */}
              <div className="absolute -right-32 sm:-right-36 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#062F31]/95 backdrop-blur-md border border-[#D9A52B]/40 text-white text-[10px] font-bold shadow-lg pointer-events-none whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                <Gauge className="w-3 h-3 text-[#D9A52B]" />
                <span className="font-mono text-[#D9A52B]">{carSpeed} km/h</span>
                <span className="text-white/40">•</span>
                <span className="text-[#FAF9F5]">NH-316 Dispatch</span>
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
                  title={`Click to scroll to ${st.milestone}`}
                >
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-[10px] sm:text-xs transition-all duration-300 ${
                      isCurrent
                        ? "bg-[#D9A52B] text-[#062F31] ring-4 ring-[#D9A52B]/40 shadow-[0_0_15px_#D9A52B] scale-110 font-black"
                        : isPassed
                        ? "bg-[#10B981] text-white ring-2 ring-[#10B981]/50 shadow-sm"
                        : "bg-[#062F31] text-[#D9A52B] border border-white/20"
                    }`}
                  >
                    {isPassed && !isCurrent ? <CheckCircle2 className="w-4 h-4" /> : st.step}
                  </div>

                  {/* Micro Kilometer Marker Pill */}
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 hidden sm:block bg-black/80 px-1.5 py-0.2 rounded text-[8px] font-mono text-[#FAF9F5] whitespace-nowrap border border-white/10 pointer-events-none">
                    {st.km}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= 4 GUARANTEE CARDS PROGRESSION ================= */}
          {/* Desktop: Alternating Left & Right. Mobile: Stacked on the Right of Road. */}
          <div className="space-y-8 sm:space-y-14 lg:space-y-16 pl-14 sm:pl-24 lg:pl-0">
            {guaranteeSteps.map((st, idx) => {
              const isEven = idx % 2 === 0;
              const isCurrent = activeStep === idx;
              const isPassed = scrollProgress > idx / 3;

              return (
                <div
                  key={idx}
                  onClick={() => handleMilestoneClick(idx)}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-24 items-center cursor-pointer transition-all duration-300 ${
                    isCurrent ? "scale-[1.01]" : "opacity-90 hover:opacity-100"
                  }`}
                >
                  {/* Left Column (Desktop) */}
                  <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div
                      className={`card-skeuo rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between relative group overflow-hidden transition-all duration-300 ${
                        isCurrent
                          ? "border-2 border-[#D9A52B] ring-2 ring-[#D9A52B]/30 shadow-[0_16px_36px_rgba(217,165,43,0.22)] bg-white"
                          : "hover:border-[#073B3A]/40"
                      }`}
                    >
                      {/* Gold Ambient Top Bevel Accent */}
                      <div
                        className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#D9A52B] to-transparent transition-opacity duration-300 ${
                          isCurrent ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                      />

                      <div>
                        {/* Header: Metallic Step & 3D Icon Bay */}
                        <div className="flex items-center justify-between mb-4 sm:mb-5">
                          <div className="w-12 h-12 rounded-2xl medallion-dark flex items-center justify-center text-[#D9A52B] group-hover:scale-105 transition-transform">
                            {st.icon}
                          </div>
                          <div className="text-right">
                            <span className="font-display font-black text-2xl sm:text-3xl text-[#D9A52B] drop-shadow-sm block leading-none">
                              {st.step}
                            </span>
                            <span className="text-[10px] font-mono text-[#667575] uppercase">{st.km}</span>
                          </div>
                        </div>

                        {/* Badges */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-[9.5px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-b from-[#FAF9F5] to-[#E3EDE3] text-[#073B3A] inline-block border border-[#BED2BE] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_2px_rgba(0,0,0,0.04)]">
                            {st.badge}
                          </span>
                          {isCurrent && (
                            <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#073B3A] text-[#D9A52B] animate-pulse">
                              ● Live Corridor Step
                            </span>
                          )}
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-[#182A2B] group-hover:text-[#073B3A] transition-colors font-display">
                          {st.title}
                        </h3>

                        <p className="text-[11.5px] sm:text-xs text-[#556464] leading-relaxed mt-2.5">
                          {st.desc}
                        </p>
                      </div>

                      {/* Card Footer Feature Pill */}
                      <div className="mt-5 sm:mt-6 pt-3.5 border-t border-[#E5ECE5] flex items-center justify-between text-[11px] text-[#073B3A] font-bold">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                          <span>{st.highlight}</span>
                        </span>
                        <span
                          className={`w-2.5 h-2.5 rounded-full transition-all ${
                            isCurrent
                              ? "bg-[#D9A52B] shadow-[0_0_8px_#D9A52B] scale-125"
                              : "bg-[#D5DDD5]"
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column Companion Assurance Card (Desktop) */}
                  <div
                    className={`hidden lg:block ${
                      isEven ? "lg:order-2 pl-4" : "lg:order-1 pr-4 text-right"
                    }`}
                  >
                    <div
                      className={`p-5 rounded-2xl border transition-all duration-300 ${
                        isCurrent
                          ? "card-skeuo-dark text-white border-[#D9A52B]/40 shadow-lg scale-102"
                          : "bg-white/80 border-[#D5DDD5] text-[#182A2B]"
                      }`}
                    >
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? "" : "justify-end"}`}>
                        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                        <span
                          className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            isCurrent
                              ? "bg-[#D9A52B] text-[#062F31]"
                              : "bg-[#E0ECEA] text-[#073B3A]"
                          }`}
                        >
                          {st.companion.tag}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold font-display leading-tight">
                        {st.companion.title}
                      </h4>
                      <p
                        className={`text-xs mt-1.5 leading-relaxed ${
                          isCurrent ? "text-white/80" : "text-[#556464]"
                        }`}
                      >
                        {st.companion.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* High-Conversion Comparison Matrix: CabJatra vs. Generic Aggregators */}
        <div className="card-skeuo rounded-2xl sm:rounded-3xl overflow-hidden p-5 sm:p-8 lg:p-10">
          <div className="max-w-2xl mb-6 sm:mb-8">
            <span className="text-[9.5px] sm:text-[10px] font-extrabold uppercase tracking-wider text-[#D9A52B] block">
              Why Travelers Choose CabJatra Over Aggregators
            </span>
            <h3 className="text-xl sm:text-3xl font-bold font-display text-[#182A2B] mt-1 drop-shadow-sm">
              The 10% Advance Guarantee Difference
            </h3>
            <p className="text-xs sm:text-sm text-[#667575] mt-1.5 leading-relaxed">
              Why do generic ride-hailing apps fail tourists and families in Odisha? When drivers can cancel at will, your entire holiday schedule breaks down. Here is how our verified dispatch model protects you:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Generic Ride Apps Column */}
            <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-b from-[#FFF5F5] to-[#FEECEC] border-2 border-rose-200/90 shadow-[inset_0_1px_0_#FFF,0_4px_14px_rgba(244,63,94,0.06)] space-y-3.5 sm:space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_6px_#F43F5E]" />
                <h4 className="text-xs sm:text-sm font-black text-rose-950 uppercase tracking-wide">
                  Generic App Aggregators
                </h4>
              </div>

              <ul className="space-y-2.5 sm:space-y-3 text-[11px] sm:text-xs text-[#667575]">
                <li className="flex items-start gap-2 sm:gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Frequent Driver Cancellations:</strong> Drivers cancel if the drop destination doesn&apos;t suit them, leaving you stranded at the airport or hotel.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Unpredictable Surge Pricing:</strong> 2x to 3x surge multipliers slapped onto fares during rain, rush hour, festivals, and late nights.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>AC Haggling &amp; Demands:</strong> Many drivers refuse to turn on air conditioning or demand offline cash extra payments for highway tolls.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>No Human Support:</strong> In case of an emergency or route dispute, passengers are stuck with automated chatbot loops.</span>
                </li>
              </ul>
            </div>

            {/* CabJatra Verified Model Column */}
            <div className="p-5 sm:p-7 rounded-2xl card-skeuo-dark text-white space-y-3.5 sm:space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#D9A52B]/15 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_#10B981]" />
                  <h4 className="text-xs sm:text-sm font-bold text-[#FAF9F5] uppercase tracking-wide">
                    CabJatra Verified Model
                  </h4>
                </div>
                <span className="text-[9.5px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full btn-skeuo-gold text-[#062F31]">
                  100% Guaranteed
                </span>
              </div>

              <ul className="space-y-2.5 sm:space-y-3 text-[11px] sm:text-xs text-[#E0ECEA]/90">
                <li className="flex items-start gap-2 sm:gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A52B] shrink-0 mt-0.5" />
                  <span><strong>Zero Driver Cancellations:</strong> Dedicated vehicle and chauffeur are confirmed in advance. Your ride is locked into our operational dispatch queue.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A52B] shrink-0 mt-0.5" />
                  <span><strong>100% Transparent Fixed Tariffs:</strong> Zero sudden surge gouging. The price quoted is the price honored, day or night.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A52B] shrink-0 mt-0.5" />
                  <span><strong>Standardized Chauffeur AC Fleet:</strong> Full AC operation guaranteed throughout your journey. Chauffeurs are polite, uniformed, and highway certified.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A52B] shrink-0 mt-0.5" />
                  <span><strong>24/7 Human WhatsApp Desk:</strong> Direct phone and WhatsApp operations access with real human coordinators who resolve queries immediately.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
