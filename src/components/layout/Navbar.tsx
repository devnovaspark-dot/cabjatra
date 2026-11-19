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

              {/* Luxury Booking Services Mega-Dropdown */}
              {isServicesOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2.5 w-[94vw] sm:w-[620px] md:w-[660px] max-w-[660px] rounded-3xl bg-white shadow-[0_25px_70px_rgba(0,11,59,0.25),0_0_0_1px_rgba(0,11,59,0.06)] border border-[#E2E8F0] p-4 sm:p-5 animate-in fade-in slide-in-from-top-1.5 duration-150 z-50 text-[#0F172A] before:absolute before:-top-3.5 before:inset-x-0 before:h-3.5 before:content-['']"
                  role="menu"
                >
                  {/* Executive Segmented Tab Switcher */}
                  <div className="flex items-center p-1 rounded-2xl bg-[#F1F5F9] border border-[#E2E8F0]">
                    <button
                      type="button"
                      onMouseEnter={() => setServicesTab("cab")}
                      onClick={() => setServicesTab("cab")}
                      className={`flex-1 py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl text-xs font-bold transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer ${
                        servicesTab === "cab"
                          ? "bg-[#000B3B] text-white shadow-md ring-1 ring-[#FEC401]/40"
                          : "text-[#475569] hover:text-[#0F172A] hover:bg-white/60"
                      }`}
                      role="tab"
                      aria-selected={servicesTab === "cab"}
                    >
                      <Car
                        className={`w-4 h-4 ${
                          servicesTab === "cab" ? "text-[#FEC401]" : "text-[#64748B]"
                        }`}
                      />
                      <span>City Cabs &amp; Outstation</span>
                      <span
                        className={`text-[8.5px] uppercase tracking-wider px-1.5 py-0.5 rounded font-extrabold ${
                          servicesTab === "cab"
                            ? "bg-[#FEC401] text-[#001162]"
                            : "bg-[#E2E8F0] text-[#475569]"
                        }`}
                      >
                        Instant
                      </span>
                    </button>

                    <button
                      type="button"
                      onMouseEnter={() => setServicesTab("tour")}
                      onClick={() => setServicesTab("tour")}
                      className={`flex-1 py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl text-xs font-bold transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer ${
                        servicesTab === "tour"
                          ? "bg-[#000B3B] text-white shadow-md ring-1 ring-[#FEC401]/40"
                          : "text-[#475569] hover:text-[#0F172A] hover:bg-white/60"
                      }`}
                      role="tab"
                      aria-selected={servicesTab === "tour"}
                    >
                      <Palmtree
                        className={`w-4 h-4 ${
                          servicesTab === "tour" ? "text-[#FEC401]" : "text-[#64748B]"
                        }`}
                      />
                      <span>Curated Tour Circuits</span>
                      <span
                        className={`text-[8.5px] uppercase tracking-wider px-1.5 py-0.5 rounded font-extrabold ${
                          servicesTab === "tour"
                            ? "bg-[#FEC401] text-[#001162]"
                            : "bg-[#E2E8F0] text-[#475569]"
                        }`}
                      >
                        Circuits
                      </span>
                    </button>
                  </div>

                  {/* Tab 1: City Cab & Taxi Services */}
                  {servicesTab === "cab" && (
                    <div className="pt-3.5 space-y-3">
                      <div className="flex items-center justify-between text-[11px] px-1">
                        <span className="font-bold text-[#000B3B] uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16A34A] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16A34A]" />
                          </span>
                          <span>Popular City Cab &amp; Taxi Services</span>
                        </span>
                        <Link
                          href="/book-cab"
                          onClick={() => setIsServicesOpen(false)}
                          className="text-[#02146B] hover:text-[#000B3B] font-bold transition-colors inline-flex items-center gap-1 text-[11px] group"
                        >
                          <span>Open Fare Calculator</span>
                          <ArrowRight className="w-3 h-3 text-[#FEC401] group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>

                      {/* 4 Sleek City Cab Cards (2x2 Grid) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {/* 1. Cab Service in Bhubaneswar */}
                        <Link
                          href="/cab-service-in-bhubaneswar"
                          onClick={() => setIsServicesOpen(false)}
                          className="group p-3 rounded-2xl bg-[#FAFAFA] hover:bg-white border border-[#E2E8F0] hover:border-[#FEC401] hover:shadow-[0_8px_20px_-6px_rgba(0,11,59,0.12)] transition-all duration-200 flex items-start gap-3 text-left"
                          role="menuitem"
                        >
                          <div className="w-9 h-9 rounded-xl bg-[#000B3B]/5 group-hover:bg-[#000B3B] text-[#000B3B] group-hover:text-[#FEC401] flex items-center justify-center shrink-0 transition-colors duration-200 mt-0.5 border border-[#E2E8F0] group-hover:border-[#000B3B]">
                            <Building2 className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-[#0F172A] group-hover:text-[#000B3B] transition-colors truncate">
                                Cab Service in Bhubaneswar
                              </span>
                              <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#000B3B] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                            </div>
                            <p className="text-[11px] text-[#64748B] mt-0.5 leading-snug">
                              BBI Airport pickups, Patia IT &amp; outstation
                            </p>
                            <div className="mt-1.5 flex items-center gap-1.5">
                              <span className="text-[9px] font-semibold text-[#000B3B] bg-[#000B3B]/5 px-2 py-0.5 rounded-md">
                                Airport &bull; Patia &bull; City
                              </span>
                              <span className="text-[9px] text-[#16A34A] font-semibold flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" /> Live
                              </span>
                            </div>
                          </div>
                        </Link>

                        {/* 2. Cab Service in Puri */}
                        <Link
                          href="/cab-service-in-puri"
                          onClick={() => setIsServicesOpen(false)}
                          className="group p-3 rounded-2xl bg-[#FAFAFA] hover:bg-white border border-[#E2E8F0] hover:border-[#FEC401] hover:shadow-[0_8px_20px_-6px_rgba(0,11,59,0.12)] transition-all duration-200 flex items-start gap-3 text-left"
                          role="menuitem"
                        >
                          <div className="w-9 h-9 rounded-xl bg-[#000B3B]/5 group-hover:bg-[#000B3B] text-[#000B3B] group-hover:text-[#FEC401] flex items-center justify-center shrink-0 transition-colors duration-200 mt-0.5 border border-[#E2E8F0] group-hover:border-[#000B3B]">
                            <Landmark className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-[#0F172A] group-hover:text-[#000B3B] transition-colors truncate">
                                Cab Service in Puri
                              </span>
                              <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#000B3B] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                            </div>
                            <p className="text-[11px] text-[#64748B] mt-0.5 leading-snug">
                              Jagannath Temple corridor &amp; Marine Drive
                            </p>
                            <div className="mt-1.5 flex items-center gap-1.5">
                              <span className="text-[9px] font-semibold text-[#000B3B] bg-[#000B3B]/5 px-2 py-0.5 rounded-md">
                                Temple Corridor &bull; Coastal
                              </span>
                              <span className="text-[9px] text-[#16A34A] font-semibold flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" /> Live
                              </span>
                            </div>
                          </div>
                        </Link>

                        {/* 3. Taxi Service in Puri */}
                        <Link
                          href="/taxi-service-in-puri"
                          onClick={() => setIsServicesOpen(false)}
                          className="group p-3 rounded-2xl bg-[#FAFAFA] hover:bg-white border border-[#E2E8F0] hover:border-[#FEC401] hover:shadow-[0_8px_20px_-6px_rgba(0,11,59,0.12)] transition-all duration-200 flex items-start gap-3 text-left"
                          role="menuitem"
                        >
                          <div className="w-9 h-9 rounded-xl bg-[#000B3B]/5 group-hover:bg-[#000B3B] text-[#000B3B] group-hover:text-[#FEC401] flex items-center justify-center shrink-0 transition-colors duration-200 mt-0.5 border border-[#E2E8F0] group-hover:border-[#000B3B]">
                            <Train className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-[#0F172A] group-hover:text-[#000B3B] transition-colors truncate">
                                Taxi Service in Puri
                              </span>
                              <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#000B3B] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                            </div>
                            <p className="text-[11px] text-[#64748B] mt-0.5 leading-snug">
                              Puri Railway Station transfers &amp; sightseeing
                            </p>
                            <div className="mt-1.5 flex items-center gap-1.5">
                              <span className="text-[9px] font-semibold text-[#000B3B] bg-[#000B3B]/5 px-2 py-0.5 rounded-md">
                                Station Pickup &bull; Sightseeing
                              </span>
                              <span className="text-[9px] text-[#16A34A] font-semibold flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" /> Live
                              </span>
                            </div>
                          </div>
                        </Link>

                        {/* 4. Book Online Taxi in Cuttack */}
                        <Link
                          href="/book-online-taxi-in-cuttack"
                          onClick={() => setIsServicesOpen(false)}
                          className="group p-3 rounded-2xl bg-[#FAFAFA] hover:bg-white border border-[#E2E8F0] hover:border-[#FEC401] hover:shadow-[0_8px_20px_-6px_rgba(0,11,59,0.12)] transition-all duration-200 flex items-start gap-3 text-left"
                          role="menuitem"
                        >
                          <div className="w-9 h-9 rounded-xl bg-[#000B3B]/5 group-hover:bg-[#000B3B] text-[#000B3B] group-hover:text-[#FEC401] flex items-center justify-center shrink-0 transition-colors duration-200 mt-0.5 border border-[#E2E8F0] group-hover:border-[#000B3B]">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-[#0F172A] group-hover:text-[#000B3B] transition-colors truncate">
                                Book Online Taxi in Cuttack
                              </span>
                              <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#000B3B] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                            </div>
                            <p className="text-[11px] text-[#64748B] mt-0.5 leading-snug">
                              High Court, SCB Medical &amp; NH-16 express
                            </p>
                            <div className="mt-1.5 flex items-center gap-1.5">
                              <span className="text-[9px] font-semibold text-[#000B3B] bg-[#000B3B]/5 px-2 py-0.5 rounded-md">
                                Twin-City NH-16 &bull; SCB
                              </span>
                              <span className="text-[9px] text-[#16A34A] font-semibold flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" /> Live
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>

                      {/* Clean Outstation Action Strip */}
                      <div className="pt-1">
                        <Link
                          href="/book-cab"
                          onClick={() => setIsServicesOpen(false)}
                          className="w-full p-2.5 sm:p-3 rounded-2xl bg-gradient-to-r from-[#000B3B] via-[#02146B] to-[#000B3B] text-white flex items-center justify-between transition-all hover:brightness-110 shadow-sm group"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#FEC401] shrink-0">
                              <Car className="w-3.5 h-3.5" />
                            </div>
                            <div className="min-w-0">
                              <span className="block text-xs font-bold text-white truncate">
                                Need custom outstation travel or one-way drop?
                              </span>
                              <span className="block text-[10px] text-white/75 truncate">
                                Lock any route across Odisha with 10% advance &bull; Zero surge pricing
                              </span>
                            </div>
                          </div>
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-[#FEC401] text-[#001162] text-[11px] font-bold shrink-0 ml-2 group-hover:bg-white transition-colors">
                            <span>Book Now</span>
                            <ArrowRight className="w-3 h-3 text-[#001162]" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Curated Tour Circuits */}
                  {servicesTab === "tour" && (
                    <div className="pt-3.5 space-y-3">
                      <div className="flex items-center justify-between text-[11px] px-1">
                        <span className="font-bold text-[#000B3B] uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FEC401] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FEC401]" />
                          </span>
                          <span>Curated Odisha Sightseeing Circuits</span>
                        </span>
                        <Link
                          href="/book-tour"
                          onClick={() => setIsServicesOpen(false)}
                          className="text-[#02146B] hover:text-[#000B3B] font-bold transition-colors inline-flex items-center gap-1 text-[11px] group"
                        >
                          <span>Browse All Circuits</span>
                          <ArrowRight className="w-3 h-3 text-[#FEC401] group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>

                      {/* 4 Sleek Tour Cards (2x2 Grid) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <Link
                          href="/book-tour?destination=konark"
                          onClick={() => setIsServicesOpen(false)}
                          className="group p-3 rounded-2xl bg-[#FAFAFA] hover:bg-white border border-[#E2E8F0] hover:border-[#FEC401] hover:shadow-[0_8px_20px_-6px_rgba(0,11,59,0.12)] transition-all duration-200 flex items-start gap-3 text-left"
                        >
                          <div className="w-9 h-9 rounded-xl bg-[#000B3B]/5 group-hover:bg-[#000B3B] text-[#000B3B] group-hover:text-[#FEC401] flex items-center justify-center shrink-0 transition-colors duration-200 mt-0.5 border border-[#E2E8F0] group-hover:border-[#000B3B]">
                            <Sparkles className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-[#0F172A] group-hover:text-[#000B3B] transition-colors truncate">
                                Konark Sun Temple &amp; Beach
                              </span>
                              <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#000B3B] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                            </div>
                            <p className="text-[11px] text-[#64748B] mt-0.5 leading-snug">
                              Chandrabhaga, Ramachandi &amp; UNESCO site
                            </p>
                            <div className="mt-1.5 flex items-center gap-1.5">
                              <span className="text-[9px] font-semibold text-[#000B3B] bg-[#000B3B]/5 px-2 py-0.5 rounded-md">
                                Marine Drive Circuit
                              </span>
                              <span className="text-[9px] text-[#D97706] font-semibold">
                                ★ Most Popular
                              </span>
                            </div>
                          </div>
                        </Link>

                        <Link
                          href="/book-tour?destination=chilika"
                          onClick={() => setIsServicesOpen(false)}
                          className="group p-3 rounded-2xl bg-[#FAFAFA] hover:bg-white border border-[#E2E8F0] hover:border-[#FEC401] hover:shadow-[0_8px_20px_-6px_rgba(0,11,59,0.12)] transition-all duration-200 flex items-start gap-3 text-left"
                        >
                          <div className="w-9 h-9 rounded-xl bg-[#000B3B]/5 group-hover:bg-[#000B3B] text-[#000B3B] group-hover:text-[#FEC401] flex items-center justify-center shrink-0 transition-colors duration-200 mt-0.5 border border-[#E2E8F0] group-hover:border-[#000B3B]">
                            <Palmtree className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-[#0F172A] group-hover:text-[#000B3B] transition-colors truncate">
                                Chilika Lake &amp; Dolphin Safari
                              </span>
                              <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#000B3B] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                            </div>
                            <p className="text-[11px] text-[#64748B] mt-0.5 leading-snug">
                              Satapada dolphin boat point &amp; sea mouth
                            </p>
                            <div className="mt-1.5 flex items-center gap-1.5">
                              <span className="text-[9px] font-semibold text-[#000B3B] bg-[#000B3B]/5 px-2 py-0.5 rounded-md">
                                Eco Wildlife Safari
                              </span>
                              <span className="text-[9px] text-[#0284C7] font-semibold">
                                Lagoon Cruise
                              </span>
                            </div>
                          </div>
                        </Link>

                        <Link
                          href="/book-tour?destination=temple"
                          onClick={() => setIsServicesOpen(false)}
                          className="group p-3 rounded-2xl bg-[#FAFAFA] hover:bg-white border border-[#E2E8F0] hover:border-[#FEC401] hover:shadow-[0_8px_20px_-6px_rgba(0,11,59,0.12)] transition-all duration-200 flex items-start gap-3 text-left"
                        >
                          <div className="w-9 h-9 rounded-xl bg-[#000B3B]/5 group-hover:bg-[#000B3B] text-[#000B3B] group-hover:text-[#FEC401] flex items-center justify-center shrink-0 transition-colors duration-200 mt-0.5 border border-[#E2E8F0] group-hover:border-[#000B3B]">
                            <Landmark className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-[#0F172A] group-hover:text-[#000B3B] transition-colors truncate">
                                Bhubaneswar Temple Circuit
                              </span>
                              <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#000B3B] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                            </div>
                            <p className="text-[11px] text-[#64748B] mt-0.5 leading-snug">
                              Lingaraj, Rajarani, Mukteshwar &amp; Dhauli
                            </p>
                            <div className="mt-1.5 flex items-center gap-1.5">
                              <span className="text-[9px] font-semibold text-[#000B3B] bg-[#000B3B]/5 px-2 py-0.5 rounded-md">
                                Sacred Heritage
                              </span>
                              <span className="text-[9px] text-[#7C3AED] font-semibold">
                                Full Day Trail
                              </span>
                            </div>
                          </div>
                        </Link>

                        <Link
                          href="/book-tour?destination=golden-triangle"
                          onClick={() => setIsServicesOpen(false)}
                          className="group p-3 rounded-2xl bg-[#FAFAFA] hover:bg-white border border-[#E2E8F0] hover:border-[#FEC401] hover:shadow-[0_8px_20px_-6px_rgba(0,11,59,0.12)] transition-all duration-200 flex items-start gap-3 text-left"
                        >
                          <div className="w-9 h-9 rounded-xl bg-[#000B3B]/5 group-hover:bg-[#000B3B] text-[#000B3B] group-hover:text-[#FEC401] flex items-center justify-center shrink-0 transition-colors duration-200 mt-0.5 border border-[#E2E8F0] group-hover:border-[#000B3B]">
                            <Building2 className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-[#0F172A] group-hover:text-[#000B3B] transition-colors truncate">
                                Odisha Golden Triangle
                              </span>
                              <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#000B3B] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                            </div>
                            <p className="text-[11px] text-[#64748B] mt-0.5 leading-snug">
                              3-Day Bhubaneswar, Puri &amp; Konark circuit
                            </p>
                            <div className="mt-1.5 flex items-center gap-1.5">
                              <span className="text-[9px] font-semibold text-[#000B3B] bg-[#000B3B]/5 px-2 py-0.5 rounded-md">
                                Complete Circuit
                              </span>
                              <span className="text-[9px] text-[#16A34A] font-semibold">
                                Multi-Day Tour
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>

                      {/* Clean Tour Action Strip */}
                      <div className="pt-1">
                        <Link
                          href="/book-tour"
                          onClick={() => setIsServicesOpen(false)}
                          className="w-full p-2.5 sm:p-3 rounded-2xl bg-gradient-to-r from-[#000B3B] via-[#02146B] to-[#000B3B] text-white flex items-center justify-between transition-all hover:brightness-110 shadow-sm group"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#FEC401] shrink-0">
                              <Palmtree className="w-3.5 h-3.5" />
                            </div>
                            <div className="min-w-0">
                              <span className="block text-xs font-bold text-white truncate">
                                Want a custom pilgrimage or family holiday circuit?
                              </span>
                              <span className="block text-[10px] text-white/75 truncate">
                                Professional chauffeurs with sacred temple parking expertise
                              </span>
                            </div>
                          </div>
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-[#FEC401] text-[#001162] text-[11px] font-bold shrink-0 ml-2 group-hover:bg-white transition-colors">
                            <span>Plan Tour</span>
                            <ArrowRight className="w-3 h-3 text-[#001162]" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Dropdown Trust Footer */}
                  <div className="mt-3.5 pt-3 border-t border-[#F1F5F9] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#64748B] px-1">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                      <span>100% Commercial Yellow-Board Fleet &bull; Verified Drivers</span>
                    </span>
                    <a
                      href={COMPANY_CONFIG.contact.whatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#02146B] hover:text-[#000B3B] font-semibold hover:underline flex items-center gap-1 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#16A34A]" />
                      <span>WhatsApp Concierge (Fast Response)</span>
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
