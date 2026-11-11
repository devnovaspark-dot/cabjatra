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
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  Sparkles,
  FileCheck,
  Phone,
  User,
  Mail,
  Check,
  Navigation,
  Info,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";
import { VEHICLE_FLEET } from "@/data/vehicles";
import { WhatsAppConsentCheckbox } from "@/components/common/WhatsAppConsentCheckbox";
import { BrandLogo } from "@/components/common/BrandLogo";

function CabBookingContent() {
  const searchParams = useSearchParams();

  // Wizard state (1: Trip Details, 2: Select Vehicle, 3: Passenger Info, 4: Review & Submit, 5: Confirmed)
  const [currentStep, setCurrentStep] = useState<number>(1);

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
    let base = 1950;
    if (serviceType === "airport") {
      base = selectedVehicle.category === "SUV" ? 1150 : 650;
    } else if (serviceType === "hourly") {
      if (hourlyPackage.startsWith("4")) base = selectedVehicle.category === "SUV" ? 1799 : 1199;
      else if (hourlyPackage.startsWith("12")) base = selectedVehicle.category === "SUV" ? 3599 : 2599;
      else base = selectedVehicle.category === "SUV" ? 2699 : 1899;
    } else if (serviceType === "outstation") {
      base = selectedVehicle.category === "SUV" ? 2950 : 1950;
      if (tripWay === "round") base = Math.round(base * 1.8);
    } else {
      base = selectedVehicle.category === "SUV" ? 850 : 550;
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Step 2 Validation (Vehicle Selection)
  const handleNextFromStep2 = () => {
    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      setConsentError("Please check the WhatsApp consent box so we can dispatch your ride voucher and chauffeur details.");
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Step 4: Submit Booking Request
  const handleSubmitBooking = () => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const refId = `CJ-2026-${randomSuffix}`;
    setBookingReference(refId);
    setCurrentStep(5);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 4-Step Navigation Configuration with 100% Guaranteed High-Contrast Typography
  const stepsConfig = [
    { num: 1, title: "Trip Details", subtitle: "Route & Schedule", icon: MapPin },
    { num: 2, title: "Select Vehicle", subtitle: "Commercial Fleet", icon: Car },
    { num: 3, title: "Passenger Info", subtitle: "Contact & Group", icon: Users },
    { num: 4, title: "Review & Submit", subtitle: "10% Advance Deposit", icon: ShieldCheck },
  ];

  return (
    <div className="relative min-h-screen bg-[#FAF9F5] text-[#182A2B] overflow-hidden pb-16 sm:pb-24">
      {/* High-Resolution Highway Scenic Travel Backdrop */}
      <div className="absolute top-0 inset-x-0 h-[520px] z-0 overflow-hidden pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=85&w=2400&auto=format&fit=crop"
          alt="Scenic coastal highway in Odisha"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Cinematic rich dark gradient overlay for maximum contrast and prestige */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#021617]/95 via-[#062F31]/88 to-[#FAF9F5]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-20 sm:pt-20 pb-4">
        {/* Compact Low-Profile Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-2 sm:mb-2.5 text-white">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-2xl font-bold font-display tracking-tight text-white leading-tight">
                Reserve Your Odisha Chauffeur
              </h1>
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[10px] font-semibold text-[#D9A52B]">
                <Sparkles className="w-3 h-3 text-[#D9A52B]" />
                10% Advance Deposit Model
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-white/80 line-clamp-1">
              Punctual BBI airport pickups, outstation highway journeys &amp; city rentals with verified commercial chauffeurs.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-[11px] text-white/90">
            <span className="flex items-center gap-1 bg-[#062F31]/80 px-2.5 py-1 rounded-lg border border-white/15">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
              100% Commercial Fleet
            </span>
            <span className="flex items-center gap-1 bg-[#062F31]/80 px-2.5 py-1 rounded-lg border border-white/15">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A52B]" />
              Zero Surge
            </span>
          </div>
        </div>

        {/* ================= 4-STEP NAVIGATION MATRIX (COMPACT SINGLE-WINDOW SLIM BAR) ================= */}
        {currentStep < 5 && (
          <div className="mb-2 sm:mb-2.5 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2">
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
                    className={`py-1.5 px-2.5 sm:px-3 rounded-lg sm:rounded-xl border text-left transition-all duration-200 flex items-center gap-2 select-none ${
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
                          {s.title}
                        </span>
                        {isCurrent && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse shrink-0" />
                        )}
                      </div>
                      <p
                        className={`text-[9px] sm:text-[10px] truncate leading-tight ${
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

        {/* ================= STEP 1: TRIP DETAILS & ROUTE (COMPACT SINGLE-WINDOW FIT) ================= */}
        {currentStep === 1 && (
          <form
            onSubmit={handleNextFromStep1}
            className="card-skeuo rounded-2xl p-3 sm:p-4 lg:p-4.5 space-y-2 sm:space-y-2.5 animate-in fade-in-50 duration-200"
          >
            {/* Header */}
            <div className="border-b border-[#E5ECE5] pb-2 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#062F31] bg-[#D9A52B] px-2.5 py-0.5 rounded-full inline-block shadow-xs">
                  Step 1 of 4
                </span>
                <h2 className="text-xs sm:text-sm font-bold font-display text-[#182A2B]">
                  Select Service &amp; Schedule
                </h2>
              </div>
              <span className="text-[10px] sm:text-[11px] text-[#073B3A] font-semibold flex items-center gap-1 bg-[#E0ECEA]/80 px-2.5 py-0.5 rounded-full border border-[#C1DAD7] shadow-xs">
                <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                <span>Zero cancellation fee on 6hr notice</span>
              </span>
            </div>

            {/* Service Type Selection Cards - Sleek Horizontal Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2">
              {[
                { id: "outstation", label: "Outstation Highway", icon: Compass, desc: "Puri, Konark, Intercity" },
                { id: "airport", label: "Airport Transfer", icon: Plane, desc: "BBI Arrivals & Drops" },
                { id: "hourly", label: "Hourly Rental", icon: Clock, desc: "Standby Chauffeur" },
                { id: "local", label: "Local City Ride", icon: Car, desc: "Scheduled Doorstep" },
              ].map((srv) => {
                const Icon = srv.icon;
                const isSelected = serviceType === srv.id;
                return (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setServiceType(srv.id as any)}
                    className={`p-1.5 sm:p-2 rounded-xl border text-left transition-all flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? "border-2 border-[#D9A52B] card-skeuo-dark text-white shadow-sm ring-1 ring-[#D9A52B]/40"
                        : "card-skeuo text-[#182A2B] hover:border-[#073B3A]/40"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? "medallion-dark text-[#D9A52B]" : "panel-recessed text-[#073B3A]"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] sm:text-xs font-bold font-display block leading-tight truncate">
                        {srv.label}
                      </span>
                      <p className={`text-[9.5px] truncate leading-tight ${isSelected ? "text-[#E0ECEA]/90" : "text-[#667575]"}`}>
                        {srv.desc}
                      </p>
                    </div>
                    {isSelected && (
                      <span className="text-[10px] font-bold text-[#D9A52B] shrink-0">✓</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Outstation One-Way vs Round Trip toggle */}
            {serviceType === "outstation" && (
              <div className="flex items-center gap-1.5 p-1 bg-[#EEF2EE] rounded-xl w-fit border border-[#D5DDD5]">
                <button
                  type="button"
                  onClick={() => setTripWay("oneway")}
                  className={`px-3 py-1 rounded-lg text-[10.5px] font-bold transition-all cursor-pointer ${
                    tripWay === "oneway"
                      ? "bg-[#073B3A] text-white shadow-skeuo-button"
                      : "text-[#667575] hover:text-[#182A2B]"
                  }`}
                >
                  One-Way Highway Drop
                </button>
                <button
                  type="button"
                  onClick={() => setTripWay("round")}
                  className={`px-3 py-1 rounded-lg text-[10.5px] font-bold transition-all cursor-pointer ${
                    tripWay === "round"
                      ? "bg-[#073B3A] text-white shadow-skeuo-button"
                      : "text-[#667575] hover:text-[#182A2B]"
                  }`}
                >
                  Round Trip Return
                </button>
              </div>
            )}

            {/* Form Fields Grid - Single Row on Desktop (4 Columns) */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${serviceType === "outstation" && tripWay === "round" ? "lg:grid-cols-5" : "lg:grid-cols-4"} gap-2 sm:gap-2.5`}>
              {/* Pickup City */}
              <div className="space-y-1">
                <label className="text-[10px] sm:text-[11px] font-bold text-[#182A2B] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#073B3A]" />
                  <span>Pickup City / Hub *</span>
                </label>
                <select
                  value={pickupCity}
                  onChange={(e) => setPickupCity(e.target.value)}
                  className="w-full h-9 px-2.5 rounded-lg border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-1 focus:ring-[#D9A52B] focus:border-[#073B3A] focus:outline-none transition cursor-pointer shadow-xs"
                >
                  {COMPANY_CONFIG.operatingCities.map((c) => (
                    <option key={c.code} value={c.name}>
                      {c.name} ({c.badge})
                    </option>
                  ))}
                </select>
                {formErrors.pickupCity && (
                  <p className="text-[10px] text-rose-600 font-medium">{formErrors.pickupCity}</p>
                )}
              </div>

              {/* Exact Pickup Address / Landmark (or Flight # if Airport) */}
              {serviceType === "airport" ? (
                <div className="space-y-1">
                  <label className="text-[10px] sm:text-[11px] font-bold text-[#182A2B] flex items-center gap-1">
                    <Plane className="w-3 h-3 text-[#073B3A]" />
                    <span>Flight No. (BBI Sync)</span>
                  </label>
                  <input
                    type="text"
                    value={flightNumber}
                    onChange={(e) => setFlightNumber(e.target.value.toUpperCase())}
                    placeholder="e.g. 6E 2145 / AI 778"
                    className="w-full h-9 px-2.5 rounded-lg border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-1 focus:ring-[#D9A52B] focus:border-[#073B3A] focus:outline-none transition shadow-xs"
                  />
                </div>
              ) : (
                <div className="space-y-1">
                  <label className="text-[10px] sm:text-[11px] font-bold text-[#182A2B] flex items-center gap-1">
                    <Navigation className="w-3 h-3 text-[#667575]" />
                    <span>Pickup Landmark (Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={pickupAddress}
                    onChange={(e) => setPickupAddress(e.target.value)}
                    placeholder="e.g. Mayfair Lagoon / KIIT"
                    className="w-full h-9 px-2.5 rounded-lg border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-1 focus:ring-[#D9A52B] focus:border-[#073B3A] focus:outline-none transition shadow-xs"
                  />
                </div>
              )}

              {/* Destination / Drop / Hourly Package */}
              {serviceType === "hourly" ? (
                <div className="space-y-1">
                  <label className="text-[10px] sm:text-[11px] font-bold text-[#182A2B] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#073B3A]" />
                    <span>Hourly Package *</span>
                  </label>
                  <select
                    value={hourlyPackage}
                    onChange={(e) => setHourlyPackage(e.target.value)}
                    className="w-full h-9 px-2.5 rounded-lg border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-1 focus:ring-[#D9A52B] focus:border-[#073B3A] focus:outline-none transition cursor-pointer shadow-xs"
                  >
                    <option value="4 Hours / 40 Km">4 Hours / 40 Km</option>
                    <option value="8 Hours / 80 Km">8 Hours / 80 Km (Recommended)</option>
                    <option value="12 Hours / 120 Km">12 Hours / 120 Km</option>
                  </select>
                </div>
              ) : (
                <div className="space-y-1">
                  <label className="text-[10px] sm:text-[11px] font-bold text-[#182A2B] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#D9A52B]" />
                    <span>Drop Destination *</span>
                  </label>
                  <input
                    type="text"
                    value={dropLocation}
                    onChange={(e) => setDropLocation(e.target.value)}
                    placeholder="e.g. Puri Beach / Konark"
                    className="w-full h-9 px-2.5 rounded-lg border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-1 focus:ring-[#D9A52B] focus:border-[#073B3A] focus:outline-none transition shadow-xs"
                    required
                  />
                  {formErrors.dropLocation && (
                    <p className="text-[10px] text-rose-600 font-medium">{formErrors.dropLocation}</p>
                  )}
                </div>
              )}

              {/* Pickup Date & Time */}
              <div className="space-y-1">
                <label className="text-[10px] sm:text-[11px] font-bold text-[#182A2B] flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#073B3A]" />
                  <span>Pickup Date &amp; Time *</span>
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full h-9 px-2 rounded-lg border border-[#D5DDD5] bg-[#FAF9F5] text-[11px] font-semibold text-[#182A2B] focus:ring-1 focus:ring-[#D9A52B] focus:border-[#073B3A] focus:outline-none transition cursor-pointer shadow-xs"
                    required
                  />
                  <input
                    type="time"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full h-9 px-2 rounded-lg border border-[#D5DDD5] bg-[#FAF9F5] text-[11px] font-semibold text-[#182A2B] focus:ring-1 focus:ring-[#D9A52B] focus:border-[#073B3A] focus:outline-none transition cursor-pointer shadow-xs"
                    required
                  />
                </div>
              </div>

              {/* Return Date if Round Trip */}
              {serviceType === "outstation" && tripWay === "round" && (
                <div className="space-y-1">
                  <label className="text-[10px] sm:text-[11px] font-bold text-[#182A2B] flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#D9A52B]" />
                    <span>Return Date *</span>
                  </label>
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full h-9 px-2 rounded-lg border border-[#D5DDD5] bg-[#FAF9F5] text-[11px] font-semibold text-[#182A2B] focus:ring-1 focus:ring-[#D9A52B] focus:border-[#073B3A] focus:outline-none transition cursor-pointer shadow-xs"
                    required
                  />
                </div>
              )}
            </div>

            {/* Interactive Route & Fare Estimator Preview Strip - 1 Slim Line */}
            <div className="px-3 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-[#062F31] to-[#041F20] text-white border border-[#D9A52B]/30 flex flex-wrap items-center justify-between text-xs gap-2">
              <div className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#D9A52B] shrink-0" />
                <span className="font-bold text-white text-[11px] sm:text-xs">
                  {pickupCity} ➔ {serviceType === "hourly" ? hourlyPackage : dropLocation}
                </span>
                <span className="text-[10px] text-[#A7F3D0]">
                  ({serviceType === "airport" ? "~16 km BBI Transit" : "~65 km via NH-316"})
                </span>
              </div>
              <div className="flex items-center gap-3 text-[10.5px]">
                <span className="text-[#A7F3D0] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                  100% Commercial Fleet
                </span>
                <span className="text-[#D9A52B] font-bold">
                  10% Advance Deposit Model
                </span>
              </div>
            </div>

            {/* Step 1 Actions */}
            <div className="pt-2 border-t border-[#EEF2EE] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-[10.5px] sm:text-xs text-[#556464] flex items-center gap-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D9A52B]" />
                Zero advance payment charged until chauffeur allocation is confirmed.
              </span>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl btn-skeuo-gold text-[#062F31] font-bold text-xs inline-flex items-center justify-center gap-1.5 cursor-pointer shadow-sm hover:brightness-105"
              >
                <span>Continue to Select Vehicle</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#062F31]" />
              </button>
            </div>
          </form>
        )}

        {/* ================= STEP 2: SELECT VEHICLE SHOWROOM (4 COLUMNS - SINGLE WINDOW) ================= */}
        {currentStep === 2 && (
          <div className="card-skeuo rounded-2xl p-3 sm:p-4 lg:p-4.5 space-y-2.5 sm:space-y-3 animate-in fade-in-50 duration-200">
            {/* Header */}
            <div className="border-b border-[#E5ECE5] pb-2 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#062F31] bg-[#D9A52B] px-2.5 py-0.5 rounded-full inline-block shadow-xs">
                  Step 2 of 4
                </span>
                <h2 className="text-xs sm:text-sm font-bold font-display text-[#182A2B]">
                  Choose Your Vehicle Class
                </h2>
              </div>
              <span className="text-[10px] sm:text-[11px] text-[#073B3A] font-semibold flex items-center gap-1 bg-[#E0ECEA]/80 px-2.5 py-0.5 rounded-full border border-[#C1DAD7] shadow-xs">
                <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                100% Dual-Zone AC &amp; Sanitized
              </span>
            </div>

            {/* Vehicle Showroom Cards - 4 Columns on Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5">
              {VEHICLE_FLEET.map((v) => {
                const isSelected = selectedVehicleId === v.id;
                return (
                  <div
                    key={v.id}
                    onClick={() => setSelectedVehicleId(v.id)}
                    className={`rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between group select-none ${
                      isSelected
                        ? "border-2 border-[#D9A52B] card-skeuo ring-1 ring-[#073B3A]/30 shadow-md scale-[1.01]"
                        : "card-skeuo hover:border-[#073B3A]/40"
                    }`}
                  >
                    <div>
                      {/* Vehicle Image */}
                      <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-[#FAF9F5]">
                        <Image
                          src={v.image}
                          alt={v.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                        <div className="absolute top-2 left-2 bg-[#062F31]/90 backdrop-blur-md text-[#FAF9F5] text-[9.5px] font-bold px-2 py-0.5 rounded-md border border-white/15">
                          {v.category}
                        </div>

                        {v.tag && (
                          <div className="absolute top-2 right-2 bg-[#D9A52B] text-[#062F31] text-[8.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs">
                            {v.tag}
                          </div>
                        )}

                        <div className="absolute bottom-1.5 left-2.5 right-2.5 text-white">
                          <h3 className="text-xs sm:text-sm font-bold font-display leading-tight">{v.name}</h3>
                          <p className="text-[10px] text-white/80 line-clamp-1">{v.subtitle}</p>
                        </div>
                      </div>

                      {/* Specs Mini Bay */}
                      <div className="p-2.5 space-y-1.5">
                        <div className="grid grid-cols-3 divide-x divide-[#E5EAE5] border border-[#E5EAE5] bg-[#FAF9F5] rounded-lg py-1 text-center text-[10px]">
                          <div>
                            <span className="font-bold text-[#182A2B] flex items-center justify-center gap-0.5">
                              <Users className="w-3 h-3 text-[#073B3A]" />
                              {v.passengers}
                            </span>
                            <span className="text-[9px] text-[#667575]">Seats</span>
                          </div>
                          <div>
                            <span className="font-bold text-[#182A2B] flex items-center justify-center gap-0.5">
                              <Briefcase className="w-3 h-3 text-[#073B3A]" />
                              {v.luggage}
                            </span>
                            <span className="text-[9px] text-[#667575]">Bags</span>
                          </div>
                          <div className="font-bold text-[#10B981] flex items-center justify-center gap-0.5">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>100% AC</span>
                          </div>
                        </div>

                        <p className="text-[10px] text-[#667575] leading-tight line-clamp-1">
                          <strong>Fleet:</strong> {v.models}
                        </p>
                      </div>
                    </div>

                    <div className="p-2.5 pt-0 border-t border-[#EEF2EE] flex items-center justify-between mt-1">
                      <div>
                        <span className="text-[8.5px] font-bold uppercase text-[#667575] block">Indicative Tariff</span>
                        <span className="text-[11px] font-bold text-[#073B3A]">{v.indicativeBaseFare}</span>
                      </div>

                      <div
                        className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all ${
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
                type="button"
                onClick={handleNextFromStep2}
                className="px-6 py-2.5 rounded-xl btn-skeuo-gold text-[#062F31] font-bold text-xs inline-flex items-center gap-1.5 cursor-pointer shadow-sm hover:brightness-105"
              >
                <span>Continue to Passenger Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#062F31]" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 3: PASSENGER INFO & WHATSAPP CONSENT ================= */}
        {currentStep === 3 && (
          <form
            onSubmit={handleNextFromStep3}
            className="card-skeuo rounded-2xl p-3 sm:p-4 lg:p-4.5 space-y-2.5 sm:space-y-3 animate-in fade-in-50 duration-200"
          >
            {/* Header */}
            <div className="border-b border-[#E5ECE5] pb-2 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#062F31] bg-[#D9A52B] px-2.5 py-0.5 rounded-full inline-block shadow-xs">
                  Step 3 of 4
                </span>
                <h2 className="text-xs sm:text-sm font-bold font-display text-[#182A2B]">
                  Contact &amp; Group Details
                </h2>
              </div>
              <span className="text-[10px] sm:text-[11px] text-[#073B3A] font-semibold flex items-center gap-1 bg-[#E0ECEA]/80 px-2.5 py-0.5 rounded-full border border-[#C1DAD7] shadow-xs">
                <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                WhatsApp dispatch voucher sent here
              </span>
            </div>

            {/* Travel Purpose Pills */}
            <div className="space-y-1">
              <label className="text-[10px] sm:text-[11px] font-bold text-[#182A2B] uppercase tracking-wider block">
                Travel Purpose:
              </label>
              <div className="flex flex-wrap gap-1.5">
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
                    className={`px-2.5 py-1 rounded-lg text-[10.5px] font-semibold transition-all cursor-pointer ${
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-[10px] sm:text-[11px] font-bold text-[#182A2B] flex items-center gap-1">
                  <User className="w-3 h-3 text-[#073B3A]" />
                  <span>Lead Passenger Full Name *</span>
                </label>
                <input
                  type="text"
                  value={passengerName}
                  onChange={(e) => setPassengerName(e.target.value)}
                  placeholder="e.g. Ramesh Chandra Mohanty"
                  className="w-full h-9 px-2.5 rounded-lg border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-1 focus:ring-[#D9A52B] focus:border-[#073B3A] focus:outline-none transition shadow-xs"
                  required
                />
                {formErrors.name && (
                  <p className="text-[10px] text-rose-600 font-medium">{formErrors.name}</p>
                )}
              </div>

              {/* Mobile Phone Number */}
              <div className="space-y-1">
                <label className="text-[10px] sm:text-[11px] font-bold text-[#182A2B] flex items-center gap-1">
                  <Phone className="w-3 h-3 text-[#073B3A]" />
                  <span>Mobile (Active WhatsApp) *</span>
                </label>
                <div className="flex gap-1.5">
                  <span className="h-9 px-2.5 rounded-lg border border-[#D5DDD5] bg-[#EEF2EE] text-xs font-bold text-[#073B3A] flex items-center shrink-0">
                    +91
                  </span>
                  <input
                    type="tel"
                    value={passengerPhone}
                    onChange={(e) => setPassengerPhone(e.target.value)}
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

              {/* Email Address */}
              <div className="space-y-1">
                <label className="text-[10px] sm:text-[11px] font-bold text-[#182A2B] flex items-center gap-1">
                  <Mail className="w-3 h-3 text-[#073B3A]" />
                  <span>Email (Tax Invoice &amp; Voucher) *</span>
                </label>
                <input
                  type="email"
                  value={passengerEmail}
                  onChange={(e) => setPassengerEmail(e.target.value)}
                  placeholder="ramesh@example.com"
                  className="w-full h-9 px-2.5 rounded-lg border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-1 focus:ring-[#D9A52B] focus:border-[#073B3A] focus:outline-none transition shadow-xs"
                  required
                />
                {formErrors.email && (
                  <p className="text-[10px] text-rose-600 font-medium">{formErrors.email}</p>
                )}
              </div>

              {/* Passenger and Luggage Dropdowns */}
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="text-[10px] sm:text-[11px] font-bold text-[#182A2B] flex items-center gap-1">
                    <Users className="w-3 h-3 text-[#073B3A]" />
                    <span>Passengers</span>
                  </label>
                  <select
                    value={passengerCount}
                    onChange={(e) => setPassengerCount(Number(e.target.value))}
                    className="w-full h-9 px-2 rounded-lg border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-1 focus:ring-[#D9A52B] focus:border-[#073B3A] focus:outline-none transition cursor-pointer shadow-xs"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 15].map((num) => (
                      <option key={num} value={num}>
                        {num} Pax
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] sm:text-[11px] font-bold text-[#182A2B] flex items-center gap-1">
                    <Briefcase className="w-3 h-3 text-[#073B3A]" />
                    <span>Luggage Bags</span>
                  </label>
                  <select
                    value={luggageCount}
                    onChange={(e) => setLuggageCount(Number(e.target.value))}
                    className="w-full h-9 px-2 rounded-lg border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-1 focus:ring-[#D9A52B] focus:border-[#073B3A] focus:outline-none transition cursor-pointer shadow-xs"
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
              <div className="sm:col-span-2 space-y-1">
                <label className="text-[10px] sm:text-[11px] font-bold text-[#182A2B]">
                  Special Instructions / Requests (Optional)
                </label>
                <input
                  type="text"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="e.g. Halt at Pipili craft bazaar, child seat"
                  className="w-full h-9 px-2.5 rounded-lg border border-[#D5DDD5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-1 focus:ring-[#D9A52B] focus:border-[#073B3A] focus:outline-none transition shadow-xs"
                />
              </div>
            </div>

            {/* Explicit WhatsApp Consent Component */}
            <div className="pt-1">
              <WhatsAppConsentCheckbox
                bookingConsent={whatsAppBookingConsent}
                onBookingConsentChange={setWhatsAppBookingConsent}
                marketingConsent={whatsAppMarketingConsent}
                onMarketingConsentChange={setWhatsAppMarketingConsent}
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
                <span>Review Fare &amp; Boarding Pass</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#062F31]" />
              </button>
            </div>
          </form>
        )}

        {/* ================= STEP 4: REVIEW & SUBMIT DISPATCH REQUEST ================= */}
        {currentStep === 4 && (
          <div className="card-skeuo rounded-2xl p-3 sm:p-4 lg:p-4.5 space-y-2.5 sm:space-y-3 animate-in fade-in-50 duration-200">
            {/* Header */}
            <div className="border-b border-[#E5ECE5] pb-2 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#062F31] bg-[#D9A52B] px-2.5 py-0.5 rounded-full inline-block shadow-xs">
                  Step 4 of 4
                </span>
                <h2 className="text-xs sm:text-sm font-bold font-display text-[#182A2B]">
                  Confirm Chauffeur Dispatch Request
                </h2>
              </div>
              <span className="text-[10px] sm:text-[11px] text-[#073B3A] font-semibold flex items-center gap-1 bg-[#E0ECEA]/80 px-2.5 py-0.5 rounded-full border border-[#C1DAD7] shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D9A52B]" />
                10% Advance Deposit Model
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {/* Trip Parameters Boarding Pass */}
              <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-[#D5DDD5] space-y-2 text-xs shadow-skeuo">
                <div className="font-bold text-[#073B3A] uppercase tracking-wider text-[10px] pb-1.5 border-b border-[#E5EAE5] flex items-center justify-between">
                  <span>Itinerary Parameters</span>
                  <span className="text-[#10B981] font-semibold">100% Commercial Fleet</span>
                </div>
                <div>
                  <span className="text-[#667575] text-[10px] block">Travel Category:</span>
                  <strong className="text-[#182A2B] capitalize text-xs">{serviceType} Mobility ({travelPurpose})</strong>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <span className="text-[#667575] text-[10px] block">Pickup Hub:</span>
                    <strong className="text-[#182A2B]">{pickupCity}</strong>
                  </div>
                  <div>
                    <span className="text-[#667575] text-[10px] block">Destination:</span>
                    <strong className="text-[#182A2B]">
                      {serviceType === "hourly" ? hourlyPackage : dropLocation}
                    </strong>
                  </div>
                </div>
                <div className="text-[11px]">
                  <span className="text-[#667575] text-[10px] block">Scheduled Pickup:</span>
                  <strong className="text-[#182A2B]">{pickupDate} at {pickupTime}</strong>
                </div>
                {flightNumber && (
                  <div className="text-[11px]">
                    <span className="text-[#667575] text-[10px] block">Flight Sync:</span>
                    <strong className="text-[#182A2B]">{flightNumber} (BBI Radar)</strong>
                  </div>
                )}
                <div className="text-[11px]">
                  <span className="text-[#667575] text-[10px] block">Allocated Fleet:</span>
                  <strong className="text-[#073B3A] font-bold">{selectedVehicle.name} ({selectedVehicle.category})</strong>
                </div>
                <div className="text-[11px]">
                  <span className="text-[#667575] text-[10px] block">Lead Passenger:</span>
                  <strong className="text-[#182A2B]">{passengerName} (+91 {passengerPhone})</strong>
                </div>
              </div>

              {/* Estimated Fare & Advance Breakdown Card */}
              <div className="p-3.5 rounded-2xl bg-white border border-[#D5DDD5] shadow-card space-y-2.5">
                <div className="flex items-center justify-between pb-1.5 border-b border-[#EEF2EE]">
                  <span className="font-bold text-[#182A2B] uppercase tracking-wider text-[10px]">
                    Fare &amp; Advance Structure
                  </span>
                  <span className="text-[9.5px] font-bold text-[#073B3A] bg-[#E0ECEA] px-2 py-0.5 rounded-full">
                    Transparent Tariff
                  </span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-[#667575]">
                    <span>Estimated Total Cab Fare:</span>
                    <strong className="text-[#182A2B] font-bold text-base">
                      ₹{fares.total.toLocaleString("en-IN")}
                    </strong>
                  </div>
                  <div className="flex items-center justify-between text-[#073B3A] bg-[#E0ECEA]/70 p-2.5 rounded-xl font-semibold border border-[#C1DAD7]">
                    <div>
                      <span className="block font-bold text-xs">10% Advance Deposit:</span>
                      <span className="text-[9.5px] text-[#455353]">Required upon chauffeur allocation</span>
                    </div>
                    <strong className="text-[#073B3A] font-extrabold text-sm">
                      ₹{fares.advance.toLocaleString("en-IN")}
                    </strong>
                  </div>
                  <div className="flex items-center justify-between text-[#667575] text-[11px]">
                    <span>Remaining 90% (Payable on arrival):</span>
                    <strong className="text-[#182A2B] font-semibold">
                      ₹{fares.balance.toLocaleString("en-IN")}
                    </strong>
                  </div>
                </div>

                {/* Availability Verification Guarantee */}
                <div className="p-2.5 rounded-xl bg-[#FAF9F5] border border-[#D5DDD5] text-[10px] text-[#455353] space-y-0.5">
                  <div className="font-bold text-[#073B3A] flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 text-[#D9A52B] shrink-0" />
                    <span>Availability Verification Guarantee</span>
                  </div>
                  <p className="leading-tight">
                    Submitting this form does not charge your card. Verification link dispatched on WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 Actions */}
            <div className="pt-2 border-t border-[#EEF2EE] flex items-center justify-between">
              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="px-4 py-2 rounded-xl border border-[#D5DDD5] text-[#182A2B] font-bold text-xs inline-flex items-center gap-1.5 hover:bg-[#FAF9F5] transition cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={handleSubmitBooking}
                className="px-6 py-2.5 rounded-full bg-gradient-to-b from-[#E6B543] to-[#C99320] text-[#062F31] font-bold text-xs inline-flex items-center gap-1.5 border-t border-white/40 shadow-skeuo-gold hover:brightness-105 active:translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Submit Booking Request</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#062F31]" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 5: SUCCESS / REQUEST RECEIVED ================= */}
        {currentStep === 5 && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D5DDD5] shadow-2xl space-y-4 text-center max-w-xl mx-auto animate-in zoom-in-95 duration-300">
            {/* Success Icon */}
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-[#084846] to-[#041F20] text-[#D9A52B] flex items-center justify-center mx-auto shadow-skeuo-button border-t border-white/20">
              <FileCheck className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <div className="inline-block px-3 py-0.5 rounded-full bg-[#E0ECEA] text-[#073B3A] text-[10px] font-bold uppercase tracking-wider">
                Booking Request Successfully Received
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-[#182A2B]">
                Thank You, {passengerName || "Traveler"}!
              </h2>
              <p className="text-xs text-[#667575] max-w-md mx-auto leading-relaxed">
                Your travel request has been logged in our central Odisha operations queue.
              </p>
            </div>

            {/* Reference Badge */}
            <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-[#D5DDD5] inline-block w-full text-left shadow-xs">
              <div className="flex items-center justify-between pb-1.5 border-b border-[#E5EAE5] text-xs">
                <span className="text-[#667575]">Booking Reference ID:</span>
                <strong className="font-mono text-xs text-[#073B3A] font-black">
                  {bookingReference}
                </strong>
              </div>
              <div className="pt-1.5 text-[11px] text-[#455353] space-y-0.5">
                <div>Route: <strong>{pickupCity} ➔ {serviceType === "hourly" ? hourlyPackage : dropLocation}</strong></div>
                <div>Vehicle: <strong>{selectedVehicle.name}</strong></div>
                <div>Date &amp; Time: <strong>{pickupDate} at {pickupTime}</strong></div>
                <div>Estimated Total: <strong>₹{fares.total.toLocaleString("en-IN")}</strong></div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <Link
                href="/"
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#FAF9F5] hover:bg-[#F2F5F2] border border-[#D5DDD5] text-[#182A2B] font-bold text-xs transition"
              >
                Return to Homepage
              </Link>
              <a
                href={COMPANY_CONFIG.contact.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#073B3A] hover:bg-[#062F31] text-white font-bold text-xs inline-flex items-center justify-center gap-1.5 transition shadow-skeuo-button"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#D9A52B]" />
                <span>Contact Dispatch on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BookCabPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#FAF9F5]">
          <div className="text-center space-y-2">
            <div className="w-8 h-8 border-4 border-[#073B3A] border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs font-bold text-[#073B3A]">Loading Cab Booking Experience...</p>
          </div>
        </div>
      }
    >
      <CabBookingContent />
    </Suspense>
  );
}
