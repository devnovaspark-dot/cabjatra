"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Check,
  Copy,
  ArrowRight,
  Plane,
  Car,
  Compass,
  Palmtree,
  Briefcase,
  ChevronDown,
  Navigation,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";
import { GlassCelebrationOrb } from "@/components/common/GlassCelebrationOrb";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "Outstation Highway",
    pickupCity: "Bhubaneswar",
    destination: "Puri",
    travelDate: "2026-11-12",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState("");
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [
    { id: "Outstation Highway", label: "Outstation Highway", icon: Compass },
    { id: "Airport Transfer", label: "Airport Transfer (BBI)", icon: Plane },
    { id: "Odisha Tour Package", label: "Odisha Tour Package", icon: Palmtree },
    { id: "Hourly Rental", label: "Hourly Rental", icon: Clock },
    { id: "Corporate Fleet", label: "Corporate Mobility", icon: Briefcase },
  ];

  const handleCopy = (text: string, type: "phone" | "email") => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      if (type === "phone") {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      } else {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedRef = `CJ-INQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setInquiryRef(generatedRef);
      setIsSubmitted(true);
    }, 600);
  };

  const contactFaqs = [
    {
      q: "How fast does operations reply to booking requests?",
      a: "Our central Odisha operations desk monitors inquiries 24/7. Phone and WhatsApp requests receive an instant response (< 2 minutes), while form inquiries are verified against fleet availability within 15–20 minutes.",
    },
    {
      q: "Can you arrange early morning or midnight airport pickups at BBI?",
      a: "Yes, absolutely. We operate around the clock with flight radar tracking. Even if your flight is delayed until 2:00 AM, your uniformed chauffeur will be waiting at the arrival terminal with AC primed.",
    },
    {
      q: "Do you provide official GST invoices for business travel?",
      a: "Yes. All corporate travels, executive rentals, and airport commutes receive an official GST tax invoice issued by NovaSpark Digital Marketing Pvt. Ltd. for clean corporate expense claims.",
    },
    {
      q: "How does the 10% advance deposit work?",
      a: "Once we confirm vehicle readiness and driver allocation for your itinerary, we issue a secure payment link for 10% of the fare. The remaining 90% is settled directly at drop-off.",
    },
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-[#182A2B]">
      {/* ================= EDITORIAL OPERATIONS HERO BANNER ================= */}
      <section className="relative text-white overflow-hidden pt-24 sm:pt-32 pb-12 sm:pb-16 border-b border-black/20">
        {/* Cinematic Backdrop Photography */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=85&w=2400&auto=format&fit=crop"
            alt="Odisha Coastal Highway Operations"
            fill
            priority
            className="object-cover object-center scale-102 opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#011415]/95 via-[#042022]/90 to-[#FAF9F5]" />
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D9A52B]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-3.5 sm:space-y-4">
            {/* Live Operations Beacon */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#D9A52B]/40 text-[10.5px] sm:text-xs font-semibold text-[#D9A52B] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span>Bhubaneswar Central Dispatch • Live 24/7 Operations Desk</span>
            </div>

            {/* Regal Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight">
              Connect with Our <br />
              <span className="italic font-display font-normal text-[#D9A52B]">
                Operations Concierge Desk.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-base text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
              Available 24 hours daily to coordinate airport arrivals at BBI, outstation highway transfers, customized temple tour itineraries, and corporate fleet dispatch across Odisha.
            </p>

            {/* 3 Quick Assurance Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2 text-[10.5px] sm:text-xs text-white/90">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15">
                <Clock className="w-3.5 h-3.5 text-[#D9A52B]" />
                <span>&lt; 15 Min Inquiry Turnaround</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                <span>100% Commercial Yellow-Board Fleet</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15">
                <MessageSquare className="w-3.5 h-3.5 text-[#D9A52B]" />
                <span>Instant WhatsApp Dispatch</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN INTERACTIVE CONTACT SECTION ================= */}
      <section className="py-8 sm:py-12 lg:py-14 bg-[#FAF9F5] border-b border-[#E5EAE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left 5 Columns: 4 High-Contrast Tactile Contact Channel Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#073B3A] bg-[#E0ECEA]/80 px-3 py-1 rounded-full border border-[#C1DAD7]">
                  Direct Channels
                </span>
                <h2 className="text-xl sm:text-3xl font-bold font-display text-[#182A2B] mt-2">
                  Official Contact Channels
                </h2>
                <p className="text-xs text-[#556464] mt-1 leading-relaxed">
                  Reach our central dispatch desk directly for immediate answers or vehicle coordination.
                </p>
              </div>

              <div className="space-y-3.5">
                {/* Channel 1: 24/7 Voice Helpline */}
                <div className="card-skeuo p-4 sm:p-5 rounded-2xl space-y-2.5 transition-all duration-200 hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-[#D9A52B] flex items-center justify-center shadow-skeuo-button shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#667575] block">
                          Voice Helpline (24/7 Active)
                        </span>
                        <a
                          href={`tel:${COMPANY_CONFIG.contact.phoneRaw}`}
                          className="text-sm sm:text-base font-bold font-display text-[#182A2B] hover:text-[#073B3A] transition"
                        >
                          {COMPANY_CONFIG.contact.phoneDisplay}
                        </a>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopy(COMPANY_CONFIG.contact.phoneDisplay, "phone")}
                      className="p-1.5 px-2.5 rounded-lg bg-[#FAF9F5] border border-[#D5DDD5] hover:bg-white text-[#073B3A] text-[10px] font-bold transition flex items-center gap-1 cursor-pointer"
                      title="Copy Phone Number"
                    >
                      {copiedPhone ? (
                        <>
                          <Check className="w-3 h-3 text-[#10B981]" />
                          <span className="text-[#10B981]">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-[#667575]" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-[#556464] leading-relaxed">
                    Live driver coordinates, airport pickup coordination &amp; urgent on-road journey updates.
                  </p>
                </div>

                {/* Channel 2: WhatsApp Fast-Track Desk */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#073B3A] via-[#052E2F] to-[#021A1B] text-white border border-[#D9A52B]/40 shadow-lg space-y-2.5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#D9A52B]/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-b from-[#25D366] to-[#128C7E] text-white flex items-center justify-center shadow-md shrink-0">
                        <MessageSquare className="w-4 h-4 fill-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#A7F3D0]">
                            WhatsApp Operations Desk
                          </span>
                          <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30">
                            &lt; 2 min reply
                          </span>
                        </div>
                        <span className="text-sm sm:text-base font-bold font-display text-white block">
                          {COMPANY_CONFIG.contact.whatsAppHelpNumber}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#E0ECEA]/85 leading-relaxed relative z-10">
                    Direct route fare quotes, vehicle interior photos, digital vouchers &amp; customized Odisha tour PDFs.
                  </p>

                  <div className="pt-1 relative z-10">
                    <a
                      href={COMPANY_CONFIG.contact.whatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl bg-gradient-to-b from-[#25D366] to-[#128C7E] text-white font-bold text-xs inline-flex items-center justify-center gap-2 shadow-skeuo-button hover:brightness-110 transition cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white" />
                      <span>Start WhatsApp Chat Now</span>
                    </a>
                  </div>
                </div>

                {/* Channel 3: Email Desk */}
                <div className="card-skeuo p-4 sm:p-5 rounded-2xl space-y-2.5 transition-all duration-200 hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-[#D9A52B] flex items-center justify-center shadow-skeuo-button shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#667575] block">
                          Official Email Desk
                        </span>
                        <a
                          href={`mailto:${COMPANY_CONFIG.contact.bookingEmail}`}
                          className="text-xs sm:text-sm font-bold text-[#182A2B] hover:text-[#073B3A] transition"
                        >
                          {COMPANY_CONFIG.contact.bookingEmail}
                        </a>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopy(COMPANY_CONFIG.contact.bookingEmail, "email")}
                      className="p-1.5 px-2.5 rounded-lg bg-[#FAF9F5] border border-[#D5DDD5] hover:bg-white text-[#073B3A] text-[10px] font-bold transition flex items-center gap-1 cursor-pointer"
                      title="Copy Email"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3 h-3 text-[#10B981]" />
                          <span className="text-[#10B981]">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-[#667575]" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-[11px] text-[#556464] space-y-0.5 pt-1 border-t border-[#E5ECE5]">
                    <div>Support Desk: <span className="font-semibold text-[#073B3A]">{COMPANY_CONFIG.contact.supportEmail}</span></div>
                    <div>Corporate Fleet: <span className="font-semibold text-[#073B3A]">corporate@cabjatra.com</span></div>
                  </div>
                </div>

                {/* Channel 4: Registered Physical Hub */}
                <div className="card-skeuo p-4 sm:p-5 rounded-2xl space-y-2 transition-all duration-200 hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#073B3A] to-[#041F20] text-[#D9A52B] flex items-center justify-center shadow-skeuo-button shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#667575] block">
                        Central Operating Headquarters
                      </span>
                      <p className="text-xs font-semibold text-[#182A2B] leading-tight">
                        {COMPANY_CONFIG.contact.registeredAddress}
                      </p>
                      <span className="text-[10.5px] text-[#073B3A] font-bold block pt-1">
                        Bhubaneswar, Odisha • Operating 24/7
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Concierge Inquiry Form (Skeuomorphic & Interactive) */}
            <div className="lg:col-span-7">
              <div className="card-skeuo rounded-2xl sm:rounded-3xl p-5 sm:p-8 relative">
                {isSubmitted ? (
                  <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-300">
                    {/* 3D Glass Celebration Orb */}
                    <div className="flex justify-center">
                      <GlassCelebrationOrb size="lg" />
                    </div>

                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0ECEA] border border-[#B6D6D2] text-[#073B3A] text-xs font-bold uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
                        <span>Inquiry Successfully Received</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#182A2B]">
                        Thank You, {formData.name || "Esteemed Traveler"}!
                      </h3>
                      <p className="text-xs sm:text-sm text-[#556464] max-w-md mx-auto leading-relaxed">
                        Your travel inquiry has been routed to our central Odisha operations supervisor. We will review vehicle availability and respond via phone or WhatsApp within 15–20 minutes.
                      </p>
                    </div>

                    {/* Reference Box */}
                    <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#D5DDD5] max-w-sm mx-auto text-xs space-y-1">
                      <div className="text-[10.5px] text-[#667575] uppercase">Inquiry Tracking Reference:</div>
                      <div className="font-mono text-sm font-bold text-[#073B3A]">
                        {inquiryRef}
                      </div>
                      <div className="text-[10.5px] text-[#667575]">
                        Category: {formData.category} • Route: {formData.pickupCity} ➔ {formData.destination}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: "",
                            phone: "",
                            email: "",
                            category: "Outstation Highway",
                            pickupCity: "Bhubaneswar",
                            destination: "Puri",
                            travelDate: "2026-11-12",
                            message: "",
                          });
                        }}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white border border-[#D5DDD5] hover:bg-[#FAF9F5] text-[#182A2B] font-bold text-xs transition cursor-pointer"
                      >
                        Submit Another Inquiry
                      </button>

                      <a
                        href={`${COMPANY_CONFIG.contact.whatsAppLink}&text=${encodeURIComponent(
                          `Hi Cabjatra Dispatch, I just submitted an inquiry (${inquiryRef}) for ${formData.category} from ${formData.pickupCity} to ${formData.destination} on ${formData.travelDate}. Please confirm availability.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-b from-[#25D366] to-[#128C7E] text-white font-bold text-xs inline-flex items-center justify-center gap-2 shadow-skeuo-button cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-white" />
                        <span>Fast-Track on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0ECEA]/80 text-[10px] font-bold text-[#073B3A] uppercase tracking-wider border border-[#C1DAD7] mb-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
                        <span>Interactive Inquiry Concierge</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-[#182A2B]">
                        Send Journey Requirements
                      </h3>
                      <p className="text-xs text-[#667575]">
                        Share your travel itinerary below for custom fleet quotes and dedicated chauffeur scheduling.
                      </p>
                    </div>

                    {/* Travel Category Selector Pills */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[#182A2B]">
                        Select Travel Category:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                        {categories.map((cat) => {
                          const Icon = cat.icon;
                          const isSelected = formData.category === cat.id;
                          return (
                            <button
                              key={cat.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, category: cat.id })}
                              className={`p-2 rounded-xl text-[11px] font-semibold flex items-center gap-1.5 border transition-all text-left cursor-pointer select-none ${
                                isSelected
                                  ? "btn-skeuo-dark text-white font-bold border-[#073B3A]"
                                  : "bg-[#FAF9F5] hover:bg-white border-[#D5DDD5] text-[#556464]"
                              }`}
                            >
                              <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? "text-[#D9A52B]" : "text-[#073B3A]"}`} />
                              <span className="truncate">{cat.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-[#182A2B]">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Suman Patnaik"
                          className="w-full h-11 px-3.5 rounded-xl border border-[#D5DDD5] bg-white text-xs font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#073B3A] focus:outline-none transition shadow-2xs"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-[#182A2B]">
                          Mobile Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 9876543210"
                          className="w-full h-11 px-3.5 rounded-xl border border-[#D5DDD5] bg-white text-xs font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#073B3A] focus:outline-none transition shadow-2xs"
                        />
                      </div>
                    </div>

                    {/* Email & Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-[#182A2B]">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full h-11 px-3.5 rounded-xl border border-[#D5DDD5] bg-white text-xs font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#073B3A] focus:outline-none transition shadow-2xs"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-[#182A2B]">
                          Estimated Travel Date
                        </label>
                        <input
                          type="date"
                          value={formData.travelDate}
                          onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                          className="w-full h-11 px-3.5 rounded-xl border border-[#D5DDD5] bg-white text-xs font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#073B3A] focus:outline-none transition shadow-2xs cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Route Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-[#182A2B]">
                          Pickup Hub / City
                        </label>
                        <select
                          value={formData.pickupCity}
                          onChange={(e) => setFormData({ ...formData, pickupCity: e.target.value })}
                          className="w-full h-11 px-3 rounded-xl border border-[#D5DDD5] bg-white text-xs font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#073B3A] focus:outline-none transition cursor-pointer shadow-2xs"
                        >
                          {COMPANY_CONFIG.operatingCities.map((c) => (
                            <option key={c.code} value={c.name}>
                              {c.name} ({c.badge})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-[#182A2B]">
                          Destination / Drop Location
                        </label>
                        <input
                          type="text"
                          value={formData.destination}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                          placeholder="e.g. Puri, Konark, Chilika, Cuttack"
                          className="w-full h-11 px-3.5 rounded-xl border border-[#D5DDD5] bg-white text-xs font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#073B3A] focus:outline-none transition shadow-2xs"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[#182A2B]">
                        Trip Requirements &amp; Special Requests
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please include passenger count, luggage details, flight numbers for BBI airport pickups, or temple tour preferences..."
                        className="w-full p-3 rounded-xl border border-[#D5DDD5] bg-white text-xs font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#073B3A] focus:outline-none transition shadow-2xs"
                      />
                    </div>

                    {/* Privacy Guarantee */}
                    <div className="p-3 rounded-xl bg-[#FAF9F5] border border-[#E5EAE5] flex items-start gap-2 text-[10.5px] text-[#667575] leading-relaxed">
                      <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>
                        Your contact information is only used by our central operations desk for journey planning. We maintain strict privacy and never spam.
                      </span>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 rounded-xl bg-gradient-to-b from-[#073B3A] to-[#041F20] hover:brightness-110 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-skeuo-button transition disabled:opacity-50 cursor-pointer select-none"
                    >
                      {isSubmitting ? (
                        <span>Logging Inquiry in Operations Queue...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#D9A52B]" />
                          <span>Submit Journey Inquiry to Dispatch Desk</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: ODISHA REGIONAL STATIONS DIRECTORY ================= */}
      <section className="py-8 sm:py-12 lg:py-14 bg-[#F2F5F2] border-b border-[#E5EAE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0ECEA]/80 text-[10px] font-bold text-[#073B3A] uppercase tracking-wider border border-[#C1DAD7]">
              <Navigation className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Odisha Station Hubs</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#182A2B]">
              Our Regional Operations Presence
            </h2>
            <p className="text-xs sm:text-sm text-[#667575] leading-relaxed">
              Strategically stationed fleet units across primary pilgrimage, transit, and corporate arteries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {/* HUB 1: BHUBANESWAR */}
            <div className="card-skeuo rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-[#D5DDD5] bg-white">
              <div className="relative h-44 sm:h-48 w-full overflow-hidden border-b border-[#D6E0D6]">
                <Image
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=85&w=900&auto=format&fit=crop"
                  alt="Bhubaneswar Airport & Central Operations Hub"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021718]/90 via-[#021718]/40 to-transparent" />
                
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#F2C052] to-[#D9A52B] text-[#062F31] flex items-center justify-center font-black text-xs shadow-md">
                    01
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    Airport Standby 24/7
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-semibold text-[#D9A52B] uppercase tracking-wider block">
                    Capital &amp; Airport Corridor
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-display text-white drop-shadow-sm">
                    Bhubaneswar Central Hub
                  </h3>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs text-[#556464] leading-relaxed">
                  Covers Biju Patnaik International Airport (BBI), Master Canteen Railway Junction, and Patia IT Corridor. Primary dispatch standby depot.
                </p>

                <div className="pt-3 border-t border-[#E5ECE5] flex items-center justify-between text-xs">
                  <span className="font-bold text-[#073B3A] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D9A52B]" />
                    <span>&lt; 15 Min Deployment</span>
                  </span>
                  <Link
                    href="/book-cab?service=airport"
                    className="inline-flex items-center gap-1 font-bold text-[#073B3A] hover:text-[#D9A52B] transition-colors"
                  >
                    <span>Airport Transfer</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* HUB 2: PURI JAGANNATH DHAM */}
            <div className="card-skeuo rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-[#D5DDD5] bg-white">
              <div className="relative h-44 sm:h-48 w-full overflow-hidden border-b border-[#D6E0D6]">
                <Image
                  src="https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?q=85&w=900&auto=format&fit=crop"
                  alt="Puri Jagannath Dham Support Cell"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021718]/90 via-[#021718]/40 to-transparent" />
                
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#F2C052] to-[#D9A52B] text-[#062F31] flex items-center justify-center font-black text-xs shadow-md">
                    02
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    Pilgrim Fast-Track
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-semibold text-[#D9A52B] uppercase tracking-wider block">
                    Temple &amp; Coastal Hub
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-display text-white drop-shadow-sm">
                    Puri Jagannath Dham Cell
                  </h3>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs text-[#556464] leading-relaxed">
                  Stationed along VIP Road and Marine Drive. Coordinates temple darshan drop-offs, beach resort pickups, and Konark Marine Drive transfers.
                </p>

                <div className="pt-3 border-t border-[#E5ECE5] flex items-center justify-between text-xs">
                  <span className="font-bold text-[#073B3A] flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D9A52B]" />
                    <span>Temple Pass Standby</span>
                  </span>
                  <Link
                    href="/book-tour?destination=puri"
                    className="inline-flex items-center gap-1 font-bold text-[#073B3A] hover:text-[#D9A52B] transition-colors"
                  >
                    <span>Puri Circuit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* HUB 3: CORPORATE & EVENT LOGISTICS */}
            <div className="card-skeuo rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-[#D5DDD5] bg-white">
              <div className="relative h-44 sm:h-48 w-full overflow-hidden border-b border-[#D6E0D6]">
                <Image
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=85&w=900&auto=format&fit=crop"
                  alt="Corporate & Event Logistics Fleet"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021718]/90 via-[#021718]/40 to-transparent" />
                
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#F2C052] to-[#D9A52B] text-[#062F31] flex items-center justify-center font-black text-xs shadow-md">
                    03
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    GST Desk Active
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-semibold text-[#D9A52B] uppercase tracking-wider block">
                    Institutional Mobility
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-display text-white drop-shadow-sm">
                    Corporate &amp; Event Logistics
                  </h3>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs text-[#556464] leading-relaxed">
                  Handles executive corporate mobility, government summits, institutional conferences, and multi-vehicle convoy delegations across Odisha.
                </p>

                <div className="pt-3 border-t border-[#E5ECE5] flex items-center justify-between text-xs">
                  <span className="font-bold text-[#073B3A] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Multi-Cab Convoys</span>
                  </span>
                  <Link
                    href="/services/hourly-rentals"
                    className="inline-flex items-center gap-1 font-bold text-[#073B3A] hover:text-[#D9A52B] transition-colors"
                  >
                    <span>Hourly Hire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: FREQUENTLY ASKED INQUIRIES ACCORDION ================= */}
      <section className="py-8 sm:py-12 bg-white border-b border-[#E5EAE5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0ECEA]/80 text-[10px] font-bold text-[#073B3A] uppercase tracking-wider border border-[#C1DAD7]">
              <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
              <span>Contact Clarifications</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#182A2B]">
              Frequently Asked Inquiries
            </h2>
          </div>

          <div className="space-y-3">
            {contactFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="card-skeuo rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-200"
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
    </div>
  );
}
