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
    <div className="relative min-h-screen bg-[#FAF9F5] text-[#0F172A] overflow-hidden pb-16 sm:pb-20 print:min-h-0 print:pb-0 print:bg-white print:overflow-visible">
      {/* Luminous Scenic Heritage Travel Backdrop - High Clarity Without Murky Shadows */}
      <div className="absolute top-0 inset-x-0 h-[640px] sm:h-[720px] z-0 overflow-hidden pointer-events-none print:hidden">
        <Image
          src="https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?q=85&w=2400&auto=format&fit=crop"
          alt="Scenic Odisha temple heritage tour backdrop"
          fill
          priority
          className="object-cover object-center brightness-[0.92] contrast-[1.05]"
        />
        {/* Balanced cinematic gradient overlay: pure transparent clarity without white shadow cast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#011415]/85 via-[#021819]/55 via-50% to-[#011415]/90" />
        <div className="absolute inset-0 bg-radial-[at_center_top] from-transparent via-transparent to-black/40 pointer-events-none" />
      </div>

      <div
        className={`relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 print:p-0 print:max-w-none print:m-0 print:pt-0 ${
          currentStep === 4
            ? "pt-24 sm:pt-28 pb-16"
            : "pt-20 sm:pt-24 pb-12"
        }`}
      >
        {/* Clean, Non-Text-Heavy Hero Header - Perfectly Clear of Docked Navbar */}
        {currentStep < 4 && (
          <div className="text-center max-w-xl mx-auto mb-3.5 text-white">
            <h1 className="text-lg sm:text-xl font-extrabold font-display tracking-tight text-white drop-shadow-md">
              Book an Odisha Private Tour
            </h1>
            <p className="text-[11px] text-[#FEC401] font-medium mt-0.5">
              Curated Circuits • Dedicated Commercial Driver
            </p>
          </div>
        )}

        {/* Elegant 3-Step Progress Stepper */}
        {currentStep < 4 && (
          <div className="mb-4 max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-2">
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
                    className={`p-2 rounded-xl border text-left transition-all duration-200 flex items-center gap-2 select-none ${
                      isCurrent
                        ? "bg-gradient-to-r from-[#0A2B8C] to-[#000B3B] text-white border-2 border-[#FEC401] shadow-md ring-2 ring-[#FEC401]/30"
                        : isPassed
                        ? "bg-[#02146B]/90 text-white border border-[#10B981] shadow-xs cursor-pointer hover:brightness-110"
                        : "bg-[#001162]/75 backdrop-blur-md border border-white/15 text-white/70 shadow-xs"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-all ${
                        isCurrent
                          ? "bg-[#FEC401] text-[#001162] font-black shadow-xs"
                          : isPassed
                          ? "bg-[#10B981] text-white"
                          : "bg-white/15 text-white/90 border border-white/20 font-bold"
                      }`}
                    >
                      {isPassed ? <Check className="w-3.5 h-3.5 text-white stroke-[2.5]" /> : `0${s.num}`}
                    </div>

                    <div className="min-w-0 flex-1 truncate">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`text-xs font-bold font-display truncate ${
                            isCurrent ? "text-white" : isPassed ? "text-white" : "text-white/80"
                          }`}
                        >
                          {s.label}
                        </span>
                        {isCurrent && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse shrink-0" />
                        )}
                      </div>
                      <p
                        className={`text-[9.5px] truncate leading-tight mt-0.5 ${
                          isCurrent ? "text-[#FEC401] font-semibold" : isPassed ? "text-[#A7F3D0]" : "text-white/50"
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
                    <h2 className="text-lg sm:text-xl font-bold font-display text-[#0F172A]">
                      Select Preferred Circuit
                    </h2>
                    <p className="text-xs text-[#667575] mt-0.5">
                      Handcrafted cultural, coastal, and wildlife journeys with dedicated standby drivers.
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#02146B] font-semibold bg-[#F1F5F9] px-3 py-1 rounded-full border border-[#C1DAD7]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FEC401]" />
                    <span>Dedicated Standby Driver</span>
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
                            ? "card-skeuo border-2 border-[#FEC401] ring-2 ring-[#02146B]/30 shadow-lg scale-[1.01]"
                            : "card-skeuo hover:border-[#02146B]/40"
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

                            <div className="absolute top-2.5 left-2.5 bg-[#001162]/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md border border-white/15">
                              {t.duration}
                            </div>

                            <div className="absolute bottom-2 left-3 right-3 text-white">
                              <h3 className="text-sm font-bold font-display leading-tight">{t.title}</h3>
                              <p className="text-[11px] text-[#FEC401] font-semibold truncate">{t.destinations.join(" • ")}</p>
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
                          <span className="text-xs font-bold text-[#02146B]">
                            AC Cab Included
                          </span>
                          <div
                            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                              isSelected
                                ? "bg-[#02146B] text-[#FEC401] shadow-xs"
                                : "border border-[#D5DDD5] text-[#667575] group-hover:border-[#02146B]"
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
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#001162] to-[#000B3B] text-white border border-[#FEC401]/30 shadow-sm space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-white/15">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#FEC401]">
                        Active Circuit:
                      </span>
                      <strong className="text-sm font-bold font-display text-white ml-2">
                        {currentTour.title} ({currentTour.duration})
                      </strong>
                    </div>
                    <div className="text-xs text-[#F1F5F9]/90 font-medium">
                      Starting Hub: <strong className="text-[#FEC401]">{currentTour.startingCity}</strong>
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
                            ? "bg-[#FEC401] text-[#001162] font-black scale-102"
                            : "bg-white/10 hover:bg-white/15 text-white border border-white/15"
                        }`}
                      >
                        <span>{it.day}</span>
                      </button>
                    ))}
                  </div>

                  {currentTour.itinerary[activeDayIndex] && (
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white/90">
                      <span className="text-[#FEC401] font-bold mr-2">
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
                  <ShieldCheck className="w-4 h-4 text-[#FEC401]" />
                  <span>Customizable itinerary halts upon request.</span>
                </span>
                <button
                  type="button"
                  onClick={handleStep1Next}
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#FEC401] via-[#FEC401] to-[#E5AD00] text-[#001162] font-bold text-sm inline-flex items-center gap-2 cursor-pointer shadow-skeuo-gold hover:brightness-105 active:scale-[0.99] transition-all"
                >
                  <span>Continue to Dates &amp; Vehicle</span>
                  <ArrowRight className="w-4 h-4 text-[#001162]" />
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
                    <h2 className="text-lg sm:text-xl font-bold font-display text-[#0F172A]">
                      Configure Your Tour Journey
                    </h2>
                    <p className="text-xs text-[#667575] mt-0.5">
                      Set your starting date, group size, and preferred vehicle class.
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#02146B] font-semibold bg-[#F1F5F9] px-3 py-1 rounded-full border border-[#C1DAD7]">
                    <Clock className="w-3.5 h-3.5 text-[#FEC401]" />
                    <span>Selected: {currentTour.title}</span>
                  </span>
                </div>

                {/* Travel Date & Group Size - 3-Column Ergonomic Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#02146B]" />
                      <span>Start Date *</span>
                    </label>
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-sm font-semibold text-[#0F172A] focus:ring-2 focus:ring-[#FEC401]/60 focus:border-[#02146B] focus:outline-none transition cursor-pointer shadow-xs"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#02146B]" />
                      <span>Travelers *</span>
                    </label>
                    <select
                      value={travelersCount}
                      onChange={(e) => setTravelersCount(Number(e.target.value))}
                      className="w-full h-12 px-4 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-sm font-semibold text-[#0F172A] focus:ring-2 focus:ring-[#FEC401]/60 focus:border-[#02146B] focus:outline-none transition cursor-pointer shadow-xs"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 16].map((num) => (
                        <option key={num} value={num}>
                          {num} Person{num > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#02146B]" />
                      <span>Pickup Hub in Odisha *</span>
                    </label>
                    <select
                      value={pickupCity}
                      onChange={(e) => setPickupCity(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-sm font-semibold text-[#0F172A] focus:ring-2 focus:ring-[#FEC401]/60 focus:border-[#02146B] focus:outline-none transition cursor-pointer shadow-xs"
                    >
                      <option value="Bhubaneswar Airport (BBI)">Bhubaneswar Airport (BBI)</option>
                      <option value="Bhubaneswar Railway Station">Bhubaneswar Railway Station</option>
                      <option value="Puri Railway Station / Hotel">Puri Railway Station / Hotel</option>
                      <option value="Kataka Hub">Kataka Hub</option>
                    </select>
                  </div>
                </div>

                {/* Vehicle Selection Cards */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#0F172A] uppercase tracking-wider block">
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
                              ? "border-2 border-[#FEC401] bg-[#02146B] text-white shadow-md scale-[1.01]"
                              : "border-[#D5DDD5] bg-[#FAF9F5] hover:bg-white text-[#0F172A]"
                          }`}
                        >
                          <div>
                            <div
                              className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2 ${
                                isSelected ? "bg-white/15 text-[#FEC401]" : "bg-white text-[#02146B] shadow-xs"
                              }`}
                            >
                              <Car className="w-4 h-4" />
                            </div>
                            <h4 className="text-sm font-bold font-display">{veh.name}</h4>
                            <p className={`text-xs mt-0.5 ${isSelected ? "text-[#F1F5F9]/80" : "text-[#667575]"}`}>
                              {veh.models}
                            </p>
                            <div className={`mt-3 pt-2 border-t text-xs space-y-1 ${isSelected ? "border-white/15 text-white/90" : "border-[#E5EAE5] text-[#455353]"}`}>
                              <div className="flex items-center gap-1.5">
                                <Users className="w-3.5 h-3.5 text-[#FEC401]" />
                                <span>{veh.capacity}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Briefcase className="w-3.5 h-3.5 text-[#FEC401]" />
                                <span>{veh.luggage}</span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 pt-2 border-t border-black/5 flex items-center justify-end">
                            <span className={`text-[10px] font-bold uppercase ${isSelected ? "text-[#FEC401]" : "text-transparent"}`}>
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
                  className="px-5 py-2.5 rounded-xl border border-[#D5DDD5] text-[#0F172A] font-bold text-xs inline-flex items-center gap-1.5 hover:bg-[#FAF9F5] transition cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#FEC401] via-[#FEC401] to-[#E5AD00] text-[#001162] font-bold text-sm inline-flex items-center gap-2 cursor-pointer shadow-skeuo-gold hover:brightness-105 active:scale-[0.99] transition-all"
                >
                  <span>Continue to Passenger Details</span>
                  <ArrowRight className="w-4 h-4 text-[#001162]" />
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
                    <h2 className="text-lg sm:text-xl font-bold font-display text-[#0F172A]">
                      Lead Traveler Details
                    </h2>
                    <p className="text-xs text-[#667575] mt-0.5">
                      Your personalized itinerary quote and dedicated driver details will be sent here.
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#02146B] font-semibold bg-[#F1F5F9] px-3 py-1 rounded-full border border-[#C1DAD7]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Quote Dispatched on WhatsApp</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#02146B]" />
                      <span>Lead Traveler Full Name *</span>
                    </label>
                    <input
                      type="text"
                      value={primaryName}
                      onChange={(e) => setPrimaryName(e.target.value)}
                      placeholder="e.g. Sanjeev Kumar Patnaik"
                      className="w-full h-12 px-4 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-sm font-semibold text-[#0F172A] focus:ring-2 focus:ring-[#FEC401]/60 focus:border-[#02146B] focus:outline-none transition shadow-xs placeholder:text-[#9EA8A8]"
                      required
                    />
                    {formErrors.name && (
                      <p className="text-xs text-rose-600 font-medium">{formErrors.name}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#02146B]" />
                      <span>WhatsApp Phone *</span>
                    </label>
                    <div className="flex gap-2">
                      <span className="h-12 px-3.5 rounded-xl border border-[#D5DDD5] bg-[#EEF2EE] text-sm font-bold text-[#02146B] flex items-center shrink-0">
                        +91
                      </span>
                      <input
                        type="tel"
                        value={primaryPhone}
                        onChange={(e) => setPrimaryPhone(e.target.value)}
                        placeholder="9876543210"
                        maxLength={10}
                        className="w-full h-12 px-4 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-sm font-semibold text-[#0F172A] focus:ring-2 focus:ring-[#FEC401]/60 focus:border-[#02146B] focus:outline-none transition shadow-xs placeholder:text-[#9EA8A8]"
                        required
                      />
                    </div>
                    {formErrors.phone && (
                      <p className="text-xs text-rose-600 font-medium">{formErrors.phone}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#02146B]" />
                      <span>Email Address *</span>
                    </label>
                    <input
                      type="email"
                      value={primaryEmail}
                      onChange={(e) => setPrimaryEmail(e.target.value)}
                      placeholder="sanjeev@example.com"
                      className="w-full h-12 px-4 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-sm font-semibold text-[#0F172A] focus:ring-2 focus:ring-[#FEC401]/60 focus:border-[#02146B] focus:outline-none transition shadow-xs placeholder:text-[#9EA8A8]"
                      required
                    />
                    {formErrors.email && (
                      <p className="text-xs text-rose-600 font-medium">{formErrors.email}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#02146B]" />
                      <span>Specific Pickup Address / Hotel (Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      placeholder="e.g. Mayfair Lagoon, BBI Terminal 1"
                      className="w-full h-12 px-4 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-sm font-semibold text-[#0F172A] focus:ring-2 focus:ring-[#FEC401]/60 focus:border-[#02146B] focus:outline-none transition shadow-xs placeholder:text-[#9EA8A8]"
                    />
                  </div>

                  <div className="md:col-span-2 space-y-1.5">
                    <label className="text-xs font-bold text-[#0F172A]">
                      Special Requests / Senior Citizen Assistance (Optional)
                    </label>
                    <input
                      type="text"
                      value={customRequests}
                      onChange={(e) => setCustomRequests(e.target.value)}
                      placeholder="e.g. Traveling with elderly parents, wheelchair assistance, Pipili craft bazaar halt"
                      className="w-full h-12 px-4 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-sm font-semibold text-[#0F172A] focus:ring-2 focus:ring-[#FEC401]/60 focus:border-[#02146B] focus:outline-none transition shadow-xs placeholder:text-[#9EA8A8]"
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
                  className="px-5 py-2.5 rounded-xl border border-[#D5DDD5] text-[#0F172A] font-bold text-xs inline-flex items-center gap-1.5 hover:bg-[#FAF9F5] transition cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#FEC401] via-[#FEC401] to-[#E5AD00] text-[#001162] font-bold text-sm inline-flex items-center gap-2 cursor-pointer shadow-skeuo-gold hover:brightness-105 active:scale-[0.99] transition-all"
                >
                  <span>Request Custom Tour Quote</span>
                  <ArrowRight className="w-4 h-4 text-[#001162]" />
                </button>
              </div>
            </form>
          )}

          {/* ================= STEP 4: COMPACT CONFIRMATION & OFFICIAL TOUR VOUCHER ================= */}
          {currentStep === 4 && (
            <>
              {/* Web Interactive View (Hidden on Print) */}
              <div className="print:hidden w-full max-w-lg mx-auto card-skeuo rounded-3xl p-4 sm:p-5 border border-[#D5DDD5] shadow-2xl space-y-2.5 text-center animate-in zoom-in-95 duration-300">
                {/* 3D Glass Celebration Orb - Continuously Bouncing Ball */}
                <GlassCelebrationOrb size="md" />

                {/* Clean Compact Title */}
                <div className="space-y-0.5">
                  <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0F172A] tracking-tight">
                    Thank You, {primaryName || "Esteemed Traveler"}!
                  </h2>
                  <p className="text-xs text-[#556464]">
                    Your tour enquiry is logged. Custom itinerary details sent to your WhatsApp.
                  </p>
                </div>

                {/* Compact Digital Tour Boarding Pass */}
                <div className="rounded-2xl border border-[#D5DDD5] bg-[#FAF9F5] shadow-xs overflow-hidden text-left text-xs">
                  {/* Pass Header */}
                  <div className="bg-[#02146B] text-white px-3.5 py-2 flex items-center justify-between border-b border-[#FEC401]/30">
                    <div className="flex items-center gap-2">
                      <BrandLogo size="sm" variant="light" showTagline={false} />
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#FEC401]">
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
                        className="p-1 rounded text-[#FEC401] hover:text-white transition cursor-pointer"
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
                        <strong className="text-xs font-bold text-[#0F172A] block truncate">
                          {currentTour.title}
                        </strong>
                      </div>
                      <div>
                        <span className="text-[9px] text-[#8A9797] block uppercase font-bold">Duration & Hub:</span>
                        <span className="text-xs font-semibold text-[#02146B] block truncate">
                          {currentTour.duration} • from {pickupCity}
                        </span>
                      </div>
                      <div>
                        <span className="text-[9px] text-[#8A9797] block uppercase font-bold">Start Date:</span>
                        <span className="text-xs font-semibold text-[#0F172A] block truncate">
                          {travelDate} ({travelersCount} Guests)
                        </span>
                      </div>
                    </div>

                    <div className="pl-3 space-y-1">
                      <div>
                        <span className="text-[9px] text-[#8A9797] block uppercase font-bold">Vehicle Class:</span>
                        <strong className="text-xs font-bold text-[#0F172A] block truncate capitalize">
                          {selectedVehicleType === "sedan"
                            ? "Sedan (Dzire / Etios / Amaze)"
                            : selectedVehicleType === "suv"
                            ? "SUV (Bolero / Scorpio / Brezza)"
                            : selectedVehicleType === "large-car"
                            ? "Large car (Innova Crysta / Carens)"
                            : "Mini bus (Force Urbania)"}
                        </strong>
                      </div>
                      <div className="bg-[#F1F5F9]/70 p-1.5 rounded-lg border border-[#C1DAD7]">
                        <span className="text-[9px] font-bold text-[#02146B] uppercase block">Standby Driver:</span>
                        <strong className="text-xs font-extrabold text-[#02146B] block">
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
                    className="px-4 py-2 rounded-xl bg-[#FAF9F5] hover:bg-[#EEF2EE] border border-[#D5DDD5] text-[#0F172A] font-bold text-xs transition cursor-pointer"
                  >
                    Home
                  </Link>

                  <button
                    type="button"
                    onClick={() => typeof window !== "undefined" && window.print()}
                    className="px-3 py-2 rounded-xl bg-white hover:bg-[#FAF9F5] border border-[#D5DDD5] text-[#02146B] font-bold text-xs inline-flex items-center gap-1 transition cursor-pointer shadow-xs"
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
                    className="px-4 sm:px-5 py-2 rounded-xl bg-[#02146B] hover:bg-[#001162] text-white font-bold text-xs inline-flex items-center gap-2 transition shadow-skeuo-button cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-[#FEC401]" />
                    <span>WhatsApp Tour Desk</span>
                  </a>
                </div>
              </div>

              {/* ========================================================================= */}
              {/* OFFICIAL REALISTIC 1-PAGE PRINTABLE TOUR VOUCHER / RECEIPT (WITH WATERMARK)*/}
              {/* ========================================================================= */}
              <div className="hidden print:block print-page-voucher w-full text-[#0F172A] font-sans bg-white relative">
                {/* Security Top Accent Stripe */}
                <div className="w-full h-2 bg-gradient-to-r from-[#000B3B] via-[#FEC401] to-[#000B3B] rounded-t-2xl" />

                {/* Outer Security Border Container */}
                <div className="border-2 border-[#000B3B] rounded-b-2xl p-6 relative overflow-hidden bg-white">

                  {/* 1. Official Centered Diagonal Background Watermark */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
                    <div className="transform -rotate-[32deg] text-center select-none border-4 border-dashed border-[#000B3B]/10 rounded-3xl p-8 max-w-md">
                      <span className="block font-display font-black text-6xl tracking-[0.25em] text-[#000B3B]/10 select-none">
                        CABJATRA
                      </span>
                      <span className="block font-mono font-bold text-base tracking-[0.3em] text-[#000B3B]/15 mt-2 select-none uppercase">
                        Curated Tour Itinerary
                      </span>
                      <span className="block font-mono text-[10px] tracking-widest text-[#000B3B]/15 mt-1 select-none uppercase">
                        Odisha Private Chauffeur &bull; Standby Fleet
                      </span>
                    </div>
                  </div>

                  {/* Content sits above watermark */}
                  <div className="relative z-10 space-y-4">
                    {/* HEADER: Brand, Stamp, and Barcode */}
                    <div className="flex items-start justify-between pb-3.5 border-b-2 border-[#000B3B]">
                      <div>
                        <BrandLogo size="md" variant="dark" showTagline={false} />
                        <h2 className="text-xs font-black font-display text-[#000B3B] uppercase tracking-wider mt-1.5">
                          Official Tour Confirmation &amp; Itinerary Manifest
                        </h2>
                        <p className="text-[10px] font-medium text-[#64748B] leading-tight">
                          CabJatra Bespoke Odisha Tours &bull; Dedicated Private Chauffeur
                        </p>
                        <p className="text-[9px] text-[#94A3B8] font-mono mt-0.5">
                          Tour Desk Ref: TOUR-OD-EXP-2026 &bull; 24/7 Concierge Desk
                        </p>
                      </div>

                      {/* Center Official Rubber Stamp Seal */}
                      <div className="hidden sm:block border-2 border-dashed border-[#15803D] bg-[#F0FDF4] rounded-xl p-2 text-center rotate-[-4deg]">
                        <div className="flex items-center justify-center gap-1 text-[#15803D] text-[9px] font-black uppercase tracking-wider">
                          <ShieldCheck className="w-3 h-3 text-[#15803D]" />
                          <span>Verified &amp; Allocated</span>
                        </div>
                        <span className="text-[11px] font-black text-[#15803D] tracking-wider block font-mono">
                          CABJATRA TOURS
                        </span>
                        <span className="text-[8px] font-bold text-[#166534] tracking-tight block uppercase">
                          Dedicated Standby AC Cab
                        </span>
                      </div>

                      {/* Right Reference & Barcode */}
                      <div className="text-right flex flex-col items-end">
                        <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#64748B] block">
                          Enquiry Reference
                        </span>
                        <div className="flex items-center gap-[2px] h-6 my-1">
                          {[2, 1, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 2, 1, 3, 2, 4, 1, 2].map((w, bIdx) => (
                            <span
                              key={bIdx}
                              style={{ width: `${w}px` }}
                              className="h-full bg-[#000B3B]"
                            />
                          ))}
                        </div>
                        <strong className="font-mono text-sm font-black text-[#000B3B] tracking-wider block">
                          {enquiryRefId}
                        </strong>
                        <span className="text-[9.5px] font-bold text-[#15803D] uppercase tracking-wider mt-0.5 inline-flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-[#15803D]" />
                          <span>Confirmed Tour Slip</span>
                        </span>
                      </div>
                    </div>

                    {/* SECTION 1: CIRCUIT MANIFEST */}
                    <div className="border border-[#CBD5E1] rounded-xl overflow-hidden bg-white">
                      <div className="bg-[#000B3B] text-white px-3.5 py-1 text-[10px] font-black uppercase tracking-wider flex items-center justify-between">
                        <span>1. Curated Odisha Circuit Manifest</span>
                        <span>Traveler Copy</span>
                      </div>
                      <div className="p-3.5 bg-gradient-to-r from-[#F8FAFC] via-white to-[#F8FAFC]">
                        <div className="flex items-center justify-between gap-4">
                          <div className="space-y-0.5">
                            <span className="text-[9px] font-bold uppercase tracking-wider text-[#64748B] block">Tour Package</span>
                            <strong className="text-sm sm:text-base font-black text-[#000B3B] block">{currentTour.title}</strong>
                            <span className="text-[10px] text-[#64748B] font-medium block">
                              Duration: {currentTour.duration}
                            </span>
                          </div>

                          <div className="flex-1 max-w-[220px] flex flex-col items-center px-2">
                            <span className="text-[9px] font-bold uppercase tracking-wider text-[#02146B] bg-[#FAF9F5] px-2 py-0.5 rounded-full border border-[#CBD5E1] shadow-2xs mb-1">
                              Departure: {pickupCity}
                            </span>
                            <div className="w-full flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                              <div className="flex-1 border-t-2 border-dashed border-[#CBD5E1]" />
                              <ArrowRight className="w-3.5 h-3.5 text-[#000B3B]" />
                            </div>
                            <span className="text-[8.5px] text-[#64748B] font-semibold mt-0.5">Start Date: {travelDate}</span>
                          </div>

                          <div className="space-y-0.5 text-right">
                            <span className="text-[9px] font-bold uppercase tracking-wider text-[#64748B] block">Included Circuit</span>
                            <strong className="text-xs font-bold text-[#000B3B] block max-w-[200px] truncate">
                              {currentTour.destinations.join(" &bull; ")}
                            </strong>
                            <span className="text-[10px] text-[#15803D] font-bold block">
                              Standby Private Chauffeur
                            </span>
                          </div>
                        </div>

                        <div className="mt-2.5 pt-2 border-t border-[#E2E8F0] grid grid-cols-3 gap-2 text-[10.5px]">
                          <div>
                            <span className="text-[#64748B] font-medium">Selected Vehicle: </span>
                            <strong className="text-[#000B3B] capitalize">
                              {selectedVehicleType === "sedan"
                                ? "Sedan (Dzire / Etios)"
                                : selectedVehicleType === "suv"
                                ? "SUV (Bolero / Scorpio)"
                                : selectedVehicleType === "large-car"
                                ? "Large Car (Innova Crysta)"
                                : "Mini Bus (Force Urbania)"}
                            </strong>
                          </div>
                          <div className="text-center">
                            <span className="text-[#64748B] font-medium">AC Standard: </span>
                            <strong className="text-[#15803D]">Chilled Dual AC Throughout</strong>
                          </div>
                          <div className="text-right">
                            <span className="text-[#64748B] font-medium">Driver Role: </span>
                            <strong className="text-[#000B3B]">Temple &amp; Highway Specialist</strong>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SECTION 2: TRAVELER & VEHICLE DETAILS */}
                    <div className="grid grid-cols-2 gap-3.5 text-[11px]">
                      {/* Traveler Col */}
                      <div className="border border-[#CBD5E1] rounded-xl overflow-hidden bg-white">
                        <div className="bg-[#FAF9F5] border-b border-[#CBD5E1] px-3 py-1 font-black text-[10px] text-[#000B3B] uppercase tracking-wider">
                          Primary Traveler Manifest
                        </div>
                        <div className="p-2.5 space-y-1 divide-y divide-[#F1F5F9]">
                          <div className="flex justify-between py-0.5">
                            <span className="text-[#64748B]">Primary Contact:</span>
                            <strong className="text-[#000B3B] font-bold">{primaryName || "Esteemed Traveler"}</strong>
                          </div>
                          <div className="flex justify-between py-0.5">
                            <span className="text-[#64748B]">Mobile Phone:</span>
                            <strong className="text-[#000B3B] font-mono font-bold">{primaryPhone || "—"}</strong>
                          </div>
                          <div className="flex justify-between py-0.5">
                            <span className="text-[#64748B]">Email Address:</span>
                            <span className="text-[#0F172A]">{primaryEmail || "—"}</span>
                          </div>
                          <div className="flex justify-between py-0.5">
                            <span className="text-[#64748B]">Group Count:</span>
                            <span className="font-semibold text-[#000B3B]">{travelersCount} Traveler(s)</span>
                          </div>
                        </div>
                      </div>

                      {/* Standby Standards Col */}
                      <div className="border border-[#CBD5E1] rounded-xl overflow-hidden bg-white">
                        <div className="bg-[#FAF9F5] border-b border-[#CBD5E1] px-3 py-1 font-black text-[10px] text-[#000B3B] uppercase tracking-wider">
                          Dedicated Standby Fleet Standards
                        </div>
                        <div className="p-2.5 space-y-1 divide-y divide-[#F1F5F9]">
                          <div className="flex justify-between py-0.5">
                            <span className="text-[#64748B]">Chauffeur Standby:</span>
                            <strong className="text-[#15803D] font-bold">Exclusive Throughout Circuit</strong>
                          </div>
                          <div className="flex justify-between py-0.5">
                            <span className="text-[#64748B]">Sightseeing Pace:</span>
                            <span className="text-[#000B3B] font-semibold">100% Bespoke Flexible Stops</span>
                          </div>
                          <div className="flex justify-between py-0.5">
                            <span className="text-[#64748B]">Luggage Custody:</span>
                            <span className="text-[#000B3B] font-semibold">Safe During Temple Darshan</span>
                          </div>
                          <div className="flex justify-between py-0.5">
                            <span className="text-[#64748B]">Tariff Standard:</span>
                            <strong className="text-[#000B3B] font-bold">Starting from {currentTour.indicativePrice.sedan}</strong>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SECTION 3: TOUR PROVISIONS & ITEMIZED CLARITY */}
                    <div className="border border-[#CBD5E1] rounded-xl overflow-hidden bg-white">
                      <div className="bg-[#000B3B] text-white px-3.5 py-1 text-[10px] font-black uppercase tracking-wider flex items-center justify-between">
                        <span>2. Inclusions &amp; Pricing Clarity</span>
                        <span>Zero Hidden Surprises</span>
                      </div>
                      <table className="w-full text-left border-collapse text-[11px]">
                        <thead>
                          <tr className="bg-[#FAF9F5] border-b border-[#CBD5E1] text-[9.5px] font-black uppercase tracking-wider text-[#64748B]">
                            <th className="py-1.5 px-3">Service Inclusions</th>
                            <th className="py-1.5 px-3">Scope &amp; Coverage</th>
                            <th className="py-1.5 px-3 text-right">Standard</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F1F5F9]">
                          <tr>
                            <td className="py-1.5 px-3 font-semibold text-[#000B3B]">
                              Dedicated Private Vehicle &amp; Professional Local Chauffeur
                            </td>
                            <td className="py-1.5 px-3 text-[#64748B]">Entire Circuit Duration with Flexible Halts</td>
                            <td className="py-1.5 px-3 text-right text-[#15803D] font-bold">✓ 100% Covered</td>
                          </tr>
                          <tr>
                            <td className="py-1.5 px-3 text-[#334155]">
                              Fuel Consumption, Road Taxes &amp; Chauffeur Night Stay
                            </td>
                            <td className="py-1.5 px-3 text-[#64748B]">All Sightseeing Destinations on Circuit</td>
                            <td className="py-1.5 px-3 text-right text-[#15803D] font-bold">✓ 100% Covered</td>
                          </tr>
                          <tr>
                            <td className="py-1.5 px-3 text-[#334155]">
                              Interstate &amp; State Highway Toll Taxes + Designated Parking
                            </td>
                            <td className="py-1.5 px-3 text-[#64748B]">Temple &amp; Monument Parking Gates</td>
                            <td className="py-1.5 px-3 text-right text-[#15803D] font-bold">✓ 100% Covered</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* SECTION 4: TOUR PROTOCOLS */}
                    <div className="border border-[#CBD5E1] rounded-xl p-3 bg-white space-y-1.5 text-[10px] text-[#475569] leading-relaxed">
                      <div className="flex items-start gap-2">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#000B3B] text-white flex items-center justify-center font-bold text-[8px] shrink-0 mt-0.5">1</span>
                        <p>
                          <strong className="text-[#000B3B]">Flexible Sightseeing Halts:</strong> Pause for coastal tea along Marine Drive, sunrise photography at Chandrabhaga, or extend temple darshan at your family&apos;s comfort with zero rush.
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#000B3B] text-white flex items-center justify-center font-bold text-[8px] shrink-0 mt-0.5">2</span>
                        <p>
                          <strong className="text-[#000B3B]">Safe Luggage Custody:</strong> When visiting temples or taking boating safaris, your chauffeur stays with the vehicle ensuring 100% safe custody of luggage and temple offerings.
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#000B3B] text-white flex items-center justify-center font-bold text-[8px] shrink-0 mt-0.5">3</span>
                        <p>
                          <strong className="text-[#000B3B]">Concierge Assistance:</strong> Our dedicated 24/7 Odisha tour desk remains in active communication with your assigned chauffeur throughout the trip.
                        </p>
                      </div>
                    </div>

                    {/* FOOTER: Official Sign-off & Barcode Footer */}
                    <div className="pt-3 border-t-2 border-[#000B3B] flex items-center justify-between text-[9px] text-[#64748B]">
                      <div>
                        <p className="font-bold text-[#000B3B]">
                          CABJATRA BESPOKE TOUR DESK &bull; ODISHA
                        </p>
                        <p className="text-[#94A3B8]">
                          Computer-generated official tour confirmation. No physical signature required.
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono font-bold text-[#000B3B]">
                          Direct Tour Desk: {COMPANY_CONFIG.contact.phoneDisplay}
                        </p>
                        <p className="text-[#94A3B8]">
                          support@cabjatra.com &bull; www.cabjatra.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
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
            <div className="w-9 h-9 border-4 border-[#02146B] border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs font-bold text-[#02146B]">Loading Tour Experience...</p>
          </div>
        </div>
      }
    >
      <TourBookingContent />
    </Suspense>
  );
}
