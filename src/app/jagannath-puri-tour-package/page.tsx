import React from "react";
import { TourPackageDetailPage } from "@/components/tours/TourPackageDetailPage";

export default function JagannathPuriTourPackagePage() {
  const destinations = [
    {
      title: "Sri Jagannath Temple & Singhadwara",
      desc: "One of the sacred Char Dham shrines. Witness the towering 65-meter temple spire, Patitapavana deity, the 22 holy steps (Baisi Pahacha), and the sacred Nilachakra flag changing ceremony.",
      tag: "Char Dham Mahaprabhu Shrine",
      image: "https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Lord Jagannath Inner Sanctum", "Singhadwara Lion Gate", "Baisi Pahacha 22 Steps", "Nilachakra Flag Ritual"],
    },
    {
      title: "Anand Bazaar & Sacred Mahaprasad",
      desc: "The world's largest open-air kitchen and sacred community food market inside the temple, where thousands partake in consecrated earthen pot Mahaprasad (Chappan Bhog).",
      tag: "World's Largest Sacred Food Market",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Earthen Pot Mahaprasad", "Khaja Sweets of Puri", "Pakhala & Dalma Bhog", "Community Dining"],
    },
    {
      title: "Panchatirtha (Five Sacred Water Tanks)",
      desc: "The five holy pilgrimage bathing reservoirs in Puri: Indradyumna Tank, Rohini Kunda, Markandeya Sarovar, Sweta Ganga, and Mahodadhi (the sacred ocean sea beach).",
      tag: "Five Holy Tirthas",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Indradyumna Sacred Tank", "Markandeya Shiva Sarovar", "Sweta Ganga Spring", "Mahodadhi Sea Beach"],
    },
    {
      title: "Gundicha Temple & Garden Palace",
      desc: "The sacred garden retreat where Lord Jagannath, Balabhadra, and Subhadra reside for nine days during the historic annual Ratha Yatra festival.",
      tag: "Ratha Yatra Garden Palace",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Gundicha Temple Sanctum", "Lush Garden Mandapa", "Chariot Parking Point", "Serene Courtyard"],
    },
    {
      title: "Lokanath Temple & Alarnath Shrine",
      desc: "Ancient Shiva shrine where the Shivalinga remains immersed in natural holy spring water, and Brahmagiri Alarnath temple visited by thousands of devotees.",
      tag: "Submerged Shivalinga",
      image: "https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Submerged Shivalinga Shrine", "Pankoddhar Ekadasi Ritual", "Brahmagiri Alarnath Temple", "Sacred Kheer Bhog"],
    },
    {
      title: "Tota Gopinath Temple & Sri Chaitanya Heritage",
      desc: "Sacred Gaudiya Vaishnava shrine where Sri Chaitanya Mahaprabhu spent his final days in deep spiritual ecstasy, beholding the seated deity of Tota Gopinath.",
      tag: "Sri Chaitanya Mahaprabhu Shrine",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=85&w=900&auto=format&fit=crop",
      keyAttractions: ["Seated Tota Gopinath Idol", "Sri Chaitanya Living Quarters", "Quiet Orchard Courtyard", "Vaishnava Kirtan"],
    },
  ];

  const packages = [
    {
      title: "Complete Jagannath Puri Darshan Package",
      subtitle: "Jagannath Temple • Anand Bazaar • Gundicha • Panchatirtha",
      duration: "Full Day (8 Hours)",
      badge: "Most Popular Pilgrimage",
      approxPrice: "From ₹1,650 (Sedan)",
      highlights: [
        "Doorstep hotel or railway station pickup with verified driver",
        "Police-approved drop near Singhadwara corridor",
        "Anand Bazaar Mahaprasad collection guidance",
        "Safe mobile and leather bag custody inside air-conditioned cab",
      ],
    },
    {
      title: "Jagannath Puri + Alarnath Brahmagiri Pilgrimage",
      subtitle: "Lord Jagannath & Sacred Alarnath Kheer Shrine",
      duration: "Full Day (8 Hours / 80 Km)",
      badge: "Deep Spiritual Trail",
      approxPrice: "From ₹2,250 (Sedan)",
      highlights: [
        "Puri Jagannath Temple early morning darshan",
        "Drive to Brahmagiri Alarnath Temple (25 km from Puri)",
        "Savor the famous condensed milk Kheer bhog offering",
        "Return drop at your Puri beach hotel or railway station",
      ],
    },
    {
      title: "Bhubaneswar to Jagannath Puri Same-Day Pilgrimage",
      subtitle: "Bhubaneswar ⇄ Dhauli ⇄ Pipili ⇄ Puri Temple ⇄ Return",
      duration: "10 Hours / 140 Km RT",
      badge: "Capital to Dham Express",
      approxPrice: "From ₹2,650 (Sedan)",
      highlights: [
        "Punctual pickup from BBI Airport or Bhubaneswar Hotel",
        "Smooth drive along NH-316 highway with Pipili halt",
        "Full afternoon dedicated to sacred Jagannath darshan & beach",
        "Comfortable evening return drop to Bhubaneswar",
      ],
    },
    {
      title: "Jagannath Puri Senior Citizen Special",
      subtitle: "Paced for Elderly Parents & Pilgrims",
      duration: "2 Days / 1 Night",
      badge: "Elderly & Family Friendly",
      approxPrice: "From ₹4,850 (Innova Crysta)",
      highlights: [
        "Spacious Innova Crysta with captain seats & superior suspension",
        "Patient, courteous driver who accommodates frequent breaks",
        "Assistance with temple rickshaw and drop closest to gates",
        "Safe luggage custody during extended temple prayers",
      ],
    },
  ];

  const itineraryDays = [
    {
      day: "Morning (06:00 AM – 11:30 AM)",
      title: "Sacred Mahaprabhu Jagannath Darshan & Singhadwara",
      desc: "Doorstep pickup by your private AC cab. Drive to the Grand Road (Bada Danda). Walk past the Singhadwara Lion Gate, touch the sacred 22 steps (Baisi Pahacha), and behold Lord Jagannath, Balabhadra, and Devi Subhadra upon the Ratnavedi. Witness the fluttering holy Patitapavana flag.",
      highlights: ["Singhadwara Lion Gate", "Baisi Pahacha", "Mahaprabhu Sanctum", "Patitapavana Flag"],
    },
    {
      day: "Afternoon (12:00 PM – 03:30 PM)",
      title: "Anand Bazaar Mahaprasad & Sacred Tanks",
      desc: "Visit the sacred Anand Bazaar inside the temple complex. Experience the divine earthen-pot Chappan Bhog cooked in clay vessels over wood fires. Visit the sacred Indradyumna Tank and Markandeya Sarovar for holy water sprinkling before taking a relaxing afternoon rest at your hotel.",
      highlights: ["Anand Bazaar Chappan Bhog", "Indradyumna Sacred Tank", "Markandeya Sarovar", "Puri Khaja Stalls"],
    },
    {
      day: "Evening (04:30 PM – 07:30 PM)",
      title: "Gundicha Temple, Tota Gopinath & Golden Beach Sunset",
      desc: "Proceed in your private cab to Gundicha Temple (Garden House of the deities). Visit the tranquil Tota Gopinath shrine sanctified by Sri Chaitanya Mahaprabhu. Complete your spiritual day at the sacred Mahodadhi (Puri Golden Beach) listening to the evening waves.",
      highlights: ["Gundicha Temple Garden", "Tota Gopinath Shrine", "Mahodadhi Holy Sea Beach", "Evening Aarti Wind"],
    },
  ];

  const whyChoosePoints = [
    {
      title: "Pilgrim-First Courteous Drivers",
      desc: "Our verified local chauffeurs treat senior pilgrims with utmost reverence, assisting with vehicle boarding and drop points closest to temple barriers.",
    },
    {
      title: "Safe Valuables Custody",
      desc: "Mobile phones, cameras, leather belts, and wallets are barred inside the temple. Leave them completely safe inside your locked private AC cab.",
    },
    {
      title: "Zero Darshan Waiting Rush",
      desc: "Temple rituals can take hours. Your private cab waits patiently at the designated parking bay with no meter pressure or cancellation anxiety.",
    },
    {
      title: "Anand Bazaar Mahaprasad Guidance",
      desc: "Our local drivers guide you on how to procure authentic hot earthen pot Mahaprasad and traditional Puri Khaja directly from trusted counters.",
    },
    {
      title: "Guaranteed Fixed Pricing Model",
      desc: "Transparent fixed tariffs with no hidden surge pricing during Rath Yatra, holidays, or temple festivals. Settled conveniently at trip drop.",
    },
    {
      title: "100% Commercial Yellow-Board Fleet",
      desc: "Fully registered commercial vehicles with passenger insurance, dual-zone AC, and comprehensive background verification.",
    },
  ];

  const inclusions = [
    "Private commercial yellow-board vehicle (Sedan, SUV Crysta, or Tempo)",
    "Dedicated local chauffeur with intimate knowledge of temple bypasses",
    "All vehicle fuel costs, parking bay charges, and driver allowances",
    "Doorstep pickup & drop at Puri hotels, resorts, or Railway Station",
    "Safe custody of leather items and mobile phones during temple darshan",
    "Chilled dual-zone air conditioning and complimentary bottled water",
  ];

  const exclusions = [
    "Temple priest / Panda offerings, VIP darshan tokens, and puja dakshina",
    "Temple earthen-pot Mahaprasad and dry Khaja purchases",
    "Personal battery-rickshaw charges inside restricted pedestrian zones",
    "Personal meals and hotel accommodation",
  ];

  const faqs = [
    {
      q: "What is the dress code for entering Jagannath Puri Temple?",
      a: "Devotees are expected to wear traditional modest attire. Men should wear dhoti-kurta, kurta-pyjama, or trousers with shirts; women should wear sarees, salwar suits, or traditional Indian dresses. Sleeveless clothing, shorts, and western nightwear are discouraged.",
    },
    {
      q: "Are cameras, mobile phones, and leather items permitted inside the temple?",
      a: "No. Cameras, mobile phones, smartwatches, leather belts, and leather purses are strictly prohibited by temple administration. With CABJATRA, you can safely leave all prohibited items locked inside your private AC cab under your driver's custody.",
    },
    {
      q: "How can senior citizens easily access the temple without excessive walking?",
      a: "Our private cab drops senior citizens at the closest police barrier (near Medical Square or Municipal Market). Authorized battery-operated e-rickshaws are available from there directly to the Singhadwara gate. Wheelchairs are also provided by the temple administration.",
    },
    {
      q: "What is the best time for sacred darshan of Lord Jagannath?",
      a: "Early mornings (between 06:00 AM and 08:30 AM) during Mangala Aarti and Abakasha rituals offer relatively peaceful darshan with manageable queues. Evenings (around Sandhya Aarti) are also auspicious, followed by the Nilachakra flag changing ritual.",
    },
    {
      q: "How do I book a Jagannath Puri cab tour package?",
      a: "Choose your preferred tour package on our website, receive instant confirmation, and get your driver's contact details and vehicle confirmation voucher instantly via WhatsApp.",
    },
  ];

  return (
    <TourPackageDetailPage
      title="Jagannath Puri Tour Package"
      subtitle="Experience the divine bliss of Mahaprabhu Jagannath Dham, Anand Bazaar Mahaprasad, and sacred Panchatirtha by private AC cab"
      tagline="Curated sacred pilgrimage and Char Dham darshan tours with verified local chauffeurs"
      badge="Sacred Char Dham &bull; Mahaprabhu Jagannath Pilgrimage"
      heroImage="https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?q=85&w=1600&auto=format&fit=crop"
      overview="Embark on a soul-stirring spiritual journey to Sri Jagannath Dham Puri, one of the four most sacred Char Dham pilgrimages of India. Behold the divine form of Lord Jagannath, Devi Subhadra, and Lord Balabhadra upon the Ratnavedi, walk through the hallowed Singhadwara Lion Gate, taste divine earthen-pot Mahaprasad at Anand Bazaar, and visit the sacred tanks of Panchatirtha. CABJATRA provides dedicated, senior-friendly private AC cabs, verified chauffeurs, and safe custody of your valuables during darshan."
      durationBadge="1 to 3 Days • Sacred Pilgrimage"
      startingFromNote="From ₹1,650 • Guaranteed Allocation"
      destinations={destinations}
      packages={packages}
      itineraryDays={itineraryDays}
      whyChoosePoints={whyChoosePoints}
      inclusions={inclusions}
      exclusions={exclusions}
      faqs={faqs}
      bookingTourSlug="puri"
    />
  );
}
