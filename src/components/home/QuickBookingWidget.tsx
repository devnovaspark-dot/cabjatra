"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Calendar,
  Clock,
  Compass,
  Plane,
  Car,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";

export const QuickBookingWidget: React.FC = () => {
  const router = useRouter();
  const [serviceType, setServiceType] = useState<"outstation" | "airport" | "hourly" | "local">("outstation");
  const [pickupCity, setPickupCity] = useState("Bhubaneswar");
  const [dropLocation, setDropLocation] = useState("Puri");
  const [pickupDate, setPickupDate] = useState("2026-11-12");
  const [pickupTime, setPickupTime] = useState("09:00");
  const [inputError, setInputError] = useState("");

  const handleStartBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (serviceType !== "hourly" && !dropLocation.trim()) {
      setInputError("Please specify your destination");
      return;
    }
    setInputError("");
    const query = new URLSearchParams({
      service: serviceType,
      from: pickupCity,
      to: dropLocation,
      date: pickupDate,
      time: pickupTime,
    });
    router.push(`/book-cab?${query.toString()}`);
  };

  const tabs = [
    { id: "outstation", label: "Outstation Highway", icon: Compass, defaultDrop: "Puri Golden Beach" },
    { id: "airport", label: "Airport Transfer", icon: Plane, defaultDrop: "Biju Patnaik Airport (BBI)" },
    { id: "hourly", label: "Hourly Rental", icon: Clock, defaultDrop: "8 Hours / 80 Km Package" },
    { id: "local", label: "Local City Ride", icon: Car, defaultDrop: "City Destination" },
  ] as const;

  return (
    <div className="w-full bg-[#062F31]/85 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.2)] border border-white/20 p-3.5 sm:p-6 lg:p-7 text-white transition-all duration-300">
      {/* Service Type 2x2 Grid on Mobile, 4 Cols on Tablet/Desktop - Zero Horizontal Scroll */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1.5 bg-black/40 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 border border-white/10">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = serviceType === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setServiceType(tab.id);
                setDropLocation(tab.defaultDrop);
                setInputError("");
              }}
              className={`relative py-2 sm:py-3 px-2 sm:px-3 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 select-none ${
                isActive
                  ? "bg-gradient-to-b from-[#E6B543] to-[#C99320] text-[#062F31] shadow-skeuo-gold border-t border-white/40 font-bold scale-[1.01]"
                  : "text-white/80 hover:text-white hover:bg-white/10 active:scale-98"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform duration-200 ${isActive ? "text-[#062F31]" : "text-[#D9A52B]"}`} />
              <span className="truncate">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Booking Form Fields - High Contrast Labels & Compact Touch Targets */}
      <form onSubmit={handleStartBooking} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Pickup City */}
        <div className="space-y-1">
          <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#FAF9F5] flex items-center gap-1.5 drop-shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#D9A52B]" />
            <span>Pickup Hub</span>
          </label>
          <div className="relative">
            <select
              value={pickupCity}
              onChange={(e) => setPickupCity(e.target.value)}
              className="w-full h-11 sm:h-12 px-3 sm:px-3.5 rounded-xl border border-white/20 bg-white text-xs font-bold text-[#182A2B] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D9A52B] transition-all cursor-pointer"
            >
              {COMPANY_CONFIG.operatingCities.map((c) => (
                <option key={c.code} value={c.name}>
                  {c.name} ({c.badge})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Drop Destination */}
        <div className="space-y-1">
          <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#FAF9F5] flex items-center gap-1.5 drop-shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#D9A52B]" />
            <span>Destination / Drop</span>
          </label>
          {serviceType === "hourly" ? (
            <select
              value={dropLocation}
              onChange={(e) => setDropLocation(e.target.value)}
              className="w-full h-11 sm:h-12 px-3 sm:px-3.5 rounded-xl border border-white/20 bg-white text-xs font-bold text-[#182A2B] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D9A52B] transition-all cursor-pointer"
            >
              <option value="4 Hours / 40 Km Package">4 Hours / 40 Km</option>
              <option value="8 Hours / 80 Km Package">8 Hours / 80 Km (Recommended)</option>
              <option value="12 Hours / 120 Km Package">12 Hours / 120 Km (Full Day)</option>
            </select>
          ) : (
            <input
              type="text"
              value={dropLocation}
              onChange={(e) => {
                setDropLocation(e.target.value);
                if (inputError) setInputError("");
              }}
              placeholder="e.g. Puri Golden Beach, Konark, Cuttack"
              className="w-full h-11 sm:h-12 px-3 sm:px-3.5 rounded-xl border border-white/20 bg-white text-xs font-bold text-[#182A2B] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D9A52B] transition-all placeholder:text-[#667575]/70"
              required
            />
          )}
          {inputError && (
            <p className="text-[10px] text-amber-300 font-semibold animate-pulse">{inputError}</p>
          )}
        </div>

        {/* Pickup Date & Time */}
        <div className="space-y-1">
          <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#FAF9F5] flex items-center gap-1.5 drop-shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-[#D9A52B]" />
            <span>Date &amp; Pickup Time</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full h-11 sm:h-12 px-2 sm:px-2.5 rounded-xl border border-white/20 bg-white text-xs font-bold text-[#182A2B] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D9A52B] transition-all cursor-pointer"
              required
            />
            <input
              type="time"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="w-full h-11 sm:h-12 px-2 sm:px-2.5 rounded-xl border border-white/20 bg-white text-xs font-bold text-[#182A2B] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D9A52B] transition-all cursor-pointer"
              required
            />
          </div>
        </div>

        {/* Tactile Embossed Search CTA Button */}
        <div className="space-y-1 flex flex-col justify-end">
          <button
            type="submit"
            className="w-full h-11 sm:h-12 rounded-xl font-bold text-xs text-[#062F31] bg-gradient-to-b from-[#E6B543] to-[#C99320] border-t border-white/40 shadow-skeuo-gold hover:brightness-105 transition-all flex items-center justify-center gap-2 group active:translate-y-0.5 select-none"
          >
            <span>Search Cabs &amp; Tariffs</span>
            <ArrowRight className="w-4 h-4 text-[#062F31] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </form>

      {/* Trust Micro-notes with High-Contrast White Text and Radiant Gold Icons */}
      <div className="mt-3.5 sm:mt-5 pt-3 sm:pt-4 border-t border-white/15 flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between text-[10px] sm:text-xs text-white/90 gap-1.5 sm:gap-2">
        <span className="flex items-center gap-1.5 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A52B] shrink-0" />
          <span>Pre-booked allocation with zero driver cancellation</span>
        </span>
        <span className="flex items-center gap-1.5 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-[#D9A52B] shrink-0" />
          <span>Only 10% advance deposit after fleet verification</span>
        </span>
        <span className="hidden lg:flex items-center gap-1.5 text-[#D9A52B] font-bold">
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span>Prime Sedans, Innova Crysta &amp; Urbania</span>
        </span>
      </div>
    </div>
  );
};
