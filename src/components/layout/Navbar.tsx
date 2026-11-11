"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Car,
  Plane,
  Compass,
  Clock,
  Palmtree,
  Briefcase,
  ChevronDown,
  Menu,
  X,
  Phone,
  ArrowRight,
  ShieldCheck,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";
import { BrandLogo } from "@/components/common/BrandLogo";

interface ServiceMenuItem {
  title: string;
  slug: string;
  desc: string;
  icon: React.ReactNode;
}

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

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
  }, [pathname]);

  const serviceItems: ServiceMenuItem[] = [
    {
      title: "Airport Transfers",
      slug: "airport-transfers",
      desc: "Punctual BBI airport pickups and drops with flight radar tracking.",
      icon: <Plane className="w-4 h-4 text-[#073B3A]" />,
    },
    {
      title: "Local City Rides",
      slug: "local-city-rides",
      desc: "Scheduled point-to-point urban transit with zero cancellations.",
      icon: <Car className="w-4 h-4 text-[#073B3A]" />,
    },
    {
      title: "Outstation Cabs",
      slug: "outstation-cabs",
      desc: "One-way and round trips across all 30 Odisha districts.",
      icon: <Compass className="w-4 h-4 text-[#073B3A]" />,
    },
    {
      title: "Hourly Rentals",
      slug: "hourly-rentals",
      desc: "Flexible 4, 8, or 12-hour packages with chauffeur on standby.",
      icon: <Clock className="w-4 h-4 text-[#073B3A]" />,
    },
    {
      title: "Corporate Travel",
      slug: "corporate-travel",
      desc: "Executive mobility and event transport with GST invoice billing.",
      icon: <Briefcase className="w-4 h-4 text-[#073B3A]" />,
    },
    {
      title: "Odisha Tour Packages",
      slug: "odisha-tours",
      desc: "Golden Triangle, Puri darshan, and Chilika dolphin trails.",
      icon: <Palmtree className="w-4 h-4 text-[#073B3A]" />,
    },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 pt-2 sm:pt-3.5 px-3 sm:px-6 lg:px-8 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        {/* Floating Luxury Navigation Island (Dark Glass in Hero) */}
        <nav
          className="w-full bg-[#062F31]/85 backdrop-blur-xl rounded-2xl sm:rounded-full border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.15)] px-4 sm:px-7 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-200"
          aria-label="Main Navigation"
        >
          {/* Bespoke Luxury Brand Logo */}
          <Link
            href="/"
            className="focus:outline-none focus:ring-2 focus:ring-[#D9A52B] rounded-xl pr-2"
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
                  ? "text-[#D9A52B] bg-white/10 font-bold shadow-xs"
                  : "text-[#FAF9F5]/90 hover:text-[#D9A52B] hover:bg-white/10"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown (Contains Book a Cab & Book a Tour) */}
            <div className="relative" ref={dropdownRef}>
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
                className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all inline-flex items-center gap-1.5 ${
                  isServicesOpen ||
                  pathname.startsWith("/services") ||
                  pathname.startsWith("/book-cab") ||
                  pathname.startsWith("/book-tour")
                    ? "text-[#D9A52B] bg-white/10 font-bold shadow-xs"
                    : "text-[#FAF9F5]/90 hover:text-[#D9A52B] hover:bg-white/10"
                }`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180 text-[#D9A52B]" : "text-[#FAF9F5]/70"
                  }`}
                />
              </button>

              {/* Rich Concierge Dropdown Menu */}
              {isServicesOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-3.5 w-[92vw] sm:w-[620px] max-w-[620px] rounded-3xl bg-white shadow-[0_25px_60px_rgba(0,0,0,0.22),0_1px_0_rgba(255,255,255,0.9)_inset] border border-[#D5DDD5] p-5 animate-in fade-in zoom-in-95 duration-150 z-50 text-[#182A2B]"
                  role="menu"
                >
                  {/* Top Featured Booking Actions */}
                  <div className="grid grid-cols-2 gap-3 pb-4 mb-3.5 border-b border-[#E5EAE5]">
                    {/* Book a Cab Card */}
                    <Link
                      href="/book-cab"
                      onClick={() => setIsServicesOpen(false)}
                      className="p-3.5 rounded-2xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-white shadow-skeuo-button border-t border-white/20 hover:brightness-110 transition-all group flex items-start gap-3 text-left"
                      role="menuitem"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-[#D9A52B] group-hover:scale-105 transition-transform">
                        <Car className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-[#FAF9F5]">Book a Cab</span>
                          <span className="text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#D9A52B] text-[#062F31]">
                            Instant
                          </span>
                        </div>
                        <p className="text-[10px] text-[#E0ECEA]/85 mt-0.5 leading-snug">
                          Airport transfers, outstation highway trips &amp; city rides.
                        </p>
                      </div>
                    </Link>

                    {/* Book a Tour Card */}
                    <Link
                      href="/book-tour"
                      onClick={() => setIsServicesOpen(false)}
                      className="p-3.5 rounded-2xl bg-[#FAF9F5] hover:bg-[#F2F5F2] text-[#182A2B] shadow-skeuo border border-[#D5DDD5] hover:border-[#073B3A]/40 transition-all group flex items-start gap-3 text-left"
                      role="menuitem"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#073B3A] flex items-center justify-center shrink-0 text-[#D9A52B] group-hover:scale-105 transition-transform">
                        <Palmtree className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-[#182A2B] group-hover:text-[#073B3A]">
                            Book a Tour
                          </span>
                          <span className="text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#E0ECEA] text-[#073B3A]">
                            Circuits
                          </span>
                        </div>
                        <p className="text-[10px] text-[#667575] mt-0.5 leading-snug">
                          Puri, Konark, Chilika &amp; heritage itineraries.
                        </p>
                      </div>
                    </Link>
                  </div>

                  {/* Specialized Services Heading */}
                  <div className="flex items-center justify-between px-1 mb-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#667575] flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#D9A52B]" />
                      <span>Dedicated Mobility Verticals</span>
                    </span>
                    <Link
                      href="/services"
                      onClick={() => setIsServicesOpen(false)}
                      className="text-[11px] font-semibold text-[#073B3A] hover:underline inline-flex items-center gap-1"
                    >
                      <span>All Services Directory</span>
                      <ArrowRight className="w-3 h-3 text-[#D9A52B]" />
                    </Link>
                  </div>

                  {/* 6 Services Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    {serviceItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={
                          item.slug === "corporate-travel"
                            ? "/services#corporate"
                            : `/services/${item.slug}`
                        }
                        onClick={() => setIsServicesOpen(false)}
                        className="group p-2.5 rounded-xl hover:bg-[#F2F5F2] transition-colors border border-transparent hover:border-[#D5DDD5] flex items-start gap-2.5 text-left"
                        role="menuitem"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#FAF9F5] border border-[#E5EAE5] flex items-center justify-center shrink-0 group-hover:bg-[#073B3A] group-hover:text-white transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#182A2B] group-hover:text-[#073B3A]">
                            {item.title}
                          </div>
                          <p className="text-[11px] text-[#667575] line-clamp-1 mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Dropdown Footer */}
                  <div className="mt-3.5 pt-3 border-t border-[#F2F5F2] flex items-center justify-between text-[11px] text-[#667575] px-1">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#073B3A]" />
                      Verified Chauffeurs • Commercial Fleet
                    </span>
                    <a
                      href={COMPANY_CONFIG.contact.whatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#073B3A] font-semibold hover:underline flex items-center gap-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#D9A52B]" />
                      WhatsApp Concierge Desk
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Destinations */}
            <Link
              href="/#destinations"
              className="px-3.5 py-2 rounded-full text-xs font-semibold text-[#FAF9F5]/90 hover:text-[#D9A52B] hover:bg-white/10 transition-colors"
            >
              Destinations
            </Link>

            {/* About Us */}
            <Link
              href="/about"
              className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-colors ${
                pathname === "/about"
                  ? "text-[#D9A52B] bg-white/10 font-bold shadow-xs"
                  : "text-[#FAF9F5]/90 hover:text-[#D9A52B] hover:bg-white/10"
              }`}
            >
              About Us
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-colors ${
                pathname === "/contact"
                  ? "text-[#D9A52B] bg-white/10 font-bold shadow-xs"
                  : "text-[#FAF9F5]/90 hover:text-[#D9A52B] hover:bg-white/10"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right Side Primary Tactile CTA (No Phone in Navbar) */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/book-cab"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-[#062F31] bg-gradient-to-b from-[#E6B543] to-[#C99320] border-t border-white/40 shadow-skeuo-gold hover:brightness-105 transition-all duration-150 active:translate-y-0.5"
            >
              <span>Plan Your Journey</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#062F31]" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/book-cab"
              className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold text-[#062F31] bg-gradient-to-b from-[#E6B543] to-[#C99320] shadow-skeuo-gold"
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
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#E0ECEA] text-[#073B3A]">
                24/7 Dispatch
              </span>
            </div>

            {/* Quick Mobile Action Cards: Book a Cab & Book a Tour */}
            <div className="grid grid-cols-2 gap-2.5 pb-2.5 border-b border-[#E5EAE5]">
              <Link
                href="/book-cab"
                className="p-3 rounded-2xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-white flex items-center gap-2 text-xs font-bold shadow-skeuo-button"
              >
                <Car className="w-4 h-4 text-[#D9A52B]" />
                <span>Book a Cab</span>
              </Link>
              <Link
                href="/book-tour"
                className="p-3 rounded-2xl bg-white border border-[#D5DDD5] text-[#073B3A] flex items-center gap-2 text-xs font-bold shadow-skeuo"
              >
                <Palmtree className="w-4 h-4 text-[#D9A52B]" />
                <span>Book a Tour</span>
              </Link>
            </div>

            {/* Standard Mobile Links */}
            <div className="space-y-1">
              <Link
                href="/"
                className="block px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#182A2B] hover:bg-white"
              >
                Home
              </Link>

              {/* Services Mobile Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#182A2B] hover:bg-white"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 pr-2 py-2 space-y-2 border-l-2 border-[#073B3A]/30 ml-3 bg-white/70 rounded-r-2xl">
                    <Link
                      href="/services"
                      className="block py-1 text-xs font-bold text-[#073B3A]"
                    >
                      All Services Overview →
                    </Link>
                    {serviceItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={
                          item.slug === "corporate-travel"
                            ? "/services#corporate"
                            : `/services/${item.slug}`
                        }
                        className="block py-1 text-xs text-[#667575] hover:text-[#073B3A]"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/#destinations"
                className="block px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#182A2B] hover:bg-white"
              >
                Destinations
              </Link>
              <Link
                href="/about"
                className="block px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#182A2B] hover:bg-white"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#182A2B] hover:bg-white"
              >
                Contact
              </Link>
            </div>

            <div className="pt-3 border-t border-[#E5EAE5] space-y-2.5">
              <a
                href={COMPANY_CONFIG.contact.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-2xl bg-gradient-to-b from-[#084846] to-[#062F31] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-skeuo-button"
              >
                <MessageSquare className="w-4 h-4 text-[#D9A52B]" />
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
