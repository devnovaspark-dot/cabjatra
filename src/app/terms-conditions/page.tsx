import React from "react";
import Link from "next/link";
import { FileText, AlertCircle } from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";
import { PlaceholderNotice } from "@/components/common/PlaceholderNotice";

export const metadata = {
  title: "Terms and Conditions — CabJatra Odisha",
  description:
    "Terms and Conditions governing pre-booked cab reservations, 10% advance deposit, availability verification, and cab travel with CabJatra.",
};

export default function TermsConditionsPage() {
  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-28 sm:pt-36 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0ECEA]/70 text-[10px] font-bold text-[#073B3A] uppercase tracking-wider mb-2">
            <FileText className="w-3.5 h-3.5 text-[#D9A52B]" />
            <span>Service Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-[#182A2B] tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-[#667575] mt-1.5">
            Please read these terms carefully before placing a booking request on CabJatra.
          </p>
        </div>

        {/* Legal Placeholder Banner */}
        <div className="mb-6 p-4 rounded-2xl bg-white border border-[#E5EAE5] text-xs text-[#455353] space-y-1 shadow-2xs">
          <div className="font-bold flex items-center gap-2 text-[#182A2B]">
            <AlertCircle className="w-4 h-4 text-[#D9A52B]" />
            <span>Service Provider Legal Entity</span>
          </div>
          <p>
            These Terms govern your use of the CabJatra booking platform operated by:
          </p>
          <div className="pt-0.5">
            <PlaceholderNotice label="Entity Name" field={COMPANY_CONFIG.legalBusinessName} />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5EAE5] shadow-soft space-y-6 text-xs sm:text-sm text-[#455353] leading-relaxed">
          {/* Term 1 */}
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#182A2B]">
              1. Nature of Service &amp; Availability Verification
            </h2>
            <p>
              CabJatra operates a pre-booked cab mobility platform. Submitting a booking or tour request on this website constitutes an <strong>enquiry and availability request</strong>. A booking is formally confirmed <em>only after</em> our operations team verifies vehicle availability and the customer completes the mandatory 10% advance deposit.
            </p>
          </section>

          {/* Term 2 */}
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#182A2B]">
              2. Advance Deposit &amp; Payment Settlement
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-[#667575]">
              <li><strong>10% Advance Deposit:</strong> Required upon availability confirmation to secure vehicle and driver allocation.</li>
              <li><strong>90% Balance Payment:</strong> Payable directly to the assigned driver partner at the completion of the trip via Cash or standard UPI (Google Pay, PhonePe, Paytm).</li>
              <li>Official tax invoices are issued electronically following trip conclusion.</li>
            </ul>
          </section>

          {/* Term 3 */}
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#182A2B]">
              3. Fares, Tolls, and Parking Charges
            </h2>
            <p>
              Unless explicitly specified as an all-inclusive tour package:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#667575]">
              <li>National Highway / State Expressway toll plaza receipts are charged at actuals or paid directly at toll booths.</li>
              <li>Airport parking, railway station parking, and tourist monument parking tickets are the responsibility of the traveler.</li>
              <li>Night driving allowance applies to outstation trips continuing between 10:00 PM and 06:00 AM.</li>
            </ul>
          </section>

          {/* Term 4 */}
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#182A2B]">
              4. Luggage Policy &amp; Vehicle Capacity
            </h2>
            <p>
              Passengers must adhere to the passenger and luggage seating capacities specified during vehicle selection. Drivers reserve the right to decline passengers or excess cargo exceeding lawful motor vehicle capacity regulations.
            </p>
          </section>

          {/* Term 5 */}
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#182A2B]">
              5. Passenger Conduct &amp; Safety
            </h2>
            <p>
              Smoking, consumption of alcohol, or conveyance of contraband materials inside vehicles is strictly prohibited under Indian Motor Vehicle laws. Passengers are expected to maintain courteous conduct with drivers.
            </p>
          </section>

          {/* Term 6 */}
          <section className="space-y-2 pt-3 border-t border-[#F2F5F2]">
            <h2 className="text-base font-bold text-[#182A2B]">
              6. Limitation of Liability
            </h2>
            <p>
              While CabJatra enforces strict punctuality protocols, we shall not be held liable for travel delays caused by unavoidable events including extreme natural weather events, road blockades, state bandhs, or airline schedule revisions beyond our reasonable control.
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
