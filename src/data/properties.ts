import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

export interface Property {
  id: number;
  slug: string;
  title: string;
  location: string;
  price: string;
  image: string;
  images?: string[];
  bedrooms: number;
  bathrooms: number;
  sqft: string;
  type: string;
  developer: string;
  completion: string;
  features: string[];
  description: string;
  amenities: string[];
  paymentPlan?: string;
  contact: {
    phone: string;
    email: string;
    whatsapp: string;
  };
}

export const properties: Property[] = [
  {
    id: 1,
    slug: "luxury-modern-villa-palm-jumeirah",
    title: "Luxury Modern Villa",
    location: "Palm Jumeirah, Dubai",
    price: "AED 12,500,000",
    image: property1,
    images: [property1, property4, property5],
    bedrooms: 5,
    bathrooms: 6,
    sqft: "8,500",
    type: "Villa",
    developer: "Emaar Properties",
    completion: "Q4 2024",
    features: ["Private Beach Access", "Smart Home", "Infinity Pool"],
    description: "Experience the epitome of luxury living in this stunning modern villa located on the iconic Palm Jumeirah. This architectural masterpiece combines contemporary design with world-class amenities, offering an unparalleled lifestyle in one of Dubai's most prestigious addresses. The villa features expansive living spaces, floor-to-ceiling windows with breathtaking sea views, and a private beach that epitomizes coastal luxury.",
    amenities: [
      "Private Beach Access",
      "Smart Home System",
      "Infinity Pool",
      "Private Garden",
      "Maid's Room",
      "Driver's Room",
      "Private Parking (4 cars)",
      "24/7 Security",
      "Gym",
      "Steam & Sauna",
      "Built-in Wardrobes",
      "Central A/C",
    ],
    paymentPlan: "30% on booking, 40% during construction, 30% on handover",
    contact: {
      phone: "+971 4 123 4567",
      email: "sales@alkhailrealestate.ae",
      whatsapp: "+971 50 123 4567",
    },
  },
  {
    id: 2,
    slug: "penthouse-skyline-view-downtown",
    title: "Penthouse with Skyline View",
    location: "Downtown Dubai",
    price: "AED 8,900,000",
    image: property2,
    images: [property2, property6, property1],
    bedrooms: 4,
    bathrooms: 5,
    sqft: "5,200",
    type: "Penthouse",
    developer: "Dubai Properties",
    completion: "Ready to Move",
    features: ["Burj Khalifa View", "Private Elevator", "Rooftop Terrace"],
    description: "This exclusive penthouse offers unobstructed views of the Burj Khalifa and Downtown Dubai skyline. Located in the heart of the city, this residence features a private elevator, expansive rooftop terrace, and luxury finishes throughout. The open-plan living spaces are designed for entertaining, while the master suite offers a private sanctuary with spa-like amenities.",
    amenities: [
      "Burj Khalifa View",
      "Private Elevator",
      "Rooftop Terrace",
      "Smart Home System",
      "Italian Kitchen",
      "Built-in Wardrobes",
      "Maid's Room",
      "Study Room",
      "Private Parking (3 cars)",
      "Concierge Service",
      "Gym & Pool Access",
      "Central A/C",
    ],
    paymentPlan: "Ready to move - Flexible payment options available",
    contact: {
      phone: "+971 4 123 4567",
      email: "sales@alkhailrealestate.ae",
      whatsapp: "+971 50 123 4567",
    },
  },
  {
    id: 3,
    slug: "beachfront-villa-jbr",
    title: "Beachfront Villa",
    location: "Jumeirah Beach Residence",
    price: "AED 15,200,000",
    image: property3,
    images: [property3, property5, property2],
    bedrooms: 6,
    bathrooms: 7,
    sqft: "10,000",
    type: "Villa",
    developer: "Nakheel",
    completion: "Ready to Move",
    features: ["Private Marina Berth", "Cinema Room", "Gym & Spa"],
    description: "An extraordinary beachfront villa offering direct beach access and a private marina berth. This palatial residence features a home cinema, private gym and spa, and expansive entertainment areas. With uninterrupted views of the Arabian Gulf, this property represents the pinnacle of waterfront living in Dubai.",
    amenities: [
      "Private Beach Access",
      "Private Marina Berth",
      "Home Cinema",
      "Private Gym",
      "Spa & Sauna",
      "Infinity Pool",
      "Landscaped Garden",
      "Smart Home System",
      "Elevator",
      "Maid's Quarters",
      "Driver's Room",
      "Private Parking (6 cars)",
      "24/7 Security",
      "BBQ Area",
    ],
    paymentPlan: "Ready to move - Cash or mortgage accepted",
    contact: {
      phone: "+971 4 123 4567",
      email: "sales@alkhailrealestate.ae",
      whatsapp: "+971 50 123 4567",
    },
  },
];

export const getPropertyBySlug = (slug: string): Property | undefined => {
  return properties.find(property => property.slug === slug);
};

export const getPropertyById = (id: number): Property | undefined => {
  return properties.find(property => property.id === id);
};