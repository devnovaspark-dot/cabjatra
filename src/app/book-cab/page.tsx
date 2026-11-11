"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Car,
  Plane,
  Compass,
  Clock,
  MapPin,
  Calendar,
  Users,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  Sparkles,
  Phone,
  User,
  Mail,
  Check,
  Navigation,
  Printer,
  Copy,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";
import { VEHICLE_FLEET } from "@/data/vehicles";
import { WhatsAppConsentCheckbox } from "@/components/common/WhatsAppConsentCheckbox";
import { BrandLogo } from "@/components/common/BrandLogo";
import { GlassCelebrationOrb } from "@/components/common/GlassCelebrationOrb";

function CabBookingContent() {
  const searchParams = useSearchParams();

  // Wizard state (1: Trip Details, 2: Select Vehicle, 3: Passenger Info, 4: Review & Submit, 5: Confirmed)
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [copiedRef, setCopiedRef] = useState(false);

  // Form Fields
  const [serviceType, setServiceType] = useState<"outstation" | "airport" | "hourly" | "local">("outstation");
  const [tripWay, setTripWay] = useState<"oneway" | "round">("oneway");
  const [pickupCity, setPickupCity] = useState("Bhubaneswar");
  const [pickupAddress, setPickupAddress] = useState("");
  const [dropLocation, setDropLocation] = useState("Puri");
  const [flightNumber, setFlightNumber] = useState("");
  const [hourlyPackage, setHourlyPackage] = useState("8 Hours / 80 Km");
  const [pickupDate, setPickupDate] = useState("2026-11-12");
  const [pickupTime, setPickupTime] = useState("09:00");
  const [returnDate, setReturnDate] = useState("2026-11-14");

  // Selected Vehicle
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>("sedan");

  // Passenger & Contact Details
  const [passengerName, setPassengerName] = useState("");
  const [passengerPhone, setPassengerPhone] = useState("");
  const [passengerEmail, setPassengerEmail] = useState("");
  const [passengerCount, setPassengerCount] = useState(2);
  const [luggageCount, setLuggageCount] = useState(2);
  const [travelPurpose, setTravelPurpose] = useState<string>("Leisure & Tourism");
  const [specialRequests, setSpecialRequests] = useState("");

  // WhatsApp Consent (Explicitly NOT preselected)
  const [whatsAppBookingConsent, setWhatsAppBookingConsent] = useState(false);
  const [whatsAppMarketingConsent, setWhatsAppMarketingConsent] = useState(false);
  const [consentError, setConsentError] = useState("");

  // Form validation errors
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Generated Booking ID
  const [bookingReference, setBookingReference] = useState("");

  // Load URL Query parameters if present
  useEffect(() => {
    const srv = searchParams.get("service");
    if (srv) {
      if (srv.startsWith("airport")) setServiceType("airport");
      else if (srv.startsWith("outstation")) setServiceType("outstation");
      else if (srv.startsWith("hourly")) setServiceType("hourly");
      else if (srv.startsWith("local")) setServiceType("local");
    }
    const from = searchParams.get("from");
    if (from) setPickupCity(from);
    const to = searchParams.get("to");
    if (to) setDropLocation(to);
    const veh = searchParams.get("vehicle");
    if (veh && VEHICLE_FLEET.some((v) => v.id === veh)) {
      setSelectedVehicleId(veh);
    }
  }, [searchParams]);

  const selectedVehicle =
    VEHICLE_FLEET.find((v) => v.id === selectedVehicleId) || VEHICLE_FLEET[1];

  // Calculate dynamic indicative fare estimates based on inputs
  const calculateEstimatedFare = () => {
    const categoryMultipliers: Record<string, number> = {
      Hatchback: 0.85,
      Sedan: 1.0,
      SUV: 1.35,
      "Large car": 1.55,
      "Mini bus": 2.3,
    };
    const mult = categoryMultipliers[selectedVehicle.category] || 1.0;

    let base = 1950;
    if (serviceType === "airport") {
      base = Math.round(650 * mult);
    } else if (serviceType === "hourly") {
      let hourlyBase = 1899;
      if (hourlyPackage.startsWith("4")) hourlyBase = 1199;
      else if (hourlyPackage.startsWith("12")) hourlyBase = 2599;
      base = Math.round(hourlyBase * mult);
    } else if (serviceType === "outstation") {
      base = Math.round(1950 * mult);
      if (tripWay === "round") base = Math.round(base * 1.8);
    } else {
      base = Math.round(550 * mult);
    }

    const advance10 = Math.round(base * 0.1);
    const balance90 = base - advance10;
    return { total: base, advance: advance10, balance: balance90 };
  };

  const fares = calculateEstimatedFare();

  // Step 1 Validation
  const handleNextFromStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!pickupCity.trim()) errors.pickupCity = "Please select a pickup city";
    if (serviceType !== "hourly" && !dropLocation.trim()) {
      errors.dropLocation = "Please enter your destination";
    }
    if (!pickupDate) errors.pickupDate = "Please pick a date";
    if (!pickupTime) errors.pickupTime = "Please pick a time";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setCurrentStep(2);
  };

  // Step 2 Validation (Vehicle Selection)
  const handleNextFromStep2 = () => {
    setCurrentStep(3);
  };

  // Step 3 Validation (Passenger Details + WhatsApp Consent)
  const handleNextFromStep3 = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!passengerName.trim()) errors.name = "Please enter lead passenger full name";
    if (!passengerPhone.trim() || passengerPhone.length < 10) {
      errors.phone = "Please enter a valid 10-digit mobile number";
    }
    if (!passengerEmail.trim() || !passengerEmail.includes("@")) {
      errors.email = "Please enter a valid email address";
    }
    if (!whatsAppBookingConsent) {
      setConsentError("Please check the WhatsApp consent box so we can dispatch your ride voucher.");
      return;
    } else {
      setConsentError("");
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setCurrentStep(4);
  };

  // Step 4: Submit Booking Request
  const handleSubmitBooking = () => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const refId = `CJ-2026-${randomSuffix}`;
    setBookingReference(refId);
    setCurrentStep(5);
  };

  const handleCopyRef = () => {
    if (!bookingReference) return;
    navigator.clipboard.writeText(bookingReference);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2200);
  };

  // 4-Step Navigation Configuration
  const stepsConfig = [
    { num: 1, title: "Trip Details", subtitle: "Route & Schedule", icon: MapPin },
    { num: 2, title: "Choose Vehicle", subtitle: "Commercial Fleet", icon: Car },
    { num: 3, title: "Passenger Info", subtitle: "Contact & Group", icon: Users },
    { num: 4, title: "Review & Confirm", subtitle: "10% Advance Deposit", icon: ShieldCheck },
  ];

  return (
    <div className="relative min-h-screen bg-[#FAF9F5] text-[#182A2B] overflow-hidden pb-16 sm:pb-20">
      {/* Luminous Scenic Highway Travel Backdrop - High Clarity Without Murky Shadows */}
      <div className="absolute top-0 inset-x-0 h-[640px] sm:h-[720px] z-0 overflow-hidden pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1775050416787-fe3179f0679e?q=85&w=2400&auto=format&fit=crop"
          alt="Scenic coastal highway journey along Puri-Konark Marine Drive, Odisha"
          fill
          priority
          className="object-cover object-center brightness-[0.92] contrast-[1.05]"
        />
        {/* Luminous, cinematic gradient that keeps the road, sky and vehicle clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#021617]/75 via-[#062F31]/35 via-45% to-[#FAF9F5]" />
        <div className="absolute inset-0 bg-radial-[at_center_top] from-transparent via-transparent to-black/25 pointer-events-none" />
      </div>

      <div
        className={`relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ${
          currentStep === 5
            ? "pt-36 sm:pt-44 pb-20"
            : "pt-28 sm:pt-32 pb-12"
        }`}
      >
        {/* Clean, Non-Text-Heavy Hero Header - Never overlaps with Floating Navbar */}
        {currentStep < 5 && (
          <div className="text-center max-w-2xl mx-auto mb-5 text-white">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/45 backdrop-blur-md border border-[#D9A52B]/40 text-xs font-semibold text-[#D9A52B] mb-2 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>10% Advance Deposit Model • 100% Commercial Fleet</span>
            </div>
            <h1 className="text-xl sm:text-3xl font-extrabold font-display tracking-tight text-white drop-shadow-md">
              Reserve Your Odisha Chauffeur
            </h1>
          </div>
        )}

        {/* Elegant 4-Step Progress Stepper */}
        {currentStep < 5 && (
          <div className="mb-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
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
                          {s.title}
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
          {/* ================= STEP 1: ROUTE & SCHEDULE (ZERO LAYOUT SHIFT) ================= */}
          {currentStep === 1 && (
            <form
              onSubmit={handleNextFromStep1}
              className="card-skeuo rounded-3xl p-5 sm:p-7 border border-[#D5DDD5] shadow-xl space-y-4 animate-in fade-in-50 duration-200"
            >
              {/* Header */}
              <div className="border-b border-[#E5ECE5] pb-3 flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-base sm:text-lg font-bold font-display text-[#182A2B]">
                    Select Service &amp; Schedule
                  </h2>
                  <p className="text-xs text-[#667575]">
                    Choose your travel format and enter your journey coordinates.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#073B3A] font-semibold bg-[#E0ECEA] px-3 py-1 rounded-full border border-[#C1DAD7]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Free Cancellation (6hr notice)</span>
                </span>
              </div>

              {/* 4 Service Tabs Segmented Control (Fixed Height 48px - Zero Layout Shift) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1.5 bg-[#EEF2EE] rounded-2xl border border-[#D5DDD5]">
                {[
                  { id: "outstation", label: "Outstation Highway", icon: Compass },
                  { id: "airport", label: "Airport Transfer", icon: Plane },
                  { id: "hourly", label: "Hourly Rental", icon: Clock },
                  { id: "local", label: "Local City Ride", icon: Car },
                ].map((srv) => {
                  const Icon = srv.icon;
                  const isSelected = serviceType === srv.id;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setServiceType(srv.id as any)}
                      className={`h-10 px-2 sm:px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 sm:gap-2 transition-all cursor-pointer select-none ${
                        isSelected
                          ? "bg-[#073B3A] text-white shadow-md ring-1 ring-[#D9A52B]/40"
                          : "text-[#556464] hover:text-[#182A2B] hover:bg-white/60"
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? "text-[#D9A52B]" : "text-[#073B3A]"}`} />
                      <span className="truncate">{srv.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Fixed-Height Sub-Option Bar (Always 40px - Never disappears, Zero Shifting!) */}
              <div className="h-10 flex items-center justify-between px-1">
                {serviceType === "outstation" ? (
                  <div className="flex items-center gap-1.5 p-1 bg-[#EEF2EE] rounded-xl border border-[#D5DDD5]">
                    <button
                      type="button"
                      onClick={() => setTripWay("oneway")}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        tripWay === "oneway" ? "bg-[#073B3A] text-white shadow-xs" : "text-[#667575] hover:text-[#182A2B]"
                      }`}
                    >
                      One-Way Drop
                    </button>
                    <button
                      type="button"
                      onClick={() => setTripWay("round")}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        tripWay === "round" ? "bg-[#073B3A] text-white shadow-xs" : "text-[#667575] hover:text-[#182A2B]"
                      }`}
                    >
                      Round Trip Return
                    </button>
                  </div>
                ) : serviceType === "airport" ? (
                  <span className="text-xs font-bold text-[#073B3A] inline-flex items-center gap-1.5 bg-[#E0ECEA]/80 px-3 py-1 rounded-full border border-[#B6D6D2]">
                    <Plane className="w-3.5 h-3.5 text-[#D9A52B]" />
                    <span>BBI Airport Flight-Radar Synchronized</span>
                  </span>
                ) : serviceType === "hourly" ? (
                  <span className="text-xs font-bold text-[#073B3A] inline-flex items-center gap-1.5 bg-[#E0ECEA]/80 px-3 py-1 rounded-full border border-[#B6D6D2]">
                    <Clock className="w-3.5 h-3.5 text-[#D9A52B]" />
                    <span>Standby Chauffeur • Multi-Stop Errand Freedom</span>
                  </span>
                ) : (
                  <span className="text-xs font-bold text-[#073B3A] inline-flex items-center gap-1.5 bg-[#E0ECEA]/80 px-3 py-1 rounded-full border border-[#B6D6D2]">
                    <Car className="w-3.5 h-3.5 text-[#D9A52B]" />
                    <span>Guaranteed Driver Allocation • Zero Cancellations</span>
                  </span>
                )}

                <span className="text-[11px] text-[#667575] font-semibold hidden sm:inline">
                  100% Commercial Fleet
                </span>
              </div>

              {/* Rock-Solid 2x2 Form Fields Grid (Fixed Slot Architecture - Zero Shifting) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {/* Field 1: Pickup Hub / Origin City (Slot 1) */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#182A2B] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#073B3A]" />
                    <span>Pickup Hub / Origin City *</span>
                  </label>
                  <select
                    value={pickupCity}
                    onChange={(e) => setPickupCity(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#D9A52B]/60 focus:border-[#073B3A] focus:outline-none transition cursor-pointer shadow-xs"
                  >
                    {COMPANY_CONFIG.operatingCities.map((c) => (
                      <option key={c.code} value={c.name}>
                        {c.name} ({c.badge})
                      </option>
                    ))}
                  </select>
                  {formErrors.pickupCity && (
                    <p className="text-[11px] text-rose-600 font-medium">{formErrors.pickupCity}</p>
                  )}
                </div>

                {/* Field 2: Destination / Hourly Package / Flight (Slot 2) */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#182A2B] flex items-center gap-1.5">
                    {serviceType === "hourly" ? (
                      <Clock className="w-3.5 h-3.5 text-[#073B3A]" />
                    ) : (
                      <MapPin className="w-3.5 h-3.5 text-[#D9A52B]" />
                    )}
                    <span>{serviceType === "hourly" ? "Hourly Standby Package *" : "Drop Destination / Area *"}</span>
                  </label>
                  {serviceType === "hourly" ? (
                    <select
                      value={hourlyPackage}
                      onChange={(e) => setHourlyPackage(e.target.value)}
                      className="w-full h-11 px-3.5 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#D9A52B]/60 focus:border-[#073B3A] focus:outline-none transition cursor-pointer shadow-xs"
                    >
                      <option value="4 Hours / 40 Km">4 Hours / 40 Km</option>
                      <option value="8 Hours / 80 Km">8 Hours / 80 Km (Recommended)</option>
                      <option value="12 Hours / 120 Km">12 Hours / 120 Km</option>
                    </select>
                  ) : (
                    <input
                      type="text"
                      value={dropLocation}
                      onChange={(e) => setDropLocation(e.target.value)}
                      placeholder={serviceType === "airport" ? "e.g. BBI Terminal 1 / Hotel Mayfair" : "e.g. Puri Jagannath Temple / Konark"}
                      className="w-full h-11 px-3.5 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#D9A52B]/60 focus:border-[#073B3A] focus:outline-none transition shadow-xs placeholder:text-[#9EA8A8]"
                      required
                    />
                  )}
                  {formErrors.dropLocation && (
                    <p className="text-[11px] text-rose-600 font-medium">{formErrors.dropLocation}</p>
                  )}
                </div>

                {/* Field 3: Pickup Date & Time (Slot 3) */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#182A2B] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#073B3A]" />
                    <span>Pickup Date &amp; Time *</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      className="w-full h-11 px-3 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#D9A52B]/60 focus:border-[#073B3A] focus:outline-none transition cursor-pointer shadow-xs"
                      required
                    />
                    <input
                      type="time"
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="w-full h-11 px-3 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#D9A52B]/60 focus:border-[#073B3A] focus:outline-none transition cursor-pointer shadow-xs"
                      required
                    />
                  </div>
                </div>

                {/* Field 4: Return Date OR Landmark OR Flight (Slot 4 - Never shifts the grid!) */}
                <div className="space-y-1">
                  {serviceType === "outstation" && tripWay === "round" ? (
                    <>
                      <label className="text-xs font-bold text-[#182A2B] flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#D9A52B]" />
                        <span>Return Journey Date *</span>
                      </label>
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="w-full h-11 px-3.5 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#D9A52B]/60 focus:border-[#073B3A] focus:outline-none transition cursor-pointer shadow-xs"
                        required
                      />
                    </>
                  ) : serviceType === "airport" ? (
                    <>
                      <label className="text-xs font-bold text-[#182A2B] flex items-center gap-1.5">
                        <Plane className="w-3.5 h-3.5 text-[#073B3A]" />
                        <span>Flight Number (Optional Radar Tracking)</span>
                      </label>
                      <input
                        type="text"
                        value={flightNumber}
                        onChange={(e) => setFlightNumber(e.target.value.toUpperCase())}
                        placeholder="e.g. 6E 2145 / AI 778"
                        className="w-full h-11 px-3.5 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#D9A52B]/60 focus:border-[#073B3A] focus:outline-none transition shadow-xs placeholder:text-[#9EA8A8]"
                      />
                    </>
                  ) : (
                    <>
                      <label className="text-xs font-bold text-[#182A2B] flex items-center gap-1.5">
                        <Navigation className="w-3.5 h-3.5 text-[#667575]" />
                        <span>Pickup Landmark / Doorstep Address</span>
                      </label>
                      <input
                        type="text"
                        value={pickupAddress}
                        onChange={(e) => setPickupAddress(e.target.value)}
                        placeholder="e.g. Mayfair Lagoon / Patia / KIIT Square"
                        className="w-full h-11 px-3.5 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#D9A52B]/60 focus:border-[#073B3A] focus:outline-none transition shadow-xs placeholder:text-[#9EA8A8]"
                      />
                    </>
                  )}
                </div>
              </div>

              {/* Subtle Route Preview Strip */}
              <div className="p-3 rounded-xl bg-gradient-to-r from-[#062F31] to-[#041F20] text-white border border-[#D9A52B]/30 flex flex-wrap items-center justify-between text-xs gap-2">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#D9A52B] shrink-0" />
                  <span className="font-bold text-white text-xs sm:text-sm">
                    {pickupCity} ➔ {serviceType === "hourly" ? hourlyPackage : dropLocation}
                  </span>
                  <span className="text-[11px] text-[#A7F3D0]">
                    ({serviceType === "airport" ? "~16 km BBI Transit" : "~65 km via NH-316"})
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px]">
                  <span className="text-[#D9A52B] font-bold">10% Advance Deposit</span>
                  <span className="text-white/40">•</span>
                  <span className="text-[#A7F3D0]">100% Commercial Fleet</span>
                </div>
              </div>

              {/* Step 1 Actions */}
              <div className="pt-3 border-t border-[#EEF2EE] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs text-[#667575] flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#D9A52B]" />
                  <span>No payment charged until chauffeur allocation is confirmed.</span>
                </span>
                <button
                  type="submit"
                  className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#D9A52B] via-[#E6B543] to-[#C99320] text-[#062F31] font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 cursor-pointer shadow-skeuo-gold hover:brightness-105 active:scale-[0.99] transition-all"
                >
                  <span>Continue to Select Vehicle</span>
                  <ArrowRight className="w-4 h-4 text-[#062F31]" />
                </button>
              </div>
            </form>
          )}

          {/* ================= STEP 2: SELECT VEHICLE SHOWROOM ================= */}
          {currentStep === 2 && (
            <div className="card-skeuo rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6 min-h-[580px] flex flex-col justify-between animate-in fade-in-50 duration-200">
              <div className="space-y-6">
                {/* Header */}
                <div className="border-b border-[#E5ECE5] pb-4 flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold font-display text-[#182A2B]">
                      Choose Your Vehicle Class
                    </h2>
                    <p className="text-xs text-[#667575] mt-0.5">
                      All vehicles are 100% yellow-board commercial with dual-zone AC and background-verified chauffeurs.
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#073B3A] font-semibold bg-[#E0ECEA] px-3 py-1 rounded-full border border-[#C1DAD7]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Clean &amp; Sanitized Fleet</span>
                  </span>
                </div>

                {/* 5 Real Vehicle Cards with Given Names from FRD */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 sm:gap-4">
                  {VEHICLE_FLEET.map((v) => {
                    const isSelected = selectedVehicleId === v.id;
                    return (
                      <div
                        key={v.id}
                        onClick={() => setSelectedVehicleId(v.id)}
                        className={`rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between group select-none ${
                          isSelected
                            ? "border-2 border-[#D9A52B] card-skeuo ring-2 ring-[#073B3A]/30 shadow-lg scale-[1.01]"
                            : "card-skeuo hover:border-[#073B3A]/40"
                        }`}
                      >
                        <div>
                          {/* Vehicle Image */}
                          <div className="relative h-36 w-full overflow-hidden bg-[#FAF9F5]">
                            <Image
                              src={v.image}
                              alt={v.name}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                            <div className="absolute top-2 left-2 bg-[#062F31]/95 backdrop-blur-md text-white text-[9.5px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/15">
                              {v.category}
                            </div>

                            {v.tag && (
                              <div className="absolute top-2 right-2 bg-gradient-to-b from-[#F2C052] to-[#D9A52B] text-[#062F31] text-[8.5px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs">
                                {v.tag}
                              </div>
                            )}

                            <div className="absolute bottom-2 left-2.5 right-2.5 text-white">
                              <h3 className="text-base font-bold font-display leading-tight">{v.name}</h3>
                              <p className="text-[10px] text-white/85 line-clamp-1">{v.subtitle}</p>
                            </div>
                          </div>

                          {/* Specs Mini Bay */}
                          <div className="p-2.5 sm:p-3 space-y-2">
                            <div className="grid grid-cols-3 divide-x divide-[#E5EAE5] border border-[#E5EAE5] bg-[#FAF9F5] rounded-xl py-1.5 text-center text-xs">
                              <div>
                                <span className="font-bold text-[#182A2B] flex items-center justify-center gap-1 text-[11px]">
                                  <Users className="w-3.5 h-3.5 text-[#073B3A]" />
                                  {v.passengers}
                                </span>
                                <span className="text-[9.5px] text-[#667575]">Seats</span>
                              </div>
                              <div>
                                <span className="font-bold text-[#182A2B] flex items-center justify-center gap-1 text-[11px]">
                                  <Briefcase className="w-3.5 h-3.5 text-[#073B3A]" />
                                  {v.luggage}
                                </span>
                                <span className="text-[9.5px] text-[#667575]">Bags</span>
                              </div>
                              <div className="font-bold text-[#10B981] flex items-center justify-center gap-0.5 text-[10px]">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span>100% AC</span>
                              </div>
                            </div>

                            <div className="text-[11px] text-[#556464] bg-[#FAF9F5] p-2 rounded-xl border border-[#E5EAE5] leading-snug">
                              <span className="font-bold text-[#182A2B] block text-[10px] uppercase tracking-wider text-[#073B3A]">
                                Example Cars:
                              </span>
                              <span className="text-[#182A2B] font-semibold">{v.models}</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-2.5 sm:p-3 pt-0 border-t border-[#EEF2EE] flex items-center justify-between mt-1">
                          <div>
                            <span className="text-[9px] font-bold uppercase text-[#667575] block">Base Rate</span>
                            <span className="text-xs font-bold text-[#073B3A]">{v.indicativeBaseFare}</span>
                          </div>

                          <div
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
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
                  type="button"
                  onClick={handleNextFromStep2}
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#D9A52B] via-[#E6B543] to-[#C99320] text-[#062F31] font-bold text-sm inline-flex items-center gap-2 cursor-pointer shadow-skeuo-gold hover:brightness-105 active:scale-[0.99] transition-all"
                >
                  <span>Continue to Passenger Details</span>
                  <ArrowRight className="w-4 h-4 text-[#062F31]" />
                </button>
              </div>
            </div>
          )}

          {/* ================= STEP 3: PASSENGER INFO & CONTACT ================= */}
          {currentStep === 3 && (
            <form
              onSubmit={handleNextFromStep3}
              className="card-skeuo rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6 min-h-[580px] flex flex-col justify-between animate-in fade-in-50 duration-200"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="border-b border-[#E5ECE5] pb-4 flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold font-display text-[#182A2B]">
                      Lead Passenger &amp; Contact
                    </h2>
                    <p className="text-xs text-[#667575] mt-0.5">
                      Your chauffeur details and official dispatch voucher will be sent here.
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#073B3A] font-semibold bg-[#E0ECEA] px-3 py-1 rounded-full border border-[#C1DAD7]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>WhatsApp Dispatch Confirmed</span>
                  </span>
                </div>

                {/* Travel Purpose Pills */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#182A2B] uppercase tracking-wider block">
                    Travel Purpose:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Family Pilgrimage (Puri / Konark)",
                      "Leisure & Tourism",
                      "Airport Connection",
                      "Corporate / Business Meeting",
                    ].map((purpose) => (
                      <button
                        key={purpose}
                        type="button"
                        onClick={() => setTravelPurpose(purpose)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          travelPurpose === purpose
                            ? "bg-[#073B3A] text-[#D9A52B] font-bold shadow-xs border border-[#073B3A]"
                            : "bg-[#FAF9F5] text-[#667575] border border-[#D5DDD5] hover:text-[#182A2B]"
                        }`}
                      >
                        {purpose}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2-Column Balanced Form Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#182A2B] flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#073B3A]" />
                      <span>Lead Passenger Full Name *</span>
                    </label>
                    <input
                      type="text"
                      value={passengerName}
                      onChange={(e) => setPassengerName(e.target.value)}
                      placeholder="e.g. Ramesh Chandra Mohanty"
                      className="w-full h-12 px-4 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-sm font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#D9A52B]/60 focus:border-[#073B3A] focus:outline-none transition shadow-xs placeholder:text-[#9EA8A8]"
                      required
                    />
                    {formErrors.name && (
                      <p className="text-xs text-rose-600 font-medium">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Mobile Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#182A2B] flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#073B3A]" />
                      <span>Mobile (Active WhatsApp) *</span>
                    </label>
                    <div className="flex gap-2">
                      <span className="h-12 px-3.5 rounded-xl border border-[#D5DDD5] bg-[#EEF2EE] text-sm font-bold text-[#073B3A] flex items-center shrink-0">
                        +91
                      </span>
                      <input
                        type="tel"
                        value={passengerPhone}
                        onChange={(e) => setPassengerPhone(e.target.value)}
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

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#182A2B] flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#073B3A]" />
                      <span>Email (For Tax Invoice &amp; Voucher) *</span>
                    </label>
                    <input
                      type="email"
                      value={passengerEmail}
                      onChange={(e) => setPassengerEmail(e.target.value)}
                      placeholder="ramesh@example.com"
                      className="w-full h-12 px-4 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-sm font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#D9A52B]/60 focus:border-[#073B3A] focus:outline-none transition shadow-xs placeholder:text-[#9EA8A8]"
                      required
                    />
                    {formErrors.email && (
                      <p className="text-xs text-rose-600 font-medium">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Passengers & Luggage Counts */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#182A2B] flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#073B3A]" />
                        <span>Passengers</span>
                      </label>
                      <select
                        value={passengerCount}
                        onChange={(e) => setPassengerCount(Number(e.target.value))}
                        className="w-full h-12 px-3 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-sm font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#D9A52B]/60 focus:border-[#073B3A] focus:outline-none transition cursor-pointer shadow-xs"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 10, 15].map((num) => (
                          <option key={num} value={num}>
                            {num} Pax
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#182A2B] flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#073B3A]" />
                        <span>Luggage Bags</span>
                      </label>
                      <select
                        value={luggageCount}
                        onChange={(e) => setLuggageCount(Number(e.target.value))}
                        className="w-full h-12 px-3 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-sm font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#D9A52B]/60 focus:border-[#073B3A] focus:outline-none transition cursor-pointer shadow-xs"
                      >
                        {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                          <option key={num} value={num}>
                            {num} Bag{num > 1 ? "s" : ""}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="md:col-span-2 space-y-1.5">
                    <label className="text-xs font-bold text-[#182A2B]">
                      Special Instructions / Requests (Optional)
                    </label>
                    <input
                      type="text"
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="e.g. Stop at Pipili applique craft village, elderly traveler passenger assistance"
                      className="w-full h-12 px-4 rounded-xl border border-[#D5DDD5] bg-[#FAF9F5] text-sm font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#D9A52B]/60 focus:border-[#073B3A] focus:outline-none transition shadow-xs placeholder:text-[#9EA8A8]"
                    />
                  </div>
                </div>

                {/* Clean WhatsApp Consent Component */}
                <div className="pt-2">
                  <WhatsAppConsentCheckbox
                    bookingConsent={whatsAppBookingConsent}
                    onBookingConsentChange={setWhatsAppBookingConsent}
                    marketingConsent={whatsAppMarketingConsent}
                    onMarketingConsentChange={setWhatsAppMarketingConsent}
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
                  <span>Review &amp; Confirm</span>
                  <ArrowRight className="w-4 h-4 text-[#062F31]" />
                </button>
              </div>
            </form>
          )}

          {/* ================= STEP 4: REVIEW & CONFIRM ================= */}
          {currentStep === 4 && (
            <div className="card-skeuo rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6 min-h-[580px] flex flex-col justify-between animate-in fade-in-50 duration-200">
              <div className="space-y-6">
                {/* Header */}
                <div className="border-b border-[#E5ECE5] pb-4 flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold font-display text-[#182A2B]">
                      Review &amp; Confirm Chauffeur Dispatch
                    </h2>
                    <p className="text-xs text-[#667575] mt-0.5">
                      Verify your trip parameters and the 10% advance deposit breakdown.
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#073B3A] font-semibold bg-[#E0ECEA] px-3 py-1 rounded-full border border-[#C1DAD7]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D9A52B]" />
                    <span>10% Advance Deposit Model</span>
                  </span>
                </div>

                {/* 2-Column Review Pass */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  {/* Left: Journey Boarding Pass */}
                  <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#D5DDD5] space-y-3 text-xs shadow-skeuo">
                    <div className="font-bold text-[#073B3A] uppercase tracking-wider text-[11px] pb-2 border-b border-[#E5EAE5] flex items-center justify-between">
                      <span>Journey Parameters</span>
                      <span className="text-[#10B981] font-semibold">100% Commercial Fleet</span>
                    </div>
                    <div>
                      <span className="text-[#667575] text-[11px] block">Travel Category:</span>
                      <strong className="text-[#182A2B] capitalize text-sm">{serviceType} Mobility ({travelPurpose})</strong>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-[#667575] text-[11px] block">Pickup Hub:</span>
                        <strong className="text-[#182A2B]">{pickupCity}</strong>
                      </div>
                      <div>
                        <span className="text-[#667575] text-[11px] block">Destination:</span>
                        <strong className="text-[#182A2B]">
                          {serviceType === "hourly" ? hourlyPackage : dropLocation}
                        </strong>
                      </div>
                    </div>
                    <div className="text-xs">
                      <span className="text-[#667575] text-[11px] block">Scheduled Pickup:</span>
                      <strong className="text-[#182A2B]">{pickupDate} at {pickupTime}</strong>
                    </div>
                    {flightNumber && (
                      <div className="text-xs">
                        <span className="text-[#667575] text-[11px] block">Flight Sync:</span>
                        <strong className="text-[#182A2B]">{flightNumber} (BBI Radar)</strong>
                      </div>
                    )}
                    <div className="text-xs pt-1 border-t border-[#EEF2EE]">
                      <span className="text-[#667575] text-[11px] block">Allocated Fleet:</span>
                      <strong className="text-[#073B3A] font-bold text-sm">{selectedVehicle.name} ({selectedVehicle.category})</strong>
                      <span className="text-[11px] text-[#556464] block mt-0.5">Example: {selectedVehicle.models}</span>
                      <span className="text-[10.5px] text-[#073B3A] font-semibold block">Capacity: {selectedVehicle.passengers} Seats • {selectedVehicle.luggage} Bags • 100% Commercial AC</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-[#667575] text-[11px] block">Lead Passenger:</span>
                      <strong className="text-[#182A2B]">{passengerName} (+91 {passengerPhone})</strong>
                    </div>
                  </div>

                  {/* Right: Transparent Fare & 10% Deposit Breakdown */}
                  <div className="p-5 rounded-2xl bg-white border border-[#D5DDD5] shadow-card space-y-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-2 border-b border-[#EEF2EE]">
                        <span className="font-bold text-[#182A2B] uppercase tracking-wider text-xs">
                          Fare &amp; Advance Structure
                        </span>
                        <span className="text-[11px] font-bold text-[#073B3A] bg-[#E0ECEA] px-2.5 py-0.5 rounded-full">
                          Transparent Tariff
                        </span>
                      </div>

                      <div className="space-y-3 pt-3 text-xs">
                        <div className="flex items-center justify-between text-[#667575]">
                          <span>Estimated Total Cab Fare:</span>
                          <strong className="text-[#182A2B] font-bold text-lg">
                            ₹{fares.total.toLocaleString("en-IN")}
                          </strong>
                        </div>
                        <div className="flex items-center justify-between text-[#073B3A] bg-[#E0ECEA]/70 p-3 rounded-xl font-semibold border border-[#C1DAD7]">
                          <div>
                            <span className="block font-bold text-xs">10% Advance Deposit:</span>
                            <span className="text-[10px] text-[#455353]">Required upon chauffeur allocation</span>
                          </div>
                          <strong className="text-[#073B3A] font-black text-base">
                            ₹{fares.advance.toLocaleString("en-IN")}
                          </strong>
                        </div>
                        <div className="flex items-center justify-between text-[#667575] text-xs">
                          <span>Remaining 90% (Payable on arrival):</span>
                          <strong className="text-[#182A2B] font-semibold">
                            ₹{fares.balance.toLocaleString("en-IN")}
                          </strong>
                        </div>
                      </div>
                    </div>

                    {/* Zero Financial Lock-in Assurance */}
                    <div className="p-3 rounded-xl bg-[#FAF9F5] border border-[#D5DDD5] text-xs text-[#556464] space-y-1">
                      <div className="font-bold text-[#073B3A] flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-[#D9A52B] shrink-0" />
                        <span>Zero Financial Lock-In</span>
                      </div>
                      <p className="leading-relaxed text-[11px]">
                        Submitting this form does not charge your card. Your verified chauffeur allocation and 10% payment link will be sent to your WhatsApp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 Actions */}
              <div className="pt-4 border-t border-[#EEF2EE] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="px-5 py-2.5 rounded-xl border border-[#D5DDD5] text-[#182A2B] font-bold text-xs inline-flex items-center gap-1.5 hover:bg-[#FAF9F5] transition cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={handleSubmitBooking}
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#D9A52B] via-[#E6B543] to-[#C99320] text-[#062F31] font-bold text-sm inline-flex items-center gap-2 cursor-pointer shadow-skeuo-gold hover:brightness-105 active:scale-[0.99] transition-all"
                >
                  <span>Confirm Chauffeur Reservation</span>
                  <ArrowRight className="w-4 h-4 text-[#062F31]" />
                </button>
              </div>
            </div>
          )}

          {/* ================= STEP 5: COMPACT CONFIRMATION & OFFICIAL VOUCHER ================= */}
          {currentStep === 5 && (
            <div className="w-full max-w-lg mx-auto card-skeuo rounded-3xl p-4 sm:p-5 border border-[#D5DDD5] shadow-2xl space-y-2.5 text-center animate-in zoom-in-95 duration-300">
              {/* 3D Glass Celebration Orb - Continuously Bouncing Ball */}
              <GlassCelebrationOrb size="md" />

              {/* Clean Compact Title */}
              <div className="space-y-0.5">
                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#182A2B] tracking-tight">
                  Thank You, {passengerName || "Esteemed Traveler"}!
                </h2>
                <p className="text-xs text-[#556464]">
                  Your chauffeur reservation is logged. Live allocation details sent to your WhatsApp.
                </p>
              </div>

              {/* Compact Digital Chauffeur Boarding Pass */}
              <div className="rounded-2xl border border-[#D5DDD5] bg-[#FAF9F5] shadow-xs overflow-hidden text-left text-xs">
                {/* Pass Header */}
                <div className="bg-[#073B3A] text-white px-3.5 py-2 flex items-center justify-between border-b border-[#D9A52B]/30">
                  <div className="flex items-center gap-2">
                    <BrandLogo size="sm" variant="light" showTagline={false} />
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#D9A52B]">
                      Chauffeur Voucher
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/30 px-2 py-0.5 rounded-lg border border-white/15">
                    <span className="text-[9px] text-[#A7F3D0] uppercase">Ref:</span>
                    <strong className="font-mono text-xs text-[#FAF9F5] font-black">
                      {bookingReference}
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
                      <span className="text-[9px] text-[#8A9797] block uppercase font-bold">Route:</span>
                      <strong className="text-xs font-bold text-[#182A2B] block truncate">
                        {pickupCity} ➔ {serviceType === "hourly" ? hourlyPackage : dropLocation}
                      </strong>
                    </div>
                    <div>
                      <span className="text-[9px] text-[#8A9797] block uppercase font-bold">Scheduled:</span>
                      <span className="text-xs font-semibold text-[#073B3A] block truncate">
                        {pickupDate} at {pickupTime}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] text-[#8A9797] block uppercase font-bold">Vehicle Class:</span>
                      <span className="text-xs font-semibold text-[#182A2B] block truncate">
                        {selectedVehicle.name}
                      </span>
                    </div>
                  </div>

                  <div className="pl-3 space-y-1">
                    <div>
                      <span className="text-[9px] text-[#8A9797] block uppercase font-bold">Estimated Tariff:</span>
                      <strong className="text-xs font-bold text-[#182A2B] block">
                        ₹{fares.total.toLocaleString("en-IN")}
                      </strong>
                    </div>
                    <div className="bg-[#E0ECEA]/70 p-1.5 rounded-lg border border-[#C1DAD7]">
                      <span className="text-[9px] font-bold text-[#073B3A] block uppercase">10% Advance Deposit:</span>
                      <strong className="text-xs font-extrabold text-[#073B3A] block">
                        ₹{fares.advance.toLocaleString("en-IN")}
                      </strong>
                    </div>
                    <div className="text-[10px] text-[#667575] leading-tight">
                      Remaining 90% payable at trip drop.
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
                    `Hi Cabjatra Dispatch, I just booked reference ${bookingReference} (${pickupCity} to ${
                      serviceType === "hourly" ? hourlyPackage : dropLocation
                    }) on ${pickupDate}. Please confirm my chauffeur allocation status.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 rounded-xl bg-[#073B3A] hover:bg-[#062F31] text-white font-bold text-xs inline-flex items-center gap-2 transition shadow-skeuo-button cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#D9A52B]" />
                  <span>WhatsApp Dispatch</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BookCabPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#FAF9F5]">
          <div className="text-center space-y-3">
            <div className="w-9 h-9 border-4 border-[#073B3A] border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs font-bold text-[#073B3A]">Loading Cab Booking Experience...</p>
          </div>
        </div>
      }
    >
      <CabBookingContent />
    </Suspense>
  );
}
