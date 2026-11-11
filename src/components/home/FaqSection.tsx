"use client";

import React, { useState } from "react";
import { ChevronDown, MessageSquare, Sparkles } from "lucide-react";
import { FAQS_DATA } from "@/data/faqs";
import { COMPANY_CONFIG } from "@/data/company";

export const FaqSection: React.FC = () => {
  // All FAQ items closed by default on page load; user can click any to expand/collapse
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-[#F2F5F2] border-b border-[#E5EAE5]" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Clean and Centered as Before */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2 sm:space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0ECEA]/80 text-[10px] font-bold text-[#073B3A] uppercase tracking-wider border border-[#C1DAD7]">
            <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#182A2B] font-display">
            Common Booking Inquiries
          </h2>
          <p className="text-xs sm:text-sm text-[#667575] leading-relaxed">
            Everything you need to know about our verified dispatch model, 10% advance deposit, vehicle hygiene, and travel policies.
          </p>
        </div>

        {/* Clean Centered Accordion Stack */}
        <div className="space-y-3 sm:space-y-3.5">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="card-skeuo rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 sm:gap-4 font-display font-bold text-xs sm:text-base text-[#182A2B] hover:text-[#073B3A] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1">{faq.question}</span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 shadow-xs ${
                      isOpen
                        ? "medallion-dark text-[#D9A52B] rotate-180"
                        : "panel-recessed text-[#073B3A] border border-[#CBD7CB]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#556464] leading-relaxed border-t border-[#E5ECE5] pt-3.5 sm:pt-4 animate-in fade-in duration-200 bg-[#FAF9F5]/70">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Banner */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-2xl card-skeuo flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[#182A2B] font-display">
              Have a specific itinerary inquiry or urgent ride requirement?
            </h4>
            <p className="text-[10.5px] sm:text-[11px] text-[#556464] mt-0.5">
              Our 24/7 Odisha operations desk coordinates instantly on WhatsApp.
            </p>
          </div>
          <a
            href={COMPANY_CONFIG.contact.whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto justify-center px-5 py-2.5 rounded-xl btn-skeuo-dark text-white text-xs font-bold inline-flex items-center gap-2 shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#D9A52B]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
