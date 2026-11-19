"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Car,
  Palmtree,
  ChevronDown,
  Menu,
  X,
  Phone,
  ArrowRight,
  ShieldCheck,
  MessageSquare,
  Building2,
  Landmark,
  Train,
  MapPin,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";
import { BrandLogo } from "@/components/common/BrandLogo";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const isBookingFlow = pathname?.startsWith("/book-");
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [servicesTab, setServicesTab] = useState<"cab" | "tour">("cab");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileCabExpanded, setIsMobileCabExpanded] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnterServices = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeaveServices = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setIsServicesOpen(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 print:hidden transition-all duration-200 ${
        isBookingFlow || isScrolled
          ? "bg-[#000B3B] border-b border-white/10 shadow-lg py-2 sm:py-2.5 px-3 sm:px-6 lg:px-8 pointer-events-auto"
          : "pt-2 sm:pt-3.5 px-3 sm:px-6 lg:px-8 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto pointer-events-auto">
        {/* Navigation Bar: Floating Luxury Island at Top, Seamless Docked Bar on Scroll / Booking */}
        <nav
          className={`w-full flex items-center justify-between transition-all duration-200 ${
            isBookingFlow || isScrolled
              ? "px-1 sm:px-2 py-0.5"
              : "bg-[#001162]/85 backdrop-blur-xl rounded-2xl sm:rounded-full border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.15)] px-4 sm:px-7 py-2.5 sm:py-3"
          }`}
          aria-label="Main Navigation"
        >
          {/* Bespoke Luxury Brand Logo */}
          <Link
            href="/"
            className="focus:outline-none focus:ring-2 focus:ring-[#FEC401] rounded-xl pr-2"
            aria-label="CABJATRA Home"
          >
            <BrandLogo size="md" variant="light" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all ${
                pathname === "/"
                  ? "text-[#FEC401] bg-white/10 font-bold shadow-xs"
                  : "text-[#FAF9F5]/90 hover:text-[#FEC401] hover:bg-white/10"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown (Contains Book a Cab & Book a Tour) */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnterServices}
              onMouseLeave={handleMouseLeaveServices}
            >
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsServicesOpen(!isServicesOpen);
                  }
                }}
                className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all inline-flex items-center gap-1.5 cursor-pointer ${
                  isServicesOpen ||
                  pathname.startsWith("/services") ||
                  pathname.startsWith("/book-cab") ||
                  pathname.startsWith("/book-tour") ||
                  pathname.startsWith("/cab-service-in-") ||
                  pathname.startsWith("/taxi-service-in-") ||
                  pathname.startsWith("/book-online-taxi-in-")
                    ? "text-[#FEC401] bg-white/10 font-bold shadow-xs"
                    : "text-[#FAF9F5]/90 hover:text-[#FEC401] hover:bg-white/10"
                }`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180 text-[#FEC401]" : "text-[#FAF9F5]/70"
                  }`}
                />
              </button>

              {/* Luxury Booking Services Minimalist Mega-Dropdown */}
              {isServicesOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2.5 w-[92vw] sm:w-[480px] max-w-[500px] rounded-3xl bg-white shadow-[0_24px_50px_rgba(0,11,59,0.2),0_0_0_1px_rgba(0,11,59,0.08)] p-3.5 sm:p-4 animate-in fade-in slide-in-from-top-1.5 duration-150 z-50 text-[#0F172A] before:absolute before:-top-3.5 before:inset-x-0 before:h-3.5 before:content-['']"
                  role="menu"
                >
                  {/* Upward Pointer Caret Arrow */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white border-t border-l border-[#E2E8F0] rotate-45 z-20 pointer-events-none shadow-[-2px_-2px_4px_rgba(0,11,59,0.04)]" />

                  {/* Clean Segmented Tab Switcher */}
                  <div className="flex items-center p-1 rounded-2xl bg-[#F1F5F9] border border-[#E2E8F0]">
                    <button
                      type="button"
                      onMouseEnter={() => setServicesTab("cab")}
                      onClick={() => setServicesTab("cab")}
                      className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer ${
                        servicesTab === "cab"
                          ? "bg-[#000B3B] text-white shadow-sm ring-1 ring-[#FEC401]/40"
                          : "text-[#64748B] hover:text-[#0F172A] hover:bg-white/70"
                      }`}
                      role="tab"
                      aria-selected={servicesTab === "cab"}
                    >
                      <Car
                        className={`w-3.5 h-3.5 ${
                          servicesTab === "cab" ? "text-[#FEC401]" : "text-[#64748B]"
                        }`}
                      />
                      <span>Book a Cab</span>
                      <span
                        className={`text-[9px] font-black uppercase px-1.5 py-0.2 rounded-md ${
                          servicesTab === "cab"
                            ? "bg-[#FEC401] text-[#000B3B]"
                            : "bg-[#E2E8F0] text-[#64748B]"
                        }`}
                      >
                        Instant
                      </span>
                    </button>

                    <button
                      type="button"
                      onMouseEnter={() => setServicesTab("tour")}
                      onClick={() => setServicesTab("tour")}
                      className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer ${
                        servicesTab === "tour"
                          ? "bg-[#000B3B] text-white shadow-sm ring-1 ring-[#FEC401]/40"
                          : "text-[#64748B] hover:text-[#0F172A] hover:bg-white/70"
                      }`}
                      role="tab"
                      aria-selected={servicesTab === "tour"}
                    >
                      <Palmtree
                        className={`w-3.5 h-3.5 ${
                          servicesTab === "tour" ? "text-[#FEC401]" : "text-[#64748B]"
                        }`}
                      />
                      <span>Book a Tour</span>
                      <span
                        className={`text-[9px] font-black uppercase px-1.5 py-0.2 rounded-md ${
                          servicesTab === "tour"
                            ? "bg-[#FEC401] text-[#000B3B]"
                            : "bg-[#E2E8F0] text-[#64748B]"
                        }`}
                      >
                        Circuits
                      </span>
                    </button>
                  </div>

                  {/* Tab 1: Book a Cab Sub-Links */}
                  {servicesTab === "cab" && (
                    <div className="pt-2.5 space-y-1.5">
                      {/* 1. Cab Service in Bhubaneswar */}
                      <Link
                        href="/cab-service-in-bhubaneswar"
                        onClick={() => setIsServicesOpen(false)}
                        className="group flex items-center justify-between p-2.5 rounded-2xl bg-white hover:bg-gradient-to-r hover:from-[#FAF9F5] hover:to-[#FFFBEB] border border-[#E2E8F0] hover:border-[#FEC401]/70 transition-all duration-150 shadow-xs hover:shadow-sm"
                        role="menuitem"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-xl bg-[#000B3B]/5 group-hover:bg-[#000B3B] text-[#000B3B] group-hover:text-[#FEC401] flex items-center justify-center shrink-0 transition-all duration-150 group-hover:scale-105">
                            <Building2 className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <span className="block text-xs font-bold text-[#0F172A] group-hover:text-[#000B3B] truncate">
                              Cab Service in Bhubaneswar
                            </span>
                            <span className="block text-[10px] text-[#64748B] group-hover:text-[#000B3B]/80 font-medium truncate">
                              BBI Airport Pickups &bull; Infocity IT &bull; Outstation
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          <span className="text-[9.5px] text-[#16A34A] font-bold bg-[#DCFCE7] px-2 py-0.5 rounded-full border border-[#86EFAC]/50">
                            Live 24/7
                          </span>
                          <div className="w-6 h-6 rounded-lg bg-[#F1F5F9] group-hover:bg-[#000B3B] text-[#94A3B8] group-hover:text-[#FEC401] flex items-center justify-center transition-all duration-150">
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </Link>

                      {/* 2. Cab Service in Puri */}
                      <Link
                        href="/cab-service-in-puri"
                        onClick={() => setIsServicesOpen(false)}
                        className="group flex items-center justify-between p-2.5 rounded-2xl bg-white hover:bg-gradient-to-r hover:from-[#FAF9F5] hover:to-[#FFFBEB] border border-[#E2E8F0] hover:border-[#FEC401]/70 transition-all duration-150 shadow-xs hover:shadow-sm"
                        role="menuitem"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-xl bg-[#000B3B]/5 group-hover:bg-[#000B3B] text-[#000B3B] group-hover:text-[#FEC401] flex items-center justify-center shrink-0 transition-all duration-150 group-hover:scale-105">
                            <Landmark className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <span className="block text-xs font-bold text-[#0F172A] group-hover:text-[#000B3B] truncate">
                              Cab Service in Puri
                            </span>
                            <span className="block text-[10px] text-[#64748B] group-hover:text-[#000B3B]/80 font-medium truncate">
                              Jagannath Temple Corridor &bull; Marine Drive
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          <span className="text-[9.5px] text-[#02146B] font-bold bg-[#E0E7FF] px-2 py-0.5 rounded-full border border-[#C7D2FE]/60">
                            Temple Hub
                          </span>
                          <div className="w-6 h-6 rounded-lg bg-[#F1F5F9] group-hover:bg-[#000B3B] text-[#94A3B8] group-hover:text-[#FEC401] flex items-center justify-center transition-all duration-150">
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </Link>

                      {/* 3. Taxi Service in Puri */}
                      <Link
                        href="/taxi-service-in-puri"
                        onClick={() => setIsServicesOpen(false)}
                        className="group flex items-center justify-between p-2.5 rounded-2xl bg-white hover:bg-gradient-to-r hover:from-[#FAF9F5] hover:to-[#FFFBEB] border border-[#E2E8F0] hover:border-[#FEC401]/70 transition-all duration-150 shadow-xs hover:shadow-sm"
                        role="menuitem"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-xl bg-[#000B3B]/5 group-hover:bg-[#000B3B] text-[#000B3B] group-hover:text-[#FEC401] flex items-center justify-center shrink-0 transition-all duration-150 group-hover:scale-105">
                            <Train className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <span className="block text-xs font-bold text-[#0F172A] group-hover:text-[#000B3B] truncate">
                              Taxi Service in Puri
                            </span>
                            <span className="block text-[10px] text-[#64748B] group-hover:text-[#000B3B]/80 font-medium truncate">
                              Puri Railway Station Pickups &bull; Sightseeing Taxis
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          <span className="text-[9.5px] text-[#B45309] font-bold bg-[#FEF3C7] px-2 py-0.5 rounded-full border border-[#FDE68A]/60">
                            Station Taxi
                          </span>
                          <div className="w-6 h-6 rounded-lg bg-[#F1F5F9] group-hover:bg-[#000B3B] text-[#94A3B8] group-hover:text-[#FEC401] flex items-center justify-center transition-all duration-150">
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </Link>

                      {/* 4. Book Online Taxi in Cuttack */}
                      <Link
                        href="/book-online-taxi-in-cuttack"
                        onClick={() => setIsServicesOpen(false)}
                        className="group flex items-center justify-between p-2.5 rounded-2xl bg-white hover:bg-gradient-to-r hover:from-[#FAF9F5] hover:to-[#FFFBEB] border border-[#E2E8F0] hover:border-[#FEC401]/70 transition-all duration-150 shadow-xs hover:shadow-sm"
                        role="menuitem"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-xl bg-[#000B3B]/5 group-hover:bg-[#000B3B] text-[#000B3B] group-hover:text-[#FEC401] flex items-center justify-center shrink-0 transition-all duration-150 group-hover:scale-105">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <span className="block text-xs font-bold text-[#0F172A] group-hover:text-[#000B3B] truncate">
                              Book Online Taxi in Cuttack
                            </span>
                            <span className="block text-[10px] text-[#64748B] group-hover:text-[#000B3B]/80 font-medium truncate">
                              High Court &bull; SCB Medical &bull; NH-16 Express
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          <span className="text-[9.5px] text-[#4338CA] font-bold bg-[#EEF2FF] px-2 py-0.5 rounded-full border border-[#E0E7FF]">
                            Twin-City NH-16
                          </span>
                          <div className="w-6 h-6 rounded-lg bg-[#F1F5F9] group-hover:bg-[#000B3B] text-[#94A3B8] group-hover:text-[#FEC401] flex items-center justify-center transition-all duration-150">
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </Link>

                      {/* Clean Outstation Fare Action Button */}
                      <div className="pt-1">
                        <Link
                          href="/book-cab"
                          onClick={() => setIsServicesOpen(false)}
                          className="w-full py-2.5 px-3.5 rounded-2xl bg-gradient-to-r from-[#000B3B] via-[#02146B] to-[#000B3B] text-white flex items-center justify-between text-xs font-bold hover:brightness-105 transition-all shadow-md group border border-white/10"
                        >
                          <span className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-[#FEC401]/20 flex items-center justify-center">
                              <Car className="w-3 h-3 text-[#FEC401]" />
                            </div>
                            <span>Need custom outstation or one-way drop?</span>
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#FEC401] text-[#000B3B] text-[11px] font-black group-hover:scale-105 transition-all shadow-sm">
                            <span>Book Now</span>
                            <ArrowRight className="w-3 h-3 text-[#000B3B] group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Book a Tour Sub-Links */}
                  {servicesTab === "tour" && (
                    <div className="pt-2.5 space-y-1.5">
                      {/* 1. Odisha Tour Package by Cab */}
                      <Link
                        href="/odisha-tour-package-by-cab"
                        onClick={() => setIsServicesOpen(false)}
                        className="group flex items-center justify-between p-2.5 rounded-2xl bg-white hover:bg-gradient-to-r hover:from-[#FAF9F5] hover:to-[#FFFBEB] border border-[#E2E8F0] hover:border-[#FEC401]/70 transition-all duration-150 shadow-xs hover:shadow-sm"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-xl bg-[#000B3B]/5 group-hover:bg-[#000B3B] text-[#000B3B] group-hover:text-[#FEC401] flex items-center justify-center shrink-0 transition-all duration-150 group-hover:scale-105">
                            <Palmtree className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <span className="block text-xs font-bold text-[#0F172A] group-hover:text-[#000B3B] truncate">
                              Odisha Tour Package by Cab
                            </span>
                            <span className="block text-[10px] text-[#64748B] group-hover:text-[#000B3B]/80 font-medium truncate">
                              Bhubaneswar &bull; Puri &bull; Konark &bull; Chilika
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          <span className="text-[9.5px] text-[#02146B] font-bold bg-[#E0E7FF] px-2 py-0.5 rounded-full border border-[#C7D2FE]/60">
                            Complete Circuit
                          </span>
                          <div className="w-6 h-6 rounded-lg bg-[#F1F5F9] group-hover:bg-[#000B3B] text-[#94A3B8] group-hover:text-[#FEC401] flex items-center justify-center transition-all duration-150">
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/book-tour?destination=konark"
                        onClick={() => setIsServicesOpen(false)}
                        className="group flex items-center justify-between p-2.5 rounded-2xl bg-white hover:bg-gradient-to-r hover:from-[#FAF9F5] hover:to-[#FFFBEB] border border-[#E2E8F0] hover:border-[#FEC401]/70 transition-all duration-150 shadow-xs hover:shadow-sm"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-xl bg-[#000B3B]/5 group-hover:bg-[#000B3B] text-[#000B3B] group-hover:text-[#FEC401] flex items-center justify-center shrink-0 transition-all duration-150 group-hover:scale-105">
                            <Sparkles className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <span className="block text-xs font-bold text-[#0F172A] group-hover:text-[#000B3B] truncate">
                              Konark Sun Temple &amp; Beach
                            </span>
                            <span className="block text-[10px] text-[#64748B] group-hover:text-[#000B3B]/80 font-medium truncate">
                              UNESCO Sun Temple &bull; Marine Drive
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          <span className="text-[9.5px] text-[#B45309] font-bold bg-[#FEF3C7] px-2 py-0.5 rounded-full border border-[#FDE68A]/60">
                            Marine Drive
                          </span>
                          <div className="w-6 h-6 rounded-lg bg-[#F1F5F9] group-hover:bg-[#000B3B] text-[#94A3B8] group-hover:text-[#FEC401] flex items-center justify-center transition-all duration-150">
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/book-tour?destination=chilika"
                        onClick={() => setIsServicesOpen(false)}
                        className="group flex items-center justify-between p-2.5 rounded-2xl bg-white hover:bg-gradient-to-r hover:from-[#FAF9F5] hover:to-[#FFFBEB] border border-[#E2E8F0] hover:border-[#FEC401]/70 transition-all duration-150 shadow-xs hover:shadow-sm"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-xl bg-[#000B3B]/5 group-hover:bg-[#000B3B] text-[#000B3B] group-hover:text-[#FEC401] flex items-center justify-center shrink-0 transition-all duration-150 group-hover:scale-105">
                            <Palmtree className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <span className="block text-xs font-bold text-[#0F172A] group-hover:text-[#000B3B] truncate">
                              Chilika Lake &amp; Dolphin Safari
                            </span>
                            <span className="block text-[10px] text-[#64748B] group-hover:text-[#000B3B]/80 font-medium truncate">
                              Satapada &bull; Irrawaddy Dolphins &bull; Lagoon Cruise
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          <span className="text-[9.5px] text-[#0D9488] font-bold bg-[#CCFBF1] px-2 py-0.5 rounded-full border border-[#99F6E4]/60">
                            Lagoon Safari
                          </span>
                          <div className="w-6 h-6 rounded-lg bg-[#F1F5F9] group-hover:bg-[#000B3B] text-[#94A3B8] group-hover:text-[#FEC401] flex items-center justify-center transition-all duration-150">
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/book-tour?destination=temple"
                        onClick={() => setIsServicesOpen(false)}
                        className="group flex items-center justify-between p-2.5 rounded-2xl bg-white hover:bg-gradient-to-r hover:from-[#FAF9F5] hover:to-[#FFFBEB] border border-[#E2E8F0] hover:border-[#FEC401]/70 transition-all duration-150 shadow-xs hover:shadow-sm"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-xl bg-[#000B3B]/5 group-hover:bg-[#000B3B] text-[#000B3B] group-hover:text-[#FEC401] flex items-center justify-center shrink-0 transition-all duration-150 group-hover:scale-105">
                            <Landmark className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <span className="block text-xs font-bold text-[#0F172A] group-hover:text-[#000B3B] truncate">
                              Bhubaneswar Temple Circuit
                            </span>
                            <span className="block text-[10px] text-[#64748B] group-hover:text-[#000B3B]/80 font-medium truncate">
                              Lingaraj &bull; Mukteswar &bull; Rajarani &bull; Dhauli
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          <span className="text-[9.5px] text-[#9333EA] font-bold bg-[#F3E8FF] px-2 py-0.5 rounded-full border border-[#E9D5FF]/60">
                            Heritage Trail
                          </span>
                          <div className="w-6 h-6 rounded-lg bg-[#F1F5F9] group-hover:bg-[#000B3B] text-[#94A3B8] group-hover:text-[#FEC401] flex items-center justify-center transition-all duration-150">
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </Link>

                      {/* Clean Tour Action Button */}
                      <div className="pt-1">
                        <Link
                          href="/odisha-tour-package-by-cab"
                          onClick={() => setIsServicesOpen(false)}
                          className="w-full py-2.5 px-3.5 rounded-2xl bg-gradient-to-r from-[#000B3B] via-[#02146B] to-[#000B3B] text-white flex items-center justify-between text-xs font-bold hover:brightness-105 transition-all shadow-md group border border-white/10"
                        >
                          <span className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-[#FEC401]/20 flex items-center justify-center">
                              <Palmtree className="w-3 h-3 text-[#FEC401]" />
                            </div>
                            <span>Explore All Odisha Tour Packages</span>
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#FEC401] text-[#000B3B] text-[11px] font-black group-hover:scale-105 transition-all shadow-sm">
                            <span>View All</span>
                            <ArrowRight className="w-3 h-3 text-[#000B3B] group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Dropdown Trust Footer */}
                  <div className="mt-3 pt-2.5 border-t border-[#F1F5F9] flex items-center justify-between text-[10.5px] text-[#64748B] px-1">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                      <span>Commercial Fleet &bull; Verified Drivers</span>
                    </span>
                    <a
                      href={COMPANY_CONFIG.contact.whatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#02146B] hover:text-[#000B3B] font-semibold hover:underline flex items-center gap-1 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#16A34A]" />
                      <span>WhatsApp Desk</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* How It Works */}
            <Link
              href="/how-it-works"
              className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-colors ${
                pathname === "/how-it-works"
                  ? "text-[#FEC401] bg-white/10 font-bold shadow-xs"
                  : "text-[#FAF9F5]/90 hover:text-[#FEC401] hover:bg-white/10"
              }`}
            >
              How It Works
            </Link>

            {/* About Us */}
            <Link
              href="/about"
              className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-colors ${
                pathname === "/about"
                  ? "text-[#FEC401] bg-white/10 font-bold shadow-xs"
                  : "text-[#FAF9F5]/90 hover:text-[#FEC401] hover:bg-white/10"
              }`}
            >
              About Us
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-colors ${
                pathname === "/contact"
                  ? "text-[#FEC401] bg-white/10 font-bold shadow-xs"
                  : "text-[#FAF9F5]/90 hover:text-[#FEC401] hover:bg-white/10"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right Side Primary Tactile CTA (No Phone in Navbar) */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/book-cab"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-[#001162] bg-gradient-to-b from-[#FEC401] to-[#E5AD00] border-t border-white/40 shadow-skeuo-gold hover:brightness-105 transition-all duration-150 active:translate-y-0.5"
            >
              <span>Plan Your Journey</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#001162]" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/book-cab"
              className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold text-[#001162] bg-gradient-to-b from-[#FEC401] to-[#E5AD00] shadow-skeuo-gold"
            >
              Plan Trip
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-white bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mt-2.5 lg:hidden rounded-3xl border border-[#D5DDD5] bg-[#FAF9F5] p-5 space-y-3.5 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Mobile Drawer Brand Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E5EAE5]">
              <BrandLogo size="sm" variant="dark" />
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F1F5F9] text-[#02146B]">
                24/7 Dispatch
              </span>
            </div>

            {/* Mobile Booking Services Section with Sub-Dropdown */}
            <div className="space-y-2 pb-2.5 border-b border-[#E5EAE5]">
              {/* Book a Cab Expandable Container */}
              <div className="rounded-2xl border border-[#D5DDD5] bg-white overflow-hidden shadow-xs">
                <div className="p-3 bg-gradient-to-br from-[#02146B] to-[#000B3B] text-white flex items-center justify-between">
                  <Link
                    href="/book-cab"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 text-xs font-bold"
                  >
                    <Car className="w-4 h-4 text-[#FEC401]" />
                    <span>Book a Cab</span>
                    <span className="text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#FEC401] text-[#001162]">
                      Instant
                    </span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsMobileCabExpanded(!isMobileCabExpanded)}
                    className="p-1 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                    aria-label="Toggle Cab Submenu"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isMobileCabExpanded ? "rotate-180 text-[#FEC401]" : ""
                      }`}
                    />
                  </button>
                </div>

                {isMobileCabExpanded && (
                  <div className="p-2.5 bg-[#FAF9F5] space-y-1.5 border-t border-[#E5EAE5]">
                    <div className="text-[9.5px] font-bold uppercase tracking-wider text-[#02146B] px-1.5 py-0.5 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FEC401]" />
                      <span>Dedicated City Cab Services:</span>
                    </div>

                    {/* Bhubaneswar */}
                    <Link
                      href="/cab-service-in-bhubaneswar"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-2 rounded-xl bg-white hover:bg-[#F1F5F9] text-xs font-medium text-[#0F172A] border border-[#E2E8F0] transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <Building2 className="w-3.5 h-3.5 text-[#02146B]" />
                        <span className="font-semibold text-[11.5px]">Cab Service in Bhubaneswar</span>
                      </div>
                      <span className="text-[9px] text-[#02146B] font-bold bg-[#02146B]/10 px-1.5 py-0.5 rounded">
                        Airport
                      </span>
                    </Link>

                    {/* Cab in Puri */}
                    <Link
                      href="/cab-service-in-puri"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-2 rounded-xl bg-white hover:bg-[#F1F5F9] text-xs font-medium text-[#0F172A] border border-[#E2E8F0] transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <Landmark className="w-3.5 h-3.5 text-[#02146B]" />
                        <span className="font-semibold text-[11.5px]">Cab Service in Puri</span>
                      </div>
                      <span className="text-[9px] text-[#02146B] font-bold bg-[#02146B]/10 px-1.5 py-0.5 rounded">
                        Temple Hub
                      </span>
                    </Link>

                    {/* Taxi in Puri */}
                    <Link
                      href="/taxi-service-in-puri"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-2 rounded-xl bg-white hover:bg-[#F1F5F9] text-xs font-medium text-[#0F172A] border border-[#E2E8F0] transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <Train className="w-3.5 h-3.5 text-[#02146B]" />
                        <span className="font-semibold text-[11.5px]">Taxi Service in Puri</span>
                      </div>
                      <span className="text-[9px] text-[#02146B] font-bold bg-[#02146B]/10 px-1.5 py-0.5 rounded">
                        Station
                      </span>
                    </Link>

                    {/* Online Taxi in Cuttack */}
                    <Link
                      href="/book-online-taxi-in-cuttack"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-2 rounded-xl bg-white hover:bg-[#F1F5F9] text-xs font-medium text-[#0F172A] border border-[#E2E8F0] transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#02146B]" />
                        <span className="font-semibold text-[11.5px]">Book Online Taxi in Cuttack</span>
                      </div>
                      <span className="text-[9px] text-[#02146B] font-bold bg-[#02146B]/10 px-1.5 py-0.5 rounded">
                        Twin-City
                      </span>
                    </Link>

                    {/* Full Booking CTA */}
                    <Link
                      href="/book-cab"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-center gap-1.5 p-2 mt-1 rounded-xl bg-gradient-to-r from-[#02146B] to-[#000B3B] text-white text-[11px] font-bold"
                    >
                      <span>Open Full Cab Fare Calculator</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FEC401]" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Book a Tour Card */}
              <Link
                href="/book-tour"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-2xl bg-white border border-[#D5DDD5] text-[#02146B] flex items-center justify-between text-xs font-bold shadow-skeuo hover:bg-[#F8FAFC] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Palmtree className="w-4 h-4 text-[#FEC401]" />
                  <span>Book a Tour</span>
                  <span className="text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#E2E8F0] text-[#02146B]">
                    Circuits
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#02146B]" />
              </Link>
            </div>

            {/* Standard Mobile Links */}
            <div className="space-y-1">
              <Link
                href="/"
                className="block px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#0F172A] hover:bg-white"
              >
                Home
              </Link>



              <Link
                href="/how-it-works"
                className={`block px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                  pathname === "/how-it-works"
                    ? "text-[#02146B] bg-white font-bold"
                    : "text-[#0F172A] hover:bg-white"
                }`}
              >
                How It Works
              </Link>
              <Link
                href="/about"
                className="block px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#0F172A] hover:bg-white"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#0F172A] hover:bg-white"
              >
                Contact
              </Link>
            </div>

            <div className="pt-3 border-t border-[#E5EAE5] space-y-2.5">
              <a
                href={COMPANY_CONFIG.contact.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-2xl bg-gradient-to-b from-[#02146B] to-[#000B3B] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-skeuo-button"
              >
                <MessageSquare className="w-4 h-4 text-[#FEC401]" />
                <span>Chat on WhatsApp Concierge Desk</span>
              </a>
              <div className="text-center text-[11px] text-[#667575]">
                Helpline: {COMPANY_CONFIG.contact.phoneDisplay}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
