export interface FaqItem {
  question: string;
  answer: string;
  category: "booking" | "payment" | "service" | "support";
}

export const FAQS_DATA: FaqItem[] = [
  {
    question: "How can I book a cab with CABJATRA?",
    answer: "You can book in 3 convenient steps on our website: 1) Select your service (Airport, Outstation, Hourly, City, or Odisha Tour) and specify your pickup location, destination, and travel schedule. 2) Pick your preferred vehicle category (Hatchback, Sedan, SUV, or Tempo Traveller) and input passenger details. 3) Submit your booking enquiry. Our operations desk immediately reviews fleet availability and contacts you with the verified confirmation and payment link.",
    category: "booking"
  },
  {
    question: "Is my booking confirmed immediately upon submitting the website form?",
    answer: "No. Submitting a booking request on our website initiates an immediate availability check rather than an automated confirmation. Because we guarantee vehicle cleanliness, verified chauffeur allocation, and strict arrival standards, our team manually verifies route readiness and vehicle assignment before issuing your confirmed booking voucher. This prevents frustrating last-minute cancellations.",
    category: "booking"
  },
  {
    question: "When do I pay the 10% advance?",
    answer: "You only pay the 10% advance AFTER our operations team reviews your trip details and confirms that a suitable vehicle and chauffeur are available for your slot. Once confirmed, you will receive an official payment notification with a secure link via WhatsApp and SMS. The remaining 90% balance is payable directly to your chauffeur at the completion of your journey (via Cash or UPI).",
    category: "payment"
  },
  {
    question: "How does vehicle availability get checked?",
    answer: "Our centralized Odisha dispatch desk reviews your requested pickup timing, route feasibility, and vehicle category against our active fleet schedule across Bhubaneswar, Cuttack, and Puri. Once a chauffeur partner meets our service benchmarks (clean vehicle, verified license, route familiarity), your vehicle is reserved and the confirmation notification is sent to you, usually within 15–30 minutes.",
    category: "service"
  },
  {
    question: "Can I modify or cancel my trip after booking?",
    answer: "Yes, you can modify trip timing, pickup location, or vehicle category by contacting our customer support desk via WhatsApp or phone. If you notify us at least 6 hours prior to the scheduled pickup time for local rides, or 12 hours prior for outstation tours, modifications are accommodated free of charge, subject to vehicle availability. Please refer to our detailed Cancellation Policy for full refund terms on advance deposits.",
    category: "service"
  },
  {
    question: "How do I contact CABJATRA if I need urgent assistance?",
    answer: "Our customer support team operates dedicated helplines. You can reach our 24/7 travel desk directly via WhatsApp at our official business number or by calling our customer helpline. For formal itinerary planning, airport delegate transfers, or corporate accounts, you can also write to support@cabjatra.com.",
    category: "support"
  }
];

