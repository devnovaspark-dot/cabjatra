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
  Car,
  Briefcase,
  Phone,
  User,
  Mail,
  Printer,
  Copy,
} from "lucide-react";
import { ODISHA_TOURS } from "@/data/destinations";
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
  const [selectedVehicleType, setSelectedVehicleType] = useState<string>("sedan");

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
  };

  const handleStep2Next = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(3);
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
  };

  const handleCopyRef = () => {
    if (!enquiryRefId) return;
    navigator.clipboard.writeText(enquiryRefId);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2200);
  };

  // 3-Step Navigation Configuration
  const stepsConfig = [
    { num: 1, label: "Choose Circuit", subtitle: "Itinerary Selection", icon: Compass },
    { num: 2, label: "Dates & Vehicle", subtitle: "Schedule & Fleet", icon: Calendar },
    { num: 3, label: "Passenger Info", subtitle: "Contact & Group", icon: Users },
  ];

  return (
    <div className="relative min-h-screen bg-[#FAF9F5] text-[#182A2B] overflow-hidden pb-16 sm:pb-20">
      {/* Luminous Scenic Heritage Travel Backdrop - High Clarity Without Murky Shadows */}
      <div className="absolute top-0 inset-x-0 h-[640px] sm:h-[720px] z-0 overflow-hidden pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?q=85&w=2400&auto=format&fit=crop"
          alt="Scenic Odisha temple heritage tour backdrop"
          fill
          priority
          className="object-cover object-center brightness-[0.92] contrast-[1.05]"
        />
        {/* Luminous, cinematic gradient that keeps temple architecture, skies & landscape clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#021617]/75 via-[#062F31]/35 via-45% to-[#FAF9F5]" />
        <div className="absolute inset-0 bg-radial-[at_center_top] from-transparent via-transparent to-black/25 pointer-events-none" />
      </div>

      <div
        className={`relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ${
          currentStep === 4
            ? "pt-36 sm:pt-44 pb-20"
            : "pt-28 sm:pt-32 pb-12"
        }`}
      >
        {/* Clean, Non-Text-Heavy Hero Header - Zero Navbar Overlap */}
        {currentStep < 4 && (
          <div className="text-center max-w-2xl mx-auto mb-5 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/45 backdrop-blur-md border border-[#D9A52B]/40 text-xs font-semibold text-[#D9A52B] mb-2 shadow-sm">
              <Palmtree className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Curated Circuits • Standby Commercial Chauffeur</span>
            </div>
            <h1 className="text-xl sm:text-3xl font-extrabold font-display tracking-tight text-white drop-shadow-md">
              Book an Odisha Private Tour
            </h1>
          </div>
        )}

        {/* Elegant 3-Step Progress Stepper */}
        {currentStep < 4 && (
          <div className="mb-6 max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
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
                    className={`p-2.5 sm:p-3 rounded-2xl border text-left transition-all duration-200 flex items-center gap-2.5 select-none ${
                      isCurrent
                        ? "bg-gradient-to-r from-[#0C4E4B] to-[#041F20] text-white border-2 border-[#D9A52B] shadow-md ring-2 ring-[#D9A52B]/30"
                        : isPassed
                        ? "bg-[#073B3A]/90 text-white border border-[#10B981] shadow-xs cursor-pointer hover:brightness-110"
                        : "bg-[#062F31]/60 backdrop-blur-md border border-white/15 text-white/70 shadow-xs"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition-all ${
                        isCurrent
                          ? "bg-[#D9A52B] text-[#062F31] font-black shadow-xs"
                          : isPassed
                          ? "bg-[#10B981] text-white"
                          : "bg-white/15 text-white/90 border border-white/20 font-bold"
                      }`}
                    >
                      {isPassed ? <Check className="w-4 h-4 text-white stroke-[2.5]" /> : `0${s.num}`}
                    </div>

                    <div className="min-w-0 flex-1 truncate">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`text-xs sm:text-sm font-bold font-display truncate ${
                            isCurrent ? "text-white" : isPassed ? "text-white" : "text-white/80"
                          }`}
                        >
                          {s.label}
                        </span>
                        {isCurrent && (
                          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shrink-0" />
                        )}
                      </div>
                      <p
                        className={`text-[10px] sm:text-xs truncate leading-tight mt-0.5 ${
                          isCurrent ? "text-[#D9A52B] font-semibold" : isPassed ? "text-[#A7F3D0]" : "text-white/50"
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

        {/* Stable Main Card Container - Generous Spacing & Zero Layout Shifting */}
        <div className="max-w-4xl mx-auto">
          {/* ================= STEP 1: VISUAL CIRCUIT EXPLORER ================= */}
          {currentStep === 1 && (
            <div className="card-skeuo rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6 min-h-[580px] flex flex-col justify-between animate-in fade-in-50 duration-200">
              <div className="space-y-6">
                {/* Header */}
                <div className="border-b border-[#E5ECE5] pb-4 flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold font-display text-[#182A2B]">
                      Select Preferred Circuit
                    </h2>
                    <p className="text-xs text-[#667575] mt-0.5">
                      Handcrafted cultural, coastal, and wildlife journeys with dedicated standby chauffeurs.
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#073B3A] font-semibold bg-[#E0ECEA] px-3 py-1 rounded-full border border-[#C1DAD7]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D9A52B]" />
                    <span>Private Standby Chauffeur</span>
                  </span>
                </div>

                {/* Visual Tour Circuit Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {ODISHA_TOURS.map((t) => {
                    const isSelected = selectedTourSlug === t.slug;
                    return (
                      <div
                        key={t.id}
                        onClick={() => setSelectedTourSlug(t.slug)}
                        className={`rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 flex flex-col justify-between group select-none ${
                          isSelected
                            ? "card-skeuo border-2 border-[#D9A52B] ring-2 ring-[#073B3A]/30 shadow-lg scale-[1.01]"
                            : "card-skeuo hover:border-[#073B3A]/40"
                        }`}
                      >
                        <div>
                          {/* Tour Image with Duration & Tag */}
                          <div className="relative h-36 w-full overflow-hidden bg-[#FAF9F5]">
                            <Image
                              src={t.heroImage}
                              alt={t.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

                            <div className="absolute top-2.5 left-2.5 bg-[#062F31]/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md border border-white/15">
                              {t.duration}
                            </div>

                            <div className="absolute bottom-2 left-3 right-3 text-white">
                              <h3 className="text-sm font-bold font-display leading-tight">{t.title}</h3>
                              <p className="text-[11px] text-[#D9A52B] font-semibold truncate">{t.destinations.join(" • ")}</p>
                            </div>
                          </div>

                          {/* Brief Highlights */}
                          <div className="p-3.5 space-y-2">
                            <p className="text-xs text-[#667575] leading-relaxed line-clamp-2">
                              {t.tagline}
                            </p>

                            <div className="space-y-1 pt-1">
                              {t.highlights.slice(0, 2).map((hl, i) => (
                                <div key={i} className="flex items-center gap-1.5 text-xs text-[#455353]">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                                  <span className="truncate">{hl}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Card Footer */}
                        <div className="p-3.5 pt-0 border-t border-[#EEF2EE] flex items-center justify-between mt-2">
                          <span className="text-xs font-bold text-[#073B3A]">
                            AC Cab Included
                          </span>
                          <div
                            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
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

                {/* Interactive Circuit Timeline Strip */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#062F31] to-[#041F20] text-white border border-[#D9A52B]/30 shadow-sm space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-white/15">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9A52B]">
                        Active Circuit:
                      </span>
                      <strong className="text-sm font-bold font-display text-white ml-2">
                        {currentTour.title} ({currentTour.duration})
                      </strong>
                    </div>
                    <div className="text-xs text-[#E0ECEA]/90 font-medium">
                      Starting Hub: <strong className="text-[#D9A52B]">{currentTour.startingCity}</strong>
                    </div>
                  </div>

                  {/* Day Selection Tabs */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {currentTour.itinerary.map((it, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveDayIndex(idx)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
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
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white/90">
                      <span className="text-[#D9A52B] font-bold mr-2">
                        {currentTour.itinerary[activeDayIndex].day}: {currentTour.itinerary[activeDayIndex].title}
                      </span>
                      <span className="text-white/80">
                        {currentTour.itinerary[activeDayIndex].desc}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Step 1 Actions */}
              <div className="pt-4 border-t border-[#EEF2EE] flex items-center justify-between">
                <span className="text-xs text-[#667575] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#D9A52B]" />
                  <span>Customizable itinerary halts upon request.</span>
                </span>
                <button
                  type="button"
                  onClick={handleStep1Next}
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#D9A52B] via-[#E6B543] to-[#C99320] text-[#062F31] font-bold text-sm inline-flex items-center gap-2 cursor-pointer shadow-skeuo-gold hover:brightness-105 active:scale-[0.99] transition-all"
                >
                  <span>Continue to Dates &amp; Vehicle</span>
                  <ArrowRight className="w-4 h-4 text-[#062F31]" />
                </button>
              </div>
            </div>
          )}

          {/* ================= STEP 2: DATES & VEHICLE CLASS ================= */}
          {currentStep === 2 && (
            <form
              onSubmit={handleStep2Next}
              className="card-skeuo rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6 min-h-[580px] flex flex-col justify-between animate-in fade-in-50 duration-200"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="border-b border-[#E5ECE5] pb-4 flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold font-display text-[#182A2B]">
                      Configure Your Tour Journey
                    </h2>
                    <p className="text-xs text-[#667575] mt-0.5">
                      Set your starting date, group size, and preferred vehicle class.
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#073B3A] font-semibold bg-[#E0ECEA] px-3 py-1 rounded-full border border-[#C1DAD7]">
                    <Clock className="w-3.5 h-3.5 text-[#D9A52B]" />
                    <span>Selected: {currentTour.title}</span>
                  </span>
                </div>

                {/* Travel Date & Group Size - 3-Column Ergonomic Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#182A2B] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#073B3A]" />
                      <span>Start Date *</span>
                    </label>
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-sm font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#D9A52B]/60 focus:border-[#073B3A] focus:outline-none transition cursor-pointer shadow-xs"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#182A2B] flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#073B3A]" />
                      <span>Travelers *</span>
                    </label>
                    <select
                      value={travelersCount}
                      onChange={(e) => setTravelersCount(Number(e.target.value))}
                      className="w-full h-12 px-4 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-sm font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#D9A52B]/60 focus:border-[#073B3A] focus:outline-none transition cursor-pointer shadow-xs"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 16].map((num) => (
                        <option key={num} value={num}>
                          {num} Person{num > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#182A2B] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#073B3A]" />
                      <span>Pickup Hub in Odisha *</span>
                    </label>
                    <select
                      value={pickupCity}
                      onChange={(e) => setPickupCity(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-sm font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#D9A52B]/60 focus:border-[#073B3A] focus:outline-none transition cursor-pointer shadow-xs"
                    >
                      <option value="Bhubaneswar Airport (BBI)">Bhubaneswar Airport (BBI)</option>
                      <option value="Bhubaneswar Railway Station">Bhubaneswar Railway Station</option>
                      <option value="Puri Railway Station / Hotel">Puri Railway Station / Hotel</option>
                      <option value="Cuttack Hub">Cuttack Hub</option>
                    </select>
                  </div>
                </div>

                {/* Vehicle Selection Cards */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#182A2B] uppercase tracking-wider block">
                    Select Vehicle Class:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      {
                        id: "sedan",
                        name: "Sedan",
                        models: "Swift Dzire, Toyota Etios, Honda Amaze",
                        capacity: "Up to 4 Guests",
                        luggage: "3 Bags",
                        ideal: "Couples & Small Families",
                      },
                      {
                        id: "suv",
                        name: "SUV",
                        models: "Mahindra Bolero, Scorpio, Maruti Brezza",
                        capacity: "Up to 6 Guests",
                        luggage: "3 Bags",
                        ideal: "Ghats & Rugged Routes",
                      },
                      {
                        id: "large-car",
                        name: "Large car",
                        models: "Toyota Innova Crysta, Kia Carens, Maruti Ertiga",
                        capacity: "Up to 7 Guests",
                        luggage: "4 Bags",
                        ideal: "Families & Senior Citizens",
                      },
                      {
                        id: "mini-bus",
                        name: "Mini bus",
                        models: "Tempo Traveller, Force Urbania",
                        capacity: "Up to 17 Guests",
                        luggage: "10 Bags",
                        ideal: "Large Pilgrimage Sanghas",
                      },
                    ].map((veh) => {
                      const isSelected = selectedVehicleType === veh.id;
                      return (
                        <div
                          key={veh.id}
                          onClick={() => setSelectedVehicleType(veh.id as any)}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between group select-none min-h-[160px] ${
                            isSelected
                              ? "border-2 border-[#D9A52B] bg-[#073B3A] text-white shadow-md scale-[1.01]"
                              : "border-[#D5DDD5] bg-[#FAF9F5] hover:bg-white text-[#182A2B]"
                          }`}
                        >
                          <div>
                            <div
                              className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2 ${
                                isSelected ? "bg-white/15 text-[#D9A52B]" : "bg-white text-[#073B3A] shadow-xs"
                              }`}
                            >
                              <Car className="w-4 h-4" />
                            </div>
                            <h4 className="text-sm font-bold font-display">{veh.name}</h4>
                            <p className={`text-xs mt-0.5 ${isSelected ? "text-[#E0ECEA]/80" : "text-[#667575]"}`}>
                              {veh.models}
                            </p>
                            <div className={`mt-3 pt-2 border-t text-xs space-y-1 ${isSelected ? "border-white/15 text-white/90" : "border-[#E5EAE5] text-[#455353]"}`}>
                              <div className="flex items-center gap-1.5">
                                <Users className="w-3.5 h-3.5 text-[#D9A52B]" />
                                <span>{veh.capacity}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Briefcase className="w-3.5 h-3.5 text-[#D9A52B]" />
                                <span>{veh.luggage}</span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 pt-2 border-t border-black/5 flex items-center justify-end">
                            <span className={`text-[10px] font-bold uppercase ${isSelected ? "text-[#D9A52B]" : "text-transparent"}`}>
                              Selected ✓
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Step 2 Actions */}
              <div className="pt-4 border-t border-[#EEF2EE] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="px-5 py-2.5 rounded-xl border border-[#D5DDD5] text-[#182A2B] font-bold text-xs inline-flex items-center gap-1.5 hover:bg-[#FAF9F5] transition cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#D9A52B] via-[#E6B543] to-[#C99320] text-[#062F31] font-bold text-sm inline-flex items-center gap-2 cursor-pointer shadow-skeuo-gold hover:brightness-105 active:scale-[0.99] transition-all"
                >
                  <span>Continue to Passenger Details</span>
                  <ArrowRight className="w-4 h-4 text-[#062F31]" />
                </button>
              </div>
            </form>
          )}

          {/* ================= STEP 3: PASSENGER INFO & WHATSAPP ================= */}
          {currentStep === 3 && (
            <form
              onSubmit={handleStep3Submit}
              className="card-skeuo rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6 min-h-[580px] flex flex-col justify-between animate-in fade-in-50 duration-200"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="border-b border-[#E5ECE5] pb-4 flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold font-display text-[#182A2B]">
                      Lead Traveler Details
                    </h2>
                    <p className="text-xs text-[#667575] mt-0.5">
                      Your personalized itinerary quote and dedicated chauffeur details will be sent here.
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#073B3A] font-semibold bg-[#E0ECEA] px-3 py-1 rounded-full border border-[#C1DAD7]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Quote Dispatched on WhatsApp</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#182A2B] flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#073B3A]" />
                      <span>Lead Traveler Full Name *</span>
                    </label>
                    <input
                      type="text"
                      value={primaryName}
                      onChange={(e) => setPrimaryName(e.target.value)}
                      placeholder="e.g. Sanjeev Kumar Patnaik"
                      className="w-full h-12 px-4 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-sm font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#D9A52B]/60 focus:border-[#073B3A] focus:outline-none transition shadow-xs placeholder:text-[#9EA8A8]"
                      required
                    />
                    {formErrors.name && (
                      <p className="text-xs text-rose-600 font-medium">{formErrors.name}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#182A2B] flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#073B3A]" />
                      <span>WhatsApp Phone *</span>
                    </label>
                    <div className="flex gap-2">
                      <span className="h-12 px-3.5 rounded-xl border border-[#D5DDD5] bg-[#EEF2EE] text-sm font-bold text-[#073B3A] flex items-center shrink-0">
                        +91
                      </span>
                      <input
                        type="tel"
                        value={primaryPhone}
                        onChange={(e) => setPrimaryPhone(e.target.value)}
                        placeholder="9876543210"
                        maxLength={10}
                        className="w-full h-12 px-4 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-sm font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#D9A52B]/60 focus:border-[#073B3A] focus:outline-none transition shadow-xs placeholder:text-[#9EA8A8]"
                        required
                      />
                    </div>
                    {formErrors.phone && (
                      <p className="text-xs text-rose-600 font-medium">{formErrors.phone}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#182A2B] flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#073B3A]" />
                      <span>Email Address *</span>
                    </label>
                    <input
                      type="email"
                      value={primaryEmail}
                      onChange={(e) => setPrimaryEmail(e.target.value)}
                      placeholder="sanjeev@example.com"
                      className="w-full h-12 px-4 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-sm font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#D9A52B]/60 focus:border-[#073B3A] focus:outline-none transition shadow-xs placeholder:text-[#9EA8A8]"
                      required
                    />
                    {formErrors.email && (
                      <p className="text-xs text-rose-600 font-medium">{formErrors.email}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#182A2B] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#073B3A]" />
                      <span>Specific Pickup Address / Hotel (Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      placeholder="e.g. Mayfair Lagoon, BBI Terminal 1"
                      className="w-full h-12 px-4 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-sm font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#D9A52B]/60 focus:border-[#073B3A] focus:outline-none transition shadow-xs placeholder:text-[#9EA8A8]"
                    />
                  </div>

                  <div className="md:col-span-2 space-y-1.5">
                    <label className="text-xs font-bold text-[#182A2B]">
                      Special Requests / Senior Citizen Assistance (Optional)
                    </label>
                    <input
                      type="text"
                      value={customRequests}
                      onChange={(e) => setCustomRequests(e.target.value)}
                      placeholder="e.g. Traveling with elderly parents, wheelchair assistance, Pipili craft bazaar halt"
                      className="w-full h-12 px-4 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-sm font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#D9A52B]/60 focus:border-[#073B3A] focus:outline-none transition shadow-xs placeholder:text-[#9EA8A8]"
                    />
                  </div>
                </div>

                {/* Explicit WhatsApp Consent Component */}
                <div className="pt-2">
                  <WhatsAppConsentCheckbox
                    bookingConsent={whatsAppConsent}
                    onBookingConsentChange={setWhatsAppConsent}
                    marketingConsent={marketingConsent}
                    onMarketingConsentChange={setMarketingConsent}
                    showMarketingOption={true}
                    error={consentError}
                  />
                </div>
              </div>

              {/* Step 3 Actions */}
              <div className="pt-4 border-t border-[#EEF2EE] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="px-5 py-2.5 rounded-xl border border-[#D5DDD5] text-[#182A2B] font-bold text-xs inline-flex items-center gap-1.5 hover:bg-[#FAF9F5] transition cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#D9A52B] via-[#E6B543] to-[#C99320] text-[#062F31] font-bold text-sm inline-flex items-center gap-2 cursor-pointer shadow-skeuo-gold hover:brightness-105 active:scale-[0.99] transition-all"
                >
                  <span>Request Custom Tour Quote</span>
                  <ArrowRight className="w-4 h-4 text-[#062F31]" />
                </button>
              </div>
            </form>
          )}

          {/* ================= STEP 4: COMPACT CONFIRMATION & OFFICIAL TOUR VOUCHER ================= */}
          {currentStep === 4 && (
            <div className="w-full max-w-lg mx-auto card-skeuo rounded-3xl p-4 sm:p-5 border border-[#D5DDD5] shadow-2xl space-y-2.5 text-center animate-in zoom-in-95 duration-300">
              {/* 3D Glass Celebration Orb - Continuously Bouncing Ball */}
              <GlassCelebrationOrb size="md" />

              {/* Clean Compact Title */}
              <div className="space-y-0.5">
                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#182A2B] tracking-tight">
                  Thank You, {primaryName || "Esteemed Traveler"}!
                </h2>
                <p className="text-xs text-[#556464]">
                  Your tour enquiry is logged. Custom itinerary details sent to your WhatsApp.
                </p>
              </div>

              {/* Compact Digital Tour Boarding Pass */}
              <div className="rounded-2xl border border-[#D5DDD5] bg-[#FAF9F5] shadow-xs overflow-hidden text-left text-xs">
                {/* Pass Header */}
                <div className="bg-[#073B3A] text-white px-3.5 py-2 flex items-center justify-between border-b border-[#D9A52B]/30">
                  <div className="flex items-center gap-2">
                    <BrandLogo size="sm" variant="light" showTagline={false} />
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#D9A52B]">
                      Tour Voucher
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/30 px-2 py-0.5 rounded-lg border border-white/15">
                    <span className="text-[9px] text-[#A7F3D0] uppercase">Ref:</span>
                    <strong className="font-mono text-xs text-[#FAF9F5] font-black">
                      {enquiryRefId}
                    </strong>
                    <button
                      type="button"
                      onClick={handleCopyRef}
                      className="p-1 rounded text-[#D9A52B] hover:text-white transition cursor-pointer"
                      title="Copy Reference"
                    >
                      {copiedRef ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Pass Details (2 Columns) */}
                <div className="p-3 sm:p-3.5 grid grid-cols-2 gap-3 divide-x divide-[#E5ECE5]">
                  <div className="space-y-1">
                    <div>
                      <span className="text-[9px] text-[#8A9797] block uppercase font-bold">Circuit:</span>
                      <strong className="text-xs font-bold text-[#182A2B] block truncate">
                        {currentTour.title}
                      </strong>
                    </div>
                    <div>
                      <span className="text-[9px] text-[#8A9797] block uppercase font-bold">Duration & Hub:</span>
                      <span className="text-xs font-semibold text-[#073B3A] block truncate">
                        {currentTour.duration} • from {pickupCity}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] text-[#8A9797] block uppercase font-bold">Start Date:</span>
                      <span className="text-xs font-semibold text-[#182A2B] block truncate">
                        {travelDate} ({travelersCount} Guests)
                      </span>
                    </div>
                  </div>

                  <div className="pl-3 space-y-1">
                    <div>
                      <span className="text-[9px] text-[#8A9797] block uppercase font-bold">Vehicle Class:</span>
                      <strong className="text-xs font-bold text-[#182A2B] block truncate capitalize">
                        {selectedVehicleType === "sedan"
                          ? "Sedan (Dzire / Etios / Amaze)"
                          : selectedVehicleType === "suv"
                          ? "SUV (Bolero / Scorpio / Brezza)"
                          : selectedVehicleType === "large-car"
                          ? "Large car (Innova Crysta / Carens)"
                          : "Mini bus (Force Urbania)"}
                      </strong>
                    </div>
                    <div className="bg-[#E0ECEA]/70 p-1.5 rounded-lg border border-[#C1DAD7]">
                      <span className="text-[9px] font-bold text-[#073B3A] uppercase block">Standby Chauffeur:</span>
                      <strong className="text-xs font-extrabold text-[#073B3A] block">
                        Commercial Permit Included
                      </strong>
                    </div>
                    <div className="text-[10px] text-[#667575] leading-tight">
                      Zero cancellation fee on 6hr notice.
                    </div>
                  </div>
                </div>
              </div>

              {/* Compact Action Buttons */}
              <div className="pt-1 flex items-center justify-center gap-2">
                <Link
                  href="/"
                  className="px-4 py-2 rounded-xl bg-[#FAF9F5] hover:bg-[#EEF2EE] border border-[#D5DDD5] text-[#182A2B] font-bold text-xs transition cursor-pointer"
                >
                  Home
                </Link>

                <button
                  type="button"
                  onClick={() => typeof window !== "undefined" && window.print()}
                  className="px-3 py-2 rounded-xl bg-white hover:bg-[#FAF9F5] border border-[#D5DDD5] text-[#073B3A] font-bold text-xs inline-flex items-center gap-1 transition cursor-pointer shadow-xs"
                  title="Print Voucher"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Print</span>
                </button>

                <a
                  href={`${COMPANY_CONFIG.contact.whatsAppLink}?text=${encodeURIComponent(
                    `Hi Cabjatra Tour Desk, I just requested custom quote ${enquiryRefId} for ${currentTour.title} (${currentTour.duration}) starting on ${travelDate} with ${travelersCount} travelers. Please share the detailed itinerary and tariff.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 rounded-xl bg-[#073B3A] hover:bg-[#062F31] text-white font-bold text-xs inline-flex items-center gap-2 transition shadow-skeuo-button cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#D9A52B]" />
                  <span>WhatsApp Tour Desk</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BookTourPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#FAF9F5]">
          <div className="text-center space-y-3">
            <div className="w-9 h-9 border-4 border-[#073B3A] border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs font-bold text-[#073B3A]">Loading Tour Experience...</p>
          </div>
        </div>
      }
    >
      <TourBookingContent />
    </Suspense>
  );
}
