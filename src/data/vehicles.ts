export interface VehicleCategory {
  id: string;
  name: string;
  subtitle: string;
  category: "Hatchback" | "Sedan" | "SUV" | "Large car" | "Mini bus";
  models: string; // The exact example cars from FRD!
  passengers: number;
  luggage: number;
  ac: boolean;
  image: string;
  indicativeBaseFare: string;
  ratePerKm: number;
  features: string[];
  recommendedFor: string;
  tag?: string;
}

export const VEHICLE_FLEET: VehicleCategory[] = [
  {
    id: "hatchback",
    name: "Hatchback",
    subtitle: "Agile, air-conditioned & budget-efficient for compact travel",
    category: "Hatchback",
    models: "Maruti Alto, Swift, WagonR",
    passengers: 4,
    luggage: 2,
    ac: true,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=900&auto=format&fit=crop",
    indicativeBaseFare: "Commercial Permit • AC Guaranteed",
    ratePerKm: 11,
    features: [
      "Full AC with clean fabric upholstery",
      "Compact luggage storage (2 travel bags)",
      "Punctual point-to-point urban & transit transfers",
      "Experienced yellow-board commercial chauffeur"
    ],
    recommendedFor: "Solo travelers, couples, quick local transfers and daily airport connections",
    tag: "Budget Friendly"
  },
  {
    id: "sedan",
    name: "Sedan",
    subtitle: "The gold standard for comfortable family & executive highway travel",
    category: "Sedan",
    models: "Swift Dzire, Toyota Etios, Honda Amaze",
    passengers: 4,
    luggage: 3,
    ac: true,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=900&auto=format&fit=crop",
    indicativeBaseFare: "Chauffeur Driven • Dual-Zone AC",
    ratePerKm: 13,
    features: [
      "Extra rear legroom & plush ergonomic seating",
      "Generous boot space for up to 3 large suitcases",
      "Smooth highway stability for Puri & Konark coastal corridors",
      "Mobile charger & chilled bottled water provision"
    ],
    recommendedFor: "Small families, business executives, comfortable Golden Triangle tours",
    tag: "Most Popular"
  },
  {
    id: "suv",
    name: "SUV",
    subtitle: "High ground clearance & rugged highway durability for all Odisha terrains",
    category: "SUV",
    models: "Mahindra Bolero, Scorpio, Maruti Brezza",
    passengers: 6,
    luggage: 3,
    ac: true,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=900&auto=format&fit=crop",
    indicativeBaseFare: "High Ground Clearance • Rugged AC",
    ratePerKm: 16,
    features: [
      "High ground clearance for interior routes and ghat corridors",
      "Comfortable seating configuration for up to 6 passengers",
      "Dedicated boot and roof space for 3 suitcases",
      "Tough suspension built for temple hinterlands and coastal roads"
    ],
    recommendedFor: "Medium families, interior temple routes, rural highways & weekend excursions",
    tag: "Rugged Highway"
  },
  {
    id: "large-car",
    name: "Large car",
    subtitle: "Premium 7-seater space, dual-blower AC, and royal ride quality",
    category: "Large car",
    models: "Toyota Innova Crysta, Kia Carens, Maruti Ertiga",
    passengers: 7,
    luggage: 4,
    ac: true,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=900&auto=format&fit=crop",
    indicativeBaseFare: "Innova Crysta Class • Captain Seats",
    ratePerKm: 19,
    features: [
      "Dual-zone climate control with dedicated rear AC roof vents",
      "Plush captain chairs / flexible 7-passenger configuration",
      "Expansive rear luggage bay accommodating 4 large suitcases",
      "Superior highway suspension for fatigue-free long-distance journeys"
    ],
    recommendedFor: "Larger families, senior citizens requiring easy ingress, multi-day Odisha expeditions",
    tag: "Premium Comfort"
  },
  {
    id: "mini-bus",
    name: "Mini bus",
    subtitle: "Spacious group travel solution with push-back seats and high roof aisle",
    category: "Mini bus",
    models: "Tempo Traveller, Force Urbania",
    passengers: 17,
    luggage: 10,
    ac: true,
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=900&auto=format&fit=crop",
    indicativeBaseFare: "Push-back Seats • Group Travel",
    ratePerKm: 28,
    features: [
      "Individual reclining push-back seats with padded armrests",
      "High-roof standing aisle with panoramic tour windows",
      "Dedicated heavy luggage bay & overhead racks for 10 bags",
      "Integrated PA audio microphone system for guided pilgrimages & yatras"
    ],
    recommendedFor: "Family pilgrimage yatras, wedding entourages, corporate offsites, tour groups",
    tag: "Large Groups"
  }
];
