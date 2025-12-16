export interface Testimonial {
  id: string;
  clientName: string;
  clientCountry: string;
  rating: number;
  quote: string;
  date: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  linkedin: string;
  instagram?: string;
  whatsapp: string;
  email: string;
  experience: string;
  properties: string;
  rating: string;
  bio: string;
  languages: string[];
  awards: {
    year: string;
    title: string;
    description: string;
  }[];
  certifications: string[];
  expertise: string[];
  projects: {
    id: string;
    title: string;
    type: string;
    location: string;
    status: string;
    price: string;
    image: string;
    year: string;
  }[];
  // New fields
  totalTransactionValue: string;
  clientSatisfaction: string;
  reraLicense: string;
  companyAffiliation: string;
  areasOfExpertise: string[];
  services: Service[];
  testimonials: Testimonial[];
  uniqueValueProposition: string;
}

export const agents: Agent[] = [
  {
    id: "hadi-dehghan",
    name: "Hadi Dehghan",
    role: "CEO & Senior Property Consultant",
    specialty: "Luxury Property Investment & Multilingual Service",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com/in/hadidehghan",
    instagram: "https://instagram.com/hadidehghan",
    whatsapp: "+971501234567",
    email: "hadi@alkhail.com",
    experience: "18+ Years",
    properties: "500+",
    rating: "4.9",
    totalTransactionValue: "AED 2.5B+",
    clientSatisfaction: "98%",
    reraLicense: "BRN 12345",
    companyAffiliation: "Alkhail Real Estate",
    uniqueValueProposition: "With fluency in 4 languages and 18+ years of market expertise, I provide personalized service that bridges cultural gaps and delivers exceptional results for international investors seeking premium Dubai properties.",
    bio: "With over 18 years of experience in Dubai's luxury real estate market, Hadi has established himself as a trusted advisor for high-net-worth individuals seeking premium properties. His multilingual capabilities and deep market knowledge have helped countless clients find their dream homes and investment opportunities.",
    languages: ["English", "Arabic", "Persian", "French"],
    areasOfExpertise: ["Downtown Dubai", "Palm Jumeirah", "Emirates Hills", "Dubai Marina", "Business Bay", "Dubai Hills Estate"],
    awards: [
      {
        year: "2023",
        title: "Dubai Real Estate Excellence Award",
        description: "Recognized for outstanding contribution to luxury property market"
      },
      {
        year: "2022",
        title: "Top CEO of the Year",
        description: "Leading innovation in real estate services"
      },
      {
        year: "2021",
        title: "Best Luxury Property Consultant",
        description: "Excellence in high-value property transactions"
      },
      {
        year: "2020",
        title: "International Investor's Choice",
        description: "Preferred consultant for global investors"
      }
    ],
    certifications: [
      "RERA Certified Agent",
      "Luxury Property Specialist",
      "Investment Advisory Certification",
      "International Real Estate Professional",
      "Golden Visa Specialist"
    ],
    expertise: ["Luxury Villas", "Penthouses", "Investment Properties", "Off-Plan Properties"],
    services: [
      {
        id: "1",
        title: "Property Buying Consultation",
        description: "Expert guidance through the entire property acquisition process, from search to closing.",
        icon: "Home"
      },
      {
        id: "2",
        title: "Investment Advisory",
        description: "Strategic investment planning with ROI analysis and market trend insights.",
        icon: "TrendingUp"
      },
      {
        id: "3",
        title: "Off-Plan Sales",
        description: "Access to exclusive off-plan projects with developer partnerships and payment plans.",
        icon: "Building"
      },
      {
        id: "4",
        title: "Property Resale",
        description: "Professional marketing and negotiation for optimal resale value.",
        icon: "Repeat"
      },
      {
        id: "5",
        title: "Rental & Leasing",
        description: "Comprehensive rental management and tenant placement services.",
        icon: "Key"
      },
      {
        id: "6",
        title: "Golden Visa Assistance",
        description: "Complete support for Golden Visa eligibility through property investment.",
        icon: "Award"
      }
    ],
    testimonials: [
      {
        id: "1",
        clientName: "James Morrison",
        clientCountry: "United Kingdom",
        rating: 5,
        quote: "Hadi's expertise and professionalism made our Dubai property investment seamless. His market knowledge is unparalleled, and he guided us through every step with patience and clarity.",
        date: "2024"
      },
      {
        id: "2",
        clientName: "Sophie Chen",
        clientCountry: "Singapore",
        rating: 5,
        quote: "Working with Hadi was an absolute pleasure. He found us the perfect penthouse in Downtown Dubai within our budget and negotiated an excellent deal.",
        date: "2024"
      },
      {
        id: "3",
        clientName: "Mohammed Al-Rashid",
        clientCountry: "Saudi Arabia",
        rating: 5,
        quote: "Hadi's multilingual skills and cultural understanding made the entire process comfortable. Highly recommend for any serious investor.",
        date: "2023"
      },
      {
        id: "4",
        clientName: "Elena Petrova",
        clientCountry: "Russia",
        rating: 5,
        quote: "Professional, responsive, and extremely knowledgeable. Hadi helped us secure our dream villa on Palm Jumeirah.",
        date: "2023"
      }
    ],
    projects: [
      {
        id: "1",
        title: "Palm Jumeirah Villa",
        type: "Villa",
        location: "Palm Jumeirah",
        status: "Sold",
        price: "AED 45M",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
        year: "2023"
      },
      {
        id: "2",
        title: "Downtown Penthouse",
        type: "Penthouse",
        location: "Downtown Dubai",
        status: "Sold",
        price: "AED 28M",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
        year: "2023"
      },
      {
        id: "3",
        title: "Emirates Hills Mansion",
        type: "Villa",
        location: "Emirates Hills",
        status: "Active",
        price: "AED 62M",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        year: "2024"
      },
      {
        id: "4",
        title: "Burj Khalifa Residence",
        type: "Apartment",
        location: "Downtown Dubai",
        status: "Sold",
        price: "AED 18M",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        year: "2022"
      },
      {
        id: "5",
        title: "Dubai Marina Penthouse",
        type: "Penthouse",
        location: "Dubai Marina",
        status: "Active",
        price: "AED 22M",
        image: "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=800&h=600&fit=crop",
        year: "2024"
      },
      {
        id: "6",
        title: "Business Bay Tower Unit",
        type: "Apartment",
        location: "Business Bay",
        status: "Sold",
        price: "AED 8M",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        year: "2023"
      }
    ]
  },
  {
    id: "nasser-dehghan",
    name: "Nasser Dehghan",
    role: "Managing Director",
    specialty: "Strategic Sales & Leasing Expert",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com/in/nasserdehghan",
    instagram: "https://instagram.com/nasserdehghan",
    whatsapp: "+971501234568",
    email: "nasser@alkhail.com",
    experience: "15+ Years",
    properties: "450+",
    rating: "4.8",
    totalTransactionValue: "AED 1.8B+",
    clientSatisfaction: "97%",
    reraLicense: "BRN 12346",
    companyAffiliation: "Alkhail Real Estate",
    uniqueValueProposition: "I combine analytical precision with strategic thinking to optimize every property transaction, ensuring clients achieve maximum value whether buying, selling, or leasing.",
    bio: "Nasser brings strategic expertise to complex property transactions. His analytical approach and market insights have helped shape successful investment strategies for numerous clients across residential and commercial sectors.",
    languages: ["English", "Arabic", "Persian"],
    areasOfExpertise: ["Business Bay", "DIFC", "Dubai Marina", "JLT", "Downtown Dubai"],
    awards: [
      {
        year: "2023",
        title: "Strategic Sales Leader Award",
        description: "Excellence in commercial property transactions"
      },
      {
        year: "2022",
        title: "Client Satisfaction Award",
        description: "Highest rated agent for customer service"
      }
    ],
    certifications: [
      "RERA Certified Agent",
      "Commercial Property Specialist",
      "Leasing Expert Certification"
    ],
    expertise: ["Commercial Properties", "Leasing", "Investment Analysis", "Mixed-Use Developments"],
    services: [
      {
        id: "1",
        title: "Property Buying Consultation",
        description: "Expert guidance through the entire property acquisition process.",
        icon: "Home"
      },
      {
        id: "2",
        title: "Investment Advisory",
        description: "Strategic investment planning with ROI analysis.",
        icon: "TrendingUp"
      },
      {
        id: "3",
        title: "Commercial Leasing",
        description: "Professional commercial property leasing services.",
        icon: "Building"
      }
    ],
    testimonials: [
      {
        id: "1",
        clientName: "Robert Williams",
        clientCountry: "USA",
        rating: 5,
        quote: "Nasser's strategic approach helped us secure the perfect commercial space in Business Bay. Exceptional service!",
        date: "2024"
      },
      {
        id: "2",
        clientName: "Ahmed Al-Sayed",
        clientCountry: "UAE",
        rating: 5,
        quote: "Professional and knowledgeable. Nasser made our leasing process smooth and efficient.",
        date: "2023"
      }
    ],
    projects: [
      {
        id: "5",
        title: "Business Bay Tower",
        type: "Commercial",
        location: "Business Bay",
        status: "Leased",
        price: "AED 12M",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        year: "2023"
      },
      {
        id: "6",
        title: "Marina Residence",
        type: "Apartment",
        location: "Dubai Marina",
        status: "Sold",
        price: "AED 8M",
        image: "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=800&h=600&fit=crop",
        year: "2023"
      }
    ]
  },
  {
    id: "mohanned-mohamed",
    name: "Mohanned Mohamed",
    role: "Senior Property Consultant",
    specialty: "Client Success & Market Analysis Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com/in/mohannedmohamed",
    whatsapp: "+971501234569",
    email: "mohanned@alkhail.com",
    experience: "10+ Years",
    properties: "300+",
    rating: "4.9",
    totalTransactionValue: "AED 800M+",
    clientSatisfaction: "99%",
    reraLicense: "BRN 12347",
    companyAffiliation: "Alkhail Real Estate",
    uniqueValueProposition: "I prioritize understanding each client's unique needs, combining data-driven market analysis with personalized service to ensure every decision is well-informed.",
    bio: "Known for his exceptional client service and deep market analysis skills, Mohanned ensures every client makes informed decisions backed by comprehensive data and insights.",
    languages: ["English", "Arabic"],
    areasOfExpertise: ["JBR", "Dubai Marina", "Palm Jumeirah", "Downtown Dubai"],
    awards: [
      {
        year: "2023",
        title: "Rising Star Award",
        description: "Outstanding performance in client relations"
      }
    ],
    certifications: [
      "RERA Certified Agent",
      "Market Analysis Specialist",
      "Client Relations Expert"
    ],
    expertise: ["Market Analysis", "First-Time Buyers", "Residential Properties", "Customer Service"],
    services: [
      {
        id: "1",
        title: "Property Buying Consultation",
        description: "Expert guidance for first-time buyers and investors.",
        icon: "Home"
      },
      {
        id: "2",
        title: "Market Analysis",
        description: "Comprehensive market reports and trend analysis.",
        icon: "TrendingUp"
      }
    ],
    testimonials: [
      {
        id: "1",
        clientName: "Sarah Johnson",
        clientCountry: "Australia",
        rating: 5,
        quote: "Mohanned made buying our first Dubai property stress-free. His market insights were invaluable!",
        date: "2024"
      }
    ],
    projects: [
      {
        id: "7",
        title: "JBR Beachfront Apartment",
        type: "Apartment",
        location: "JBR",
        status: "Sold",
        price: "AED 5M",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
        year: "2023"
      }
    ]
  },
  {
    id: "ahmed-hassan",
    name: "Ahmed Hassan",
    role: "Property Consultant",
    specialty: "Residential & Commercial Property Expert",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com/in/ahmedhassan",
    whatsapp: "+971501234570",
    email: "ahmed@alkhail.com",
    experience: "8+ Years",
    properties: "250+",
    rating: "4.8",
    totalTransactionValue: "AED 600M+",
    clientSatisfaction: "96%",
    reraLicense: "BRN 12348",
    companyAffiliation: "Alkhail Real Estate",
    uniqueValueProposition: "My versatile expertise across residential and commercial sectors allows me to provide comprehensive solutions for diverse client portfolios.",
    bio: "Ahmed specializes in both residential and commercial properties, offering versatile solutions for diverse client needs.",
    languages: ["English", "Arabic"],
    areasOfExpertise: ["Arabian Ranches", "Dubai Hills", "Motor City", "Sports City"],
    awards: [
      {
        year: "2022",
        title: "Best New Agent",
        description: "Exceptional performance in first 5 years"
      }
    ],
    certifications: [
      "RERA Certified Agent",
      "Residential Property Specialist"
    ],
    expertise: ["Residential", "Commercial", "New Developments"],
    services: [
      {
        id: "1",
        title: "Property Buying Consultation",
        description: "Expert guidance for residential and commercial properties.",
        icon: "Home"
      }
    ],
    testimonials: [
      {
        id: "1",
        clientName: "Michael Brown",
        clientCountry: "Canada",
        rating: 5,
        quote: "Ahmed found us the perfect family villa in Arabian Ranches. Highly professional!",
        date: "2023"
      }
    ],
    projects: [
      {
        id: "8",
        title: "Arabian Ranches Villa",
        type: "Villa",
        location: "Arabian Ranches",
        status: "Sold",
        price: "AED 7M",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop",
        year: "2023"
      }
    ]
  },
  {
    id: "sara-al-mansouri",
    name: "Sara Al-Mansouri",
    role: "Luxury Property Specialist",
    specialty: "High-End Properties & Investor Relations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com/in/saraamansouri",
    instagram: "https://instagram.com/saraamansouri",
    whatsapp: "+971501234571",
    email: "sara@alkhail.com",
    experience: "12+ Years",
    properties: "380+",
    rating: "4.9",
    totalTransactionValue: "AED 1.5B+",
    clientSatisfaction: "98%",
    reraLicense: "BRN 12349",
    companyAffiliation: "Alkhail Real Estate",
    uniqueValueProposition: "I specialize in curating exceptional luxury properties for discerning clients, with a focus on exclusive access and white-glove service.",
    bio: "Sara specializes in ultra-luxury properties and maintains strong relationships with high-net-worth investors globally.",
    languages: ["English", "Arabic", "French"],
    areasOfExpertise: ["Palm Jumeirah", "Emirates Hills", "Dubai Hills", "Bluewaters Island"],
    awards: [
      {
        year: "2023",
        title: "Luxury Property Expert",
        description: "Top performer in luxury segment"
      }
    ],
    certifications: [
      "RERA Certified Agent",
      "Luxury Property Certification",
      "International Investor Relations"
    ],
    expertise: ["Luxury Estates", "Investment Properties", "VIP Clients"],
    services: [
      {
        id: "1",
        title: "Luxury Property Acquisition",
        description: "Exclusive access to premium and off-market properties.",
        icon: "Home"
      },
      {
        id: "2",
        title: "VIP Concierge Service",
        description: "White-glove service for high-net-worth clients.",
        icon: "Award"
      }
    ],
    testimonials: [
      {
        id: "1",
        clientName: "Victoria Sterling",
        clientCountry: "United Kingdom",
        rating: 5,
        quote: "Sara's attention to detail and exclusive market access helped us find our dream waterfront villa.",
        date: "2024"
      }
    ],
    projects: [
      {
        id: "9",
        title: "Dubai Hills Mansion",
        type: "Villa",
        location: "Dubai Hills",
        status: "Active",
        price: "AED 35M",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        year: "2024"
      }
    ]
  },
  {
    id: "omar-abdullah",
    name: "Omar Abdullah",
    role: "Investment Consultant",
    specialty: "ROI Analysis & Portfolio Management",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com/in/omarabdullah",
    whatsapp: "+971501234572",
    email: "omar@alkhail.com",
    experience: "14+ Years",
    properties: "420+",
    rating: "4.8",
    totalTransactionValue: "AED 1.2B+",
    clientSatisfaction: "97%",
    reraLicense: "BRN 12350",
    companyAffiliation: "Alkhail Real Estate",
    uniqueValueProposition: "I help investors maximize returns through strategic portfolio management and data-driven investment decisions.",
    bio: "Omar provides expert investment analysis and portfolio management for real estate investors seeking optimal returns.",
    languages: ["English", "Arabic"],
    areasOfExpertise: ["Business Bay", "Downtown Dubai", "DIFC", "Dubai Marina"],
    awards: [
      {
        year: "2023",
        title: "Investment Advisor of the Year",
        description: "Excellence in ROI optimization"
      }
    ],
    certifications: [
      "RERA Certified Agent",
      "Investment Analysis Certification",
      "Portfolio Management Expert"
    ],
    expertise: ["Investment Analysis", "ROI Optimization", "Portfolio Management"],
    services: [
      {
        id: "1",
        title: "Investment Advisory",
        description: "Strategic investment planning with ROI analysis.",
        icon: "TrendingUp"
      },
      {
        id: "2",
        title: "Portfolio Management",
        description: "Comprehensive real estate portfolio optimization.",
        icon: "Building"
      }
    ],
    testimonials: [
      {
        id: "1",
        clientName: "David Chen",
        clientCountry: "Hong Kong",
        rating: 5,
        quote: "Omar's investment strategies have consistently delivered excellent returns on our Dubai portfolio.",
        date: "2024"
      }
    ],
    projects: [
      {
        id: "10",
        title: "Investment Portfolio - Business Bay",
        type: "Commercial",
        location: "Business Bay",
        status: "Active",
        price: "AED 25M",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
        year: "2024"
      }
    ]
  }
];
