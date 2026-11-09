"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Cab Booking Inquiry",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#041F20] via-[#062F31] to-[#041F20] text-white pt-28 sm:pt-36 pb-16 lg:pt-40 lg:pb-20 border-b border-[#073B3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#073B3A] text-[10px] font-semibold text-[#D9A52B] mb-3 border border-white/10">
            <Phone className="w-3.5 h-3.5" />
            <span>24/7 Operations Desk</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-[#FAF9F5]">
            Contact Us
          </h1>
          <p className="text-xs sm:text-sm text-[#E0ECEA]/80 mt-3 leading-relaxed">
            Our Odisha operations team is available around the clock to assist with cab bookings, airport meet coordination, and custom tour inquiries.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Official Contact Credentials */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#182A2B]">
                  Direct Communication
                </h2>
                <p className="text-xs text-[#667575] mt-1">
                  Connect via phone, WhatsApp, or official email for prompt travel support.
                </p>
              </div>

              {/* Cards */}
              <div className="space-y-3.5">
                {/* Phone */}
                <div className="p-4 rounded-2xl bg-white border border-[#E5EAE5] shadow-soft flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF9F5] border border-[#E5EAE5] text-[#073B3A] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#667575]">
                      Helpline (24/7 Active)
                    </div>
                    <div className="text-xs font-bold text-[#182A2B]">
                      {COMPANY_CONFIG.contact.phoneDisplay}
                    </div>
                    <p className="text-[11px] text-[#667575]">
                      For reservation updates, live driver coordinates &amp; urgent assistance.
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-4 rounded-2xl bg-white border border-[#073B3A]/30 shadow-soft flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#073B3A] text-[#D9A52B] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#073B3A]">
                      Official WhatsApp Support
                    </div>
                    <a
                      href={COMPANY_CONFIG.contact.whatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#073B3A] hover:underline block"
                    >
                      {COMPANY_CONFIG.contact.whatsAppHelpNumber} (Chat Now)
                    </a>
                    <p className="text-[11px] text-[#667575]">
                      Quick route quotes, voucher delivery, and customized Odisha tour PDFs.
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="p-4 rounded-2xl bg-white border border-[#E5EAE5] shadow-soft flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF9F5] border border-[#E5EAE5] text-[#073B3A] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#667575]">
                      Email Inquiries
                    </div>
                    <div className="text-xs text-[#182A2B] space-y-0.5 font-medium">
                      <div>Bookings: <a href={`mailto:${COMPANY_CONFIG.contact.bookingEmail}`} className="text-[#073B3A] hover:underline">{COMPANY_CONFIG.contact.bookingEmail}</a></div>
                      <div>Support: <a href={`mailto:${COMPANY_CONFIG.contact.supportEmail}`} className="text-[#073B3A] hover:underline">{COMPANY_CONFIG.contact.supportEmail}</a></div>
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="p-4 rounded-2xl bg-white border border-[#E5EAE5] shadow-soft flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF9F5] border border-[#E5EAE5] text-[#073B3A] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#667575]">
                      Operating Hours
                    </div>
                    <div className="text-xs font-semibold text-[#182A2B]">
                      {COMPANY_CONFIG.contact.operatingHours}
                    </div>
                    <p className="text-[11px] text-[#667575]">
                      Early morning &amp; midnight airport pickups pre-arranged seamlessly.
                    </p>
                  </div>
                </div>

                {/* Registered Address */}
                <div className="p-4 rounded-2xl bg-white border border-[#E5EAE5] shadow-soft flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF9F5] border border-[#E5EAE5] text-[#073B3A] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#667575]">
                      Registered Office (Placeholder)
                    </div>
                    <div className="text-xs text-[#455353] leading-relaxed">
                      {COMPANY_CONFIG.contact.registeredAddress}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5EAE5] shadow-soft">
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
                    <div className="w-14 h-14 rounded-full bg-[#E0ECEA] text-[#073B3A] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-[#182A2B]">
                      Message Received
                    </h3>
                    <p className="text-xs text-[#667575] max-w-md mx-auto leading-relaxed">
                      Thank you for contacting CabJatra. An operations executive will review your inquiry and reach back via phone or WhatsApp within 30 minutes.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          phone: "",
                          email: "",
                          subject: "Cab Booking Inquiry",
                          message: "",
                        });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-[#073B3A] text-white font-bold text-xs"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-lg font-bold font-display text-[#182A2B]">
                        Send an Inquiry
                      </h3>
                      <p className="text-xs text-[#667575] mt-0.5">
                        Fill in your journey requirements or questions below.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#182A2B]">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Suman Patnaik"
                          className="w-full h-10 px-3 rounded-xl border border-[#E5EAE5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#073B3A] focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#182A2B]">
                          Mobile Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 9876543210"
                          className="w-full h-10 px-3 rounded-xl border border-[#E5EAE5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#073B3A] focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#182A2B]">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full h-10 px-3 rounded-xl border border-[#E5EAE5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#073B3A] focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#182A2B]">
                          Subject / Inquiry Type
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full h-10 px-3 rounded-xl border border-[#E5EAE5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#073B3A] focus:outline-none"
                        >
                          <option value="Cab Booking Inquiry">Cab Booking Inquiry</option>
                          <option value="Odisha Tour Package Planning">Odisha Tour Package Planning</option>
                          <option value="Corporate Fleet Tie-Up">Corporate Fleet Tie-Up</option>
                          <option value="Airport Transfer Assistance">Airport Transfer Assistance</option>
                          <option value="Feedback / Chauffeur Review">Feedback / Chauffeur Review</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#182A2B]">
                        Trip Requirements or Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please include details such as dates, pickup city, destinations, number of passengers, and vehicle category preferred..."
                        className="w-full p-3 rounded-xl border border-[#E5EAE5] bg-[#FAF9F5] text-xs font-semibold text-[#182A2B] focus:ring-2 focus:ring-[#073B3A] focus:outline-none"
                      />
                    </div>

                    <div className="p-3 rounded-xl bg-[#FAF9F5] border border-[#E5EAE5] text-[11px] text-[#667575]">
                      By submitting this form, you agree to receive follow-up contact regarding your journey inquiry. We respect customer privacy and never sell personal data.
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-11 rounded-xl bg-[#073B3A] hover:bg-[#062F31] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending Inquiry...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-[#D9A52B]" />
                          <span>Submit Message</span>
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
    </div>
  );
}
