"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarSearch,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  UserCheck,
  Car,
  Compass,
  MapPin,
  Check,
  X,
  Lock,
  PhoneCall,
  MessageSquare,
  Plane,
  ChevronDown,
  Zap,
  Award,
  Gauge,
  Navigation,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";
import { BrandLogo } from "@/components/common/BrandLogo";
import { Icon3DCheck, Icon3DCross } from "@/components/common/Icon3DBadges";

/**
 * Photorealistic Top-Down Executive Chauffeur Sedan SVG
 * Crafted with realistic metallic reflections, curved aerodynamic contours,
 * tinted windshield with specular glare, panoramic sunroof, alloy rims,
 * Odisha commercial yellow plate, dual Xenon projector headlights with
 * volumetric road illumination, and dynamic LED brake lights.
 */
function RealisticChauffeurCar({
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
      {/* Volumetric Dual Xenon Headlight Beams */}
      <div
        className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-48 pointer-events-none transition-opacity duration-300 z-0"
        style={{ opacity: beamOpacity }}
      >
        <svg viewBox="0 0 180 130" className="w-full h-auto overflow-visible">
          <defs>
            <radialGradient id="hwHeadlightLeft" cx="45%" cy="0%" r="90%">
              <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.9" />
              <stop offset="25%" stopColor="#FDE047" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#EAB308" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="hwHeadlightRight" cx="55%" cy="0%" r="90%">
              <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.9" />
              <stop offset="25%" stopColor="#FDE047" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#EAB308" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
            </radialGradient>
          </defs>
          <polygon points="70,0 15,130 85,130" fill="url(#hwHeadlightLeft)" />
          <polygon points="110,0 95,130 165,130" fill="url(#hwHeadlightRight)" />
        </svg>
      </div>

      {/* Realistic Chassis Contact Shadow on Asphalt */}
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
          <linearGradient id="hwBodyPaint" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0E5853" />
            <stop offset="20%" stopColor="#073B3A" />
            <stop offset="50%" stopColor="#0B4B48" />
            <stop offset="80%" stopColor="#052D2E" />
            <stop offset="100%" stopColor="#021B1C" />
          </linearGradient>

          <linearGradient id="hwSpineGlare" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="hwFrontGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="35%" stopColor="#BAE6FD" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#0F172A" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#020617" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="hwAlloyRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="50%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>

        {/* 4 Rubber Tires with Alloy Wheels */}
        <g>
          <rect x="1.5" y="18" width="6" height="17" rx="3" fill="#0F172A" stroke="#334155" strokeWidth="0.8" />
          <line x1="4.5" y1="21" x2="4.5" y2="32" stroke="url(#hwAlloyRim)" strokeWidth="1.2" strokeLinecap="round" />

          <rect x="46.5" y="18" width="6" height="17" rx="3" fill="#0F172A" stroke="#334155" strokeWidth="0.8" />
          <line x1="49.5" y1="21" x2="49.5" y2="32" stroke="url(#hwAlloyRim)" strokeWidth="1.2" strokeLinecap="round" />

          <rect x="1.5" y="78" width="6" height="17" rx="3" fill="#0F172A" stroke="#334155" strokeWidth="0.8" />
          <line x1="4.5" y1="81" x2="4.5" y2="92" stroke="url(#hwAlloyRim)" strokeWidth="1.2" strokeLinecap="round" />

          <rect x="46.5" y="78" width="6" height="17" rx="3" fill="#0F172A" stroke="#334155" strokeWidth="0.8" />
          <line x1="49.5" y1="81" x2="49.5" y2="92" stroke="url(#hwAlloyRim)" strokeWidth="1.2" strokeLinecap="round" />
        </g>

        {/* Aerodynamic Chassis */}
        <path
          d="M 12 10 C 14 3, 40 3, 42 10 C 47 16, 49 32, 48 56 C 49 80, 47 96, 42 102 C 40 108, 14 108, 12 102 C 7 96, 5 80, 6 56 C 5 32, 7 16, 12 10 Z"
          fill="url(#hwBodyPaint)"
          stroke="#0F766E"
          strokeWidth="0.8"
        />

        {/* Central Spine Reflection */}
        <path
          d="M 12 10 C 14 3, 40 3, 42 10 C 47 16, 49 32, 48 56 C 49 80, 47 96, 42 102 C 40 108, 14 108, 12 102 C 7 96, 5 80, 6 56 C 5 32, 7 16, 12 10 Z"
          fill="url(#hwSpineGlare)"
        />

        {/* Side Mirrors */}
        <path d="M 5 28 C 1 27, 1 34, 5 33 Z" fill="#042F2E" stroke="#0F766E" strokeWidth="0.5" />
        <path d="M 49 28 C 53 27, 53 34, 49 33 Z" fill="#042F2E" stroke="#0F766E" strokeWidth="0.5" />

        {/* Front Windshield Glass */}
        <path
          d="M 14 26 C 18 24, 36 24, 40 26 L 43 40 C 37 42, 17 42, 11 40 Z"
          fill="url(#hwFrontGlass)"
          stroke="#021718"
          strokeWidth="0.6"
        />

        {/* Rear Windshield Glass */}
        <path
          d="M 13 74 C 18 76, 36 76, 41 74 L 39 85 C 33 87, 21 87, 15 85 Z"
          fill="#020617"
          stroke="#021718"
          strokeWidth="0.6"
        />

        {/* Panoramic Dark Sunroof */}
        <rect x="16" y="44" width="22" height="26" rx="3" fill="#031A1C" stroke="#0F766E" strokeWidth="0.6" />

        {/* Xenon Headlights */}
        <ellipse cx="15" cy="5" rx="3.2" ry="2" fill="#FEF08A" />
        <circle cx="15" cy="5" r="1.5" fill="#FFFFFF" />
        <ellipse cx="39" cy="5" rx="3.2" ry="2" fill="#FEF08A" />
        <circle cx="39" cy="5" r="1.5" fill="#FFFFFF" />

        {/* Odisha Commercial Yellow-Board Registration Plate */}
        <rect x="18" y="103" width="18" height="4.5" rx="1" fill="#FACC15" stroke="#000000" strokeWidth="0.4" />
        <text x="27" y="106.5" fontSize="2.8" fontWeight="bold" fontFamily="monospace" textAnchor="middle" fill="#000000">
          OD 02 CJ
        </text>

        {/* Dual Red LED Tail-lights */}
        <rect
          x="11"
          y="100"
          width="6.5"
          height="2.5"
          rx="1"
          fill={isReversing || speed === 0 ? "#EF4444" : "#DC2626"}
        />
        <rect
          x="36.5"
          y="100"
          width="6.5"
          height="2.5"
          rx="1"
          fill={isReversing || speed === 0 ? "#EF4444" : "#DC2626"}
        />
      </svg>
    </div>
  );
}

