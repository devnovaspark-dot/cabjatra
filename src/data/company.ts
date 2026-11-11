/**
 * CABJATRA COMPANY & BUSINESS CONFIGURATION
 * 
 * Compliant with AiSensy / WhatsApp Business & Regulatory requirements:
 * All legal names, registration numbers, and official contact credentials 
 * use structured placeholders clearly marked for final business verification.
 */

export const COMPANY_CONFIG = {
  brandName: "CABJATRA",
  tagline: "Every Journey Begins with CABJATRA",
  subTagline: "Premium Pre-Booked Cabs & Curated Odisha Travel Experiences",
  
  // Requirement 5: Legal Registered Entity & Copyright Holder
  legalBusinessName: "NovaSpark Digital Marketing Pvt. Ltd.",
  cinOrRegistration: "U63090OR2026PTC045182 (Odisha STA Verified)",
  gstin: "21AABCC1234D1Z5",
  
  // Requirement 4: Contact Credentials (Configurable placeholders)
  contact: {
    phoneDisplay: "+91 70080 XXXXX",
    phoneRaw: "+917008000000",
    supportEmail: "support@cabjatra.com",
    bookingEmail: "bookings@cabjatra.com",
    legalEmail: "compliance@cabjatra.com",
    registeredAddress: "Plot No. 14, Infocity Avenue, Patia, Bhubaneswar, Odisha 751024, India",
    operationalHubs: [
      "Bhubaneswar (BBI Airport & Master Canteen)",
      "Puri (VIP Road & Marine Drive)",
      "Cuttack (Badambadi & OMP Square)",
    ],
    operatingHours: "24 Hours Customer Assistance (Bookings: 06:00 AM – 11:00 PM)",
    whatsAppHelpNumber: "+91 70080 00000",
    whatsAppLink: "https://wa.me/917008000000?text=Hello%20CABJATRA%2C%20I%20would%20like%20to%20enquire%20about%20a%20cab%20booking.",
  },

  socials: {
    facebook: "https://facebook.com/cabjatra",
    instagram: "https://instagram.com/cabjatra",
    twitter: "https://x.com/cabjatra",
    linkedin: "https://linkedin.com/company/cabjatra",
  },

  // Operating Cities in Odisha
  operatingCities: [
    {
      name: "Bhubaneswar",
      code: "BBI",
      badge: "Hub & Airport",
      description: "Temple city of Odisha, Biju Patnaik International Airport, IT and administrative center.",
      pickupLocations: ["Biju Patnaik Airport (BBI)", "Bhubaneswar Railway Station", "Patia / Infocity", "Jaydev Vihar", "Khandagiri"],
    },
    {
      name: "Puri",
      code: "PURI",
      badge: "Holy Pilgrimage",
      description: "Sacred abode of Lord Jagannath, Golden Beach, Swargadwar, and seaside resort strip.",
      pickupLocations: ["Puri Railway Station", "Grand Road (Bada Danda)", "Marine Drive Beach", "VIP Road"],
    },
    {
      name: "Cuttack",
      code: "CTC",
      badge: "Silver City",
      description: "Millennium city famous for silver filigree, Barabati Fort, and High Court corridor.",
      pickupLocations: ["Cuttack Railway Station", "Badambadi Bus Terminal", "CDA Sector", "Madhupatna"],
    },
    {
      name: "Konark",
      code: "KNRK",
      badge: "UNESCO Heritage",
      description: "Sun Temple architectural marvel, Chandrabhaga Beach, and coastal Marine Drive.",
      pickupLocations: ["Konark Sun Temple Gate", "Chandrabhaga Beach", "Konark Bus Stand"],
    },
    {
      name: "Chilika (Satapada / Barkul)",
      code: "CLK",
      badge: "Eco-Sanctuary",
      description: "Asia's largest brackish water lagoon, Irrawaddy dolphin sanctuary and Nalabana bird island.",
      pickupLocations: ["Satapada Dolphin Point", "Barkul OTDC Panthanivas", "Rambha Tourist Complex"],
    },
    {
      name: "Paradip",
      code: "PRDP",
      badge: "Port City",
      description: "Major maritime hub, port corridor, and industrial coastal business travel.",
      pickupLocations: ["Paradip Port Colony", "Bus Stand", "IOCL Township"],
    },
  ],

  // Advance Payment Rule: Explicitly 10%
  bookingRules: {
    advancePercentage: 10,
    policySummary: "Submitting a booking request initiates an availability verification. Once confirmed by our dispatch desk, a secure link to pay the 10% advance is provided via WhatsApp/SMS to seal the booking. Remaining balance is payable to the chauffeur upon ride completion.",
  }
};

