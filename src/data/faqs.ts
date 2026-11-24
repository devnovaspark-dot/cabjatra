export interface FaqItem {
  question: string;
  answer: string;
  category: "booking" | "payment" | "service" | "support";
}

export const FAQS_DATA: FaqItem[] = [
  {
    question: "How do I book a cab through CABJATRA?",
    answer:
      "Step 1: Enter trip details\nSelect your service (Airport, Outstation, Hourly, City, or Odisha Tour), pickup, drop, and time.\n\nStep 2: Pick your car\nChoose Hatchback, Sedan, SUV, or Tempo Traveller and add your contact details.\n\nStep 3: Get confirmation\nSubmit the form to receive booking confirmation and the payment link from our team.",
    category: "booking",
  },
  {
    question: "Is my booking confirmed immediately after submitting the form?",
    answer:
      "No. Submitting the form starts a quick availability check rather than an automated confirmation. Because we guarantee vehicle cleanliness, verified driver allocation, and strict arrival standards, our team manually verifies your car and driver first to prevent last-minute cancellations, then sends your confirmed booking voucher.",
    category: "booking",
  },
  {
    question: "How is the outstation cab fare calculated on CABJATRA?",
    answer:
      "Based on total kilometres, cab category, trip type, and driver allowance, with zero surge pricing.",
    category: "service",
  },
  {
    question: "Are toll charges, parking, and state taxes included?",
    answer:
      "No. Base fare covers only the cab, fuel, and driver allowance; tolls, parking, and state taxes are paid at actuals.",
    category: "service",
  },
  {
    question: "Can I book a one-way cab without round-trip charges?",
    answer:
      "Yes. You pay only for the one-way distance travelled, saving up to 40%.",
    category: "booking",
  },
  {
    question: "What if my flight is delayed for an airport pickup?",
    answer:
      "We track your flight live and adjust pickup time automatically with zero waiting charges for minor delays.",
    category: "service",
  },
  {
    question: "When do I get driver and cab details?",
    answer:
      "Driver and car details are sent via SMS, WhatsApp, and email 2–4 hours before pickup.",
    category: "support",
  },
  {
    question: "When do I pay the 10% advance?",
    answer:
      "Pay the 10% advance only after our team confirms your cab and sends a secure payment link via WhatsApp and SMS. Pay the remaining 90% directly to the driver via Cash or UPI after your trip.",
    category: "payment",
  },
  {
    question: "Can I modify or cancel my booking?",
    answer:
      "Yes. Message or call our support team to update your trip. Changes are free up to 6 hours before local rides and 12 hours before outstation trips (subject to availability). See our Cancellation Policy for deposit refund terms.",
    category: "service",
  },
  {
    question: "What is the cancellation and refund policy?",
    answer:
      "Free cancellation up to 6 hours before pickup for a 100% refund; nominal fee within 6 hours.",
    category: "payment",
  },
  {
    question: "How do I contact CABJATRA for urgent help?",
    answer:
      "Call or WhatsApp our 24/7 customer helpline for immediate assistance. For custom itineraries, airport transfers, or corporate bookings, email us at support@CABJATRA.com.",
    category: "support",
  },
];
