import React from "react";
import { TourPackageDetailPage } from "@/components/tours/TourPackageDetailPage";

export default function BhubaneswarTourPackagesPage() {
  const destinations = [
    {
      title: "Lingaraj Temple & Bindusagar Sacred Lake",
      desc: "The monumental 11th-century shrine dedicated to Lord Harihara, showcasing quintessential Kalinga stone architecture, intricate carvings, and the sacred Bindusagar lake.",
      tag: "11th-Century Landmark",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Lingaraj Main Temple", "Bindusagar Lake", "Ananta Vasudeva", "Old Town Heritage Lanes"],
    },
    {
      title: "Mukteswar & Parasurameswara Temples",
      desc: "Widely regarded as the 'Gem of Odisha Architecture', renowned for its arched torana gateway, miniature sculptures, and 7th-century shrines.",
      tag: "Gem of Odishan Art",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Carved Torana Gateway", "Marichi Kunda", "Parasurameswara Shrine", "Shashthi Devi Sculptures"],
    },
    {
      title: "Dhauli Shanti Stupa & Daya River",
      desc: "The gleaming white Buddhist Peace Pagoda situated on Dhauli hill overlooking the Daya River, where Emperor Ashoka embraced non-violence after the Kalinga War.",
      tag: "Buddhist Peace Pagoda",
      image: "https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["White Stupa & Buddha Relics", "Ashokan Rock Edicts", "Daya River Panoramic View", "Peace Garden"],
    },
    {
      title: "Udayagiri & Khandagiri Jain Caves",
      desc: "Ancient rock-cut caves dating back to the 2nd century BCE (King Kharavela reign) featuring Rani Gumpha, Hathi Gumpha inscriptions, and panoramic city hill views.",
      tag: "Ancient Rock-Cut Caves",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Rani Gumpha Double Storey", "Hathi Gumpha Brahmi Edict", "Tiger Cave", "Khandagiri Jain Shrines"],
    },
    {
      title: "Nandankanan Zoological Park & Safari",
      desc: "World-renowned zoo located in Chandaka forest, famous for White Tigers, lion safari, reptile park, and tranquil botanical garden around Kanjia lake.",
      tag: "White Tiger Safari",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["White Tiger Safari", "Lion Safari Bus", "Reptile & Nocturnal Park", "Kanjia Lake Toy Train"],
    },
    {
      title: "Ekamra Haat & Odisha State Museum",
      desc: "Rich cultural hub showcasing ancient palm-leaf manuscripts, tribal bronzes, and local handloom craft pavilions with live artisan stalls.",
      tag: "Culture & Handicrafts",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Palm-Leaf Manuscript Gallery", "Tribal Craft Stalls", "Odisha Handloom Silk", "Traditional Odia Food"],
    },
  ];

  const packages = [
    {
      title: "Bhubaneswar Full-Day Temple & Heritage Trail",
      subtitle: "Lingaraj • Mukteswar • Rajarani • Dhauli Stupa",
      duration: "8 Hours / 80 Km",
      badge: "Most Popular",
      approxPrice: "From ₹1,850 (Sedan)",
      highlights: [
        "Doorstep pickup from hotel, BBI Airport, or railway station",
        "Covers all primary Kalinga temples & Dhauli Peace Pagoda",
        "Khandagiri & Udayagiri ancient rock caves",
        "Air-conditioned cab waiting during temple visits",
      ],
    },
    {
      title: "Bhubaneswar Heritage + Nandankanan Safari",
      subtitle: "Full-Day Temple City & Wildlife Safari",
      duration: "10 Hours / 100 Km",
      badge: "Family & Kids Special",
      approxPrice: "From ₹2,250 (Sedan)",
      highlights: [
        "Morning temple darshan at Lingaraj & Mukteswar",
        "Afternoon visit to Nandankanan Zoo & White Tiger safari",
        "Spacious AC car with ample legroom for children and seniors",
        "Drop-off at your preferred Bhubaneswar restaurant or hotel",
      ],
    },
    {
      title: "Bhubaneswar Half-Day Express Temple Tour",
      subtitle: "Quick Pilgrimage & Architectural Tour",
      duration: "4 Hours / 40 Km",
      badge: "Transit Special",
      approxPrice: "From ₹1,199 (Sedan)",
      highlights: [
        "Perfect for travelers with tight flight or train layovers",
        "Covers Lingaraj, Mukteswar, and Rajarani temples",
        "Airport meet-and-greet with dedicated luggage custody",
        "Punctual drop-off back to BBI airport terminal",
      ],
    },
    {
      title: "Bhubaneswar to Dhauli & Pipili Craft Excursion",
      subtitle: "Buddhist Peace Trail & Appliqué Village",
      duration: "5 Hours / 50 Km",
      badge: "Art & History",
      approxPrice: "From ₹1,450 (Sedan)",
      highlights: [
        "Dhauli Shanti Stupa & historic Daya river battlefield",
        "Pipili artisan village for authentic Odisha appliqué crafts",
        "Comfortable AC ride with verified local driver",
        "Zero surge pricing guarantee",
      ],
    },
  ];

  const itineraryDays = [
    {
      day: "Morning (08:30 AM – 12:30 PM)",
      title: "Old Town Sacred Temple Circuit",
      desc: "Doorstep pickup by your private AC cab. Begin at the magnificent 11th-century Lingaraj Temple (viewing platform accessible for all visitors). Stroll by the sacred Bindusagar Lake to the 10th-century Mukteswar Temple, admiring the delicate Torana stone archway. Conclude morning sightseeing at Rajarani Temple, known as the 'Love Temple' of Odisha for its erotic figurines.",
      highlights: ["Lingaraj Temple", "Bindusagar Lake", "Mukteswar Torana", "Rajarani Temple"],
    },
    {
      day: "Afternoon (01:30 PM – 04:30 PM)",
      title: "Dhauli Shanti Stupa & Kalinga War Historical Trail",
      desc: "Relish an authentic Odia thali lunch at a recommended local restaurant. Drive south to Dhauli Giri hills overlooking the Daya River. Visit the majestic white Peace Pagoda, walk beside the 3rd-century BCE Ashokan rock edicts, and soak in peaceful panoramic countryside vistas.",
      highlights: ["Dhauli Peace Pagoda", "Ashokan Rock Edicts", "Daya River Viewpoint", "Lord Dhavaleswar"],
    },
    {
      day: "Evening (04:45 PM – 07:30 PM)",
      title: "Udayagiri Caves & Ekamra Haat Craft Market",
      desc: "Explore the rock-cut Jain cave complex at Udayagiri and Khandagiri. Climb up to Rani Gumpha and admire the historic Hathigumpha inscription. Finish your day at Ekamra Haat open-air artisan market for authentic Sambalpuri handloom sarees, stone sculptures, and hot chena poda sweet.",
      highlights: ["Rani Gumpha Cave", "Kharavela Inscriptions", "Sunset over City", "Ekamra Haat Handlooms"],
    },
  ];

  const whyChoosePoints = [
    {
      title: "Experienced Temple Chauffeurs",
      desc: "Our local drivers know approved parking zones, temple darshan rules, camera permit guidelines, and non-crowded gate entries.",
    },
    {
      title: "100% Chilled AC Throughout",
      desc: "Bhubaneswar weather can get humid. Step back into a cool, air-conditioned vehicle after every temple climb or cave walk.",
    },
    {
      title: "Safe Luggage Custody",
      desc: "Mobile phones and leather goods are prohibited inside Lingaraj Temple. Leave your valuables securely locked inside the cab with our verified driver.",
    },
    {
      title: "Flexible Waiting Times",
      desc: "Take as much time as you like for photography, museum galleries, or handicraft shopping with zero driver meter pressure.",
    },
    {
      title: "Fixed Transparent Tariffs",
      desc: "Pay a nominal 10% advance deposit to lock your car. No hidden driver food charges or arbitrary kilometer inflation.",
    },
    {
      title: "Punctual Airport & Station Pickups",
      desc: "Complimentary flight and train tracking ensures your driver is waiting at the arrival exit the moment you land.",
    },
  ];

  const inclusions = [
    "Private commercial yellow-board vehicle (Sedan, SUV, or Tempo)",
    "Dedicated background-verified driver acting as local area guide",
    "All vehicle fuel costs, parking fees, and driver allowances",
    "Doorstep pickup & drop anywhere in Bhubaneswar",
    "Safe custody of leather items and mobile phones during temple visits",
    "Full air conditioning and chilled bottled water",
  ];

  const exclusions = [
    "Monument entry fees (e.g. Udayagiri & Khandagiri ASI entry ticket: ₹25)",
    "Nandankanan Zoo entry & Safari bus tickets",
    "Temple priest / Panda dakshina or personal puja offerings",
    "Personal meals, snacks, and beverage expenses",
  ];

  const faqs = [
    {
      q: "Are non-Hindus allowed inside Lingaraj Temple?",
      a: "Non-Hindus are not permitted inside the inner sanctum of Lingaraj Temple. However, a dedicated raised viewing platform built by Lord Curzon outside the northern perimeter wall offers a spectacular, unobstructed panoramic view of the entire temple complex for all visitors.",
    },
    {
      q: "Are mobile phones and leather bags allowed inside Bhubaneswar temples?",
      a: "Mobile phones, cameras, leather belts, and leather bags are strictly prohibited inside Lingaraj Temple. When touring with CABJATRA, you can safely leave all prohibited items locked inside your private air-conditioned cab under your driver's custody.",
    },
    {
      q: "How many hours are required for a comprehensive Bhubaneswar city tour?",
      a: "An 8-hour / 80-km package comfortably covers Lingaraj, Mukteswar, Rajarani, Dhauli Shanti Stupa, and Khandagiri Caves. If you also wish to visit Nandankanan Zoological Park, a 10-hour package is recommended.",
    },
    {
      q: "Can the driver drop us at Puri or BBI Airport at the end of the tour?",
      a: "Yes! You can choose an outstation extension to Puri, Konark, or Cuttack at the end of your Bhubaneswar tour for a nominal transparent kilometer fare.",
    },
    {
      q: "How do I book a Bhubaneswar cab tour with Cabjatra?",
      a: "Select your preferred tour package on our website, pay a simple 10% advance deposit, and receive your driver's contact details and vehicle voucher instantly via WhatsApp.",
    },
  ];

  return (
    <TourPackageDetailPage
      title="Bhubaneswar Tour Packages"
      subtitle="Explore the Temple City of India with private commercial AC cabs, experienced chauffeurs, and flexible temple sightseeing"
      tagline="Curated Temple City circuits covering Lingaraj, Mukteswar, Dhauli Peace Pagoda & Khandagiri Caves"
      badge="Ekamra Kshetra & Temple City Heritage Trail"
      heroImage="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=85&w=1600&auto=format&fit=crop"
      overview="Discover Bhubaneswar, the ancient capital of Kalinga and the Temple City of India. Home to over 500 ancient sandstone shrines, Emperor Ashoka's rock edicts at Dhauli, and the rock-hewn Jain monastic caves of Udayagiri, Bhubaneswar offers an extraordinary journey into India's spiritual and architectural heritage. Travel effortlessly with CABJATRA's private commercial AC cabs, verified local chauffeurs, and flexible itineraries tailored to your family's pace."
      durationBadge="Half Day to Full Day • 100% Flexible"
      startingFromNote="From ₹1,199 • 10% Advance Deposit"
      destinations={destinations}
      packages={packages}
      itineraryDays={itineraryDays}
      whyChoosePoints={whyChoosePoints}
      inclusions={inclusions}
      exclusions={exclusions}
      faqs={faqs}
      bookingTourSlug="temple"
    />
  );
}
