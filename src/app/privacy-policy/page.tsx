import React from "react";
import Link from "next/link";
import { Lock, AlertCircle } from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";
import { PlaceholderNotice } from "@/components/common/PlaceholderNotice";

export const metadata = {
  title: "Privacy Policy — CabJatra Mobility Platform",
  description:
    "Official Privacy Policy of CabJatra: how we collect, use, protect, and handle customer booking data and WhatsApp communications.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-28 sm:pt-36 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0ECEA]/70 text-[10px] font-bold text-[#073B3A] uppercase tracking-wider mb-2">
            <Lock className="w-3.5 h-3.5 text-[#D9A52B]" />
            <span>Data Protection &amp; Governance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-[#182A2B] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#667575] mt-1.5">
            Effective Date: January 1, 2026 | Last Updated: November 2026
          </p>
        </div>

        {/* Legal Entity Notice */}
        <div className="mb-6 p-4 rounded-2xl bg-white border border-[#E5EAE5] text-xs text-[#455353] space-y-1.5 shadow-2xs">
          <div className="flex items-center gap-2 font-bold text-[#182A2B]">
            <AlertCircle className="w-4 h-4 text-[#D9A52B]" />
            <span>Compliance &amp; Legal Entity Disclosure</span>
          </div>
          <p className="leading-relaxed">
            This Privacy Policy governs the mobility services, web application, and communication interfaces provided under the brand name <strong>CabJatra</strong>, operated by:
          </p>
          <div className="pt-0.5">
            <PlaceholderNotice label="Operating Legal Entity" field={COMPANY_CONFIG.legalBusinessName} />
          </div>
        </div>

        {/* Policy Content Sections */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5EAE5] shadow-soft space-y-6 text-xs sm:text-sm text-[#455353] leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#182A2B] flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#FAF9F5] border border-[#E5EAE5] text-[#073B3A] text-xs flex items-center justify-center font-bold">1</span>
              <span>Information We Collect</span>
            </h2>
            <p>
              When you use the CabJatra website to enquire about or book a cab or tour package, we collect the necessary personal data to process your journey:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#667575]">
              <li><strong>Contact Information:</strong> Full name, telephone/mobile number, email address.</li>
              <li><strong>Trip Itinerary Details:</strong> Pickup address, destination, dates, travel times, luggage count, and passenger numbers.</li>
              <li><strong>Flight Information:</strong> Flight number (for airport transfer bookings) used solely to track arrival delays at BBI Airport.</li>
              <li><strong>Special Notes:</strong> User-provided preferences (e.g., child seats, senior citizen assistance, temple stops).</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#182A2B] flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#FAF9F5] border border-[#E5EAE5] text-[#073B3A] text-xs flex items-center justify-center font-bold">2</span>
              <span>Why We Collect This Information</span>
            </h2>
            <p>
              We collect and process your personal information strictly for legitimate commercial and travel coordination purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#667575]">
              <li>To check vehicle availability across our Odisha commercial cab fleet.</li>
              <li>To issue official booking vouchers and provide driver contact details.</li>
              <li>To deliver accurate route estimates and transparent billing.</li>
              <li>To verify the 10% advance deposit and assist during your trip.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#182A2B] flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#FAF9F5] border border-[#E5EAE5] text-[#073B3A] text-xs flex items-center justify-center font-bold">3</span>
              <span>WhatsApp &amp; Communication Practices</span>
            </h2>
            <p>
              CabJatra utilizes official WhatsApp Business channels to communicate essential ride status updates. In compliance with regulatory and messaging platform rules:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#667575]">
              <li><strong>Explicit Opt-In:</strong> WhatsApp communication consent is explicitly requested during booking and is <em>never preselected</em>.</li>
              <li><strong>Essential Booking Updates:</strong> Used exclusively for sending vehicle assignment vouchers, driver phone numbers, driver live coordinates, and the 10% advance invoice link.</li>
              <li><strong>Marketing Messages:</strong> Optional seasonal Odisha tour deals are separate from booking alerts and require a distinct affirmative consent checkbox.</li>
              <li><strong>Opt-Out Right:</strong> Customers can stop receiving messages at any time by replying &quot;STOP&quot; on WhatsApp or by contacting support.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#182A2B] flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#FAF9F5] border border-[#E5EAE5] text-[#073B3A] text-xs flex items-center justify-center font-bold">4</span>
              <span>Information Sharing With Service Partners</span>
            </h2>
            <p>
              To complete your journey, we disclose relevant trip coordinates (pickup location, passenger name, contact number) to the assigned driver partner for the duration of the booked ride only. We do not sell, rent, or trade customer contact details to unrelated third-party advertisers.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#182A2B] flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#FAF9F5] border border-[#E5EAE5] text-[#073B3A] text-xs flex items-center justify-center font-bold">5</span>
              <span>Data Protection &amp; Retention</span>
            </h2>
            <p>
              We implement industry-standard safeguards to protect personal data against unauthorized access, loss, or alteration. Customer itinerary data is retained only as long as necessary to comply with legal, tax, and regulatory accounting obligations in India.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#182A2B] flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#FAF9F5] border border-[#E5EAE5] text-[#073B3A] text-xs flex items-center justify-center font-bold">6</span>
              <span>Your Privacy Rights</span>
            </h2>
            <p>
              You have the right to request access to the personal data we hold about you, request corrections to inaccurate details, or request deletion of your information from our active dispatch database where permitted by applicable law.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-2 pt-3 border-t border-[#F2F5F2]">
            <h2 className="text-base font-bold text-[#182A2B] flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#FAF9F5] border border-[#E5EAE5] text-[#073B3A] text-xs flex items-center justify-center font-bold">7</span>
              <span>Contact Us Regarding Privacy</span>
            </h2>
            <p>
              For any questions, requests, or grievances regarding this Privacy Policy or your personal information, please contact our Data Governance desk:
            </p>
            <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E5EAE5] space-y-0.5 text-xs text-[#182A2B]">
              <div><strong>Email:</strong> <a href={`mailto:${COMPANY_CONFIG.contact.legalEmail}`} className="text-[#073B3A] hover:underline">{COMPANY_CONFIG.contact.legalEmail}</a></div>
              <div><strong>Helpline:</strong> {COMPANY_CONFIG.contact.phoneDisplay}</div>
              <div><strong>Postal Address:</strong> {COMPANY_CONFIG.contact.registeredAddress}</div>
            </div>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-xs font-bold text-[#073B3A] hover:underline inline-flex items-center gap-1"
          >
            ← Return to CabJatra Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
