export interface Project {
  id: string;
  name: string;
  slug: string;
  developer: string;
  developerLogo?: string;
  location: string;
  area: string;
  image: string;
  images: string[];
  startingPrice: string;
  priceNumeric: number;
  propertyTypes: string[];
  projectStatus: "Off-plan" | "Ready" | "Upcoming";
  handoverDate: string;
  handoverYear: number;
  paymentPlan: string;
  downPayment: string;
  bedrooms: number[];
  minSize: number;
  maxSize: number;
  totalUnits: number;
  availableUnits: number;
  roi: string;
  roiNumeric: number;
  investmentTags: string[];
  amenities: string[];
  description: string;
  highlights: string[];
  createdAt: string;
  popularity: number;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Palm Jumeirah Residences",
    slug: "palm-jumeirah-residences",
    developer: "Emaar Properties",
    location: "Palm Jumeirah",
    area: "Palm Jumeirah",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"
    ],
    startingPrice: "AED 2,500,000",
    priceNumeric: 2500000,
    propertyTypes: ["Apartment", "Penthouse"],
    projectStatus: "Ready",
    handoverDate: "Ready to Move",
    handoverYear: 2024,
    paymentPlan: "60/40",
    downPayment: "20%",
    bedrooms: [1, 2, 3, 4],
    minSize: 850,
    maxSize: 4500,
    totalUnits: 250,
    availableUnits: 45,
    roi: "7.5%",
    roiNumeric: 7.5,
    investmentTags: ["Golden Visa", "Waterfront", "High ROI"],
    amenities: ["Private Beach", "Infinity Pool", "Gym", "Spa", "Concierge"],
    description: "Luxury waterfront living on the iconic Palm Jumeirah with stunning sea views.",
    highlights: ["Beachfront location", "World-class amenities", "High rental yields"],
    createdAt: "2024-01-15",
    popularity: 95
  },
  {
    id: "2",
    name: "Downtown Views Tower",
    slug: "downtown-views-tower",
    developer: "Emaar Properties",
    location: "Downtown Dubai",
    area: "Downtown Dubai",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop"
    ],
    startingPrice: "AED 1,800,000",
    priceNumeric: 1800000,
    propertyTypes: ["Apartment", "Penthouse"],
    projectStatus: "Off-plan",
    handoverDate: "Q4 2026",
    handoverYear: 2026,
    paymentPlan: "80/20",
    downPayment: "10%",
    bedrooms: [1, 2, 3],
    minSize: 650,
    maxSize: 2800,
    totalUnits: 400,
    availableUnits: 180,
    roi: "8.2%",
    roiNumeric: 8.2,
    investmentTags: ["Golden Visa", "High ROI", "Luxury"],
    amenities: ["Burj Khalifa View", "Pool", "Gym", "Kids Play Area", "Business Center"],
    description: "Premium apartments with breathtaking views of Burj Khalifa and Dubai Fountain.",
    highlights: ["Iconic location", "Premium finishes", "Strong capital appreciation"],
    createdAt: "2024-03-01",
    popularity: 92
  },
  {
    id: "3",
    name: "Dubai Marina Heights",
    slug: "dubai-marina-heights",
    developer: "Damac Properties",
    location: "Dubai Marina",
    area: "Dubai Marina",
    image: "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=800&h=600&fit=crop"
    ],
    startingPrice: "AED 1,200,000",
    priceNumeric: 1200000,
    propertyTypes: ["Apartment", "Studio"],
    projectStatus: "Off-plan",
    handoverDate: "Q2 2025",
    handoverYear: 2025,
    paymentPlan: "70/30",
    downPayment: "15%",
    bedrooms: [0, 1, 2],
    minSize: 450,
    maxSize: 1800,
    totalUnits: 550,
    availableUnits: 220,
    roi: "9.1%",
    roiNumeric: 9.1,
    investmentTags: ["High ROI", "Waterfront"],
    amenities: ["Marina View", "Pool", "Gym", "Retail", "Restaurants"],
    description: "Modern living in the heart of Dubai Marina with stunning waterfront views.",
    highlights: ["Prime marina location", "High rental demand", "Flexible payment"],
    createdAt: "2024-02-10",
    popularity: 88
  },
  {
    id: "4",
    name: "Emirates Hills Estate",
    slug: "emirates-hills-estate",
    developer: "Emaar Properties",
    location: "Emirates Hills",
    area: "Emirates Hills",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"
    ],
    startingPrice: "AED 25,000,000",
    priceNumeric: 25000000,
    propertyTypes: ["Villa"],
    projectStatus: "Ready",
    handoverDate: "Ready to Move",
    handoverYear: 2024,
    paymentPlan: "Cash Only",
    downPayment: "100%",
    bedrooms: [5, 6, 7],
    minSize: 8000,
    maxSize: 25000,
    totalUnits: 50,
    availableUnits: 8,
    roi: "4.5%",
    roiNumeric: 4.5,
    investmentTags: ["Golden Visa", "Luxury", "Golf Course"],
    amenities: ["Golf Course View", "Private Pool", "Tennis Court", "Garden", "Security"],
    description: "Ultra-luxury villas in Dubai's most prestigious gated community.",
    highlights: ["Exclusive community", "World-class golf course", "Ultimate privacy"],
    createdAt: "2023-11-20",
    popularity: 78
  },
  {
    id: "5",
    name: "Business Bay Executive Towers",
    slug: "business-bay-executive-towers",
    developer: "Dubai Properties",
    location: "Business Bay",
    area: "Business Bay",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
    ],
    startingPrice: "AED 950,000",
    priceNumeric: 950000,
    propertyTypes: ["Apartment", "Office"],
    projectStatus: "Ready",
    handoverDate: "Ready to Move",
    handoverYear: 2024,
    paymentPlan: "Flexible",
    downPayment: "25%",
    bedrooms: [0, 1, 2],
    minSize: 400,
    maxSize: 2000,
    totalUnits: 800,
    availableUnits: 150,
    roi: "8.8%",
    roiNumeric: 8.8,
    investmentTags: ["High ROI", "Commercial"],
    amenities: ["Canal View", "Metro Access", "Retail", "Gym", "Business Center"],
    description: "Premium commercial and residential tower in the heart of Business Bay.",
    highlights: ["Metro connected", "High rental yields", "Business hub location"],
    createdAt: "2024-01-05",
    popularity: 85
  },
  {
    id: "6",
    name: "Arabian Ranches Villas III",
    slug: "arabian-ranches-villas-iii",
    developer: "Emaar Properties",
    location: "Arabian Ranches",
    area: "Arabian Ranches",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop"
    ],
    startingPrice: "AED 3,200,000",
    priceNumeric: 3200000,
    propertyTypes: ["Villa", "Townhouse"],
    projectStatus: "Off-plan",
    handoverDate: "Q1 2026",
    handoverYear: 2026,
    paymentPlan: "60/40",
    downPayment: "10%",
    bedrooms: [3, 4, 5],
    minSize: 2500,
    maxSize: 6000,
    totalUnits: 300,
    availableUnits: 120,
    roi: "6.2%",
    roiNumeric: 6.2,
    investmentTags: ["Family Living", "Golf Course"],
    amenities: ["Golf Course", "Community Pool", "Parks", "Schools", "Retail"],
    description: "Family-friendly community with spacious villas and world-class amenities.",
    highlights: ["Gated community", "Excellent schools nearby", "Green spaces"],
    createdAt: "2024-02-28",
    popularity: 82
  },
  {
    id: "7",
    name: "JBR Beachfront Residences",
    slug: "jbr-beachfront-residences",
    developer: "Meraas",
    location: "Jumeirah Beach Residence",
    area: "JBR",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop"
    ],
    startingPrice: "AED 2,100,000",
    priceNumeric: 2100000,
    propertyTypes: ["Apartment"],
    projectStatus: "Ready",
    handoverDate: "Ready to Move",
    handoverYear: 2024,
    paymentPlan: "50/50",
    downPayment: "50%",
    bedrooms: [1, 2, 3],
    minSize: 750,
    maxSize: 3200,
    totalUnits: 200,
    availableUnits: 35,
    roi: "7.8%",
    roiNumeric: 7.8,
    investmentTags: ["Waterfront", "High ROI", "Tourism Hub"],
    amenities: ["Beach Access", "Pool", "Gym", "Restaurants", "Retail"],
    description: "Premium beachfront apartments in Dubai's most vibrant lifestyle destination.",
    highlights: ["Direct beach access", "The Walk promenade", "High tourist demand"],
    createdAt: "2023-12-15",
    popularity: 90
  },
  {
    id: "8",
    name: "Dubai Hills Mansion Collection",
    slug: "dubai-hills-mansion-collection",
    developer: "Emaar Properties",
    location: "Dubai Hills Estate",
    area: "Dubai Hills",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
    ],
    startingPrice: "AED 8,500,000",
    priceNumeric: 8500000,
    propertyTypes: ["Villa"],
    projectStatus: "Off-plan",
    handoverDate: "Q3 2025",
    handoverYear: 2025,
    paymentPlan: "40/60",
    downPayment: "20%",
    bedrooms: [4, 5, 6],
    minSize: 4000,
    maxSize: 12000,
    totalUnits: 100,
    availableUnits: 45,
    roi: "5.8%",
    roiNumeric: 5.8,
    investmentTags: ["Golden Visa", "Luxury", "Golf Course"],
    amenities: ["Golf Course", "Private Pool", "Garden", "Smart Home", "Security"],
    description: "Exclusive mansions overlooking the championship golf course.",
    highlights: ["Golf course frontage", "Premium community", "Excellent connectivity"],
    createdAt: "2024-03-10",
    popularity: 87
  },
  {
    id: "9",
    name: "Creek Harbour Tower",
    slug: "creek-harbour-tower",
    developer: "Emaar Properties",
    location: "Dubai Creek Harbour",
    area: "Creek Harbour",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop"
    ],
    startingPrice: "AED 1,400,000",
    priceNumeric: 1400000,
    propertyTypes: ["Apartment"],
    projectStatus: "Off-plan",
    handoverDate: "Q4 2025",
    handoverYear: 2025,
    paymentPlan: "80/20",
    downPayment: "10%",
    bedrooms: [1, 2, 3],
    minSize: 600,
    maxSize: 2500,
    totalUnits: 450,
    availableUnits: 200,
    roi: "8.5%",
    roiNumeric: 8.5,
    investmentTags: ["High ROI", "Waterfront", "Emerging Area"],
    amenities: ["Creek View", "Pool", "Gym", "Parks", "Retail"],
    description: "Modern apartments in Dubai's newest waterfront destination near Creek Tower.",
    highlights: ["Future landmark location", "Strong appreciation potential", "Waterfront living"],
    createdAt: "2024-02-20",
    popularity: 84
  },
  {
    id: "10",
    name: "DIFC Living Residences",
    slug: "difc-living-residences",
    developer: "Brookfield",
    location: "DIFC",
    area: "DIFC",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
    ],
    startingPrice: "AED 3,500,000",
    priceNumeric: 3500000,
    propertyTypes: ["Apartment", "Penthouse"],
    projectStatus: "Upcoming",
    handoverDate: "Q2 2027",
    handoverYear: 2027,
    paymentPlan: "50/50",
    downPayment: "25%",
    bedrooms: [1, 2, 3, 4],
    minSize: 800,
    maxSize: 5000,
    totalUnits: 180,
    availableUnits: 180,
    roi: "6.8%",
    roiNumeric: 6.8,
    investmentTags: ["Golden Visa", "Luxury", "Commercial Hub"],
    amenities: ["DIFC Access", "Concierge", "Pool", "Gym", "Valet"],
    description: "Ultra-premium residences in Dubai's financial district.",
    highlights: ["Prime DIFC location", "Business executive living", "Tax-free zone"],
    createdAt: "2024-03-15",
    popularity: 75
  },
  {
    id: "11",
    name: "Bluewaters Island Residences",
    slug: "bluewaters-island-residences",
    developer: "Meraas",
    location: "Bluewaters Island",
    area: "Bluewaters",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
    ],
    startingPrice: "AED 4,200,000",
    priceNumeric: 4200000,
    propertyTypes: ["Apartment", "Penthouse"],
    projectStatus: "Ready",
    handoverDate: "Ready to Move",
    handoverYear: 2024,
    paymentPlan: "Cash/Mortgage",
    downPayment: "25%",
    bedrooms: [1, 2, 3, 4],
    minSize: 900,
    maxSize: 6000,
    totalUnits: 150,
    availableUnits: 25,
    roi: "6.5%",
    roiNumeric: 6.5,
    investmentTags: ["Golden Visa", "Waterfront", "Luxury", "Tourism Hub"],
    amenities: ["Ain Dubai View", "Private Beach", "Pool", "Gym", "Retail"],
    description: "Exclusive island living with views of Ain Dubai, the world's largest observation wheel.",
    highlights: ["Iconic location", "Island exclusivity", "World-class dining"],
    createdAt: "2023-10-01",
    popularity: 89
  },
  {
    id: "12",
    name: "Sobha Hartland Greens",
    slug: "sobha-hartland-greens",
    developer: "Sobha Realty",
    location: "MBR City",
    area: "Mohammed Bin Rashid City",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop"
    ],
    startingPrice: "AED 1,600,000",
    priceNumeric: 1600000,
    propertyTypes: ["Apartment", "Townhouse"],
    projectStatus: "Off-plan",
    handoverDate: "Q1 2026",
    handoverYear: 2026,
    paymentPlan: "80/20",
    downPayment: "10%",
    bedrooms: [1, 2, 3],
    minSize: 700,
    maxSize: 3500,
    totalUnits: 350,
    availableUnits: 150,
    roi: "7.2%",
    roiNumeric: 7.2,
    investmentTags: ["Green Living", "Family Living"],
    amenities: ["Lagoon", "Parks", "School", "Gym", "Retail"],
    description: "Sustainable living in a lush green community with crystal lagoons.",
    highlights: ["Eco-friendly design", "Crystal lagoon", "Green certified"],
    createdAt: "2024-01-25",
    popularity: 80
  }
];

// Filter options
export const areas = [
  "Palm Jumeirah",
  "Downtown Dubai",
  "Dubai Marina",
  "Emirates Hills",
  "Business Bay",
  "Arabian Ranches",
  "JBR",
  "Dubai Hills",
  "Creek Harbour",
  "DIFC",
  "Bluewaters",
  "Mohammed Bin Rashid City"
];

export const developers = [
  "Emaar Properties",
  "Damac Properties",
  "Dubai Properties",
  "Meraas",
  "Nakheel",
  "Sobha Realty",
  "Brookfield"
];

export const propertyTypes = [
  "Apartment",
  "Villa",
  "Townhouse",
  "Penthouse",
  "Studio",
  "Office"
];

export const projectStatuses = ["Off-plan", "Ready", "Upcoming"];

export const investmentTagOptions = [
  "Golden Visa",
  "High ROI",
  "Waterfront",
  "Luxury",
  "Golf Course",
  "Family Living",
  "Commercial",
  "Tourism Hub",
  "Emerging Area",
  "Green Living"
];

export const handoverYears = [2024, 2025, 2026, 2027];

export const bedroomOptions = [0, 1, 2, 3, 4, 5, 6, 7];
