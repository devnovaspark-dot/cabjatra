export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  tripType: string;
  rating: number;
  quote: string;
  date: string;
  avatarText: string;
  isSample: true;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "review-1",
    name: "Dr. Ananya Mohapatra",
    role: "Spiritual Tour with Senior Parents",
    location: "Kolkata to Puri & Konark",
    tripType: "3-Day Odisha Golden Triangle Tour",
    rating: 5,
    quote: "Traveling with elderly parents can be challenging, but our CABJATRA driver Subash was exceptionally polite, patient, and drove with great care along the Marine Drive. The car was spotless and the AC was crisp. Highly recommended for family pilgrimage trips.",
    date: "February 2026",
    avatarText: "AM",
    isSample: true
  },
  {
    id: "review-2",
    name: "Rajesh V. Sharma",
    role: "Technology Consultant & Frequent Flier",
    location: "Bangalore to Bhubaneswar IT Hub",
    tripType: "Airport Transfer to Patia Infocity",
    rating: 5,
    quote: "Landing at BBI at 11:30 PM, it was reassuring to find my CABJATRA driver already waiting outside the terminal with a name board. No surge fees, no bargaining, and no anxiety of cancelled apps. This is the professional standard Odisha needed.",
    date: "January 2026",
    avatarText: "RS",
    isSample: true
  },
  {
    id: "review-3",
    name: "Siddharth & Priya Nair",
    role: "Eco-Tourists & Wildlife Photographers",
    location: "Mumbai",
    tripType: "Full-Day Chilika Lake & Dolphin Safari",
    rating: 5,
    quote: "The 10% advance model gave us complete transparency. Once availability was confirmed, everything went smoothly. The driver even recommended an authentic coastal dhaba near Satapada that served the most delicious local crab curry.",
    date: "December 2025",
    avatarText: "SP",
    isSample: true
  },
  {
    id: "review-4",
    name: "Debabrata Routray",
    role: "Corporate Event Coordinator",
    location: "Cuttack / Bhubaneswar",
    tripType: "Multi-Day Hourly Rentals (Fleet of 4 Sedans)",
    rating: 5,
    quote: "We hired CABJATRA for an academic conference spanning Utkal University and KIIT campus. Drivers adhered strictly to timelines and coordinate smoothly via WhatsApp. Superb corporate travel support.",
    date: "January 2026",
    avatarText: "DR",
    isSample: true
  }
];

