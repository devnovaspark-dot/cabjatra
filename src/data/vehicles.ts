export interface VehicleCategory {
  id: string;
  name: string;
  subtitle: string;
  category: "Hatchback" | "Sedan" | "SUV" | "Tempo Traveller";
  models: string;
  passengers: number;
  luggage: number;
  ac: boolean;
  image: string;
  indicativeBaseFare: string;
  features: string[];
  recommendedFor: string;
  tag?: string;
}

export const VEHICLE_FLEET: VehicleCategory[] = [
  {
    id: "hatchback",
    name: "Economy Hatchback",
    subtitle: "Agile, comfortable & cost-efficient for compact groups",
    category: "Hatchback",
    models: "Maruti Suzuki WagonR, Swift, Celerio or equivalent",
    passengers: 4,
    luggage: 2,
    ac: true,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=900&auto=format&fit=crop",
    indicativeBaseFare: "Commercial Permit • AC Guaranteed",
    features: [
      "Full AC with clean fabric seating",
      "Compact luggage storage (2 medium bags)",
      "Punctual point-to-point city transit",
      "Fuel & chauffeur allowances included in base quote"
    ],
    recommendedFor: "Solo travelers, couples, quick local transfers and daily airport connections",
    tag: "Budget Friendly"
  },
  {
    id: "sedan",
    name: "Executive Prime Sedan",
    subtitle: "The gold standard for comfortable family & business travel",
    category: "Sedan",
    models: "Maruti Suzuki Dzire, Toyota Etios, Hyundai Aura or equivalent",
    passengers: 4,
    luggage: 3,
    ac: true,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=900&auto=format&fit=crop",
    indicativeBaseFare: "Chauffeur Driven • Dual-Zone AC",
    features: [
      "Extra rear legroom & plush upholstery",
      "Generous boot space for up to 3 large suitcases",
      "Smooth highway stability for Puri & Konark trips",
      "Phone charger & bottled water provision"
    ],
    recommendedFor: "Small families, business executives, comfortable Golden Triangle tours",
    tag: "Most Popular"
  },
  {
    id: "suv",
    name: "Premium Luxury SUV",
    subtitle: "Maximum space, power and high-ride comfort for highway trails",
    category: "SUV",
    models: "Toyota Innova Crysta, Maruti Ertiga, Kia Carens or equivalent",
    passengers: 7,
    luggage: 5,
    ac: true,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=900&auto=format&fit=crop",
    indicativeBaseFare: "Innova Crysta Class • Extra Legroom",
    features: [
      "Dual-zone climate control with rear AC vents",
      "Captains chairs / flexible 6-7 seat configuration",
      "Expansive luggage bay for multi-day tour luggage",
      "Superior highway suspension for comfortable long journeys"
    ],
    recommendedFor: "Larger families, senior citizens requiring easy ingress, multi-day Odisha expeditions",
    tag: "Premium Comfort"
  },
  {
    id: "tempo-traveller",
    name: "Luxury Tempo Traveller",
    subtitle: "Spacious group travel solution with panoramic windows",
    category: "Tempo Traveller",
    models: "Force Urbania / Traveller 12-17 Seater AC",
    passengers: 15,
    luggage: 10,
    ac: true,
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=900&auto=format&fit=crop",
    indicativeBaseFare: "Push-back Seats • Group Travel",
    features: [
      "Reclining push-back individual seats with armrests",
      "High roof with standing aisle space",
      "Dedicated overhead luggage racks & separate boot",
      "PA audio system for guided group tours & yatras"
    ],
    recommendedFor: "Family pilgrimage yatras, wedding entourages, corporate offsites, school groups",
    tag: "Large Groups"
  }
];

