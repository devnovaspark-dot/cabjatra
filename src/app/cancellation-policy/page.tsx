import React from "react";
import Link from "next/link";
import { RotateCcw, AlertCircle } from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";
import { PlaceholderNotice } from "@/components/common/PlaceholderNotice";

export const metadata = {
  title: "Cancellation & Refund Policy — CabJatra Odisha",
  description:
    "Official Cancellation and Advance Refund Policy of CabJatra: transparent guidelines on advance returns, trip modifications, and flight delay adjustments.",
};

export default function CancellationPolicyPage() {
  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-28 sm:pt-36 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0ECEA]/70 text-[10px] font-bold text-[#073B3A] uppercase tracking-wider mb-2">
            <RotateCcw className="w-3.5 h-3.5 text-[#D9A52B]" />
            <span>Cancellation &amp; Refund Terms</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-[#182A2B] tracking-tight">
            Cancellation Policy
          </h1>
          <p className="text-xs text-[#667575] mt-1.5">
            Clear, customer-centric terms governing booking modifications and advance deposit refunds.
          </p>
        </div>

        {/* Operational Status */}
        <div className="mb-6 p-4 rounded-2xl bg-white border border-[#E5EAE5] text-xs text-[#455353] space-y-1 shadow-2xs">
          <div className="font-bold flex items-center gap-2 text-[#182A2B]">
            <AlertCircle className="w-4 h-4 text-[#D9A52B]" />
            <span>Operational Policy Status</span>
          </div>
          <p>
            This policy outlines the standard advance refund model for CabJatra mobility services operated by:
          </p>
          <div className="pt-0.5">
            <PlaceholderNotice label="Entity Name" field={COMPANY_CONFIG.legalBusinessName} />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5EAE5] shadow-soft space-y-6 text-xs sm:text-sm text-[#455353] leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#182A2B]">
              1. Customer Cancellation &amp; Advance Refund Matrix
            </h2>
            <p>
              Because CabJatra operates on a dedicated driver assignment model, our cancellation terms are designed to respect both our travelers&apos; flexibility and our drivers&apos; committed time slots:
            </p>

            <div className="overflow-x-auto pt-2">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#062F31] text-white font-bold">
                    <th className="p-3">Service Category</th>
                    <th className="p-3">Notice Window</th>
                    <th className="p-3">10% Advance Refund</th>
                    <th className="p-3">Cancellation Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F2F5F2] bg-[#FAF9F5]">
                  <tr>
                    <td className="p-3 font-semibold text-[#182A2B]">Outstation &amp; Odisha Tours</td>
                    <td className="p-3">More than 12 hours prior to pickup</td>
                    <td className="p-3 font-bold text-[#073B3A]">100% Full Refund</td>
                    <td className="p-3">Nil</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#182A2B]">Outstation &amp; Odisha Tours</td>
                    <td className="p-3">Between 4 and 12 hours prior</td>
                    <td className="p-3 font-bold text-[#D9A52B]">50% Advance Refund</td>
                    <td className="p-3">50% of 10% Advance</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#182A2B]">Outstation &amp; Odisha Tours</td>
                    <td className="p-3">Less than 4 hours / Driver Dispatched</td>
                    <td className="p-3 font-bold text-rose-700">No Advance Refund</td>
                    <td className="p-3">Full Advance Retained</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#182A2B]">Airport &amp; Local City Rides</td>
                    <td className="p-3">More than 6 hours prior to pickup</td>
                    <td className="p-3 font-bold text-[#073B3A]">100% Full Refund</td>
                    <td className="p-3">Nil</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#182A2B]">Airport &amp; Local City Rides</td>
                    <td className="p-3">Less than 2 hours / Driver on Route</td>
                    <td className="p-3 font-bold text-rose-700">No Advance Refund</td>
                    <td className="p-3">Full Advance Retained</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#182A2B]">
              2. Flight Rescheduling &amp; Airport Delay Protection
            </h2>
            <p>
              For <strong>Airport Transfers</strong> at Biju Patnaik International Airport (BBI), flight delays or rescheduled arrivals do <strong>NOT</strong> count as customer cancellations. As long as you notify us or provide your flight number during booking, we adjust driver dispatch timing at zero cancellation charge.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#182A2B]">
              3. Cancellation by CabJatra (Zero-Default Guarantee)
            </h2>
            <p>
              In the rare event that CabJatra is unable to provide a replacement vehicle due to mechanical breakdown or unforeseen fleet emergency:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#667575]">
              <li>100% of your advance deposit is refunded immediately to your original payment method.</li>
              <li>Our dispatch desk assists you in locating alternate transportation where possible.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#182A2B]">
              4. Trip Modification Guidelines
            </h2>
            <p>
              Customers can adjust pickup timing, change hotel pickup location, or upgrade vehicle category free of charge by messaging our WhatsApp support desk at least 6 hours prior to scheduled departure, subject to fleet availability.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-2 pt-3 border-t border-[#F2F5F2]">
            <h2 className="text-base font-bold text-[#182A2B]">
              5. Refund Processing Timeline
            </h2>
            <p>
              Eligible refunds are processed back to the original source bank account or UPI ID within <strong>3 to 5 business days</strong>. For cancellation assistance, contact our dispatch desk at <a href={`mailto:${COMPANY_CONFIG.contact.supportEmail}`} className="text-[#073B3A] font-semibold hover:underline">{COMPANY_CONFIG.contact.supportEmail}</a> or via WhatsApp.
            </p>
          </section>
        </div>

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