export default function HowItWorksPage() {
  const roadTrackRef = useRef<HTMLDivElement>(null);

  // Scroll simulation physics state
  const [scrollProgress, setScrollProgress] = useState(0); // 0 to 1
  const [carSpeed, setCarSpeed] = useState(0); // km/h
  const [isReversing, setIsReversing] = useState(false);
  const [steeringAngle, setSteeringAngle] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [roadHeight, setRoadHeight] = useState(850);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // 4 Focused Highway Milestones
  const highwayMilestones = [
    {
      step: "01",
      km: "KM 00",
      milestone: "Bhubaneswar Departure Hub",
      title: "Select Journey & Vehicle Class",
      desc: "Pick your travel format—Airport pickup at BBI, Outstation highway trip, or Curated Tour Circuit. Inspect our interactive 3D fleet models to pick the ideal Hatchback, Sedan, SUV, Large Car, or Mini Bus with zero upfront lock-in.",
      icon: <CalendarSearch className="w-5 h-5 text-[#D9A52B]" />,
      badge: "Instant Route Selection",
      feature: "Transparent per-km rate & radar tracking option",
      corridor: "NH-316 Coastal Hub • Live Standby",
    },
    {
      step: "02",
      km: "KM 25",
      milestone: "Fleet Safety Inspection",
      title: "Operations Verification & Tariff Quote",
      desc: "Our central Odisha operations desk verifies vehicle readiness, mechanical fitness, yellow-board compliance, and matches an experienced, police-verified local chauffeur.",
      icon: <ShieldCheck className="w-5 h-5 text-[#D9A52B]" />,
      badge: "STA Commercial Check",
      feature: "Background verified & highway-certified chauffeur",
      corridor: "State Transport Authority (STA) Compliant",
    },
    {
      step: "03",
      km: "KM 48",
      milestone: "Reservation Lock-in",
      title: "10% Advance Deposit Model",
      desc: "Once your cab and driver are verified, lock your ride with a transparent 10% advance deposit. Zero surge pricing guaranteed. Settle the remaining 90% at your destination.",
      icon: <CheckCircle2 className="w-5 h-5 text-[#D9A52B]" />,
      badge: "10% Security Model",
      feature: "Zero surge traps • 100% refundable on 6hr notice",
      corridor: "Bank-Grade Razorpay / UPI Security",
    },
    {
      step: "04",
      km: "KM 65",
      milestone: "Punctual Destination Arrival",
      title: "Guaranteed Punctual Chauffeur Arrival",
      desc: "Your uniformed chauffeur coordinates via phone & WhatsApp, arrives with AC pre-cooled 15 mins prior, handles your luggage, and drives you safely with zero cancellations.",
      icon: <UserCheck className="w-5 h-5 text-[#D9A52B]" />,
      badge: "Zero Cancellations",
      feature: "Punctual airport & doorstep greeting with luggage assist",
      corridor: "Puri Jagannath Dham • Arrival Terminal",
    },
  ];

  // The Pre-Booked Guarantee Charter Pillars (Binding Passenger Charter)
  const preBookedGuarantees = [
    {
      clause: "CLAUSE 01",
      title: "Guaranteed Vehicle Allocation",
      tag: "Zero Cancellation SLA",
      seal: "CONTRACTUAL DISPATCH",
      desc: "Once your 10% advance deposit is logged, we legally commit your designated vehicle and chauffeur. While street apps cancel 2 to 3 times leaving passengers stranded, CabJatra provides contractual departure certainty.",
      highlight: "100% Departure Certainty",
      subpoints: [
        "Binding chauffeur assignment logged immediately upon confirmation",
        "Dedicated backup reserve vehicle on standby for emergency redundancy",
        "Digital driver voucher issued with direct WhatsApp supervisor hotline",
      ],
      icon: ShieldCheck,
    },
    {
      clause: "CLAUSE 02",
      title: "100% Commercial Yellow-Board Fleet",
      tag: "STA Legal Compliance",
      seal: "ODISHA STA PERMIT",
      desc: "Every single vehicle operates strictly on yellow commercial registration with comprehensive state passenger transit insurance and rigorous annual RTO fitness certification. We never dispatch illegal white-plate cars.",
      highlight: "Comprehensive Insurance",
      subpoints: [
        "100% legal yellow-board commercial permits verified across all RTOs",
        "Comprehensive passenger transit liability coverage for all highway journeys",
        "Zero unauthorized private 'white plate' or uninspected vehicles dispatched",
      ],
      icon: Car,
    },
    {
      clause: "CLAUSE 03",
      title: "Zero Surge Pricing Shield",
      tag: "Transparent Tariffs",
      seal: "CALIBRATED MILEAGE",
      desc: "Our tariffs are fixed and strictly mileage-calibrated before departure. Whether you encounter torrential monsoon storms, late-night BBI airport arrivals, or packed Rath Yatra pilgrim corridors, your tariff remains locked.",
      highlight: "Fixed Highway Mileage",
      subpoints: [
        "Strictly locked per-kilometer tariff that cannot fluctuate after booking",
        "₹0 surge multipliers during rain, festival rushes, or midnight hours",
        "Transparent 90% balance settlement settled directly via UPI or Cash",
      ],
      icon: Zap,
    },
    {
      clause: "CLAUSE 04",
      title: "Pre-Cooled AC & Executive Hygiene",
      tag: "Cabin Quality Standard",
      seal: "22°C PRE-COOLED SLA",
      desc: "Your chauffeur arrives with the cabin pre-cooled to a soothing 22°C at least 15 minutes prior to boarding. Every car passes our mandatory 12-point hygiene checklist, non-smoking cabin audit, and chilled water restock.",
      highlight: "22°C Pre-Cooled AC",
      subpoints: [
        "Guaranteed dual-zone air conditioning running before passenger ingress",
        "Multi-point sanitized upholstery, spotless carpets, and non-smoking cabin",
        "Complimentary chilled packaged mineral water and high-speed phone charging",
      ],
      icon: Award,
    },
  ];

  // Comparison Matrix Data (Street Reality vs CabJatra Standard)
  const comparisonData = [
    {
      category: "Pricing & Surcharges",
      subtitle: "Surge Multipliers vs. Calibrated Transparency",
      street: {
        title: "Arbitrary 2x–3x Surge Surcharges",
        desc: "Aggregators routinely multiply fares by 200%–300% during rain, midnight airport flights, or temple festivals without advance warning.",
      },
      cabjatra: {
        title: "Strict Zero-Surge Mileage Protection",
        desc: "Fixed per-km rate locked with 10% advance deposit. The price agreed upon booking is the exact price you pay, rain or shine.",
      },
    },
    {
      category: "Booking Commitment",
      subtitle: "Cancellation Lottery vs. Contractual Dispatch",
      street: {
        title: "2 to 3 Driver Cancellations Common",
        desc: "Drivers arbitrarily accept and cancel rides based on destination preference, leaving families stranded with heavy luggage at gates.",
      },
      cabjatra: {
        title: "100% Guaranteed Vehicle Allocation",
        desc: "10% deposit creates an enforceable dispatch commitment. Chauffeur details issued hours in advance with zero driver cancellation.",
      },
    },
    {
      category: "Vehicle Legality & Safety",
      subtitle: "Private White Plates vs. Commercial STA Fleet",
      street: {
        title: "Unlicensed Private 'White Plate' Cars",
        desc: "Aggregators frequently dispatch private white-board vehicles that lack commercial permits and carry zero passenger transit insurance.",
      },
      cabjatra: {
        title: "100% Yellow-Board Commercial Fleet",
        desc: "Full Odisha State Transport Authority (STA) commercial permits, comprehensive passenger insurance, and verified fitness certificates.",
      },
    },
    {
      category: "Cabin Climate & Comfort",
      subtitle: "AC Bargaining vs. Pre-Cooled Executive Sanctuary",
      street: {
        title: "AC Refused or Extra Cash Demanded",
        desc: "Drivers frequently refuse to turn on air conditioning in humid weather, run blowers only, or demand off-meter cash bribes.",
      },
      cabjatra: {
        title: "Guaranteed 22°C Pre-Cooled Dual-Zone AC",
        desc: "Cabin pre-cooled 15 minutes before pickup. Full dual-zone AC included throughout your journey with zero bargaining.",
      },
    },
    {
      category: "Chauffeur Standards & Etiquette",
      subtitle: "Temporary Gig Workers vs. Vetted Professionals",
      street: {
        title: "Unvetted Drivers with Zero Accountability",
        desc: "Random gig drivers with unverified backgrounds, erratic driving habits, and no recourse if service quality is substandard.",
      },
      cabjatra: {
        title: "Background-Checked Executive Chauffeurs",
        desc: "Police-verified local chauffeurs in clean uniform with deep route expertise across Odisha's highway corridors and temples.",
      },
    },
  ];

  const faqs = [
    {
      q: "How does the 10% advance deposit model protect me?",
      a: "The 10% advance deposit creates a binding mutual commitment. You are never forced into a 100% upfront lock-in, and our operations desk reserves your designated vehicle and chauffeur. The remaining 90% is settled directly at your final destination via Cash or UPI.",
    },
    {
      q: "What happens if my flight arrives late at Bhubaneswar (BBI) Airport?",
      a: "Our dispatch desk continuously tracks your flight number via live radar. If your flight is delayed or rescheduled, your chauffeur adjusts arrival time automatically at zero extra waiting charge.",
    },
    {
      q: "When and how do I receive my chauffeur's details?",
      a: "Once your 10% advance deposit is verified, your official CabJatra digital ride voucher with booking reference is generated. Your chauffeur's full name, phone number, and vehicle registration are dispatched via WhatsApp well prior to pickup.",
    },
    {
      q: "Can I modify or cancel my reservation?",
      a: "Yes. We offer a flexible cancellation policy: notify us at least 6 hours before departure for a 100% hassle-free refund of your advance deposit. Modifications to pickup time can be coordinated directly with our 24/7 WhatsApp concierge.",
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

  // Butter-Smooth Scroll Physics Loop
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

      const diff = targetProgress - currentProgress;
      currentProgress += diff * 0.1;

      const velocity = (currentProgress - lastProgress) / (dt / 1000);
      lastProgress = currentProgress;
      const calculatedSpeed = Math.round(Math.min(75, Math.abs(velocity) * 150));

      const steer = Math.max(-6, Math.min(6, diff * 120));
      setSteeringAngle(steer);

      setCarSpeed(calculatedSpeed);
      setIsReversing(diff < -0.002);
      setScrollProgress(currentProgress);

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

  const handleMilestoneClick = (idx: number) => {
    if (!roadTrackRef.current) return;
    const rect = roadTrackRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const targetY = scrollTop + rect.top + (idx / 3) * (rect.height * 0.75) - windowHeight * 0.25;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  const carMaxTravel = Math.max(0, roadHeight - 120);
  const carY = scrollProgress * carMaxTravel;

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-[#182A2B]">
      {/* ================= HERO: EDITORIAL WORKFLOW BANNER ================= */}
      {/* pt-36 sm:pt-44 provides ample breathing room below the floating navbar */}
      <section className="relative text-white overflow-hidden pt-36 sm:pt-44 pb-16 sm:pb-20 border-b border-black/20">
        {/* Scenic Coastal Highway Backdrop Photography */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1775050416787-fe3179f0679e?q=85&w=2400&auto=format&fit=crop"
            alt="Puri-Konark Marine Drive Coastal Highway, Odisha"
            fill
            priority
            className="object-cover object-center scale-102 opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#011415]/95 via-[#032123]/90 to-[#FAF9F5]" />
        </div>

        {/* Ambient Radial Lighting Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[640px] h-80 bg-[#D9A52B]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-5">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-[#D9A52B]/40 text-xs font-semibold text-[#D9A52B] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
            <span>The Pre-Booked Guarantee • How It Works</span>
          </div>

          {/* Regal Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight">
            How CabJatra Works: <br />
            <span className="italic font-display font-normal text-[#D9A52B]">
              Punctual, Principled Chauffeur Travel.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-base text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
            From seamless online reservation and our 10% advance deposit model to background-verified chauffeurs and The Pre-Booked Guarantee—explore how we deliver total arrival certainty across Odisha.
          </p>

          {/* 3 Quick Pillar Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-3 text-xs text-white/90">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/15">
              <Lock className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>10% Advance Deposit Model</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/15">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
              <span>100% Commercial Yellow-Board Fleet</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/15">
              <Zap className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Zero Surge Pricing Guarantee</span>
            </span>
          </div>
        </div>
      </section>

      {/* ================= SECTION 1: INTERACTIVE HIGHWAY SIMULATION (HOW IT WORKS / STEP-BY-STEP) ================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F2F5F2] border-b border-[#E5EAE5] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow & Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E0ECEA] text-xs font-bold text-[#073B3A] uppercase tracking-wider mb-2.5 border border-[#C1DAD7] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>The Pre-Booked Guarantee • Step-by-Step Experience</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#182A2B] font-display tracking-tight">
              How to Book &amp; Travel with CabJatra
            </h2>
            <p className="text-xs sm:text-sm text-[#556464] mt-2 leading-relaxed">
              Experience our 4-step verified dispatch lifecycle—from transparent per-km quote and 10% advance deposit to guaranteed chauffeur arrival.
            </p>

            {/* Interactive Scroll Hint Badge */}
            <div className="mt-3.5 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D5DDD5] text-xs font-semibold text-[#073B3A] shadow-xs">
              <Compass className="w-3.5 h-3.5 text-[#D9A52B] animate-spin" style={{ animationDuration: "10s" }} />
              <span>Scroll down to drive along the Odisha Highway</span>
            </div>
          </div>

          {/* ================= VERTICAL HIGHWAY SIMULATION TIMELINE ================= */}
          <div ref={roadTrackRef} className="relative mb-12 sm:mb-16">
            
            {/* ================= PHOTOREALISTIC ASPHALT HIGHWAY ================= */}
            {/* Desktop: Centered Highway Spine. Mobile: Left-Aligned Road. */}
            <div className="absolute top-0 bottom-0 left-6 sm:left-10 lg:left-1/2 -translate-x-1/2 w-20 sm:w-26 bg-[#172021] rounded-2xl border-x-2 border-[#334446] shadow-[inset_0_0_20px_rgba(0,0,0,0.9),0_12px_30px_rgba(0,0,0,0.2)] overflow-visible z-10 pointer-events-none">
              {/* Asphalt Fine Gravel Noise Texture */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:5px_5px]" />

              {/* Red & White Road Curb Rumble Strips */}
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

              {/* ================= THE REAL SIMULATED CHAUFFEUR CAR ================= */}
              <div
                className="absolute left-1/2 -translate-x-1/2 will-change-transform z-20 pointer-events-auto cursor-grab"
                style={{
                  transform: `translate(-50%, ${carY}px)`,
                  transition: "transform 0.04s linear",
                }}
              >
                <RealisticChauffeurCar
                  speed={carSpeed}
                  isReversing={isReversing}
                  steeringAngle={steeringAngle}
                />

                {/* Digital Cockpit HUD Tag */}
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 hidden md:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#062F31]/95 backdrop-blur-md border border-[#D9A52B]/50 text-white text-[9.5px] font-bold shadow-xl pointer-events-none whitespace-nowrap z-30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                  <Gauge className="w-3 h-3 text-[#D9A52B]" />
                  <span className="font-mono text-[#D9A52B]">{carSpeed} km/h</span>
                  <span className="text-white/40">•</span>
                  <span className="text-[#FAF9F5]">NH-316 Highway</span>
                </div>
              </div>

              {/* 4 Checkpoint Nodes Stationed on the Road */}
              {highwayMilestones.map((st, i) => {
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

            {/* ================= 4 ALTERNATING LUXURY STEP CARDS ================= */}
            {/* Desktop: Alternating Left & Right. Mobile: Stacked beside road. */}
            <div className="space-y-10 sm:space-y-14 lg:space-y-20 pl-16 sm:pl-28 lg:pl-0">
              {highwayMilestones.map((st, idx) => {
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
                              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#073B3A] to-[#041F20] flex items-center justify-center text-[#D9A52B] shadow-sm">
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

                          {/* Title & Description */}
                          <h3 className="text-lg sm:text-xl font-bold font-display text-[#182A2B] mb-2 leading-tight">
                            {st.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-[#556464] leading-relaxed">
                            {st.desc}
                          </p>

                          {/* Specific Advantage Box */}
                          <div className="mt-4 p-3 rounded-2xl bg-[#FAF9F5] border border-[#E5EAE5] flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                            <span className="text-xs font-semibold text-[#182A2B] leading-tight">
                              {st.feature}
                            </span>
                          </div>
                        </div>

                        {/* Card Footer: Corridor & Direct Booking Link */}
                        <div className="mt-5 pt-3.5 border-t border-[#EEF2EE] flex items-center justify-between text-xs font-semibold text-[#667575]">
                          <span className="flex items-center gap-1.5 text-[11px] text-[#073B3A] font-bold">
                            <Navigation className="w-3.5 h-3.5 text-[#D9A52B]" />
                            <span>{st.corridor}</span>
                          </span>

                          <Link
                            href="/book-cab"
                            className="inline-flex items-center gap-1 text-[#073B3A] hover:text-[#D9A52B] font-bold transition-colors group/link text-xs"
                          >
                            <span>Book Route</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: THE PRE-BOOKED GUARANTEE (PASSENGER CHARTER) ================= */}
      <section className="py-14 sm:py-20 bg-[#FAF9F5] border-b border-[#E5EAE5] relative overflow-hidden">
        {/* Subtle decorative background watermarks */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#D9A52B]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#073B3A]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E0ECEA]/90 text-[10px] font-extrabold text-[#073B3A] uppercase tracking-wider border border-[#C1DAD7] shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Binding Passenger Charter • Enforceable Mobility SLA</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display text-[#182A2B] tracking-tight">
              The Pre-Booked Guarantee
            </h2>
            <p className="text-xs sm:text-sm text-[#556464] leading-relaxed max-w-2xl mx-auto">
              Our 4 binding operational commitments designed to eliminate the anxiety of travel across Odisha. Real contractual certainty backed by official dispatch protocols.
            </p>
          </div>

          {/* SLA Performance Highlights Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12">
            {[
              { stat: "100%", label: "Departure Certainty", sub: "Contractual allocation" },
              { stat: "10%", label: "Advance Commitment", sub: "Zero full lock-in" },
              { stat: "₹0", label: "Surge Extortion", sub: "Calibrated fixed tariffs" },
              { stat: "22°C", label: "Pre-Cooled AC", sub: "15 mins before boarding" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-[#DCE4DC] shadow-xs text-center flex flex-col items-center justify-center hover:shadow-md transition-shadow"
              >
                <div className="text-xl sm:text-2xl font-black font-display text-[#073B3A] flex items-center gap-1">
                  <span>{item.stat}</span>
                  <Sparkles className="w-3 h-3 text-[#D9A52B]" />
                </div>
                <div className="text-xs font-bold text-[#182A2B] mt-0.5">{item.label}</div>
                <div className="text-[10px] text-[#718080] font-medium mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>

          {/* 4 High-Fidelity Charter Bento Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
            {preBookedGuarantees.map((g, idx) => {
              const Icon = g.icon;
              return (
                <div
                  key={idx}
                  className="card-skeuo rounded-3xl p-6 sm:p-8 bg-white border border-[#D5DDD5] hover:border-[#073B3A]/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle Top-Right Ambient Halo */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D9A52B]/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-[#D9A52B]/20 transition-colors" />

                  <div className="space-y-4 relative z-10">
                    {/* Top Clause & Seal Badge */}
                    <div className="flex items-center justify-between border-b border-[#EEF2EE] pb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[10.5px] font-mono font-bold tracking-wider text-[#D9A52B] bg-[#073B3A] px-2.5 py-0.5 rounded-md shadow-xs">
                          {g.clause}
                        </span>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#073B3A] bg-[#E0ECEA]/80 px-2.5 py-0.5 rounded-full border border-[#C1DAD7]">
                          {g.seal}
                        </span>
                      </div>
                      <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#556464] bg-[#FAF9F5] px-2 py-0.5 rounded-md border border-[#E5EAE5]">
                        {g.tag}
                      </span>
                    </div>

                    {/* Title & Icon Header */}
                    <div className="flex items-start gap-4 pt-1">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#073B3A] via-[#0B4B48] to-[#021F20] text-[#D9A52B] flex items-center justify-center shadow-lg border border-white/20 shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-sm" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold font-display text-[#182A2B] group-hover:text-[#073B3A] transition-colors leading-tight">
                          {g.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-[#556464] leading-relaxed mt-1.5">
                          {g.desc}
                        </p>
                      </div>
                    </div>

                    {/* Micro-Checklist Points */}
                    <div className="pt-2 pb-1 space-y-2 bg-[#FAF9F5] p-3.5 rounded-2xl border border-[#E5ECE5]">
                      {g.subpoints.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-[#384646]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                          <span className="font-medium leading-snug">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Verification Footer with 3D Badge */}
                  <div className="pt-4 mt-4 border-t border-[#EEF2EE] flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-2">
                      <Icon3DCheck size="sm" interactive={true} />
                      <span className="text-xs font-bold text-[#073B3A] tracking-tight">
                        {g.highlight}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-[#D9A52B] uppercase tracking-wider bg-[#073B3A]/5 px-2.5 py-1 rounded-md">
                      Charter Verified
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: COMPARATIVE STANDARD (3D INTERACTIVE CORRECT & CROSS) ================= */}
      <section className="py-14 sm:py-20 bg-[#F2F5F2] border-b border-[#E5EAE5] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E0ECEA]/90 text-[10px] font-extrabold text-[#073B3A] uppercase tracking-wider border border-[#C1DAD7] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Comparative Standard • The Mobility Divide</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#182A2B] tracking-tight">
              Why Pre-Booking Beats Street Hailing
            </h2>
            <p className="text-xs sm:text-sm text-[#667575] leading-relaxed max-w-xl mx-auto">
              Experience the fundamental difference between the unpredictable street aggregator lottery and CabJatra&apos;s contractual executive mobility standard.
            </p>
          </div>

          {/* Dual Grand Category Banner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
            {/* Street / Aggregator Card Header */}
            <div className="bg-white/80 rounded-3xl p-5 sm:p-6 border-2 border-rose-200 shadow-sm flex items-center gap-4 bg-gradient-to-r from-rose-50/60 to-white">
              <Icon3DCross size="lg" interactive={true} />
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-700 bg-rose-100 px-2.5 py-0.5 rounded-full border border-rose-200">
                  Street Hailing / Aggregator Apps
                </span>
                <h3 className="text-base sm:text-lg font-bold font-display text-[#182A2B] mt-1">
                  The Daily Uncertainty Lottery
                </h3>
                <p className="text-xs text-[#718080] mt-0.5">
                  Frequent cancellations, 2x–3x surge extortion, and unvetted private cars.
                </p>
              </div>
            </div>

            {/* CabJatra Pre-Booked Standard Card Header */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-[#10B981]/50 shadow-md flex items-center gap-4 bg-gradient-to-r from-[#EAF3EC]/80 to-white ring-1 ring-[#073B3A]/10">
              <Icon3DCheck size="lg" interactive={true} />
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#064E3B] bg-[#D1FAE5] px-2.5 py-0.5 rounded-full border border-[#A7F3D0]">
                  CabJatra Pre-Booked Standard
                </span>
                <h3 className="text-base sm:text-lg font-bold font-display text-[#073B3A] mt-1">
                  Contractual Chauffeur Sanctuary
                </h3>
                <p className="text-xs text-[#556464] mt-0.5">
                  100% Guaranteed vehicle dispatch, zero-surge fixed mileage, and 22°C pre-cooled AC.
                </p>
              </div>
            </div>
          </div>

          {/* 5 High-Contrast Comparison Feature Bento Cards */}
          <div className="space-y-4 sm:space-y-5">
            {comparisonData.map((item, idx) => (
              <div
                key={idx}
                className="card-skeuo rounded-2xl sm:rounded-3xl p-4 sm:p-6 bg-white border border-[#D5DDD5] hover:border-[#D9A52B]/60 hover:shadow-xl transition-all duration-200 group"
              >
                {/* Feature Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3 border-b border-[#EEF2EE] gap-1">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#073B3A] text-[#D9A52B] text-xs font-bold font-mono flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold font-display text-[#182A2B]">
                      {item.category}
                    </h4>
                  </div>
                  <span className="text-[11px] text-[#718080] font-medium">
                    {item.subtitle}
                  </span>
                </div>

                {/* 2-Column Comparison Layout with 3D Badges */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {/* Left: Street Hailing (3D Crimson Cross) */}
                  <div className="bg-rose-50/50 rounded-2xl p-4 sm:p-4.5 border border-rose-200/70 flex items-start gap-3.5 transition-all group-hover:bg-rose-50/80">
                    <Icon3DCross size="md" interactive={true} className="mt-0.5 shrink-0" />
                    <div className="space-y-1">
                      <div className="text-xs sm:text-sm font-bold text-rose-950 leading-snug">
                        {item.street.title}
                      </div>
                      <p className="text-xs text-rose-900/80 leading-relaxed font-normal">
                        {item.street.desc}
                      </p>
                    </div>
                  </div>

                  {/* Right: CabJatra Standard (3D Emerald Check) */}
                  <div className="bg-[#EBF5EE]/70 rounded-2xl p-4 sm:p-4.5 border-2 border-[#10B981]/40 shadow-xs flex items-start gap-3.5 transition-all group-hover:border-[#073B3A]/60 group-hover:bg-[#E3EFE7]">
                    <Icon3DCheck size="md" interactive={true} className="mt-0.5 shrink-0" />
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs sm:text-sm font-bold text-[#064E3B] leading-snug">
                          {item.cabjatra.title}
                        </span>
                        <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#064E3B] bg-[#A7F3D0]/70 px-2 py-0.5 rounded-full shrink-0">
                          Guaranteed
                        </span>
                      </div>
                      <p className="text-xs text-[#1F4638] leading-relaxed font-medium">
                        {item.cabjatra.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Trust Action Callout */}
          <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#073B3A] via-[#094847] to-[#041F20] text-white shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10">
            <div className="space-y-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#D9A52B]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Odisha Chauffeur Excellence</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold font-display">
                Ready to Experience Stress-Free Travel?
              </h3>
              <p className="text-xs sm:text-sm text-white/75 max-w-xl">
                Lock your chauffeur today with a modest 10% advance deposit. 100% yellow-board commercial fleet and zero surge pricing guaranteed.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
              <Link
                href="/book-cab"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl btn-skeuo-gold text-[#062F31] font-bold text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 hover:brightness-105 active:scale-95 transition-all"
              >
                <span>Reserve Your Chauffeur</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E5EAE5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0ECEA]/80 text-[10px] font-bold text-[#073B3A] uppercase tracking-wider border border-[#C1DAD7]">
              <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Workflow Clarity</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#182A2B]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#667575]">
              Everything you need to know about our pre-booked mobility workflow.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="card-skeuo rounded-2xl overflow-hidden transition-all duration-200 border border-[#E5ECE5]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 font-display font-bold text-xs sm:text-sm text-[#182A2B] hover:text-[#073B3A] transition cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#D9A52B] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs text-[#556464] leading-relaxed border-t border-[#EEF2EE]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: SLENDER LUXURY CLOSING CTA ================= */}
      <section className="py-12 sm:py-16 bg-[#FAF9F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#062F31] via-[#042426] to-[#021718] text-white p-8 sm:p-12 text-center flex flex-col items-center justify-center border border-white/15 shadow-2xl">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D9A52B]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-4 flex flex-col items-center justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-[#D9A52B]/40 text-xs font-bold text-[#D9A52B]">
                <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
                <span>Ready to Travel with Certainty?</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white leading-tight">
                Reserve Your Chauffeur with <br />
                <span className="italic font-display font-normal text-[#D9A52B]">
                  The Pre-Booked Guarantee.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-white/85 max-w-lg mx-auto leading-relaxed">
                Lock your verified commercial vehicle and driver today with just a 10% advance deposit. Transparent, punctual, and zero surge pricing.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <Link
                  href="/book-cab"
                  className="px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#D9A52B] via-[#E5B543] to-[#C99320] text-[#062F31] font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-[0_4px_16px_rgba(217,165,43,0.35)] hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer border border-[#F2C868]/60"
                >
                  <span>Book Your Chauffeur Cab</span>
                  <ArrowRight className="w-4 h-4 text-[#062F31]" />
                </Link>

                <a
                  href={COMPANY_CONFIG.contact.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#25D366] via-[#22BF5B] to-[#128C7E] text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>

                <Link
                  href="/book-tour"
                  className="px-6 py-2.5 sm:py-3 rounded-full bg-black/40 hover:bg-black/60 text-white font-semibold text-xs sm:text-sm inline-flex items-center gap-2 border border-white/20 backdrop-blur-md hover:border-[#D9A52B]/70 transition-all cursor-pointer"
                >
                  <Compass className="w-4 h-4 text-[#D9A52B]" />
                  <span>Explore Odisha Tours</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}