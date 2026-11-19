"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Palmtree,
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Users,
  MessageSquare,
  Car,
  Landmark,
  Compass,
  ChevronDown,
  Building2,
  Phone,
  Plane,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";

export default function OdishaTourPackageByCabPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const destinations = [
    {
      title: "Bhubaneswar – The Temple City",
      desc: "In Bhubaneswar, Odisha's capital city, explore ancient temples, architectural landmarks, museums, and cultural attractions. The premier starting hub for all Odisha sightseeing circuits.",
      tag: "Capital & Temple Hub",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1626014303757-6467368e7b16?q=85&w=900&auto=format&fit=crop",
    },
    {
      title: "Puri – The Spiritual Destination",
      desc: "Visit the sacred Jagannath Temple, walk through the vibrant heritage streets of Puri, and enjoy the pristine coastline of the Golden Beach. Perfect for family holidays and pilgrimage tours.",
      tag: "Jagannath Dham & Beach",
      icon: Landmark,
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=85&w=900&auto=format&fit=crop",
    },
    {
      title: "Konark – Heritage & Architecture",
      desc: "Discover the Sun Temple of Konark, a UNESCO World Heritage Site renowned for its magnificent 13th-century chariot stone architecture, intricate erotic sculptures, and historical significance.",
      tag: "UNESCO World Heritage",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=85&w=900&auto=format&fit=crop",
    },
    {
      title: "Chilika Lake – Nature & Scenic Beauty",
      desc: "Experience the vast beauty of Chilika Lake, Asia's largest brackish water lagoon. Enjoy tranquil surroundings, migratory birdwatching, and scenic boat rides across the open waters.",
      tag: "Asia's Largest Lagoon",
      icon: Palmtree,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=85&w=900&auto=format&fit=crop",
    },
    {
      title: "Dhauli – History & Peace",
      desc: "Explore Dhauli Shanti Stupa (Peace Pagoda) perched on the river Daya, the historic battleground associated with the historic Kalinga War and Emperor Ashoka's legendary transformation.",
      tag: "Peace Pagoda & Kalinga War",
      icon: Landmark,
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=85&w=900&auto=format&fit=crop",
    },
    {
      title: "Satapada – Dolphin & Lake Experience",
      desc: "Explore the Satapada sector of Chilika, famous for its OTDC motorized boat cruises, Irrawaddy dolphin-spotting opportunities, and scenic Rajhans Island sea-mouth sandbar.",
      tag: "Irrawaddy Dolphin Sanctuary",
      icon: Compass,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=85&w=900&auto=format&fit=crop",
    },
  ];

  const packages = [
    {
      title: "Bhubaneswar – Puri – Konark Tour Package",
      subtitle: "The Legendary Odisha Golden Triangle",
      desc: "Explore Odisha's celebrated Golden Triangle covering Lingaraj Temple, Puri Jagannath Dham, Konark Sun Temple, Chandrabhaga Beach, and Dhauli Shanti Stupa with private AC cab travel.",
      duration: "3 Days / 2 Nights or 4 Days",
      badge: "Most Popular",
      slug: "golden-triangle",
    },
    {
      title: "Puri – Konark Sightseeing Tour",
      subtitle: "Sacred Darshan & Scenic Marine Drive",
      desc: "Ideal same-day or 2-day excursion covering Jagannath Temple, Grand Road, Golden Beach, Ramachandi Beach, Chandrabhaga Beach, and Konark Sun Temple with unhurried beachside halts.",
      duration: "1 Day / Same Day Return",
      badge: "Scenic Coastal Road",
      slug: "konark",
    },
    {
      title: "Bhubaneswar Local Sightseeing Tour",
      subtitle: "Temple City Heritage Circuit",
      desc: "Comprehensive day tour visiting Lingaraj Temple, Mukteswar, Rajarani, Dhauli Peace Pagoda, Khandagiri & Udayagiri Jain rock-cut caves, and the Odisha State Museum.",
      duration: "Full Day (8 Hrs / 80 Km)",
      badge: "Heritage Trail",
      slug: "temple",
    },
    {
      title: "Puri – Chilika – Satapada Tour",
      subtitle: "Lagoon Safari & Dolphin Watching",
      desc: "Delightful coastal nature tour from Puri to Chilika Lake (Satapada). Includes scenic boat cruises, Irrawaddy dolphin sightings, local crab delicacies, and sea-mouth sandbars.",
      duration: "Full Day Excursion",
      badge: "Eco Wildlife Safari",
      slug: "chilika",
    },
    {
      title: "Odisha Family Tour Package",
      subtitle: "Thoughtfully Paced for All Generations",
      desc: "Designed especially for multi-generational families with elderly parents and children. Smooth highway travel, clean sanitised AC Innova/Urbania, and relaxed temple queues.",
      duration: "4 Days / 3 Nights",
      badge: "Family & Seniors Friendly",
      slug: "golden-triangle",
    },
    {
      title: "Customised Odisha Tour Package",
      subtitle: "Tailored Completely to Your Preferences",
      desc: "Design your bespoke travel itinerary. Choose your pickup point (Airport, Hotel, or Station), select custom destinations, set trip duration, and pick your preferred cab category.",
      duration: "100% Flexible",
      badge: "Bespoke Itinerary",
      slug: "golden-triangle",
    },
  ];

  const itineraryDays = [
    {
      day: "Day 01",
      title: "Bhubaneswar Local Sightseeing & Heritage Exploration",
      desc: "Begin your journey with punctual pickup from BBI Airport or Bhubaneswar Railway Station. Explore ancient Kalinga architecture at Lingaraj Temple, Mukteswar, and Rajarani. Continue to Dhauli Shanti Stupa overlooking the historic Daya River. Optional extensions include the ancient rock-cut caves of Udayagiri & Khandagiri.",
      highlights: ["Lingaraj & Mukteswar Temples", "Dhauli Peace Pagoda", "Khandagiri Caves"],
    },
    {
      day: "Day 02",
      title: "Bhubaneswar to Puri via Pipili Appliqué Village",
      desc: "Enjoy a scenic drive along the smooth NH-316 highway. Stop at Pipili village to admire vibrant Odisha appliqué handicrafts. Check into your Puri beach hotel, take a holy dip at the Golden Beach, and proceed for sacred Mahaprabhu Jagannath Temple darshan with guidance on police-approved corridor access.",
      highlights: ["Pipili Craft Village", "Lord Jagannath Temple", "Puri Golden Beach"],
    },
    {
      day: "Day 03",
      title: "Puri to Konark via Marine Drive Coastal Highway & Return",
      desc: "Drive along the breathtaking Marine Drive coastal road. Visit the tranquil Ramachandi Temple and Chandrabhaga Beach. Arrive at the UNESCO World Heritage Konark Sun Temple to marvel at the 24 colossal chariot wheels and intricate stone carvings. Return to Puri or Bhubaneswar for your departure.",
      highlights: ["Marine Drive Highway", "Chandrabhaga Beach", "Konark Sun Temple"],
    },
    {
      day: "Optional Extension",
      title: "Chilika Lake & Satapada Dolphin Cruise",
      desc: "Add an extra day to visit Satapada on Chilika Lake. Board an OTDC motorboat to spot graceful Irrawaddy dolphins playfully surfacing in their natural sanctuary, visit Rajhans Island, and savor fresh coastal seafood delicacies.",
      highlights: ["Satapada Boat Cruise", "Irrawaddy Dolphin Spotting", "Rajhans Island"],
    },
  ];

  const whyChoosePoints = [
    {
      title: "Flexible Travel Plans",
      desc: "Pick the places you want to go, the travel dates you prefer, and the exact stops you want to make during your holiday without rigid tour bus timetables.",
    },
    {
      title: "Convenient Private Cab Travel",
      desc: "Travel comfortably in a dedicated AC commercial vehicle with an experienced local driver who knows every temple bypass, highway food joint, and parking zone.",
    },
    {
      title: "Customised Tour Itineraries",
      desc: "Design your trip around your personal travel style, group size, and interests—whether focused on spiritual darshan, coastal relaxation, or photography.",
    },
    {
      title: "Family & Group Travel Ready",
      desc: "Choose from comfortable sedans, spacious SUVs, or high-roof Tempo Travellers so your whole family or group travels together with effortless luggage space.",
    },
    {
      title: "Easy & Transparent Tour Planning",
      desc: "Plan your entire trip in one place with a clear 10% advance deposit model, zero hidden fees, and transparent pricing settled only after your journey.",
    },
    {
      title: "Explore More, at Your Own Pace",
      desc: "Spend as much time as you like at your favorite spots—lingering at the beach or spending extra time in temple complexes without rush or surge stress.",
    },
  ];

  const fleetOptions = [
    {
      category: "Sedan",
      models: "Swift Dzire, Toyota Etios, Honda Amaze",
      capacity: "Up to 4 Passengers • 2 Medium Bags",
      bestFor: "Couples, solo travellers, and small families seeking economical, smooth point-to-point and sightseeing travel.",
      tag: "Budget Friendly",
    },
    {
      category: "SUV",
      models: "Toyota Innova Crysta, Maruti Ertiga, Bolero Neo",
      capacity: "Up to 6–7 Passengers • 4 Large Bags",
      bestFor: "Families, small groups, and multi-day highway road trips requiring superior suspension, luggage space, and dual-zone AC.",
      tag: "Most Popular for Tours",
    },
    {
      category: "Tempo Traveller",
      models: "Force Urbania, 12–17 Seater AC Luxury Tempo",
      capacity: "12 to 17 Passengers • 10+ Luggage Bags",
      bestFor: "Extended family gatherings, corporate offsites, and pilgrim tour groups visiting multiple Odisha destinations together.",
      tag: "Large Groups",
    },
  ];

  const faqs = [
    {
      q: "What is included in an Odisha tour package by cab?",
      a: "An Odisha tour package by cab generally includes private commercial AC vehicle transportation for all chosen destinations, dedicated driver allowances, fuel charges, doorstep pickup, and scheduled drops. Toll receipts, parking fees, and temple guide services can be settled directly or bundled based on your package preferences.",
    },
    {
      q: "Can I customise my Odisha tour package?",
      a: "Yes! You can completely customise your Odisha tour package. Choose your preferred pickup point (Bhubaneswar Airport, Railway Station, or Puri Hotel), select specific sightseeing spots, adjust the number of days, and pick the vehicle class that best fits your group.",
    },
    {
      q: "Which places can I visit on an Odisha cab tour?",
      a: "Popular destinations include Bhubaneswar (Lingaraj, Mukteswar, Dhauli), Puri (Jagannath Temple, Golden Beach), Konark (Sun Temple, Chandrabhaga), Chilika Lake (Satapada dolphin sanctuary), Raghurajpur heritage craft village, and Pipli appliqué market.",
    },
    {
      q: "Can I book an Odisha tour package by car for my family?",
      a: "Yes! A private cab tour is the safest and most comfortable option for families with senior citizens and young children. Our background-verified drivers drive patiently, accommodate frequent comfort stops, and assist with luggage custody during temple visits.",
    },
    {
      q: "How many days are required for an Odisha tour?",
      a: "A 2 to 3 day itinerary is ideal for exploring the famous Golden Triangle (Bhubaneswar, Puri, and Konark). If you wish to include Chilika Lake, Satapada dolphin safari, or Raghurajpur, a 4 to 5 day trip provides a relaxed, unhurried holiday.",
    },
    {
      q: "Can I start my Odisha tour from Bhubaneswar?",
      a: "Yes, Bhubaneswar (BBI Airport or Master Canteen Railway Station) is the primary gateway for Odisha travel. Our driver will meet you directly at the terminal with your name placard and begin your tour smoothly.",
    },
    {
      q: "Which cab is best for an Odisha tour?",
      a: "A Sedan (Dzire/Etios) works great for couples and small families (up to 4 passengers). An SUV (Innova Crysta/Ertiga) is best for 5 to 7 passengers wanting extra legroom and luggage space. For larger groups of 8 to 17, a Tempo Traveller or Force Urbania is ideal.",
    },
    {
      q: "How can I book an Odisha tour package with Cabjatra?",
      a: "You can book directly through our online Tour Planner on the website or reach our 24/7 WhatsApp Operations Desk with your travel dates, passenger count, and preferred route. Lock your reservation with a transparent 10% advance deposit, with the remaining 90% settled during your trip.",
    },
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-[#0F172A] font-sans">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-b from-[#000B3B] via-[#001162] to-[#000B3B] text-white pt-28 sm:pt-36 pb-16 lg:pt-36 lg:pb-20 overflow-hidden border-b border-black/20">
        {/* Ambient Lighting Sheens */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FEC401]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#02146B]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Value Prop & Actions (7 Cols) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10.5px] font-bold text-[#FEC401] shadow-soft">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Private Sightseeing &bull; 100% Commercial Yellow-Board Fleet</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold font-display tracking-tight text-[#FAF9F5] leading-tight">
                Odisha Tour Package by Cab –{" "}
                <span className="text-[#FEC401] italic font-normal">Explore Odisha Your Way</span>
              </h1>

              <p className="text-sm sm:text-base text-[#F1F5F9]/90 leading-relaxed font-normal pt-1 max-w-2xl mx-auto lg:mx-0">
                Explore the beauty, culture, temples, beaches and heritage of Odisha with an Odisha Tour Package offered by Cab from Cabjatra. Travel at your pace with a private cab, experienced driver and flexible sightseeing options covering Bhubaneswar, Puri, Konark, Chilika and popular destinations.
              </p>

              <p className="text-xs sm:text-sm text-[#F1F5F9]/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Whether you are planning a family vacation, a temple visit, a weekend getaway or a multi-day Odisha road trip, enjoy a hassle-free journey with travel itineraries designed around your preferences.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4">
                <Link
                  href="/book-tour"
                  className="px-6 py-3.5 rounded-full bg-gradient-to-b from-[#FEC401] to-[#E5AD00] border-t border-white/40 shadow-skeuo-gold hover:brightness-105 text-[#001162] font-bold text-xs inline-flex items-center gap-2 active:translate-y-0.5 transition-all"
                >
                  <Palmtree className="w-4 h-4 text-[#001162]" />
                  <span>Explore Odisha Tour Packages</span>
                  <ArrowRight className="w-4 h-4 text-[#001162]" />
                </Link>

                <Link
                  href="/book-cab"
                  className="px-5 py-3.5 rounded-full bg-[#02146B] hover:bg-[#0A228C] text-white font-bold text-xs inline-flex items-center gap-2 border border-white/20 transition-all shadow-skeuo-button"
                >
                  <Car className="w-4 h-4 text-[#FEC401]" />
                  <span>Book Your Cab Tour</span>
                </Link>

                <a
                  href={COMPANY_CONFIG.contact.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md text-white font-semibold text-xs inline-flex items-center gap-2 border border-white/20 transition shadow-soft"
                >
                  <MessageSquare className="w-4 h-4 text-[#FEC401]" />
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>

              {/* Trust Assurances */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-[11px] text-[#F1F5F9]/80 border-t border-white/10">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FEC401]" />
                  100% Yellow-Board Commercial Fleet
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FEC401]" />
                  10% Advance Deposit Model
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#FEC401]" />
                  Police-Verified Local Chauffeurs
                </span>
              </div>
            </div>

            {/* Right Column: Prominent Visual Hero Image Card (5 Cols) */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group bg-gradient-to-br from-[#02146B] to-[#000B3B]">
                <div className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1775050416787-fe3179f0679e?q=85&w=1600&auto=format&fit=crop"
                    alt="Odisha Tour Package by Cab - Puri Konark Marine Drive"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000B3B] via-transparent to-black/30 pointer-events-none" />

                  {/* Floating Glass Top Badge */}
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#FEC401]/50 text-[10.5px] font-bold text-[#FEC401] shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#FEC401]" />
                    <span>Golden Triangle &bull; 6 Destinations</span>
                  </div>

                  {/* Floating Glass Bottom Info Bar */}
                  <div className="absolute bottom-3.5 inset-x-3.5 p-3.5 rounded-2xl bg-[#000B3B]/85 backdrop-blur-xl border border-white/20 text-white flex items-center justify-between shadow-2xl">
                    <div className="space-y-0.5">
                      <span className="block text-[10px] font-bold text-[#FEC401] uppercase tracking-wider">
                        Tailored Road Trips &bull; AC Fleet
                      </span>
                      <span className="block text-xs font-bold text-white">
                        Sedan &bull; SUV &bull; Tempo Traveller
                      </span>
                    </div>
                    <Link
                      href="/book-tour"
                      className="px-3 py-1.5 rounded-xl bg-gradient-to-b from-[#FEC401] to-[#E5AD00] hover:brightness-105 text-[#001162] text-xs font-bold shrink-0 inline-flex items-center gap-1 transition-all shadow-sm"
                    >
                      <span>Plan Tour</span>
                      <ArrowRight className="w-3 h-3 text-[#001162]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 1: POPULAR DESTINATIONS COVERED ================= */}
      <section className="py-14 sm:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#02146B] bg-[#02146B]/10 px-3 py-1 rounded-full">
              Scenic &bull; Heritage &bull; Coastal
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#000B3B]">
              Popular Destinations Covered in Our Odisha Tour Packages
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Odisha offers a rich mix of spirituality, heritage, coastline, culture and nature. Our cab tour packages help you explore every jewel of this sacred land with complete peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, idx) => {
              const IconComponent = dest.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group flex flex-col justify-between"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={dest.image}
                      alt={dest.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white">
                      {dest.tag}
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[#000B3B]/10 flex items-center justify-center text-[#02146B] shrink-0">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h3 className="text-sm font-bold text-[#000B3B]">{dest.title}</h3>
                      </div>
                      <p className="text-xs text-[#64748B] mt-2.5 leading-relaxed font-normal">
                        {dest.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] text-[#02146B] font-bold">
                      <span>Available on Daily Circuits</span>
                      <Link
                        href="/book-tour"
                        className="inline-flex items-center gap-1 hover:text-[#FEC401] transition-colors"
                      >
                        Book Ride <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: POPULAR TOUR PACKAGES BY CAB ================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#02146B] bg-[#02146B]/10 px-3 py-1 rounded-full">
              Curated Road Trips
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#000B3B]">
              Popular Odisha Tour Packages by Cab
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Choose from popular Odisha travel routes and sightseeing packages engineered for maximum comfort, punctual dispatch, and unforgettable road journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#FAF9F5] border border-[#E2E8F0] hover:border-[#FEC401] transition-all duration-200 flex flex-col justify-between space-y-5 hover:shadow-md group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[9.5px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#02146B] text-[#FEC401]">
                      {pkg.badge}
                    </span>
                    <span className="text-[11px] font-semibold text-[#64748B] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#02146B]" />
                      {pkg.duration}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#000B3B] group-hover:text-[#02146B] transition-colors leading-snug">
                    {pkg.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#02146B]">{pkg.subtitle}</div>

                  <p className="text-xs text-[#64748B] leading-relaxed font-normal">
                    {pkg.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-[11px] text-[#64748B]">
                    100% Commercial Fleet
                  </span>
                  <Link
                    href={`/book-tour?destination=${pkg.slug}`}
                    className="px-4 py-2 rounded-xl bg-[#000B3B] hover:bg-[#02146B] text-white text-xs font-bold inline-flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <span>Customize &amp; Book</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FEC401]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: PLAN YOUR ODISHA ROAD TRIP (ITINERARY) ================= */}
      <section className="py-14 sm:py-20 bg-[#FAF9F5] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#02146B] bg-[#02146B]/10 px-3 py-1 rounded-full">
              Day-by-Day Road Trip
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#000B3B]">
              Plan Your Odisha Road Trip with a Flexible Itinerary
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Looking for an Odisha tour package by cab for 3 days or 4 days? Having a well-planned itinerary lets you explore major attractions comfortably without rushing your sacred journey.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {itineraryDays.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm flex flex-col sm:flex-row gap-5 items-start"
              >
                <div className="w-full sm:w-32 shrink-0">
                  <div className="inline-block sm:block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-xl bg-gradient-to-r from-[#000B3B] to-[#02146B] text-[#FEC401] text-center">
                    {item.day}
                  </div>
                </div>

                <div className="space-y-2 flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-[#000B3B]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed font-normal">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {item.highlights.map((h, hIdx) => (
                      <span
                        key={hIdx}
                        className="text-[10px] font-semibold text-[#02146B] bg-[#02146B]/5 px-2.5 py-1 rounded-md border border-[#02146B]/10 flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#16A34A]" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <p className="text-xs text-[#64748B] italic max-w-xl mx-auto">
              Note: Your Odisha tour package can be customized based on your number of days, pickup point, sightseeing preferences, and travel pace.
            </p>
            <div className="mt-4">
              <Link
                href="/book-tour"
                className="px-6 py-3 rounded-full bg-gradient-to-b from-[#FEC401] to-[#E5AD00] text-[#001162] font-bold text-xs inline-flex items-center gap-2 shadow-skeuo-gold"
              >
                <span>Customize This 3-Day / 4-Day Itinerary</span>
                <ArrowRight className="w-4 h-4 text-[#001162]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: WHY CHOOSE CABJATRA ================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#02146B] bg-[#02146B]/10 px-3 py-1 rounded-full">
              The Cabjatra Difference
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#000B3B]">
              Why Choose Cabjatra for Your Odisha Tour?
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Travelling through Odisha is memorable when your transportation is smooth, your plans are flexible, and your trip is arranged around what you want.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((pt, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-3xl bg-[#FAF9F5] border border-[#E2E8F0] space-y-2.5"
              >
                <div className="w-8 h-8 rounded-xl bg-[#000B3B] text-[#FEC401] flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-sm font-bold text-[#000B3B]">{pt.title}</h3>
                <p className="text-xs text-[#64748B] leading-relaxed font-normal">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: CHOOSE THE RIGHT CAB ================= */}
      <section className="py-14 sm:py-20 bg-[#FAF9F5] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#02146B] bg-[#02146B]/10 px-3 py-1 rounded-full">
              100% Commercial Fleet
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#000B3B]">
              Choose the Right Cab for Your Odisha Trip
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              The right vehicle makes a long-distance sightseeing trip significantly more comfortable. Whether travelling as a couple, with family, or in a group, pick your vehicle class:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fleetOptions.map((fleet, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm space-y-4 flex flex-col justify-between group hover:border-[#FEC401] transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#02146B] bg-[#02146B]/10 px-2.5 py-1 rounded-md">
                      {fleet.tag}
                    </span>
                    <Car className="w-5 h-5 text-[#FEC401]" />
                  </div>

                  <h3 className="text-xl font-bold text-[#000B3B]">{fleet.category}</h3>
                  <div className="text-xs text-[#02146B] font-semibold">{fleet.models}</div>

                  <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#475569] space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#02146B]" />
                      <span>{fleet.capacity}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {fleet.bestFor}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F1F5F9]">
                  <Link
                    href="/book-tour"
                    className="w-full py-2.5 rounded-xl bg-[#000B3B] hover:bg-[#02146B] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <span>Reserve {fleet.category}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FEC401]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#02146B] bg-[#02146B]/10 px-3 py-1 rounded-full">
              Help &bull; FAQ
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#000B3B]">
              Frequently Asked Questions About Odisha Tour Packages by Cab
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Everything you need to know about itineraries, vehicle choices, advance deposits, and tour pacing.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#E2E8F0] bg-[#FAF9F5] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#000B3B] hover:text-[#02146B] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#02146B] shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs text-[#64748B] leading-relaxed border-t border-[#E2E8F0]/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: FINAL CTA HERO SECTION ================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#000B3B] via-[#02146B] to-[#000B3B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#FEC401_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold text-[#FEC401]">
            <Sparkles className="w-3 h-3" />
            <span>Guaranteed On-Time Dispatch &bull; 10% Advance Deposit</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            Plan Your Odisha Tour with Cabjatra
          </h2>

          <p className="text-xs sm:text-sm text-[#F1F5F9]/85 max-w-2xl mx-auto leading-relaxed">
            Explore Odisha&apos;s temples, beaches, heritage sites, lakes, and scenic spots with a travel plan that fits your exact needs. Whether you want a Bhubaneswar–Puri–Konark sightseeing trip or a custom multi-day road journey through Odisha, Cabjatra helps you plan with seamless cab rides.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <Link
              href="/book-tour"
              className="px-7 py-3.5 rounded-full bg-gradient-to-b from-[#FEC401] to-[#E5AD00] text-[#001162] font-bold text-xs inline-flex items-center gap-2 shadow-skeuo-gold hover:brightness-105 transition-all"
            >
              <Palmtree className="w-4 h-4 text-[#001162]" />
              <span>Book Your Odisha Cab Tour</span>
              <ArrowRight className="w-4 h-4 text-[#001162]" />
            </Link>

            <a
              href={COMPANY_CONFIG.contact.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs inline-flex items-center gap-2 border border-white/20 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-[#FEC401]" />
              <span>Get a Customized Tour Quote</span>
            </a>
          </div>

          <div className="text-[11px] text-[#F1F5F9]/70 pt-2">
            Helpline: {COMPANY_CONFIG.contact.phoneDisplay} &bull; 24/7 Central Dispatch Desk
          </div>
        </div>
      </section>
    </div>
  );
}
