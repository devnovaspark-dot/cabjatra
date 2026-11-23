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
  avatarUrl: string;
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
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=250&auto=format&fit=crop",
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
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
    isSample: true
  },
  {
    id: "review-3",
    name: "Siddharth & Priya Nair",
    role: "Eco-Tourists & Wildlife Photographers",
    location: "Mumbai",
    tripType: "Full-Day Chilika Lake & Dolphin Safari",
    rating: 5,
    quote: "The pre-booked confirmed cab model gave us complete transparency. Once availability was confirmed, everything went smoothly. The driver even recommended an authentic coastal dhaba near Satapada that served the most delicious local crab curry.",
    date: "December 2025",
    avatarText: "SP",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop",
    isSample: true
  },
  {
    id: "review-4",
    name: "Debabrata Routray",
    role: "Corporate Event Coordinator",
    location: "Kataka / Bhubaneswar",
    tripType: "Multi-Day Hourly Rentals (Fleet of 4 Sedans)",
    rating: 5,
    quote: "We hired CABJATRA for an academic conference spanning Utkal University and KIIT campus. Drivers adhered strictly to timelines and coordinate smoothly via WhatsApp. Superb corporate travel support.",
    date: "January 2026",
    avatarText: "DR",
    avatarUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=250&auto=format&fit=crop",
    isSample: true
  }
];

