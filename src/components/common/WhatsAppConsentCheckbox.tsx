"use client";

import React from "react";
import { MessageSquare, ShieldCheck } from "lucide-react";

interface WhatsAppConsentProps {
  bookingConsent: boolean;
  onBookingConsentChange: (checked: boolean) => void;
  marketingConsent?: boolean;
  onMarketingConsentChange?: (checked: boolean) => void;
  showMarketingOption?: boolean;
  error?: string;
}

/**
 * WhatsApp Communication Consent Component
 * Compliant with Meta / AiSensy WhatsApp Business Policy:
 * 1. Opt-in is explicit and NEVER preselected by default.
 * 2. Clear disclosure of message purpose (trip confirmation, voucher, driver details).
 * 3. Marketing updates kept completely distinct and optional.
 */
export const WhatsAppConsentCheckbox: React.FC<WhatsAppConsentProps> = ({
  bookingConsent,
  onBookingConsentChange,
  marketingConsent = false,
  onMarketingConsentChange,
  showMarketingOption = true,
  error,
}) => {
  return (
    <div className="rounded-2xl border border-[#E5EAE5] bg-[#FAF9F5] p-4 sm:p-5 space-y-3 text-[#182A2B]">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#073B3A] text-[#D9A52B] flex items-center justify-center shrink-0 mt-0.5">
          <MessageSquare className="w-4 h-4" />
        </div>
        <div>
          <div className="flex items-center gap-1.5 font-bold text-[#182A2B] text-xs">
            <span>WhatsApp Trip Updates &amp; Confirmation</span>
            <span className="inline-flex items-center text-[10px] font-semibold text-[#073B3A] bg-[#E0ECEA]/70 px-2 py-0.5 rounded-full">
              <ShieldCheck className="w-3 h-3 mr-0.5 inline text-[#D9A52B]" /> Verified Partner
            </span>
          </div>
          <p className="text-[11px] text-[#667575] mt-0.5 leading-relaxed">
            Receive prompt dispatch notification, chauffeur contact details, car assignment, and the secure 10% advance confirmation link directly on WhatsApp.
          </p>
        </div>
      </div>

      <div className="space-y-2 pt-2 border-t border-[#E5EAE5]">
        {/* Booking Communication Consent - Unchecked by default */}
        <label className="flex items-start gap-2.5 cursor-pointer select-none group">
          <input
            type="checkbox"
            checked={bookingConsent}
            onChange={(e) => onBookingConsentChange(e.target.checked)}
            className="mt-0.5 w-4 h-4 rounded border-[#E5EAE5] text-[#073B3A] focus:ring-[#073B3A] cursor-pointer accent-[#073B3A]"
          />
          <span className="text-xs text-[#182A2B] leading-normal">
            <strong className="font-semibold text-[#182A2B]">I consent to receive essential booking updates</strong>, chauffeur assignment, and reservation alerts via WhatsApp from CabJatra.{" "}
            <span className="text-[#667575]">(Not preselected; required for instant voucher delivery)</span>
          </span>
        </label>

        {error && (
          <p className="text-[11px] text-rose-600 font-semibold pl-6">
            {error}
          </p>
        )}

        {/* Distinct Optional Marketing Consent */}
        {showMarketingOption && onMarketingConsentChange && (
          <label className="flex items-start gap-2.5 cursor-pointer select-none group">
            <input
              type="checkbox"
              checked={marketingConsent}
              onChange={(e) => onMarketingConsentChange(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-[#E5EAE5] text-[#073B3A] focus:ring-[#073B3A] cursor-pointer accent-[#073B3A]"
            />
            <span className="text-xs text-[#667575] leading-normal">
              <span className="font-medium text-[#182A2B]">Optional:</span> I would also like to receive seasonal Odisha tour discount offers and festive holiday packages (maximum 2 messages per month; opt-out anytime).
            </span>
          </label>
        )}
      </div>

      <div className="text-[10px] text-[#667575] flex items-center justify-between border-t border-[#E5EAE5] pt-2">
        <span>We respect customer privacy and never send unsolicited spam.</span>
        <span className="text-[#073B3A] font-semibold">Zero Spam Pledge</span>
      </div>
    </div>
  );
};
