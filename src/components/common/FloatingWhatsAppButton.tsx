"use client";

import React, { useState } from "react";
import { MessageSquare, X, ShieldCheck, ArrowRight, Phone, Sparkles } from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";

export const FloatingWhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickTopics = [
    {
      label: "BBI Airport Transfer Quote",
      text: "Hello CabJatra, I would like to get a quote for a BBI Airport transfer.",
    },
    {
      label: "Puri & Konark Day Tour",
      text: "Hello CabJatra, please share details and tariff for the Puri and Konark day tour.",
    },
    {
      label: "Outstation Cab Inquiry",
      text: "Hello CabJatra, I need an outstation cab across Odisha. Please advise availability.",
    },
    {
      label: "Corporate Mobility",
      text: "Hello CabJatra, I am inquiring about corporate mobility and event fleet booking.",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans print:hidden flex flex-col items-end">
      {/* Popover Assist Card */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 rounded-3xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-[#D5DDD5] overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-250">
          {/* Card Header with Verified Badge */}
          <div className="bg-gradient-to-r from-[#075E54] via-[#128C7E] to-[#075E54] text-white p-4 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner">
                <svg
                  className="w-6 h-6 fill-white drop-shadow-sm"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.16 8.16 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.6c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31" />
                </svg>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#25D366] border-2 border-white animate-pulse" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>CabJatra Concierge</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D9A52B]" />
                </h4>
                <p className="text-[10px] text-white/80 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                  <span>Operations Desk • Active Now</span>
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-xl hover:bg-white/10 text-white/70 hover:text-white transition"
              aria-label="Close WhatsApp card"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-[#FAF9F5]">
            <p className="text-xs text-[#667575] leading-relaxed">
              Tap a fast query to connect directly with our live dispatch desk on verified WhatsApp:
            </p>

            <div className="space-y-2">
              {quickTopics.map((topic, i) => (
                <a
                  key={i}
                  href={`https://wa.me/917008000000?text=${encodeURIComponent(topic.text)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-2.5 rounded-2xl bg-white hover:bg-[#F2F5F2] border border-[#E5EAE5] text-xs font-semibold text-[#182A2B] flex items-center justify-between group transition shadow-xs hover:border-[#128C7E]/40"
                >
                  <span className="truncate">{topic.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#128C7E] group-hover:translate-x-1 transition-transform shrink-0" />
                </a>
              ))}
            </div>

            <div className="pt-2.5 border-t border-[#E5EAE5] flex items-center justify-between text-[11px] text-[#667575]">
              <span className="flex items-center gap-1 text-[#075E54] font-medium">
                <Sparkles className="w-3 h-3 text-[#D9A52B]" />
                Typically replies in 2 mins
              </span>
              <a
                href={`tel:${COMPANY_CONFIG.contact.phoneRaw}`}
                className="text-[#073B3A] font-bold hover:underline flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-[#D9A52B]" />
                <span>Helpline</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating 3D Real Icon Button with Subtle Pulse and Interactive Hover */}
      <div className="relative group">
        {/* Hover Tooltip Pill */}
        <div className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#062F31]/90 backdrop-blur-md text-white text-xs font-semibold shadow-xl border border-white/15 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span>Chat with Operations Desk</span>
        </div>

        {/* 3D Glossy Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#25D366] via-[#1EBE5D] to-[#128C7E] p-0.5 shadow-[0_12px_30px_rgba(37,211,102,0.45),0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_36px_rgba(37,211,102,0.6),0_6px_16px_rgba(0,0,0,0.4)] hover:scale-108 active:scale-95 transition-all duration-300 flex items-center justify-center group focus:outline-none"
          aria-label="Open WhatsApp Operations Desk"
        >
          {/* 3D Top Specular Reflection Highlight */}
          <div className="absolute top-1 left-2.5 right-2.5 h-4 rounded-full bg-gradient-to-b from-white/45 to-transparent pointer-events-none" />

          {/* Continuous Subtle Breathing Ring */}
          <span className="absolute inset-0 rounded-full border-2 border-[#25D366]/40 animate-ping pointer-events-none" />

          {/* Authentic WhatsApp Glyph */}
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 fill-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] group-hover:rotate-6 transition-transform duration-300"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.16 8.16 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.6c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31" />
          </svg>
        </button>
      </div>
    </div>
  );
};
