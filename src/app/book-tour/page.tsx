"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Palmtree,
  Calendar,
  Users,
  Compass,
  MapPin,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  ShieldCheck,
  Check,
  Info,
  Car,
  Briefcase,
  Phone,
  User,
  Mail,
  Camera,
  Printer,
  Copy,
} from "lucide-react";
import { ODISHA_TOURS, TourPackage } from "@/data/destinations";
import { COMPANY_CONFIG } from "@/data/company";
import { WhatsAppConsentCheckbox } from "@/components/common/WhatsAppConsentCheckbox";
import { BrandLogo } from "@/components/common/BrandLogo";
import { GlassCelebrationOrb } from "@/components/common/GlassCelebrationOrb";

function TourBookingContent() {
  const searchParams = useSearchParams();

  // Wizard Steps: 1: Tour Circuit & Itinerary, 2: Dates & Vehicle Class, 3: Passenger & WhatsApp, 4: Confirmed
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [copiedRef, setCopiedRef] = useState(false);

  // Selected tour
  const [selectedTourSlug, setSelectedTourSlug] = useState<string>("golden-triangle-odisha");
  const [activeDayIndex, setActiveDayIndex] = useState<number>(0);
  const [selectedVehicleType, setSelectedVehicleType] = useState<"sedan" | "suv" | "traveller">("sedan");

  // Itinerary Details
  const [travelDate, setTravelDate] = useState("2026-11-20");
  const [travelersCount, setTravelersCount] = useState(4);
  const [pickupCity, setPickupCity] = useState("Bhubaneswar");
  const [pickupLocation, setPickupLocation] = useState("");

  // Passenger & Contact
  const [primaryName, setPrimaryName] = useState("");
  const [primaryPhone, setPrimaryPhone] = useState("");
  const [primaryEmail, setPrimaryEmail] = useState("");
  const [customRequests, setCustomRequests] = useState("");

  // WhatsApp Consent (Un-preselected)
  const [whatsAppConsent, setWhatsAppConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [consentError, setConsentError] = useState("");

  // Form errors
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Reference Code
  const [enquiryRefId, setEnquiryRefId] = useState("");

  // Load URL param
  useEffect(() => {
    const tourParam = searchParams.get("tour");
    if (tourParam && ODISHA_TOURS.some((t) => t.slug === tourParam)) {
      setSelectedTourSlug(tourParam);
    }
    const destParam = searchParams.get("destination");
    if (destParam) {
      if (destParam === "puri" || destParam === "konark") {
        setSelectedTourSlug("puri-konark-same-day");
      } else if (destParam === "chilika") {
        setSelectedTourSlug("chilika-lake-nature-trail");
      }
    }
  }, [searchParams]);

  const currentTour =
    ODISHA_TOURS.find((t) => t.slug === selectedTourSlug) || ODISHA_TOURS[0];

  // Reset day index when tour changes
  useEffect(() => {
    setActiveDayIndex(0);
  }, [selectedTourSlug]);

  const handleStep1Next = () => {
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStep2Next = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStep3Submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!primaryName.trim()) errors.name = "Please enter lead traveler name";
    if (!primaryPhone.trim() || primaryPhone.length < 10) {
      errors.phone = "Please enter a valid 10-digit mobile number";
    }
    if (!primaryEmail.trim() || !primaryEmail.includes("@")) {
      errors.email = "Please enter a valid email address";
    }
    if (!whatsAppConsent) {
      setConsentError("Please check the WhatsApp consent box so our tour desk can dispatch your custom itinerary.");
      return;
    } else {
      setConsentError("");
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    setEnquiryRefId(`CJ-TOUR-${randomSuffix}`);
    setCurrentStep(4);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCopyRef = () => {
    if (!enquiryRefId) return;
    navigator.clipboard.writeText(enquiryRefId);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2200);
  };

  // 3-Step Navigation Configuration with 100% Guaranteed High-Contrast Typography
  const stepsConfig = [
    { num: 1, label: "Choose Circuit", subtitle: "Itinerary Selection", icon: Compass },
    { num: 2, label: "Dates & Vehicle", subtitle: "Schedule & Fleet", icon: Calendar },
    { num: 3, label: "Passenger Info", subtitle: "Contact & Consent", icon: Users },
  ];

  return (
    <div className="relative min-h-screen bg-[#FAF9F5] text-[#182A2B] overflow-hidden pb-8 sm:pb-12">
      {/* High-Resolution Scenic Heritage Travel Backdrop */}
      <div className="absolute top-0 inset-x-0 h-[520px] z-0 overflow-hidden pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?q=85&w=2400&auto=format&fit=crop"
          alt="Scenic Odisha temple heritage tour backdrop"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Cinematic rich dark gradient overlay for maximum contrast and prestige */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#021617]/95 via-[#062F31]/88 to-[#FAF9F5]" />
      </div>

      <div className={`relative z-10 mx-auto px-3.5 sm:px-6 lg:px-8 ${currentStep === 4 ? "pt-24 sm:pt-28 pb-16 max-w-4xl" : "pt-20 sm:pt-20 pb-4 max-w-5xl"}`}>
        {/* Compact Low-Profile Header Section - Steps 1 to 3 */}
        {currentStep < 4 && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-2 sm:mb-2.5 text-white">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-2xl font-bold font-display tracking-tight text-white leading-tight">
                  Book an Odisha Private Tour
                </h1>
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[10px] font-semibold text-[#D9A52B]">
                  <Palmtree className="w-3 h-3 text-[#D9A52B]" />
                  Curated Circuits
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-white/80 line-clamp-1">
                Explore sacred Jagannath Dham, UNESCO Konark chariot wheels &amp; Chilika dolphin trails with a dedicated chauffeur.
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-[11px] text-white/90">
              <span className="flex items-center gap-1 bg-[#062F31]/80 px-2.5 py-1 rounded-lg border border-white/15">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                Dedicated Standby Chauffeur
              </span>
              <span className="flex items-center gap-1 bg-[#062F31]/80 px-2.5 py-1 rounded-lg border border-white/15">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A52B]" />
                10% Advance Model
              </span>
            </div>
          </div>
        )}

        {/* ================= 3-STEP NAVIGATION MATRIX (COMPACT SLIM BAR) ================= */}
        {currentStep < 4 && (
          <div className="mb-2 sm:mb-2.5 max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
              {stepsConfig.map((s) => {
                const isCurrent = currentStep === s.num;
                const isPassed = currentStep > s.num;

                return (
                  <button
                    key={s.num}
                    type="button"
                    onClick={() => {
                      if (isPassed) setCurrentStep(s.num);
                    }}
                    disabled={!isPassed && !isCurrent}
                    className={`py-1.5 px-2 sm:px-3 rounded-lg sm:rounded-xl border text-left transition-all duration-200 flex items-center gap-2 select-none ${
                      isCurrent
                        ? "bg-gradient-to-r from-[#0C4E4B] to-[#041F20] text-white border-2 border-[#D9A52B] shadow-sm ring-1 ring-[#D9A52B]/40"
                        : isPassed
                        ? "bg-[#073B3A]/95 text-white border border-[#10B981] shadow-xs cursor-pointer hover:brightness-110"
                        : "bg-[#062F31]/80 border border-white/15 text-white/80 shadow-xs"
                    }`}
                  >
                    {/* Step Numeral Badge */}
                    <div
                      className={`w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg flex items-center justify-center font-bold text-[10px] sm:text-[11px] shrink-0 transition-all ${
                        isCurrent
                          ? "bg-[#D9A52B] text-[#062F31] font-black shadow-xs"
                          : isPassed
                          ? "bg-[#10B981] text-white"
                          : "bg-white/15 text-[#FAF9F5] border border-white/20 font-bold"
                      }`}
                    >
                      {isPassed ? <CheckCircle2 className="w-3.5 h-3.5 text-white" /> : `0${s.num}`}
                    </div>

                    {/* Step Title & Subtitle */}
                    <div className="min-w-0 flex-1 truncate">
                      <div className="flex items-center gap-1">
                        <span
                          className={`text-[11px] sm:text-xs font-bold font-display truncate ${
                            isCurrent ? "text-white" : isPassed ? "text-[#FAF9F5]" : "text-white/90"
                          }`}
                        >
                          {s.label}
                        </span>
                        {isCurrent && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse shrink-0" />
                        )}
                      </div>
                      <p
                        className={`hidden sm:block text-[9.5px] truncate leading-tight ${
                          isCurrent ? "text-[#D9A52B] font-bold" : isPassed ? "text-[#A7F3D0]" : "text-white/60"
                        }`}
                      >
                        {s.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= STEP 1: VISUAL CIRCUIT EXPLORER (COMPACT SINGLE-WINDOW) ================= */}
        {currentStep === 1 && (
          <div className="card-skeuo rounded-2xl p-3 sm:p-4 lg:p-4.5 space-y-2.5 sm:space-y-3 animate-in fade-in-50 duration-200">
            {/* Header */}
            <div className="border-b border-[#E5ECE5] pb-2 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#062F31] bg-[#D9A52B] px-2.5 py-0.5 rounded-full inline-block shadow-xs">
                  Step 1 of 3
                </span>
                <h2 className="text-xs sm:text-sm font-bold font-display text-[#182A2B]">
                  Select Preferred Circuit
                </h2>
              </div>
              <span className="text-[10px] sm:text-[11px] text-[#073B3A] font-semibold flex items-center gap-1 bg-[#E0ECEA]/80 px-2.5 py-0.5 rounded-full border border-[#C1DAD7] shadow-xs">
                <ShieldCheck className="w-3 h-3 text-[#D9A52B]" />
                Private Standby Chauffeur
              </span>
            </div>

            {/* Visual Tour Circuit Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-2.5">
              {ODISHA_TOURS.map((t) => {
                const isSelected = selectedTourSlug === t.slug;
                return (
                  <div
                    key={t.id}
                    onClick={() => setSelectedTourSlug(t.slug)}
                    className={`rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 flex flex-col justify-between group select-none ${
                      isSelected
                        ? "card-skeuo border-2 border-[#D9A52B] ring-1 ring-[#073B3A]/30 shadow-md scale-[1.01]"
                        : "card-skeuo hover:border-[#073B3A]/40"
                    }`}
                  >
                    <div>
                      {/* Tour Image with Duration & Tag */}
                      <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-[#FAF9F5]">
                        <Image
                          src={t.heroImage}
                          alt={t.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

                        <div className="absolute top-2 left-2 bg-[#062F31]/90 backdrop-blur-md text-[#FAF9F5] text-[9.5px] font-bold px-2 py-0.5 rounded-md border border-white/15">
                          {t.duration}
                        </div>

                        <div className="absolute bottom-1.5 left-2.5 right-2.5 text-white">
                          <h3 className="text-xs sm:text-sm font-bold font-display leading-tight">{t.title}</h3>
                          <p className="text-[10px] text-[#D9A52B] font-semibold truncate">{t.destinations.join(" • ")}</p>
                        </div>
                      </div>

                      {/* Brief Highlights */}
                      <div className="p-2.5 space-y-1">
                        <p className="text-[10.5px] text-[#667575] leading-tight line-clamp-1">
                          {t.tagline}
                        </p>

                        <div className="space-y-0.5 pt-0.5">
                          {t.highlights.slice(0, 1).map((hl, i) => (
                            <div key={i} className="flex items-center gap-1 text-[10px] text-[#455353]">
                              <CheckCircle2 className="w-3 h-3 text-[#10B981] shrink-0" />
                              <span className="truncate">{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="p-2.5 pt-0 border-t border-[#EEF2EE] flex items-center justify-between mt-1">
                      <span className="text-[10px] font-bold text-[#073B3A]">
                        AC Cab Included
                      </span>
                      <div
                        className={`px-2.5 py-0.5 rounded-lg text-[10px] font-bold transition-all ${
                          isSelected
                            ? "bg-[#073B3A] text-[#D9A52B] shadow-xs"
                            : "border border-[#D5DDD5] text-[#667575] group-hover:border-[#073B3A]"
                        }`}
                      >
                        {isSelected ? "Selected ✓" : "Select"}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ================= COMPACT INTERACTIVE VISUAL TIMELINE STRIP ================= */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-[#062F31] to-[#041F20] text-white border border-[#D9A52B]/30 shadow-sm space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-1.5 border-b border-white/15">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9A52B]">
                    Circuit Breakdown:
                  </span>
                  <strong className="text-xs sm:text-sm font-bold font-display text-white ml-1.5">
                    {currentTour.title} ({currentTour.duration})
                  </strong>
                </div>
                <div className="text-[10.5px] text-[#E0ECEA]/90 font-medium">
                  Starting Hub: <strong className="text-[#D9A52B]">{currentTour.startingCity}</strong>
                </div>
              </div>

              {/* Day Selection Tabs & Active Day info */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
                {currentTour.itinerary.map((it, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveDayIndex(idx)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all shrink-0 cursor-pointer ${
                      activeDayIndex === idx
                        ? "bg-[#D9A52B] text-[#062F31] font-black scale-102"
                        : "bg-white/10 hover:bg-white/15 text-white border border-white/15"
                    }`}
                  >
                    <span>{it.day}</span>
                  </button>
                ))}
              </div>

              {currentTour.itinerary[activeDayIndex] && (
                <div className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white/90">
                  <span className="text-[#D9A52B] font-bold mr-1.5">
                    {currentTour.itinerary[activeDayIndex].day}: {currentTour.itinerary[activeDayIndex].title}
                  </span>
                  <span className="text-[11px] text-white/80 line-clamp-1">
                    {currentTour.itinerary[activeDayIndex].desc}
                  </span>
                </div>
              )}
            </div>

            {/* Step 1 Actions */}
            <div className="pt-2 border-t border-[#EEF2EE] flex items-center justify-between">
              <span className="text-[10.5px] text-[#667575] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D9A52B]" />
                Customizable itinerary halts upon request.
              </span>
              <button
                type="button"
                onClick={handleStep1Next}
                className="px-6 py-2.5 rounded-xl btn-skeuo-gold text-[#062F31] font-bold text-xs inline-flex items-center gap-1.5 cursor-pointer shadow-sm hover:brightness-105"
              >
                <span>Continue to Dates &amp; Vehicle</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#062F31]" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 2: DATES & VEHICLE CLASS ================= */}
        {currentStep === 2 && (
          <form
            onSubmit={handleStep2Next}
            className="card-skeuo rounded-2xl p-3 sm:p-4 lg:p-4.5 space-y-2.5 sm:space-y-3 animate-in fade-in-50 duration-200"
          >
            {/* Header */}
            <div className="border-b border-[#E5ECE5] pb-2 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#062F31] bg-[#D9A52B] px-2.5 py-0.5 rounded-full inline-block shadow-xs">
                  Step 2 of 3
                </span>
                <h2 className="text-xs sm:text-sm font-bold font-display text-[#182A2B]">
                  Configure Your Tour Journey
                </h2>
              </div>
              <span className="text-[10px] sm:text-[11px] text-[#073B3A] font-semibold flex items-center gap-1 bg-[#E0ECEA]/80 px-2.5 py-0.5 rounded-full border border-[#C1DAD7] shadow-xs">
                <Clock className="w-3 h-3 text-[#D9A52B]" />
                Selected: {currentTour.title}
              </span>
            </div>

            {/* Travel Date & Group Size */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5">
              <div className="space-y-1">
                <label className="text-[10px] sm:text-[11px] font-bold text-[#182A2B] flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#073B3A]" />
                  <span>Start Date *</span>
                </label>
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full h-9 px-2.5 rounded-lg border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-1 focus:ring-[#D9A52B] focus:border-[#073B3A] focus:outline-none transition cursor-pointer shadow-xs"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] sm:text-[11px] font-bold text-[#182A2B] flex items-center gap-1">
                  <Users className="w-3 h-3 text-[#073B3A]" />
                  <span>Travelers *</span>
                </label>
                <select
                  value={travelersCount}
                  onChange={(e) => setTravelersCount(Number(e.target.value))}
                  className="w-full h-9 px-2.5 rounded-lg border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-1 focus:ring-[#D9A52B] focus:border-[#073B3A] focus:outline-none transition cursor-pointer shadow-xs"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 16].map((num) => (
                    <option key={num} value={num}>
                      {num} Person{num > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] sm:text-[11px] font-bold text-[#182A2B] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#073B3A]" />
                  <span>Pickup Hub in Odisha *</span>
                </label>
                <select
                  value={pickupCity}
                  onChange={(e) => setPickupCity(e.target.value)}
                  className="w-full h-9 px-2.5 rounded-lg border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-1 focus:ring-[#D9A52B] focus:border-[#073B3A] focus:outline-none transition cursor-pointer shadow-xs"
                >
                  <option value="Bhubaneswar Airport (BBI)">Bhubaneswar Airport (BBI)</option>
                  <option value="Bhubaneswar Railway Station">Bhubaneswar Railway Station</option>
                  <option value="Puri Railway Station / Hotel">Puri Railway Station / Hotel</option>
                  <option value="Cuttack Hub">Cuttack Hub</option>
                </select>
              </div>
            </div>

            {/* Vehicle Selection Cards */}
            <div className="space-y-1">
              <label className="text-[10px] sm:text-[11px] font-bold text-[#182A2B] uppercase tracking-wider block">
                Select Vehicle Category:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5">
                {[
                  {
                    id: "sedan",
                    name: "Executive Prime Sedan",
                    models: "Dzire / Etios",
                    capacity: "Up to 4 Guests",
                    luggage: "2 Bags",
                    ideal: "Couples & Small Families",
                  },
                  {
                    id: "suv",
                    name: "Premium Highway SUV",
                    models: "Toyota Innova Crysta",
                    capacity: "Up to 6-7 Guests",
                    luggage: "4 Bags",
                    ideal: "Families & Temple Groups",
                  },
                  {
                    id: "traveller",
                    name: "Group Tempo Traveller",
                    models: "Force Urbania / Traveller",
                    capacity: "Up to 12-16 Guests",
                    luggage: "10 Bags",
                    ideal: "Large Family Pilgrimages",
                  },
                ].map((veh) => {
                  const isSelected = selectedVehicleType === veh.id;
                  return (
                    <div
                      key={veh.id}
                      onClick={() => setSelectedVehicleType(veh.id as any)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex flex-col justify-between group select-none ${
                        isSelected
                          ? "border-2 border-[#D9A52B] bg-[#073B3A] text-white shadow-sm scale-101"
                          : "border-[#D5DDD5] bg-[#FAF9F5] hover:bg-white text-[#182A2B]"
                      }`}
                    >
                      <div>
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center mb-1.5 ${
                            isSelected ? "bg-white/15 text-[#D9A52B]" : "bg-white text-[#073B3A] shadow-xs"
                          }`}
                        >
                          <Car className="w-3.5 h-3.5" />
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold font-display">{veh.name}</h4>
                        <p className={`text-[10px] mt-0.5 ${isSelected ? "text-[#E0ECEA]/80" : "text-[#667575]"}`}>
                          {veh.models}
                        </p>
                        <div className={`mt-2 pt-1.5 border-t text-[10px] space-y-0.5 ${isSelected ? "border-white/15 text-white/90" : "border-[#E5EAE5] text-[#455353]"}`}>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3 text-[#D9A52B]" />
                            <span>{veh.capacity}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-3 h-3 text-[#D9A52B]" />
                            <span>{veh.luggage}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-2 pt-1 border-t border-black/5 flex items-center justify-end">
                        <span className={`text-[9.5px] font-bold uppercase ${isSelected ? "text-[#D9A52B]" : "text-transparent"}`}>
                          Selected ✓
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2 Actions */}
            <div className="pt-2 border-t border-[#EEF2EE] flex items-center justify-between">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="px-4 py-2 rounded-xl border border-[#D5DDD5] text-[#182A2B] font-bold text-xs inline-flex items-center gap-1.5 hover:bg-[#FAF9F5] transition cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl btn-skeuo-gold text-[#062F31] font-bold text-xs inline-flex items-center gap-1.5 cursor-pointer shadow-sm hover:brightness-105"
              >
                <span>Continue to Passenger Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#062F31]" />
              </button>
            </div>
          </form>
        )}

        {/* ================= STEP 3: PASSENGER INFO & WHATSAPP ================= */}
        {currentStep === 3 && (
          <form
            onSubmit={handleStep3Submit}
            className="card-skeuo rounded-2xl p-3 sm:p-4 lg:p-4.5 space-y-2.5 sm:space-y-3 animate-in fade-in-50 duration-200"
          >
            {/* Header */}
            <div className="border-b border-[#E5ECE5] pb-2 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#062F31] bg-[#D9A52B] px-2.5 py-0.5 rounded-full inline-block shadow-xs">
                  Step 3 of 3
                </span>
                <h2 className="text-xs sm:text-sm font-bold font-display text-[#182A2B]">
                  Confirm Lead Traveler Details
                </h2>
              </div>
              <span className="text-[10px] sm:text-[11px] text-[#073B3A] font-semibold flex items-center gap-1 bg-[#E0ECEA]/80 px-2.5 py-0.5 rounded-full border border-[#C1DAD7] shadow-xs">
                <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                Personalized Itinerary &amp; Quote on WhatsApp
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5">
              <div className="space-y-1">
                <label className="text-[10px] sm:text-[11px] font-bold text-[#182A2B] flex items-center gap-1">
                  <User className="w-3 h-3 text-[#073B3A]" />
                  <span>Lead Traveler Full Name *</span>
                </label>
                <input
                  type="text"
                  value={primaryName}
                  onChange={(e) => setPrimaryName(e.target.value)}
                  placeholder="e.g. Sanjeev Kumar Patnaik"
                  className="w-full h-9 px-2.5 rounded-lg border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-1 focus:ring-[#D9A52B] focus:border-[#073B3A] focus:outline-none transition shadow-xs"
                  required
                />
                {formErrors.name && (
                  <p className="text-[10px] text-rose-600 font-medium">{formErrors.name}</p>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-[10px] sm:text-[11px] font-bold text-[#182A2B] flex items-center gap-1">
                  <Phone className="w-3 h-3 text-[#073B3A]" />
                  <span>WhatsApp Phone *</span>
                </label>
                <div className="flex gap-1.5">
                  <span className="h-9 px-2.5 rounded-lg border border-[#D5DDD5] bg-[#EEF2EE] text-xs font-bold text-[#073B3A] flex items-center shrink-0">
                    +91
                  </span>
                  <input
                    type="tel"
                    value={primaryPhone}
                    onChange={(e) => setPrimaryPhone(e.target.value)}
                    placeholder="9876543210"
                    maxLength={10}
                    className="w-full h-9 px-2.5 rounded-lg border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-1 focus:ring-[#D9A52B] focus:border-[#073B3A] focus:outline-none transition shadow-xs"
                    required
                  />
                </div>
                {formErrors.phone && (
                  <p className="text-[10px] text-rose-600 font-medium">{formErrors.phone}</p>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-[10px] sm:text-[11px] font-bold text-[#182A2B] flex items-center gap-1">
                  <Mail className="w-3 h-3 text-[#073B3A]" />
                  <span>Email Address *</span>
                </label>
                <input
                  type="email"
                  value={primaryEmail}
                  onChange={(e) => setPrimaryEmail(e.target.value)}
                  placeholder="sanjeev@example.com"
                  className="w-full h-9 px-2.5 rounded-lg border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-1 focus:ring-[#D9A52B] focus:border-[#073B3A] focus:outline-none transition shadow-xs"
                  required
                />
                {formErrors.email && (
                  <p className="text-[10px] text-rose-600 font-medium">{formErrors.email}</p>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-[10px] sm:text-[11px] font-bold text-[#182A2B] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#073B3A]" />
                  <span>Specific Pickup Address (Optional)</span>
                </label>
                <input
                  type="text"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  placeholder="e.g. Mayfair Lagoon, BBI T1"
                  className="w-full h-9 px-2.5 rounded-lg border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-1 focus:ring-[#D9A52B] focus:border-[#073B3A] focus:outline-none transition shadow-xs"
                />
              </div>

              <div className="sm:col-span-2 space-y-1">
                <label className="text-[10px] sm:text-[11px] font-bold text-[#182A2B]">
                  Special Requests / Senior Citizen Assistance (Optional)
                </label>
                <input
                  type="text"
                  value={customRequests}
                  onChange={(e) => setCustomRequests(e.target.value)}
                  placeholder="e.g. Traveling with elderly parents, Pipili craft stopover"
                  className="w-full h-9 px-2.5 rounded-lg border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-1 focus:ring-[#D9A52B] focus:border-[#073B3A] focus:outline-none transition shadow-xs"
                />
              </div>
            </div>

            {/* Explicit WhatsApp Consent Component */}
            <div className="pt-1">
              <WhatsAppConsentCheckbox
                bookingConsent={whatsAppConsent}
                onBookingConsentChange={setWhatsAppConsent}
                marketingConsent={marketingConsent}
                onMarketingConsentChange={setMarketingConsent}
                showMarketingOption={true}
                error={consentError}
              />
            </div>

            {/* Step 3 Actions */}
            <div className="pt-2 border-t border-[#EEF2EE] flex items-center justify-between">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="px-4 py-2 rounded-xl border border-[#D5DDD5] text-[#182A2B] font-bold text-xs inline-flex items-center gap-1.5 hover:bg-[#FAF9F5] transition cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl btn-skeuo-gold text-[#062F31] font-bold text-xs inline-flex items-center gap-1.5 cursor-pointer shadow-sm hover:brightness-105"
              >
                <span>Request Custom Tour Quote</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#062F31]" />
              </button>
            </div>
          </form>
        )}

        {/* ================= STEP 4: SUCCESS / ENQUIRY RECEIVED ================= */}
        {currentStep === 4 && (
          <div className="card-skeuo rounded-3xl p-5 sm:p-8 lg:p-9 border border-[#D5DDD5] shadow-2xl space-y-5 sm:space-y-6 text-center max-w-3xl mx-auto animate-in zoom-in-95 duration-300">
            {/* 3D Glass Celebration Orb with Smooth Spring Bouncing Physics */}
            <div className="pt-2">
              <GlassCelebrationOrb size="lg" />
            </div>

            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0ECEA] border border-[#B6D6D2] text-[#073B3A] text-[10.5px] sm:text-xs font-bold uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
                <span>Tour Itinerary Enquiry Confirmed</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#182A2B] tracking-tight">
                Thank You, {primaryName || "Esteemed Traveler"}!
              </h2>
              <p className="text-xs sm:text-sm text-[#556464] max-w-lg mx-auto leading-relaxed">
                Your custom tour enquiry for {currentTour.title} has been logged with our Odisha holiday desk. Our senior tour specialist is preparing your complete route voucher and dedicated chauffeur assignment.
              </p>
            </div>

            {/* Digital Tour Reservation Voucher / Boarding Pass */}
            <div className="rounded-2xl border-2 border-[#D9A52B]/40 bg-gradient-to-b from-[#FAF9F5] to-[#F3F6F3] shadow-card overflow-hidden text-left relative">
              {/* Voucher Top Header Bar */}
              <div className="bg-[#073B3A] text-white p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D9A52B]/30">
                <div className="flex items-center gap-2.5">
                  <BrandLogo size="sm" variant="light" showTagline={false} />
                  <div className="hidden sm:block border-l border-white/20 pl-2.5">
                    <span className="text-[9.5px] uppercase font-bold tracking-wider text-[#D9A52B] block leading-tight">
                      Official Tour Voucher
                    </span>
                    <span className="text-xs font-semibold text-white/90">
                      Curated Circuit Dispatch
                    </span>
                  </div>
                </div>

                {/* Reference ID with Interactive Copy Button */}
                <div className="flex items-center gap-2 self-start sm:self-auto bg-black/30 px-3 py-1 rounded-xl border border-white/15">
                  <div>
                    <span className="text-[9px] text-[#A7F3D0] block uppercase leading-none">Enquiry Ref:</span>
                    <strong className="font-mono text-xs sm:text-sm text-[#FAF9F5] font-black">
                      {enquiryRefId}
                    </strong>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyRef}
                    className="p-1 px-1.5 rounded-md bg-white/10 hover:bg-white/20 text-[#D9A52B] transition cursor-pointer flex items-center gap-1 text-[10px] font-bold"
                    title="Copy Reference ID"
                  >
                    {copiedRef ? (
                      <>
                        <Check className="w-3 h-3 text-[#10B981]" />
                        <span className="text-[#10B981]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Voucher Body (2 Columns) */}
              <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs divide-y md:divide-y-0 md:divide-x divide-[#D5DDD5]">
                {/* Column 1: Circuit & Schedule */}
                <div className="space-y-2.5 pb-3 md:pb-0">
                  <div className="flex items-center gap-1.5 text-[10.5px] font-bold text-[#073B3A] uppercase tracking-wider">
                    <Compass className="w-3.5 h-3.5 text-[#D9A52B]" />
                    <span>Selected Heritage Circuit</span>
                  </div>

                  <div className="bg-white p-2.5 rounded-xl border border-[#D5DDD5] space-y-1.5 shadow-xs">
                    <div>
                      <span className="text-[10px] text-[#667575] block">Circuit Title:</span>
                      <strong className="text-sm font-bold text-[#182A2B]">
                        {currentTour.title} ({currentTour.duration})
                      </strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#667575] block">Destinations Covered:</span>
                      <span className="text-xs font-semibold text-[#073B3A]">{currentTour.destinations.join(" ➔ ")}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#EEF2EE]">
                      <div>
                        <span className="text-[10px] text-[#667575] block">Start Date:</span>
                        <strong className="text-xs text-[#182A2B]">{travelDate}</strong>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#667575] block">Starting Hub:</span>
                        <strong className="text-xs text-[#073B3A]">{pickupCity}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] text-[#455353] space-y-0.5">
                    <div>Lead Guest: <strong className="text-[#182A2B]">{primaryName} (+91 {primaryPhone})</strong></div>
                    <div>Travelers: <strong>{travelersCount} Guests</strong></div>
                    {customRequests && <div>Special Halts: <span className="italic">{customRequests}</span></div>}
                  </div>
                </div>

                {/* Column 2: Vehicle & Inclusions */}
                <div className="space-y-2.5 pt-3 md:pt-0 md:pl-4">
                  <div className="flex items-center gap-1.5 text-[10.5px] font-bold text-[#073B3A] uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Allocated Vehicle &amp; Inclusions</span>
                  </div>

                  <div className="bg-white p-2.5 rounded-xl border border-[#D5DDD5] space-y-2 shadow-xs">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-[#667575] block">Vehicle Class:</span>
                        <strong className="text-xs font-bold text-[#073B3A] capitalize">
                          {selectedVehicleType === "suv" ? "Innova Crysta SUV" : selectedVehicleType === "traveller" ? "Group Tempo Traveller" : "Prime Sedan"}
                        </strong>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#E0ECEA] text-[#073B3A] border border-[#B6D6D2]">
                        100% AC Cab
                      </span>
                    </div>

                    <div className="space-y-1 text-[11px] text-[#455353] pt-1 border-t border-[#EEF2EE]">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                        <span>Dedicated chauffeur on standby entire tour</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                        <span>All toll taxes, parking &amp; fuel included</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                        <span>10% Advance Model • Zero surge guarantee</span>
                      </div>
                    </div>
                  </div>

                  {/* Priority Allocation Pulse Strip */}
                  <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-[10.5px] text-emerald-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
                    <span><strong>Live Queue:</strong> Custom Tour Itinerary &amp; Quote Processing</span>
                  </div>
                </div>
              </div>

              {/* Voucher Bottom Disclaimer Strip */}
              <div className="bg-[#FAF9F5] px-4 py-2 border-t border-[#D5DDD5] text-[10.5px] text-[#667575] flex items-center justify-between">
                <span>Official Tour Dispatch Voucher • Cabjatra Holiday Desk</span>
                <span className="font-semibold text-[#073B3A]">Transparent 10% Advance Deposit Model</span>
              </div>
            </div>

            {/* Next Steps 3-Card Timeline */}
            <div className="text-left space-y-2">
              <span className="text-[11px] font-bold text-[#182A2B] uppercase tracking-wider block">
                What Happens Next?
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-white border border-[#D5DDD5] shadow-xs space-y-1">
                  <div className="w-5 h-5 rounded-full bg-[#073B3A] text-white flex items-center justify-center font-bold text-[10px]">
                    1
                  </div>
                  <strong className="block text-[#182A2B] font-display text-xs">Holiday Desk Review</strong>
                  <p className="text-[10.5px] text-[#667575] leading-tight">
                    Our tour planner customizes halts, temple timings &amp; route buffers for your dates.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#D5DDD5] shadow-xs space-y-1">
                  <div className="w-5 h-5 rounded-full bg-[#D9A52B] text-[#062F31] flex items-center justify-center font-bold text-[10px]">
                    2
                  </div>
                  <strong className="block text-[#182A2B] font-display text-xs">WhatsApp Quote &amp; Itinerary</strong>
                  <p className="text-[10.5px] text-[#667575] leading-tight">
                    You receive the full PDF itinerary, fixed quotation &amp; 10% advance link on WhatsApp.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#D5DDD5] shadow-xs space-y-1">
                  <div className="w-5 h-5 rounded-full bg-[#10B981] text-white flex items-center justify-center font-bold text-[10px]">
                    3
                  </div>
                  <strong className="block text-[#182A2B] font-display text-xs">Dedicated Chauffeur Ready</strong>
                  <p className="text-[10.5px] text-[#667575] leading-tight">
                    Driver contacts you 1 day prior for smooth doorstep or BBI airport pickup.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions Bay */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <Link
                href="/"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#FAF9F5] hover:bg-[#F2F5F2] border border-[#D5DDD5] text-[#182A2B] font-bold text-xs transition cursor-pointer text-center"
              >
                Return to Homepage
              </Link>

              <button
                type="button"
                onClick={() => typeof window !== "undefined" && window.print()}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white hover:bg-[#FAF9F5] border border-[#D5DDD5] text-[#073B3A] font-bold text-xs inline-flex items-center justify-center gap-1.5 transition cursor-pointer shadow-xs"
              >
                <Printer className="w-3.5 h-3.5 text-[#073B3A]" />
                <span>Print / Save Itinerary</span>
              </button>

              <a
                href={`${COMPANY_CONFIG.contact.whatsAppLink}?text=${encodeURIComponent(
                  `Hi Cabjatra Tour Desk, I just requested tour reference ${enquiryRefId} (${currentTour.title}) starting ${travelDate} from ${pickupCity}. Please share the itinerary & quote.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#073B3A] hover:bg-[#062F31] text-white font-bold text-xs inline-flex items-center justify-center gap-2 transition shadow-skeuo-button cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#D9A52B]" />
                <span>Chat with Tour Desk on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BookTourPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#FAF9F5]">
          <div className="text-center space-y-2">
            <div className="w-8 h-8 border-4 border-[#073B3A] border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs font-bold text-[#073B3A]">Loading Tour Booking Experience...</p>
          </div>
        </div>
      }
    >
      <TourBookingContent />
    </Suspense>
  );
}
